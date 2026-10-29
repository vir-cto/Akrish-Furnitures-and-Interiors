// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
// } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
// }

// const PRODUCTS: Product[] = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     price: 54900,
//     description:
//       "A contemporary modular sofa designed for comfortable everyday living.",
//     material: "Premium fabric",
//     badge: "Featured",
//     stock: 8,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     price: 30000,
//     description:
//       "A clean and modern coffee table for contemporary living spaces.",
//     material: "Engineered wood",
//     stock: 12,
//   },
//   {
//     id: "product-003",
//     name: "Solid Wood Dining Table",
//     category: "Dining Room",
//     price: 72500,
//     description:
//       "A timeless dining table designed for family meals and gatherings.",
//     material: "Solid wood",
//     badge: "Popular",
//     stock: 5,
//   },
//   {
//     id: "product-004",
//     name: "Modern Dining Chair",
//     category: "Dining Room",
//     price: 8900,
//     description:
//       "A comfortable dining chair with a simple contemporary profile.",
//     material: "Wood & fabric",
//     stock: 24,
//   },
//   {
//     id: "product-005",
//     name: "Luxury TV Unit",
//     category: "Living Room",
//     price: 45900,
//     description:
//       "A sophisticated TV unit with practical storage and a modern finish.",
//     material: "Engineered wood",
//     badge: "New",
//     stock: 7,
//   },
//   {
//     id: "product-006",
//     name: "King Size Bed",
//     category: "Bedroom",
//     price: 68500,
//     description:
//       "A spacious bed designed to create a refined and comfortable bedroom.",
//     material: "Solid wood",
//     stock: 6,
//   },
//   {
//     id: "product-007",
//     name: "Bedside Table",
//     category: "Bedroom",
//     price: 12500,
//     description:
//       "A compact bedside table with convenient everyday storage.",
//     material: "Engineered wood",
//     stock: 18,
//   },
//   {
//     id: "product-008",
//     name: "Executive Office Chair",
//     category: "Office",
//     price: 24900,
//     description:
//       "An ergonomic executive chair suitable for premium workspaces.",
//     material: "Leatherette",
//     badge: "Best Seller",
//     stock: 10,
//   },
// ];

// const CATEGORIES = [
//   "All",
//   "Living Room",
//   "Dining Room",
//   "Bedroom",
//   "Office",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   const filteredProducts = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     const filtered = PRODUCTS.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !query ||
//         product.name.toLowerCase().includes(query) ||
//         product.category.toLowerCase().includes(query) ||
//         product.material.toLowerCase().includes(query);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") {
//         return a.price - b.price;
//       }

//       if (sort === "price-high") {
//         return b.price - a.price;
//       }

//       if (sort === "name") {
//         return a.name.localeCompare(b.name);
//       }

//       return 0;
//     });
//   }, [search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     /*
//      * Connect this section to the shared cart store/API
//      * when backend cart functionality is available.
//      */
//     console.log("Added to cart:", product.id);

//     setAddedProduct(product.id);

//     window.setTimeout(() => {
//       setAddedProduct(null);
//     }, 1800);
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               VIP Interior
//             </p>

//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living,
//               dining, bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
//                   aria-label="Clear search"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">
//                   Sort
//                 </span>

//                 <select
//                   value={sort}
//                   onChange={(event) => setSort(event.target.value)}
//                   className="bg-transparent text-sm font-semibold text-slate-700 outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           {/* Category filters */}
//           <div
//             className={`mt-4 ${
//               showFilters ? "block" : "hidden"
//             } lg:block`}
//           >
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {CATEGORIES.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Result header */}
//         <div className="mt-8 flex items-center justify-between">
//           <div>
//             <p className="text-sm font-semibold text-slate-900">
//               {filteredProducts.length} products
//             </p>

//             {(search || category !== "All") && (
//               <p className="mt-1 text-xs text-slate-400">
//                 Showing filtered results
//               </p>
//             )}
//           </div>

//           {(search || category !== "All") && (
//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setCategory("All");
//                 setSort("featured");
//               }}
//               className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//             >
//               <Filter size={14} />
//               Clear filters
//             </button>
//           )}
//         </div>

//         {/* Products */}
//         {filteredProducts.length > 0 ? (
//           <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {filteredProducts.map((product) => {
//               const isWishlisted = wishlist.includes(product.id);
//               const isAdded = addedProduct === product.id;

//               return (
//                 <article
//                   key={product.id}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   {/* Image */}
//                   <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                     <Link
//                       href={`/products/${product.id}`}
//                       className="flex h-full w-full items-center justify-center"
//                     >
//                       <div className="text-center">
//                         <ShoppingBag
//                           size={48}
//                           strokeWidth={1.1}
//                           className="mx-auto text-slate-300 transition group-hover:text-slate-400"
//                         />

//                         <p className="mt-3 px-4 text-xs font-medium text-slate-400">
//                           {product.name}
//                         </p>
//                       </div>
//                     </Link>

//                     {product.badge && (
//                       <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                         {product.badge}
//                       </span>
//                     )}

//                     <button
//                       type="button"
//                       onClick={() => toggleWishlist(product.id)}
//                       className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50"
//                       aria-label={
//                         isWishlisted
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           isWishlisted
//                             ? "fill-current text-red-500"
//                             : "text-slate-600"
//                         }
//                       />
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>

//                     <Link href={`/products/${product.id}`}>
//                       <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900 hover:text-slate-600">
//                         {product.name}
//                       </h2>
//                     </Link>

//                     <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                       {product.description}
//                     </p>

//                     <div className="mt-4 flex items-end justify-between gap-3">
//                       <div>
//                         <p className="text-lg font-bold text-slate-900">
//                           {formatCurrency(product.price)}
//                         </p>

//                         <p className="mt-0.5 text-[10px] text-slate-400">
//                           {product.stock} in stock
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => addToCart(product)}
//                         className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                           isAdded
//                             ? "bg-emerald-600 text-white"
//                             : "bg-slate-900 text-white hover:bg-slate-800"
//                         }`}
//                       >
//                         {isAdded ? (
//                           <>
//                             <Check size={14} />
//                             Added
//                           </>
//                         ) : (
//                           <>
//                             <ShoppingBag size={14} />
//                             Add
//                           </>
//                         )}
//                       </button>
//                     </div>

//                     <Link
//                       href={`/products/${product.id}`}
//                       className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
//                     >
//                       View details
//                       <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//             <Search
//               size={32}
//               className="mx-auto text-slate-300"
//             />

//             <h2 className="mt-4 text-lg font-bold text-slate-900">
//               No products found
//             </h2>

//             <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//               Try another search term or choose a different
//               category.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setCategory("All");
//               }}
//               className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
//             >
//               Show all products
//             </button>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// const CATEGORIES = [
//   "All",
//   "Living Room",
//   "Dining Room",
//   "Bedroom",
//   "Office",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Fetch products from Firebase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // Fetch only active products from catalog collection
//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );

//         const snapshot = await getDocs(q);

//         const list: Product[] = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             name: data.name || "Unnamed Product",
//             category: data.category || "Other",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             description: data.description || "",
//             material: data.material || "",
//             badge: data.featured ? "Featured" : data.badge || undefined,
//             stock: Number(data.stock ?? 0),
//             image: data.image || data.imageUrl || "",
//             imageUrl: data.imageUrl || data.image || "",
//             featured: data.featured ?? false,
//             active: data.active ?? true,
//           };
//         });

//         setProducts(list);
//       } catch (err: any) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       // featured first
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: any) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {CATEGORIES.map((item) => (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setCategory(item)}
//                   className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                     category === item
//                       ? "bg-slate-900 text-white"
//                       : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Loading / Error */}
//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {/* Results */}
//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { useSearchParams } from "next/navigation";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Fetch products + build categories from Firebase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );

//         const snapshot = await getDocs(q);

//         const list: Product[] = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             name: data.name || "Unnamed Product",
//             category: data.category || "Other",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             description: data.description || "",
//             material: data.material || "",
//             badge: data.featured ? "Featured" : data.badge || undefined,
//             stock: Number(data.stock ?? 0),
//             image: data.image || data.imageUrl || "",
//             imageUrl: data.imageUrl || data.image || "",
//             featured: data.featured ?? false,
//             active: data.active ?? true,
//           };
//         });

//         setProducts(list);

//         // Build unique categories dynamically
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: any) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Keep category in sync with URL
//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) {
//       setCategory(urlCategory);
//     }
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       // featured first
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: any) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           {/* Dynamic Categories */}
//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Loading */}
//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {/* Error */}
//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {/* Results */}
//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//                 {(search || category !== "All") && (
//                   <p className="mt-1 text-xs text-slate-400">
//                     Showing filtered results
//                   </p>
//                 )}
//               </div>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                   }}
//                   className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white"
//                 >
//                   Show all products
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams } from "next/navigation";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Load from same collection as ERP
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) {
//       setCategory(urlCategory);
//     }
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: { id: string }) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//                 {(search || category !== "All") && (
//                   <p className="mt-1 text-xs text-slate-400">
//                     Showing filtered results
//                   </p>
//                 )}
//               </div>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                   }}
//                   className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white"
//                 >
//                   Show all products
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
// } from "@/services/cartService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// function readLocalCartIds(): Set<string> {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return new Set();
//     const cart = JSON.parse(raw);
//     if (!Array.isArray(cart)) return new Set();
//     return new Set(
//       cart.map((item: { id?: string; productId?: string }) =>
//         String(item.productId || item.id || "")
//       ).filter(Boolean)
//     );
//   } catch {
//     return new Set();
//   }
// }

