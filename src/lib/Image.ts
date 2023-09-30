import { optional } from "astro/zod";
import { z } from "astro:content";

const imageFileSchema = z.object({
  src: z.string(),
});

export const imageSchema = z.object({
  alt: z.string(),
  original: imageFileSchema,
  compressed: imageFileSchema,
  title: z.string(),
  description: z.string(),
});

export type Image = z.infer<typeof imageSchema>;
