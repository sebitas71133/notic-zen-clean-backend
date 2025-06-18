import { v2 as cloudinary } from "cloudinary";
import { envs } from "../../config/envs";
import { prismaClient } from "../../data/prisma/init";
import axios from "axios";
import { CustomError } from "../../domain/errors/custom.error";
import { SettingService } from "./setting.service";

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
  constructor(private readonly settingService: SettingService) {}

  private isBase64Image(url: string): boolean {
    return url.startsWith("data:image/");
  }

  private async uploadToCloudinary(
    base64: string,
    folder: string
  ): Promise<{ secure_url: string; public_id: string }> {
    const result = await cloudinary.uploader.upload(base64, {
      folder: folder,
    });
    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  }

  public async processImages(
    images: ImageInput[],
    folder: string
  ): Promise<ImageOutput[]> {
    const processedImages: ImageOutput[] = [];
    const shouldModerate =
      (await this.settingService.getValue("moderateImage")) === "true";

    for (const image of images) {
      if (this.isBase64Image(image.url)) {
        const uploadResult = await this.uploadToCloudinary(image.url, folder);

        //  MODERAR ANTES DE GUARDAR

        if (shouldModerate) {
          const { isSafe, details } = await this.moderateImage(
            uploadResult.secure_url
          );

          if (!isSafe) {
            await this.deleteFromCloudinary(uploadResult.public_id); //Borrar de cloudi
            throw CustomError.badRequest(
              "Una de las imágenes contiene contenido inapropiado. Por favor, intenta con otra."
            );
          }
        }

        processedImages.push({
          url: uploadResult.secure_url,
          altText: image.altText,
          publicId: uploadResult.public_id, //  Añadir el public_id
        });
      } else {
        processedImages.push({
          url: image.url,
          altText: image.altText,
          publicId: image.publicId, //  No hay public_id para URLs externas
        });
      }
    }

    return processedImages;
  }

  /** Método de limpieza mensual */
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

  public async getAllImages(): Promise<{
    cloudinaryImagesBD: string[];
    externalImagesBD: string[];
    cloudinaryImages: string[];
  }> {
    const allImages = await prismaClient.noteImage.findMany({
      select: {
        id: true,
        url: true,
        public_id: true,
        alt_text: true,
        note_id: true,
        created_at: true,
      },
    });

    const cloudinaryImagesBD = allImages
      .filter((img) => img.public_id !== null && img.public_id !== "")
      .map((img) => img.url) as string[];

    const externalImagesBD = allImages
      .filter((img) => img.public_id === null || img.public_id === "")
      .map((img) => img.url);

    const cloudinaryImages: string[] = [];
    let nextCursor: string | undefined = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "note/",
        max_results: 100,
        next_cursor: nextCursor,
      });

      cloudinaryImages.push(...result.resources.map((r: any) => r.secure_url));
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return {
      cloudinaryImagesBD,
      externalImagesBD,
      cloudinaryImages,
    };
  }

  public async getAllSubImages(): Promise<{
    cloudinarySubImagesBD: string[];
    externalSubImagesBD: string[];
    cloudinarySubImages: string[];
  }> {
    const allSubImages = await prismaClient.subNoteImage.findMany({
      select: {
        id: true,
        url: true,
        public_id: true,
        alt_text: true,
        sub_note_id: true,
        created_at: true,
      },
    });

    const cloudinarySubImagesBD = allSubImages
      .filter((img) => img.public_id !== null && img.public_id !== "")
      .map((img) => img.url) as string[];

    const externalSubImagesBD = allSubImages
      .filter((img) => img.public_id === null || img.public_id === "")
      .map((img) => img.url);

    console.log({ allSubImages, externalSubImagesBD });

    const cloudinarySubImages: string[] = [];
    let nextCursor: string | undefined = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "subnote/", // Carpeta en cloudinary
        max_results: 100,
        next_cursor: nextCursor,
      });

      cloudinarySubImages.push(
        ...result.resources.map((r: any) => r.secure_url)
      );
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return {
      cloudinarySubImagesBD,
      externalSubImagesBD,
      cloudinarySubImages,
    };
  }

  public async cleanOrphanSubImages() {
    const orphanPublicIds: string[] = [];

    // 1. Traer todos los public_id válidos en tu base de datos
    const dbImages = await prismaClient.subNoteImage.findMany({
      where: { public_id: { not: null } },
      select: { public_id: true },
    });

    const dbPublicIds = new Set(dbImages.map((img) => img.public_id!));

    // 2. Traer todos los recursos de Cloudinary de la carpeta 'notes'
    let nextCursor: string | undefined = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "subnotes/",
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
      console.log(`🗑️ SubImagen eliminada: ${publicId}`);
    }

    console.log(
      `✅ Limpieza completada. Total eliminadas: ${orphanPublicIds.length}`
    );
  }

  public async moderateImage(imageUrl: string): Promise<any> {
    try {
      const { data } = await axios.get(envs.SIGHTENGINE_API_URL, {
        params: {
          url: imageUrl,
          models: "nudity-2.1,gore-2.0",
          api_user: envs.SIGHTENGINE_USER,
          api_secret: envs.SIGHTENGINE_SECRET,
        },
      });

      const isUnsafe = data.nudity?.raw > 0.6 || data.gore?.prob > 0.6; // ajusta el umbral según tus necesidades

      return {
        safe: !isUnsafe,
        details: data,
      };
    } catch (error) {
      console.error("Error moderating image:", error);
      return false;
    }
  }

  private async deleteFromCloudinary(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });
  }
}
