import { v2 as cloudinary } from "cloudinary";
import { envs } from "../../config/envs";

cloudinary.config({
  cloud_name: envs.CLOUDINARY_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
});

interface ImageInput {
  url: string;
  altText?: string;
}

interface ImageOutput {
  url: string;
  altText?: string;
}

export class ImageService {
  private isBase64Image(url: string): boolean {
    return url.startsWith("data:image/");
  }

  private async uploadToCloudinary(base64: string): Promise<string> {
    const result = await cloudinary.uploader.upload(base64, {
      folder: "notes", // puedes cambiar esto si quieres
    });
    return result.secure_url;
  }

  public async processImages(images: ImageInput[]): Promise<ImageOutput[]> {
    const processedImages: ImageOutput[] = [];

    for (const image of images) {
      const finalUrl = this.isBase64Image(image.url)
        ? await this.uploadToCloudinary(image.url)
        : image.url;

      processedImages.push({
        url: finalUrl,
        altText: image.altText,
      });
    }

    return processedImages;
  }
}
