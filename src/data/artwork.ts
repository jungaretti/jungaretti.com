import type { Image } from "./types/Image";
import { galleryBlob } from "./utils/blob";

const closeEncounters: Image = {
  id: "close-encounters",
  alt: "Ink drawing of UFOs",
  src: {
    compressed: galleryBlob("close-encounters-preview.jpg"),
    original: galleryBlob("close-encounters.jpg"),
  },
  title: "Close Encounters",
  description: "Ink drawing of UFOs",
};

const mendotaMind: Image = {
  id: "mendota-mind",
  alt: "A chilly night on Lake Mendota",
  src: {
    compressed: galleryBlob("mendota-mind-preview.jpg"),
    original: galleryBlob("mendota-mind.jpg"),
  },
  title: "Mendota Mind",
  description: "A chilly night on Lake Mendota",
};

export const artwork: Image[] = [closeEncounters, mendotaMind];
