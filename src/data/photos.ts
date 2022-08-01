export class PhotoSource {
  public compressed: string;
  public original: string;
}

export class Photo {
  public id: string;
  public src: PhotoSource;
  public alt?: string;
  public title?: string;
  public description?: string;
  public location?: string;
  public date?: string;
  public isFavorite?: boolean;
}

export const photos: Photo[] = [
  {
    id: "raggi-del-pianeta",
    alt: "Golden sunset over a snowy mountain",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/journal/raggi-del-pianeta-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/journal/raggi-del-pianeta.jpg",
    },
    title: "Raggi del Pianeta",
    location: "North Cascades National Park",
    date: "January 2021",
    isFavorite: true,
  },
  {
    id: "new-horizons",
    alt: "Boat sailing in front of sunset over the Olympic Mountains",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/journal/new-horizons-preview.jpg",
      original: "https://badger.blob.core.windows.net/journal/new-horizons.jpg",
    },
    title: "New Horizons",
    location: "Golden Gardens Park",
    date: "September 2021",
    isFavorite: true,
  },
  {
    id: "riveder-le-stelle",
    alt: "Glimpse of the Milky Way hovering over the Cascades",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/journal/riveder-le-stelle-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/journal/riveder-le-stelle.jpg",
    },
    title: "Riveder le Stelle",
    location: "North Cascades National Park",
    date: "September 2021",
    isFavorite: true,
  },
  {
    id: "mio-gatto",
    alt: "Orange and white cat",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/journal/mio-gatto-preview.jpg",
      original: "https://badger.blob.core.windows.net/journal/mio-gatto.jpg",
    },
    title: "Mio Gatto",
    location: "Under the Table",
    date: "March 2015",
    isFavorite: true,
  },
];
