export type CardColor =
  | "slate"
  | "amber"
  | "green"
  | "teal"
  | "cyan"
  | "fuchsia";

export function categoryColor(category: string): CardColor {
  switch (category) {
    case "pacific":
    case "coast":
      return "cyan";

    case "eastern":
      return "green";

    case "desert":
      return "amber";

    case "tropics":
    case "puget":
      return "teal";

    case "alaska":
      return "fuchsia";

    default:
      return "slate";
  }
}
