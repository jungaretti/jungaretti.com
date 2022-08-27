import type { Photo } from "../types/Photo";

export const photos: Photo[] = [
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
    id: "wide-awake",
    alt: "Pristine view of the Milky Way floating over Yellowstone National Park",
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
