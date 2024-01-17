import { z } from "astro:content";

export const parkSchema = z.object({
  name: z.string(),
  location: z.string(),
  visited: z.date().optional(),
});

export type Park = z.infer<typeof parkSchema>;
