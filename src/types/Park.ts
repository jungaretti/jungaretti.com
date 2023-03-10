import { z } from "astro:content";

export const parkSchema = z.object({
  name: z.string(),
  location: z.string(),
  visited: z.date().optional(),
});

export type Park = z.infer<typeof parkSchema>;

export function cardDetail(park: Park): string {
  const detail = park.visited
    ? `Visited ${park.visited.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      })}, ${park.location}`
    : park.location;
  return detail;
}
