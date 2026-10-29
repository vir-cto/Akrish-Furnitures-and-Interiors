// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
// } from "lucide-react";

// const categories = [
//   {
//     title: "Living Room",
//     description: "Sofas, tables and complete living room solutions.",
//     href: "/products?category=Living%20Room",
//     icon: Sofa,
//   },
//   {
//     title: "Dining Room",
//     description: "Elegant dining furniture for everyday living.",
//     href: "/products?category=Dining%20Room",
//     icon: Home,
//   },
//   {
//     title: "Bedroom",
//     description: "Comfortable furniture for calm, beautiful bedrooms.",
//     href: "/products?category=Bedroom",
//     icon: Sparkles,
//   },
//   {
//     title: "Office",
//     description: "Functional furniture for modern workspaces.",
//     href: "/products?category=Office",
//     icon: Ruler,
//   },
// ];

// const featuredProducts = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     price: 54900,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     price: 30000,
//   },
//   {
//     id: "product-003",
//     name: "Solid Wood Dining Table",
//     category: "Dining Room",
//     price: 72500,
//   },
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//               <Sparkles size={13} />
//               Interior & Furniture
//             </div>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//               Discover thoughtfully selected furniture and interior
//               solutions designed to bring comfort, functionality and
//               timeless style to your space.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
//               <div>
//                 <p className="text-2xl font-bold">100+</p>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Furniture options
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-bold">4+</p>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Room categories
//                 </p>
//               </div>

//               <div className="hidden sm:block">
//                 <p className="text-2xl font-bold">VIP</p>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Interior solutions
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
//               <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
//                 <div className="text-center">
//                   <Sofa
//                     size={76}
//                     strokeWidth={1}
//                     className="mx-auto text-slate-400"
//                   />

//                   <p className="mt-5 text-sm font-semibold text-slate-300">
//                     Beautiful furniture
//                   </p>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Designed for modern spaces
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
//                   <Check size={17} />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold text-white">
//                     Quality focused
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Explore
//             </p>

//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Shop by room
//             </h2>

//             <p className="mt-2 max-w-xl text-sm text-slate-500">
//               Find furniture that fits naturally into every part of
//               your home or workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {categories.map((category) => {
//             const Icon = category.icon;

//             return (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
//                   <Icon size={21} strokeWidth={1.7} />
//                 </div>

//                 <h3 className="mt-5 text-base font-bold text-slate-900">
//                   {category.title}
//                 </h3>

//                 <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">
//                   {category.description}
//                 </p>

//                 <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-600">
//                   Explore
//                   <ArrowRight
//                     size={14}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 Featured
//               </p>

//               <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//                 Selected for modern interiors
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           <div className="mt-7 grid gap-5 md:grid-cols-3">
//             {featuredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9f8] transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
//                   <Sofa
//                     size={54}
//                     strokeWidth={1}
//                     className="text-slate-300 transition group-hover:text-slate-400"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                     {product.category}
//                   </p>

//                   <h3 className="mt-1.5 text-base font-bold text-slate-900">
//                     {product.name}
//                   </h3>

//                   <div className="mt-4 flex items-center justify-between">
//                     <p className="text-lg font-bold text-slate-900">
//                       {formatCurrency(product.price)}
//                     </p>

//                     <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white">
//                       <ArrowRight size={15} />
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Interior services */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 VIP Interior
//               </p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
//                 More than furniture.
//                 <br />
//                 A complete interior experience.
//               </h2>

//               <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
//                 From furniture selection to complete interior
//                 solutions, build a space that reflects the way you
//                 live and work.
//               </p>

//               <Link
//                 href="/products"
//                 className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Start exploring
//                 <ArrowRight size={16} />
//               </Link>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {[
//                 "Thoughtful furniture selection",
//                 "Modern interior solutions",
//                 "Quality-focused products",
//                 "Designed for everyday living",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
//                 >
//                   <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-slate-900">
//                     <Check size={13} />
//                   </div>

//                   <p className="text-sm font-medium text-slate-200">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
//           <Palette
//             size={25}
//             className="mx-auto text-slate-500"
//           />

//           <h2 className="mt-4 text-2xl font-bold text-slate-900">
//             Ready to transform your space?
//           </h2>

//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that
//             complement your interior.
//           </p>

//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs, query, where, limit } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// // Icon mapping for known categories
// const categoryIcons: Record<string, any> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch all active products from catalog
//         const productsQuery = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );

//         const snapshot = await getDocs(productsQuery);

//         const allProducts = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             image: data.image || data.imageUrl || "",
//             imageUrl: data.imageUrl || data.image || "",
//             featured: data.featured === true,
//           };
//         });

//         // 1. Build Categories dynamically
//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count); // Sort by most products

//         setCategories(dynamicCategories);

//         // 2. Featured products
//         let featured = allProducts.filter((p) => p.featured).slice(0, 3);

//         // If less than 3 featured, fill with other products
//         if (featured.length < 3) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 3 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 3));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//               <Sparkles size={13} />
//               Interior & Furniture
//             </div>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//               Discover thoughtfully selected furniture and interior solutions
//               designed to bring comfort, functionality and timeless style to
//               your space.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : categories.reduce((sum, c) => sum + c.count, 0) || "0"}+
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Furniture options</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : categories.length || "0"}+
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Room categories</p>
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-2xl font-bold">VIP</p>
//                 <p className="mt-1 text-xs text-slate-400">Interior solutions</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
//               <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
//                 <div className="text-center">
//                   <Sofa size={76} strokeWidth={1} className="mx-auto text-slate-400" />
//                   <p className="mt-5 text-sm font-semibold text-slate-300">
//                     Beautiful furniture
//                   </p>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Designed for modern spaces
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
//                   <Check size={17} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-white">Quality focused</p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories - Dynamic from Firebase */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Explore
//             </p>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-2 max-w-xl text-sm text-slate-500">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon = categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
//                     <Icon size={21} strokeWidth={1.7} />
//                   </div>

//                   <h3 className="mt-5 text-base font-bold text-slate-900">
//                     {category.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-500">
//                     {category.count} product{category.count !== 1 ? "s" : ""} available
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-600">
//                     Explore
//                     <ArrowRight
//                       size={14}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products - from Firebase */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 Featured
//               </p>
//               <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-7 grid gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9f8] transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Sofa
//                         size={54}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400"
//                       />
//                     )}
//                   </div>

//                   <div className="p-5">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1.5 text-base font-bold text-slate-900">
//                       {product.name}
//                     </h3>
//                     <div className="mt-4 flex items-center justify-between">
//                       <p className="text-lg font-bold text-slate-900">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white">
//                         <ArrowRight size={15} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Interior services */}
//       {/*  */}

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-2xl font-bold text-slate-900">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Same collection as ERP
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         // Categories from products
//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         // Featured (or latest products if none marked featured)
//         let featured = allProducts.filter((p) => p.featured).slice(0, 3);
//         if (featured.length < 3) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 3 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 3));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//               <Sparkles size={13} />
//               Interior & Furniture
//             </div>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//               Discover thoughtfully selected furniture and interior solutions
//               designed to bring comfort, functionality and timeless style to
//               your space.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${totalProducts}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Furniture options</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${categories.length}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Room categories</p>
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-2xl font-bold">Akrish</p>
//                 <p className="mt-1 text-xs text-slate-400">Interior solutions</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
//               <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
//                 <div className="text-center">
//                   <Sofa size={76} strokeWidth={1} className="mx-auto text-slate-400" />
//                   <p className="mt-5 text-sm font-semibold text-slate-300">
//                     Beautiful furniture
//                   </p>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Designed for modern spaces
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
//                   <Check size={17} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-white">Quality focused</p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Explore
//             </p>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-2 max-w-xl text-sm text-slate-500">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
//                     <Icon size={21} strokeWidth={1.7} />
//                   </div>

//                   <h3 className="mt-5 text-base font-bold text-slate-900">
//                     {category.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-500">
//                     {category.count} product{category.count !== 1 ? "s" : ""}{" "}
//                     available
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-600">
//                     Explore
//                     <ArrowRight
//                       size={14}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 Featured
//               </p>
//               <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-7 grid gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9f8] transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Sofa
//                         size={54}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400"
//                       />
//                     )}
//                   </div>

//                   <div className="p-5">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1.5 text-base font-bold text-slate-900">
//                       {product.name}
//                     </h3>
//                     <div className="mt-4 flex items-center justify-between">
//                       <p className="text-lg font-bold text-slate-900">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white">
//                         <ArrowRight size={15} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-2xl font-bold text-slate-900">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// /** Fallback hero when no product image is available */
// const HERO_FALLBACK =
//   "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 3);
//         if (featured.length < 3) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 3 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 3));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   // Hero image: first featured product with an image, else fallback
//   const heroImage =
//     featuredProducts.find((p) => p.image || p.imageUrl)?.image ||
//     featuredProducts.find((p) => p.image || p.imageUrl)?.imageUrl ||
//     HERO_FALLBACK;

//   const heroCaption =
//     featuredProducts.find((p) => p.image || p.imageUrl)?.name ||
//     "Beautiful furniture";

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//               <Sparkles size={13} />
//               Interior & Furniture
//             </div>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//               Discover thoughtfully selected furniture and interior solutions
//               designed to bring comfort, functionality and timeless style to
//               your space.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${totalProducts}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Furniture options</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${categories.length}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Room categories</p>
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-2xl font-bold">Akrish</p>
//                 <p className="mt-1 text-xs text-slate-400">Interior solutions</p>
//               </div>
//             </div>
//           </div>

//           {/* Hero visual — image instead of empty sofa placeholder */}
//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
//               <div className="relative h-full w-full">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={heroImage}
//                   alt={heroCaption}
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
//                   <p className="text-sm font-semibold text-white drop-shadow">
//                     {heroCaption}
//                   </p>
//                   <p className="mt-0.5 text-xs text-white/70">
//                     Designed for modern spaces
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-4 -left-2 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur sm:-left-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
//                   <Check size={17} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-white">
//                     Quality focused
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Explore
//             </p>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-2 max-w-xl text-sm text-slate-500">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
//                     <Icon size={21} strokeWidth={1.7} />
//                   </div>

//                   <h3 className="mt-5 text-base font-bold text-slate-900">
//                     {category.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-500">
//                     {category.count} product{category.count !== 1 ? "s" : ""}{" "}
//                     available
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-600">
//                     Explore
//                     <ArrowRight
//                       size={14}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 Featured
//               </p>
//               <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-7 grid gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9f8] transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Sofa
//                         size={54}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400"
//                       />
//                     )}
//                   </div>

//                   <div className="p-5">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1.5 text-base font-bold text-slate-900">
//                       {product.name}
//                     </h3>
//                     <div className="mt-4 flex items-center justify-between">
//                       <p className="text-lg font-bold text-slate-900">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white">
//                         <ArrowRight size={15} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-2xl font-bold text-slate-900">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// /** Curated furniture / interior images (Unsplash) */
// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// const INSPIRATION_IMAGES = [
//   {
//     src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
//     label: "Living room",
//     alt: "Modern green sofa in a bright living room",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
//     label: "Dining",
//     alt: "Elegant dining table and chairs",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
//     label: "Bedroom",
//     alt: "Minimal bedroom with wooden furniture",
//   },
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 3);
//         if (featured.length < 3) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 3 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 3));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//               <Sparkles size={13} />
//               Interior & Furniture
//             </div>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//               Discover thoughtfully selected furniture and interior solutions
//               designed to bring comfort, functionality and timeless style to
//               your space.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${totalProducts}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Furniture options</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">
//                   {loading ? "..." : `${categories.length}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Room categories</p>
//               </div>
//               <div className="hidden sm:block">
//                 <p className="text-2xl font-bold">Akrish</p>
//                 <p className="mt-1 text-xs text-slate-400">Interior solutions</p>
//               </div>
//             </div>
//           </div>

//           {/* Hero furniture image */}
//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
//               <div className="relative h-full w-full">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={HERO_IMAGE}
//                   alt="Modern living room with stylish furniture"
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
//                   <p className="text-sm font-semibold text-white drop-shadow">
//                     Curated interiors
//                   </p>
//                   <p className="mt-0.5 text-xs text-white/75">
//                     Designed for modern Indian homes
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-4 -left-2 rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur sm:-left-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
//                   <Check size={17} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-white">
//                     Quality focused
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Extra furniture inspiration images */}
//       {/*  */}

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Explore
//             </p>
//             <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-2 max-w-xl text-sm text-slate-500">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
//                     <Icon size={21} strokeWidth={1.7} />
//                   </div>

//                   <h3 className="mt-5 text-base font-bold text-slate-900">
//                     {category.title}
//                   </h3>

//                   <p className="mt-2 text-xs leading-5 text-slate-500">
//                     {category.count} product{category.count !== 1 ? "s" : ""}{" "}
//                     available
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-600">
//                     Explore
//                     <ArrowRight
//                       size={14}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                 Featured
//               </p>
//               <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-7 grid gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9f8] transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Sofa
//                         size={54}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400"
//                       />
//                     )}
//                   </div>

