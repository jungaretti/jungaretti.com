const blobBase = "https://badger.blob.core.windows.net/photos";

function buildPhoto({ id, alt, meta }) {
  return {
    id,
    src: {
      compressed: `${blobBase}/${id}-preview.jpg`,
      original: `${blobBase}/${id}.jpg`,
    },
    alt,
    meta,
  };
}

export const photos = [
  buildPhoto({
    id: "raggi-del-pianeta",
    alt: "Golden sunset over a snowy mountain",
    meta: {
      title: "Raggi del Pianeta",
      description: null,
      location: "North Cascades National Park",
      date: "January 2021",
      favorite: true,
    },
  }),
  buildPhoto({
    id: "new-horizons",
    alt: "Boat sailing in front of sunset over the Olympic Mountains",
    meta: {
      title: "New Horizons",
      description: null,
      location: "Golden Gardens Park",
      date: "September 2021",
      favorite: true,
    },
  }),
  buildPhoto({
    id: "riveder-le-stelle",
    alt: "Glimpse of the Milky Way hovering over the Cascades",
    meta: {
      title: "Riveder le Stelle",
      description: null,
      location: "North Cascades National Park",
      date: "September 2021",
      favorite: true,
    },
  }),
  buildPhoto({
    id: "mio-gatto",
    alt: "Orange and white cat",
    meta: {
      title: "Mio Gatto",
      description: null,
      location: "Under the Table",
      date: "March 2015",
      favorite: true,
    },
  }),
];
