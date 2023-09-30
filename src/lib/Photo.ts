import { z } from "astro:content";
import { imageSchema } from "./Art";

export const photoSchema = z
  .object({
    location: z.string(),
    date: z.date(),
  })
  .merge(imageSchema);

export type Photo = z.infer<typeof photoSchema>;