//                   <div className="p-5">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1.5 text-base font-bold text-slate-900">
//                       {product.name}
//                     </h3>
//                     <div className="mt-4 flex items-center justify-between">
//                       <p className="text-lg font-bold text-slate-900">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white">
//                         <ArrowRight size={15} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-2xl font-bold text-slate-900">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 4);
//         if (featured.length < 4) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 4 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 4));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
//           <div>
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 sm:mb-5">
//               <Sparkles size={13} />
//               Furniture
//             </div>

//             <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Create spaces you will love to live in.
//             </h1>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
//               Discover thoughtfully selected furniture and interior solutions
//               designed to bring comfort, functionality and timeless style to
//               your space.
//             </p>

//             {/* <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
//               <Link
//                 href="/products"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
//               >
//                 Explore furniture
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
//               >
//                 My account
//               </Link>
//             </div> */}

//                         <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:max-w-md sm:gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-3 text-center text-xs font-semibold text-slate-950 transition hover:bg-slate-100 sm:flex-1 sm:gap-2 sm:px-6 sm:text-sm"
//               >
//                 <span className="truncate">Explore furniture</span>
//                 <ArrowRight size={15} className="shrink-0 sm:h-[17px] sm:w-[17px]" />
//               </Link>

//               <Link
//                 href="/account"
//                 className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 px-3 py-3 text-center text-xs font-semibold text-white transition hover:bg-white/10 sm:flex-1 sm:px-6 sm:text-sm"
//               >
//                 My account
//               </Link>
//             </div>

//             <div className="mt-6 grid max-w-md grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-2">
//               <div>
//                 <p className="text-xl font-bold sm:text-2xl">
//                   {loading ? "..." : `${totalProducts}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Furniture options</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold sm:text-2xl">
//                   {loading ? "..." : `${categories.length}+`}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">Room categories</p>
//               </div>

//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:rounded-3xl">
//               <div className="relative h-full w-full">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={HERO_IMAGE}
//                   alt="Modern living room with stylish furniture"
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                   <p className="text-sm font-semibold text-white drop-shadow">
//                     Curated interiors
//                   </p>
//                   <p className="mt-0.5 text-xs text-white/75">
//                     Designed for modern Indian homes
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-3 -left-1 rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur sm:-bottom-4 sm:-left-4 sm:p-4">
//               <div className="flex items-center gap-2 sm:gap-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-900 sm:h-9 sm:w-9">
//                   <Check size={16} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-white">
//                     Quality focused
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories — 2 per row on mobile */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Explore
//             </p>
//             <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-1.5 max-w-xl text-xs text-slate-500 sm:mt-2 sm:text-sm">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-10 flex justify-center sm:mt-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-xl border border-slate-200 bg-white p-3.5 transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:rounded-2xl sm:p-5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
//                     <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                       className="hidden sm:block"
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-base">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
//                     {category.count} product{category.count !== 1 ? "s" : ""}
//                   </p>

//                   <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-slate-600 sm:mt-5 sm:text-xs">
//                     Explore
//                     <ArrowRight
//                       size={12}
//                       className="transition group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products — 2 per row on mobile, smaller images */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//                 Featured
//               </p>
//               <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-10 flex justify-center sm:mt-12">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f8] transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
//                 >
//                   {/* Smaller image on mobile */}
//                   <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100 sm:aspect-[4/3]">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                       />
//                     ) : (
//                       <Sofa
//                         size={36}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400 sm:h-14 sm:w-14"
//                       />
//                     )}
//                   </div>

//                   <div className="p-2.5 sm:p-5">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:text-base">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2 flex items-center justify-between gap-1 sm:mt-4">
//                       <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white sm:h-8 sm:w-8">
//                         <ArrowRight size={13} className="sm:h-[15px] sm:w-[15px]" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 4);
//         if (featured.length < 4) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 4 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 4));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero — text left, image right */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//           <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
//             {/* Left: copy */}
//             <div className="order-1 min-w-0">
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
//                 <Sparkles size={13} />
//                 Furniture
//               </div>

//               <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
//                 Create spaces you will love to live in.
//               </h1>

//               <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
//                 Discover thoughtfully selected furniture and interior solutions
//                 designed to bring comfort, functionality and timeless style to
//                 your space.
//               </p>

//               <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:max-w-md sm:gap-3">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-3 text-center text-xs font-semibold text-slate-950 transition hover:bg-slate-100 sm:flex-1 sm:gap-2 sm:px-6 sm:text-sm"
//                 >
//                   <span className="truncate">Explore furniture</span>
//                   <ArrowRight
//                     size={15}
//                     className="shrink-0 sm:h-[17px] sm:w-[17px]"
//                   />
//                 </Link>

//                 <Link
//                   href="/account"
//                   className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 px-3 py-3 text-center text-xs font-semibold text-white transition hover:bg-white/10 sm:flex-1 sm:px-6 sm:text-sm"
//                 >
//                   My account
//                 </Link>
//               </div>

//               <div className="mt-6 grid max-w-md grid-cols-2 gap-4 sm:mt-8">
//                 <div>
//                   <p className="text-xl font-bold sm:text-2xl">
//                     {loading ? "..." : `${totalProducts}+`}
//                   </p>
//                   <p className="mt-1 text-xs text-slate-400">
//                     Furniture options
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xl font-bold sm:text-2xl">
//                     {loading ? "..." : `${categories.length}+`}
//                   </p>
//                   <p className="mt-1 text-xs text-slate-400">Room categories</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right: image */}
//             <div className="order-2 relative min-w-0 md:justify-self-end">
//               <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 sm:rounded-3xl md:max-w-none">
//                 <div className="relative h-full w-full">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={HERO_IMAGE}
//                     alt="Modern living room with stylish furniture"
//                     className="h-full w-full object-cover object-center"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                     <p className="text-sm font-semibold text-white drop-shadow">
//                       Curated interiors
//                     </p>
//                     <p className="mt-0.5 text-xs text-white/75">
//                       Designed for modern Indian homes
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-3 left-3 rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur sm:-bottom-4 sm:left-4 sm:p-4">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-900 sm:h-9 sm:w-9">
//                     <Check size={16} />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-white">
//                       Quality focused
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-slate-400">
//                       Selected for your space
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Explore
//             </p>
//             <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-1.5 max-w-xl text-xs text-slate-500 sm:mt-2 sm:text-sm">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-10 flex justify-center sm:mt-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-xl border border-slate-200 bg-white p-3.5 transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:rounded-2xl sm:p-5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
//                     <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                       className="hidden sm:block"
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-base">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
//                     {category.count} product{category.count !== 1 ? "s" : ""}
//                   </p>

//                   <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-slate-600 sm:mt-5 sm:text-xs">
//                     Explore
//                     <ArrowRight
//                       size={12}
//                       className="transition group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//                 Featured
//               </p>
//               <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-10 flex justify-center sm:mt-12">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f8] transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                       />
//                     ) : (
//                       <Sofa
//                         size={36}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400 sm:h-14 sm:w-14"
//                       />
//                     )}
//                   </div>

//                   <div className="p-2.5 sm:p-5">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:text-base">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2 flex items-center justify-between gap-1 sm:mt-4">
//                       <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white sm:h-8 sm:w-8">
//                         <ArrowRight
//                           size={13}
//                           className="sm:h-[15px] sm:w-[15px]"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 4);
//         if (featured.length < 4) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 4 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 4));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//             {/* Hero: left content + right image (all breakpoints) */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//           <div className="grid grid-cols-2 items-center gap-3 sm:gap-8 lg:gap-12">
//             {/* LEFT — content */}
//             <div className="min-w-0">
//               <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[9px] font-medium text-slate-300 sm:mb-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
//                 <Sparkles size={11} className="sm:h-[13px] sm:w-[13px]" />
//                 Furniture
//               </div>

//               <h1 className="text-[18px] font-bold leading-snug tracking-tight sm:text-3xl sm:leading-tight lg:text-5xl xl:text-6xl">
//                 Create spaces you will love to live in.
//               </h1>

//               <p className="mt-2 line-clamp-3 text-[12px] leading-4 text-slate-300 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
//                 Discover thoughtfully selected furniture and interior solutions
//                 designed to bring comfort, functionality and timeless style to
//                 your space.
//               </p>

//               {/* Buttons: always 2 per row */}
//               <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-6 sm:max-w-md sm:gap-3">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[34px] items-center justify-center gap-1 rounded-md bg-white px-1.5 py-1.5 text-center text-[9px] font-semibold leading-tight text-slate-950 transition hover:bg-slate-100 sm:min-h-[44px] sm:gap-2 sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   <span className="truncate">Explore furniture</span>
//                   <ArrowRight size={11} className="shrink-0 sm:h-4 sm:w-4" />
//                 </Link>

//                 <Link
//                   href="/account"
//                   className="inline-flex min-h-[34px] items-center justify-center rounded-md border border-white/20 px-1.5 py-1.5 text-center text-[9px] font-semibold leading-tight text-white transition hover:bg-white/10 sm:min-h-[44px] sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   My account
//                 </Link>
//               </div>

//               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-6 sm:max-w-md sm:gap-4">
//                 <div>
//                   <p className="text-sm font-bold sm:text-2xl">
//                     {loading ? "..." : `${totalProducts}+`}
//                   </p>
//                   <p className="mt-0.5 text-[9px] text-slate-400 sm:text-xs">
//                     Furniture options
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold sm:text-2xl">
//                     {loading ? "..." : `${categories.length}+`}
//                   </p>
//                   <p className="mt-0.5 text-[9px] text-slate-400 sm:text-xs">
//                     Room categories
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — taller image */}
//             <div className="relative min-w-0 self-stretch">
//               <div className="h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40 sm:min-h-[320px] sm:rounded-2xl lg:min-h-[420px] lg:rounded-3xl">
//                 <div className="relative h-full min-h-[220px] w-full sm:min-h-[320px] lg:min-h-[420px]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={HERO_IMAGE}
//                     alt="Modern living room with stylish furniture"
//                     className="absolute inset-0 h-full w-full object-cover object-center"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-5">
//                     <p className="text-[10px] font-semibold text-white drop-shadow sm:text-sm">
//                       Curated interiors
//                     </p>
//                     <p className="mt-0.5 hidden text-xs text-white/75 sm:block">
//                       Designed for modern Indian homes
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-2 left-0 hidden items-center gap-2 rounded-lg border border-white/10 bg-slate-900/90 p-2 shadow-xl backdrop-blur sm:-bottom-3 sm:flex sm:rounded-xl sm:p-3">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-slate-900 sm:h-9 sm:w-9 sm:rounded-lg">
//                   <Check size={14} className="sm:h-4 sm:w-4" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-semibold text-white sm:text-xs">
//                     Quality focused
//                   </p>
//                   <p className="text-[8px] text-slate-400 sm:text-[10px]">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Explore
//             </p>
//             <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-1.5 max-w-xl text-xs text-slate-500 sm:mt-2 sm:text-sm">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-10 flex justify-center sm:mt-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-xl border border-slate-200 bg-white p-3.5 transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:rounded-2xl sm:p-5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
//                     <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                       className="hidden sm:block"
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-base">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
//                     {category.count} product{category.count !== 1 ? "s" : ""}
//                   </p>

//                   <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-slate-600 sm:mt-5 sm:text-xs">
//                     Explore
//                     <ArrowRight
//                       size={12}
//                       className="transition group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//                 Featured
//               </p>
//               <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-10 flex justify-center sm:mt-12">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f8] transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                       />
//                     ) : (
//                       <Sofa
//                         size={36}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400 sm:h-14 sm:w-14"
//                       />
//                     )}
//                   </div>

//                   <div className="p-2.5 sm:p-5">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:text-base">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2 flex items-center justify-between gap-1 sm:mt-4">
//                       <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white sm:h-8 sm:w-8">
//                         <ArrowRight
//                           size={13}
//                           className="sm:h-[15px] sm:w-[15px]"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 4);
//         if (featured.length < 4) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 4 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 4));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//           <div className="grid grid-cols-2 items-center gap-3 sm:gap-8 lg:gap-12">
//             {/* LEFT */}
//             <div className="min-w-0">
//               <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 sm:mb-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
//                 <Sparkles size={12} className="sm:h-[13px] sm:w-[13px]" />
//                 Furniture
//               </div>

//               <h1 className="text-[20px] font-bold leading-snug tracking-tight sm:text-3xl sm:leading-tight lg:text-5xl xl:text-6xl">
//                 Create spaces you will love to live in.
//               </h1>

//               <p className="mt-2.5 line-clamp-4 text-[13px] leading-5 text-slate-300 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
//                 Discover thoughtfully selected furniture and interior solutions
//                 designed to bring comfort, functionality and timeless style to
//                 your space.
//               </p>

//               <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-6 sm:max-w-md sm:gap-3">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[38px] items-center justify-center gap-1 rounded-lg bg-white px-2 py-2 text-center text-[11px] font-semibold leading-tight text-slate-950 transition hover:bg-slate-100 sm:min-h-[44px] sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   <span className="truncate">Explore furniture</span>
//                   <ArrowRight size={13} className="shrink-0 sm:h-4 sm:w-4" />
//                 </Link>

