import type { PhotoSource } from "./PhotoSource";

export interface Photo {
  id: string;
  src: PhotoSource;
  alt: string;
  title: string;
  description: string;
  location?: string;
  date?: Date;
}
