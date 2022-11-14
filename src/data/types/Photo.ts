import type { Image } from "./Image";

export interface Photo extends Image {
  location?: string;
  date?: Date;
}