//                 <Link
//                   href="/account"
//                   className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-white/20 px-2 py-2 text-center text-[11px] font-semibold leading-tight text-white transition hover:bg-white/10 sm:min-h-[44px] sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   My account
//                 </Link>
//               </div>

//               <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:max-w-md sm:gap-4">
//                 <div>
//                   <p className="text-base font-bold sm:text-2xl">
//                     {loading ? "..." : `${totalProducts}+`}
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
//                     Furniture options
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-base font-bold sm:text-2xl">
//                     {loading ? "..." : `${categories.length}+`}
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
//                     Room categories
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="relative min-w-0 self-stretch">
//               <div className="h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40 sm:min-h-[320px] sm:rounded-2xl lg:min-h-[420px] lg:rounded-3xl">
//                 <div className="relative h-full min-h-[220px] w-full sm:min-h-[320px] lg:min-h-[420px]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={HERO_IMAGE}
//                     alt="Modern living room with stylish furniture"
//                     className="absolute inset-0 h-full w-full object-cover object-center"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-5">
//                     <p className="text-xs font-semibold text-white drop-shadow sm:text-sm">
//                       Curated interiors
//                     </p>
//                     <p className="mt-0.5 hidden text-xs text-white/75 sm:block">
//                       Designed for modern Indian homes
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-2 left-0 hidden items-center gap-2 rounded-lg border border-white/10 bg-slate-900/90 p-2 shadow-xl backdrop-blur sm:-bottom-3 sm:flex sm:rounded-xl sm:p-3">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-slate-900 sm:h-9 sm:w-9 sm:rounded-lg">
//                   <Check size={14} className="sm:h-4 sm:w-4" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-semibold text-white sm:text-xs">
//                     Quality focused
//                   </p>
//                   <p className="text-[8px] text-slate-400 sm:text-[10px]">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Explore
//             </p>
//             <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-1.5 max-w-xl text-xs text-slate-500 sm:mt-2 sm:text-sm">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-10 flex justify-center sm:mt-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-xl border border-slate-200 bg-white p-3.5 transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:rounded-2xl sm:p-5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
//                     <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                       className="hidden sm:block"
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-base">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
//                     {category.count} product{category.count !== 1 ? "s" : ""}
//                   </p>

//                   <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-slate-600 sm:mt-5 sm:text-xs">
//                     Explore
//                     <ArrowRight
//                       size={12}
//                       className="transition group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//                 Featured
//               </p>
//               <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-10 flex justify-center sm:mt-12">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f8] transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
//                 >
//                   <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                       />
//                     ) : (
//                       <Sofa
//                         size={36}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400 sm:h-14 sm:w-14"
//                       />
//                     )}
//                   </div>

//                   <div className="p-2.5 sm:p-5">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:text-base">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2 flex items-center justify-between gap-1 sm:mt-4">
//                       <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                         {formatCurrency(product.price)}
//                       </p>
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white sm:h-8 sm:w-8">
//                         <ArrowRight
//                           size={13}
//                           className="sm:h-[15px] sm:w-[15px]"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   Home,
//   Palette,
//   Ruler,
//   Sofa,
//   Sparkles,
//   Loader2,
//   LayoutGrid,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   /** Payable / effective price */
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// const categoryIcons: Record<string, typeof Sofa> = {
//   "Living Room": Sofa,
//   "Dining Room": Home,
//   Bedroom: Sparkles,
//   Office: Ruler,
//   default: LayoutGrid,
// };

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, number> = {};
//         allProducts.forEach((p) => {
//           if (p.category) {
//             categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, count]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 4);
//         if (featured.length < 4) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 4 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 4));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-950 text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

//         <div className="relative mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//           <div className="grid grid-cols-2 items-center gap-3 sm:gap-8 lg:gap-12">
//             <div className="min-w-0">
//               <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 sm:mb-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
//                 <Sparkles size={12} className="sm:h-[13px] sm:w-[13px]" />
//                 Furniture
//               </div>

//               <h1 className="text-[20px] font-bold leading-snug tracking-tight sm:text-3xl sm:leading-tight lg:text-5xl xl:text-6xl">
//                 Create spaces you will love to live in.
//               </h1>

//               <p className="mt-2.5 line-clamp-4 text-[13px] leading-5 text-slate-300 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
//                 Discover thoughtfully selected furniture and interior solutions
//                 designed to bring comfort, functionality and timeless style to
//                 your space.
//               </p>

//               <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-6 sm:max-w-md sm:gap-3">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[38px] items-center justify-center gap-1 rounded-lg bg-white px-2 py-2 text-center text-[11px] font-semibold leading-tight text-slate-950 transition hover:bg-slate-100 sm:min-h-[44px] sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   <span className="truncate">Explore furniture</span>
//                   <ArrowRight size={13} className="shrink-0 sm:h-4 sm:w-4" />
//                 </Link>

//                 <Link
//                   href="/account"
//                   className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-white/20 px-2 py-2 text-center text-[11px] font-semibold leading-tight text-white transition hover:bg-white/10 sm:min-h-[44px] sm:px-4 sm:py-3 sm:text-sm"
//                 >
//                   My account
//                 </Link>
//               </div>

//               <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:max-w-md sm:gap-4">
//                 <div>
//                   <p className="text-base font-bold sm:text-2xl">
//                     {loading ? "..." : `${totalProducts}+`}
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
//                     Furniture options
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-base font-bold sm:text-2xl">
//                     {loading ? "..." : `${categories.length}+`}
//                   </p>
//                   <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
//                     Room categories
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative min-w-0 self-stretch">
//               <div className="h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40 sm:min-h-[320px] sm:rounded-2xl lg:min-h-[420px] lg:rounded-3xl">
//                 <div className="relative h-full min-h-[220px] w-full sm:min-h-[320px] lg:min-h-[420px]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={HERO_IMAGE}
//                     alt="Modern living room with stylish furniture"
//                     className="absolute inset-0 h-full w-full object-cover object-center"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-5">
//                     <p className="text-xs font-semibold text-white drop-shadow sm:text-sm">
//                       Curated interiors
//                     </p>
//                     <p className="mt-0.5 hidden text-xs text-white/75 sm:block">
//                       Designed for modern Indian homes
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-2 left-0 hidden items-center gap-2 rounded-lg border border-white/10 bg-slate-900/90 p-2 shadow-xl backdrop-blur sm:-bottom-3 sm:flex sm:rounded-xl sm:p-3">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-slate-900 sm:h-9 sm:w-9 sm:rounded-lg">
//                   <Check size={14} className="sm:h-4 sm:w-4" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-semibold text-white sm:text-xs">
//                     Quality focused
//                   </p>
//                   <p className="text-[8px] text-slate-400 sm:text-[10px]">
//                     Selected for your space
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Explore
//             </p>
//             <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//               Shop by room
//             </h2>
//             <p className="mt-1.5 max-w-xl text-xs text-slate-500 sm:mt-2 sm:text-sm">
//               Find furniture that fits naturally into every part of your home or
//               workspace.
//             </p>
//           </div>

//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//           >
//             View all
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-10 flex justify-center sm:mt-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : categories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-4">
//             {categories.map((category) => {
//               const Icon =
//                 categoryIcons[category.title] || categoryIcons.default;

//               return (
//                 <Link
//                   key={category.title}
//                   href={category.href}
//                   className="group rounded-xl border border-slate-200 bg-white p-3.5 transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:rounded-2xl sm:p-5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
//                     <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                       className="hidden sm:block"
//                     />
//                   </div>

//                   <h3 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-base">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
//                     {category.count} product{category.count !== 1 ? "s" : ""}
//                   </p>

//                   <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-slate-600 sm:mt-5 sm:text-xs">
//                     Explore
//                     <ArrowRight
//                       size={12}
//                       className="transition group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//             No categories available yet.
//           </div>
//         )}
//       </section>

//       {/* Featured products */}
//       <section className="border-y border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//                 Featured
//               </p>
//               <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//                 Selected for modern furniture
//               </h2>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
//             >
//               Browse collection
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-10 flex justify-center sm:mt-12">
//               <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f8] transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl"
//                 >
//                   <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                       />
//                     ) : (
//                       <Sofa
//                         size={36}
//                         strokeWidth={1}
//                         className="text-slate-300 transition group-hover:text-slate-400 sm:h-14 sm:w-14"
//                       />
//                     )}
//                     {product.hasDiscount && (
//                       <span className="absolute left-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                         {product.discountPercent}% OFF
//                       </span>
//                     )}
//                   </div>

//                   <div className="p-2.5 sm:p-5">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:text-base">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2 flex items-end justify-between gap-1 sm:mt-4">
//                       <div className="min-w-0">
//                         {product.hasDiscount ? (
//                           <>
//                             <p className="text-[10px] text-slate-400 line-through sm:text-xs">
//                               {formatCurrency(product.listPrice)}
//                             </p>
//                             <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                           </>
//                         ) : (
//                           <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                             {formatCurrency(product.price)}
//                           </p>
//                         )}
//                       </div>
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition group-hover:bg-slate-900 group-hover:text-white sm:h-8 sm:w-8">
//                         <ArrowRight
//                           size={13}
//                           className="sm:h-[15px] sm:w-[15px]"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500 sm:mt-10 sm:py-12">
//               No featured products available yet.
//               <br />
//               <Link
//                 href="/products"
//                 className="mt-2 inline-block font-semibold text-slate-800"
//               >
//                 Browse all products →
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <Palette size={25} className="mx-auto text-slate-500" />
//           <h2 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
//             Explore our furniture collection and find pieces that complement
//             your interior.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Shop furniture
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Loader2,
//   Sofa,
//   Users,
//   Gem,
//   BadgeCheck,
//   Leaf,
//   Hammer,
//   RotateCcw,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return (
//     CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default
//   );
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );

//             const img = String(data.imageUrl || data.image || "").trim();

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         const dynamicCategories: CategoryItem[] = Object.entries(categoryMap)
//           .map(([title, { count, image }]) => ({
//             title,
//             count,
//             href: `/products?category=${encodeURIComponent(title)}`,
//             image,
//           }))
//           .sort((a, b) => b.count - a.count);

//         setCategories(dynamicCategories);

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }

//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   return (
//     <main className="min-h-screen bg-[#f7f3ec]">
//       {/* ——— Hero ——— */}
//       <section className="relative overflow-hidden">
//         <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
//           <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
//             <div className="order-2 lg:order-1">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b8956c]">
//                 New collection
//               </p>
//               <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem]">
//                 Timeless{" "}
//                 <span className="text-[#b8956c]">Furniture</span>
//                 <br />
//                 for Living
//               </h1>
//               <p className="mt-4 max-w-md text-sm leading-6 text-[#6b6560] sm:text-base sm:leading-7">
//                 Handcrafted pieces built with premium sustainable materials —
//                 designed to elevate your home and endure through the years.
//               </p>
//               <div className="mt-7 flex flex-wrap items-center gap-3">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//                 >
//                   Shop Collection
//                   <ArrowRight size={16} />
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="inline-flex min-h-[48px] items-center rounded-full border border-[#e8e2d8] bg-white/70 px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white"
//                 >
//                   Our Story
//                 </Link>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2">
//               <div className="relative overflow-hidden rounded-[1.5rem] shadow-soft sm:rounded-[2rem]">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={HERO_IMAGE}
//                   alt="Modern living room furniture"
//                   className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814]/25 via-transparent to-transparent" />
//               </div>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-[#e8e2d8] bg-white/70 px-3 py-5 backdrop-blur-sm sm:mt-12 sm:gap-6 sm:px-8 sm:py-6">
//             <div className="flex flex-col items-center text-center sm:flex-row sm:gap-3 sm:text-left">
//               <Users className="mb-1.5 h-5 w-5 text-[#b8956c] sm:mb-0" strokeWidth={1.5} />
//               <div>
//                 <p className="text-lg font-semibold text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="text-[10px] text-[#6b6560] sm:text-xs">
//                   Happy customers
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center text-center sm:flex-row sm:gap-3 sm:text-left">
//               <Gem className="mb-1.5 h-5 w-5 text-[#b8956c] sm:mb-0" strokeWidth={1.5} />
//               <div>
//                 <p className="text-lg font-semibold text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${totalProducts || 340}+`}
//                 </p>
//                 <p className="text-[10px] text-[#6b6560] sm:text-xs">
//                   Unique pieces
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center text-center sm:flex-row sm:gap-3 sm:text-left">
//               <BadgeCheck className="mb-1.5 h-5 w-5 text-[#b8956c] sm:mb-0" strokeWidth={1.5} />
//               <div>
//                 <p className="text-lg font-semibold text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="text-[10px] text-[#6b6560] sm:text-xs">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ——— Shop by category ——— */}
//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
//               >
//                 <div className="aspect-[4/5] overflow-hidden bg-[#faf7f2] sm:aspect-[3/4]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="px-3 py-3 sm:px-4 sm:py-4">
//                   <h3 className="text-sm font-semibold text-[#1a1a1a] sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-5 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ——— Best sellers / Featured ——— */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf7f2]/80">
//         <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="flex items-end justify-between gap-4">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
//                 >
//                   <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f3ec]">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center">
//                         <Sofa size={40} className="text-[#e8e2d8]" strokeWidth={1} />
//                       </div>
//                     )}
//                     {product.hasDiscount && (
//                       <span className="absolute left-3 top-3 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     )}
//                   </div>
//                   <div className="p-3.5 sm:p-4">
//                     <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2.5 flex items-end justify-between gap-2">
//                       <div>
//                         {product.hasDiscount ? (
//                           <>
//                             <p className="text-xs text-[#6b6560] line-through">
//                               {formatCurrency(product.listPrice)}
//                             </p>
//                             <p className="text-base font-semibold text-[#1a1a1a]">
//                               {formatCurrency(product.price)}
//                             </p>
//                           </>
//                         ) : (
//                           <p className="text-base font-semibold text-[#1a1a1a]">
//                             {formatCurrency(product.price)}
//                           </p>
//                         )}
//                       </div>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-white opacity-0 transition group-hover:opacity-100">
//                         <ArrowRight size={14} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products yet.{" "}
//               <Link href="/products" className="font-semibold text-[#1a1a1a]">
//                 Browse all →
//               </Link>
//             </div>
//           )}

