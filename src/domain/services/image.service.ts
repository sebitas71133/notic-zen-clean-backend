export interface ImageInput {
  publicId?: string | undefined;
  url: string;
  altText?: string;
}

export interface ImageOutput {
  url: string;
  altText?: string;
  publicId?: string;
}

export interface IImageService {
  processImages(images: ImageInput[], folder: string): Promise<ImageOutput[]>;

  cleanOrphanImages(): Promise<void>;

  getAllImages(): Promise<{
    cloudinaryImagesBD: string[];
    externalImagesBD: string[];
    cloudinaryImages: string[];
  }>;

  getAllSubImages(): Promise<{
    cloudinarySubImagesBD: string[];
    externalSubImagesBD: string[];
    cloudinarySubImages: string[];
  }>;

  cleanOrphanSubImages(): Promise<void>;

  moderateImage(imageUrl: string): Promise<any>;
}
