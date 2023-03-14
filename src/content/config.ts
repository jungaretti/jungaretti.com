import { defineCollection, z } from "astro:content";
import { artSchema } from "../types/Art";
import { photoSchema } from "../types/Photo";
import { nationalParkSchema } from "../types/NationalPark";
import { washingtonParkSchema } from "../types/WashingtonPark";

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