//           <div className="mt-6 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ——— Story strip ——— */}
//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src="https://images.unsplash.com/photo-1565793298595-6a381b3a0f5b?auto=format&fit=crop&w=1000&q=80"
//               alt="Craftsmanship"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f3ec] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ——— CTA ——— */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Loader2,
//   Sofa,
//   Leaf,
//   Hammer,
//   RotateCcw,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// /** Studio-style hero (person + sofa) — swap for your own asset anytime */
// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );
//             const img = String(data.imageUrl || data.image || "").trim();

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         setCategories(
//           Object.entries(categoryMap)
//             .map(([title, { count, image }]) => ({
//               title,
//               count,
//               href: `/products?category=${encodeURIComponent(title)}`,
//               image,
//             }))
//             .sort((a, b) => b.count - a.count)
//         );

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }
//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   return (
//     <main className="min-h-screen bg-[#f7f3ec]">
//       {/* ========== HERO (Luma layout) ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f0e8] via-[#f7f3ec] to-[#efe8dc]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[min(560px,78vh)] lg:grid-cols-2">
//           {/* Left: copy + CTAs + stats */}
//           <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:pl-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
//               New collection 2025
//             </p>

//             <h1 className="font-display mt-4 text-[2.35rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
//               Timeless
//               <br />
//               <span className="text-[#b8956c]">Furniture</span>
//               <br />
//               for Living
//             </h1>

//             <p className="mt-5 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
//               Handcrafted pieces built with premium sustainable materials
//               designed to elevate your home and endure through the years.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
//               >
//                 Shop Collection
//                 <ArrowRight size={15} />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
//               >
//                 Our Story
//               </Link>
//             </div>

//             {/* Stats under buttons — same position as reference */}
//             <div className="mt-10 flex flex-wrap gap-8 sm:mt-12 sm:gap-12">
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Happy customers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Unique pieces
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right: hero image — edge-to-edge on large screens */}
//           <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={HERO_IMAGE}
//               alt="Timeless furniture for living"
//               className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
//             />
//             {/* Soft fade into cream on the left edge (desktop) */}
//             <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#f5f0e8] to-transparent lg:block" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Shop by category ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
//               >
//                 <div className="aspect-[4/5] overflow-hidden bg-[#faf7f2] sm:aspect-[3/4]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="px-3 py-3 sm:px-4 sm:py-4">
//                   <h3 className="text-sm font-semibold text-[#1a1a1a] sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-5 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ========== Best sellers ========== */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf7f2]/80">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//           <div className="flex items-end justify-between gap-4">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : featuredProducts.length > 0 ? (
//             <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-3">
//               {featuredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
//                 >
//                   <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f3ec]">
//                     {product.image || product.imageUrl ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={product.image || product.imageUrl}
//                         alt={product.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center">
//                         <Sofa
//                           size={40}
//                           className="text-[#e8e2d8]"
//                           strokeWidth={1}
//                         />
//                       </div>
//                     )}
//                     {product.hasDiscount && (
//                       <span className="absolute left-3 top-3 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     )}
//                   </div>
//                   <div className="p-3.5 sm:p-4">
//                     <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                       {product.category}
//                     </p>
//                     <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                       {product.name}
//                     </h3>
//                     <div className="mt-2.5 flex items-end justify-between gap-2">
//                       <div>
//                         {product.hasDiscount ? (
//                           <>
//                             <p className="text-xs text-[#6b6560] line-through">
//                               {formatCurrency(product.listPrice)}
//                             </p>
//                             <p className="text-base font-semibold text-[#1a1a1a]">
//                               {formatCurrency(product.price)}
//                             </p>
//                           </>
//                         ) : (
//                           <p className="text-base font-semibold text-[#1a1a1a]">
//                             {formatCurrency(product.price)}
//                           </p>
//                         )}
//                       </div>
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-white opacity-0 transition group-hover:opacity-100">
//                         <ArrowRight size={14} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products yet.{" "}
//               <Link href="/products" className="font-semibold text-[#1a1a1a]">
//                 Browse all →
//               </Link>
//             </div>
//           )}

//           <div className="mt-6 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== Story ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src="https://images.unsplash.com/photo-1565793298595-6a381b3a0f5b?auto=format&fit=crop&w=1000&q=80"
//               alt="Craftsmanship"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f3ec] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Plus,
//   Sofa,
//   Leaf,
//   Hammer,
//   RotateCcw,
//   Star,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   isNew?: boolean;
//   rating: number;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// const WISHLIST_KEY = "wishlist";
// const CART_KEY = "cart";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
// }

// /** Stable 4.0–5.0 rating from id (display only when product has no rating) */
// function pseudoRating(id: string): number {
//   let h = 0;
//   for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
//   return Math.round((4 + (h % 11) / 10) * 10) / 10;
// }

// function readWishlistIds(): string[] {
//   try {
//     const raw = localStorage.getItem(WISHLIST_KEY);
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (Array.isArray(parsed)) {
//       return parsed
//         .map((x) =>
//           typeof x === "string" ? x : String(x?.productId || x?.id || "")
//         )
//         .filter(Boolean);
//     }
//   } catch {
//     /* ignore */
//   }
//   return [];
// }

// function writeWishlistIds(ids: string[]) {
//   try {
//     localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   } catch {
//     /* ignore */
//   }
// }

// function readCartIds(): Set<string> {
//   const set = new Set<string>();
//   try {
//     const raw = localStorage.getItem(CART_KEY);
//     if (!raw) return set;
//     const parsed = JSON.parse(raw);
//     const items = Array.isArray(parsed) ? parsed : parsed?.items || [];
//     for (const item of items) {
//       const id = String(item?.productId || item?.id || "");
//       if (id) set.add(id);
//     }
//   } catch {
//     /* ignore */
//   }
//   return set;
// }

// function addLocalCartItem(product: FeaturedProduct) {
//   try {
//     const raw = localStorage.getItem(CART_KEY);
//     let cart: Array<Record<string, unknown>> = [];
//     if (raw) {
//       const parsed = JSON.parse(raw);
//       cart = Array.isArray(parsed) ? parsed : parsed?.items || [];
//     }
//     const idx = cart.findIndex(
//       (i) => String(i.productId || i.id || "") === product.id
//     );
//     if (idx >= 0) {
//       const qty = Number(cart[idx].quantity || 1) + 1;
//       cart[idx] = { ...cart[idx], quantity: qty };
//     } else {
//       cart.push({
//         id: product.id,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//       });
//     }
//     localStorage.setItem(CART_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   } catch (e) {
//     console.error(e);
//   }
// }

// function StarRow({ rating }: { rating: number }) {
//   const full = Math.floor(rating);
//   const half = rating - full >= 0.5;
//   return (
//     <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
//       {Array.from({ length: 5 }).map((_, i) => {
//         const filled = i < full || (i === full && half);
//         return (
//           <Star
//             key={i}
//             size={12}
//             className={
//               filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");
//   const [wishlistIds, setWishlistIds] = useState<string[]>([]);
//   const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     setWishlistIds(readWishlistIds());
//     const sync = () => setWishlistIds(readWishlistIds());
//     window.addEventListener("wishlistUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("wishlistUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const now = Date.now();
//         const thirtyDays = 30 * 24 * 60 * 60 * 1000;

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );
//             const img = String(data.imageUrl || data.image || "").trim();
//             const createdMs =
//               typeof data.createdAt?.toMillis === "function"
//                 ? data.createdAt.toMillis()
//                 : typeof data.publishedAt?.toMillis === "function"
//                   ? data.publishedAt.toMillis()
//                   : 0;
//             const isNew = createdMs > 0 && now - createdMs < thirtyDays;
//             const rating =
//               Number(data.rating) > 0
//                 ? Number(data.rating)
//                 : pseudoRating(docSnap.id);
//             const description = String(
//               data.shortDescription || data.description || ""
//             ).trim();

//             return {
//               id: docSnap.id,
//               name: data.name || "Product",
//               category: data.category || "Other",
//               description:
//                 description.slice(0, 90) +
//                 (description.length > 90 ? "…" : ""),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               isNew,
//               rating,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         setCategories(
//           Object.entries(categoryMap)
//             .map(([title, { count, image }]) => ({
//               title,
//               count,
//               href: `/products?category=${encodeURIComponent(title)}`,
//               image,
//             }))
//             .sort((a, b) => b.count - a.count)
//         );

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }
//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterTabs = useMemo(() => {
//     const cats = Array.from(
//       new Set(featuredProducts.map((p) => p.category).filter(Boolean))
//     );
//     return ["All", ...cats];
//   }, [featuredProducts]);

//   const filteredFeatured = useMemo(() => {
//     if (filter === "All") return featuredProducts;
//     return featuredProducts.filter((p) => p.category === filter);
//   }, [featuredProducts, filter]);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   function toggleWishlist(e: React.MouseEvent, id: string) {
//     e.preventDefault();
//     e.stopPropagation();
//     setWishlistIds((prev) => {
//       const next = prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id];
//       writeWishlistIds(next);
//       return next;
//     });
//   }

//   function handleAdd(e: React.MouseEvent, product: FeaturedProduct) {
//     e.preventDefault();
//     e.stopPropagation();
//     addLocalCartItem(product);
//     setAddedIds((s) => new Set(s).add(product.id));
//     window.setTimeout(() => {
//       setAddedIds((s) => {
//         const n = new Set(s);
//         n.delete(product.id);
//         return n;
//       });
//     }, 1600);
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f3ec]">
//       {/* ========== HERO ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f0e8] via-[#f7f3ec] to-[#efe8dc]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[min(560px,78vh)] lg:grid-cols-2">
//           <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:pl-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
//               New collection 2025
//             </p>
//             <h1 className="font-display mt-4 text-[2.35rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
//               Timeless
//               <br />
//               <span className="text-[#b8956c]">Furniture</span>
//               <br />
//               for Living
//             </h1>
//             <p className="mt-5 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
//               Handcrafted pieces built with premium sustainable materials
//               designed to elevate your home and endure through the years.
//             </p>
//             <div className="mt-7 flex flex-wrap items-center gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
//               >
//                 Shop Collection
//                 <ArrowRight size={15} />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
//               >
//                 Our Story
//               </Link>
//             </div>
//             <div className="mt-10 flex flex-wrap gap-8 sm:mt-12 sm:gap-12">
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Happy customers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Unique pieces
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={HERO_IMAGE}
//               alt="Timeless furniture for living"
//               className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
//             />
//             <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#f5f0e8] to-transparent lg:block" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Shop by category (arrow overlay cards) ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group relative overflow-hidden rounded-2xl bg-[#ebe4d8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   {/* Gradient for text readability */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//                 </div>

//                 {/* Arrow button — top right */}
//                 <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur transition group-hover:bg-white sm:h-9 sm:w-9">
//                   <ArrowRight size={14} className="sm:h-4 sm:w-4" />
//                 </span>

//                 {/* Label on image */}
//                 <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                   <h3 className="text-sm font-semibold text-white sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-white/80">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-5 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ========== Best sellers (filters, badges, rating, wishlist, +) ========== */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf7f2]/80">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {/* Category filter pills */}
//           {!loading && filterTabs.length > 1 && (
//             <div className="mt-5 flex gap-2 overflow-x-auto pb-1 sm:mt-6 sm:flex-wrap sm:overflow-visible">
//               {filterTabs.map((tab) => {
//                 const active = filter === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setFilter(tab)}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#b8956c]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           )}

//           {loading ? (
//             <div className="mt-12 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : filteredFeatured.length > 0 ? (
//             <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-3">
//               {filteredFeatured.map((product) => {
//                 const wishlisted = wishlistIds.includes(product.id);
//                 const justAdded = addedIds.has(product.id);

//                 return (
//                   <Link
//                     key={product.id}
//                     href={`/products/${product.id}`}
//                     className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                   >
//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f3ec]">
//                       {product.image || product.imageUrl ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={product.image || product.imageUrl}
//                           alt={product.name}
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="flex h-full items-center justify-center">
//                           <Sofa
//                             size={40}
//                             className="text-[#e8e2d8]"
//                             strokeWidth={1}
//                           />
//                         </div>
//                       )}