// function readLocalCart(): Array<Record<string, unknown>> {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return [];
//     const cart = JSON.parse(raw);
//     return Array.isArray(cart) ? cart : [];
//   } catch {
//     return [];
//   }
// }

// function writeLocalCart(cart: Array<Record<string, unknown>>) {
//   localStorage.setItem("cart", JSON.stringify(cart));
//   window.dispatchEvent(new Event("cartUpdated"));
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Keep cart button state in sync with localStorage / cart page
//   useEffect(() => {
//     const sync = () => setCartIds(readLocalCartIds());
//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const toggleCart = async (product: Product) => {
//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       let cart = readLocalCart();
//       const email = getLoggedInEmail();

//       if (inCart) {
//         // Remove from localStorage
//         cart = cart.filter(
//           (item) =>
//             String(item.productId || item.id || "") !== product.id
//         );
//         writeLocalCart(cart);
//         setCartIds(readLocalCartIds());

//         // Remove from Firebase if logged in
//         if (email) {
//           try {
//             await removeFromFirebaseCart(email, product.id);
//           } catch (err) {
//             console.error("Firebase remove failed:", err);
//           }
//         }
//       } else {
//         // Add once (quantity = 1; change qty on cart page)
//         cart.push({
//           id: product.id,
//           productId: product.id,
//           name: product.name,
//           category: product.category,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl || "",
//         });
//         writeLocalCart(cart);
//         setCartIds(readLocalCartIds());

//         if (email) {
//           try {
//             await addToFirebaseCart(email, {
//               productId: product.id,
//               name: product.name,
//               price: product.price,
//               quantity: 1,
//               image: product.image || product.imageUrl || "",
//               category: product.category,
//             });
//           } catch (err) {
//             console.error("Firebase add failed:", err);
//           }
//         }
//       }
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//               </div>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids from Firebase only
//   // useEffect(() => {
//   //   let cancelled = false;

//   //   async function syncCart() {
//   //     const email = getLoggedInEmail();
//   //     if (!email) {
//   //       if (!cancelled) setCartIds(new Set());
//   //       return;
//   //     }
//   //     try {
//   //       const cart = await getCart(email);
//   //       const ids = new Set((cart?.items || []).map((i) => i.productId));
//   //       if (!cancelled) setCartIds(ids);
//   //     } catch {
//   //       if (!cancelled) setCartIds(new Set());
//   //     }
//   //   }

//   //   syncCart();
//   //   window.addEventListener("cartUpdated", syncCart);
//   //   return () => {
//   //     cancelled = true;
//   //     window.removeEventListener("cartUpdated", syncCart);
//   //   };
//   // }, []);

//     // Wishlist ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   // const toggleWishlist = (id: string) => {
//   //   setWishlist((current) =>
//   //     current.includes(id)
//   //       ? current.filter((item) => item !== id)
//   //       : [...current, id]
//   //   );
//   // };

//     const toggleWishlist = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(email, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(email);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, []);

//   // Wishlist ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(email, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids — Auth UID
//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   // Wishlist ids — Auth UID
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl lg:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Toolbar — single row on mobile */}
//         <section className="rounded-xl border border-slate-200 bg-white p-3 sm:rounded-2xl sm:p-5">
//           <div className="flex items-center gap-2">
//             {/* Search — grows */}
//             <div className="relative min-w-0 flex-1">
//               <Search
//                 size={16}
//                 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search..."
//                 className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-8 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:h-11 sm:pl-10 sm:pr-10"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 sm:right-3"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>

//             {/* Filters — compact on mobile */}
//             <button
//               type="button"
//               onClick={() => setShowFilters(!showFilters)}
//               className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-11 sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${
//                 showFilters
//                   ? "border-slate-900 bg-slate-900 text-white"
//                   : "border-slate-200 text-slate-800"
//               }`}
//             >
//               <Filter size={15} />
//               <span className="hidden xs:inline sm:inline">Filters</span>
//             </button>

//             {/* Sort — compact on mobile */}
//             <label className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 sm:h-11 sm:gap-2 sm:px-3">
//               <span className="hidden text-xs font-medium text-slate-400 sm:inline">
//                 Sort
//               </span>
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="max-w-[7.5rem] bg-transparent text-xs font-semibold outline-none sm:max-w-none sm:text-sm"
//                 aria-label="Sort products"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price ↑</option>
//                 <option value="price-high">Price ↓</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>
//           </div>

//           {/* Category chips */}
//           <div className={`mt-3 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 sm:gap-2 sm:pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-5 flex items-center justify-between sm:mt-8">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               /* 2 per row on mobile */
//               <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={36}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300 sm:h-12 sm:w-12"
//                               />
//                               <p className="mt-2 px-2 text-[10px] text-slate-400 sm:mt-3 sm:px-4 sm:text-xs">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={14}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-2.5 sm:p-4">
//                         <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:line-clamp-1 sm:text-base">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         {/* <p className="mt-1.5 hidden line-clamp-2 min-h-10 text-xs leading-5 text-slate-500 sm:mt-2 sm:block">
//                           {product.description}
//                         </p> */}

//                         <div className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
//                           <div>
//                             <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-8 w-full items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition disabled:opacity-60 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={13} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={13} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={13} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>


//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl lg:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <section className="rounded-xl border border-slate-200 bg-white p-3 sm:rounded-2xl sm:p-5">
//           <div className="flex items-center gap-2">
//             <div className="relative min-w-0 flex-1">
//               <Search
//                 size={16}
//                 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search..."
//                 className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-8 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:h-11 sm:pl-10 sm:pr-10"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 sm:right-3"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={() => setShowFilters(!showFilters)}
//               className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-11 sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${
//                 showFilters
//                   ? "border-slate-900 bg-slate-900 text-white"
//                   : "border-slate-200 text-slate-800"
//               }`}
//             >
//               <Filter size={15} />
//               <span className="hidden xs:inline sm:inline">Filters</span>
//             </button>

//             <label className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 sm:h-11 sm:gap-2 sm:px-3">
//               <span className="hidden text-xs font-medium text-slate-400 sm:inline">
//                 Sort
//               </span>
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="max-w-[7.5rem] bg-transparent text-xs font-semibold outline-none sm:max-w-none sm:text-sm"
//                 aria-label="Sort products"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price ↑</option>
//                 <option value="price-high">Price ↓</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>
//           </div>

//           <div className={`mt-3 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 sm:gap-2 sm:pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-5 flex items-center justify-between sm:mt-8">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={36}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300 sm:h-12 sm:w-12"
//                               />
//                               <p className="mt-2 px-2 text-[10px] text-slate-400 sm:mt-3 sm:px-4 sm:text-xs">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={14}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-2.5 sm:p-4">
//                         <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:line-clamp-1 sm:text-base">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <div className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
//                           <div>
//                             <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-8 w-full items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition disabled:opacity-60 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={13} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={13} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={13} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//           <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
//   getProductAgeDays,
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   /** Effective (payable) price */
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

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
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl lg:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <section className="rounded-xl border border-slate-200 bg-white p-3 sm:rounded-2xl sm:p-5">
//           <div className="flex items-center gap-2">
//             <div className="relative min-w-0 flex-1">
//               <Search
//                 size={16}
//                 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search..."
//                 className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-8 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:h-11 sm:pl-10 sm:pr-10"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 sm:right-3"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={() => setShowFilters(!showFilters)}
//               className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-11 sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${
//                 showFilters
//                   ? "border-slate-900 bg-slate-900 text-white"
//                   : "border-slate-200 text-slate-800"
//               }`}
//             >
//               <Filter size={15} />
//               <span className="hidden xs:inline sm:inline">Filters</span>
//             </button>

//             <label className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 sm:h-11 sm:gap-2 sm:px-3">
//               <span className="hidden text-xs font-medium text-slate-400 sm:inline">
//                 Sort
//               </span>
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="max-w-[7.5rem] bg-transparent text-xs font-semibold outline-none sm:max-w-none sm:text-sm"
//                 aria-label="Sort products"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price ↑</option>
//                 <option value="price-high">Price ↓</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>
//           </div>

//           <div className={`mt-3 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 sm:gap-2 sm:pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-5 flex items-center justify-between sm:mt-8">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={36}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300 sm:h-12 sm:w-12"
//                               />
//                               <p className="mt-2 px-2 text-[10px] text-slate-400 sm:mt-3 sm:px-4 sm:text-xs">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.hasDiscount ? (
//                           <span className="absolute left-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                             {product.discountPercent}% OFF
//                           </span>
//                         ) : product.badge ? (
//                           <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                             {product.badge}
//                           </span>
//                         ) : null}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={14}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-2.5 sm:p-4">
//                         <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:line-clamp-1 sm:text-base">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <div className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
//                           <div className="min-w-0">
//                             {product.hasDiscount ? (
//                               <>
//                                 <p className="text-[10px] text-slate-400 line-through sm:text-xs">
//                                   {formatCurrency(product.listPrice)}
//                                 </p>
//                                 <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               </>
//                             ) : (
//                               <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             )}
//                             <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-8 w-full items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition disabled:opacity-60 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={13} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={13} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={13} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//           <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   Trash2,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//               name: String(data.name || "Unnamed Product"),
//               category: String(data.category || "Other"),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }
//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       {/* Header */}
//       <section className="border-b border-[#e8e2d8] bg-[#faf7f2]">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>
//           <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-4xl">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-xl text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Toolbar */}
//         <section className="rounded-2xl border border-[#e8e2d8] bg-white p-3 sm:p-4">
//           <div className="flex flex-wrap items-center gap-2">
//             <div className="relative min-w-0 flex-1 basis-[12rem]">
//               <Search
//                 size={16}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search products…"
//                 className="h-10 w-full rounded-full border border-[#e8e2d8] bg-[#faf7f2] pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={() => setShowFilters(!showFilters)}
//               className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition sm:px-4 ${
//                 showFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e8e2d8] bg-white text-[#1a1a1a]"
//               }`}
//             >
//               <Filter size={14} />
//               Filters
//             </button>

