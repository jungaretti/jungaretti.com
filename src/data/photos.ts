import type { Photo } from "./types/Photo";

const imageBlob = (file: string): string =>
  `https://badger.blob.core.windows.net/images/${file}`;

const raggiDelPianeta: Photo = {
  id: "raggi-del-pianeta",
  alt: "Golden sunset over a snowy mountain",
  src: {
    compressed: imageBlob("raggi-del-pianeta-preview.jpg"),
    original: imageBlob("raggi-del-pianeta.jpg"),
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
    compressed: imageBlob("riveder-le-stelle-preview.jpg"),
    original: imageBlob("riveder-le-stelle.jpg"),
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
    compressed: imageBlob("new-horizons-preview.jpg"),
    original: imageBlob("new-horizons.jpg"),
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
    compressed: imageBlob("lone-moose-preview.jpg"),
    original: imageBlob("lone-moose.jpg"),
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
    compressed: imageBlob("wide-awake-preview.jpg"),
    original: imageBlob("wide-awake.jpg"),
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
    compressed: imageBlob("mio-gatto-preview.jpg"),
    original: imageBlob("mio-gatto.jpg"),
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
