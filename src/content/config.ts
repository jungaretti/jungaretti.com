import { defineCollection } from "astro:content";
import { photoSchema } from "../lib/Photo";
import { imageSchema } from "../lib/Image";
import { parkSchema } from "@lib/Park";

const art = defineCollection({
  schema: imageSchema,
});

const photos = defineCollection({
  schema: photoSchema,
});

const nationalParks = defineCollection({
  schema: parkSchema,
});

const washingtonParks = defineCollection({
  schema: parkSchema,
});

export const collections = {
  art,
  photos,
  nationalParks,
  washingtonParks,
};
