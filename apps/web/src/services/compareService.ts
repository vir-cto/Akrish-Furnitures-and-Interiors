// export type CompareItem = {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice?: number;
//   hasDiscount?: boolean;
//   discountPercent?: number;
//   image?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   stock?: number;
//   unit?: string;
//   warranty?: string;
//   leadTime?: string;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// };

// const STORAGE_KEY = "akrish_compare";
// const MAX_ITEMS = 3;

// function emit() {
//   if (typeof window !== "undefined") {
//     window.dispatchEvent(new Event("compareUpdated"));
//   }
// }

// function read(): CompareItem[] {
//   if (typeof window === "undefined") return [];
//   try {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (!Array.isArray(parsed)) return [];
//     return parsed
//       .filter((x) => x && typeof x.id === "string")
//       .slice(0, MAX_ITEMS) as CompareItem[];
//   } catch {
//     return [];
//   }
// }

// function write(items: CompareItem[]) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
//   emit();
// }

// export function getCompareItems(): CompareItem[] {
//   return read();
// }

// export function getCompareCount(): number {
//   return read().length;
// }

// export function isInCompare(productId: string): boolean {
//   return read().some((i) => i.id === productId);
// }

// export function getCompareSubcategory(): string | null {
//   const items = read();
//   if (!items.length) return null;
//   return (items[0].subcategory || items[0].category || "").trim() || null;
// }

// /**
//  * Returns null on success, or an error message.
//  */
// export function addToCompare(item: CompareItem): string | null {
//   const items = read();
//   if (items.some((i) => i.id === item.id)) return null;

//   if (items.length >= MAX_ITEMS) {
//     return `You can compare up to ${MAX_ITEMS} products.`;
//   }

//   const key = (item.subcategory || item.category || "").trim().toLowerCase();
//   if (items.length > 0) {
//     const existingKey = (
//       items[0].subcategory ||
//       items[0].category ||
//       ""
//     )
//       .trim()
//       .toLowerCase();
//     if (key && existingKey && key !== existingKey) {
//       return `Compare only products in the same subcategory (${items[0].subcategory || items[0].category}).`;
//     }
//   }

//   write([
//     ...items,
//     {
//       ...item,
//       subcategory: item.subcategory || item.category || "",
//       category: item.category || "",
//     },
//   ]);
//   return null;
// }

// export function removeFromCompare(productId: string): void {
//   write(read().filter((i) => i.id !== productId));
// }

// export function clearCompare(): void {
//   write([]);
// }

// export function toggleCompare(item: CompareItem): string | null {
//   if (isInCompare(item.id)) {
//     removeFromCompare(item.id);
//     return null;
//   }
//   return addToCompare(item);
// }

// export { MAX_ITEMS as COMPARE_MAX };



// import {
//   doc,
//   getDoc,
//   setDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// export type CompareItem = {
//   productId: string;
//   name: string;
//   price: number;
//   listPrice?: number;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   image?: string;
//   stock?: number;
//   addedAt?: unknown;
// };

// export type CompareList = {
//   userId: string;
//   items: CompareItem[];
//   updatedAt?: unknown;
// };

// const COLLECTION = "compares";
// const MAX_ITEMS = 4;

// function cleanItem(raw: Partial<CompareItem> & { productId: string }): CompareItem {
//   return {
//     productId: String(raw.productId),
//     name: String(raw.name || "Product"),
//     price: Number(raw.price || 0),
//     listPrice:
//       raw.listPrice !== undefined ? Number(raw.listPrice) : undefined,
//     category: raw.category ? String(raw.category) : undefined,
//     subcategory: raw.subcategory ? String(raw.subcategory) : undefined,
//     material: raw.material ? String(raw.material) : undefined,
//     finish: raw.finish ? String(raw.finish) : undefined,
//     color: raw.color ? String(raw.color) : undefined,
//     dimensions: raw.dimensions ? String(raw.dimensions) : undefined,
//     warranty: raw.warranty ? String(raw.warranty) : undefined,
//     image: raw.image ? String(raw.image) : undefined,
//     stock: raw.stock !== undefined ? Number(raw.stock) : undefined,
//     addedAt: raw.addedAt ?? serverTimestamp(),
//   };
// }

// /** Strip `undefined` so Firestore setDoc does not throw */
// function stripUndefined<T extends Record<string, unknown>>(obj: T): T {
//   const out = { ...obj };
//   Object.keys(out).forEach((k) => {
//     if (out[k] === undefined) delete out[k];
//   });
//   return out;
// }

// export async function getCompareItems(userId: string): Promise<CompareItem[]> {
//   if (!userId) return [];

//   const ref = doc(db, COLLECTION, userId);
//   const snap = await getDoc(ref);
//   if (!snap.exists()) return [];

//   const items = (snap.data().items || []) as CompareItem[];
//   return Array.isArray(items) ? items : [];
// }

// export function isInCompare(items: CompareItem[], productId: string): boolean {
//   return items.some((i) => i.productId === productId);
// }

// export function getCompareCount(items: CompareItem[]): number {
//   return items.length;
// }

// /**
//  * Add product to compare list.
//  * Same subcategory rule is enforced by the caller (products page / detail).
//  */
// export async function addToCompare(
//   userId: string,
//   item: {
//     productId: string;
//     name: string;
//     price: number;
//     listPrice?: number;
//     category?: string;
//     subcategory?: string;
//     material?: string;
//     finish?: string;
//     color?: string;
//     dimensions?: string;
//     warranty?: string;
//     image?: string;
//     stock?: number;
//   }
// ): Promise<CompareItem[]> {
//   if (!userId) throw new Error("User ID is required");
//   if (!item?.productId) throw new Error("Product ID is required");

