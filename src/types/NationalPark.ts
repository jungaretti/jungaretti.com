import { z } from "astro:content";
import { parkSchema } from "./Park";

export const nationalParkSchema = z
  .object({
    category: z.union([
      z.literal("pacific"),
      z.literal("eastern"),
      z.literal("alaska"),
      z.literal("mountains"),
      z.literal("tropics"),
      z.literal("desert"),
    ]),
  })
  .merge(parkSchema);

export type NationalPark = z.infer<typeof nationalParkSchema>;
