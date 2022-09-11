export class HeadMeta {
  constructor(
    public title: string,
    public description: string,
    public imageSrc?: string,
    public permalinkSrc?: string
  ) {}
}

const defaultTitle = "JP Ungaretti";
const defaultDescription =
  "Developer, photographer, and cheese curd connoisseur in the Pacific Northwest. Check out my recent work or get in touch with me.";
export const defaultHeadMeta = new HeadMeta(defaultTitle, defaultDescription);
