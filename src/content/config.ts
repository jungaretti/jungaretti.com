import { defineCollection, z } from "astro:content";
import { artSchema } from "../lib/Art";
import { photoSchema } from "../lib/Photo";
import { nationalParkSchema } from "../lib/NationalPark";
import { washingtonParkSchema } from "../lib/WashingtonPark";

const art = defineCollection({
  schema: artSchema,
});

const photos = defineCollection({
  schema: photoSchema,
});

const nationalParks = defineCollection({
  schema: nationalParkSchema,
});

const washingtonParks = defineCollection({
  schema: washingtonParkSchema,
});

export const collections = {
  art,
  photos,
  nationalParks,
  washingtonParks,
};