//                       {/* Badges */}
//                       <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
//                         {product.hasDiscount ? (
//                           <span className="rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             −{product.discountPercent}%
//                           </span>
//                         ) : product.featured ? (
//                           <span className="rounded-full bg-[#e8a54b] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             Hot
//                           </span>
//                         ) : product.isNew ? (
//                           <span className="rounded-full bg-[#3d8b7a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             New
//                           </span>
//                         ) : null}
//                       </div>

//                       {/* Wishlist */}
//                       <button
//                         type="button"
//                         aria-label={
//                           wishlisted ? "Remove from wishlist" : "Add to wishlist"
//                         }
//                         onClick={(e) => toggleWishlist(e, product.id)}
//                         className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#6b6560] shadow-sm backdrop-blur transition hover:text-[#c45c4a] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                       >
//                         <Heart
//                           size={15}
//                           className={
//                             wishlisted
//                               ? "fill-[#c45c4a] text-[#c45c4a]"
//                               : ""
//                           }
//                           strokeWidth={1.75}
//                         />
//                       </button>
//                     </div>

//                     <div className="flex flex-1 flex-col p-3 sm:p-4">
//                       <div className="flex items-start justify-between gap-2">
//                         <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                           {product.category}
//                         </p>
//                         <StarRow rating={product.rating} />
//                       </div>

//                       <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                         {product.name}
//                       </h3>

//                       {product.description ? (
//                         <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8a847c] sm:text-xs">
//                           {product.description}
//                         </p>
//                       ) : null}

//                       <div className="mt-auto flex items-end justify-between gap-2 pt-3">
//                         <div>
//                           {product.hasDiscount ? (
//                             <>
//                               <p className="text-[11px] text-[#8a847c] line-through sm:text-xs">
//                                 {formatCurrency(product.listPrice)}
//                               </p>
//                               <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             </>
//                           ) : (
//                             <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="button"
//                           aria-label="Add to cart"
//                           onClick={(e) => handleAdd(e, product)}
//                           className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition sm:h-9 sm:w-9 ${
//                             justAdded
//                               ? "bg-emerald-600"
//                               : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
//                           }`}
//                         >
//                           <Plus size={16} strokeWidth={2.5} />
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products in this filter.{" "}
//               <button
//                 type="button"
//                 onClick={() => setFilter("All")}
//                 className="font-semibold text-[#1a1a1a]"
//               >
//                 Show all →
//               </button>
//             </div>
//           )}

//           <div className="mt-6 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== Story ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src="https://images.unsplash.com/photo-1565793298595-6a381b3a0f5b?auto=format&fit=crop&w=1000&q=80"
//               alt="Craftsmanship"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f3ec] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Plus,
//   Sofa,
//   Leaf,
//   Hammer,
//   RotateCcw,
//   Star,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   isNew?: boolean;
//   /** Only set when Firestore has a real rating */
//   rating?: number;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// /** Living room sofa / interior — not the previous chair hero */
// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85";

// const CRAFT_IMAGE =
//   "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// const WISHLIST_KEY = "wishlist";
// const CART_KEY = "cart";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
// }

// /** Parse rating from Firestore only — no dummy values */
// function parseFirebaseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ??
//     data.avgRating ??
//     data.averageRating ??
//     data.stars ??
//     data.reviewRating;

//   if (raw === undefined || raw === null || raw === "") return undefined;

//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;

//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function readWishlistIds(): string[] {
//   try {
//     const raw = localStorage.getItem(WISHLIST_KEY);
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (Array.isArray(parsed)) {
//       return parsed
//         .map((x) =>
//           typeof x === "string" ? x : String(x?.productId || x?.id || "")
//         )
//         .filter(Boolean);
//     }
//   } catch {
//     /* ignore */
//   }
//   return [];
// }

// function writeWishlistIds(ids: string[]) {
//   try {
//     localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   } catch {
//     /* ignore */
//   }
// }

// function addLocalCartItem(product: FeaturedProduct) {
//   try {
//     const raw = localStorage.getItem(CART_KEY);
//     let cart: Array<Record<string, unknown>> = [];
//     if (raw) {
//       const parsed = JSON.parse(raw);
//       cart = Array.isArray(parsed) ? parsed : parsed?.items || [];
//     }
//     const idx = cart.findIndex(
//       (i) => String(i.productId || i.id || "") === product.id
//     );
//     if (idx >= 0) {
//       const qty = Number(cart[idx].quantity || 1) + 1;
//       cart[idx] = { ...cart[idx], quantity: qty };
//     } else {
//       cart.push({
//         id: product.id,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//       });
//     }
//     localStorage.setItem(CART_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   } catch (e) {
//     console.error(e);
//   }
// }

// function StarRow({ rating }: { rating: number }) {
//   const full = Math.floor(rating);
//   const half = rating - full >= 0.5;
//   return (
//     <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
//       {Array.from({ length: 5 }).map((_, i) => {
//         const filled = i < full || (i === full && half);
//         return (
//           <Star
//             key={i}
//             size={12}
//             className={
//               filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");
//   const [wishlistIds, setWishlistIds] = useState<string[]>([]);
//   const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     setWishlistIds(readWishlistIds());
//     const sync = () => setWishlistIds(readWishlistIds());
//     window.addEventListener("wishlistUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("wishlistUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const now = Date.now();
//         const thirtyDays = 30 * 24 * 60 * 60 * 1000;

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );
//             const img = String(data.imageUrl || data.image || "").trim();
//             const createdAt = data.createdAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const publishedAt = data.publishedAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const createdMs =
//               typeof createdAt?.toMillis === "function"
//                 ? createdAt.toMillis()
//                 : typeof publishedAt?.toMillis === "function"
//                   ? publishedAt.toMillis()
//                   : 0;
//             const isNew = createdMs > 0 && now - createdMs < thirtyDays;
//             const rating = parseFirebaseRating(data);
//             const description = String(
//               data.shortDescription || data.description || ""
//             ).trim();

//             return {
//               id: docSnap.id,
//               name: String(data.name || "Product"),
//               category: String(data.category || "Other"),
//               description:
//                 description.slice(0, 90) +
//                 (description.length > 90 ? "…" : ""),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               isNew,
//               rating,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         setCategories(
//           Object.entries(categoryMap)
//             .map(([title, { count, image }]) => ({
//               title,
//               count,
//               href: `/products?category=${encodeURIComponent(title)}`,
//               image,
//             }))
//             .sort((a, b) => b.count - a.count)
//         );

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }
//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterTabs = useMemo(() => {
//     const cats = Array.from(
//       new Set(featuredProducts.map((p) => p.category).filter(Boolean))
//     );
//     return ["All", ...cats];
//   }, [featuredProducts]);

//   const filteredFeatured = useMemo(() => {
//     if (filter === "All") return featuredProducts;
//     return featuredProducts.filter((p) => p.category === filter);
//   }, [featuredProducts, filter]);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   function toggleWishlist(e: React.MouseEvent, id: string) {
//     e.preventDefault();
//     e.stopPropagation();
//     setWishlistIds((prev) => {
//       const next = prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id];
//       writeWishlistIds(next);
//       return next;
//     });
//   }

//   function handleAdd(e: React.MouseEvent, product: FeaturedProduct) {
//     e.preventDefault();
//     e.stopPropagation();
//     addLocalCartItem(product);
//     setAddedIds((s) => new Set(s).add(product.id));
//     window.setTimeout(() => {
//       setAddedIds((s) => {
//         const n = new Set(s);
//         n.delete(product.id);
//         return n;
//       });
//     }, 1600);
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f3ec]">
//       {/* ========== HERO ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f0e8] via-[#f7f3ec] to-[#efe8dc]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[min(480px,70vh)] lg:grid-cols-2">
//           <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:pl-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
//               New collection 2025
//             </p>
//             <h1 className="font-display mt-3 text-[2.2rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:mt-4 sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
//               Timeless
//               <br />
//               <span className="text-[#b8956c]">Furniture</span>
//               <br />
//               for Living
//             </h1>
//             <p className="mt-4 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
//               Handcrafted pieces built with premium sustainable materials
//               designed to elevate your home and endure through the years.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
//               >
//                 Shop Collection
//                 <ArrowRight size={15} />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
//               >
//                 Our Story
//               </Link>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-8 sm:mt-10 sm:gap-12">
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Happy customers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Unique pieces
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={HERO_IMAGE}
//               alt="Timeless furniture for living"
//               className="absolute inset-0 h-full w-full object-cover object-center"
//             />
//             <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#f5f0e8] to-transparent lg:block" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Shop by category ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-8 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group relative overflow-hidden rounded-2xl bg-[#ebe4d8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//                 </div>

//                 <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur transition group-hover:bg-white sm:h-9 sm:w-9">
//                   <ArrowRight size={14} className="sm:h-4 sm:w-4" />
//                 </span>

//                 <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                   <h3 className="text-sm font-semibold text-white sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-white/80">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-4 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ========== Best sellers ========== */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf7f2]/80">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {!loading && filterTabs.length > 1 && (
//             <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:mt-5 sm:flex-wrap sm:overflow-visible">
//               {filterTabs.map((tab) => {
//                 const active = filter === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setFilter(tab)}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#b8956c]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           )}

//           {loading ? (
//             <div className="mt-8 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : filteredFeatured.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 md:grid-cols-3">
//               {filteredFeatured.map((product) => {
//                 const wishlisted = wishlistIds.includes(product.id);
//                 const justAdded = addedIds.has(product.id);
//                 const hasRating =
//                   typeof product.rating === "number" && product.rating > 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     href={`/products/${product.id}`}
//                     className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                   >
//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f3ec]">
//                       {product.image || product.imageUrl ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={product.image || product.imageUrl}
//                           alt={product.name}
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="flex h-full items-center justify-center">
//                           <Sofa
//                             size={40}
//                             className="text-[#e8e2d8]"
//                             strokeWidth={1}
//                           />
//                         </div>
//                       )}

//                       <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
//                         {product.hasDiscount ? (
//                           <span className="rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             −{product.discountPercent}%
//                           </span>
//                         ) : product.featured ? (
//                           <span className="rounded-full bg-[#e8a54b] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             Hot
//                           </span>
//                         ) : product.isNew ? (
//                           <span className="rounded-full bg-[#3d8b7a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             New
//                           </span>
//                         ) : null}
//                       </div>

//                       <button
//                         type="button"
//                         aria-label={
//                           wishlisted
//                             ? "Remove from wishlist"
//                             : "Add to wishlist"
//                         }
//                         onClick={(e) => toggleWishlist(e, product.id)}
//                         className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#6b6560] shadow-sm backdrop-blur transition hover:text-[#c45c4a] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                       >
//                         <Heart
//                           size={15}
//                           className={
//                             wishlisted
//                               ? "fill-[#c45c4a] text-[#c45c4a]"
//                               : ""
//                           }
//                           strokeWidth={1.75}
//                         />
//                       </button>
//                     </div>

//                     <div className="flex flex-1 flex-col p-3 sm:p-4">
//                       <div className="flex items-start justify-between gap-2">
//                         <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                           {product.category}
//                         </p>
//                         {/* Stars only when Firebase has a rating */}
//                         {hasRating && (
//                           <StarRow rating={product.rating as number} />
//                         )}
//                       </div>

//                       <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                         {product.name}
//                       </h3>

//                       {product.description ? (
//                         <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8a847c] sm:text-xs">
//                           {product.description}
//                         </p>
//                       ) : null}

//                       <div className="mt-auto flex items-end justify-between gap-2 pt-3">
//                         <div>
//                           {product.hasDiscount ? (
//                             <>
//                               <p className="text-[11px] text-[#8a847c] line-through sm:text-xs">
//                                 {formatCurrency(product.listPrice)}
//                               </p>
//                               <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             </>
//                           ) : (
//                             <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="button"
//                           aria-label="Add to cart"
//                           onClick={(e) => handleAdd(e, product)}
//                           className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition sm:h-9 sm:w-9 ${
//                             justAdded
//                               ? "bg-emerald-600"
//                               : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
//                           }`}
//                         >
//                           <Plus size={16} strokeWidth={2.5} />
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products in this filter.{" "}
//               <button
//                 type="button"
//                 onClick={() => setFilter("All")}
//                 className="font-semibold text-[#1a1a1a]"
//               >
//                 Show all →
//               </button>
//             </div>
//           )}

//           <div className="mt-5 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== Story / Craftsmanship ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={CRAFT_IMAGE}
//               alt="Craftsmanship — woodworking and furniture making"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f3ec] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Plus,
//   Sofa,
//   Leaf,
//   Hammer,
//   RotateCcw,
//   Star,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   isNew?: boolean;
//   rating?: number;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85";

// const CRAFT_IMAGE =
//   "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// const WISHLIST_KEY = "wishlist";
// const CART_KEY = "cart";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
// }

// function parseFirebaseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ??
//     data.avgRating ??
//     data.averageRating ??
//     data.stars ??
//     data.reviewRating;

//   if (raw === undefined || raw === null || raw === "") return undefined;

//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;