//             <label className="flex h-10 items-center gap-2 rounded-full border border-[#e8e2d8] bg-white px-3 text-xs">
//               <span className="hidden text-[#8a847c] sm:inline">Sort by</span>
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="bg-transparent font-semibold text-[#1a1a1a] outline-none"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>

//             <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e8e2d8] text-[#1a1a1a] sm:inline-flex">
//               <LayoutGrid size={16} />
//             </span>
//           </div>

//           <div
//             className={`mt-3 ${showFilters ? "block" : "hidden"} sm:block`}
//           >
//             <div className="flex gap-2 overflow-x-auto border-t border-[#f0ebe3] pt-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#b8956c]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                     >
//                       <div className="relative aspect-square overflow-hidden bg-[#f3eee6]">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="block h-full w-full"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                             />
//                           ) : (
//                             <div className="flex h-full flex-col items-center justify-center text-[#d4cdc2]">
//                               <ShoppingBag size={36} strokeWidth={1.1} />
//                             </div>
//                           )}
//                         </Link>

//                         {product.hasDiscount ? (
//                           <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white">
//                             −{product.discountPercent}%
//                           </span>
//                         ) : product.badge ? (
//                           <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase text-[#5c564e] shadow-sm">
//                             {product.badge}
//                           </span>
//                         ) : null}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm disabled:opacity-60"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={14}
//                             className={
//                               isWishlisted
//                                 ? "fill-[#c45c4a] text-[#c45c4a]"
//                                 : ""
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-3 sm:p-4">
//                         <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//                           {product.category}
//                         </p>
//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a]">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         {hasRating && (
//                           <div className="mt-1.5">
//                             <StarRow
//                               rating={product.rating as number}
//                               count={product.reviewCount}
//                             />
//                           </div>
//                         )}

//                         <div className="mt-3 flex items-end justify-between gap-2">
//                           <div>
//                             {product.hasDiscount ? (
//                               <>
//                                 <p className="text-[11px] text-[#8a847c] line-through">
//                                   {formatCurrency(product.listPrice)}
//                                 </p>
//                                 <p className="text-base font-semibold text-[#1a1a1a]">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               </>
//                             ) : (
//                               <p className="text-base font-semibold text-[#1a1a1a]">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             )}
//                           </div>
//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-8 items-center justify-center gap-1 rounded-full px-2.5 text-[11px] font-semibold text-white transition disabled:opacity-60 sm:h-9 sm:px-3 sm:text-xs ${
//                               inCart
//                                 ? "bg-[#c45c4a] hover:bg-[#b04e3d]"
//                                 : "bg-[#1a1a1a] hover:bg-[#2c2a26]"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={13} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={12} />
//                                 <span className="hidden sm:inline">Remove</span>
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={12} />
//                                 <span className="hidden sm:inline">Add</span>
//                               </>
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-8 rounded-2xl border border-dashed border-[#e8e2d8] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="mt-10 flex items-center justify-center gap-2">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white text-[#1a1a1a] disabled:opacity-40"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-semibold ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "border border-[#e8e2d8] bg-white text-[#1a1a1a]"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white text-[#1a1a1a] disabled:opacity-40"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Newsletter strip */}
//       {/* <section className="mt-4 bg-[#1a1a1a] text-white">
//         <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center sm:px-6 lg:px-8">
//           <h2 className="font-display text-2xl font-semibold">
//             Stay in the loop
//           </h2>
//           <p className="max-w-md text-sm text-white/70">
//             New arrivals, restocks, and stories from the workshop — once a
//             month, never more.
//           </p>
//           <form
//             className="flex w-full max-w-md gap-2"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="h-11 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-white/40"
//             />
//             <button
//               type="submit"
//               className="h-11 shrink-0 rounded-full bg-white px-5 text-sm font-semibold text-[#1a1a1a]"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section> */}
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//               name: String(data.name || "Unnamed Product"),
//               category: String(data.category || "Other"),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       {/* Page header */}
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Toolbar — Filters + categories + sort (Luma style) */}
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             {/* Filters toggle (mobile) / label pill */}
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             {/* Category pills — always visible on md+; toggle on mobile */}
//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Sort + grid icon */}
//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           {/* Search — compact, under filter row */}
//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const busy = busyId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;

//                   return (
//                     <article key={product.id} className="group">
//                       <Link
//                         href={`/products/${product.id}`}
//                         className="block"
//                       >
//                         <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                             />
//                           ) : (
//                             <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                               <ShoppingBag size={36} strokeWidth={1.1} />
//                             </div>
//                           )}

//                           {product.hasDiscount ? (
//                             <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                               −{product.discountPercent}%
//                             </span>
//                           ) : null}

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                             {product.category}
//                           </p>
//                           <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                             {product.name}
//                           </h2>

//                           {hasRating && (
//                             <div className="mt-1.5">
//                               <StarRow
//                                 rating={product.rating as number}
//                                 count={product.reviewCount}
//                               />
//                             </div>
//                           )}

//                           <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
//                             {product.hasDiscount ? (
//                               <>
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                                 <p className="text-xs text-[#8a847c] line-through">
//                                   {formatCurrency(product.listPrice)}
//                                 </p>
//                               </>
//                             ) : (
//                               <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       </Link>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   GitCompare,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
//   const [compareMsg, setCompareMsg] = useState("");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       setCompareIds(new Set(getCompareItems().map((i) => i.id)));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//             const categoryName = String(data.category || "Other");
//             return {
//               id: docSnap.id,
//               name: String(data.name || "Unnamed Product"),
//               category: categoryName,
//               subcategory: String(
//                 data.subcategory || data.subCategory || categoryName
//               ),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               finish: String(data.finish || ""),
//               color: String(data.color || ""),
//               dimensions: String(data.dimensions || ""),
//               warranty: String(data.warranty || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCompare = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.price,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.imageUrl || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) setCompareMsg(err);
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>

//           {compareMsg ? (
//             <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
//           ) : null}

//           {compareIds.size > 0 ? (
//             <Link
//               href="/compare"
//               className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//             >
//               <GitCompare size={14} className="text-[#b8956c]" />
//               Compare {compareIds.size} product
//               {compareIds.size > 1 ? "s" : ""}
//             </Link>
//           ) : null}
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCompare = compareIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;

//                   return (
//                     <article key={product.id} className="group">
//                       <Link
//                         href={`/products/${product.id}`}
//                         className="block"
//                       >
//                         <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                             />
//                           ) : (
//                             <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                               <ShoppingBag size={36} strokeWidth={1.1} />
//                             </div>
//                           )}

//                           {product.hasDiscount ? (
//                             <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                               −{product.discountPercent}%
//                             </span>
//                           ) : null}

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             className={`absolute right-2.5 top-12 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:right-3 sm:top-[3.25rem] sm:h-9 sm:w-9 ${
//                               inCompare
//                                 ? "text-[#b8956c]"
//                                 : "text-[#6b6560] hover:text-[#1a1a1a]"
//                             }`}
//                             aria-label={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                           >
//                             <GitCompare size={15} strokeWidth={1.75} />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                             {product.category}
//                           </p>
//                           <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                             {product.name}
//                           </h2>

//                           {hasRating && (
//                             <div className="mt-1.5">
//                               <StarRow
//                                 rating={product.rating as number}
//                                 count={product.reviewCount}
//                               />
//                             </div>
//                           )}

//                           <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
//                             {product.hasDiscount ? (
//                               <>
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                                 <p className="text-xs text-[#8a847c] line-through">
//                                   {formatCurrency(product.listPrice)}
//                                 </p>
//                               </>
//                             ) : (
//                               <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                 {formatCurrency(product.price)}
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       </Link>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   GitCompare,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
//   const [compareMsg, setCompareMsg] = useState("");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       setCompareIds(new Set(getCompareItems().map((i) => i.id)));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//             const categoryName = String(data.category || "Other");
//             return {
//               id: docSnap.id,
//               name: String(data.name || "Unnamed Product"),
//               category: categoryName,
//               subcategory: String(
//                 data.subcategory || data.subCategory || categoryName
//               ),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               finish: String(data.finish || ""),
//               color: String(data.color || ""),
//               dimensions: String(data.dimensions || ""),
//               warranty: String(data.warranty || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCompare = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.price,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.imageUrl || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) setCompareMsg(err);
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>

//           {compareMsg ? (
//             <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
//           ) : null}

//           {compareIds.size > 0 ? (
//             <Link
//               href="/compare"
//               className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//             >
//               <GitCompare size={14} className="text-[#b8956c]" />
//               Compare {compareIds.size} product
//               {compareIds.size > 1 ? "s" : ""}
//             </Link>
//           ) : null}
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCompare = compareIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;

//                   return (
//                     <article key={product.id} className="group">
//                       <div className="relative">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="block"
//                         >
//                           <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                             {product.image || product.imageUrl ? (
//                               // eslint-disable-next-line @next/next/no-img-element
//                               <img
//                                 src={product.image || product.imageUrl}
//                                 alt={product.name}
//                                 className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                               />
//                             ) : (
//                               <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                                 <ShoppingBag size={36} strokeWidth={1.1} />
//                               </div>
//                             )}

