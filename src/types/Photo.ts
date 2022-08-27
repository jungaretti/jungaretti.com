import type { PhotoSource } from "./PhotoSource";

export class Photo {
  public id: string;
  public src: PhotoSource;
  public alt?: string;
  public title?: string;
  public description?: string;
  public location?: string;
  public date?: Date;

  constructor(id: string, src: PhotoSource) {
    this.id = id;
    this.src = src;
  }
}