//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function readWishlistIds(): string[] {
//   try {
//     const raw = localStorage.getItem(WISHLIST_KEY);
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (Array.isArray(parsed)) {
//       return parsed
//         .map((x) =>
//           typeof x === "string" ? x : String(x?.productId || x?.id || "")
//         )
//         .filter(Boolean);
//     }
//   } catch {
//     /* ignore */
//   }
//   return [];
// }

// function writeWishlistIds(ids: string[]) {
//   try {
//     localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   } catch {
//     /* ignore */
//   }
// }

// function addLocalCartItem(product: FeaturedProduct) {
//   try {
//     const raw = localStorage.getItem(CART_KEY);
//     let cart: Array<Record<string, unknown>> = [];
//     if (raw) {
//       const parsed = JSON.parse(raw);
//       cart = Array.isArray(parsed) ? parsed : parsed?.items || [];
//     }
//     const idx = cart.findIndex(
//       (i) => String(i.productId || i.id || "") === product.id
//     );
//     if (idx >= 0) {
//       const qty = Number(cart[idx].quantity || 1) + 1;
//       cart[idx] = { ...cart[idx], quantity: qty };
//     } else {
//       cart.push({
//         id: product.id,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//       });
//     }
//     localStorage.setItem(CART_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   } catch (e) {
//     console.error(e);
//   }
// }

// function StarRow({ rating }: { rating: number }) {
//   const full = Math.floor(rating);
//   const half = rating - full >= 0.5;
//   return (
//     <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
//       {Array.from({ length: 5 }).map((_, i) => {
//         const filled = i < full || (i === full && half);
//         return (
//           <Star
//             key={i}
//             size={12}
//             className={
//               filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");
//   const [wishlistIds, setWishlistIds] = useState<string[]>([]);
//   const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     setWishlistIds(readWishlistIds());
//     const sync = () => setWishlistIds(readWishlistIds());
//     window.addEventListener("wishlistUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("wishlistUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const now = Date.now();
//         const thirtyDays = 30 * 24 * 60 * 60 * 1000;

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );
//             const img = String(data.imageUrl || data.image || "").trim();
//             const createdAt = data.createdAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const publishedAt = data.publishedAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const createdMs =
//               typeof createdAt?.toMillis === "function"
//                 ? createdAt.toMillis()
//                 : typeof publishedAt?.toMillis === "function"
//                   ? publishedAt.toMillis()
//                   : 0;
//             const isNew = createdMs > 0 && now - createdMs < thirtyDays;
//             const rating = parseFirebaseRating(data);
//             const description = String(
//               data.shortDescription || data.description || ""
//             ).trim();

//             return {
//               id: docSnap.id,
//               name: String(data.name || "Product"),
//               category: String(data.category || "Other"),
//               description:
//                 description.slice(0, 90) +
//                 (description.length > 90 ? "…" : ""),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               isNew,
//               rating,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         setCategories(
//           Object.entries(categoryMap)
//             .map(([title, { count, image }]) => ({
//               title,
//               count,
//               href: `/products?category=${encodeURIComponent(title)}`,
//               image,
//             }))
//             .sort((a, b) => b.count - a.count)
//         );

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }
//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterTabs = useMemo(() => {
//     const cats = Array.from(
//       new Set(featuredProducts.map((p) => p.category).filter(Boolean))
//     );
//     return ["All", ...cats];
//   }, [featuredProducts]);

//   const filteredFeatured = useMemo(() => {
//     if (filter === "All") return featuredProducts;
//     return featuredProducts.filter((p) => p.category === filter);
//   }, [featuredProducts, filter]);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   function toggleWishlist(e: React.MouseEvent, id: string) {
//     e.preventDefault();
//     e.stopPropagation();
//     setWishlistIds((prev) => {
//       const next = prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id];
//       writeWishlistIds(next);
//       return next;
//     });
//   }

