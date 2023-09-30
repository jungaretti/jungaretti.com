import { defineCollection } from "astro:content";
import { photoSchema } from "../lib/Photo";
import { imageSchema } from "../lib/Image";
import { nationalParkSchema } from "../lib/NationalPark";
import { washingtonParkSchema } from "../lib/WashingtonPark";

const art = defineCollection({
  schema: imageSchema,
});

const photos = defineCollection({
  schema: photoSchema,
});

const national = defineCollection({
  schema: nationalParkSchema,
});

const washington = defineCollection({
  schema: washingtonParkSchema,
});

export const collections = {
  art,
  photos,
  national,
  washington,
};
