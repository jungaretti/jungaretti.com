import type { ImageSource } from "./ImageSource";

export interface Image {
  id: string;
  src: ImageSource;
  alt: string;
}

export interface Photo extends Image {
  title: string;
  description: string;
  location?: string;
  date?: Date;
}
