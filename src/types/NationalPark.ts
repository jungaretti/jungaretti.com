import { z } from "astro:content";
import type { CardColor } from "./CardColor";
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

export function cardColor(park: NationalPark): CardColor {
  switch (park.category) {
    case "mountains":
      return "slate";
    case "pacific":
      return "cyan";
    case "eastern":
      return "green";
    case "desert":
      return "amber";
    case "tropics":
      return "teal";
    case "alaska":
      return "fuchsia";
  }
}
