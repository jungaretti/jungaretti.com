import { z } from "astro:content";
import { artSchema } from "./Art";

export const photoSchema = z
  .object({
    location: z.string(),
    date: z.date(),
  })
  .merge(artSchema);

export type Photo = z.infer<typeof photoSchema>;
