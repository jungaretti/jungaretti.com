export class PhotoSource {
  public compressed: string;
  public original: string;

  constructor(compressed: string, original: string) {
    this.compressed = compressed;
    this.original = original;
  }
}