//                             {product.hasDiscount ? (
//                               <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                                 −{product.discountPercent}%
//                               </span>
//                             ) : null}
//                           </div>
//                         </Link>

//                         <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             title={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                             className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:h-9 sm:w-9 ${
//                               inCompare
//                                 ? "text-[#b8956c] ring-2 ring-[#b8956c]"
//                                 : "text-[#6b6560] hover:text-[#1a1a1a]"
//                             }`}
//                             aria-label={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                           >
//                             <GitCompare size={15} strokeWidth={1.75} />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <Link
//                             href={`/products/${product.id}`}
//                             className="block"
//                           >
//                             <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                               {product.category}
//                             </p>
//                             <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                               {product.name}
//                             </h2>

//                             {hasRating && (
//                               <div className="mt-1.5">
//                                 <StarRow
//                                   rating={product.rating as number}
//                                   count={product.reviewCount}
//                                 />
//                               </div>
//                             )}

//                             <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
//                               {product.hasDiscount ? (
//                                 <>
//                                   <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                     {formatCurrency(product.price)}
//                                   </p>
//                                   <p className="text-xs text-[#8a847c] line-through">
//                                     {formatCurrency(product.listPrice)}
//                                   </p>
//                                 </>
//                               ) : (
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               )}
//                             </div>
//                           </Link>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             className={`mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-[11px] font-semibold transition sm:text-xs ${
//                               inCompare
//                                 ? "border-[#b8956c] bg-[#f3ebe0] text-[#1a1a1a]"
//                                 : "border-[#e0d9ce] bg-white text-[#6b6560] hover:border-[#c4b8a8] hover:text-[#1a1a1a]"
//                             }`}
//                           >
//                             <GitCompare size={13} strokeWidth={2} />
//                             {inCompare ? "In compare · Remove" : "Compare"}
//                           </button>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   GitCompare,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
//   const [compareMsg, setCompareMsg] = useState("");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       setCompareIds(new Set(getCompareItems().map((i) => i.id)));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//             const categoryName = String(data.category || "Other");
//             return {
//               id: docSnap.id,
//               name: String(data.name || "Unnamed Product"),
//               category: categoryName,
//               subcategory: String(
//                 data.subcategory || data.subCategory || categoryName
//               ),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               finish: String(data.finish || ""),
//               color: String(data.color || ""),
//               dimensions: String(data.dimensions || ""),
//               warranty: String(data.warranty || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCompare = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.price,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.imageUrl || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) setCompareMsg(err);
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>

//           {compareMsg ? (
//             <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
//           ) : null}

//           {compareIds.size > 0 ? (
//             <Link
//               href="/compare"
//               className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//             >
//               <GitCompare size={14} className="text-[#b8956c]" />
//               Compare {compareIds.size} product
//               {compareIds.size > 1 ? "s" : ""}
//             </Link>
//           ) : null}
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCompare = compareIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;
//                   const outOfStock = product.stock <= 0;

//                   return (
//                     <article key={product.id} className="group">
//                       <div className="relative">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="block"
//                         >
//                           <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                             {product.image || product.imageUrl ? (
//                               // eslint-disable-next-line @next/next/no-img-element
//                               <img
//                                 src={product.image || product.imageUrl}
//                                 alt={product.name}
//                                 className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                               />
//                             ) : (
//                               <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                                 <ShoppingBag size={36} strokeWidth={1.1} />
//                               </div>
//                             )}

//                             {product.hasDiscount ? (
//                               <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                                 −{product.discountPercent}%
//                               </span>
//                             ) : null}
//                           </div>
//                         </Link>

//                         {/* Wishlist + Compare icons on image */}
//                         <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             title={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                             className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:h-9 sm:w-9 ${
//                               inCompare
//                                 ? "text-[#b8956c] ring-2 ring-[#b8956c]"
//                                 : "text-[#6b6560] hover:text-[#1a1a1a]"
//                             }`}
//                             aria-label={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                           >
//                             <GitCompare size={15} strokeWidth={1.75} />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <Link
//                             href={`/products/${product.id}`}
//                             className="block"
//                           >
//                             <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                               {product.category}
//                             </p>
//                             <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                               {product.name}
//                             </h2>

//                             {hasRating && (
//                               <div className="mt-1.5">
//                                 <StarRow
//                                   rating={product.rating as number}
//                                   count={product.reviewCount}
//                                 />
//                               </div>
//                             )}
//                           </Link>

//                           {/* Price + Buy side by side */}
//                           <div className="mt-2.5 flex items-center justify-between gap-2">
//                             <div className="min-w-0">
//                               {product.hasDiscount ? (
//                                 <div className="flex flex-wrap items-baseline gap-1.5">
//                                   <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                     {formatCurrency(product.price)}
//                                   </p>
//                                   <p className="text-xs text-[#8a847c] line-through">
//                                     {formatCurrency(product.listPrice)}
//                                   </p>
//                                 </div>
//                               ) : (
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               )}
//                             </div>

//                             <Link
//                               href={`/products/${product.id}`}
//                               onClick={(e) => e.stopPropagation()}
//                               className={`inline-flex shrink-0 items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
//                                 outOfStock
//                                   ? "pointer-events-none border border-[#e0d9ce] bg-[#f5f0e8] text-[#8a847c]"
//                                   : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                               }`}
//                             >
//                               {outOfStock ? "Sold out" : "Buy"}
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   GitCompare,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart,
//   getCart,
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [addingId, setAddingId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
//   const [compareMsg, setCompareMsg] = useState("");
//   /** productId → qty in cart */
//   const [cartMap, setCartMap] = useState<Record<string, number>>({});

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       setCompareIds(new Set(getCompareItems().map((i) => i.id)));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, []);

//   // Sync cart quantities
//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartMap({});
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         if (cancelled) return;
//         const map: Record<string, number> = {};
//         (cart?.items || []).forEach((item) => {
//           const id = String(item.productId || item.id || "");
//           if (id) map[id] = Math.max(0, Number(item.quantity) || 0);
//         });
//         setCartMap(map);
//       } catch {
//         if (!cancelled) setCartMap({});
//       }
//     }

//     void syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//             const categoryName = String(data.category || "Other");
//             return {
//               id: docSnap.id,
//               name: String(data.name || "Unnamed Product"),
//               category: categoryName,
//               subcategory: String(
//                 data.subcategory || data.subCategory || categoryName
//               ),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               finish: String(data.finish || ""),
//               color: String(data.color || ""),
//               dimensions: String(data.dimensions || ""),
//               warranty: String(data.warranty || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCompare = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.price,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.imageUrl || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) setCompareMsg(err);
//   };

//   const handleAddToCart = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     if (product.stock <= 0) return;

//     const already = cartMap[product.id] || 0;
//     if (already >= product.stock) return;

//     setAddingId(product.id);
//     try {
//       const updated = await addToCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });

//       const line = updated?.items?.find(
//         (i) => String(i.productId || "") === product.id
//       );
//       const newQty = line
//         ? Math.max(0, Number(line.quantity) || 0)
//         : already + 1;

//       setCartMap((prev) => ({ ...prev, [product.id]: newQty }));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     } finally {
//       setAddingId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>

//           {compareMsg ? (
//             <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
//           ) : null}

//           {compareIds.size > 0 ? (
//             <Link
//               href="/compare"
//               className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//             >
//               <GitCompare size={14} className="text-[#b8956c]" />
//               Compare {compareIds.size} product
//               {compareIds.size > 1 ? "s" : ""}
//             </Link>
//           ) : null}
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCompare = compareIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const isAdding = addingId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;
//                   const outOfStock = product.stock <= 0;
//                   const inCartQty = cartMap[product.id] || 0;
//                   const atMax =
//                     outOfStock ||
//                     (inCartQty > 0 && inCartQty >= product.stock);

//                   return (
//                     <article key={product.id} className="group">
//                       <div className="relative">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="block"
//                         >
//                           <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                             {product.image || product.imageUrl ? (
//                               // eslint-disable-next-line @next/next/no-img-element
//                               <img
//                                 src={product.image || product.imageUrl}
//                                 alt={product.name}
//                                 className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                               />
//                             ) : (
//                               <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                                 <ShoppingBag size={36} strokeWidth={1.1} />
//                               </div>
//                             )}

//                             {product.hasDiscount ? (
//                               <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                                 −{product.discountPercent}%
//                               </span>
//                             ) : null}
//                           </div>
//                         </Link>

//                         <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             title={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                             className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:h-9 sm:w-9 ${
//                               inCompare
//                                 ? "text-[#b8956c] ring-2 ring-[#b8956c]"
//                                 : "text-[#6b6560] hover:text-[#1a1a1a]"
//                             }`}
//                             aria-label={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                           >
//                             <GitCompare size={15} strokeWidth={1.75} />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <Link
//                             href={`/products/${product.id}`}
//                             className="block"
//                           >
//                             <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                               {product.category}
//                             </p>
//                             <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                               {product.name}
//                             </h2>

//                             {hasRating && (
//                               <div className="mt-1.5">
//                                 <StarRow
//                                   rating={product.rating as number}
//                                   count={product.reviewCount}
//                                 />
//                               </div>
//                             )}
//                           </Link>

