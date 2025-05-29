import { v2 as cloudinary } from "cloudinary";
import { envs } from "../../config/envs";
import { prismaClient } from "../../data/prisma/init";

cloudinary.config({
  cloud_name: envs.CLOUDINARY_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
});

interface ImageInput {
  publicId?: string | undefined;
  url: string;
  altText?: string;
}

interface ImageOutput {
  url: string;
  altText?: string;
  publicId?: string;
}

export class ImageService {
  private isBase64Image(url: string): boolean {
    return url.startsWith("data:image/");
  }

  private async uploadToCloudinary(
    base64: string
  ): Promise<{ secure_url: string; public_id: string }> {
    const result = await cloudinary.uploader.upload(base64, {
      folder: "notes", // puedes cambiar esto si quieres
    });
    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  }

  public async processImages(images: ImageInput[]): Promise<ImageOutput[]> {
    const processedImages: ImageOutput[] = [];

    for (const image of images) {
      if (this.isBase64Image(image.url)) {
        const uploadResult = await this.uploadToCloudinary(image.url);
        processedImages.push({
          url: uploadResult.secure_url,
          altText: image.altText,
          publicId: uploadResult.public_id, // 👈 Añadir el public_id
        });
      } else {
        processedImages.push({
          url: image.url,
          altText: image.altText,
          publicId: image.publicId, // 👈 No hay public_id para URLs externas
        });
      }
    }

    return processedImages;
  }

  /** 👇 Método de limpieza mensual */
  public async cleanOrphanImages() {
    const orphanPublicIds: string[] = [];

    // 1. Traer todos los public_id válidos en tu base de datos
    const dbImages = await prismaClient.noteImage.findMany({
      where: { public_id: { not: null } },
      select: { public_id: true },
    });

    const dbPublicIds = new Set(dbImages.map((img) => img.public_id!));

    // 2. Traer todos los recursos de Cloudinary de la carpeta 'notes'
    let nextCursor: string | undefined = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "notes/",
        max_results: 100,
        next_cursor: nextCursor,
      });

      for (const resource of result.resources) {
        const publicId = resource.public_id;
        if (!dbPublicIds.has(publicId)) {
          orphanPublicIds.push(publicId);
        }
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    // 3. Borrar imágenes huérfanas
    for (const publicId of orphanPublicIds) {
      await cloudinary.uploader.destroy(publicId);
      console.log(`🗑️ Imagen eliminada: ${publicId}`);
    }

    console.log(
      `✅ Limpieza completada. Total eliminadas: ${orphanPublicIds.length}`
    );
  }
}
