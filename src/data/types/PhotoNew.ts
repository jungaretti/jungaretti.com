import type { PhotoSourceNew } from "./PhotoSourceNew";

export interface PhotoNew {
  id: string;
  src: PhotoSourceNew;
  alt: string;
  title: string;
  description: string;
  location?: string;
  date?: Date;
}