//                           {/* Price + Add to cart */}
//                           <div className="mt-2.5 flex items-center justify-between gap-2">
//                             <div className="min-w-0">
//                               {product.hasDiscount ? (
//                                 <div className="flex flex-wrap items-baseline gap-1.5">
//                                   <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                     {formatCurrency(product.price)}
//                                   </p>
//                                   <p className="text-xs text-[#8a847c] line-through">
//                                     {formatCurrency(product.listPrice)}
//                                   </p>
//                                 </div>
//                               ) : (
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               )}
//                               {inCartQty > 0 && (
//                                 <p className="mt-0.5 text-[10px] font-medium text-[#b8956c]">
//                                   {inCartQty} in cart
//                                 </p>
//                               )}
//                             </div>

//                             <button
//                               type="button"
//                               disabled={isAdding || atMax}
//                               onClick={(e) => void handleAddToCart(e, product)}
//                               className={`inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-3.5 sm:py-2 sm:text-xs ${
//                                 outOfStock
//                                   ? "cursor-not-allowed border border-[#e0d9ce] bg-[#f5f0e8] text-[#8a847c]"
//                                   : atMax
//                                     ? "cursor-not-allowed border border-[#e0d9ce] bg-[#f5f0e8] text-[#8a847c]"
//                                     : inCartQty > 0
//                                       ? "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                                       : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                               } disabled:opacity-70`}
//                             >
//                               {isAdding ? (
//                                 <Loader2 size={13} className="animate-spin" />
//                               ) : outOfStock ? (
//                                 "Sold out"
//                               ) : atMax ? (
//                                 "Max"
//                               ) : inCartQty > 0 ? (
//                                 "Add more"
//                               ) : (
//                                 "Add to cart"
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useMemo, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   GitCompare,
//   Heart,
//   LayoutGrid,
//   Loader2,
//   Search,
//   ShoppingBag,
//   Star,
//   X,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   addToCart,
//   getCart,
//   canApplyAgeingDiscount,
//   getEffectiveSellingPrice,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   listPrice: number;
//   discountPercent: number;
//   hasDiscount: boolean;
//   description: string;
//   material: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   warranty?: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
// }

// const PAGE_SIZE = 12;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
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

// function parseRating(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
//   if (raw === undefined || raw === null || raw === "") return undefined;
//   const n = Number(raw);
//   if (!Number.isFinite(n) || n <= 0) return undefined;
//   return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
// }

// function parseReviewCount(data: Record<string, unknown>): number | undefined {
//   const raw =
//     data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
//   if (typeof raw === "number" && raw > 0) return Math.floor(raw);
//   if (Array.isArray(raw) && raw.length > 0) return raw.length;
//   return undefined;
// }

// function StarRow({
//   rating,
//   count,
// }: {
//   rating: number;
//   count?: number;
// }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             size={11}
//             className={
//               i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//             }
//             strokeWidth={1.5}
//           />
//         ))}
//       </div>
//       <span className="text-[11px] text-[#8a847c]">
//         {rating.toFixed(1)}
//         {typeof count === "number" ? ` (${count})` : ""}
//       </span>
//     </div>
//   );
// }

// function ProductsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [addingId, setAddingId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
//   const [compareMsg, setCompareMsg] = useState("");
//   /** productId → qty in cart */
//   const [cartMap, setCartMap] = useState<Record<string, number>>({});

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       setCompareIds(new Set(getCompareItems().map((i) => i.id)));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartMap({});
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         if (cancelled) return;
//         const map: Record<string, number> = {};
//         (cart?.items || []).forEach((item) => {
//           const id = String(item.productId || item.id || "");
//           if (id) map[id] = Math.max(0, Number(item.quantity) || 0);
//         });
//         setCartMap(map);
//       } catch {
//         if (!cancelled) setCartMap({});
//       }
//     }

//     void syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data() as Record<string, unknown>;
//             const status = String(data.status || "In Stock");
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
//             const categoryName = String(data.category || "Other");
//             return {
//               id: docSnap.id,
//               name: String(data.name || "Unnamed Product"),
//               category: categoryName,
//               subcategory: String(
//                 data.subcategory || data.subCategory || categoryName
//               ),
//               price: effectivePrice,
//               listPrice,
//               discountPercent: hasDiscount ? discountPercent : 0,
//               hasDiscount,
//               description: String(data.description || ""),
//               material: String(data.material || ""),
//               finish: String(data.finish || ""),
//               color: String(data.color || ""),
//               dimensions: String(data.dimensions || ""),
//               warranty: String(data.warranty || ""),
//               badge: data.featured
//                 ? "Featured"
//                 : data.badge
//                   ? String(data.badge)
//                   : undefined,
//               stock: Number(data.stock ?? 0),
//               image: String(data.imageUrl || data.image || ""),
//               imageUrl: String(data.imageUrl || data.image || ""),
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//               leadTimeDays: parseLeadTimeDays(
//                 data.leadTime ?? data.leadTimeDays,
//                 7
//               ),
//               rating: parseRating(data),
//               reviewCount: parseReviewCount(data),
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();
//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;
//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }
//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, category, sort]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();
//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;
//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);
//       return matchesCategory && matchesSearch;
//     });
//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / PAGE_SIZE)
//   );
//   const pageSafe = Math.min(page, totalPages);
//   const pageItems = filteredProducts.slice(
//     (pageSafe - 1) * PAGE_SIZE,
//     pageSafe * PAGE_SIZE
//   );

//   const toggleWishlist = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);
//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCompare = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.price,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.imageUrl || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) setCompareMsg(err);
//   };

//   const handleAddToCart = async (
//     e: React.MouseEvent,
//     product: Product
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     if (product.stock <= 0) return;

//     // Already in cart → show "Added" only, no extra adds from list
//     if ((cartMap[product.id] || 0) > 0) return;

//     setAddingId(product.id);
//     try {
//       const updated = await addToCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: 1,
//         image: product.image || product.imageUrl || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });

//       const line = updated?.items?.find(
//         (i) => String(i.productId || "") === product.id
//       );
//       const newQty = line
//         ? Math.max(0, Number(line.quantity) || 0)
//         : 1;

//       setCartMap((prev) => ({ ...prev, [product.id]: newQty }));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     } finally {
//       setAddingId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <section className="bg-[#faf8f4]">
//         <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
//           <nav className="text-xs text-[#8a847c]">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span className="mx-1.5">/</span>
//             <span className="text-[#1a1a1a]">Shop</span>
//           </nav>

//           <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
//                 All Products
//               </h1>
//               <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
//                 Considered pieces for the home you&apos;re building, one room at
//                 a time.
//               </p>
//             </div>
//             {!loading && (
//               <p className="text-xs text-[#8a847c] sm:text-sm">
//                 Showing{" "}
//                 {filteredProducts.length === 0
//                   ? "0"
//                   : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
//                       pageSafe * PAGE_SIZE,
//                       filteredProducts.length
//                     )}`}{" "}
//                 of {filteredProducts.length} results
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={() => setShowMobileFilters((v) => !v)}
//               className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
//                 showMobileFilters
//                   ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                   : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
//               }`}
//             >
//               <Filter size={14} strokeWidth={2} />
//               Filters
//             </button>

