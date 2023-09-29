import { z } from "astro:content";

export const artSchema = z.object({
  alt: z.string(),
  original: z.object({
    src: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  compressed: z.object({
    src: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  title: z.string(),
  description: z.string(),
});

export type Art = z.infer<typeof artSchema>;
