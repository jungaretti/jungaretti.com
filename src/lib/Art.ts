import { z } from "astro:content";

export const artSchema = z.object({
  title: z.string(),
  description: z.string(),
  src: z.object({
    compressed: z.string(),
    original: z.string(),
  }),
  alt: z.string(),
});

export type Art = z.infer<typeof artSchema>;
