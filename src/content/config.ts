import { defineCollection, z } from "astro:content";
import { nationalParkSchema } from "../types/NationalPark";

const art = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    src: z.object({
      compressed: z.string(),
      original: z.string(),
    }),
    alt: z.string(),
  }),
});

const photos = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    date: z.date(),
    src: z.object({
      compressed: z.string(),
      original: z.string(),
    }),
    alt: z.string(),
  }),
});

const nationalParks = defineCollection({
  schema: nationalParkSchema,
});

export const collections = {
  art,
  photos,
  nationalParks,
};
