import { z } from "astro:content";
import { parkSchema } from "./Park";

export const washingtonParkSchema = z
  .object({
    category: z.union([
      z.literal("coast"),
      z.literal("puget"),
      z.literal("cascades"),
      z.literal("eastern"),
      z.literal("rockies"),
    ]),
  })
  .merge(parkSchema);

export type WashingtonPark = z.infer<typeof washingtonParkSchema>;