//   function handleAdd(e: React.MouseEvent, product: FeaturedProduct) {
//     e.preventDefault();
//     e.stopPropagation();
//     addLocalCartItem(product);
//     setAddedIds((s) => new Set(s).add(product.id));
//     window.setTimeout(() => {
//       setAddedIds((s) => {
//         const n = new Set(s);
//         n.delete(product.id);
//         return n;
//       });
//     }, 1600);
//   }

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       {/* ========== HERO ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#faf8f4] via-[#faf8f4] to-[#f5f0e8]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[min(480px,70vh)] lg:grid-cols-2">
//           <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:pl-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
//               New collection 2025
//             </p>
//             <h1 className="font-display mt-3 text-[2.2rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:mt-4 sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
//               Timeless
//               <br />
//               <span className="text-[#b8956c]">Furniture</span>
//               <br />
//               for Living
//             </h1>
//             <p className="mt-4 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
//               Handcrafted pieces built with premium sustainable materials
//               designed to elevate your home and endure through the years.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
//               >
//                 Shop Collection
//                 <ArrowRight size={15} />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
//               >
//                 Our Story
//               </Link>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-8 sm:mt-10 sm:gap-12">
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Happy customers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Unique pieces
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={HERO_IMAGE}
//               alt="Timeless furniture for living"
//               className="absolute inset-0 h-full w-full object-cover object-center"
//             />
//             <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#faf8f4] to-transparent lg:block" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Shop by category ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-8 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group relative overflow-hidden rounded-2xl bg-[#ebe4d8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//                 </div>

//                 <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur transition group-hover:bg-white sm:h-9 sm:w-9">
//                   <ArrowRight size={14} className="sm:h-4 sm:w-4" />
//                 </span>

//                 <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                   <h3 className="text-sm font-semibold text-white sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-white/80">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-4 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ========== Best sellers ========== */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {!loading && filterTabs.length > 1 && (
//             <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:mt-5 sm:flex-wrap sm:overflow-visible">
//               {filterTabs.map((tab) => {
//                 const active = filter === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setFilter(tab)}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#b8956c]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           )}

//           {loading ? (
//             <div className="mt-8 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : filteredFeatured.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 md:grid-cols-3">
//               {filteredFeatured.map((product) => {
//                 const wishlisted = wishlistIds.includes(product.id);
//                 const justAdded = addedIds.has(product.id);
//                 const hasRating =
//                   typeof product.rating === "number" && product.rating > 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     href={`/products/${product.id}`}
//                     className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                   >
//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
//                       {product.image || product.imageUrl ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={product.image || product.imageUrl}
//                           alt={product.name}
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="flex h-full items-center justify-center">
//                           <Sofa
//                             size={40}
//                             className="text-[#e8e2d8]"
//                             strokeWidth={1}
//                           />
//                         </div>
//                       )}

//                       <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
//                         {product.hasDiscount ? (
//                           <span className="rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             −{product.discountPercent}%
//                           </span>
//                         ) : product.featured ? (
//                           <span className="rounded-full bg-[#e8a54b] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             Hot
//                           </span>
//                         ) : product.isNew ? (
//                           <span className="rounded-full bg-[#3d8b7a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             New
//                           </span>
//                         ) : null}
//                       </div>

//                       <button
//                         type="button"
//                         aria-label={
//                           wishlisted
//                             ? "Remove from wishlist"
//                             : "Add to wishlist"
//                         }
//                         onClick={(e) => toggleWishlist(e, product.id)}
//                         className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#6b6560] shadow-sm backdrop-blur transition hover:text-[#c45c4a] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                       >
//                         <Heart
//                           size={15}
//                           className={
//                             wishlisted
//                               ? "fill-[#c45c4a] text-[#c45c4a]"
//                               : ""
//                           }
//                           strokeWidth={1.75}
//                         />
//                       </button>
//                     </div>

//                     <div className="flex flex-1 flex-col p-3 sm:p-4">
//                       <div className="flex items-start justify-between gap-2">
//                         <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                           {product.category}
//                         </p>
//                         {hasRating && (
//                           <StarRow rating={product.rating as number} />
//                         )}
//                       </div>

//                       <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                         {product.name}
//                       </h3>

//                       {product.description ? (
//                         <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8a847c] sm:text-xs">
//                           {product.description}
//                         </p>
//                       ) : null}

//                       <div className="mt-auto flex items-end justify-between gap-2 pt-3">
//                         <div>
//                           {product.hasDiscount ? (
//                             <>
//                               <p className="text-[11px] text-[#8a847c] line-through sm:text-xs">
//                                 {formatCurrency(product.listPrice)}
//                               </p>
//                               <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             </>
//                           ) : (
//                             <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="button"
//                           aria-label="Add to cart"
//                           onClick={(e) => handleAdd(e, product)}
//                           className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition sm:h-9 sm:w-9 ${
//                             justAdded
//                               ? "bg-emerald-600"
//                               : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
//                           }`}
//                         >
//                           <Plus size={16} strokeWidth={2.5} />
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products in this filter.{" "}
//               <button
//                 type="button"
//                 onClick={() => setFilter("All")}
//                 className="font-semibold text-[#1a1a1a]"
//               >
//                 Show all →
//               </button>
//             </div>
//           )}

//           <div className="mt-5 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== Story / Craftsmanship ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={CRAFT_IMAGE}
//               alt="Craftsmanship — woodworking and furniture making"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f0e8] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Plus,
//   Sofa,
//   Leaf,
//   Hammer,
//   RotateCcw,
//   Star,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged, type User } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart,
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";

// interface FeaturedProduct {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   isNew?: boolean;
//   rating?: number;
// }

// interface CategoryItem {
//   title: string;
//   count: number;
//   href: string;
//   image?: string;
// }

// const HERO_IMAGE =
//   "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85";

// const CRAFT_IMAGE =
//   "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80";

// const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
//   "Living Room":
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
//   Bedroom:
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//   Dining:
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   "Dining Room":
//     "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//   Office:
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
//   default:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
// };

// const WISHLIST_KEY = "wishlist";
// const CART_KEY = "cart";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function categoryImage(title: string, fromProduct?: string) {
//   if (fromProduct) return fromProduct;
//   return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
// }

// function parseFirebaseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ??
//     data.avgRating ??
//     data.averageRating ??
//     data.stars ??
//     data.reviewRating;

//   if (raw === undefined || raw === null || raw === "") return undefined;

//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;

//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function readWishlistIds(): string[] {
//   try {
//     const raw = localStorage.getItem(WISHLIST_KEY);
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (Array.isArray(parsed)) {
//       return parsed
//         .map((x) =>
//           typeof x === "string" ? x : String(x?.productId || x?.id || "")
//         )
//         .filter(Boolean);
//     }
//   } catch {
//     /* ignore */
//   }
//   return [];
// }

// function writeWishlistIds(ids: string[]) {
//   try {
//     localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   } catch {
//     /* ignore */
//   }
// }

// function addLocalCartItem(product: FeaturedProduct) {
//   try {
//     const raw = localStorage.getItem(CART_KEY);
//     let cart: Array<Record<string, unknown>> = [];
//     if (raw) {
//       const parsed = JSON.parse(raw);
//       cart = Array.isArray(parsed) ? parsed : parsed?.items || [];
//     }
//     const idx = cart.findIndex(
//       (i) => String(i.productId || i.id || "") === product.id
//     );
//     if (idx >= 0) {
//       const qty = Number(cart[idx].quantity || 1) + 1;
//       cart[idx] = { ...cart[idx], quantity: qty };
//     } else {
//       cart.push({
//         id: product.id,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount ? product.discountPercent : 0,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//       });
//     }
//     localStorage.setItem(CART_KEY, JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   } catch (e) {
//     console.error(e);
//   }
// }

// function StarRow({ rating }: { rating: number }) {
//   const full = Math.floor(rating);
//   const half = rating - full >= 0.5;
//   return (
//     <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
//       {Array.from({ length: 5 }).map((_, i) => {
//         const filled = i < full || (i === full && half);
//         return (
//           <Star
//             key={i}
//             size={12}
//             className={
//               filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default function HomePage() {
//   const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
//     []
//   );
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");
//   const [wishlistIds, setWishlistIds] = useState<string[]>([]);
//   const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
//   const [addingIds, setAddingIds] = useState<Set<string>>(new Set());
//   const [authUser, setAuthUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => setAuthUser(u));
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     setWishlistIds(readWishlistIds());
//     const sync = () => setWishlistIds(readWishlistIds());
//     window.addEventListener("wishlistUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("wishlistUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const now = Date.now();
//         const thirtyDays = 30 * 24 * 60 * 60 * 1000;

//         const allProducts = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
//             const active = data.active !== false && status !== "Inactive";

//             const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//             const discountPercent = Math.min(
//               100,
//               Math.max(0, Number(data.discountPercent) || 0)
//             );
//             const hasDiscount = canApplyAgeingDiscount({
//               createdAt: data.createdAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               publishedAt: data.publishedAt as
//                 | { toMillis?: () => number }
//                 | null
//                 | undefined,
//               discountPercent,
//             });
//             const effectivePrice = getEffectiveSellingPrice(
//               listPrice,
//               discountPercent,
//               hasDiscount
//             );
//             const img = String(data.imageUrl || data.image || "").trim();
//             const createdAt = data.createdAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const publishedAt = data.publishedAt as
//               | { toMillis?: () => number }
//               | undefined;
//             const createdMs =
//               typeof createdAt?.toMillis === "function"
//                 ? createdAt.toMillis()
//                 : typeof publishedAt?.toMillis === "function"
//                   ? publishedAt.toMillis()
//                   : 0;
//             const isNew = createdMs > 0 && now - createdMs < thirtyDays;
//             const rating = parseFirebaseRating(data);
//             const description = String(
//               data.shortDescription || data.description || ""
//             ).trim();

//             return {
//               id: docSnap.id,
//               name: String(data.name || "Product"),
//               category: String(data.category || "Other"),
//               description:
//                 description.slice(0, 90) +
//                 (description.length > 90 ? "…" : ""),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               image: img,
//               imageUrl: img,
//               featured: data.featured === true,
//               isNew,
//               rating,
//               active,
//             };
//           })
//           .filter((p) => p.active);

//         const categoryMap: Record<string, { count: number; image?: string }> =
//           {};
//         allProducts.forEach((p) => {
//           if (!p.category) return;
//           if (!categoryMap[p.category]) {
//             categoryMap[p.category] = { count: 0, image: p.image || undefined };
//           }
//           categoryMap[p.category].count += 1;
//           if (!categoryMap[p.category].image && p.image) {
//             categoryMap[p.category].image = p.image;
//           }
//         });

//         setCategories(
//           Object.entries(categoryMap)
//             .map(([title, { count, image }]) => ({
//               title,
//               count,
//               href: `/products?category=${encodeURIComponent(title)}`,
//               image,
//             }))
//             .sort((a, b) => b.count - a.count)
//         );

//         let featured = allProducts.filter((p) => p.featured).slice(0, 6);
//         if (featured.length < 6) {
//           const remaining = allProducts
//             .filter((p) => !p.featured)
//             .slice(0, 6 - featured.length);
//           featured = [...featured, ...remaining];
//         }
//         setFeaturedProducts(featured.slice(0, 6));
//       } catch (err) {
//         console.error("Failed to load homepage data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterTabs = useMemo(() => {
//     const cats = Array.from(
//       new Set(featuredProducts.map((p) => p.category).filter(Boolean))
//     );
//     return ["All", ...cats];
//   }, [featuredProducts]);

//   const filteredFeatured = useMemo(() => {
//     if (filter === "All") return featuredProducts;
//     return featuredProducts.filter((p) => p.category === filter);
//   }, [featuredProducts, filter]);

//   const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
//   const displayCategories = categories.slice(0, 4);

//   function toggleWishlist(e: React.MouseEvent, id: string) {
//     e.preventDefault();
//     e.stopPropagation();
//     setWishlistIds((prev) => {
//       const next = prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id];
//       writeWishlistIds(next);
//       return next;
//     });
//   }

//   async function handleAdd(e: React.MouseEvent, product: FeaturedProduct) {
//     e.preventDefault();
//     e.stopPropagation();

//     if (addingIds.has(product.id)) return;

//     setAddingIds((s) => new Set(s).add(product.id));

//     try {
//       if (authUser?.uid) {
//         await addToCart(authUser.uid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           listPrice: product.listPrice,
//           discountPercent: product.hasDiscount ? product.discountPercent : 0,
//           quantity: 1,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//       } else {
//         addLocalCartItem(product);
//       }

//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedIds((s) => new Set(s).add(product.id));
//       window.setTimeout(() => {
//         setAddedIds((s) => {
//           const n = new Set(s);
//           n.delete(product.id);
//           return n;
//         });
//       }, 1600);
//     } catch (err) {
//       console.error("Add to cart failed:", err);
//       // Fallback so the button still feels responsive
//       addLocalCartItem(product);
//       setAddedIds((s) => new Set(s).add(product.id));
//     } finally {
//       setAddingIds((s) => {
//         const n = new Set(s);
//         n.delete(product.id);
//         return n;
//       });
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       {/* ========== HERO ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#faf8f4] via-[#faf8f4] to-[#f5f0e8]">
//         <div className="mx-auto grid max-w-7xl lg:min-h-[min(480px,70vh)] lg:grid-cols-2">
//           <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:pl-16">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
//               New collection
//             </p>
//             <h1 className="font-display mt-3 text-[2.2rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:mt-4 sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
//               Timeless
//               <br />
//               <span className="text-[#b8956c]">Furniture</span>
//               <br />
//               for Living
//             </h1>
//             <p className="mt-4 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
//               Handcrafted pieces built with premium sustainable materials
//               designed to elevate your home and endure through the years.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <Link
//                 href="/products"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
//               >
//                 Shop Collection
//                 <ArrowRight size={15} />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
//               >
//                 Our Story
//               </Link>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-8 sm:mt-10 sm:gap-12">
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   2.4k+
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Happy customers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Unique pieces
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                   15yr
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
//                   Craftsmanship
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={HERO_IMAGE}
//               alt="Timeless furniture for living"
//               className="absolute inset-0 h-full w-full object-cover object-center"
//             />
//             <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#faf8f4] to-transparent lg:block" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Shop by category ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//               Shop by Category
//             </h2>
//             <p className="mt-1.5 text-sm text-[#6b6560]">
//               Find pieces that fit every room.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-8 flex justify-center">
//             <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
//           </div>
//         ) : displayCategories.length > 0 ? (
//           <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 lg:grid-cols-4">
//             {displayCategories.map((category) => (
//               <Link
//                 key={category.title}
//                 href={category.href}
//                 className="group relative overflow-hidden rounded-2xl bg-[#ebe4d8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={categoryImage(category.title, category.image)}
//                     alt={category.title}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//                 </div>

//                 <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur transition group-hover:bg-white sm:h-9 sm:w-9">
//                   <ArrowRight size={14} className="sm:h-4 sm:w-4" />
//                 </span>

//                 <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
//                   <h3 className="text-sm font-semibold text-white sm:text-base">
//                     {category.title}
//                   </h3>
//                   <p className="mt-0.5 text-xs text-white/80">
//                     {category.count} piece{category.count !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
//             No categories yet.
//           </div>
//         )}

//         <div className="mt-4 text-center sm:hidden">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//           >
//             View all categories
//             <ChevronRight size={16} />
//           </Link>
//         </div>
//       </section>

//       {/* ========== Best sellers ========== */}
//       <section className="border-y border-[#e8e2d8]/80 bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 Our Best Sellers
//               </h2>
//               <p className="mt-1.5 text-sm text-[#6b6560]">
//                 Selected pieces for modern homes.
//               </p>
//             </div>
//             <Link
//               href="/products"
//               className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {!loading && filterTabs.length > 1 && (
//             <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:mt-5 sm:flex-wrap sm:overflow-visible">
//               {filterTabs.map((tab) => {
//                 const active = filter === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setFilter(tab)}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#b8956c]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           )}

//           {loading ? (
//             <div className="mt-8 flex justify-center">
//               <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//             </div>
//           ) : filteredFeatured.length > 0 ? (
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 md:grid-cols-3">
//               {filteredFeatured.map((product) => {
//                 const wishlisted = wishlistIds.includes(product.id);
//                 const justAdded = addedIds.has(product.id);
//                 const isAdding = addingIds.has(product.id);
//                 const hasRating =
//                   typeof product.rating === "number" && product.rating > 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     href={`/products/${product.id}`}
//                     className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                   >
//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
//                       {product.image || product.imageUrl ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={product.image || product.imageUrl}
//                           alt={product.name}
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="flex h-full items-center justify-center">
//                           <Sofa
//                             size={40}
//                             className="text-[#e8e2d8]"
//                             strokeWidth={1}
//                           />
//                         </div>
//                       )}

//                       <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
//                         {product.hasDiscount ? (
//                           <span className="rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             −{product.discountPercent}%
//                           </span>
//                         ) : product.featured ? (
//                           <span className="rounded-full bg-[#e8a54b] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             Hot
//                           </span>
//                         ) : product.isNew ? (
//                           <span className="rounded-full bg-[#3d8b7a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
//                             New
//                           </span>
//                         ) : null}
//                       </div>

//                       <button
//                         type="button"
//                         aria-label={
//                           wishlisted
//                             ? "Remove from wishlist"
//                             : "Add to wishlist"
//                         }
//                         onClick={(e) => toggleWishlist(e, product.id)}
//                         className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#6b6560] shadow-sm backdrop-blur transition hover:text-[#c45c4a] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                       >
//                         <Heart
//                           size={15}
//                           className={
//                             wishlisted
//                               ? "fill-[#c45c4a] text-[#c45c4a]"
//                               : ""
//                           }
//                           strokeWidth={1.75}
//                         />
//                       </button>
//                     </div>

//                     <div className="flex flex-1 flex-col p-3 sm:p-4">
//                       <div className="flex items-start justify-between gap-2">
//                         <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                           {product.category}
//                         </p>
//                         {hasRating && (
//                           <StarRow rating={product.rating as number} />
//                         )}
//                       </div>

//                       <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                         {product.name}
//                       </h3>

//                       {product.description ? (
//                         <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8a847c] sm:text-xs">
//                           {product.description}
//                         </p>
//                       ) : null}

//                       <div className="mt-auto flex items-end justify-between gap-2 pt-3">
//                         <div>
//                           {product.hasDiscount ? (
//                             <>
//                               <p className="text-[11px] text-[#8a847c] line-through sm:text-xs">
//                                 {formatCurrency(product.listPrice)}
//                               </p>
//                               <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             </>
//                           ) : (
//                             <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="button"
//                           aria-label="Add to cart"
//                           disabled={isAdding}
//                           onClick={(e) => void handleAdd(e, product)}
//                           className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition sm:h-9 sm:w-9 ${
//                             justAdded
//                               ? "bg-emerald-600"
//                               : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
//                           } disabled:opacity-60`}
//                         >
//                           {isAdding ? (
//                             <Loader2 size={14} className="animate-spin" />
//                           ) : (
//                             <Plus size={16} strokeWidth={2.5} />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
//               No products in this filter.{" "}
//               <button
//                 type="button"
//                 onClick={() => setFilter("All")}
//                 className="font-semibold text-[#1a1a1a]"
//               >
//                 Show all →
//               </button>
//             </div>
//           )}

//           <div className="mt-5 text-center sm:hidden">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
//             >
//               View all products
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== Story / Craftsmanship ========== */}
//       <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
//           <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={CRAFT_IMAGE}
//               alt="Craftsmanship — woodworking and furniture making"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-6 sm:p-10 lg:p-12">
//             <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//               Furniture should tell a story
//             </h2>
//             <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
//               At Akrish, every piece is considered — materials, proportion, and
//               how it will live in your home for years.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 { icon: Leaf, text: "Sustainably sourced materials" },
//                 { icon: Hammer, text: "Master craftsmanship" },
//                 { icon: RotateCcw, text: "Thoughtful, lasting design" },
//               ].map(({ icon: Icon, text }) => (
//                 <li
//                   key={text}
//                   className="flex items-center gap-3 text-sm text-[#1a1a1a]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f0e8] text-[#b8956c]">
//                     <Icon size={15} strokeWidth={1.5} />
//                   </span>
//                   {text}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/about"
//               className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//             >
//               Read our story
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section className="border-t border-[#e8e2d8] bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//             Ready to transform your space?
//           </h2>
//           <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
//             Explore the collection and find pieces that feel like home.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//           >
//             Shop furniture
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Loader2,
  Plus,
  Sofa,
  Leaf,
  Hammer,
  RotateCcw,
  Star,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  addToCart,
  canApplyAgeingDiscount,
  getEffectiveSellingPrice,
} from "@/services/cartService";

interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  listPrice: number;
  discountPercent: number;
  hasDiscount: boolean;
  image?: string;
  imageUrl?: string;
  featured?: boolean;
  isNew?: boolean;
  rating?: number;
}

interface CategoryItem {
  title: string;
  count: number;
  href: string;
  image?: string;
}

/** Living-room furniture hero */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85";

// /** Furniture craftsmanship / wood workshop (not craft-supplies) */
// const CRAFT_IMAGE =
//   "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80";

/** Furniture craftsmanship — wood workshop */
const CRAFT_IMAGE =
  "https://plus.unsplash.com/premium_photo-1663013470139-9bc103e5c52c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "Living Room":
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  Bedroom:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  Dining:
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  "Dining Room":
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  Office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  default:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
};

const WISHLIST_KEY = "wishlist";
const CART_KEY = "cart";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function categoryImage(title: string, fromProduct?: string) {
  if (fromProduct) return fromProduct;
  return CATEGORY_FALLBACK_IMAGES[title] || CATEGORY_FALLBACK_IMAGES.default;
}

function parseFirebaseRating(data: Record<string, unknown>): number | undefined {
  const raw =
    data.rating ??
    data.avgRating ??
    data.averageRating ??
    data.stars ??
    data.reviewRating;

  if (raw === undefined || raw === null || raw === "") return undefined;

  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return undefined;

  return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
}

function readWishlistIds(): string[] {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed
        .map((x) =>
          typeof x === "string" ? x : String(x?.productId || x?.id || "")
        )
        .filter(Boolean);
    }
  } catch {
    /* ignore */
  }
  return [];
}

