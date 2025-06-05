import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const nationalParks = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/parks/national",
  }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    visited: z.string().date().optional(),
  }),
});

const washingtonParks = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/parks/washington",
  }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    visited: z.string().date().optional(),
  }),
});

const art = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/art",
  }),
  schema: z.object({
    alt: z.string(),
    original: z.object({
      src: z.string(),
    }),
    compressed: z.object({
      src: z.string(),
    }),
    title: z.string(),
    description: z.string(),
  }),
});

const photos = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/photos",
  }),
  schema: z.object({
    location: z.string(),
    date: z.string().date(),
    alt: z.string(),
    original: z.object({
      src: z.string(),
    }),
    compressed: z.object({
      src: z.string(),
    }),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  art: art,
  photos: photos,
  nationalParks: nationalParks,
  washingtonParks: washingtonParks,
};
