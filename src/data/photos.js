const blobBase = "https://badger.blob.core.windows.net/photos";

const blobUri = (id) => `${blobBase}/${id}.jpg`;
const blobPreviewUri = (id) => `${blobBase}/${id}-preview.jpg`;

export const photos = [
  {
    id: "new-horizons",
    src: {
      compressed: blobPreviewUri("new-horizons"),
      original: blobUri("new-horizons"),
    },
    alt: "Boat sailing in front of sunset over the Olympic Mountains",
    meta: {
      title: "New Horizons",
      description: null,
      location: "Golden Gardens Park",
      date: "September 2021",
      favorite: true,
    },
  },
  {
    id: "riveder-le-stelle",
    src: {
      compressed: blobPreviewUri("riveder-le-stelle"),
      original: blobUri("riveder-le-stelle"),
    },
    alt: "Glimpse of the Milky Way hovering over the Cascades",
    meta: {
      title: "Riveder le Stelle",
      description: null,
      location: "North Cascades National Park",
      date: "September 2021",
      favorite: true,
    },
  },
  {
    id: "george",
    src: {
      compressed: blobPreviewUri("george"),
      original: blobUri("george"),
    },
    alt: "Orange and white cat",
    meta: {
      title: "George",
      description: null,
      location: "Under the Table",
      date: "March 2015",
      favorite: true,
    },
  },
  {
    id: "flames",
    src: {
      compressed: blobPreviewUri("flames"),
      original: blobUri("flames"),
    },
    alt: "Buttery-smooth bonfire flames",
    meta: {
      title: "Flames",
      description: null,
      location: "Southern Michigan",
      date: "September 2014",
      favorite: true,
    },
  },
];