function writeWishlistIds(ids: string[]) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event("wishlistUpdated"));
  } catch {
    /* ignore */
  }
}

function addLocalCartItem(product: FeaturedProduct) {
  try {
    const raw = localStorage.getItem(CART_KEY);
    let cart: Array<Record<string, unknown>> = [];
    if (raw) {
      const parsed = JSON.parse(raw);
      cart = Array.isArray(parsed) ? parsed : parsed?.items || [];
    }
    const idx = cart.findIndex(
      (i) => String(i.productId || i.id || "") === product.id
    );
    if (idx >= 0) {
      const qty = Number(cart[idx].quantity || 1) + 1;
      cart[idx] = { ...cart[idx], quantity: qty };
    } else {
      cart.push({
        id: product.id,
        productId: product.id,
        name: product.name,
        price: product.price,
        listPrice: product.listPrice,
        discountPercent: product.hasDiscount ? product.discountPercent : 0,
        quantity: 1,
        image: product.image || product.imageUrl || "",
        category: product.category,
      });
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (e) {
    console.error(e);
  }
}

function StarRow({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            size={12}
            className={
              filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
            }
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
    []
  );
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const [addingIds, setAddingIds] = useState<Set<string>>(new Set());
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setAuthUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    setWishlistIds(readWishlistIds());
    const sync = () => setWishlistIds(readWishlistIds());
    window.addEventListener("wishlistUpdated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("wishlistUpdated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(collection(db, "furniture_products"));
        const now = Date.now();
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;

        const allProducts = snapshot.docs
          .map((docSnap) => {
            const data = docSnap.data() as Record<string, unknown>;
            const status = String(data.status || "In Stock");
            const active = data.active !== false && status !== "Inactive";

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
            const effectivePrice = getEffectiveSellingPrice(
              listPrice,
              discountPercent,
              hasDiscount
            );
            const img = String(data.imageUrl || data.image || "").trim();
            const createdAt = data.createdAt as
              | { toMillis?: () => number }
              | undefined;
            const publishedAt = data.publishedAt as
              | { toMillis?: () => number }
              | undefined;
            const createdMs =
              typeof createdAt?.toMillis === "function"
                ? createdAt.toMillis()
                : typeof publishedAt?.toMillis === "function"
                  ? publishedAt.toMillis()
                  : 0;
            const isNew = createdMs > 0 && now - createdMs < thirtyDays;
            const rating = parseFirebaseRating(data);
            const description = String(
              data.shortDescription || data.description || ""
            ).trim();

            return {
              id: docSnap.id,
              name: String(data.name || "Product"),
              category: String(data.category || "Other"),
              description:
                description.slice(0, 90) +
                (description.length > 90 ? "…" : ""),
              price: effectivePrice,
              listPrice,
              discountPercent: hasDiscount ? discountPercent : 0,
              hasDiscount,
              image: img,
              imageUrl: img,
              featured: data.featured === true,
              isNew,
              rating,
              active,
            };
          })
          .filter((p) => p.active);

        const categoryMap: Record<string, { count: number; image?: string }> =
          {};
        allProducts.forEach((p) => {
          if (!p.category) return;
          if (!categoryMap[p.category]) {
            categoryMap[p.category] = { count: 0, image: p.image || undefined };
          }
          categoryMap[p.category].count += 1;
          if (!categoryMap[p.category].image && p.image) {
            categoryMap[p.category].image = p.image;
          }
        });

        setCategories(
          Object.entries(categoryMap)
            .map(([title, { count, image }]) => ({
              title,
              count,
              href: `/products?category=${encodeURIComponent(title)}`,
              image,
            }))
            .sort((a, b) => b.count - a.count)
        );

        let featured = allProducts.filter((p) => p.featured).slice(0, 6);
        if (featured.length < 6) {
          const remaining = allProducts
            .filter((p) => !p.featured)
            .slice(0, 6 - featured.length);
          featured = [...featured, ...remaining];
        }
        setFeaturedProducts(featured.slice(0, 6));
      } catch (err) {
        console.error("Failed to load homepage data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterTabs = useMemo(() => {
    const cats = Array.from(
      new Set(featuredProducts.map((p) => p.category).filter(Boolean))
    );
    return ["All", ...cats];
  }, [featuredProducts]);

  const filteredFeatured = useMemo(() => {
    if (filter === "All") return featuredProducts;
    return featuredProducts.filter((p) => p.category === filter);
  }, [featuredProducts, filter]);

  const totalProducts = categories.reduce((sum, c) => sum + c.count, 0);
  const displayCategories = categories.slice(0, 4);

  function toggleWishlist(e: React.MouseEvent, id: string) {
    e.preventDefault();
    e.stopPropagation();
    setWishlistIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      writeWishlistIds(next);
      return next;
    });
  }

  async function handleAdd(e: React.MouseEvent, product: FeaturedProduct) {
    e.preventDefault();
    e.stopPropagation();

    if (addingIds.has(product.id)) return;

    setAddingIds((s) => new Set(s).add(product.id));

    try {
      if (authUser?.uid) {
        await addToCart(authUser.uid, {
          productId: product.id,
          name: product.name,
          price: product.price,
          listPrice: product.listPrice,
          discountPercent: product.hasDiscount ? product.discountPercent : 0,
          quantity: 1,
          image: product.image || product.imageUrl || "",
          category: product.category,
        });
      } else {
        addLocalCartItem(product);
      }

      window.dispatchEvent(new Event("cartUpdated"));

      setAddedIds((s) => new Set(s).add(product.id));
      window.setTimeout(() => {
        setAddedIds((s) => {
          const n = new Set(s);
          n.delete(product.id);
          return n;
        });
      }, 1600);
    } catch (err) {
      console.error("Add to cart failed:", err);
      addLocalCartItem(product);
      setAddedIds((s) => new Set(s).add(product.id));
    } finally {
      setAddingIds((s) => {
        const n = new Set(s);
        n.delete(product.id);
        return n;
      });
    }
  }

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#faf8f4] via-[#faf8f4] to-[#f5f0e8]">
        {/*
          Mobile: text + SMALL image side-by-side (image ~112–148px wide).
          Desktop (lg+): original 2-column full-height hero.
          Heading / copy / buttons / stats classes unchanged.
        */}
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_12.25rem] items-start gap-3 px-5 py-8 sm:grid-cols-[minmax(0,1fr)_9.25rem] sm:gap-5 sm:px-8 sm:py-10 lg:min-h-[min(480px,70vh)] lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:px-0 lg:py-0">
          {/* Left — text (unchanged typography) */}
          <div className="flex min-w-0 flex-col justify-center lg:px-12 lg:py-12 xl:pl-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a847c]">
              New collection
            </p>
            <h1 className="font-display mt-3 text-[2.2rem] font-medium leading-[1.08] tracking-tight text-[#1a1a1a] sm:mt-4 sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
              Timeless
              <br />
              <span className="text-[#b8956c]">Furniture</span>
              <br />
              for Living
            </h1>
            <p className="mt-4 max-w-[22rem] text-[13px] leading-6 text-[#6b6560] sm:max-w-sm sm:text-sm sm:leading-7">
              Handcrafted pieces built with premium sustainable materials
              designed to elevate your home and endure through the years.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] sm:h-12 sm:px-6"
              >
                Shop Collection
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 items-center rounded-full border border-[#d4cdc2] bg-transparent px-5 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:bg-white/50 sm:h-12 sm:px-6"
              >
                Our Story
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 sm:mt-10 sm:gap-12">
              <div>
                <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
                  2.4k+
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
                  Happy customers
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
                  {loading ? "…" : `${Math.max(totalProducts, 340)}+`}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
                  Unique pieces
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
                  15yr
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a847c]">
                  Craftsmanship
                </p>
              </div>
            </div>
          </div>

          {/* Right — smaller image on mobile; full column on lg */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:aspect-[3/4] sm:rounded-3xl lg:aspect-auto lg:min-h-full lg:rounded-none lg:self-stretch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Timeless furniture for living"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#faf8f4] to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* ========== Shop by category ========== */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
              Shop by Category
            </h2>
            <p className="mt-1.5 text-sm text-[#6b6560]">
              Find pieces that fit every room.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
          >
            View all categories
            <ChevronRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="mt-8 flex justify-center">
            <Loader2 className="h-7 w-7 animate-spin text-[#b8956c]" />
          </div>
        ) : displayCategories.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 lg:grid-cols-4">
            {displayCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-[#ebe4d8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={categoryImage(category.title, category.image)}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur transition group-hover:bg-white sm:h-9 sm:w-9">
                  <ArrowRight size={14} className="sm:h-4 sm:w-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {category.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/80">
                    {category.count} piece{category.count !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white/50 py-12 text-center text-sm text-[#6b6560]">
            No categories yet.
          </div>
        )}

        <div className="mt-4 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
          >
            View all categories
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ========== Best sellers ========== */}
      <section className="border-y border-[#e8e2d8]/80 bg-[#faf8f4]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
                Our Best Sellers
              </h2>
              <p className="mt-1.5 text-sm text-[#6b6560]">
                Selected pieces for modern homes.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden items-center gap-1 text-sm font-medium text-[#b8956c] hover:text-[#8b7355] sm:inline-flex"
            >
              View all products
              <ArrowRight size={15} />
            </Link>
          </div>

          {!loading && filterTabs.length > 1 && (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:mt-5 sm:flex-wrap sm:overflow-visible">
              {filterTabs.map((tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
                      active
                        ? "bg-[#1a1a1a] text-white"
                        : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#b8956c]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          )}

          {loading ? (
            <div className="mt-8 flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
            </div>
          ) : filteredFeatured.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 md:grid-cols-3">
              {filteredFeatured.map((product) => {
                const wishlisted = wishlistIds.includes(product.id);
                const justAdded = addedIds.has(product.id);
                const isAdding = addingIds.has(product.id);
                const hasRating =
                  typeof product.rating === "number" && product.rating > 0;

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
                      {product.image || product.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.image || product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Sofa
                            size={40}
                            className="text-[#e8e2d8]"
                            strokeWidth={1}
                          />
                        </div>
                      )}

                      <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
                        {product.hasDiscount ? (
                          <span className="rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
                            −{product.discountPercent}%
                          </span>
                        ) : product.featured ? (
                          <span className="rounded-full bg-[#e8a54b] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
                            Hot
                          </span>
                        ) : product.isNew ? (
                          <span className="rounded-full bg-[#3d8b7a] px-2 py-0.5 text-[10px] font-bold text-white sm:px-2.5 sm:py-1">
                            New
                          </span>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        aria-label={
                          wishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        onClick={(e) => toggleWishlist(e, product.id)}
                        className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#6b6560] shadow-sm backdrop-blur transition hover:text-[#c45c4a] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
                      >
                        <Heart
                          size={15}
                          className={
                            wishlisted
                              ? "fill-[#c45c4a] text-[#c45c4a]"
                              : ""
                          }
                          strokeWidth={1.75}
                        />
                      </button>
                    </div>

                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
                          {product.category}
                        </p>
                        {hasRating && (
                          <StarRow rating={product.rating as number} />
                        )}
                      </div>

                      <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
                        {product.name}
                      </h3>

                      {product.description ? (
                        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#8a847c] sm:text-xs">
                          {product.description}
                        </p>
                      ) : null}

                      <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                        <div>
                          {product.hasDiscount ? (
                            <>
                              <p className="text-[11px] text-[#8a847c] line-through sm:text-xs">
                                {formatCurrency(product.listPrice)}
                              </p>
                              <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
                                {formatCurrency(product.price)}
                              </p>
                            </>
                          ) : (
                            <p className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
                              {formatCurrency(product.price)}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          aria-label="Add to cart"
                          disabled={isAdding}
                          onClick={(e) => void handleAdd(e, product)}
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition sm:h-9 sm:w-9 ${
                            justAdded
                              ? "bg-emerald-600"
                              : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
                          } disabled:opacity-60`}
                        >
                          {isAdding ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Plus size={16} strokeWidth={2.5} />
                          )}
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-[#e8e2d8] bg-white py-12 text-center text-sm text-[#6b6560]">
              No products in this filter.{" "}
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="font-semibold text-[#1a1a1a]"
              >
                Show all →
              </button>
            </div>
          )}

          <div className="mt-5 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#b8956c]"
            >
              View all products
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== Story / Craftsmanship ========== */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-[#e8e2d8] bg-white lg:grid-cols-2 lg:gap-0">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CRAFT_IMAGE}
              alt="Craftsmanship — woodworking and furniture making"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <h2 className="font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
              Furniture should tell a story
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6b6560] sm:text-[15px]">
              At Akrish, every piece is considered — materials, proportion, and
              how it will live in your home for years.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Leaf, text: "Sustainably sourced materials" },
                { icon: Hammer, text: "Master craftsmanship" },
                { icon: RotateCcw, text: "Thoughtful, lasting design" },
              ].map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm text-[#1a1a1a]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f0e8] text-[#b8956c]">
                    <Icon size={15} strokeWidth={1.5} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
            >
              Read our story
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="border-t border-[#e8e2d8] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
            Ready to transform your space?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#6b6560]">
            Explore the collection and find pieces that feel like home.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
          >
            Shop furniture
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
