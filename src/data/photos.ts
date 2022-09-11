import { azureBlob } from "./helper";
import type { PhotoNew } from "./types/PhotoNew";

const imageBlob = (file: string): string => azureBlob("badger", "images", file);

export const photos: PhotoNew[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