//             <div
//               className={`min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
//                 showMobileFilters ? "flex" : "hidden sm:flex"
//               }`}
//             >
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => {
//                       setCategory(item);
//                       if (item === "All") {
//                         router.replace("/products", { scroll: false });
//                       } else {
//                         router.replace(
//                           `/products?category=${encodeURIComponent(item)}`,
//                           { scroll: false }
//                         );
//                       }
//                     }}
//                     className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       active
//                         ? "bg-[#1a1a1a] text-white"
//                         : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="ml-auto flex shrink-0 items-center gap-2">
//               <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
//                 <span className="hidden text-[#8a847c] sm:inline">
//                   Sort by
//                 </span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
//                   aria-label="Sort products"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <span
//                 className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[#1a1a1a] sm:inline-flex"
//                 aria-hidden
//               >
//                 <LayoutGrid size={16} />
//               </span>
//             </div>
//           </div>

//           <div className="relative max-w-md">
//             <Search
//               size={15}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products…"
//               className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
//             />
//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                 aria-label="Clear search"
//               >
//                 <X size={14} />
//               </button>
//             )}
//           </div>

//           {compareMsg ? (
//             <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
//           ) : null}

//           {compareIds.size > 0 ? (
//             <Link
//               href="/compare"
//               className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//             >
//               <GitCompare size={14} className="text-[#b8956c]" />
//               Compare {compareIds.size} product
//               {compareIds.size > 1 ? "s" : ""}
//             </Link>
//           ) : null}
//         </div>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products…</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {pageItems.length > 0 ? (
//               <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
//                 {pageItems.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCompare = compareIds.has(product.id);
//                   const busy = busyId === product.id;
//                   const isAdding = addingId === product.id;
//                   const hasRating =
//                     typeof product.rating === "number" && product.rating > 0;
//                   const outOfStock = product.stock <= 0;
//                   const inCartQty = cartMap[product.id] || 0;

//                   return (
//                     <article key={product.id} className="group">
//                       <div className="relative">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="block"
//                         >
//                           <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
//                             {product.image || product.imageUrl ? (
//                               // eslint-disable-next-line @next/next/no-img-element
//                               <img
//                                 src={product.image || product.imageUrl}
//                                 alt={product.name}
//                                 className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
//                               />
//                             ) : (
//                               <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                                 <ShoppingBag size={36} strokeWidth={1.1} />
//                               </div>
//                             )}

//                             {product.hasDiscount ? (
//                               <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
//                                 −{product.discountPercent}%
//                               </span>
//                             ) : null}
//                           </div>
//                         </Link>

//                         <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={(e) => toggleWishlist(e, product)}
//                             className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:h-9 sm:w-9"
//                             aria-label={
//                               isWishlisted
//                                 ? "Remove from wishlist"
//                                 : "Add to wishlist"
//                             }
//                           >
//                             <Heart
//                               size={15}
//                               className={
//                                 isWishlisted
//                                   ? "fill-[#c45c4a] text-[#c45c4a]"
//                                   : ""
//                               }
//                               strokeWidth={1.75}
//                             />
//                           </button>

//                           <button
//                             type="button"
//                             onClick={(e) => toggleCompare(e, product)}
//                             title={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                             className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:h-9 sm:w-9 ${
//                               inCompare
//                                 ? "text-[#b8956c] ring-2 ring-[#b8956c]"
//                                 : "text-[#6b6560] hover:text-[#1a1a1a]"
//                             }`}
//                             aria-label={
//                               inCompare
//                                 ? "Remove from compare"
//                                 : "Add to compare"
//                             }
//                           >
//                             <GitCompare size={15} strokeWidth={1.75} />
//                           </button>
//                         </div>

//                         <div className="mt-3 px-0.5">
//                           <Link
//                             href={`/products/${product.id}`}
//                             className="block"
//                           >
//                             <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
//                               {product.category}
//                             </p>
//                             <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
//                               {product.name}
//                             </h2>

//                             {hasRating && (
//                               <div className="mt-1.5">
//                                 <StarRow
//                                   rating={product.rating as number}
//                                   count={product.reviewCount}
//                                 />
//                               </div>
//                             )}
//                           </Link>

//                           {/* Price + Add to cart / Added */}
//                           <div className="mt-2.5 flex items-center justify-between gap-2">
//                             <div className="min-w-0">
//                               {product.hasDiscount ? (
//                                 <div className="flex flex-wrap items-baseline gap-1.5">
//                                   <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                     {formatCurrency(product.price)}
//                                   </p>
//                                   <p className="text-xs text-[#8a847c] line-through">
//                                     {formatCurrency(product.listPrice)}
//                                   </p>
//                                 </div>
//                               ) : (
//                                 <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
//                                   {formatCurrency(product.price)}
//                                 </p>
//                               )}
//                             </div>

//                             {outOfStock ? (
//                               <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#e0d9ce] bg-[#f5f0e8] px-3 py-1.5 text-[11px] font-semibold text-[#8a847c] sm:px-3.5 sm:py-2 sm:text-xs">
//                                 Sold out
//                               </span>
//                             ) : inCartQty > 0 ? (
//                               <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#c5e0d4] bg-[#eef7f2] px-3 py-1.5 text-[11px] font-semibold text-[#176b5b] sm:px-3.5 sm:py-2 sm:text-xs">
//                                 Added
//                               </span>
//                             ) : (
//                               <button
//                                 type="button"
//                                 disabled={isAdding}
//                                 onClick={(e) =>
//                                   void handleAddToCart(e, product)
//                                 }
//                                 className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-70 sm:px-3.5 sm:py-2 sm:text-xs"
//                               >
//                                 {isAdding ? (
//                                   <Loader2
//                                     size={13}
//                                     className="animate-spin"
//                                   />
//                                 ) : (
//                                   "Add to cart"
//                                 )}
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-[#d4cdc2]" />
//                 <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 {(search || category !== "All") && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearch("");
//                       setCategory("All");
//                       router.replace("/products", { scroll: false });
//                     }}
//                     className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
//                   >
//                     Clear filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="mt-12 flex items-center justify-center gap-1.5">
//                 <button
//                   type="button"
//                   disabled={pageSafe <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Previous page"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
//                 {Array.from({ length: totalPages }).map((_, i) => {
//                   const n = i + 1;
//                   if (
//                     totalPages > 7 &&
//                     n !== 1 &&
//                     n !== totalPages &&
//                     Math.abs(n - pageSafe) > 1
//                   ) {
//                     if (n === 2 || n === totalPages - 1) {
//                       return (
//                         <span key={n} className="px-1 text-[#8a847c]">
//                           …
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                   return (
//                     <button
//                       key={n}
//                       type="button"
//                       onClick={() => setPage(n)}
//                       className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
//                         n === pageSafe
//                           ? "bg-[#1a1a1a] text-white"
//                           : "text-[#5c564e] hover:bg-white"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   );
//                 })}
//                 <button
//                   type="button"
//                   disabled={pageSafe >= totalPages}
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Next page"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ProductsPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <ProductsPageContent />
//     </Suspense>
//   );
// }


"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  GitCompare,
  Heart,
  LayoutGrid,
  List,
  Loader2,
  Search,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useSearchParams, useRouter } from "next/navigation";
import {
  addToCart,
  getCart,
  canApplyAgeingDiscount,
  getEffectiveSellingPrice,
} from "@/services/cartService";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/services/wishlistService";
import {
  addToCompare,
  getCompareItems,
  isInCompare,
  removeFromCompare,
} from "@/services/compareService";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  listPrice: number;
  discountPercent: number;
  hasDiscount: boolean;
  description: string;
  material: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  warranty?: string;
  badge?: string;
  stock: number;
  image?: string;
  imageUrl?: string;
  featured?: boolean;
  active?: boolean;
  leadTimeDays?: number;
  rating?: number;
  reviewCount?: number;
}

const PAGE_SIZE = 12;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
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

function parseRating(data: Record<string, unknown>): number | undefined {
  const raw =
    data.rating ?? data.avgRating ?? data.averageRating ?? data.stars;
  if (raw === undefined || raw === null || raw === "") return undefined;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  return Math.min(5, Math.max(0, Math.round(n * 10) / 10));
}

function parseReviewCount(data: Record<string, unknown>): number | undefined {
  const raw =
    data.reviewCount ?? data.reviewsCount ?? data.numReviews ?? data.reviews;
  if (typeof raw === "number" && raw > 0) return Math.floor(raw);
  if (Array.isArray(raw) && raw.length > 0) return raw.length;
  return undefined;
}

function StarRow({
  rating,
  count,
}: {
  rating: number;
  count?: number;
}) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={11}
            className={
              i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-[11px] text-[#8a847c]">
        {rating.toFixed(1)}
        {typeof count === "number" ? ` (${count})` : ""}
      </span>
    </div>
  );
}

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  // Advanced filters
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [material, setMaterial] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
  const [compareMsg, setCompareMsg] = useState("");
  /** productId → qty in cart */
  const [cartMap, setCartMap] = useState<Record<string, number>>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const syncCompare = () => {
      setCompareIds(new Set(getCompareItems().map((i) => i.id)));
    };
    syncCompare();
    window.addEventListener("compareUpdated", syncCompare);
    return () => window.removeEventListener("compareUpdated", syncCompare);
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function syncCart() {
      if (!authUid) {
        if (!cancelled) setCartMap({});
        return;
      }
      try {
        const cart = await getCart(authUid);
        if (cancelled) return;
        const map: Record<string, number> = {};
        (cart?.items || []).forEach((item) => {
          const id = String(item.productId || item.id || "");
          if (id) map[id] = Math.max(0, Number(item.quantity) || 0);
        });
        setCartMap(map);
      } catch {
        if (!cancelled) setCartMap({});
      }
    }
    void syncCart();
    window.addEventListener("cartUpdated", syncCart);
    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", syncCart);
    };
  }, [authUid]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const snapshot = await getDocs(collection(db, "furniture_products"));
        const list: Product[] = snapshot.docs
          .map((docSnap) => {
            const data = docSnap.data() as Record<string, unknown>;
            const status = String(data.status || "In Stock");
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
            const categoryName = String(data.category || "Other");
            return {
              id: docSnap.id,
              name: String(data.name || "Unnamed Product"),
              category: categoryName,
              subcategory: String(
                data.subcategory || data.subCategory || categoryName
              ),
              price: effectivePrice,
              listPrice,
              discountPercent: hasDiscount ? discountPercent : 0,
              hasDiscount,
              description: String(data.description || ""),
              material: String(data.material || ""),
              finish: String(data.finish || ""),
              color: String(data.color || ""),
              dimensions: String(data.dimensions || ""),
              warranty: String(data.warranty || ""),
              badge: data.featured
                ? "Featured"
                : data.badge
                  ? String(data.badge)
                  : undefined,
              stock: Number(data.stock ?? 0),
              image: String(data.imageUrl || data.image || ""),
              imageUrl: String(data.imageUrl || data.image || ""),
              featured: Boolean(data.featured),
              active: data.active !== false && status !== "Inactive",
              leadTimeDays: parseLeadTimeDays(
                data.leadTime ?? data.leadTimeDays,
                7
              ),
              rating: parseRating(data),
              reviewCount: parseReviewCount(data),
            };
          })
          .filter((p) => p.active !== false);

        setProducts(list);
        const uniqueCategories = Array.from(
          new Set(list.map((p) => p.category).filter(Boolean))
        ).sort();
        setCategories(["All", ...uniqueCategories]);
      } catch (err: unknown) {
        console.error("Failed to load products:", err);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function syncWishlist() {
      if (!authUid) {
        if (!cancelled) setWishlist([]);
        return;
      }
      try {
        const list = await getWishlist(authUid);
        if (!cancelled) {
          setWishlist((list?.items || []).map((i) => i.productId));
        }
      } catch {
        if (!cancelled) setWishlist([]);
      }
    }
    syncWishlist();
    window.addEventListener("wishlistUpdated", syncWishlist);
    return () => {
      cancelled = true;
      window.removeEventListener("wishlistUpdated", syncWishlist);
    };
  }, [authUid]);

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) setCategory(urlCategory);
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort, priceMin, priceMax, material, inStockOnly]);

  // Lock body scroll when filter drawer is open
  useEffect(() => {
    if (!showFilters) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showFilters]);

  const materials = useMemo(() => {
    const set = new Set(
      products
        .map((p) => p.material?.trim())
        .filter((m): m is string => Boolean(m) && m !== "—")
    );
    return ["All", ...Array.from(set).sort()];
  }, [products]);

  const priceBounds = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 0 };
    let min = Infinity;
    let max = 0;
    products.forEach((p) => {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    });
    return {
      min: Number.isFinite(min) ? min : 0,
      max: max || 0,
    };
  }, [products]);

  const activeFilterCount = useMemo(() => {
    let n = 0;
    if (priceMin.trim()) n += 1;
    if (priceMax.trim()) n += 1;
    if (material !== "All") n += 1;
    if (inStockOnly) n += 1;
    return n;
  }, [priceMin, priceMax, material, inStockOnly]);

  const filteredProducts = useMemo(() => {
    const queryText = search.trim().toLowerCase();
    const minP = priceMin.trim() === "" ? null : Number(priceMin);
    const maxP = priceMax.trim() === "" ? null : Number(priceMax);

    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSearch =
        !queryText ||
        product.name.toLowerCase().includes(queryText) ||
        product.category.toLowerCase().includes(queryText) ||
        product.material.toLowerCase().includes(queryText);
      const matchesMaterial =
        material === "All" ||
        product.material.trim().toLowerCase() === material.toLowerCase();
      const matchesStock = !inStockOnly || product.stock > 0;
      const matchesMin =
        minP === null ||
        !Number.isFinite(minP) ||
        product.price >= minP;
      const matchesMax =
        maxP === null ||
        !Number.isFinite(maxP) ||
        product.price <= maxP;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesMaterial &&
        matchesStock &&
        matchesMin &&
        matchesMax
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [
    products,
    search,
    category,
    sort,
    priceMin,
    priceMax,
    material,
    inStockOnly,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );
  const pageSafe = Math.min(page, totalPages);
  const pageItems = filteredProducts.slice(
    (pageSafe - 1) * PAGE_SIZE,
    pageSafe * PAGE_SIZE
  );

  const clearAdvancedFilters = () => {
    setPriceMin("");
    setPriceMax("");
    setMaterial("All");
    setInStockOnly(false);
  };

  const toggleWishlist = async (
    e: React.MouseEvent,
    product: Product
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!authUid) {
      router.push("/sign-in");
      return;
    }
    const isWishlisted = wishlist.includes(product.id);
    setBusyId(product.id);
    try {
      if (isWishlisted) {
        await removeFromWishlist(authUid, product.id);
        setWishlist((current) => current.filter((id) => id !== product.id));
      } else {
        await addToWishlist(authUid, {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image || product.imageUrl || "",
          category: product.category,
        });
        setWishlist((current) =>
          current.includes(product.id) ? current : [...current, product.id]
        );
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist toggle failed", err);
    } finally {
      setBusyId(null);
    }
  };

  const toggleCompare = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setCompareMsg("");
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
      return;
    }
    const err = addToCompare({
      id: product.id,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory || product.category,
      price: product.price,
      listPrice: product.listPrice,
      hasDiscount: product.hasDiscount,
      discountPercent: product.discountPercent,
      image: product.image || product.imageUrl || "",
      material: product.material,
      finish: product.finish,
      color: product.color,
      dimensions: product.dimensions,
      stock: product.stock,
      warranty: product.warranty,
      leadTimeDays: product.leadTimeDays,
      rating: product.rating,
      reviewCount: product.reviewCount,
    });
    if (err) setCompareMsg(err);
  };

  const handleAddToCart = async (
    e: React.MouseEvent,
    product: Product
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!authUid) {
      router.push("/sign-in");
      return;
    }
    if (product.stock <= 0) return;
    if ((cartMap[product.id] || 0) > 0) return;
    setAddingId(product.id);
    try {
      const updated = await addToCart(authUid, {
        productId: product.id,
        name: product.name,
        price: product.price,
        listPrice: product.listPrice,
        discountPercent: product.hasDiscount
          ? product.discountPercent
          : undefined,
        quantity: 1,
        image: product.image || product.imageUrl || "",
        category: product.category,
        leadTimeDays: product.leadTimeDays,
      });
      const line = updated?.items?.find(
        (i) => String(i.productId || "") === product.id
      );
      const newQty = line
        ? Math.max(0, Number(line.quantity) || 0)
        : 1;
      setCartMap((prev) => ({ ...prev, [product.id]: newQty }));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Add to cart failed", err);
    } finally {
      setAddingId(null);
    }
  };

  const renderProductActions = (product: Product) => {
    const isWishlisted = wishlist.includes(product.id);
    const inCompare = compareIds.has(product.id);
    const busy = busyId === product.id;
    const isAdding = addingId === product.id;
    const outOfStock = product.stock <= 0;
    const inCartQty = cartMap[product.id] || 0;

    return (
      <>
        <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
          <button
            type="button"
            disabled={busy}
            onClick={(e) => toggleWishlist(e, product)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#6b6560] shadow-sm transition hover:text-[#c45c4a] disabled:opacity-60 sm:h-9 sm:w-9"
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <Heart
              size={15}
              className={
                isWishlisted ? "fill-[#c45c4a] text-[#c45c4a]" : ""
              }
              strokeWidth={1.75}
            />
          </button>
          <button
            type="button"
            onClick={(e) => toggleCompare(e, product)}
            title={inCompare ? "Remove from compare" : "Add to compare"}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:h-9 sm:w-9 ${
              inCompare
                ? "text-[#b8956c] ring-2 ring-[#b8956c]"
                : "text-[#6b6560] hover:text-[#1a1a1a]"
            }`}
            aria-label={
              inCompare ? "Remove from compare" : "Add to compare"
            }
          >
            <GitCompare size={15} strokeWidth={1.75} />
          </button>
        </div>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <div className="min-w-0">
            {product.hasDiscount ? (
              <div className="flex flex-wrap items-baseline gap-1.5">
                <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-xs text-[#8a847c] line-through">
                  {formatCurrency(product.listPrice)}
                </p>
              </div>
            ) : (
              <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-sm">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>
          {outOfStock ? (
            <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#e0d9ce] bg-[#f5f0e8] px-3 py-1.5 text-[11px] font-semibold text-[#8a847c] sm:px-3.5 sm:py-2 sm:text-xs">
              Sold out
            </span>
          ) : inCartQty > 0 ? (
            <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#c5e0d4] bg-[#eef7f2] px-3 py-1.5 text-[11px] font-semibold text-[#176b5b] sm:px-3.5 sm:py-2 sm:text-xs">
              Added
            </span>
          ) : (
            <button
              type="button"
              disabled={isAdding}
              onClick={(e) => void handleAddToCart(e, product)}
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-70 sm:px-3.5 sm:py-2 sm:text-xs"
            >
              {isAdding ? (
                <Loader2 size={13} className="animate-spin" />
              ) : (
                "Add to cart"
              )}
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#faf8f4]">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <nav className="text-xs text-[#8a847c]">
            <Link href="/" className="hover:text-[#1a1a1a]">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-[#1a1a1a]">Shop</span>
          </nav>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[2.5rem]">
                All Products
              </h1>
              <p className="mt-1.5 max-w-lg text-sm text-[#6b6560]">
                Considered pieces for the home you&apos;re building, one room at
                a time.
              </p>
            </div>
            {!loading && (
              <p className="text-xs text-[#8a847c] sm:text-sm">
                Showing{" "}
                {filteredProducts.length === 0
                  ? "0"
                  : `${(pageSafe - 1) * PAGE_SIZE + 1}–${Math.min(
                      pageSafe * PAGE_SIZE,
                      filteredProducts.length
                    )}`}{" "}
                of {filteredProducts.length} results
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowFilters(true)}
              className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition sm:h-10 sm:px-4 sm:text-sm ${
                activeFilterCount > 0 || showFilters
                  ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                  : "border-[#e0d9ce] bg-white text-[#1a1a1a] hover:border-[#c4b8a8]"
              }`}
            >
              <Filter size={14} strokeWidth={2} />
              Filters
              {activeFilterCount > 0 ? (
                <span className="ml-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-white/20 px-1 text-[10px]">
                  {activeFilterCount}
                </span>
              ) : null}
            </button>

            <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCategory(item);
                      if (item === "All") {
                        router.replace("/products", { scroll: false });
                      } else {
                        router.replace(
                          `/products?category=${encodeURIComponent(item)}`,
                          { scroll: false }
                        );
                      }
                    }}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
                      active
                        ? "bg-[#1a1a1a] text-white"
                        : "border border-transparent bg-transparent text-[#5c564e] hover:bg-white hover:text-[#1a1a1a]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-2">
              <label className="flex h-9 items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3 text-xs sm:h-10 sm:gap-2 sm:px-3.5 sm:text-sm">
                <span className="hidden text-[#8a847c] sm:inline">
                  Sort by
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer bg-transparent font-semibold text-[#1a1a1a] outline-none"
                  aria-label="Sort products"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </label>

              {/* Grid / List toggle */}
              <div
                className="flex h-9 items-center rounded-full border border-[#e0d9ce] bg-white p-0.5 sm:h-10"
                role="group"
                aria-label="View mode"
              >
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition sm:h-9 sm:w-9 ${
                    viewMode === "grid"
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#6b6560] hover:text-[#1a1a1a]"
                  }`}
                  aria-label="Grid view"
                  aria-pressed={viewMode === "grid"}
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition sm:h-9 sm:w-9 ${
                    viewMode === "list"
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#6b6560] hover:text-[#1a1a1a]"
                  }`}
                  aria-label="List view"
                  aria-pressed={viewMode === "list"}
                >
                  <List size={15} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative max-w-md">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              className="h-9 w-full rounded-full border border-[#e0d9ce] bg-white pl-9 pr-9 text-sm outline-none transition focus:border-[#b8956c] sm:h-10"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {activeFilterCount > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {priceMin.trim() ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0ebe3] px-2.5 py-1 text-[11px] font-medium text-[#1a1a1a]">
                  Min {formatCurrency(Number(priceMin) || 0)}
                  <button
                    type="button"
                    onClick={() => setPriceMin("")}
                    aria-label="Clear min price"
                  >
                    <X size={12} />
                  </button>
                </span>
              ) : null}
              {priceMax.trim() ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0ebe3] px-2.5 py-1 text-[11px] font-medium text-[#1a1a1a]">
                  Max {formatCurrency(Number(priceMax) || 0)}
                  <button
                    type="button"
                    onClick={() => setPriceMax("")}
                    aria-label="Clear max price"
                  >
                    <X size={12} />
                  </button>
                </span>
              ) : null}
              {material !== "All" ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0ebe3] px-2.5 py-1 text-[11px] font-medium text-[#1a1a1a]">
                  {material}
                  <button
                    type="button"
                    onClick={() => setMaterial("All")}
                    aria-label="Clear material"
                  >
                    <X size={12} />
                  </button>
                </span>
              ) : null}
              {inStockOnly ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0ebe3] px-2.5 py-1 text-[11px] font-medium text-[#1a1a1a]">
                  In stock
                  <button
                    type="button"
                    onClick={() => setInStockOnly(false)}
                    aria-label="Clear in-stock filter"
                  >
                    <X size={12} />
                  </button>
                </span>
              ) : null}
              <button
                type="button"
                onClick={clearAdvancedFilters}
                className="text-[11px] font-semibold text-[#8a847c] underline-offset-2 hover:text-[#1a1a1a] hover:underline"
              >
                Clear all
              </button>
            </div>
          ) : null}

          {compareMsg ? (
            <p className="text-xs font-medium text-[#c45c4a]">{compareMsg}</p>
          ) : null}
          {compareIds.size > 0 ? (
            <Link
              href="/compare"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0d9ce] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
            >
              <GitCompare size={14} className="text-[#b8956c]" />
              Compare {compareIds.size} product
              {compareIds.size > 1 ? "s" : ""}
            </Link>
          ) : null}
        </div>

        {/* Filters drawer */}
        {showFilters ? (
          <div className="fixed inset-0 z-50 flex justify-end">
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              aria-label="Close filters"
              onClick={() => setShowFilters(false)}
            />
            <div className="relative flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#e0d9ce] px-5 py-4">
                <h2 className="text-base font-semibold text-[#1a1a1a]">
                  Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="rounded-full p-2 text-[#6b6560] hover:bg-[#f5f0e8]"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a847c]">
                    Price (₹)
                  </p>
                  <p className="mt-1 text-[11px] text-[#8a847c]">
                    Catalogue range: {formatCurrency(priceBounds.min)} –{" "}
                    {formatCurrency(priceBounds.max)}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs text-[#6b6560]">
                        Min
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        placeholder="0"
                        className="h-10 w-full rounded-lg border border-[#e0d9ce] px-3 text-sm outline-none focus:border-[#b8956c]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-[#6b6560]">
                        Max
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        placeholder="Any"
                        className="h-10 w-full rounded-lg border border-[#e0d9ce] px-3 text-sm outline-none focus:border-[#b8956c]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a847c]">
                    Material
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {materials.map((m) => {
                      const active = material === m;
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMaterial(m)}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                            active
                              ? "bg-[#1a1a1a] text-white"
                              : "border border-[#e0d9ce] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
                          }`}
                        >
                          {m}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="h-4 w-4 rounded border-[#c4b8a8] accent-[#1a1a1a]"
                    />
                    <span className="text-sm font-medium text-[#1a1a1a]">
                      In stock only
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 border-t border-[#e0d9ce] px-5 py-4">
                <button
                  type="button"
                  onClick={clearAdvancedFilters}
                  className="flex-1 rounded-full border border-[#e0d9ce] py-2.5 text-sm font-semibold text-[#1a1a1a] hover:bg-[#faf8f4]"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="flex-1 rounded-full bg-[#1a1a1a] py-2.5 text-sm font-semibold text-white hover:bg-[#2c2a26]"
                >
                  Show results
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {loading && (
          <div className="mt-16 flex flex-col items-center gap-3 text-[#8a847c]">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm">Loading products…</p>
          </div>
        )}

        {error && !loading && (
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {pageItems.length > 0 ? (
              viewMode === "grid" ? (
                <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
                  {pageItems.map((product) => {
                    const hasRating =
                      typeof product.rating === "number" &&
                      product.rating > 0;
                    return (
                      <article key={product.id} className="group">
                        <div className="relative">
                          <Link
                            href={`/products/${product.id}`}
                            className="block"
                          >
                            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0ebe3] sm:rounded-2xl">
                              {product.image || product.imageUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={product.image || product.imageUrl}
                                  alt={product.name}
                                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center text-[#d4cdc2]">
                                  <ShoppingBag size={36} strokeWidth={1.1} />
                                </div>
                              )}
                              {product.hasDiscount ? (
                                <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white sm:left-3 sm:top-3">
                                  −{product.discountPercent}%
                                </span>
                              ) : null}
                            </div>
                          </Link>
                          {renderProductActions(product)}
                          <div className="mt-3 px-0.5">
                            <Link
                              href={`/products/${product.id}`}
                              className="block"
                            >
                              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
                                {product.category}
                              </p>
                              <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
                                {product.name}
                              </h2>
                              {hasRating && (
                                <div className="mt-1.5">
                                  <StarRow
                                    rating={product.rating as number}
                                    count={product.reviewCount}
                                  />
                                </div>
                              )}
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 space-y-4 sm:mt-8">
                  {pageItems.map((product) => {
                    const hasRating =
                      typeof product.rating === "number" &&
                      product.rating > 0;
                    return (
                      <article
                        key={product.id}
                        className="group overflow-hidden rounded-2xl border border-[#e0d9ce] bg-white"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <Link
                            href={`/products/${product.id}`}
                            className="relative block w-full shrink-0 sm:w-44 md:w-52"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#f0ebe3] sm:aspect-square sm:h-full">
                              {product.image || product.imageUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={product.image || product.imageUrl}
                                  alt={product.name}
                                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center text-[#d4cdc2]">
                                  <ShoppingBag size={36} strokeWidth={1.1} />
                                </div>
                              )}
                              {product.hasDiscount ? (
                                <span className="absolute left-2.5 top-2.5 rounded-full bg-[#c45c4a] px-2 py-0.5 text-[10px] font-bold text-white">
                                  −{product.discountPercent}%
                                </span>
                              ) : null}
                            </div>
                          </Link>
                          <div className="relative flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                            <Link
                              href={`/products/${product.id}`}
                              className="block"
                            >
                              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b8956c]">
                                {product.category}
                              </p>
                              <h2 className="mt-1 text-base font-semibold text-[#1a1a1a] sm:text-lg">
                                {product.name}
                              </h2>
                              {product.material ? (
                                <p className="mt-1 text-xs text-[#8a847c]">
                                  {product.material}
                                  {product.finish
                                    ? ` · ${product.finish}`
                                    : ""}
                                </p>
                              ) : null}
                              {hasRating && (
                                <div className="mt-2">
                                  <StarRow
                                    rating={product.rating as number}
                                    count={product.reviewCount}
                                  />
                                </div>
                              )}
                              {product.description ? (
                                <p className="mt-2 line-clamp-2 text-sm text-[#6b6560]">
                                  {product.description}
                                </p>
                              ) : null}
                            </Link>
                            <div className="mt-3">{renderProductActions(product)}</div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )
            ) : (
              <div className="mt-10 rounded-2xl border border-dashed border-[#e0d9ce] bg-white px-6 py-16 text-center">
                <Search size={32} className="mx-auto text-[#d4cdc2]" />
                <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                  No products found
                </h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6560]">
                  {products.length === 0
                    ? "No products have been published yet."
                    : "Try another search, category, or filter."}
                </p>
                {(search ||
                  category !== "All" ||
                  activeFilterCount > 0) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                      clearAdvancedFilters();
                      router.replace("/products", { scroll: false });
                    }}
                    className="mt-4 text-sm font-semibold text-[#1a1a1a] underline-offset-2 hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-1.5">
                <button
                  type="button"
                  disabled={pageSafe <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  if (
                    totalPages > 7 &&
                    n !== 1 &&
                    n !== totalPages &&
                    Math.abs(n - pageSafe) > 1
                  ) {
                    if (n === 2 || n === totalPages - 1) {
                      return (
                        <span key={n} className="px-1 text-[#8a847c]">
                          …
                        </span>
                      );
                    }
                    return null;
                  }
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-semibold transition ${
                        n === pageSafe
                          ? "bg-[#1a1a1a] text-white"
                          : "text-[#5c564e] hover:bg-white"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
                <button
                  type="button"
                  disabled={pageSafe >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] disabled:opacity-30"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
          <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
