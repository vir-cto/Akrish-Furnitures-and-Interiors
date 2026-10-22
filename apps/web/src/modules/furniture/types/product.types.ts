// import type { Timestamp } from "firebase/firestore";

// export type FurnitureProductStatus =
//   | "In Stock"
//   | "Low Stock"
//   | "Out of Stock"
//   | "Inactive"
//   | "Published"
//   | "Draft"
//   | "Archived"
//   | string;

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   /** Admin discount % — only meaningful when product age ≥ 7 days */
//   discountPercent?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: FurnitureProductStatus;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   imageUrl?: string;
//   image?: string;
//   leadTime?: string;
//   warranty?: string;
//   salesCount?: number;
//   revenue?: number;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// export const AGEING_DISCOUNT_DAYS = 7;

// export function getProductAgeDays(p: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): number {
//   const ms =
//     p.createdAt?.toMillis?.() ??
//     p.publishedAt?.toMillis?.() ??
//     Date.now();
//   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// }

// export function canSetAgeingDiscount(p: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): boolean {
//   return getProductAgeDays(p) >= AGEING_DISCOUNT_DAYS;
// }

// export function getEffectiveSellingPrice(
//   sellingPrice: number,
//   discountPercent?: number | null
// ): number {
//   const base = Math.max(0, Number(sellingPrice) || 0);
//   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
//   if (pct <= 0) return base;
//   return Math.round(base * (1 - pct / 100));
// }


// import type { Timestamp } from "firebase/firestore";

// export type FurnitureProductStatus =
//   | "In Stock"
//   | "Low Stock"
//   | "Out of Stock"
//   | "Inactive"
//   | "Published"
//   | "Draft"
//   | "Archived"
//   | string;

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   discountPercent?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: FurnitureProductStatus;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   imageUrl?: string;
//   image?: string;
//   leadTime?: string;
//   warranty?: string;
//   salesCount?: number;
//   revenue?: number;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// /** Fallback only — prefer value from Delivery settings */
// export const DEFAULT_AGEING_DISCOUNT_DAYS = 7;

// export function getProductAgeDays(p: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): number {
//   const ms =
//     p.createdAt?.toMillis?.() ??
//     p.publishedAt?.toMillis?.() ??
//     Date.now();
//   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// }

// export function canSetAgeingDiscount(
//   p: {
//     createdAt?: { toMillis?: () => number } | null;
//     publishedAt?: { toMillis?: () => number } | null;
//   },
//   thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
// ): boolean {
//   const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
//   return getProductAgeDays(p) >= threshold;
// }

// export function getEffectiveSellingPrice(
//   sellingPrice: number,
//   discountPercent?: number | null
// ): number {
//   const base = Math.max(0, Number(sellingPrice) || 0);
//   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
//   if (pct <= 0) return base;
//   return Math.round(base * (1 - pct / 100));
// }


// import type { Timestamp } from "firebase/firestore";

// export type FurnitureProductStatus =
//   | "In Stock"
//   | "Low Stock"
//   | "Out of Stock"
//   | "Inactive"
//   | "Published"
//   | "Draft"
//   | "Archived"
//   | string;

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   discountPercent?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: FurnitureProductStatus;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   /** Primary / cover image (first of gallery) */
//   imageUrl?: string;
//   image?: string;
//   /** All views — Flipkart-style gallery */
//   images?: string[];
//   leadTime?: string;
//   warranty?: string;
//   salesCount?: number;
//   revenue?: number;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// export const DEFAULT_AGEING_DISCOUNT_DAYS = 7;

// export function getProductAgeDays(p: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): number {
//   const ms =
//     p.createdAt?.toMillis?.() ??
//     p.publishedAt?.toMillis?.() ??
//     Date.now();
//   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// }

// export function canSetAgeingDiscount(
//   p: {
//     createdAt?: { toMillis?: () => number } | null;
//     publishedAt?: { toMillis?: () => number } | null;
//   },
//   thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
// ): boolean {
//   const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
//   return getProductAgeDays(p) >= threshold;
// }

// export function getEffectiveSellingPrice(
//   sellingPrice: number,
//   discountPercent?: number | null
// ): number {
//   const base = Math.max(0, Number(sellingPrice) || 0);
//   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
//   if (pct <= 0) return base;
//   return Math.round(base * (1 - pct / 100));
// }


import type { Timestamp } from "firebase/firestore";

export type FurnitureProductStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock"
  | "Inactive"
  | "Published"
  | "Draft"
  | "Archived"
  | string;

export type FurnitureProduct = {
  id: string;
  name: string;
  sku?: string;
  code?: string;
  category?: string;
  subcategory?: string;
  material?: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  description?: string;
  price?: number;
  sellingPrice?: number;
  costPrice?: number;
  discountPercent?: number;
  stock?: number;
  unit?: string;
  minStock?: number;
  reorderLevel?: number;
  status?: FurnitureProductStatus;
  supplier?: string;
  location?: string;
  warehouseLocation?: string;
  /** Primary / cover image (first of gallery) */
  imageUrl?: string;
  image?: string;
  /** All views — Flipkart-style gallery */
  images?: string[];
  leadTime?: string;
  warranty?: string;
  salesCount?: number;
  revenue?: number;
  publishedAt?: Timestamp | null;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

export const DEFAULT_AGEING_DISCOUNT_DAYS = 7;

export function getProductAgeDays(p: {
  createdAt?: { toMillis?: () => number } | null;
  publishedAt?: { toMillis?: () => number } | null;
}): number {
  const ms =
    p.createdAt?.toMillis?.() ??
    p.publishedAt?.toMillis?.() ??
    Date.now();
  return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
}

export function canSetAgeingDiscount(
  p: {
    createdAt?: { toMillis?: () => number } | null;
    publishedAt?: { toMillis?: () => number } | null;
  },
  thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
): boolean {
  const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
  return getProductAgeDays(p) >= threshold;
}

export function getEffectiveSellingPrice(
  sellingPrice: number,
  discountPercent?: number | null
): number {
  const base = Math.max(0, Number(sellingPrice) || 0);
  const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
  if (pct <= 0) return base;
  return Math.round(base * (1 - pct / 100));
}

/** Merge images[] + legacy imageUrl/image into a clean unique list */
export function normalizeProductImages(p: {
  images?: unknown;
  imageUrl?: string;
  image?: string;
}): string[] {
  const fromArr = Array.isArray(p.images)
    ? p.images.map((u) => String(u || "").trim()).filter(Boolean)
    : [];
  const primary = String(p.imageUrl || p.image || "").trim();
  const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
  return Array.from(new Set(list));
}
