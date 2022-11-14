import type { Photo } from "./types/Photo";
import { galleryBlob } from "./utils/blob";

const raggiDelPianeta: Photo = {
  id: "raggi-del-pianeta",
  alt: "Golden sunset over a snowy mountain",
  src: {
    compressed: galleryBlob("raggi-del-pianeta-preview.jpg"),
    original: galleryBlob("raggi-del-pianeta.jpg"),
  },
  title: "Raggi del Pianeta",
  description:
    "Golden sunset over a snowy mountain at North Cascades National Park",
  location: "North Cascades National Park",
  date: new Date("2022-01-09"),
};

const rivederLeStelle: Photo = {
  id: "riveder-le-stelle",
  alt: "Glimpse of the Milky Way hovering over the Cascades",
  src: {
    compressed: galleryBlob("riveder-le-stelle-preview.jpg"),
    original: galleryBlob("riveder-le-stelle.jpg"),
  },
  title: "Riveder le Stelle",
  description: "Glimpse of the Milky Way hovering over the Cascades",
  location: "North Cascades National Park",
  date: new Date("2021-09-03"),
};

const newHorizons: Photo = {
  id: "new-horizons",
  alt: "Boat sailing in front of sunset over the Olympic Peninsula",
  src: {
    compressed: galleryBlob("new-horizons-preview.jpg"),
    original: galleryBlob("new-horizons.jpg"),
  },
  title: "New Horizons",
  description: "Boat sailing in front of sunset over the Olympic Peninsula",
  location: "Golden Gardens Park",
  date: new Date("2021-09-24"),
};

const loneMoose: Photo = {
  id: "lone-moose",
  alt: "Mountain peak in Grand Teton National Park",
  src: {
    compressed: galleryBlob("lone-moose-preview.jpg"),
    original: galleryBlob("lone-moose.jpg"),
  },
  title: "Lone Moose",
  description: "Mountain peak in Grand Teton National Park",
  location: "Grand Teton National Park",
  date: new Date("2022-07-03"),
};

const wideAwake: Photo = {
  id: "wide-awake",
  alt: "The Milky Way floating over a lake at Yellowstone National Park",
  src: {
    compressed: galleryBlob("wide-awake-preview.jpg"),
    original: galleryBlob("wide-awake.jpg"),
  },
  title: "Wide Awake",
  description:
    "The Milky Way floating over a lake at Yellowstone National Park",
  location: "Yellowstone National Park",
  date: new Date("2022-07-03"),
};

const mioGatto: Photo = {
  id: "mio-gatto",
  alt: "Orange and white cat",
  src: {
    compressed: galleryBlob("mio-gatto-preview.jpg"),
    original: galleryBlob("mio-gatto.jpg"),
  },
  title: "Mio Gatto",
  description: "Orange and white cat sleeping under the table",
  location: "Under the Table",
  date: new Date("2015-03-02"),
};

export const photos: Photo[] = [
  raggiDelPianeta,
  rivederLeStelle,
  newHorizons,
  loneMoose,
  wideAwake,
  mioGatto,
];