//   const ref = doc(db, COLLECTION, userId);
//   const snap = await getDoc(ref);
//   let items: CompareItem[] = snap.exists()
//     ? ((snap.data().items || []) as CompareItem[])
//     : [];

//   // Already in list → no-op
//   if (items.some((i) => i.productId === item.productId)) {
//     return items;
//   }

//   if (items.length >= MAX_ITEMS) {
//     throw new Error(`You can compare up to ${MAX_ITEMS} products.`);
//   }

//   // Optional: same subcategory only (when existing items have subcategory)
//   const existingSub = items.find((i) => i.subcategory)?.subcategory;
//   if (
//     existingSub &&
//     item.subcategory &&
//     existingSub !== item.subcategory
//   ) {
//     throw new Error(
//       "Compare only products from the same subcategory."
//     );
//   }

//   const next = cleanItem(item);
//   items = [...items, stripUndefined(next) as CompareItem];

//   await setDoc(
//     ref,
//     stripUndefined({
//       userId,
//       items: items.map((i) => stripUndefined(i as unknown as Record<string, unknown>)),
//       updatedAt: serverTimestamp(),
//     }),
//     { merge: true }
//   );

//   return items;
// }

// export async function removeFromCompare(
//   userId: string,
//   productId: string
// ): Promise<CompareItem[]> {
//   if (!userId) throw new Error("User ID is required");

//   const ref = doc(db, COLLECTION, userId);
//   const snap = await getDoc(ref);
//   if (!snap.exists()) return [];

//   const items = ((snap.data().items || []) as CompareItem[]).filter(
//     (i) => i.productId !== productId
//   );

//   await setDoc(
//     ref,
//     {
//       userId,
//       items: items.map((i) =>
//         stripUndefined(i as unknown as Record<string, unknown>)
//       ),
//       updatedAt: serverTimestamp(),
//     },
//     { merge: true }
//   );

//   return items;
// }

// export async function clearCompare(userId: string): Promise<void> {
//   if (!userId) throw new Error("User ID is required");

//   await setDoc(doc(db, COLLECTION, userId), {
//     userId,
//     items: [],
//     updatedAt: serverTimestamp(),
//   });
// }



export type CompareItem = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  listPrice?: number;
  hasDiscount?: boolean;
  discountPercent?: number;
  image?: string;
  material?: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  stock?: number;
  unit?: string;
  warranty?: string;
  leadTime?: string;
  leadTimeDays?: number;
  rating?: number;
  reviewCount?: number;
};

const STORAGE_KEY = "akrish_compare";
const MAX_ITEMS = 3;

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("compareUpdated"));
  }
}

function read(): CompareItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CompareItem[]) : [];
  } catch {
    return [];
  }
}

function write(items: CompareItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  emit();
}

export function getCompareItems(): CompareItem[] {
  return read();
}

export function getCompareCount(): number {
  return read().length;
}

export function isInCompare(productId: string): boolean {
  return read().some((i) => i.id === productId);
}

/**
 * Add product. Returns error message string, or null on success.
 */
export function addToCompare(
  item: Omit<CompareItem, "id"> & { id: string }
): string | null {
  if (!item?.id) return "Invalid product.";

  const items = read();

  if (items.some((i) => i.id === item.id)) {
    return null; // already in list
  }

  if (items.length >= MAX_ITEMS) {
    return `You can compare up to ${MAX_ITEMS} products.`;
  }

  const existingSub = items.find((i) => i.subcategory)?.subcategory;
  const nextSub = item.subcategory || item.category || "";
  if (existingSub && nextSub && existingSub !== nextSub) {
    return "Compare only products from the same subcategory.";
  }

  const next: CompareItem = {
    id: String(item.id),
    name: String(item.name || "Product"),
    category: String(item.category || ""),
    subcategory: String(item.subcategory || item.category || ""),
    price: Number(item.price || 0),
    listPrice:
      item.listPrice !== undefined ? Number(item.listPrice) : undefined,
    hasDiscount: Boolean(item.hasDiscount),
    discountPercent:
      item.discountPercent !== undefined
        ? Number(item.discountPercent)
        : undefined,
    image: item.image ? String(item.image) : undefined,
    material: item.material ? String(item.material) : undefined,
    finish: item.finish ? String(item.finish) : undefined,
    color: item.color ? String(item.color) : undefined,
    dimensions: item.dimensions ? String(item.dimensions) : undefined,
    stock: item.stock !== undefined ? Number(item.stock) : undefined,
    unit: item.unit ? String(item.unit) : undefined,
    warranty: item.warranty ? String(item.warranty) : undefined,
    leadTime: item.leadTime ? String(item.leadTime) : undefined,
    leadTimeDays:
      item.leadTimeDays !== undefined
        ? Number(item.leadTimeDays)
        : undefined,
    rating: item.rating !== undefined ? Number(item.rating) : undefined,
    reviewCount:
      item.reviewCount !== undefined
        ? Number(item.reviewCount)
        : undefined,
  };

  write([...items, next]);
  return null;
}

export function removeFromCompare(productId: string): void {
  write(read().filter((i) => i.id !== productId));
}

export function clearCompare(): void {
  write([]);
}
