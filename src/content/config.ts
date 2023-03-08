import { defineCollection, z } from "astro:content";

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

const nationalParksSchema = z.object({
  name: z.string(),
  location: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  established: z.date(),
  visited: z.boolean(),
});

const nationalParks = defineCollection({
  schema: nationalParksSchema,
});

export type NationalPark = z.infer<typeof nationalParksSchema>;

export const collections = {
  art,
  photos,
  nationalParks,
};
