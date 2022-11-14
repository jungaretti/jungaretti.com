import type { ImageSource } from "./ImageSource";

export interface Image {
  id: string;
  src: ImageSource;
  alt: string;
  title: string;
  description: string;
}
