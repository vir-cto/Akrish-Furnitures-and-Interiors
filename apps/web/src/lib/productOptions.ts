/** Shared furniture colour palette (ERP + storefront) */
export const FURNITURE_COLOR_OPTIONS: { name: string; hex: string }[] = [
  { name: "Ivory", hex: "#f5f0e8" },
  { name: "Light Grey", hex: "#c4c0b8" },
  { name: "Warm Grey", hex: "#9a9590" },
  { name: "Walnut", hex: "#8b6914" },
  { name: "Oak", hex: "#c4a574" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Charcoal", hex: "#4a4a4a" },
  { name: "Beige", hex: "#e8dcc8" },
  { name: "Sage", hex: "#8a9a7b" },
  { name: "Navy", hex: "#2c3e50" },
];

/** Shared size / seater options */
export const FURNITURE_SIZE_OPTIONS = [
  "2-seater",
  "3-seater",
  "4-seater",
  "L-shape",
  "Corner",
  "King",
  "Queen",
  "Single",
  "One size",
];

export function colorNameFromHex(hex: string): string {
  const found = FURNITURE_COLOR_OPTIONS.find(
    (c) => c.hex.toLowerCase() === hex.toLowerCase()
  );
  return found?.name || hex;
}
