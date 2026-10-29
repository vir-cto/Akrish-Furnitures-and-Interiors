// "use client";

// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import {
//   ArrowRight,
//   GitCompare,
//   Loader2,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   clearCompare,
//   getCompareItems,
//   removeFromCompare,
//   type CompareItem,
// } from "@/services/compareService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function dash(v: unknown): string {
//   if (v === null || v === undefined) return "—";
//   const s = String(v).trim();
//   return s && s !== "—" ? s : "—";
// }

// function parseLeadTimeDays(value: unknown, fallback = 7): number {
//   if (typeof value === "number" && Number.isFinite(value) && value > 0) {
//     return Math.min(365, Math.floor(value));
//   }
//   const s = String(value ?? "").trim();
//   if (!s || s === "—") return fallback;
//   const nums = s.match(/\d+/g);
//   if (!nums?.length) return fallback;
//   const max = Math.max(
//     ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
//   );
//   return Number.isFinite(max) ? Math.min(365, max) : fallback;
// }

// type Row = { label: string; values: string[] };

// export default function ComparePage() {
//   const [items, setItems] = useState<CompareItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   const refreshFromStorage = useCallback(() => {
//     setItems(getCompareItems());
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function hydrate() {
//       setLoading(true);
//       const stored = getCompareItems();
//       if (!stored.length) {
//         if (!cancelled) {
//           setItems([]);
//           setLoading(false);
//         }
//         return;
//       }

//       try {
//         const enriched = await Promise.all(
//           stored.map(async (item) => {
//             try {
//               const snap = await getDoc(doc(db, "furniture_products", item.id));
//               if (!snap.exists()) return item;
//               const data = snap.data() as Record<string, unknown>;
//               const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//               const discountPercent = Math.min(
//                 100,
//                 Math.max(0, Number(data.discountPercent) || 0)
//               );
//               const hasDiscount = canApplyAgeingDiscount({
//                 createdAt: data.createdAt as
//                   | { toMillis?: () => number }
//                   | null
//                   | undefined,
//                 publishedAt: data.publishedAt as
//                   | { toMillis?: () => number }
//                   | null
//                   | undefined,
//                 discountPercent,
//               });
//               const price = getEffectiveSellingPrice(
//                 listPrice,
//                 discountPercent,
//                 hasDiscount
//               );
//               const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//               return {
//                 ...item,
//                 name: String(data.name || item.name),
//                 category: String(data.category || item.category || ""),
//                 subcategory: String(
//                   data.subcategory || data.subCategory || item.subcategory || ""
//                 ),
//                 price,
//                 listPrice,
//                 hasDiscount,
//                 discountPercent: hasDiscount ? discountPercent : 0,
//                 image: String(data.imageUrl || data.image || item.image || ""),
//                 material: String(data.material || ""),
//                 finish: String(data.finish || ""),
//                 color: String(data.color || ""),
//                 dimensions: String(data.dimensions || ""),
//                 stock: Number(data.stock ?? 0),
//                 unit: String(data.unit || "Nos"),
//                 warranty: String(data.warranty || ""),
//                 leadTime: String(leadRaw || "").trim(),
//                 leadTimeDays: parseLeadTimeDays(leadRaw, 7),
//                 rating:
//                   typeof data.rating === "number"
//                     ? data.rating
//                     : item.rating,
//                 reviewCount:
//                   typeof data.reviewCount === "number"
//                     ? data.reviewCount
//                     : item.reviewCount,
//               } satisfies CompareItem;
//             } catch {
//               return item;
//             }
//           })
//         );
//         if (!cancelled) setItems(enriched);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     void hydrate();
//     window.addEventListener("compareUpdated", refreshFromStorage);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("compareUpdated", refreshFromStorage);
//     };
//   }, [refreshFromStorage]);

//   const remove = (id: string) => {
//     removeFromCompare(id);
//     setItems(getCompareItems());
//   };

//   const clear = () => {
//     clearCompare();
//     setItems([]);
//   };

//   const cols = items.length;
//   const subLabel =
//     items[0]?.subcategory || items[0]?.category || "products";

//   const rows: Row[] = cols
//     ? [
//         {
//           label: "Rating",
//           values: items.map((p) =>
//             typeof p.rating === "number" && p.rating > 0
//               ? `${p.rating.toFixed(1)}${
//                   p.reviewCount ? ` (${p.reviewCount})` : ""
//                 }`
//               : "—"
//           ),
//         },
//         {
//           label: "Price",
//           values: items.map((p) => {
//             if (!p.price && p.price !== 0) return "—";
//             if (p.hasDiscount && p.listPrice) {
//               return `${formatCurrency(p.price)} (was ${formatCurrency(p.listPrice)})`;
//             }
//             return formatCurrency(p.price);
//           }),
//         },
//         {
//           label: "Category",
//           values: items.map((p) => dash(p.category)),
//         },
//         {
//           label: "Subcategory",
//           values: items.map((p) => dash(p.subcategory)),
//         },
//         {
//           label: "Material",
//           values: items.map((p) => dash(p.material)),
//         },
//         {
//           label: "Finish",
//           values: items.map((p) => dash(p.finish)),
//         },
//         {
//           label: "Color",
//           values: items.map((p) => dash(p.color)),
//         },
//         {
//           label: "Dimensions",
//           values: items.map((p) => dash(p.dimensions)),
//         },
//         {
//           label: "Stock",
//           values: items.map((p) =>
//             typeof p.stock === "number"
//               ? p.stock > 0
//                 ? `${p.stock} ${p.unit || "Nos"}`
//                 : "Out of stock"
//               : "—"
//           ),
//         },
//         {
//           label: "Lead time",
//           values: items.map((p) => {
//             if (p.leadTimeDays) {
//               return `${p.leadTimeDays} days${
//                 p.leadTime ? ` · ${p.leadTime}` : ""
//               }`;
//             }
//             return dash(p.leadTime);
//           }),
//         },
//         {
//           label: "Warranty",
//           values: items.map((p) => dash(p.warranty)),
//         },
//       ]
//     : [];

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <nav className="text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">Compare</span>
//         </nav>

//         <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a]">
//               Compare products
//             </h1>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               {cols === 0
//                 ? "Add products from the same subcategory to compare side by side."
//                 : `Comparing ${cols} of 3 · ${subLabel}`}
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {cols > 0 && (
//               <button
//                 type="button"
//                 onClick={clear}
//                 className="rounded-full border border-[#e0d9ce] bg-white px-4 py-2 text-xs font-semibold text-[#6b6560] hover:border-[#c4b8a8]"
//               >
//                 Clear all
//               </button>
//             )}
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-4 py-2 text-xs font-semibold text-[#1a1a1a] hover:border-[#c4b8a8]"
//             >
//               + Add another product
//             </Link>
//           </div>
//         </div>

//         {cols === 0 ? (
//           <div className="mt-12 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//             <GitCompare size={36} className="mx-auto text-[#d4cdc2]" />
//             <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//               Nothing to compare yet
//             </h2>
//             <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//               Open the shop and tap Compare on products in the same
//               subcategory (up to 3).
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-8 overflow-x-auto rounded-2xl border border-[#e8e2d8] bg-white">
//             {/* Product cards row */}
//             <div
//               className="grid min-w-[640px] border-b border-[#f0ebe3]"
//               style={{
//                 gridTemplateColumns: `9rem repeat(${cols}, minmax(11rem, 1fr))`,
//               }}
//             >
//               <div className="p-4" />
//               {items.map((p) => (
//                 <div
//                   key={p.id}
//                   className="relative border-l border-[#f0ebe3] p-4 text-center"
//                 >
//                   <button
//                     type="button"
//                     onClick={() => remove(p.id)}
//                     className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d8] text-[#8a847c] hover:bg-[#faf7f2] hover:text-[#1a1a1a]"
//                     aria-label="Remove from compare"
//                   >
//                     <X size={14} />
//                   </button>
//                   <Link href={`/products/${p.id}`} className="block">
//                     <div className="mx-auto flex aspect-square max-w-[11rem] items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]">
//                       {p.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={p.image}
//                           alt={p.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <ShoppingBag size={28} className="text-[#d4cdc2]" />
//                       )}
//                     </div>
//                     <p className="mt-3 text-sm font-semibold text-[#1a1a1a]">
//                       {p.name}
//                     </p>
//                     <p className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                       {formatCurrency(p.price)}
//                     </p>
//                   </Link>
//                   <Link
//                     href={`/products/${p.id}`}
//                     className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1a1a1a] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#2c2a26]"
//                   >
//                     View product
//                   </Link>
//                 </div>
//               ))}
//             </div>

//             {/* Spec rows */}
//             {rows.map((row, idx) => (
//               <div
//                 key={row.label}
//                 className={`grid min-w-[640px] ${
//                   idx % 2 === 0 ? "bg-[#faf8f4]/60" : "bg-white"
//                 }`}
//                 style={{
//                   gridTemplateColumns: `9rem repeat(${cols}, minmax(11rem, 1fr))`,
//                 }}
//               >
//                 <div className="flex items-center px-4 py-3.5 text-xs font-medium text-[#8a847c]">
//                   {row.label}
//                 </div>
//                 {row.values.map((val, i) => (
//                   <div
//                     key={`${row.label}-${items[i]?.id}`}
//                     className="border-l border-[#f0ebe3] px-4 py-3.5 text-center text-sm font-medium text-[#1a1a1a]"
//                   >
//                     {row.label === "Rating" && val !== "—" ? (
//                       <span className="inline-flex items-center justify-center gap-1">
//                         <Star
//                           size={12}
//                           className="fill-amber-400 text-amber-400"
//                         />
//                         {val}
//                       </span>
//                     ) : (
//                       val
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  GitCompare,
  Loader2,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  canApplyAgeingDiscount,
  getEffectiveSellingPrice,
} from "@/services/cartService";
import {
  clearCompare,
  getCompareItems,
  removeFromCompare,
  type CompareItem,
} from "@/services/compareService";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function dash(v: unknown): string {
  if (v === null || v === undefined) return "—";
  const s = String(v).trim();
  return s && s !== "—" ? s : "—";
}

function parseLeadTimeDays(value: unknown, fallback = 7): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.min(365, Math.floor(value));
  }
  const s = String(value ?? "").trim();
  if (!s || s === "—") return fallback;
  const nums = s.match(/\d+/g);
  if (!nums?.length) return fallback;
  const max = Math.max(
    ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
  );
  return Number.isFinite(max) ? Math.min(365, max) : fallback;
}

type Row = { label: string; values: string[] };

export default function ComparePage() {
  const [items, setItems] = useState<CompareItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshFromStorage = useCallback(() => {
    setItems(getCompareItems());
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      setLoading(true);
      const stored = getCompareItems();
      if (!stored.length) {
        if (!cancelled) {
          setItems([]);
          setLoading(false);
        }
        return;
      }

      try {
        const enriched = await Promise.all(
          stored.map(async (item) => {
            try {
              const snap = await getDoc(doc(db, "furniture_products", item.id));
              if (!snap.exists()) return item;
              const data = snap.data() as Record<string, unknown>;
              const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
              const discountPercent = Math.min(
                100,
                Math.max(0, Number(data.discountPercent) || 0)
              );
              const hasDiscount = canApplyAgeingDiscount({
                createdAt: data.createdAt as
                  | { toMillis?: () => number }
                  | null
                  | undefined,
                publishedAt: data.publishedAt as
                  | { toMillis?: () => number }
                  | null
                  | undefined,
                discountPercent,
              });
              const price = getEffectiveSellingPrice(
                listPrice,
                discountPercent,
                hasDiscount
              );
              const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
              return {
                ...item,
                name: String(data.name || item.name),
                category: String(data.category || item.category || ""),
                subcategory: String(
                  data.subcategory ||
                    data.subCategory ||
                    item.subcategory ||
                    ""
                ),
                price,
                listPrice,
                hasDiscount,
                discountPercent: hasDiscount ? discountPercent : 0,
                image: String(data.imageUrl || data.image || item.image || ""),
                material: String(data.material || item.material || ""),
                finish: String(data.finish || item.finish || ""),
                color: String(data.color || item.color || ""),
                dimensions: String(data.dimensions || item.dimensions || ""),
                stock: Number(data.stock ?? item.stock ?? 0),
                unit: String(data.unit || item.unit || "Nos"),
                warranty: String(data.warranty || item.warranty || ""),
                leadTime: String(leadRaw || item.leadTime || "").trim(),
                leadTimeDays: parseLeadTimeDays(
                  leadRaw || item.leadTimeDays,
                  7
                ),
                rating:
                  typeof data.rating === "number"
                    ? data.rating
                    : item.rating,
                reviewCount:
                  typeof data.reviewCount === "number"
                    ? data.reviewCount
                    : item.reviewCount,
              } satisfies CompareItem;
            } catch {
              return item;
            }
          })
        );
        if (!cancelled) setItems(enriched);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void hydrate();
    window.addEventListener("compareUpdated", refreshFromStorage);
    return () => {
      cancelled = true;
      window.removeEventListener("compareUpdated", refreshFromStorage);
    };
  }, [refreshFromStorage]);

  const remove = (id: string) => {
    removeFromCompare(id);
    setItems(getCompareItems());
  };

  const clear = () => {
    clearCompare();
    setItems([]);
  };

  const cols = items.length;
  const subLabel =
    items[0]?.subcategory || items[0]?.category || "products";

  const rows: Row[] = cols
    ? [
        {
          label: "Rating",
          values: items.map((p) =>
            typeof p.rating === "number" && p.rating > 0
              ? `${p.rating.toFixed(1)}${
                  p.reviewCount ? ` (${p.reviewCount})` : ""
                }`
              : "—"
          ),
        },
        {
          label: "Price",
          values: items.map((p) => {
            if (p.price === undefined || p.price === null) return "—";
            if (p.hasDiscount && p.listPrice) {
              return `${formatCurrency(p.price)} (was ${formatCurrency(p.listPrice)})`;
            }
            return formatCurrency(p.price);
          }),
        },
        {
          label: "Category",
          values: items.map((p) => dash(p.category)),
        },
        {
          label: "Subcategory",
          values: items.map((p) => dash(p.subcategory)),
        },
        {
          label: "Material",
          values: items.map((p) => dash(p.material)),
        },
        {
          label: "Finish",
          values: items.map((p) => dash(p.finish)),
        },
        {
          label: "Color",
          values: items.map((p) => dash(p.color)),
        },
        {
          label: "Dimensions",
          values: items.map((p) => dash(p.dimensions)),
        },
        {
          label: "Stock",
          values: items.map((p) =>
            typeof p.stock === "number"
              ? p.stock > 0
                ? `${p.stock} ${p.unit || "Nos"}`
                : "Out of stock"
              : "—"
          ),
        },
        {
          label: "Lead time",
          values: items.map((p) => {
            if (p.leadTimeDays) {
              return `${p.leadTimeDays} days${
                p.leadTime ? ` · ${p.leadTime}` : ""
              }`;
            }
            return dash(p.leadTime);
          }),
        },
        {
          label: "Warranty",
          values: items.map((p) => dash(p.warranty)),
        },
      ]
    : [];

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
        <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <nav className="text-xs text-[#8a847c]">
          <Link href="/" className="hover:text-[#1a1a1a]">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/products" className="hover:text-[#1a1a1a]">
            Shop
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-[#1a1a1a]">Compare</span>
        </nav>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a]">
              Compare products
            </h1>
            <p className="mt-1.5 text-sm text-[#6b6560]">
              {cols === 0
                ? "Add products from the same subcategory to compare side by side."
                : `Comparing ${cols} of 3 · ${subLabel}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cols > 0 && (
              <button
                type="button"
                onClick={clear}
                className="rounded-full border border-[#e0d9ce] bg-white px-4 py-2 text-xs font-semibold text-[#6b6560] hover:border-[#c4b8a8]"
              >
                Clear all
              </button>
            )}
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-4 py-2 text-xs font-semibold text-[#1a1a1a] hover:border-[#c4b8a8]"
            >
              + Add another product
            </Link>
          </div>
        </div>

        {cols === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
            <GitCompare size={36} className="mx-auto text-[#d4cdc2]" />
            <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
              Nothing to compare yet
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
              Open the shop and tap Compare on products in the same subcategory
              (up to 3).
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Browse products
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#e8e2d8] bg-white">
            <div
              className="grid min-w-[640px] border-b border-[#f0ebe3]"
              style={{
                gridTemplateColumns: `9rem repeat(${cols}, minmax(11rem, 1fr))`,
              }}
            >
              <div className="p-4" />
              {items.map((p) => (
                <div
                  key={p.id}
                  className="relative border-l border-[#f0ebe3] p-4 text-center"
                >
                  <button
                    type="button"
                    onClick={() => remove(p.id)}
                    className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d8] text-[#8a847c] hover:bg-[#faf7f2] hover:text-[#1a1a1a]"
                    aria-label="Remove from compare"
                  >
                    <X size={14} />
                  </button>
                  <Link href={`/products/${p.id}`} className="block">
                    <div className="mx-auto flex aspect-square max-w-[11rem] items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ShoppingBag size={28} className="text-[#d4cdc2]" />
                      )}
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#1a1a1a]">
                      {p.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#1a1a1a]">
                      {formatCurrency(p.price)}
                    </p>
                  </Link>
                  <Link
                    href={`/products/${p.id}`}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1a1a1a] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#2c2a26]"
                  >
                    View product
                  </Link>
                </div>
              ))}
            </div>

            {rows.map((row, idx) => (
              <div
                key={row.label}
                className={`grid min-w-[640px] ${
                  idx % 2 === 0 ? "bg-[#faf8f4]/60" : "bg-white"
                }`}
                style={{
                  gridTemplateColumns: `9rem repeat(${cols}, minmax(11rem, 1fr))`,
                }}
              >
                <div className="flex items-center px-4 py-3.5 text-xs font-medium text-[#8a847c]">
                  {row.label}
                </div>
                {row.values.map((val, i) => (
                  <div
                    key={`${row.label}-${items[i]?.id}`}
                    className="border-l border-[#f0ebe3] px-4 py-3.5 text-center text-sm font-medium text-[#1a1a1a]"
                  >
                    {row.label === "Rating" && val !== "—" ? (
                      <span className="inline-flex items-center justify-center gap-1">
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                        {val}
                      </span>
                    ) : (
                      val
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
