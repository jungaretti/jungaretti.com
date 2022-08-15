export class PhotoSource {
  public compressed: string;
  public original: string;

  constructor(compressed: string, original: string) {
    this.compressed = compressed;
    this.original = original;
  }
}

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

export const photos: Photo[] = [
  {
    id: "lone-moose",
    alt: "Mountain peak in Grand Teton National Park",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/lone-moose-preview.jpg",
      original: "https://badger.blob.core.windows.net/images/lone-moose.jpg",
    },
    title: "Lone Moose",
    location: "Grand Teton National Park",
    date: new Date("2022-07-03"),
  },
  {
    id: "wide-awake",
    alt: "Pristine view of our Galactric Center over Yellowstone National Park",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/wide-awake-preview.jpg",
      original: "https://badger.blob.core.windows.net/images/wide-awake.jpg",
    },
    title: "Wide Awake",
    location: "Yellowstone National Park",
    date: new Date("2022-07-03"),
  },
  {
    id: "raggi-del-pianeta",
    alt: "Golden sunset over a snowy mountain",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/raggi-del-pianeta-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/images/raggi-del-pianeta.jpg",
    },
    title: "Raggi del Pianeta",
    location: "North Cascades National Park",
    date: new Date("2022-01-09"),
  },
  {
    id: "new-horizons",
    alt: "Boat sailing in front of sunset over the Olympic Mountains",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/new-horizons-preview.jpg",
      original: "https://badger.blob.core.windows.net/images/new-horizons.jpg",
    },
    title: "New Horizons",
    location: "Golden Gardens Park",
    date: new Date("2021-09-24"),
  },
  {
    id: "riveder-le-stelle",
    alt: "Glimpse of the Milky Way hovering over the Cascades",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/riveder-le-stelle-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/images/riveder-le-stelle.jpg",
    },
    title: "Riveder le Stelle",
    location: "North Cascades National Park",
    date: new Date("2021-09-03"),
  },
  {
    id: "mio-gatto",
    alt: "Orange and white cat",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/images/mio-gatto-preview.jpg",
      original: "https://badger.blob.core.windows.net/images/mio-gatto.jpg",
    },
    title: "Mio Gatto",
    location: "Under the Table",
    date: new Date("2015-03-02"),
  },
];
