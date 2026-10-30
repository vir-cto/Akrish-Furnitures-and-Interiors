// // "use client";

// // import Link from "next/link";
// // import { useMemo, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Check,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingBag,
// //   Star,
// //   Truck,
// // } from "lucide-react";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   rating: number;
// //   reviews: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// // }

// // const PRODUCTS: Record<string, Product> = {
// //   "product-001": {
// //     id: "product-001",
// //     name: "Premium Modular Sofa",
// //     category: "Living Room",
// //     description:
// //       "A contemporary modular sofa designed for comfortable everyday living with a refined interior aesthetic.",
// //     price: 54900,
// //     rating: 4.8,
// //     reviews: 24,
// //     material: "Premium fabric",
// //     dimensions: "220 × 90 × 85 cm",
// //     stock: 8,
// //   },
// //   "product-002": {
// //     id: "product-002",
// //     name: "Designer Coffee Table",
// //     category: "Living Room",
// //     description:
// //       "A clean and modern coffee table that brings a balanced look to contemporary living spaces.",
// //     price: 30000,
// //     rating: 4.7,
// //     reviews: 18,
// //     material: "Engineered wood",
// //     dimensions: "120 × 60 × 42 cm",
// //     stock: 12,
// //   },
// //   "product-003": {
// //     id: "product-003",
// //     name: "Solid Wood Dining Table",
// //     category: "Dining Room",
// //     description:
// //       "A timeless dining table crafted for family meals, gatherings and elegant dining spaces.",
// //     price: 72500,
// //     rating: 4.9,
// //     reviews: 31,
// //     material: "Solid wood",
// //     dimensions: "180 × 90 × 76 cm",
// //     stock: 5,
// //   },
// // };

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // interface ProductPageProps {
// //   params: Promise<{
// //     id: string;
// //   }>;
// // }

// // export default function ProductDetailPage({
// //   params,
// // }: ProductPageProps) {
// //   const [productId] = useState<string>(() => {
// //     /*
// //      * The App Router supplies params asynchronously in current
// //      * Next.js versions. A fallback product keeps this page
// //      * usable even when the requested demo product is unknown.
// //      */
// //     return "product-001";
// //   });

// //   const product = useMemo(
// //     () => PRODUCTS[productId] ?? PRODUCTS["product-001"],
// //     [productId]
// //   );

// //   const [quantity, setQuantity] = useState(1);
// //   const [added, setAdded] = useState(false);
// //   const [wishlist, setWishlist] = useState(false);

// //   const total = product.price * quantity;

// //   const addToCart = () => {
// //     /*
// //      * Connect this section to the shared cart store/API
// //      * when backend cart functionality is available.
// //      */
// //     console.log("Added to cart:", {
// //       productId: product.id,
// //       quantity,
// //     });

// //     setAdded(true);

// //     window.setTimeout(() => {
// //       setAdded(false);
// //     }, 2500);
// //   };

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         {/* Breadcrumb */}
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link
// //             href="/products"
// //             className="transition hover:text-slate-900"
// //           >
// //             Products
// //           </Link>

// //           <span>/</span>

// //           <span>{product.category}</span>

// //           <span>/</span>

// //           <span className="font-medium text-slate-800">
// //             {product.name}
// //           </span>
// //         </div>

// //         {/* Product */}
// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             {/* Image area */}
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               <div className="flex h-full min-h-[340px] w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
// //                 <div className="text-center">
// //                   <ShoppingBag
// //                     size={58}
// //                     strokeWidth={1.2}
// //                     className="mx-auto text-slate-300"
// //                   />

// //                   <p className="mt-4 text-sm font-medium text-slate-400">
// //                     Product image
// //                   </p>

// //                   <p className="mt-1 text-xs text-slate-400">
// //                     {product.name}
// //                   </p>
// //                 </div>
// //               </div>

// //               <button
// //                 type="button"
// //                 onClick={() => setWishlist(!wishlist)}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900"
// //                 aria-label={
// //                   wishlist
// //                     ? "Remove from wishlist"
// //                     : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={
// //                     wishlist
// //                       ? "fill-current text-red-500"
// //                       : ""
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             {/* Details */}
// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 {product.category}
// //               </p>

// //               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
// //                 {product.name}
// //               </h1>

// //               {/* Rating */}
// //               <div className="mt-4 flex items-center gap-3">
// //                 <div className="flex items-center gap-1">
// //                   <Star
// //                     size={16}
// //                     className="fill-amber-400 text-amber-400"
// //                   />

// //                   <span className="text-sm font-bold text-slate-800">
// //                     {product.rating}
// //                   </span>
// //                 </div>

// //                 <span className="text-sm text-slate-400">
// //                   ({product.reviews} reviews)
// //                 </span>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>

// //                 <p className="mt-1 text-xs text-slate-400">
// //                   Inclusive of applicable taxes
// //                 </p>
// //               </div>

// //               <div className="mt-7 border-t border-slate-100 pt-6">
// //                 <p className="text-sm leading-7 text-slate-600">
// //                   {product.description}
// //                 </p>
// //               </div>

// //               {/* Specifications */}
// //               <div className="mt-7 grid grid-cols-2 gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
// //                     Material
// //                   </p>

// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.material}
// //                   </p>
// //                 </div>

// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
// //                     Dimensions
// //                   </p>

// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Stock */}
// //               <div className="mt-5 flex items-center gap-2 text-xs">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />

// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               {/* Quantity */}
// //               <div className="mt-7">
// //                 <p className="mb-2 text-xs font-semibold text-slate-700">
// //                   Quantity
// //                 </p>

// //                 <div className="flex items-center rounded-lg border border-slate-200 w-fit">
// //                   <button
// //                     type="button"
// //                     onClick={() =>
// //                       setQuantity((value) =>
// //                         Math.max(1, value - 1)
// //                       )
// //                     }
// //                     disabled={quantity <= 1}
// //                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
// //                     aria-label="Decrease quantity"
// //                   >
// //                     <Minus size={15} />
// //                   </button>

// //                   <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 text-sm font-bold text-slate-800">
// //                     {quantity}
// //                   </span>

// //                   <button
// //                     type="button"
// //                     onClick={() =>
// //                       setQuantity((value) =>
// //                         Math.min(
// //                           product.stock,
// //                           value + 1
// //                         )
// //                       )
// //                     }
// //                     disabled={quantity >= product.stock}
// //                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
// //                     aria-label="Increase quantity"
// //                   >
// //                     <Plus size={15} />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Actions */}
// //               <div className="mt-7 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   onClick={addToCart}
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
// //                 >
// //                   {added ? (
// //                     <>
// //                       <Check size={17} />
// //                       Added to cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/checkout"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
// //                 >
// //                   Buy now
// //                   <ArrowRightIcon />
// //                 </Link>
// //               </div>

// //               {/* Delivery info */}
// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck
// //                     size={19}
// //                     className="mt-0.5 shrink-0 text-slate-600"
// //                   />

// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>

// //                     <p className="mt-1 text-xs leading-5 text-slate-500">
// //                       Delivery availability and estimated
// //                       delivery dates will be confirmed during
// //                       checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Total */}
// //               <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
// //                 <span className="text-sm text-slate-500">
// //                   {quantity} item
// //                   {quantity !== 1 ? "s" : ""} total
// //                 </span>

// //                 <span className="text-lg font-bold text-slate-900">
// //                   {formatCurrency(total)}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Bottom information */}
// //         <section className="mt-6 grid gap-4 sm:grid-cols-3">
// //           <div className="rounded-xl border border-slate-200 bg-white p-5">
// //             <ShoppingBag
// //               size={20}
// //               className="text-slate-600"
// //             />

// //             <h2 className="mt-3 text-sm font-bold text-slate-900">
// //               Quality furniture
// //             </h2>

// //             <p className="mt-1 text-xs leading-5 text-slate-500">
// //               Thoughtfully selected furniture for modern
// //               interior spaces.
// //             </p>
// //           </div>

// //           <div className="rounded-xl border border-slate-200 bg-white p-5">
// //             <Truck size={20} className="text-slate-600" />

// //             <h2 className="mt-3 text-sm font-bold text-slate-900">
// //               Reliable delivery
// //             </h2>

// //             <p className="mt-1 text-xs leading-5 text-slate-500">
// //               Delivery details are confirmed as part of the
// //               checkout process.
// //             </p>
// //           </div>

// //           <div className="rounded-xl border border-slate-200 bg-white p-5">
// //             <Check size={20} className="text-slate-600" />

// //             <h2 className="mt-3 text-sm font-bold text-slate-900">
// //               Customer support
// //             </h2>

// //             <p className="mt-1 text-xs leading-5 text-slate-500">
// //               Contact the VIP Interior team for product and
// //               order assistance.
// //             </p>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // function ArrowRightIcon() {
// //   return (
// //     <svg
// //       width="16"
// //       height="16"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       aria-hidden="true"
// //     >
// //       <path d="M5 12h14" />
// //       <path d="m13 6 6 6-6 6" />
// //     </svg>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams } from "next/navigation";
// // import { useMemo, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Check,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingBag,
// //   Star,
// //   Truck,
// // } from "lucide-react";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   rating: number;
// //   reviews: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// // }

// // const PRODUCTS: Record<string, Product> = {
// //   "product-001": {
// //     id: "product-001",
// //     name: "Premium Modular Sofa",
// //     category: "Living Room",
// //     description:
// //       "A contemporary modular sofa designed for comfortable everyday living with a refined interior aesthetic.",
// //     price: 54900,
// //     rating: 4.8,
// //     reviews: 24,
// //     material: "Premium fabric",
// //     dimensions: "220 × 90 × 85 cm",
// //     stock: 8,
// //   },
// //   "product-002": {
// //     id: "product-002",
// //     name: "Designer Coffee Table",
// //     category: "Living Room",
// //     description:
// //       "A clean and modern coffee table that brings a balanced look to contemporary living spaces.",
// //     price: 30000,
// //     rating: 4.7,
// //     reviews: 18,
// //     material: "Engineered wood",
// //     dimensions: "120 × 60 × 42 cm",
// //     stock: 12,
// //   },
// //   "product-003": {
// //     id: "product-003",
// //     name: "Solid Wood Dining Table",
// //     category: "Dining Room",
// //     description:
// //       "A timeless dining table crafted for family meals, gatherings and elegant dining spaces.",
// //     price: 72500,
// //     rating: 4.9,
// //     reviews: 31,
// //     material: "Solid wood",
// //     dimensions: "180 × 90 × 76 cm",
// //     stock: 5,
// //   },
// //   "product-004": {
// //     id: "product-004",
// //     name: "Modern Dining Chair",
// //     category: "Dining Room",
// //     description: "A comfortable dining chair with a simple contemporary profile.",
// //     price: 8900,
// //     rating: 4.5,
// //     reviews: 12,
// //     material: "Wood & fabric",
// //     dimensions: "45 × 50 × 90 cm",
// //     stock: 24,
// //   },
// //   "product-005": {
// //     id: "product-005",
// //     name: "Luxury TV Unit",
// //     category: "Living Room",
// //     description: "A sophisticated TV unit with practical storage and a modern finish.",
// //     price: 45900,
// //     rating: 4.6,
// //     reviews: 15,
// //     material: "Engineered wood",
// //     dimensions: "180 × 40 × 55 cm",
// //     stock: 7,
// //   },
// //   "product-006": {
// //     id: "product-006",
// //     name: "King Size Bed",
// //     category: "Bedroom",
// //     description: "A spacious bed designed to create a refined and comfortable bedroom.",
// //     price: 68500,
// //     rating: 4.8,
// //     reviews: 22,
// //     material: "Solid wood",
// //     dimensions: "210 × 180 × 110 cm",
// //     stock: 6,
// //   },
// //   "product-007": {
// //     id: "product-007",
// //     name: "Bedside Table",
// //     category: "Bedroom",
// //     description: "A compact bedside table with convenient everyday storage.",
// //     price: 12500,
// //     rating: 4.4,
// //     reviews: 9,
// //     material: "Engineered wood",
// //     dimensions: "50 × 40 × 55 cm",
// //     stock: 18,
// //   },
// //   "product-008": {
// //     id: "product-008",
// //     name: "Executive Office Chair",
// //     category: "Office",
// //     description: "An ergonomic executive chair suitable for premium workspaces.",
// //     price: 24900,
// //     rating: 4.7,
// //     reviews: 19,
// //     material: "Leatherette",
// //     dimensions: "70 × 70 × 120 cm",
// //     stock: 10,
// //   },
// // };

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const productId = (params?.id as string) || "product-001";

// //   const product = useMemo(
// //     () => PRODUCTS[productId] ?? PRODUCTS["product-001"],
// //     [productId]
// //   );

// //   const [quantity, setQuantity] = useState(1);
// //   const [added, setAdded] = useState(false);
// //   const [wishlist, setWishlist] = useState(false);

// //   const total = product.price * quantity;

// //   const addToCart = () => {
// //     try {
// //       const existingCart = localStorage.getItem("cart");
// //       let cart = existingCart ? JSON.parse(existingCart) : [];

// //       const existingIndex = cart.findIndex(
// //         (item: any) => item.id === product.id
// //       );

// //       if (existingIndex >= 0) {
// //         cart[existingIndex].quantity += quantity;
// //       } else {
// //         cart.push({
// //           id: product.id,
// //           name: product.name,
// //           price: product.price,
// //           quantity,
// //         });
// //       }

// //       localStorage.setItem("cart", JSON.stringify(cart));
// //       window.dispatchEvent(new Event("cartUpdated"));

// //       setAdded(true);
// //       setTimeout(() => setAdded(false), 2500);
// //     } catch (err) {
// //       console.error("Failed to add to cart", err);
// //     }
// //   };

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         {/* Breadcrumb */}
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span>{product.category}</span>
// //           <span>/</span>
// //           <span className="font-medium text-slate-800">{product.name}</span>
// //         </div>

// //         {/* Product */}
// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             {/* Image */}
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               <div className="flex h-full min-h-[340px] w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
// //                 <div className="text-center">
// //                   <ShoppingBag
// //                     size={58}
// //                     strokeWidth={1.2}
// //                     className="mx-auto text-slate-300"
// //                   />
// //                   <p className="mt-4 text-sm font-medium text-slate-400">
// //                     {product.name}
// //                   </p>
// //                 </div>
// //               </div>

// //               <button
// //                 type="button"
// //                 onClick={() => setWishlist(!wishlist)}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900"
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={wishlist ? "fill-current text-red-500" : ""}
// //                 />
// //               </button>
// //             </div>

// //             {/* Details */}
// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 {product.category}
// //               </p>

// //               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
// //                 {product.name}
// //               </h1>

// //               {/* Rating */}
// //               <div className="mt-4 flex items-center gap-3">
// //                 <div className="flex items-center gap-1">
// //                   <Star size={16} className="fill-amber-400 text-amber-400" />
// //                   <span className="text-sm font-bold text-slate-800">
// //                     {product.rating}
// //                   </span>
// //                 </div>
// //                 <span className="text-sm text-slate-400">
// //                   ({product.reviews} reviews)
// //                 </span>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //                 <p className="mt-1 text-xs text-slate-400">
// //                   Inclusive of applicable taxes
// //                 </p>
// //               </div>

// //               <div className="mt-7 border-t border-slate-100 pt-6">
// //                 <p className="text-sm leading-7 text-slate-600">
// //                   {product.description}
// //                 </p>
// //               </div>

// //               {/* Specs */}
// //               <div className="mt-7 grid grid-cols-2 gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Stock */}
// //               <div className="mt-5 flex items-center gap-2 text-xs">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               {/* Quantity */}
// //               <div className="mt-7">
// //                 <p className="mb-2 text-xs font-semibold text-slate-700">
// //                   Quantity
// //                 </p>
// //                 <div className="flex w-fit items-center rounded-lg border border-slate-200">
// //                   <button
// //                     type="button"
// //                     onClick={() => setQuantity((v) => Math.max(1, v - 1))}
// //                     disabled={quantity <= 1}
// //                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
// //                   >
// //                     <Minus size={15} />
// //                   </button>
// //                   <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 text-sm font-bold text-slate-800">
// //                     {quantity}
// //                   </span>
// //                   <button
// //                     type="button"
// //                     onClick={() =>
// //                       setQuantity((v) => Math.min(product.stock, v + 1))
// //                     }
// //                     disabled={quantity >= product.stock}
// //                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
// //                   >
// //                     <Plus size={15} />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Actions */}
// //               <div className="mt-7 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   onClick={addToCart}
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
// //                 >
// //                   {added ? (
// //                     <>
// //                       <Check size={17} />
// //                       Added to cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               {/* Delivery */}
// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={19} className="mt-0.5 shrink-0 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs leading-5 text-slate-500">
// //                       Delivery availability and estimated delivery dates will be
// //                       confirmed during checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Total */}
// //               <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
// //                 <span className="text-sm text-slate-500">
// //                   {quantity} item{quantity !== 1 ? "s" : ""} total
// //                 </span>
// //                 <span className="text-lg font-bold text-slate-900">
// //                   {formatCurrency(total)}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Star,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// // } from "@/services/cartService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // function getLoggedInEmail(): string | null {
// //   try {
// //     const raw = localStorage.getItem("user");
// //     if (!raw) return null;
// //     const user = JSON.parse(raw);
// //     return user?.email ? String(user.email).toLowerCase() : null;
// //   } catch {
// //     return null;
// //   }
// // }

// // function isInLocalCart(productId: string): boolean {
// //   try {
// //     const raw = localStorage.getItem("cart");
// //     if (!raw) return false;
// //     const cart = JSON.parse(raw);
// //     if (!Array.isArray(cart)) return false;
// //     return cart.some(
// //       (item: { id?: string; productId?: string }) =>
// //         String(item.productId || item.id) === productId
// //     );
// //   } catch {
// //     return false;
// //   }
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [inCart, setInCart] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishlist, setWishlist] = useState(false);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     const sync = () => setInCart(isInLocalCart(productId));
// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     return () => window.removeEventListener("cartUpdated", sync);
// //   }, [productId]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     setBusy(true);

// //     try {
// //       const email = getLoggedInEmail();
// //       const raw = localStorage.getItem("cart");
// //       let cart = raw ? JSON.parse(raw) : [];
// //       if (!Array.isArray(cart)) cart = [];

// //       if (inCart) {
// //         cart = cart.filter(
// //           (item: { id?: string; productId?: string }) =>
// //             String(item.productId || item.id) !== product.id
// //         );
// //         localStorage.setItem("cart", JSON.stringify(cart));
// //         window.dispatchEvent(new Event("cartUpdated"));
// //         setInCart(false);

// //         if (email) {
// //           try {
// //             await removeFromFirebaseCart(email, product.id);
// //           } catch (err) {
// //             console.error(err);
// //           }
// //         }
// //       } else {
// //         cart.push({
// //           id: product.id,
// //           productId: product.id,
// //           name: product.name,
// //           category: product.category,
// //           price: product.price,
// //           quantity: 1,
// //           image: product.image || "",
// //         });
// //         localStorage.setItem("cart", JSON.stringify(cart));
// //         window.dispatchEvent(new Event("cartUpdated"));
// //         setInCart(true);

// //         if (email) {
// //           try {
// //             await addToFirebaseCart(email, {
// //               productId: product.id,
// //               name: product.name,
// //               price: product.price,
// //               quantity: 1,
// //               image: product.image || "",
// //               category: product.category,
// //             });
// //           } catch (err) {
// //             console.error(err);
// //           }
// //         }
// //       }
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link href="/products" className="mt-4 inline-block font-semibold text-[#176b5b]">
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span>{product.category}</span>
// //           <span>/</span>
// //           <span className="font-medium text-slate-800">{product.name}</span>
// //         </div>

// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               {product.image ? (
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
// //                 />
// //               ) : (
// //                 <div className="text-center">
// //                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
// //                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 onClick={() => setWishlist(!wishlist)}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={wishlist ? "fill-current text-red-500" : "text-slate-600"}
// //                 />
// //               </button>
// //             </div>

// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                 {product.name}
// //               </h1>

// //               <div className="mt-6">
// //                 <p className="text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="mt-6 text-sm leading-7 text-slate-600">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-7 grid grid-cols-2 gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">Material</p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">Dimensions</p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-5 flex items-center gap-2 text-xs">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-6 text-xs text-slate-500">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={19} className="mt-0.5 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // function getLoggedInEmail(): string | null {
// //   try {
// //     const raw = localStorage.getItem("user");
// //     if (!raw) return null;
// //     const user = JSON.parse(raw);
// //     return user?.email ? String(user.email).toLowerCase() : null;
// //   } catch {
// //     return null;
// //   }
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [inCart, setInCart] = useState(false);
// //   const [wishlisted, setWishlisted] = useState(false);
// //   const [busy, setBusy] = useState(false);

// //   // Load product
// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   // Sync cart from Firebase
// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function syncCart() {
// //       const email = getLoggedInEmail();
// //       if (!email) {
// //         if (!cancelled) setInCart(false);
// //         return;
// //       }
// //       try {
// //         const cart = await getCart(email);
// //         const has = Boolean(
// //           cart?.items?.some((i) => i.productId === productId)
// //         );
// //         if (!cancelled) setInCart(has);
// //       } catch {
// //         if (!cancelled) setInCart(false);
// //       }
// //     }

// //     syncCart();
// //     window.addEventListener("cartUpdated", syncCart);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", syncCart);
// //     };
// //   }, [productId]);

// //   // Sync wishlist from Firebase (shared with /products list)
// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function syncWishlist() {
// //       const email = getLoggedInEmail();
// //       if (!email) {
// //         if (!cancelled) setWishlisted(false);
// //         return;
// //       }
// //       try {
// //         const list = await getWishlist(email);
// //         const has = Boolean(
// //           list?.items?.some((i) => i.productId === productId)
// //         );
// //         if (!cancelled) setWishlisted(has);
// //       } catch {
// //         if (!cancelled) setWishlisted(false);
// //       }
// //     }

// //     syncWishlist();
// //     window.addEventListener("wishlistUpdated", syncWishlist);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("wishlistUpdated", syncWishlist);
// //     };
// //   }, [productId]);

// //   const toggleWishlist = async () => {
// //     if (!product) return;

// //     const email = getLoggedInEmail();
// //     if (!email) {
// //       router.push(`/sign-in?redirect=/products/${product.id}`);
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (wishlisted) {
// //         await removeFromWishlist(email, product.id);
// //         setWishlisted(false);
// //       } else {
// //         await addToWishlist(email, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setWishlisted(true);
// //       }
// //       // Products list page listens to this event
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleCart = async () => {
// //     if (!product) return;

// //     const email = getLoggedInEmail();
// //     if (!email) {
// //       router.push(`/sign-in?redirect=/products/${product.id}`);
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(email, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(email);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(email, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f9f8] px-4">
// //         <p className="text-lg font-semibold text-slate-800">Product not found</p>
// //         <Link
// //           href="/products"
// //           className="inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b]"
// //         >
// //           <ArrowLeft size={14} />
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span>{product.category}</span>
// //           <span>/</span>
// //           <span className="font-medium text-slate-800">{product.name}</span>
// //         </div>

// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
// //                 />
// //               ) : (
// //                 <div className="text-center">
// //                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
// //                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={busy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
// //                 aria-label={
// //                   wishlisted ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={
// //                     wishlisted
// //                       ? "fill-current text-red-500"
// //                       : "text-slate-600"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
// //                 {product.name}
// //               </h1>
// //               <p className="mt-4 text-3xl font-bold text-slate-900">
// //                 {formatCurrency(product.price)}
// //               </p>

// //               <p className="mt-5 text-sm leading-6 text-slate-600">
// //                 {product.description || "No description available."}
// //               </p>

// //               <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
// //                 <div>
// //                   <dt className="text-xs text-slate-400">Material</dt>
// //                   <dd className="mt-1 font-medium text-slate-800">
// //                     {product.material}
// //                   </dd>
// //                 </div>
// //                 <div>
// //                   <dt className="text-xs text-slate-400">Dimensions</dt>
// //                   <dd className="mt-1 font-medium text-slate-800">
// //                     {product.dimensions}
// //                   </dd>
// //                 </div>
// //               </dl>

// //               <div className="mt-5 flex items-center gap-2 text-sm">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-6 text-xs text-slate-500">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={19} className="mt-0.5 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // function getLoggedInEmail(): string | null {
// //   try {
// //     const raw = localStorage.getItem("user");
// //     if (!raw) return null;
// //     const user = JSON.parse(raw);
// //     return user?.email ? String(user.email).toLowerCase() : null;
// //   } catch {
// //     return null;
// //   }
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   // Cart + wishlist from Firebase
// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       const email = getLoggedInEmail();
// //       if (!email) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(email),
// //           getWishlist(email),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     const email = getLoggedInEmail();
// //     if (!email) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(email, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(email);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(email, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     const email = getLoggedInEmail();
// //     if (!email) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(email, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(email, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span>{product.category}</span>
// //           <span>/</span>
// //           <span className="font-medium text-slate-800">{product.name}</span>
// //         </div>

// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               {product.image ? (
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
// //                 />
// //               ) : (
// //                 <div className="text-center">
// //                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
// //                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50"
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500"
// //                       : "text-slate-600"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                 {product.name}
// //               </h1>

// //               <div className="mt-6">
// //                 <p className="text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="mt-6 text-sm leading-7 text-slate-600">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-7 grid grid-cols-2 gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">Material</p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-5 flex items-center gap-2 text-xs">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-6 text-xs text-slate-500">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={19} className="mt-0.5 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   // Auth UID only (no localStorage)
// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   // Cart + wishlist from Firebase by Auth UID
// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
// //         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span>{product.category}</span>
// //           <span>/</span>
// //           <span className="font-medium text-slate-800">{product.name}</span>
// //         </div>

// //         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
// //           <div className="grid lg:grid-cols-2">
// //             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
// //                 />
// //               ) : (
// //                 <div className="text-center">
// //                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
// //                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50"
// //               >
// //                 <Heart
// //                   size={18}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500"
// //                       : "text-slate-600"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             <div className="p-6 sm:p-8 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                 {product.name}
// //               </h1>

// //               <div className="mt-6">
// //                 <p className="text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="mt-6 text-sm leading-7 text-slate-600">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-7 grid grid-cols-2 gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-4">
// //                   <p className="text-[11px] uppercase text-slate-400">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-sm font-semibold text-slate-800">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-5 flex items-center gap-2 text-xs">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-6 text-xs text-slate-500">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={19} className="mt-0.5 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
// //         {/* Breadcrumb */}
// //         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span className="truncate">{product.category}</span>
// //           <span className="hidden sm:inline">/</span>
// //           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
// //             {product.name}
// //           </span>
// //         </div>

// //         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
// //           {/* Mobile: image left + summary right · Desktop: 2 columns */}
// //           <div className="grid grid-cols-[110px_1fr] gap-0 sm:grid-cols-[180px_1fr] lg:grid-cols-2">
// //             {/* Image — left on all breakpoints */}
// //             <div className="relative flex aspect-square items-center justify-center bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
// //                 />
// //               ) : (
// //                 <div className="p-2 text-center">
// //                   <ShoppingBag
// //                     size={32}
// //                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
// //                   />
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-10 sm:w-10 lg:right-6 lg:top-6"
// //                 aria-label={
// //                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={14}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500 sm:h-[18px] sm:w-[18px]"
// //                       : "text-slate-600 sm:h-[18px] sm:w-[18px]"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             {/* Top summary (mobile/tablet) — sits right of image */}
// //             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
// //               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
// //                 {product.name}
// //               </h1>
// //               <p className="mt-2 text-base font-bold text-slate-900 sm:text-xl">
// //                 {formatCurrency(product.price)}
// //               </p>
// //               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} in stock
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Full details column */}
// //             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               {/* Desktop title block (hidden on mobile — already shown beside image) */}
// //               <div className="hidden lg:block">
// //                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                   {product.category}
// //                 </p>
// //                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                   {product.name}
// //                 </h1>
// //                 <p className="mt-6 text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="mt-0 text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:gap-3">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60 sm:px-5 sm:py-3.5 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:px-5 sm:py-3.5"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
// //         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
// //           <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span className="truncate">{product.category}</span>
// //           <span className="hidden sm:inline">/</span>
// //           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
// //             {product.name}
// //           </span>
// //         </div>

// //         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
// //           {/* Mobile: small image left · Desktop: half-width gallery */}
// //           <div className="grid grid-cols-[88px_1fr] gap-0 sm:grid-cols-[140px_1fr] lg:grid-cols-2">
// //             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
// //                 />
// //               ) : (
// //                 <div className="p-1.5 text-center">
// //                   <ShoppingBag
// //                     size={24}
// //                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
// //                   />
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-2.5 sm:top-2.5 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
// //                 aria-label={
// //                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={12}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
// //                       : "text-slate-600 sm:h-4 sm:w-4"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             {/* Compact summary beside image (mobile / tablet only) */}
// //             <div className="flex flex-col justify-center p-2.5 sm:p-4 lg:hidden">
// //               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
// //                 {product.name}
// //               </h1>
// //               <p className="mt-1.5 text-base font-bold text-slate-900 sm:mt-2 sm:text-xl">
// //                 {formatCurrency(product.price)}
// //               </p>
// //               <div className="mt-1.5 flex items-center gap-1.5 text-[10px] sm:mt-2 sm:text-xs">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} in stock
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Details */}
// //             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
// //               <Link
// //                 href="/products"
// //                 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
// //               >
// //                 <ArrowLeft size={14} />
// //                 Back to products
// //               </Link>

// //               <div className="hidden lg:block">
// //                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                   {product.category}
// //                 </p>
// //                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                   {product.name}
// //                 </h1>
// //                 <p className="mt-6 text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:gap-3">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60 sm:px-5 sm:py-3.5 ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={17} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={17} />
// //                       Remove from cart
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={17} />
// //                       Add to cart
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:px-5 sm:py-3.5"
// //                 >
// //                   Go to Cart
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
// //         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
// //           {/* <Link href="/products" className="transition hover:text-slate-900">
// //             Products
// //           </Link>
// //           <span>/</span>
// //           <span className="truncate">{product.category}</span> */}
// //           {/* <Link
// //             href="/products"
// //             className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
// //           >
// //             <ArrowLeft size={14} />
// //             Back to products
// //           </Link> */}

// // <Link
// //   href="/products"
// //   className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
// // >
// //   <ArrowLeft size={14} className="shrink-0" />
// //   Back to products
// // </Link>
// //           <span className="hidden sm:inline">/</span>
// //           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
// //             {product.name}
// //           </span>
// //         </div>

// //         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
// //           {/* Larger image on mobile: ~42% width */}
// //           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
// //             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
// //                 />
// //               ) : (
// //                 <div className="p-2 text-center">
// //                   <ShoppingBag
// //                     size={36}
// //                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
// //                   />
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
// //                 aria-label={
// //                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={14}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
// //                       : "text-slate-600 sm:h-4 sm:w-4"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             {/* Summary beside image (mobile / tablet) */}
// //             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
// //               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
// //                 {product.name}
// //               </h1>
// //               <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
// //                 {formatCurrency(product.price)}
// //               </p>
// //               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} in stock
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Details */}
// //             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">


// //               <div className="hidden lg:block">
// //                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                   {product.category}
// //                 </p>
// //                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                   {product.name}
// //                 </h1>
// //                 <p className="mt-6 text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               {/* Always one row: 2 buttons side by side */}
// //               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={16} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={15} className="shrink-0" />
// //                       <span className="truncate">Remove</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={15} className="shrink-0" />
// //                       <span className="truncate">Add to cart</span>
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
// //                 >
// //                   <span className="truncate">Go to Cart</span>
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Delivery information
// //                     </p>
// //                     <p className="mt-1 text-xs text-slate-500">
// //                       Delivery details are confirmed at checkout.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useMemo, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   price: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// //   leadTime?: string;
// //   leadTimeDays: number;
// // }

// // /** Parse "7", "7 days", "5-7 days" → number of days (uses highest number). */
// // function parseLeadTimeDays(value: unknown, fallback = 7): number {
// //   if (typeof value === "number" && Number.isFinite(value) && value > 0) {
// //     return Math.min(365, Math.floor(value));
// //   }
// //   const s = String(value ?? "").trim();
// //   if (!s || s === "—") return fallback;
// //   const nums = s.match(/\d+/g);
// //   if (!nums?.length) return fallback;
// //   const max = Math.max(...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0));
// //   return Number.isFinite(max) ? Math.min(365, max) : fallback;
// // }

// // function addDays(base: Date, days: number): Date {
// //   const d = new Date(base);
// //   d.setHours(0, 0, 0, 0);
// //   d.setDate(d.getDate() + days);
// //   return d;
// // }

// // function formatDeliveryDate(date: Date): string {
// //   return date.toLocaleDateString("en-IN", {
// //     weekday: "short",
// //     day: "numeric",
// //     month: "short",
// //     year: "numeric",
// //   });
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
// //           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);
// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             price: Number(data.sellingPrice ?? data.price ?? 0),
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //             leadTime: String(leadRaw || "").trim() || undefined,
// //             leadTimeDays,
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   const expectedDelivery = useMemo(() => {
// //     if (!product) return null;
// //     return addDays(new Date(), product.leadTimeDays);
// //   }, [product]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.price,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //             leadTimeDays: product.leadTimeDays,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.price,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
// //         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
// //           <Link
// //             href="/products"
// //             className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
// //           >
// //             <ArrowLeft size={14} className="shrink-0" />
// //             Back to products
// //           </Link>
// //           <span className="hidden sm:inline">/</span>
// //           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
// //             {product.name}
// //           </span>
// //         </div>

// //         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
// //           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
// //             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
// //                 />
// //               ) : (
// //                 <div className="p-2 text-center">
// //                   <ShoppingBag
// //                     size={36}
// //                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
// //                   />
// //                 </div>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
// //                 aria-label={
// //                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={14}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
// //                       : "text-slate-600 sm:h-4 sm:w-4"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
// //               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
// //                 {product.name}
// //               </h1>
// //               <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
// //                 {formatCurrency(product.price)}
// //               </p>
// //               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} in stock
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
// //               <div className="hidden lg:block">
// //                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                   {product.category}
// //                 </p>
// //                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                   {product.name}
// //                 </h1>
// //                 <p className="mt-6 text-3xl font-bold text-slate-900">
// //                   {formatCurrency(product.price)}
// //                 </p>
// //               </div>

// //               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
// //                 Change quantity on the cart page after adding.
// //               </p>

// //               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={16} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={15} className="shrink-0" />
// //                       <span className="truncate">Remove</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={15} className="shrink-0" />
// //                       <span className="truncate">Add to cart</span>
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
// //                 >
// //                   <span className="truncate">Go to Cart</span>
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={18} className="mt-0.5 shrink-0 text-[#176b5b]" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Estimated delivery
// //                     </p>
// //                     <p className="mt-1 text-xs leading-5 text-slate-600">
// //                       {expectedDelivery
// //                         ? (
// //                           <>
// //                             By{" "}
// //                             <span className="font-semibold text-slate-800">
// //                               {formatDeliveryDate(expectedDelivery)}
// //                             </span>
// //                             {" · "}
// //                             {product.leadTimeDays} day
// //                             {product.leadTimeDays === 1 ? "" : "s"} lead time
// //                             {product.leadTime
// //                               ? ` (${product.leadTime})`
// //                               : ""}
// //                           </>
// //                         )
// //                         : "Delivery date confirmed at checkout."}
// //                     </p>
// //                     <p className="mt-1 text-[11px] text-slate-400">
// //                       Exact date may vary by location and order volume.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import { useEffect, useMemo, useState } from "react";
// // import {
// //   ArrowLeft,
// //   Heart,
// //   Loader2,
// //   ShoppingBag,
// //   Trash2,
// //   Truck,
// // } from "lucide-react";
// // import { doc, getDoc } from "firebase/firestore";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth, db } from "@/lib/firebase";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// //   getProductAgeDays,
// //   canApplyAgeingDiscount,
// //   getEffectiveSellingPrice,
// //   AGEING_DISCOUNT_DAYS,
// // } from "@/services/cartService";
// // import {
// //   getWishlist,
// //   addToWishlist,
// //   removeFromWishlist,
// // } from "@/services/wishlistService";

// // interface Product {
// //   id: string;
// //   name: string;
// //   category: string;
// //   description: string;
// //   /** List / MRP */
// //   listPrice: number;
// //   discountPercent: number;
// //   effectivePrice: number;
// //   hasDiscount: boolean;
// //   ageDays: number;
// //   material: string;
// //   dimensions: string;
// //   stock: number;
// //   image?: string;
// //   leadTime?: string;
// //   leadTimeDays: number;
// // }

// // function parseLeadTimeDays(value: unknown, fallback = 7): number {
// //   if (typeof value === "number" && Number.isFinite(value) && value > 0) {
// //     return Math.min(365, Math.floor(value));
// //   }
// //   const s = String(value ?? "").trim();
// //   if (!s || s === "—") return fallback;
// //   const nums = s.match(/\d+/g);
// //   if (!nums?.length) return fallback;
// //   const max = Math.max(
// //     ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
// //   );
// //   return Number.isFinite(max) ? Math.min(365, max) : fallback;
// // }

// // function addDays(base: Date, days: number): Date {
// //   const d = new Date(base);
// //   d.setHours(0, 0, 0, 0);
// //   d.setDate(d.getDate() + days);
// //   return d;
// // }

// // function formatDeliveryDate(date: Date): string {
// //   return date.toLocaleDateString("en-IN", {
// //     weekday: "short",
// //     day: "numeric",
// //     month: "short",
// //     year: "numeric",
// //   });
// // }

// // function formatCurrency(value: number) {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // }

// // export default function ProductDetailPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = (params?.id as string) || "";

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [authUid, setAuthUid] = useState<string | null>(null);
// //   const [inCart, setInCart] = useState(false);
// //   const [inWishlist, setInWishlist] = useState(false);
// //   const [busy, setBusy] = useState(false);
// //   const [wishBusy, setWishBusy] = useState(false);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (user) => {
// //       setAuthUid(user?.uid ?? null);
// //     });
// //     return () => unsub();
// //   }, []);

// //   useEffect(() => {
// //     if (!productId) return;

// //     async function load() {
// //       setLoading(true);
// //       try {
// //         const snap = await getDoc(doc(db, "furniture_products", productId));
// //         if (snap.exists()) {
// //           const data = snap.data();
// //           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
// //           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

// //           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
// //           const discountPercent = Math.min(
// //             100,
// //             Math.max(0, Number(data.discountPercent) || 0)
// //           );
// //           const ageDays = getProductAgeDays(data as {
// //             createdAt?: { toMillis?: () => number } | null;
// //             publishedAt?: { toMillis?: () => number } | null;
// //           });
// //           const hasDiscount = canApplyAgeingDiscount({
// //             createdAt: data.createdAt as
// //               | { toMillis?: () => number }
// //               | null
// //               | undefined,
// //             publishedAt: data.publishedAt as
// //               | { toMillis?: () => number }
// //               | null
// //               | undefined,
// //             discountPercent,
// //           });
// //           const effectivePrice = getEffectiveSellingPrice(
// //             listPrice,
// //             discountPercent,
// //             hasDiscount
// //           );

// //           setProduct({
// //             id: snap.id,
// //             name: data.name || "Product",
// //             category: data.category || "Other",
// //             description: data.description || "",
// //             listPrice,
// //             discountPercent: hasDiscount ? discountPercent : 0,
// //             effectivePrice,
// //             hasDiscount,
// //             ageDays,
// //             material: data.material || "—",
// //             dimensions: data.dimensions || "—",
// //             stock: Number(data.stock ?? 0),
// //             image: data.imageUrl || data.image || "",
// //             leadTime: String(leadRaw || "").trim() || undefined,
// //             leadTimeDays,
// //           });
// //         } else {
// //           setProduct(null);
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setProduct(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     load();
// //   }, [productId]);

// //   const expectedDelivery = useMemo(() => {
// //     if (!product) return null;
// //     return addDays(new Date(), product.leadTimeDays);
// //   }, [product]);

// //   useEffect(() => {
// //     if (!productId) return;
// //     let cancelled = false;

// //     async function sync() {
// //       if (!authUid) {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //         return;
// //       }
// //       try {
// //         const [cart, wish] = await Promise.all([
// //           getCart(authUid),
// //           getWishlist(authUid),
// //         ]);
// //         if (cancelled) return;
// //         setInCart(
// //           Boolean(cart?.items?.some((i) => i.productId === productId))
// //         );
// //         setInWishlist(
// //           Boolean(wish?.items?.some((i) => i.productId === productId))
// //         );
// //       } catch {
// //         if (!cancelled) {
// //           setInCart(false);
// //           setInWishlist(false);
// //         }
// //       }
// //     }

// //     sync();
// //     window.addEventListener("cartUpdated", sync);
// //     window.addEventListener("wishlistUpdated", sync);
// //     return () => {
// //       cancelled = true;
// //       window.removeEventListener("cartUpdated", sync);
// //       window.removeEventListener("wishlistUpdated", sync);
// //     };
// //   }, [productId, authUid]);

// //   const toggleCart = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setBusy(true);
// //     try {
// //       if (inCart) {
// //         await removeFromFirebaseCart(authUid, product.id);
// //         setInCart(false);
// //       } else {
// //         const cart = await getCart(authUid);
// //         const already = cart?.items?.some((i) => i.productId === product.id);
// //         if (!already) {
// //           await addToFirebaseCart(authUid, {
// //             productId: product.id,
// //             name: product.name,
// //             price: product.effectivePrice,
// //             listPrice: product.listPrice,
// //             discountPercent: product.hasDiscount
// //               ? product.discountPercent
// //               : undefined,
// //             quantity: 1,
// //             image: product.image || "",
// //             category: product.category,
// //             leadTimeDays: product.leadTimeDays,
// //           });
// //         }
// //         setInCart(true);
// //       }
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (err) {
// //       console.error("Cart toggle failed", err);
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   const toggleWishlist = async () => {
// //     if (!product) return;
// //     if (!authUid) {
// //       router.push("/sign-in");
// //       return;
// //     }

// //     setWishBusy(true);
// //     try {
// //       if (inWishlist) {
// //         await removeFromWishlist(authUid, product.id);
// //         setInWishlist(false);
// //       } else {
// //         await addToWishlist(authUid, {
// //           productId: product.id,
// //           name: product.name,
// //           price: product.effectivePrice,
// //           image: product.image || "",
// //           category: product.category,
// //         });
// //         setInWishlist(true);
// //       }
// //       window.dispatchEvent(new Event("wishlistUpdated"));
// //     } catch (err) {
// //       console.error("Wishlist toggle failed", err);
// //     } finally {
// //       setWishBusy(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
// //         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
// //       </main>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
// //         <p className="text-slate-600">Product not found.</p>
// //         <Link
// //           href="/products"
// //           className="mt-4 inline-block font-semibold text-[#176b5b]"
// //         >
// //           Back to products
// //         </Link>
// //       </main>
// //     );
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#f7f9f8]">
// //       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
// //         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
// //           <Link
// //             href="/products"
// //             className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
// //           >
// //             <ArrowLeft size={14} className="shrink-0" />
// //             Back to products
// //           </Link>
// //           {/* <span className="hidden sm:inline">/</span> */}
// //           {/* <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
// //             {product.name}
// //           </span> */}
// //         </div>

// //         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
// //           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
// //             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
// //               {product.image ? (
// //                 // eslint-disable-next-line @next/next/no-img-element
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
// //                 />
// //               ) : (
// //                 <div className="p-2 text-center">
// //                   <ShoppingBag
// //                     size={36}
// //                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
// //                   />
// //                 </div>
// //               )}

// //               {product.hasDiscount && (
// //                 <span className="absolute left-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs">
// //                   {product.discountPercent}% OFF
// //                 </span>
// //               )}

// //               <button
// //                 type="button"
// //                 disabled={wishBusy}
// //                 onClick={toggleWishlist}
// //                 className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
// //                 aria-label={
// //                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
// //                 }
// //               >
// //                 <Heart
// //                   size={14}
// //                   className={
// //                     inWishlist
// //                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
// //                       : "text-slate-600 sm:h-4 sm:w-4"
// //                   }
// //                 />
// //               </button>
// //             </div>

// //             {/* Mobile title + price */}
// //             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
// //               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
// //                 {product.category}
// //               </p>
// //               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
// //                 {product.name}
// //               </h1>
// //               {product.hasDiscount ? (
// //                 <div className="mt-2">
// //                   <p className="text-xs text-slate-400 line-through">
// //                     {formatCurrency(product.listPrice)}
// //                   </p>
// //                   <p className="text-lg font-bold text-slate-900 sm:text-xl">
// //                     {formatCurrency(product.effectivePrice)}
// //                   </p>
// //                   <span className="mt-0.5 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
// //                     {product.discountPercent}% off
// //                   </span>
// //                 </div>
// //               ) : (
// //                 <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
// //                   {formatCurrency(product.effectivePrice)}
// //                 </p>
// //               )}
// //               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} in stock
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
// //               <div className="hidden lg:block">
// //                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
// //                   {product.category}
// //                 </p>
// //                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
// //                   {product.name}
// //                 </h1>
// //                 {product.hasDiscount ? (
// //                   <div className="mt-6">
// //                     <p className="text-base text-slate-400 line-through">
// //                       {formatCurrency(product.listPrice)}
// //                     </p>
// //                     <p className="text-3xl font-bold text-slate-900">
// //                       {formatCurrency(product.effectivePrice)}
// //                     </p>
// //                     <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
// //                       {product.discountPercent}% off · discount
// //                     </span>
// //                   </div>
// //                 ) : (
// //                   <p className="mt-6 text-3xl font-bold text-slate-900">
// //                     {formatCurrency(product.effectivePrice)}
// //                   </p>
// //                 )}
// //               </div>

// //               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
// //                 {product.description || "No description available."}
// //               </p>

// //               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Material
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.material}
// //                   </p>
// //                 </div>
// //                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
// //                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
// //                     Dimensions
// //                   </p>
// //                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
// //                     {product.dimensions}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
// //                 <span className="font-medium text-emerald-700">
// //                   {product.stock} units available
// //                 </span>
// //               </div>

// //               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
// //                 Change quantity on the cart page after adding.
// //                 {product.hasDiscount
// //                   ? ` Price includes ${product.discountPercent}% discount.`
// //                   : ""}
// //               </p>

// //               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
// //                 <button
// //                   type="button"
// //                   disabled={busy}
// //                   onClick={toggleCart}
// //                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
// //                     inCart
// //                       ? "bg-red-600 hover:bg-red-700"
// //                       : "bg-slate-900 hover:bg-slate-800"
// //                   }`}
// //                 >
// //                   {busy ? (
// //                     <Loader2 size={16} className="animate-spin" />
// //                   ) : inCart ? (
// //                     <>
// //                       <Trash2 size={15} className="shrink-0" />
// //                       <span className="truncate">Remove</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <ShoppingBag size={15} className="shrink-0" />
// //                       <span className="truncate">Add to cart</span>
// //                     </>
// //                   )}
// //                 </button>

// //                 <Link
// //                   href="/cart"
// //                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
// //                 >
// //                   <span className="truncate">Go to Cart</span>
// //                 </Link>
// //               </div>

// //               {!authUid && (
// //                 <p className="mt-3 text-xs text-slate-500">
// //                   <Link
// //                     href="/sign-in"
// //                     className="font-semibold text-[#176b5b] hover:underline"
// //                   >
// //                     Sign in
// //                   </Link>{" "}
// //                   to add this product to your cart.
// //                 </p>
// //               )}

// //               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
// //                 <div className="flex gap-3">
// //                   <Truck size={18} className="mt-0.5 shrink-0 text-[#176b5b]" />
// //                   <div>
// //                     <p className="text-sm font-semibold text-slate-900">
// //                       Estimated delivery
// //                     </p>
// //                     <p className="mt-1 text-xs leading-5 text-slate-600">
// //                       {expectedDelivery ? (
// //                         <>
// //                           By{" "}
// //                           <span className="font-semibold text-slate-800">
// //                             {formatDeliveryDate(expectedDelivery)}
// //                           </span>
// //                           {" · "}
// //                           {product.leadTimeDays} day
// //                           {product.leadTimeDays === 1 ? "" : "s"} lead time
// //                           {product.leadTime
// //                             ? ` (${product.leadTime})`
// //                             : ""}
// //                         </>
// //                       ) : (
// //                         "Delivery date confirmed at checkout."
// //                       )}
// //                     </p>
// //                     <p className="mt-1 text-[11px] text-slate-400">
// //                       Exact date may vary by location and order volume.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
//   leadTime?: string;
//   leadTimeDays: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_products", productId)
//         );

//         if (snap.exists()) {
//           const data = snap.data();
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(
//             data.sellingPrice ?? data.price ?? 0
//           );

//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays(data as {
//             createdAt?: { toMillis?: () => number } | null;
//             publishedAt?: { toMillis?: () => number } | null;
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   useEffect(() => {
//     if (!productId) return;

//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }

//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);

//         if (cancelled) return;

//         setInCart(
//           Boolean(
//             cart?.items?.some((i) => i.productId === productId)
//           )
//         );

//         setInWishlist(
//           Boolean(
//             wish?.items?.some((i) => i.productId === productId)
//           )
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();

//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);

//         const already = cart?.items?.some(
//           (i) => i.productId === product.id
//         );

//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.effectivePrice,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }

//         setInCart(true);
//       }

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);

//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || "",
//           category: product.category,
//         });

//         setInWishlist(true);
//       }

//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>

//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
//           {/* <Link
//             href="/products"
//             className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
//           >
//             <ArrowLeft size={14} className="shrink-0" />
//             Back to products
//           </Link> */}
//         </div>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
//             {/* Product image */}
//             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                 />
//               ) : (
//                 <div className="p-2 text-center">
//                   <ShoppingBag
//                     size={36}
//                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                   />
//                 </div>
//               )}

//               {/* Back arrow button at the top-left of the image */}
//               <Link
//                 href="/products"
//                 aria-label="Back to products"
//                 title="Back to products"
//                 className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
//               >
//                 <ArrowLeft size={18} />
//               </Link>

//               {/* Discount badge below the arrow */}
//               {product.hasDiscount && (
//                 <span className="absolute left-3 top-16 z-10 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
//                   {product.discountPercent}% OFF
//                 </span>
//               )}

//               {/* Wishlist button */}
//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
//                 aria-label={
//                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={14}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
//                       : "text-slate-600 sm:h-4 sm:w-4"
//                   }
//                 />
//               </button>
//             </div>

//             {/* Mobile title and price */}
//             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>

//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>

//               {product.hasDiscount ? (
//                 <div className="mt-2">
//                   <p className="text-xs text-slate-400 line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>

//                   <p className="text-lg font-bold text-slate-900 sm:text-xl">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>

//                   <span className="mt-0.5 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
//                     {product.discountPercent}% off
//                   </span>
//                 </div>
//               ) : (
//                 <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//               )}

//               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Product details */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>

//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>

//                 {product.hasDiscount ? (
//                   <div className="mt-6">
//                     <p className="text-base text-slate-400 line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>

//                     <p className="text-3xl font-bold text-slate-900">
//                       {formatCurrency(product.effectivePrice)}
//                     </p>

//                     <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
//                       {product.discountPercent}% off · discount
//                     </span>
//                   </div>
//                 ) : (
//                   <p className="mt-6 text-3xl font-bold text-slate-900">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                 )}
//               </div>

//               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>

//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>

//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>

//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//                 {product.hasDiscount
//                   ? ` Price includes ${product.discountPercent}% discount.`
//                   : ""}
//               </p>

//               {/* Cart actions */}
//               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={15} className="shrink-0" />
//                       <span className="truncate">Remove</span>
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={15} className="shrink-0" />
//                       <span className="truncate">Add to cart</span>
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
//                 >
//                   <span className="truncate">Go to Cart</span>
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               {/* Estimated delivery */}
//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#176b5b]"
//                   />

//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Estimated delivery
//                     </p>

//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       {expectedDelivery ? (
//                         <>
//                           By{" "}
//                           <span className="font-semibold text-slate-800">
//                             {formatDeliveryDate(expectedDelivery)}
//                           </span>
//                           {" · "}
//                           {product.leadTimeDays} day
//                           {product.leadTimeDays === 1 ? "" : "s"} lead time
//                           {product.leadTime
//                             ? ` (${product.leadTime})`
//                             : ""}
//                         </>
//                       ) : (
//                         "Delivery date confirmed at checkout."
//                       )}
//                     </p>

//                     <p className="mt-1 text-[11px] text-slate-400">
//                       Exact date may vary by location and order volume.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data();
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);

//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//           });
//           setActiveImage(0);
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const currentSrc = product
//     ? product.images[activeImage] || product.images[0] || product.image || ""
//     : "";

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.effectivePrice,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.images[0] || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative flex flex-col bg-slate-100 lg:min-h-[480px] lg:p-6">
//               <div className="relative flex aspect-square items-center justify-center overflow-hidden lg:aspect-auto lg:min-h-[400px]">
//                 {currentSrc ? (
//                   // eslint-disable-next-line @next/next/no-img-element
//                   <img
//                     src={currentSrc}
//                     alt={`${product.name} – view ${activeImage + 1}`}
//                     className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                   />
//                 ) : (
//                   <div className="p-2 text-center">
//                     <ShoppingBag
//                       size={36}
//                       className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                     />
//                   </div>
//                 )}

//                 <Link
//                   href="/products"
//                   aria-label="Back to products"
//                   title="Back to products"
//                   className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
//                 >
//                   <ArrowLeft size={18} />
//                 </Link>

//                 {product.hasDiscount && (
//                   <span className="absolute left-3 top-16 z-10 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
//                     {product.discountPercent}% OFF
//                   </span>
//                 )}

//                 <button
//                   type="button"
//                   disabled={wishBusy}
//                   onClick={toggleWishlist}
//                   className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
//                   aria-label={
//                     inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                   }
//                 >
//                   <Heart
//                     size={14}
//                     className={
//                       inWishlist
//                         ? "fill-current text-red-500 sm:h-4 sm:w-4"
//                         : "text-slate-600 sm:h-4 sm:w-4"
//                     }
//                   />
//                 </button>
//               </div>

//               {product.images.length > 1 && (
//                 <div className="flex gap-2 overflow-x-auto px-2 py-2 scrollbar-thin lg:px-0">
//                   {product.images.map((src, i) => (
//                     <button
//                       key={`${src}-${i}`}
//                       type="button"
//                       onClick={() => setActiveImage(i)}
//                       className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-16 ${
//                         i === activeImage
//                           ? "border-[#176b5b] ring-1 ring-[#176b5b]"
//                           : "border-white/80 opacity-80 hover:opacity-100"
//                       }`}
//                       aria-label={`View ${i + 1}`}
//                     >
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img
//                         src={src}
//                         alt=""
//                         className="h-full w-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile title / price */}
//             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>
//               {product.hasDiscount ? (
//                 <div className="mt-2">
//                   <p className="text-xs text-slate-400 line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <p className="text-lg font-bold text-slate-900 sm:text-xl">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                   <span className="mt-0.5 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
//                     {product.discountPercent}% off
//                   </span>
//                 </div>
//               ) : (
//                 <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//               )}
//               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>
//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 {product.hasDiscount ? (
//                   <div className="mt-6">
//                     <p className="text-base text-slate-400 line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <p className="text-3xl font-bold text-slate-900">
//                       {formatCurrency(product.effectivePrice)}
//                     </p>
//                     <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
//                       {product.discountPercent}% off · discount
//                     </span>
//                   </div>
//                 ) : (
//                   <p className="mt-6 text-3xl font-bold text-slate-900">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                 )}
//               </div>

//               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//                 {product.hasDiscount
//                   ? ` Price includes ${product.discountPercent}% discount.`
//                   : ""}
//               </p>

//               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={15} className="shrink-0" />
//                       <span className="truncate">Remove</span>
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={15} className="shrink-0" />
//                       <span className="truncate">Add to cart</span>
//                     </>
//                   )}
//                 </button>
//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
//                 >
//                   <span className="truncate">Go to Cart</span>
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#176b5b]"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Estimated delivery
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       {expectedDelivery ? (
//                         <>
//                           By{" "}
//                           <span className="font-semibold text-slate-800">
//                             {formatDeliveryDate(expectedDelivery)}
//                           </span>
//                           {" · "}
//                           {product.leadTimeDays} day
//                           {product.leadTimeDays === 1 ? "" : "s"} lead time
//                           {product.leadTime
//                             ? ` (${product.leadTime})`
//                             : ""}
//                         </>
//                       ) : (
//                         "Delivery date confirmed at checkout."
//                       )}
//                     </p>
//                     <p className="mt-1 text-[11px] text-slate-400">
//                       Exact date may vary by location and order volume.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data();
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);

//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//           });
//           setActiveImage(0);
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const currentSrc = product
//     ? product.images[activeImage] || product.images[0] || product.image || ""
//     : "";

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.effectivePrice,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.images[0] || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative flex flex-col bg-slate-100 lg:min-h-[480px] lg:p-6">
//               <div className="relative flex aspect-square items-center justify-center overflow-hidden lg:aspect-auto lg:min-h-[400px]">
//                 {currentSrc ? (
//                   // eslint-disable-next-line @next/next/no-img-element
//                   <img
//                     src={currentSrc}
//                     alt={`${product.name} – view ${activeImage + 1}`}
//                     className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                   />
//                 ) : (
//                   <div className="p-2 text-center">
//                     <ShoppingBag
//                       size={36}
//                       className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                     />
//                   </div>
//                 )}

//                 <Link
//                   href="/products"
//                   aria-label="Back to products"
//                   title="Back to products"
//                   className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
//                 >
//                   <ArrowLeft size={18} />
//                 </Link>

//                 {product.hasDiscount && (
//                   <span className="absolute left-3 top-16 z-10 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
//                     {product.discountPercent}% OFF
//                   </span>
//                 )}

//                 <button
//                   type="button"
//                   disabled={wishBusy}
//                   onClick={toggleWishlist}
//                   className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
//                   aria-label={
//                     inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                   }
//                 >
//                   <Heart
//                     size={14}
//                     className={
//                       inWishlist
//                         ? "fill-current text-red-500 sm:h-4 sm:w-4"
//                         : "text-slate-600 sm:h-4 sm:w-4"
//                     }
//                   />
//                 </button>
//               </div>

//               {product.images.length > 1 && (
//                 <div className="flex gap-2 overflow-x-auto px-2 py-2 scrollbar-thin lg:px-0">
//                   {product.images.map((src, i) => (
//                     <button
//                       key={`${src}-${i}`}
//                       type="button"
//                       onClick={() => setActiveImage(i)}
//                       className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-16 ${
//                         i === activeImage
//                           ? "border-[#176b5b] ring-1 ring-[#176b5b]"
//                           : "border-white/80 opacity-80 hover:opacity-100"
//                       }`}
//                       aria-label={`View ${i + 1}`}
//                     >
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img
//                         src={src}
//                         alt=""
//                         className="h-full w-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile title / price */}
//             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>
//               {product.hasDiscount ? (
//                 <div className="mt-2">
//                   <p className="text-xs text-slate-400 line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <p className="text-lg font-bold text-slate-900 sm:text-xl">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                   <span className="mt-0.5 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
//                     {product.discountPercent}% off
//                   </span>
//                 </div>
//               ) : (
//                 <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//               )}
//               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>
//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 {product.hasDiscount ? (
//                   <div className="mt-6">
//                     <p className="text-base text-slate-400 line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <p className="text-3xl font-bold text-slate-900">
//                       {formatCurrency(product.effectivePrice)}
//                     </p>
//                     <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
//                       {product.discountPercent}% off · discount
//                     </span>
//                   </div>
//                 ) : (
//                   <p className="mt-6 text-3xl font-bold text-slate-900">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                 )}
//               </div>

//               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//                 {product.hasDiscount
//                   ? ` Price includes ${product.discountPercent}% discount.`
//                   : ""}
//               </p>

//               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={15} className="shrink-0" />
//                       <span className="truncate">Remove</span>
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={15} className="shrink-0" />
//                       <span className="truncate">Add to cart</span>
//                     </>
//                   )}
//                 </button>
//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
//                 >
//                   <span className="truncate">Go to Cart</span>
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#176b5b]"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Estimated delivery
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       {expectedDelivery ? (
//                         <>
//                           By{" "}
//                           <span className="font-semibold text-slate-800">
//                             {formatDeliveryDate(expectedDelivery)}
//                           </span>
//                           {" · "}
//                           {product.leadTimeDays} day
//                           {product.leadTimeDays === 1 ? "" : "s"} lead time
//                           {product.leadTime
//                             ? ` (${product.leadTime})`
//                             : ""}
//                         </>
//                       ) : (
//                         "Delivery date confirmed at checkout."
//                       )}
//                     </p>
//                     <p className="mt-1 text-[11px] text-slate-400">
//                       Exact date may vary by location and order volume.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Customer reviews */}
//         <ProductReviews productId={product.id} productName={product.name} />
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data();
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);

//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//           });
//           setActiveImage(0);
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.effectivePrice,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.images[0] || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
//             {/* ========== Flipkart-style gallery ========== */}
//             <div className="relative border-b border-slate-100 bg-white p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-5">
//               <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
//                 {/* Desktop: vertical thumbs (left) */}
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[520px] w-[72px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`desk-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => setActiveImage(i)}
//                         onClick={() => setActiveImage(i)}
//                         className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-md border-2 bg-slate-50 transition ${
//                           i === activeImage
//                             ? "border-[#176b5b] shadow-sm"
//                             : "border-slate-200 hover:border-slate-300"
//                         }`}
//                         aria-label={`View image ${i + 1}`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 {/* Main image */}
//                 <div className="relative min-w-0 flex-1">
//                   <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f5] sm:aspect-[4/3] lg:aspect-square lg:min-h-[420px]">
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={`${product.name} – view ${activeImage + 1}`}
//                         className="h-full w-full object-contain"
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-slate-300" />
//                     )}

//                     {/* Back */}
//                     <Link
//                       href="/products"
//                       aria-label="Back to products"
//                       className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white"
//                     >
//                       <ArrowLeft size={17} />
//                     </Link>

//                     {/* Wishlist */}
//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={toggleWishlist}
//                       className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md disabled:opacity-50"
//                       aria-label={
//                         inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-current text-red-500"
//                             : "text-slate-600"
//                         }
//                       />
//                     </button>

//                     {product.hasDiscount && (
//                       <span className="absolute left-3 top-14 z-10 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
//                         {product.discountPercent}% OFF
//                       </span>
//                     )}

//                     {/* Prev / Next */}
//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md hover:bg-white sm:left-3"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md hover:bg-white sm:right-3"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {/* Counter */}
//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {/* Mobile: horizontal thumbs */}
//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`mob-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-50 transition sm:h-[72px] sm:w-[72px] ${
//                             i === activeImage
//                               ? "border-[#176b5b] ring-1 ring-[#176b5b]/30"
//                               : "border-slate-200 opacity-90"
//                           }`}
//                           aria-label={`View image ${i + 1}`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* ========== Product details ========== */}
//             <div className="flex flex-col p-4 sm:p-6 lg:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 text-xl font-bold leading-snug text-slate-900 sm:text-2xl lg:text-3xl">
//                 {product.name}
//               </h1>

//               {product.hasDiscount ? (
//                 <div className="mt-4">
//                   <p className="text-sm text-slate-400 line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                   <span className="mt-1.5 inline-flex rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
//                     {product.discountPercent}% off
//                   </span>
//                 </div>
//               ) : (
//                 <p className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//               )}

//               <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               {/* <p className="mt-4 text-[11px] text-slate-500 sm:text-xs">
//                 Change quantity on the cart page after adding.
//                 {product.hasDiscount
//                   ? ` Price includes ${product.discountPercent}% discount.`
//                   : ""}
//               </p> */}

//               <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={16} className="shrink-0" />
//                       Remove
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} className="shrink-0" />
//                       Add to cart
//                     </>
//                   )}
//                 </button>
//                 <Link
//                   href="/cart"
//                   className="flex min-h-[48px] items-center justify-center rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-6 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#176b5b]"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Estimated delivery
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       {expectedDelivery ? (
//                         <>
//                           By{" "}
//                           <span className="font-semibold text-slate-800">
//                             {formatDeliveryDate(expectedDelivery)}
//                           </span>
//                           {" · "}
//                           {product.leadTimeDays} day
//                           {product.leadTimeDays === 1 ? "" : "s"} lead time
//                           {product.leadTime ? ` (${product.leadTime})` : ""}
//                         </>
//                       ) : (
//                         "Delivery date confirmed at checkout."
//                       )}
//                     </p>
//                     <p className="mt-1 text-[11px] text-slate-400">
//                       Exact date may vary by location and order volume.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <ProductReviews productId={product.id} productName={product.name} />
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   // Flipkart-style zoom
//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data();
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);

//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//           });
//           setActiveImage(0);
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;

//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);

//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));

//     const pctX = ((x + lensW / 2) / rect.width) * 100;
//     const pctY = ((y + lensH / 2) / rect.height) * 100;

//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({ x: pctX, y: pctY });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.effectivePrice,
//             listPrice: product.listPrice,
//             discountPercent: product.hasDiscount
//               ? product.discountPercent
//               : undefined,
//             quantity: 1,
//             image: product.image || product.images[0] || "",
//             category: product.category,
//             leadTimeDays: product.leadTimeDays,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <section className="overflow-visible rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
//             {/* Gallery */}
//             <div className="relative border-b border-slate-100 bg-white p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-5">
//               <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
//                 {/* Desktop vertical thumbs */}
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[520px] w-[72px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`desk-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-md border-2 bg-slate-50 transition ${
//                           i === activeImage
//                             ? "border-[#176b5b] shadow-sm"
//                             : "border-slate-200 hover:border-slate-300"
//                         }`}
//                         aria-label={`View image ${i + 1}`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 {/* Main image + zoom */}
//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f5] sm:aspect-[4/3] lg:aspect-square lg:min-h-[420px]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={`${product.name} – view ${activeImage + 1}`}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-slate-300" />
//                     )}

//                     {/* Lens (desktop only) */}
//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#176b5b]/50 bg-[#176b5b]/15 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     <Link
//                       href="/products"
//                       aria-label="Back to products"
//                       onClick={(e) => e.stopPropagation()}
//                       className="absolute left-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white"
//                     >
//                       <ArrowLeft size={17} />
//                     </Link>

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         void toggleWishlist();
//                       }}
//                       className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md disabled:opacity-50"
//                       aria-label={
//                         inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-current text-red-500"
//                             : "text-slate-600"
//                         }
//                       />
//                     </button>

//                     {product.hasDiscount && (
//                       <span className="absolute left-3 top-14 z-30 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
//                         {product.discountPercent}% OFF
//                       </span>
//                     )}

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             goPrev();
//                           }}
//                           className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md hover:bg-white sm:left-3"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             goNext();
//                           }}
//                           className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md hover:bg-white sm:right-3"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {/* Zoom result panel — desktop, sits over detail column */}
//                   {/* {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(520px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )} */}

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(520px,70vh)] w-[min(460px,36vw)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {/* Mobile thumbs */}
//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`mob-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-50 transition sm:h-[72px] sm:w-[72px] ${
//                             i === activeImage
//                               ? "border-[#176b5b] ring-1 ring-[#176b5b]/30"
//                               : "border-slate-200 opacity-90"
//                           }`}
//                           aria-label={`View image ${i + 1}`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-slate-400 lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="relative z-0 flex flex-col p-4 sm:p-6 lg:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 text-xl font-bold leading-snug text-slate-900 sm:text-2xl lg:text-3xl">
//                 {product.name}
//               </h1>

//               {product.hasDiscount ? (
//                 <div className="mt-4">
//                   <p className="text-sm text-slate-400 line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
//                     {formatCurrency(product.effectivePrice)}
//                   </p>
//                   <span className="mt-1.5 inline-flex rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
//                     {product.discountPercent}% off
//                   </span>
//                 </div>
//               ) : (
//                 <p className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//               )}

//               <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:text-xs">
//                 Change quantity on the cart page after adding.
//                 {product.hasDiscount
//                   ? ` Price includes ${product.discountPercent}% discount.`
//                   : ""}
//               </p>

//               <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={16} className="shrink-0" />
//                       Remove
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} className="shrink-0" />
//                       Add to cart
//                     </>
//                   )}
//                 </button>
//                 <Link
//                   href="/cart"
//                   className="flex min-h-[48px] items-center justify-center rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-6 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#176b5b]"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Estimated delivery
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       {expectedDelivery ? (
//                         <>
//                           By{" "}
//                           <span className="font-semibold text-slate-800">
//                             {formatDeliveryDate(expectedDelivery)}
//                           </span>
//                           {" · "}
//                           {product.leadTimeDays} day
//                           {product.leadTimeDays === 1 ? "" : "s"} lead time
//                           {product.leadTime ? ` (${product.leadTime})` : ""}
//                         </>
//                       ) : (
//                         "Delivery date confirmed at checkout."
//                       )}
//                     </p>
//                     <p className="mt-1 text-[11px] text-slate-400">
//                       Exact date may vary by location and order volume.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <ProductReviews productId={product.id} productName={product.name} />
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ArrowLeft,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;
// const TABS = ["Description", "Dimensions", "Materials & care", "Shipping"] as const;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);
//   const [tab, setTab] = useState<(typeof TABS)[number]>("Description");

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);

//           // Related products same category
//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const addToCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: Math.max(1, qty),
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });
//       setInCart(true);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img src={src} alt="" className="h-full w-full object-cover" />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img src={src} alt="" className="h-full w-full object-cover" />
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Buy box */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               {/* Qty + Add */}
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <div className="inline-flex h-12 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[2rem] text-center text-sm font-semibold">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) => Math.min(product.stock || 99, q + 1))
//                     }
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || product.stock <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-60 sm:min-w-[12rem]"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {inCart ? "Add again" : "Add to cart"}
//                     </>
//                   )}
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={() => void toggleWishlist()}
//                 className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#6b6560] hover:text-[#1a1a1a]"
//               >
//                 <Heart
//                   size={15}
//                   className={
//                     inWishlist ? "fill-[#c45c4a] text-[#c45c4a]" : ""
//                   }
//                 />
//                 {inWishlist ? "Saved to wishlist" : "Add to wishlist"}
//               </button>

//               {!authUid && (
//                 <p className="mt-2 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to save cart & wishlist across devices.
//                 </p>
//               )}

//               {/* Highlights */}
//               <ul className="mt-6 space-y-2 border-t border-[#f0ebe3] pt-5">
//                 {[
//                   product.material !== "—"
//                     ? `${product.material}`
//                     : null,
//                   product.finish ? `Finish: ${product.finish}` : null,
//                   product.stock > 0
//                     ? `${product.stock} in stock`
//                     : "Out of stock",
//                   product.leadTimeDays
//                     ? `${product.leadTimeDays}-day lead time`
//                     : null,
//                 ]
//                   .filter(Boolean)
//                   .map((text) => (
//                     <li
//                       key={String(text)}
//                       className="flex items-start gap-2 text-sm text-[#5c564e]"
//                     >
//                       <Check
//                         size={15}
//                         className="mt-0.5 shrink-0 text-[#3d8b7a]"
//                       />
//                       {text}
//                     </li>
//                   ))}
//               </ul>

//               <div className="mt-5 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="border-t border-[#f0ebe3] px-4 sm:px-8">
//             <div className="flex gap-1 overflow-x-auto border-b border-[#f0ebe3] pt-2">
//               {TABS.map((t) => (
//                 <button
//                   key={t}
//                   type="button"
//                   onClick={() => setTab(t)}
//                   className={`shrink-0 border-b-2 px-3 py-3 text-sm font-semibold transition sm:px-4 ${
//                     tab === t
//                       ? "border-[#1a1a1a] text-[#1a1a1a]"
//                       : "border-transparent text-[#8a847c] hover:text-[#1a1a1a]"
//                   }`}
//                 >
//                   {t}
//                 </button>
//               ))}
//             </div>
//             <div className="py-6 text-sm leading-6 text-[#5c564e]">
//               {tab === "Description" && (
//                 <p>
//                   {product.description || "No description available."}
//                 </p>
//               )}
//               {tab === "Dimensions" && (
//                 <p>{product.dimensions || "Dimensions not specified."}</p>
//               )}
//               {tab === "Materials & care" && (
//                 <div className="space-y-2">
//                   <p>
//                     <span className="font-semibold text-[#1a1a1a]">
//                       Material:
//                     </span>{" "}
//                     {product.material}
//                   </p>
//                   {product.finish && (
//                     <p>
//                       <span className="font-semibold text-[#1a1a1a]">
//                         Finish:
//                       </span>{" "}
//                       {product.finish}
//                     </p>
//                   )}
//                   <p className="text-[#8a847c]">
//                     Wipe with a soft dry cloth. Avoid harsh chemicals and
//                     prolonged direct sunlight.
//                   </p>
//                 </div>
//               )}
//               {tab === "Shipping" && (
//                 <p>
//                   Standard lead time is about {product.leadTimeDays} day
//                   {product.leadTimeDays === 1 ? "" : "s"}
//                   {product.leadTime ? ` (${product.leadTime})` : ""}. Exact
//                   delivery depends on your location and is confirmed at
//                   checkout.
//                 </p>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* Reviews (existing component — Firebase-backed) */}
//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {/* You may also like */}
//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <p className="mt-1.5 text-sm font-semibold text-[#1a1a1a]">
//                       {formatCurrency(r.price)}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);

//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const addToCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: Math.max(1, qty),
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });
//       setInCart(true);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         {/* Main product card */}
//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                       aria-label={
//                         inWishlist
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-[#8a847c] lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Buy box */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     product.stock > 0 ? "bg-emerald-500" : "bg-red-400"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     product.stock > 0 ? "text-emerald-700" : "text-red-600"
//                   }`}
//                 >
//                   {product.stock > 0
//                     ? `${product.stock} in stock`
//                     : "Out of stock"}
//                 </span>
//               </div>

//               {/* Qty + Add to cart */}
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <div className="inline-flex h-12 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[2rem] text-center text-sm font-semibold">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) =>
//                         Math.min(Math.max(product.stock, 1) || 99, q + 1)
//                       )
//                     }
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || product.stock <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-60 sm:min-w-[12rem]"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {inCart ? "Add again" : "Add to cart"}
//                     </>
//                   )}
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={() => void toggleWishlist()}
//                 className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#6b6560] hover:text-[#1a1a1a]"
//               >
//                 <Heart
//                   size={15}
//                   className={
//                     inWishlist ? "fill-[#c45c4a] text-[#c45c4a]" : ""
//                   }
//                 />
//                 {inWishlist ? "Saved to wishlist" : "Add to wishlist"}
//               </button>

//               {!authUid && (
//                 <p className="mt-2 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to save cart & wishlist across devices.
//                 </p>
//               )}

//               {/* Highlights */}
//               <ul className="mt-6 space-y-2 border-t border-[#f0ebe3] pt-5">
//                 {[
//                   product.material !== "—" ? product.material : null,
//                   product.finish ? `Finish: ${product.finish}` : null,
//                   product.leadTimeDays
//                     ? `${product.leadTimeDays}-day lead time`
//                     : null,
//                 ]
//                   .filter(Boolean)
//                   .map((text) => (
//                     <li
//                       key={String(text)}
//                       className="flex items-start gap-2 text-sm text-[#5c564e]"
//                     >
//                       <Check
//                         size={15}
//                         className="mt-0.5 shrink-0 text-[#3d8b7a]"
//                       />
//                       {text}
//                     </li>
//                   ))}
//               </ul>

//               <div className="mt-5 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                     {product.leadTimeDays
//                       ? ` · ${product.leadTimeDays} day lead time`
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Description + right-side specs (no extra tabs) */}
//         <section className="mt-6 rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
//           <h2 className="font-display text-lg font-semibold text-[#1a1a1a] sm:text-xl">
//             Description
//           </h2>
//           <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//             <div className="space-y-4 text-sm leading-7 text-[#5c564e]">
//               {(product.description || "No description available.")
//                 .split(/\n+/)
//                 .filter(Boolean)
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>

//             <dl className="space-y-4 border-t border-[#f0ebe3] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
//               {[
//                 { label: "Material", value: product.material },
//                 { label: "Finish", value: product.finish || "—" },
//                 { label: "Dimensions", value: product.dimensions },
//                 {
//                   label: "Shipping",
//                   value: product.leadTimeDays
//                     ? `${product.leadTimeDays} day lead time${
//                         product.leadTime ? ` · ${product.leadTime}` : ""
//                       }`
//                     : product.leadTime || "Confirmed at checkout",
//                 },
//                 {
//                   label: "Stock",
//                   value:
//                     product.stock > 0
//                       ? `${product.stock} available`
//                       : "Out of stock",
//                 },
//               ].map((row) => (
//                 <div key={row.label}>
//                   <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                     {row.label}
//                   </dt>
//                   <dd className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {row.value && row.value !== "—" ? row.value : "—"}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </section>

//         {/* Customer reviews */}
//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {/* You may also like */}
//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             stock: Number(data.stock ?? 0),
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);

//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const addToCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setBusy(true);
//     try {
//       await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: Math.max(1, qty),
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });
//       setInCart(true);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         {/* Main product card */}
//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     {/* Wishlist — only on image */}
//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                       aria-label={
//                         inWishlist
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-[#8a847c] lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Buy box — purchase only (no repeated specs / wishlist text) */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     product.stock > 0 ? "bg-emerald-500" : "bg-red-400"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     product.stock > 0 ? "text-emerald-700" : "text-red-600"
//                   }`}
//                 >
//                   {product.stock > 0
//                     ? `${product.stock} in stock`
//                     : "Out of stock"}
//                 </span>
//               </div>

//               {/* Qty + Add to cart */}
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <div className="inline-flex h-12 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[2rem] text-center text-sm font-semibold">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) =>
//                         Math.min(Math.max(product.stock, 1) || 99, q + 1)
//                       )
//                     }
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a]"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || product.stock <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-60 sm:min-w-[12rem]"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {inCart ? "Add again" : "Add to cart"}
//                     </>
//                   )}
//                 </button>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add to cart or wishlist.
//                 </p>
//               )}

//               {/* Delivery only — material/finish live under Description */}
//               <div className="mt-8 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                     {product.leadTimeDays
//                       ? ` · ${product.leadTimeDays} day lead time`
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Description + specs (single place for material / finish / etc.) */}
//         <section className="mt-6 rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
//           <h2 className="font-display text-lg font-semibold text-[#1a1a1a] sm:text-xl">
//             Description
//           </h2>
//           <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//             <div className="space-y-4 text-sm leading-7 text-[#5c564e]">
//               {(product.description || "No description available.")
//                 .split(/\n+/)
//                 .filter(Boolean)
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>

//             <dl className="space-y-4 border-t border-[#f0ebe3] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
//               {[
//                 { label: "Material", value: product.material },
//                 { label: "Finish", value: product.finish || "—" },
//                 { label: "Dimensions", value: product.dimensions },
//                 {
//                   label: "Shipping",
//                   value: product.leadTimeDays
//                     ? `${product.leadTimeDays} day lead time${
//                         product.leadTime ? ` · ${product.leadTime}` : ""
//                       }`
//                     : product.leadTime || "Confirmed at checkout",
//                 },
//                 {
//                   label: "Stock",
//                   value:
//                     product.stock > 0
//                       ? `${product.stock} available`
//                       : "Out of stock",
//                 },
//               ].map((row) => (
//                 <div key={row.label}>
//                   <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                     {row.label}
//                   </dt>
//                   <dd className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {row.value && row.value !== "—" ? row.value : "—"}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </section>

//         {/* Customer reviews */}
//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {/* You may also like */}
//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);
//   const [cartError, setCartError] = useState("");

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");
//           const stock = Math.max(0, Math.floor(Number(data.stock ?? 0)));

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             stock,
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);
//           setCartError("");

//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const stock = product?.stock ?? 0;
//   const remaining = Math.max(0, stock - cartQty);
//   const atMax = stock > 0 ? cartQty >= stock : true;
//   const outOfStock = stock <= 0;
//   const maxSelectable = Math.max(1, remaining);

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   // useEffect(() => {
//   //   if (!productId) return;
//   //   let cancelled = false;

//   //   async function sync() {
//   //     if (!authUid) {
//   //       if (!cancelled) {
//   //         setCartQty(0);
//   //         setInWishlist(false);
//   //       }
//   //       return;
//   //     }
//   //     try {
//   //       const [cart, wish] = await Promise.all([
//   //         getCart(authUid),
//   //         getWishlist(authUid),
//   //       ]);
//   //       if (cancelled) return;

//   //       const line = cart?.items?.find(
//   //         (i) => String(i.productId || i.id) === String(productId)
//   //       );
//   //       setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);

//   //       setInWishlist(
//   //         Boolean(
//   //           wish?.items?.some(
//   //             (i) => String(i.productId || i.id) === String(productId)
//   //           )
//   //         )
//   //       );
//   //     } catch {
//   //       if (!cancelled) {
//   //         setCartQty(0);
//   //         setInWishlist(false);
//   //       }
//   //     }
//   //   }

//   //   void sync();
//   //   window.addEventListener("cartUpdated", sync);
//   //   window.addEventListener("wishlistUpdated", sync);
//   //   return () => {
//   //     cancelled = true;
//   //     window.removeEventListener("cartUpdated", sync);
//   //     window.removeEventListener("wishlistUpdated", sync);
//   //   };
//   // }, [productId, authUid]);

//     useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;

//         const line = cart?.items?.find(
//           (i) => String(i.productId || "") === String(productId)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);

//         setInWishlist(
//           Boolean(
//             wish?.items?.some(
//               (i) => String(i.productId || "") === String(productId)
//             )
//           )
//         );
//       } catch {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//       }
//     }

//     void sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   useEffect(() => {
//     if (!product) return;
//     const maxAdd = Math.max(0, product.stock - cartQty);
//     setQty((q) => {
//       if (maxAdd <= 0) return 1;
//       return Math.min(Math.max(1, q), maxAdd);
//     });
//   }, [product, cartQty]);

//   const addToCart = async () => {
//     if (!product) return;
//     setCartError("");

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     if (product.stock <= 0 || cartQty >= product.stock || remaining <= 0) {
//       setCartError(
//         product.stock <= 0
//           ? "This product is out of stock."
//           : `Only ${product.stock} available. You already have ${cartQty} in cart.`
//       );
//       return;
//     }

//     const toAdd = Math.min(Math.max(1, qty), remaining);
//     setBusy(true);
//     try {
//       await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//       setCartError(
//         err instanceof Error
//           ? err.message
//           : "Could not add to cart. Please try again."
//       );
//       try {
//         const cart = await getCart(authUid);
//         const line = cart?.items?.find(
//           (i) => String(i.productId || i.id) === String(product.id)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                       aria-label={
//                         inWishlist
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-[#8a847c] lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Buy box */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     outOfStock ? "bg-red-400" : "bg-emerald-500"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     outOfStock ? "text-red-600" : "text-emerald-700"
//                   }`}
//                 >
//                   {outOfStock ? "Out of stock" : `${stock} in stock`}
//                 </span>
//                 {cartQty > 0 && !outOfStock && (
//                   <span className="text-[#8a847c]">
//                     · {cartQty} in cart
//                     {atMax ? " (max reached)" : ` · ${remaining} left`}
//                   </span>
//                 )}
//               </div>

//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <div className="inline-flex h-12 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     disabled={qty <= 1 || atMax}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a] disabled:opacity-40"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[2rem] text-center text-sm font-semibold">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) => Math.min(maxSelectable, q + 1))
//                     }
//                     disabled={atMax || remaining <= 0 || qty >= maxSelectable}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-40"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || outOfStock || atMax || remaining <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[12rem]"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : outOfStock ? (
//                     "Out of stock"
//                   ) : atMax ? (
//                     "Max in cart"
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {cartQty > 0 ? "Add more" : "Add to cart"}
//                     </>
//                   )}
//                 </button>
//               </div>

//               {cartError && (
//                 <p className="mt-3 text-xs font-medium text-red-600">
//                   {cartError}
//                 </p>
//               )}

//               {!authUid && (
//                 <p className="mt-3 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add to cart or wishlist.
//                 </p>
//               )}

//               <div className="mt-8 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                     {product.leadTimeDays
//                       ? ` · ${product.leadTimeDays} day lead time`
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mt-6 rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
//           <h2 className="font-display text-lg font-semibold text-[#1a1a1a] sm:text-xl">
//             Description
//           </h2>
//           <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//             <div className="space-y-4 text-sm leading-7 text-[#5c564e]">
//               {(product.description || "No description available.")
//                 .split(/\n+/)
//                 .filter(Boolean)
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>

//             <dl className="space-y-4 border-t border-[#f0ebe3] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
//               {[
//                 { label: "Material", value: product.material },
//                 { label: "Finish", value: product.finish || "—" },
//                 { label: "Dimensions", value: product.dimensions },
//                 {
//                   label: "Shipping",
//                   value: product.leadTimeDays
//                     ? `${product.leadTimeDays} day lead time${
//                         product.leadTime ? ` · ${product.leadTime}` : ""
//                       }`
//                     : product.leadTime || "Confirmed at checkout",
//                 },
//                 {
//                   label: "Stock",
//                   value:
//                     product.stock > 0
//                       ? `${product.stock} available`
//                       : "Out of stock",
//                 },
//               ].map((row) => (
//                 <div key={row.label}>
//                   <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                     {row.label}
//                   </dt>
//                   <dd className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {row.value && row.value !== "—" ? row.value : "—"}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </section>

//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   GitCompare,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   color?: string;
//   warranty?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [compareMsg, setCompareMsg] = useState("");
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);
//   const [cartError, setCartError] = useState("");

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       if (!productId) {
//         setInCompare(false);
//         return;
//       }
//       setInCompare(isInCompare(productId));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");
//           const subcategory = String(
//             data.subcategory || data.subCategory || category
//           );
//           const stock = Math.max(0, Math.floor(Number(data.stock ?? 0)));

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             subcategory,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             color: data.color ? String(data.color) : undefined,
//             warranty: data.warranty ? String(data.warranty) : undefined,
//             stock,
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);
//           setCartError("");
//           setCompareMsg("");

//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const stock = product?.stock ?? 0;
//   const remaining = Math.max(0, stock - cartQty);
//   const atMax = stock > 0 ? cartQty >= stock : true;
//   const outOfStock = stock <= 0;
//   const maxSelectable = Math.max(1, remaining);

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;

//         const line = cart?.items?.find(
//           (i) => String(i.productId || "") === String(productId)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);

//         setInWishlist(
//           Boolean(
//             wish?.items?.some(
//               (i) => String(i.productId || "") === String(productId)
//             )
//           )
//         );
//       } catch {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//       }
//     }

//     void sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   useEffect(() => {
//     if (!product) return;
//     const maxAdd = Math.max(0, product.stock - cartQty);
//     setQty((q) => {
//       if (maxAdd <= 0) return 1;
//       return Math.min(Math.max(1, q), maxAdd);
//     });
//   }, [product, cartQty]);

//   const addToCart = async () => {
//     if (!product) return;
//     setCartError("");

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     if (product.stock <= 0 || cartQty >= product.stock || remaining <= 0) {
//       setCartError(
//         product.stock <= 0
//           ? "This product is out of stock."
//           : `Only ${product.stock} available. You already have ${cartQty} in cart.`
//       );
//       return;
//     }

//     const toAdd = Math.min(Math.max(1, qty), remaining);
//     setBusy(true);
//     try {
//       await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//       setCartError(
//         err instanceof Error
//           ? err.message
//           : "Could not add to cart. Please try again."
//       );
//       try {
//         const cart = await getCart(authUid);
//         const line = cart?.items?.find(
//           (i) => String(i.productId || i.id) === String(product.id)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   const toggleCompare = () => {
//     if (!product) return;
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       setInCompare(false);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.effectivePrice,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.images[0] || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTime: product.leadTime,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) {
//       setCompareMsg(err);
//       return;
//     }
//     setInCompare(true);
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;
//   const compareCount = getCompareItems().length;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                       aria-label={
//                         inWishlist
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-[#8a847c] lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Buy box */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//                 {product.subcategory && product.subcategory !== product.category
//                   ? ` · ${product.subcategory}`
//                   : ""}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     outOfStock ? "bg-red-400" : "bg-emerald-500"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     outOfStock ? "text-red-600" : "text-emerald-700"
//                   }`}
//                 >
//                   {outOfStock ? "Out of stock" : `${stock} in stock`}
//                 </span>
//                 {cartQty > 0 && !outOfStock && (
//                   <span className="text-[#8a847c]">
//                     · {cartQty} in cart
//                     {atMax ? " (max reached)" : ` · ${remaining} left`}
//                   </span>
//                 )}
//               </div>

//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <div className="inline-flex h-12 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     disabled={qty <= 1 || atMax}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a] disabled:opacity-40"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[2rem] text-center text-sm font-semibold">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) => Math.min(maxSelectable, q + 1))
//                     }
//                     disabled={atMax || remaining <= 0 || qty >= maxSelectable}
//                     className="flex h-12 w-11 items-center justify-center text-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-40"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || outOfStock || atMax || remaining <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[12rem]"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : outOfStock ? (
//                     "Out of stock"
//                   ) : atMax ? (
//                     "Max in cart"
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {cartQty > 0 ? "Add more" : "Add to cart"}
//                     </>
//                   )}
//                 </button>
//               </div>

//               <div className="mt-3 flex flex-wrap gap-2">
//                 <button
//                   type="button"
//                   onClick={toggleCompare}
//                   className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${
//                     inCompare
//                       ? "border-[#b8956c] bg-[#f3ebe0] text-[#1a1a1a]"
//                       : "border-[#e8e2d8] bg-white text-[#6b6560] hover:border-[#c4b8a8] hover:text-[#1a1a1a]"
//                   }`}
//                 >
//                   <GitCompare size={16} />
//                   {inCompare ? "In compare" : "Compare"}
//                 </button>

//                 {compareCount > 0 && (
//                   <Link
//                     href="/compare"
//                     className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-[#e8e2d8] bg-white px-4 text-sm font-semibold text-[#1a1a1a] hover:border-[#b8956c]"
//                   >
//                     View compare ({compareCount})
//                   </Link>
//                 )}
//               </div>

//               {compareMsg && (
//                 <p className="mt-2 text-xs font-medium text-[#c45c4a]">
//                   {compareMsg}
//                 </p>
//               )}

//               {cartError && (
//                 <p className="mt-3 text-xs font-medium text-red-600">
//                   {cartError}
//                 </p>
//               )}

//               {!authUid && (
//                 <p className="mt-3 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add to cart or wishlist.
//                 </p>
//               )}

//               <div className="mt-8 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                     {product.leadTimeDays
//                       ? ` · ${product.leadTimeDays} day lead time`
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mt-6 rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
//           <h2 className="font-display text-lg font-semibold text-[#1a1a1a] sm:text-xl">
//             Description
//           </h2>
//           <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//             <div className="space-y-4 text-sm leading-7 text-[#5c564e]">
//               {(product.description || "No description available.")
//                 .split(/\n+/)
//                 .filter(Boolean)
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>

//             <dl className="space-y-4 border-t border-[#f0ebe3] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
//               {[
//                 { label: "Material", value: product.material },
//                 { label: "Finish", value: product.finish || "—" },
//                 { label: "Color", value: product.color || "—" },
//                 { label: "Dimensions", value: product.dimensions },
//                 { label: "Warranty", value: product.warranty || "—" },
//                 {
//                   label: "Shipping",
//                   value: product.leadTimeDays
//                     ? `${product.leadTimeDays} day lead time${
//                         product.leadTime ? ` · ${product.leadTime}` : ""
//                       }`
//                     : product.leadTime || "Confirmed at checkout",
//                 },
//                 {
//                   label: "Stock",
//                   value:
//                     product.stock > 0
//                       ? `${product.stock} available`
//                       : "Out of stock",
//                 },
//               ].map((row) => (
//                 <div key={row.label}>
//                   <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                     {row.label}
//                   </dt>
//                   <dd className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {row.value && row.value !== "—" ? row.value : "—"}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </section>

//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   GitCompare,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";
// import ProductReviews from "@/components/product/ProductReviews";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   color?: string;
//   warranty?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   discountPercent: number;
//   image?: string;
//   rating?: number;
//   reviewCount?: number;
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

// function addDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(0, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// function formatDeliveryDate(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function normalizeGallery(data: {
//   images?: unknown;
//   imageUrl?: string;
//   image?: string;
// }): string[] {
//   const fromArr = Array.isArray(data.images)
//     ? data.images.map((u) => String(u || "").trim()).filter(Boolean)
//     : [];
//   const primary = String(data.imageUrl || data.image || "").trim();
//   const list = fromArr.length > 0 ? fromArr : primary ? [primary] : [];
//   return Array.from(new Set(list));
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

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// const ZOOM = 2.4;

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [compareMsg, setCompareMsg] = useState("");
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);
//   const [cartError, setCartError] = useState("");

//   const imgBoxRef = useRef<HTMLDivElement>(null);
//   const [zooming, setZooming] = useState(false);
//   const [lens, setLens] = useState({ x: 0, y: 0, w: 120, h: 120 });
//   const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const syncCompare = () => {
//       if (!productId) {
//         setInCompare(false);
//         return;
//       }
//       setInCompare(isInCompare(productId));
//     };
//     syncCompare();
//     window.addEventListener("compareUpdated", syncCompare);
//     return () => window.removeEventListener("compareUpdated", syncCompare);
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));

//         if (snap.exists()) {
//           const data = snap.data() as Record<string, unknown>;
//           const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
//           const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

//           const listPrice = Number(data.sellingPrice ?? data.price ?? 0);
//           const discountPercent = Math.min(
//             100,
//             Math.max(0, Number(data.discountPercent) || 0)
//           );

//           const ageDays = getProductAgeDays({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//           });

//           const hasDiscount = canApplyAgeingDiscount({
//             createdAt: data.createdAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             publishedAt: data.publishedAt as
//               | { toMillis?: () => number }
//               | null
//               | undefined,
//             discountPercent,
//           });

//           const effectivePrice = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             hasDiscount
//           );

//           const images = normalizeGallery(data);
//           const category = String(data.category || "Other");
//           const subcategory = String(
//             data.subcategory || data.subCategory || category
//           );
//           const stock = Math.max(0, Math.floor(Number(data.stock ?? 0)));

//           setProduct({
//             id: snap.id,
//             name: String(data.name || "Product"),
//             category,
//             subcategory,
//             description: String(data.description || ""),
//             listPrice,
//             discountPercent: hasDiscount ? discountPercent : 0,
//             effectivePrice,
//             hasDiscount,
//             ageDays,
//             material: String(data.material || "—"),
//             dimensions: String(data.dimensions || "—"),
//             finish: data.finish ? String(data.finish) : undefined,
//             color: data.color ? String(data.color) : undefined,
//             warranty: data.warranty ? String(data.warranty) : undefined,
//             stock,
//             image: images[0] || "",
//             images,
//             leadTime: String(leadRaw || "").trim() || undefined,
//             leadTimeDays,
//             rating: parseRating(data),
//             reviewCount: parseReviewCount(data),
//             featured: Boolean(data.featured),
//           });
//           setActiveImage(0);
//           setQty(1);
//           setCartError("");
//           setCompareMsg("");

//           try {
//             const relSnap = await getDocs(
//               query(
//                 collection(db, "furniture_products"),
//                 where("category", "==", category),
//                 limit(8)
//               )
//             );
//             const rel: RelatedProduct[] = relSnap.docs
//               .filter((d) => d.id !== snap.id)
//               .slice(0, 4)
//               .map((d) => {
//                 const rd = d.data() as Record<string, unknown>;
//                 const lp = Number(rd.sellingPrice ?? rd.price ?? 0);
//                 const dp = Math.min(
//                   100,
//                   Math.max(0, Number(rd.discountPercent) || 0)
//                 );
//                 const hd = canApplyAgeingDiscount({
//                   createdAt: rd.createdAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   publishedAt: rd.publishedAt as
//                     | { toMillis?: () => number }
//                     | null
//                     | undefined,
//                   discountPercent: dp,
//                 });
//                 return {
//                   id: d.id,
//                   name: String(rd.name || "Product"),
//                   category: String(rd.category || ""),
//                   price: getEffectiveSellingPrice(lp, dp, hd),
//                   listPrice: lp,
//                   hasDiscount: hd,
//                   discountPercent: hd ? dp : 0,
//                   image: String(rd.imageUrl || rd.image || ""),
//                   rating: parseRating(rd),
//                   reviewCount: parseReviewCount(rd),
//                 };
//               });
//             setRelated(rel);
//           } catch {
//             setRelated([]);
//           }
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   const expectedDelivery = useMemo(() => {
//     if (!product) return null;
//     return addDays(new Date(), product.leadTimeDays);
//   }, [product]);

//   const gallery = product?.images?.length
//     ? product.images
//     : product?.image
//       ? [product.image]
//       : [];
//   const currentSrc = gallery[activeImage] || gallery[0] || "";

//   const stock = product?.stock ?? 0;
//   const remaining = Math.max(0, stock - cartQty);
//   const atMax = stock > 0 ? cartQty >= stock : true;
//   const outOfStock = stock <= 0;
//   const maxSelectable = Math.max(1, remaining > 0 ? remaining : 1);

//   const goPrev = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i <= 0 ? gallery.length - 1 : i - 1));
//   };

//   const goNext = () => {
//     if (gallery.length < 2) return;
//     setZooming(false);
//     setActiveImage((i) => (i >= gallery.length - 1 ? 0 : i + 1));
//   };

//   const onZoomMove = (e: MouseEvent<HTMLDivElement>) => {
//     const box = imgBoxRef.current;
//     if (!box || !currentSrc) return;
//     const rect = box.getBoundingClientRect();
//     const lensW = Math.min(140, rect.width / ZOOM);
//     const lensH = Math.min(140, rect.height / ZOOM);
//     let x = e.clientX - rect.left - lensW / 2;
//     let y = e.clientY - rect.top - lensH / 2;
//     x = Math.max(0, Math.min(x, rect.width - lensW));
//     y = Math.max(0, Math.min(y, rect.height - lensH));
//     setLens({ x, y, w: lensW, h: lensH });
//     setBgPos({
//       x: ((x + lensW / 2) / rect.width) * 100,
//       y: ((y + lensH / 2) / rect.height) * 100,
//     });
//   };

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;

//         const line = cart?.items?.find(
//           (i) => String(i.productId || "") === String(productId)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);

//         setInWishlist(
//           Boolean(
//             wish?.items?.some(
//               (i) => String(i.productId || "") === String(productId)
//             )
//           )
//         );
//       } catch {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//       }
//     }

//     void sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   // Keep qty within what can still be added
//   useEffect(() => {
//     if (!product) return;
//     const maxAdd = Math.max(0, product.stock - cartQty);
//     setQty((q) => {
//       if (maxAdd <= 0) return 1;
//       return Math.min(Math.max(1, q), maxAdd);
//     });
//   }, [product, cartQty]);

//   // const addToCart = async () => {
//   //   if (!product) return;
//   //   setCartError("");

//   //   if (!authUid) {
//   //     router.push("/sign-in");
//   //     return;
//   //   }

//   //   if (product.stock <= 0 || cartQty >= product.stock || remaining <= 0) {
//   //     setCartError(
//   //       product.stock <= 0
//   //         ? "This product is out of stock."
//   //         : `Only ${product.stock} available. You already have ${cartQty} in cart.`
//   //     );
//   //     return;
//   //   }

//   //   const toAdd = Math.min(Math.max(1, qty), remaining);
//   //   setBusy(true);
//   //   try {
//   //     const updated = await addToFirebaseCart(authUid, {
//   //       productId: product.id,
//   //       name: product.name,
//   //       price: product.effectivePrice,
//   //       listPrice: product.listPrice,
//   //       discountPercent: product.hasDiscount
//   //         ? product.discountPercent
//   //         : undefined,
//   //       quantity: toAdd,
//   //       image: product.image || product.images[0] || "",
//   //       category: product.category,
//   //       leadTimeDays: product.leadTimeDays,
//   //     });

//   //     // Immediate UI update from returned cart
//   //     const line = updated?.items?.find(
//   //       (i) => String(i.productId || "") === String(product.id)
//   //     );
//   //     const newQty = line ? Math.max(0, Number(line.quantity) || 0) : cartQty + toAdd;
//   //     setCartQty(newQty);

//   //     // Reset picker to 1 (or remaining room)
//   //     const stillLeft = Math.max(0, product.stock - newQty);
//   //     setQty(stillLeft > 0 ? 1 : 1);

//   //     window.dispatchEvent(new Event("cartUpdated"));
//   //   } catch (err) {
//   //     console.error("Cart add failed", err);
//   //     setCartError(
//   //       err instanceof Error
//   //         ? err.message
//   //         : "Could not add to cart. Please try again."
//   //     );
//   //     try {
//   //       const cart = await getCart(authUid);
//   //       const line = cart?.items?.find(
//   //         (i) => String(i.productId || i.id) === String(product.id)
//   //       );
//   //       setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);
//   //     } catch {
//   //       /* ignore */
//   //     }
//   //   } finally {
//   //     setBusy(false);
//   //   }
//   // };

//     const addToCart = async () => {
//     if (!product) return;
//     setCartError("");

//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     if (product.stock <= 0 || cartQty >= product.stock || remaining <= 0) {
//       setCartError(
//         product.stock <= 0
//           ? "This product is out of stock."
//           : `Only ${product.stock} available. You already have ${cartQty} in cart.`
//       );
//       return;
//     }

//     const toAdd = Math.min(Math.max(1, qty), remaining);
//     setBusy(true);
//     try {
//       const updated = await addToFirebaseCart(authUid, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//       });

//       // Update from returned cart so "X in cart" changes immediately
//       const line = updated?.items?.find(
//         (i) => String(i.productId || "") === String(product.id)
//       );
//       const newQty = line
//         ? Math.max(0, Number(line.quantity) || 0)
//         : cartQty + toAdd;

//       setCartQty(newQty);

//       const stillLeft = Math.max(0, product.stock - newQty);
//       setQty(stillLeft > 0 ? Math.min(1, stillLeft) : 1);

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart add failed", err);
//       setCartError(
//         err instanceof Error
//           ? err.message
//           : "Could not add to cart. Please try again."
//       );
//       try {
//         const cart = await getCart(authUid);
//         const line = cart?.items?.find(
//           (i) => String(i.productId || i.id) === String(product.id)
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity) || 0) : 0);
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }
//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   const toggleCompare = () => {
//     if (!product) return;
//     setCompareMsg("");

//     if (isInCompare(product.id)) {
//       removeFromCompare(product.id);
//       setInCompare(false);
//       return;
//     }

//     const err = addToCompare({
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       subcategory: product.subcategory || product.category,
//       price: product.effectivePrice,
//       listPrice: product.listPrice,
//       hasDiscount: product.hasDiscount,
//       discountPercent: product.discountPercent,
//       image: product.image || product.images[0] || "",
//       material: product.material,
//       finish: product.finish,
//       color: product.color,
//       dimensions: product.dimensions,
//       stock: product.stock,
//       warranty: product.warranty,
//       leadTime: product.leadTime,
//       leadTimeDays: product.leadTimeDays,
//       rating: product.rating,
//       reviewCount: product.reviewCount,
//     });

//     if (err) {
//       setCompareMsg(err);
//       return;
//     }
//     setInCompare(true);
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2] px-4 py-16 text-center">
//         <p className="text-[#6b6560]">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#b8956c]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   const hasRating =
//     typeof product.rating === "number" && product.rating > 0;
//   const savePct = product.hasDiscount ? product.discountPercent : 0;
//   const compareCount = getCompareItems().length;

//   return (
//     <main className="min-h-screen bg-[#faf7f2]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <nav className="mb-5 text-xs text-[#8a847c]">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Shop
//           </Link>
//           <span className="mx-1.5">/</span>
//           <Link
//             href={`/products?category=${encodeURIComponent(product.category)}`}
//             className="hover:text-[#1a1a1a]"
//           >
//             {product.category}
//           </Link>
//           <span className="mx-1.5">/</span>
//           <span className="text-[#1a1a1a]">{product.name}</span>
//         </nav>

//         <section className="overflow-visible rounded-2xl border border-[#e8e2d8] bg-white">
//           <div className="grid gap-0 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="relative border-b border-[#f0ebe3] p-4 sm:p-5 lg:border-b-0 lg:border-r">
//               <div className="flex flex-col gap-3 lg:flex-row">
//                 {gallery.length > 1 && (
//                   <div className="hidden max-h-[480px] w-[68px] shrink-0 flex-col gap-2 overflow-y-auto lg:flex">
//                     {gallery.map((src, i) => (
//                       <button
//                         key={`t-${src}-${i}`}
//                         type="button"
//                         onMouseEnter={() => {
//                           setActiveImage(i);
//                           setZooming(false);
//                         }}
//                         onClick={() => setActiveImage(i)}
//                         className={`h-[68px] w-[68px] overflow-hidden rounded-lg border-2 ${
//                           i === activeImage
//                             ? "border-[#1a1a1a]"
//                             : "border-[#e8e2d8]"
//                         }`}
//                       >
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img
//                           src={src}
//                           alt=""
//                           className="h-full w-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div className="relative min-w-0 flex-1">
//                   <div
//                     ref={imgBoxRef}
//                     className="relative flex aspect-square cursor-crosshair items-center justify-center overflow-hidden rounded-xl bg-[#f5f1ea]"
//                     onMouseEnter={() => currentSrc && setZooming(true)}
//                     onMouseLeave={() => setZooming(false)}
//                     onMouseMove={onZoomMove}
//                   >
//                     {currentSrc ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={currentSrc}
//                         alt={product.name}
//                         className="pointer-events-none h-full w-full select-none object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <ShoppingBag size={48} className="text-[#d4cdc2]" />
//                     )}

//                     {zooming && currentSrc && (
//                       <div
//                         className="pointer-events-none absolute z-20 hidden border border-[#1a1a1a]/30 bg-[#1a1a1a]/10 lg:block"
//                         style={{
//                           width: lens.w,
//                           height: lens.h,
//                           left: lens.x,
//                           top: lens.y,
//                         }}
//                       />
//                     )}

//                     {product.hasDiscount ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#c45c4a] px-2.5 py-1 text-[10px] font-bold text-white">
//                         −{product.discountPercent}%
//                       </span>
//                     ) : product.featured ? (
//                       <span className="absolute left-3 top-3 z-20 rounded-full bg-[#e8a54b] px-2.5 py-1 text-[10px] font-bold text-white">
//                         New
//                       </span>
//                     ) : null}

//                     <button
//                       type="button"
//                       disabled={wishBusy}
//                       onClick={() => void toggleWishlist()}
//                       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-sm disabled:opacity-50"
//                       aria-label={
//                         inWishlist
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           inWishlist
//                             ? "fill-[#c45c4a] text-[#c45c4a]"
//                             : "text-[#6b6560]"
//                         }
//                       />
//                     </button>

//                     {gallery.length > 1 && (
//                       <>
//                         <button
//                           type="button"
//                           onClick={goPrev}
//                           className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Previous image"
//                         >
//                           <ChevronLeft size={18} />
//                         </button>
//                         <button
//                           type="button"
//                           onClick={goNext}
//                           className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md"
//                           aria-label="Next image"
//                         >
//                           <ChevronRight size={18} />
//                         </button>
//                       </>
//                     )}

//                     {gallery.length > 1 && (
//                       <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
//                         {activeImage + 1} / {gallery.length}
//                       </span>
//                     )}
//                   </div>

//                   {zooming && currentSrc && (
//                     <div
//                       className="pointer-events-none absolute left-[calc(100%+12px)] top-0 z-40 hidden h-[min(480px,70vh)] w-[min(420px,36vw)] overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-2xl lg:block"
//                       style={{
//                         backgroundImage: `url(${currentSrc})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${ZOOM * 100}%`,
//                         backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
//                       }}
//                       aria-hidden
//                     />
//                   )}

//                   {gallery.length > 1 && (
//                     <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
//                       {gallery.map((src, i) => (
//                         <button
//                           key={`m-${src}-${i}`}
//                           type="button"
//                           onClick={() => setActiveImage(i)}
//                           className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
//                             i === activeImage
//                               ? "border-[#1a1a1a]"
//                               : "border-[#e8e2d8]"
//                           }`}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={src}
//                             alt=""
//                             className="h-full w-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   <p className="mt-2 hidden text-center text-[11px] text-[#8a847c] lg:block">
//                     Hover image to zoom
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Buy box */}
//             <div className="flex flex-col p-5 sm:p-8">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8956c]">
//                 {product.category}
//                 {product.subcategory && product.subcategory !== product.category
//                   ? ` · ${product.subcategory}`
//                   : ""}
//               </p>
//               <h1 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#1a1a1a] sm:text-3xl">
//                 {product.name}
//               </h1>

//               {hasRating && (
//                 <div className="mt-2 flex items-center gap-2">
//                   <StarRow rating={product.rating as number} />
//                   <span className="text-sm text-[#6b6560]">
//                     {(product.rating as number).toFixed(1)}
//                     {product.reviewCount
//                       ? ` (${product.reviewCount})`
//                       : ""}
//                   </span>
//                 </div>
//               )}

//               <div className="mt-4 flex flex-wrap items-baseline gap-2">
//                 <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                   {formatCurrency(product.effectivePrice)}
//                 </p>
//                 {product.hasDiscount && (
//                   <>
//                     <p className="text-base text-[#8a847c] line-through">
//                       {formatCurrency(product.listPrice)}
//                     </p>
//                     <span className="rounded-full bg-[#f3ebe0] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                       Save {savePct}%
//                     </span>
//                   </>
//                 )}
//               </div>

//               <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     outOfStock ? "bg-red-400" : "bg-emerald-500"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     outOfStock ? "text-red-600" : "text-emerald-700"
//                   }`}
//                 >
//                   {outOfStock ? "Out of stock" : `${stock} in stock`}
//                 </span>
//                 {cartQty > 0 && !outOfStock && (
//                   <span className="text-[#8a847c]">
//                     · {cartQty} in cart
//                     {atMax ? " (max reached)" : ` · ${remaining} left`}
//                   </span>
//                 )}
//               </div>

//               {/* ONE LINE: qty · Add to cart / Add more · Compare */}
//               <div className="mt-6 flex flex-wrap items-center gap-2.5">
//                 <div className="inline-flex h-11 shrink-0 items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2] sm:h-12">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     disabled={qty <= 1 || atMax}
//                     className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-40 sm:h-12 sm:w-11"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums">
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQty((q) => Math.min(maxSelectable, q + 1))
//                     }
//                     disabled={atMax || remaining <= 0 || qty >= maxSelectable}
//                     className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-11"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={busy || outOfStock || atMax || remaining <= 0}
//                   onClick={() => void addToCart()}
//                   className="inline-flex h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-4 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:min-w-[9rem] sm:flex-none sm:px-6"
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : outOfStock ? (
//                     "Out of stock"
//                   ) : atMax ? (
//                     "Max in cart"
//                   ) : (
//                     <>
//                       <ShoppingBag size={16} />
//                       {cartQty > 0 ? "Add more" : "Add to cart"}
//                     </>
//                   )}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={toggleCompare}
//                   className={`inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3.5 text-sm font-semibold transition sm:h-12 sm:px-4 ${
//                     inCompare
//                       ? "border-[#b8956c] bg-[#f3ebe0] text-[#1a1a1a]"
//                       : "border-[#e8e2d8] bg-white text-[#6b6560] hover:border-[#c4b8a8] hover:text-[#1a1a1a]"
//                   }`}
//                 >
//                   <GitCompare size={16} />
//                   <span className="hidden xs:inline sm:inline">
//                     {inCompare ? "In compare" : "Compare"}
//                   </span>
//                 </button>
//               </div>

//               {compareCount > 0 && (
//                 <Link
//                   href="/compare"
//                   className="mt-2.5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[#b8956c] hover:underline"
//                 >
//                   View compare ({compareCount}) →
//                 </Link>
//               )}

//               {compareMsg && (
//                 <p className="mt-2 text-xs font-medium text-[#c45c4a]">
//                   {compareMsg}
//                 </p>
//               )}

//               {cartError && (
//                 <p className="mt-3 text-xs font-medium text-red-600">
//                   {cartError}
//                 </p>
//               )}

//               {!authUid && (
//                 <p className="mt-3 text-xs text-[#8a847c]">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add to cart or wishlist.
//                 </p>
//               )}

//               <div className="mt-8 flex gap-3 rounded-xl border border-[#f0ebe3] bg-[#faf7f2] p-4">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Estimated delivery
//                   </p>
//                   <p className="mt-0.5 text-xs text-[#6b6560]">
//                     {expectedDelivery
//                       ? `By ${formatDeliveryDate(expectedDelivery)}`
//                       : "Confirmed at checkout"}
//                     {product.leadTimeDays
//                       ? ` · ${product.leadTimeDays} day lead time`
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mt-6 rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
//           <h2 className="font-display text-lg font-semibold text-[#1a1a1a] sm:text-xl">
//             Description
//           </h2>
//           <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//             <div className="space-y-4 text-sm leading-7 text-[#5c564e]">
//               {(product.description || "No description available.")
//                 .split(/\n+/)
//                 .filter(Boolean)
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>

//             <dl className="space-y-4 border-t border-[#f0ebe3] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
//               {[
//                 { label: "Material", value: product.material },
//                 { label: "Finish", value: product.finish || "—" },
//                 { label: "Color", value: product.color || "—" },
//                 { label: "Dimensions", value: product.dimensions },
//                 { label: "Warranty", value: product.warranty || "—" },
//                 {
//                   label: "Shipping",
//                   value: product.leadTimeDays
//                     ? `${product.leadTimeDays} day lead time${
//                         product.leadTime ? ` · ${product.leadTime}` : ""
//                       }`
//                     : product.leadTime || "Confirmed at checkout",
//                 },
//                 {
//                   label: "Stock",
//                   value:
//                     product.stock > 0
//                       ? `${product.stock} available`
//                       : "Out of stock",
//                 },
//               ].map((row) => (
//                 <div key={row.label}>
//                   <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                     {row.label}
//                   </dt>
//                   <dd className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {row.value && row.value !== "—" ? row.value : "—"}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </section>

//         <div className="mt-8">
//           <ProductReviews productId={product.id} productName={product.name} />
//         </div>

//         {related.length > 0 && (
//           <section className="mt-12">
//             <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//               You may also like
//             </h2>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                   <div className="aspect-square overflow-hidden bg-[#f3eee6]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   GitCompare,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import {
//   addToCompare,
//   getCompareItems,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";
// import ProductReviews from "@/components/product/ProductReviews";
// import { colorNameFromHex } from "@/lib/productOptions";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   color?: string;
//   colors: string[];
//   sizes: string[];
//   warranty?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
//   active?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   image?: string;
//   rating?: number;
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
//   if (typeof value === "string") {
//     const m = value.match(/(\d+)/);
//     if (m) {
//       const n = Number(m[1]);
//       if (Number.isFinite(n) && n > 0) return Math.min(365, Math.floor(n));
//     }
//   }
//   return fallback;
// }

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.round(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);

//   const [qty, setQty] = useState(1);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [busyCart, setBusyCart] = useState(false);
//   const [busyWish, setBusyWish] = useState(false);
//   const [busyCompare, setBusyCompare] = useState(false);

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");

//   const [activeImage, setActiveImage] = useState(0);
//   const [zoomOn, setZoomOn] = useState(false);
//   const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
//   const mainImageRef = useRef<HTMLDivElement>(null);

//   // Auth
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });
//     return () => unsub();
//   }, []);

//   // Load product
//   useEffect(() => {
//     if (!productId) {
//       setLoading(false);
//       setError("Product not found.");
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       setError("");
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (cancelled) return;

//         if (!snap.exists()) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const data = snap.data() || {};
//         const status = String(data.status || "In Stock");
//         const active = data.active !== false && status !== "Inactive";

//         if (!active) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const listPrice = Number(
//           data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//         );
//         const discountPercent = Number(data.discountPercent || 0);
//         const ageDays = getProductAgeDays(data);
//         const ageEligible = canApplyAgeingDiscount(data);
//         const effectivePrice = getEffectiveSellingPrice(
//           listPrice,
//           discountPercent,
//           ageEligible
//         );
//         const hasDiscount =
//           ageEligible && discountPercent > 0 && effectivePrice < listPrice;

//         const imgList: string[] = [];
//         if (Array.isArray(data.images)) {
//           data.images.forEach((u: unknown) => {
//             const s = String(u || "").trim();
//             if (s) imgList.push(s);
//           });
//         }
//         const primary =
//           String(data.imageUrl || data.image || "").trim() || imgList[0] || "";
//         if (primary && !imgList.includes(primary)) imgList.unshift(primary);

//         const colors: string[] = Array.isArray(data.colors)
//           ? (data.colors as unknown[]).map(String).filter(Boolean)
//           : data.color
//             ? [String(data.color)]
//             : [];

//         const sizes: string[] = Array.isArray(data.sizes)
//           ? (data.sizes as unknown[]).map(String).filter(Boolean)
//           : [];

//         const mapped: Product = {
//           id: snap.id,
//           name: String(data.name || "Untitled"),
//           category: String(data.category || ""),
//           subcategory: String(data.subcategory || data.subCategory || ""),
//           description: String(data.description || ""),
//           listPrice,
//           discountPercent,
//           effectivePrice,
//           hasDiscount,
//           ageDays,
//           material: String(data.material || "—"),
//           dimensions: String(data.dimensions || "—"),
//           finish: data.finish ? String(data.finish) : undefined,
//           color: data.color ? String(data.color) : undefined,
//           colors,
//           sizes,
//           warranty: data.warranty ? String(data.warranty) : undefined,
//           stock: Math.max(0, Number(data.stock || 0)),
//           image: primary || undefined,
//           images: imgList.length ? imgList : primary ? [primary] : [],
//           leadTime: data.leadTime ? String(data.leadTime) : undefined,
//           leadTimeDays: parseLeadTimeDays(data.leadTimeDays ?? data.leadTime),
//           rating:
//             typeof data.rating === "number" && data.rating > 0
//               ? data.rating
//               : undefined,
//           reviewCount:
//             typeof data.reviewCount === "number"
//               ? data.reviewCount
//               : undefined,
//           featured: Boolean(data.featured),
//           active: true,
//         };

//         setProduct(mapped);
//         setSelectedColor(colors[0] || "");
//         setSelectedSize(sizes[0] || "");
//         setActiveImage(0);
//         setQty(1);
//       } catch (err) {
//         console.error("Product load failed:", err);
//         if (!cancelled) {
//           setError("Could not load this product. Please try again.");
//           setProduct(null);
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId]);

//   // Cart / wishlist / compare state for logged-in user
//   useEffect(() => {
//     if (!authReady || !product) return;

//     let cancelled = false;

//     async function syncUserState() {
//       if (!authUid) {
//         setCartQty(0);
//         setInWishlist(false);
//         setInCompare(false);
//         return;
//       }

//       try {
//         const [cart, wish, compare] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//           getCompareItems(authUid),
//         ]);
//         if (cancelled) return;

//         const line = (cart?.items || []).find(
//           (i) => i.productId === product!.id
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity || 0)) : 0);

//         setInWishlist(
//           (wish || []).some((w) => w.productId === product!.id || w.id === product!.id)
//         );
//         setInCompare(isInCompare(compare || [], product!.id));
//       } catch (err) {
//         console.error("User state sync failed:", err);
//       }
//     }

//     syncUserState();

//     const onCart = () => void syncUserState();
//     const onWish = () => void syncUserState();
//     const onCompare = () => void syncUserState();

//     window.addEventListener("cartUpdated", onCart);
//     window.addEventListener("wishlistUpdated", onWish);
//     window.addEventListener("compareUpdated", onCompare);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", onCart);
//       window.removeEventListener("wishlistUpdated", onWish);
//       window.removeEventListener("compareUpdated", onCompare);
//     };
//   }, [authUid, authReady, product]);

//   // Related products
//   useEffect(() => {
//     if (!product) return;
//     let cancelled = false;

//     async function loadRelated() {
//       try {
//         const q = query(
//           collection(db, "furniture_products"),
//           where("category", "==", product!.category),
//           limit(8)
//         );
//         const snap = await getDocs(q);
//         if (cancelled) return;

//         const rows: RelatedProduct[] = [];
//         snap.docs.forEach((d) => {
//           if (d.id === product!.id) return;
//           const data = d.data() || {};
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const listPrice = Number(
//             data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//           );
//           const discountPercent = Number(data.discountPercent || 0);
//           const ageEligible = canApplyAgeingDiscount(data);
//           const price = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             ageEligible
//           );

//           rows.push({
//             id: d.id,
//             name: String(data.name || "Untitled"),
//             category: String(data.category || ""),
//             price,
//             listPrice,
//             hasDiscount: ageEligible && discountPercent > 0 && price < listPrice,
//             image:
//               String(data.imageUrl || data.image || "").trim() ||
//               (Array.isArray(data.images) && data.images[0]
//                 ? String(data.images[0])
//                 : undefined),
//             rating:
//               typeof data.rating === "number" && data.rating > 0
//                 ? data.rating
//                 : undefined,
//           });
//         });

//         setRelated(rows.slice(0, 4));
//       } catch (err) {
//         console.error("Related products failed:", err);
//       }
//     }

//     loadRelated();
//     return () => {
//       cancelled = true;
//     };
//   }, [product]);

//   const images = useMemo(() => {
//     if (!product) return [];
//     return product.images.length
//       ? product.images
//       : product.image
//         ? [product.image]
//         : [];
//   }, [product]);

//   const outOfStock = !product || product.stock <= 0;
//   const maxQty = product ? Math.max(1, product.stock) : 1;
//   const atMax = cartQty >= maxQty;

//   const variantLabel = useMemo(() => {
//     const parts: string[] = [];
//     if (selectedColor) {
//       parts.push(
//         selectedColor.startsWith("#")
//           ? colorNameFromHex(selectedColor)
//           : selectedColor
//       );
//     }
//     if (selectedSize) parts.push(selectedSize);
//     return parts.join(" · ");
//   }, [selectedColor, selectedSize]);

//   const requireAuth = () => {
//     if (!authUid) {
//       router.push(`/sign-in?redirect=/products/${productId}`);
//       return false;
//     }
//     return true;
//   };

//   const handleAddToCart = async () => {
//     if (!product || outOfStock || busyCart) return;
//     if (!requireAuth()) return;

//     const remaining = Math.max(0, product.stock - cartQty);
//     if (remaining <= 0) return;

//     const toAdd = Math.min(qty, remaining);
//     if (toAdd <= 0) return;

//     setBusyCart(true);
//     try {
//       const variant = variantLabel || undefined;

//       const updated = await addToFirebaseCart(authUid!, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//         variant,
//       });

//       const line = (updated?.items || []).find(
//         (i) => i.productId === product.id
//       );
//       setCartQty(line ? Math.max(0, Number(line.quantity || 0)) : cartQty + toAdd);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Add to cart failed:", err);
//     } finally {
//       setBusyCart(false);
//     }
//   };

//   const handleWishlist = async () => {
//     if (!product || busyWish) return;
//     if (!requireAuth()) return;

//     setBusyWish(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid!, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid!, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed:", err);
//     } finally {
//       setBusyWish(false);
//     }
//   };

//   const handleCompare = async () => {
//     if (!product || busyCompare) return;
//     if (!requireAuth()) return;

//     setBusyCompare(true);
//     try {
//       if (inCompare) {
//         await removeFromCompare(authUid!, product.id);
//         setInCompare(false);
//       } else {
//         await addToCompare(authUid!, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           listPrice: product.listPrice,
//           category: product.category,
//           subcategory: product.subcategory,
//           material: product.material,
//           finish: product.finish,
//           color: product.color || selectedColor,
//           dimensions: product.dimensions,
//           warranty: product.warranty,
//           image: product.image || product.images[0] || "",
//           stock: product.stock,
//         });
//         setInCompare(true);
//       }
//       window.dispatchEvent(new Event("compareUpdated"));
//     } catch (err) {
//       console.error("Compare toggle failed:", err);
//     } finally {
//       setBusyCompare(false);
//     }
//   };

//   const onMainImageMove = (e: MouseEvent<HTMLDivElement>) => {
//     if (!mainImageRef.current) return;
//     const rect = mainImageRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setLensPos({
//       x: Math.min(100, Math.max(0, x)),
//       y: Math.min(100, Math.max(0, y)),
//     });
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-[#faf8f4]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (error || !product) {
//     return (
//       <main className="min-h-[60vh] bg-[#faf8f4]">
//         <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
//           <ShoppingBag size={36} className="mx-auto text-[#d4cdc2]" />
//           <h1 className="mt-4 text-xl font-bold text-[#1a1a1a]">
//             Product unavailable
//           </h1>
//           <p className="mt-2 text-sm text-[#6b6560]">
//             {error || "We could not find this product."}
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
//           >
//             Browse products
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const currentImage = images[activeImage] || product.image || "";

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[#8a847c] sm:mb-7 sm:text-sm">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span>/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Products
//           </Link>
//           {product.category ? (
//             <>
//               <span>/</span>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="hover:text-[#1a1a1a]"
//               >
//                 {product.category}
//               </Link>
//             </>
//           ) : null}
//           <span>/</span>
//           <span className="line-clamp-1 font-medium text-[#1a1a1a]">
//             {product.name}
//           </span>
//         </nav>

//         <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Gallery */}
//           <div>
//             <div
//               ref={mainImageRef}
//               className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white sm:aspect-square"
//               onMouseEnter={() => setZoomOn(true)}
//               onMouseLeave={() => setZoomOn(false)}
//               onMouseMove={onMainImageMove}
//             >
//               {currentImage ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={currentImage}
//                   alt={product.name}
//                   className="h-full w-full object-cover"
//                   style={
//                     zoomOn
//                       ? {
//                           transformOrigin: `${lensPos.x}% ${lensPos.y}%`,
//                           transform: "scale(1.85)",
//                         }
//                       : undefined
//                   }
//                 />
//               ) : (
//                 <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                   <ShoppingBag size={40} />
//                 </div>
//               )}

//               {product.hasDiscount && (
//                 <span className="absolute left-3 top-3 rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[11px] font-semibold text-white">
//                   {Math.round(product.discountPercent)}% off
//                 </span>
//               )}
//             </div>

//             {images.length > 1 && (
//               <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
//                 {images.map((src, i) => (
//                   <button
//                     key={`${src}-${i}`}
//                     type="button"
//                     onClick={() => setActiveImage(i)}
//                     className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${
//                       i === activeImage
//                         ? "border-[#1a1a1a]"
//                         : "border-transparent opacity-80"
//                     }`}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={src}
//                       alt=""
//                       className="h-full w-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//             {images.length > 1 && (
//               <div className="mt-2 flex justify-center gap-2 sm:hidden">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) =>
//                       i === 0 ? images.length - 1 : i - 1
//                     )
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) => (i + 1) % images.length)
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Buy box */}
//           <div>
//             <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//               {product.category}
//               {product.subcategory ? ` · ${product.subcategory}` : ""}
//             </p>

//             <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
//               {product.name}
//             </h1>

//             {typeof product.rating === "number" && product.rating > 0 && (
//               <div className="mt-3 flex items-center gap-2">
//                 <StarRow rating={product.rating} size={15} />
//                 <span className="text-sm text-[#6b6560]">
//                   {product.rating.toFixed(1)}
//                   {product.reviewCount
//                     ? ` · ${product.reviewCount} reviews`
//                     : ""}
//                 </span>
//               </div>
//             )}

//             <div className="mt-4 flex flex-wrap items-baseline gap-2.5">
//               <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 {formatCurrency(product.effectivePrice)}
//               </p>
//               {product.hasDiscount && (
//                 <>
//                   <p className="text-base text-[#8a847c] line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <span className="rounded-full bg-[#f0ebe3] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                     Save {Math.round(product.discountPercent)}%
//                   </span>
//                 </>
//               )}
//             </div>

//             {product.description ? (
//               <p className="mt-4 text-sm leading-6 text-[#5c564e]">
//                 {product.description}
//               </p>
//             ) : null}

//             {/* Specs */}
//             <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-[#e8e2d8] py-4 text-sm">
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Material</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.material || "—"}
//                 </dd>
//               </div>
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Dimensions</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.dimensions || "—"}
//                 </dd>
//               </div>
//               {product.finish ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Finish</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.finish}
//                   </dd>
//                 </div>
//               ) : null}
//               {product.warranty ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Warranty</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.warranty}
//                   </dd>
//                 </div>
//               ) : null}
//             </dl>

//             {/* Stock */}
//             <p
//               className={`mt-4 text-sm font-medium ${
//                 outOfStock
//                   ? "text-red-600"
//                   : product.stock <= 3
//                     ? "text-amber-700"
//                     : "text-[#176b5b]"
//               }`}
//             >
//               {outOfStock
//                 ? "Out of stock"
//                 : product.stock <= 3
//                   ? `Only ${product.stock} left`
//                   : "In stock"}
//             </p>

//             {/* Colours */}
//             {product.colors.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Colour
//                   {selectedColor ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       ·{" "}
//                       {selectedColor.startsWith("#")
//                         ? colorNameFromHex(selectedColor)
//                         : selectedColor}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.colors.map((c) => {
//                     const active = selectedColor === c;
//                     const isHex = c.startsWith("#");
//                     return (
//                       <button
//                         key={c}
//                         type="button"
//                         onClick={() => setSelectedColor(c)}
//                         title={
//                           isHex ? colorNameFromHex(c) : c
//                         }
//                         className={`h-9 w-9 rounded-full border-2 transition ${
//                           active
//                             ? "border-[#1a1a1a] ring-2 ring-[#1a1a1a]/20"
//                             : "border-[#e8e2d8] hover:border-[#c4b8a8]"
//                         }`}
//                         style={{
//                           backgroundColor: isHex ? c : "#e8e2d8",
//                         }}
//                         aria-label={`Colour ${isHex ? colorNameFromHex(c) : c}`}
//                         aria-pressed={active}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Sizes / seaters */}
//             {product.sizes.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Size
//                   {selectedSize ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       · {selectedSize}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.sizes.map((s) => {
//                     const active = selectedSize === s;
//                     return (
//                       <button
//                         key={s}
//                         type="button"
//                         onClick={() => setSelectedSize(s)}
//                         className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
//                           active
//                             ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                             : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                         }`}
//                         aria-pressed={active}
//                       >
//                         {s}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Qty + Add to cart + Compare */}
//             <div className="mt-6 flex flex-wrap items-center gap-2.5">
//               <div className="inline-flex h-11 items-center rounded-full border border-[#e8e2d8] bg-white">
//                 <button
//                   type="button"
//                   disabled={qty <= 1 || outOfStock}
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={15} />
//                 </button>
//                 <span className="min-w-[2rem] text-center text-sm font-semibold text-[#1a1a1a]">
//                   {qty}
//                 </span>
//                 <button
//                   type="button"
//                   disabled={qty >= maxQty || outOfStock}
//                   onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={15} />
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 disabled={outOfStock || busyCart || atMax}
//                 onClick={() => void handleAddToCart()}
//                 className={`inline-flex h-11 min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition sm:flex-none ${
//                   outOfStock || atMax
//                     ? "cursor-not-allowed bg-[#e8e2d8] text-[#8a847c]"
//                     : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                 }`}
//               >
//                 {busyCart ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : outOfStock ? (
//                   "Sold out"
//                 ) : atMax ? (
//                   "Max in cart"
//                 ) : cartQty > 0 ? (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add more
//                   </>
//                 ) : (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add to cart
//                   </>
//                 )}
//               </button>

//               <button
//                 type="button"
//                 disabled={busyCompare}
//                 onClick={() => void handleCompare()}
//                 className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
//                   inCompare
//                     ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                     : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                 }`}
//                 title={inCompare ? "Remove from compare" : "Add to compare"}
//                 aria-label="Compare"
//               >
//                 {busyCompare ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   <GitCompare size={16} />
//                 )}
//               </button>

//               <button
//                 type="button"
//                 disabled={busyWish}
//                 onClick={() => void handleWishlist()}
//                 className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
//                   inWishlist
//                     ? "border-red-200 bg-red-50 text-red-600"
//                     : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                 }`}
//                 title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
//                 aria-label="Wishlist"
//               >
//                 {busyWish ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   <Heart
//                     size={16}
//                     className={inWishlist ? "fill-current" : ""}
//                   />
//                 )}
//               </button>
//             </div>

//             {cartQty > 0 && (
//               <p className="mt-2 text-xs text-[#176b5b]">
//                 {cartQty} in your cart
//                 {variantLabel ? ` · ${variantLabel}` : ""}
//                 {" · "}
//                 <Link href="/cart" className="font-semibold underline">
//                   View cart
//                 </Link>
//               </p>
//             )}

//             <div className="mt-6 rounded-xl border border-[#e8e2d8] bg-white p-4">
//               <div className="flex gap-3">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#6b6560]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Delivery
//                   </p>
//                   <p className="mt-1 text-xs leading-5 text-[#6b6560]">
//                     {product.leadTime
//                       ? `Typical lead time: ${product.leadTime}`
//                       : product.leadTimeDays
//                         ? `Typical lead time: ${product.leadTimeDays} days`
//                         : "Delivery details are confirmed at checkout."}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Reviews */}
//         <div className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//           <ProductReviews
//             productId={product.id}
//             productName={product.name}
//           />
//         </div>

//         {/* Related */}
//         {related.length > 0 && (
//           <section className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//             <div className="flex items-end justify-between gap-4">
//               <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//                 You may also like
//               </h2>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//               >
//                 View all
//               </Link>
//             </div>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-xl border border-[#e8e2d8] bg-white transition hover:border-[#c4b8a8]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-[#f5f0e8]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   GitCompare,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import {
//   addToCompare,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";
// import ProductReviews from "@/components/product/ProductReviews";
// import { colorNameFromHex } from "@/lib/productOptions";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   color?: string;
//   colors: string[];
//   sizes: string[];
//   warranty?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
//   active?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   image?: string;
//   rating?: number;
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
//   if (typeof value === "string") {
//     const m = value.match(/(\d+)/);
//     if (m) {
//       const n = Number(m[1]);
//       if (Number.isFinite(n) && n > 0) return Math.min(365, Math.floor(n));
//     }
//   }
//   return fallback;
// }

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.round(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);

//   const [qty, setQty] = useState(1);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [busyCart, setBusyCart] = useState(false);
//   const [busyWish, setBusyWish] = useState(false);
//   const [busyCompare, setBusyCompare] = useState(false);
//   const [compareError, setCompareError] = useState("");

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");

//   const [activeImage, setActiveImage] = useState(0);
//   const [zoomOn, setZoomOn] = useState(false);
//   const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
//   const mainImageRef = useRef<HTMLDivElement>(null);

//   // Auth
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });
//     return () => unsub();
//   }, []);

//   // Load product
//   useEffect(() => {
//     if (!productId) {
//       setLoading(false);
//       setError("Product not found.");
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       setError("");
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (cancelled) return;

//         if (!snap.exists()) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const data = snap.data() || {};
//         const status = String(data.status || "In Stock");
//         const active = data.active !== false && status !== "Inactive";

//         if (!active) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const listPrice = Number(
//           data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//         );
//         const discountPercent = Number(data.discountPercent || 0);
//         const ageDays = getProductAgeDays(data);
//         const ageEligible = canApplyAgeingDiscount(data);
//         const effectivePrice = getEffectiveSellingPrice(
//           listPrice,
//           discountPercent,
//           ageEligible
//         );
//         const hasDiscount =
//           ageEligible && discountPercent > 0 && effectivePrice < listPrice;

//         const imgList: string[] = [];
//         if (Array.isArray(data.images)) {
//           data.images.forEach((u: unknown) => {
//             const s = String(u || "").trim();
//             if (s) imgList.push(s);
//           });
//         }
//         const primary =
//           String(data.imageUrl || data.image || "").trim() || imgList[0] || "";
//         if (primary && !imgList.includes(primary)) imgList.unshift(primary);

//         const colors: string[] = Array.isArray(data.colors)
//           ? (data.colors as unknown[]).map(String).filter(Boolean)
//           : data.color
//             ? [String(data.color)]
//             : [];

//         const sizes: string[] = Array.isArray(data.sizes)
//           ? (data.sizes as unknown[]).map(String).filter(Boolean)
//           : [];

//         const mapped: Product = {
//           id: snap.id,
//           name: String(data.name || "Untitled"),
//           category: String(data.category || ""),
//           subcategory: String(data.subcategory || data.subCategory || ""),
//           description: String(data.description || ""),
//           listPrice,
//           discountPercent,
//           effectivePrice,
//           hasDiscount,
//           ageDays,
//           material: String(data.material || "—"),
//           dimensions: String(data.dimensions || "—"),
//           finish: data.finish ? String(data.finish) : undefined,
//           color: data.color ? String(data.color) : undefined,
//           colors,
//           sizes,
//           warranty: data.warranty ? String(data.warranty) : undefined,
//           stock: Math.max(0, Number(data.stock || 0)),
//           image: primary || undefined,
//           images: imgList.length ? imgList : primary ? [primary] : [],
//           leadTime: data.leadTime ? String(data.leadTime) : undefined,
//           leadTimeDays: parseLeadTimeDays(data.leadTimeDays ?? data.leadTime),
//           rating:
//             typeof data.rating === "number" && data.rating > 0
//               ? data.rating
//               : undefined,
//           reviewCount:
//             typeof data.reviewCount === "number"
//               ? data.reviewCount
//               : undefined,
//           featured: Boolean(data.featured),
//           active: true,
//         };

//         setProduct(mapped);
//         setSelectedColor(colors[0] || "");
//         setSelectedSize(sizes[0] || "");
//         setActiveImage(0);
//         setQty(1);
//         setInCompare(isInCompare(mapped.id));
//       } catch (err) {
//         console.error("Product load failed:", err);
//         if (!cancelled) {
//           setError("Could not load this product. Please try again.");
//           setProduct(null);
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId]);

//   // Cart / wishlist (Firebase) + compare (localStorage)
//   useEffect(() => {
//     if (!authReady || !product) return;

//     let cancelled = false;

//     async function syncUserState() {
//       // Compare is always localStorage
//       if (!cancelled) {
//         setInCompare(isInCompare(product!.id));
//       }

//       if (!authUid) {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//         return;
//       }

//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;

//         const line = (cart?.items || []).find(
//           (i) => i.productId === product!.id
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity || 0)) : 0);

//         const wishItems = Array.isArray(wish)
//           ? wish
//           : (wish as { items?: { productId?: string; id?: string }[] })
//               ?.items || [];
//         setInWishlist(
//           wishItems.some(
//             (w) => w.productId === product!.id || w.id === product!.id
//           )
//         );
//       } catch (err) {
//         console.error("User state sync failed:", err);
//       }
//     }

//     void syncUserState();

//     const onCart = () => void syncUserState();
//     const onWish = () => void syncUserState();
//     const onCompare = () => {
//       if (product) setInCompare(isInCompare(product.id));
//     };

//     window.addEventListener("cartUpdated", onCart);
//     window.addEventListener("wishlistUpdated", onWish);
//     window.addEventListener("compareUpdated", onCompare);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", onCart);
//       window.removeEventListener("wishlistUpdated", onWish);
//       window.removeEventListener("compareUpdated", onCompare);
//     };
//   }, [authUid, authReady, product]);

//   // Related products
//   useEffect(() => {
//     if (!product) return;
//     let cancelled = false;

//     async function loadRelated() {
//       try {
//         const q = query(
//           collection(db, "furniture_products"),
//           where("category", "==", product!.category),
//           limit(8)
//         );
//         const snap = await getDocs(q);
//         if (cancelled) return;

//         const rows: RelatedProduct[] = [];
//         snap.docs.forEach((d) => {
//           if (d.id === product!.id) return;
//           const data = d.data() || {};
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const listPrice = Number(
//             data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//           );
//           const discountPercent = Number(data.discountPercent || 0);
//           const ageEligible = canApplyAgeingDiscount(data);
//           const price = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             ageEligible
//           );

//           rows.push({
//             id: d.id,
//             name: String(data.name || "Untitled"),
//             category: String(data.category || ""),
//             price,
//             listPrice,
//             hasDiscount:
//               ageEligible && discountPercent > 0 && price < listPrice,
//             image:
//               String(data.imageUrl || data.image || "").trim() ||
//               (Array.isArray(data.images) && data.images[0]
//                 ? String(data.images[0])
//                 : undefined),
//             rating:
//               typeof data.rating === "number" && data.rating > 0
//                 ? data.rating
//                 : undefined,
//           });
//         });

//         setRelated(rows.slice(0, 4));
//       } catch (err) {
//         console.error("Related products failed:", err);
//       }
//     }

//     void loadRelated();
//     return () => {
//       cancelled = true;
//     };
//   }, [product]);

//   const images = useMemo(() => {
//     if (!product) return [];
//     return product.images.length
//       ? product.images
//       : product.image
//         ? [product.image]
//         : [];
//   }, [product]);

//   const outOfStock = !product || product.stock <= 0;
//   const maxQty = product ? Math.max(1, product.stock) : 1;
//   const atMax = cartQty >= maxQty;

//   const variantLabel = useMemo(() => {
//     const parts: string[] = [];
//     if (selectedColor) {
//       parts.push(
//         selectedColor.startsWith("#")
//           ? colorNameFromHex(selectedColor)
//           : selectedColor
//       );
//     }
//     if (selectedSize) parts.push(selectedSize);
//     return parts.join(" · ");
//   }, [selectedColor, selectedSize]);

//   const requireAuth = () => {
//     if (!authUid) {
//       router.push(`/sign-in?redirect=/products/${productId}`);
//       return false;
//     }
//     return true;
//   };

//   const handleAddToCart = async () => {
//     if (!product || outOfStock || busyCart) return;
//     if (!requireAuth()) return;

//     const remaining = Math.max(0, product.stock - cartQty);
//     if (remaining <= 0) return;

//     const toAdd = Math.min(qty, remaining);
//     if (toAdd <= 0) return;

//     setBusyCart(true);
//     try {
//       const variant = variantLabel || undefined;

//       const updated = await addToFirebaseCart(authUid!, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//         variant,
//       });

//       const line = (updated?.items || []).find(
//         (i) => i.productId === product.id
//       );
//       setCartQty(
//         line ? Math.max(0, Number(line.quantity || 0)) : cartQty + toAdd
//       );
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Add to cart failed:", err);
//     } finally {
//       setBusyCart(false);
//     }
//   };

//   const handleWishlist = async () => {
//     if (!product || busyWish) return;
//     if (!requireAuth()) return;

//     setBusyWish(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid!, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid!, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed:", err);
//     } finally {
//       setBusyWish(false);
//     }
//   };

//   /** Compare uses localStorage — no login required */
//   const handleCompare = () => {
//     if (!product || busyCompare) return;

//     setCompareError("");
//     setBusyCompare(true);
//     try {
//       if (isInCompare(product.id)) {
//         removeFromCompare(product.id);
//         setInCompare(false);
//       } else {
//         const err = addToCompare({
//           id: product.id,
//           name: product.name,
//           category: product.category,
//           subcategory: product.subcategory || product.category,
//           price: product.effectivePrice,
//           listPrice: product.listPrice,
//           hasDiscount: product.hasDiscount,
//           discountPercent: product.discountPercent,
//           image: product.image || product.images[0] || "",
//           material: product.material,
//           finish: product.finish,
//           color: product.color || selectedColor,
//           dimensions: product.dimensions,
//           stock: product.stock,
//           warranty: product.warranty,
//           leadTime: product.leadTime,
//           leadTimeDays: product.leadTimeDays,
//           rating: product.rating,
//           reviewCount: product.reviewCount,
//         });
//         if (err) {
//           setCompareError(err);
//         } else {
//           setInCompare(true);
//         }
//       }
//     } finally {
//       setBusyCompare(false);
//     }
//   };

//   const onMainImageMove = (e: MouseEvent<HTMLDivElement>) => {
//     if (!mainImageRef.current) return;
//     const rect = mainImageRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setLensPos({
//       x: Math.min(100, Math.max(0, x)),
//       y: Math.min(100, Math.max(0, y)),
//     });
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-[#faf8f4]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (error || !product) {
//     return (
//       <main className="min-h-[60vh] bg-[#faf8f4]">
//         <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
//           <ShoppingBag size={36} className="mx-auto text-[#d4cdc2]" />
//           <h1 className="mt-4 text-xl font-bold text-[#1a1a1a]">
//             Product unavailable
//           </h1>
//           <p className="mt-2 text-sm text-[#6b6560]">
//             {error || "We could not find this product."}
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
//           >
//             Browse products
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const currentImage = images[activeImage] || product.image || "";

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[#8a847c] sm:mb-7 sm:text-sm">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span>/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Products
//           </Link>
//           {product.category ? (
//             <>
//               <span>/</span>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="hover:text-[#1a1a1a]"
//               >
//                 {product.category}
//               </Link>
//             </>
//           ) : null}
//           <span>/</span>
//           <span className="line-clamp-1 font-medium text-[#1a1a1a]">
//             {product.name}
//           </span>
//         </nav>

//         <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Gallery */}
//           <div>
//             <div
//               ref={mainImageRef}
//               className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white sm:aspect-square"
//               onMouseEnter={() => setZoomOn(true)}
//               onMouseLeave={() => setZoomOn(false)}
//               onMouseMove={onMainImageMove}
//             >
//               {currentImage ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={currentImage}
//                   alt={product.name}
//                   className="h-full w-full object-cover"
//                   style={
//                     zoomOn
//                       ? {
//                           transformOrigin: `${lensPos.x}% ${lensPos.y}%`,
//                           transform: "scale(1.85)",
//                         }
//                       : undefined
//                   }
//                 />
//               ) : (
//                 <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                   <ShoppingBag size={40} />
//                 </div>
//               )}

//               {product.hasDiscount && (
//                 <span className="absolute left-3 top-3 rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[11px] font-semibold text-white">
//                   {Math.round(product.discountPercent)}% off
//                 </span>
//               )}
//             </div>

//             {images.length > 1 && (
//               <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
//                 {images.map((src, i) => (
//                   <button
//                     key={`${src}-${i}`}
//                     type="button"
//                     onClick={() => setActiveImage(i)}
//                     className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${
//                       i === activeImage
//                         ? "border-[#1a1a1a]"
//                         : "border-transparent opacity-80"
//                     }`}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={src}
//                       alt=""
//                       className="h-full w-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//             {images.length > 1 && (
//               <div className="mt-2 flex justify-center gap-2 sm:hidden">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) =>
//                       i === 0 ? images.length - 1 : i - 1
//                     )
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) => (i + 1) % images.length)
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Buy box */}
//           <div>
//             <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//               {product.category}
//               {product.subcategory ? ` · ${product.subcategory}` : ""}
//             </p>

//             <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
//               {product.name}
//             </h1>

//             {typeof product.rating === "number" && product.rating > 0 && (
//               <div className="mt-3 flex items-center gap-2">
//                 <StarRow rating={product.rating} size={15} />
//                 <span className="text-sm text-[#6b6560]">
//                   {product.rating.toFixed(1)}
//                   {product.reviewCount
//                     ? ` · ${product.reviewCount} reviews`
//                     : ""}
//                 </span>
//               </div>
//             )}

//             <div className="mt-4 flex flex-wrap items-baseline gap-2.5">
//               <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 {formatCurrency(product.effectivePrice)}
//               </p>
//               {product.hasDiscount && (
//                 <>
//                   <p className="text-base text-[#8a847c] line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <span className="rounded-full bg-[#f0ebe3] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                     Save {Math.round(product.discountPercent)}%
//                   </span>
//                 </>
//               )}
//             </div>

//             {product.description ? (
//               <p className="mt-4 text-sm leading-6 text-[#5c564e]">
//                 {product.description}
//               </p>
//             ) : null}

//             {/* Specs */}
//             <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-[#e8e2d8] py-4 text-sm">
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Material</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.material || "—"}
//                 </dd>
//               </div>
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Dimensions</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.dimensions || "—"}
//                 </dd>
//               </div>
//               {product.finish ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Finish</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.finish}
//                   </dd>
//                 </div>
//               ) : null}
//               {product.warranty ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Warranty</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.warranty}
//                   </dd>
//                 </div>
//               ) : null}
//             </dl>

//             {/* Stock */}
//             <p
//               className={`mt-4 text-sm font-medium ${
//                 outOfStock
//                   ? "text-red-600"
//                   : product.stock <= 3
//                     ? "text-amber-700"
//                     : "text-[#176b5b]"
//               }`}
//             >
//               {outOfStock
//                 ? "Out of stock"
//                 : product.stock <= 3
//                   ? `Only ${product.stock} left`
//                   : "In stock"}
//             </p>

//             {/* Colours */}
//             {product.colors.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Colour
//                   {selectedColor ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       ·{" "}
//                       {selectedColor.startsWith("#")
//                         ? colorNameFromHex(selectedColor)
//                         : selectedColor}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.colors.map((c) => {
//                     const active = selectedColor === c;
//                     const isHex = c.startsWith("#");
//                     return (
//                       <button
//                         key={c}
//                         type="button"
//                         onClick={() => setSelectedColor(c)}
//                         title={isHex ? colorNameFromHex(c) : c}
//                         className={`h-9 w-9 rounded-full border-2 transition ${
//                           active
//                             ? "border-[#1a1a1a] ring-2 ring-[#1a1a1a]/20"
//                             : "border-[#e8e2d8] hover:border-[#c4b8a8]"
//                         }`}
//                         style={{
//                           backgroundColor: isHex ? c : "#e8e2d8",
//                         }}
//                         aria-label={`Colour ${isHex ? colorNameFromHex(c) : c}`}
//                         aria-pressed={active}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Sizes / seaters */}
//             {product.sizes.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Size
//                   {selectedSize ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       · {selectedSize}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.sizes.map((s) => {
//                     const active = selectedSize === s;
//                     return (
//                       <button
//                         key={s}
//                         type="button"
//                         onClick={() => setSelectedSize(s)}
//                         className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
//                           active
//                             ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                             : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                         }`}
//                         aria-pressed={active}
//                       >
//                         {s}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Qty + Add to cart + Compare + Wishlist */}
//             <div className="mt-6 flex flex-wrap items-center gap-2.5">
//               <div className="inline-flex h-11 items-center rounded-full border border-[#e8e2d8] bg-white">
//                 <button
//                   type="button"
//                   disabled={qty <= 1 || outOfStock}
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={15} />
//                 </button>
//                 <span className="min-w-[2rem] text-center text-sm font-semibold text-[#1a1a1a]">
//                   {qty}
//                 </span>
//                 <button
//                   type="button"
//                   disabled={qty >= maxQty || outOfStock}
//                   onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={15} />
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 disabled={outOfStock || busyCart || atMax}
//                 onClick={() => void handleAddToCart()}
//                 className={`inline-flex h-11 min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition sm:flex-none ${
//                   outOfStock || atMax
//                     ? "cursor-not-allowed bg-[#e8e2d8] text-[#8a847c]"
//                     : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                 }`}
//               >
//                 {busyCart ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : outOfStock ? (
//                   "Sold out"
//                 ) : atMax ? (
//                   "Max in cart"
//                 ) : cartQty > 0 ? (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add more
//                   </>
//                 ) : (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add to cart
//                   </>
//                 )}
//               </button>

//               <button
//                 type="button"
//                 disabled={busyCompare}
//                 onClick={handleCompare}
//                 className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
//                   inCompare
//                     ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                     : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                 }`}
//                 title={inCompare ? "Remove from compare" : "Add to compare"}
//                 aria-label="Compare"
//               >
//                 {busyCompare ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   <GitCompare size={16} />
//                 )}
//               </button>

//               <button
//                 type="button"
//                 disabled={busyWish}
//                 onClick={() => void handleWishlist()}
//                 className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
//                   inWishlist
//                     ? "border-red-200 bg-red-50 text-red-600"
//                     : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                 }`}
//                 title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
//                 aria-label="Wishlist"
//               >
//                 {busyWish ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   <Heart
//                     size={16}
//                     className={inWishlist ? "fill-current" : ""}
//                   />
//                 )}
//               </button>
//             </div>

//             {compareError ? (
//               <p className="mt-2 text-xs font-medium text-[#c45c4a]">
//                 {compareError}
//               </p>
//             ) : null}

//             {cartQty > 0 && (
//               <p className="mt-2 text-xs text-[#176b5b]">
//                 {cartQty} in your cart
//                 {variantLabel ? ` · ${variantLabel}` : ""}
//                 {" · "}
//                 <Link href="/cart" className="font-semibold underline">
//                   View cart
//                 </Link>
//               </p>
//             )}

//             {inCompare && (
//               <p className="mt-1.5 text-xs text-[#6b6560]">
//                 In compare ·{" "}
//                 <Link href="/compare" className="font-semibold text-[#1a1a1a] underline">
//                   View comparison
//                 </Link>
//               </p>
//             )}

//             <div className="mt-6 rounded-xl border border-[#e8e2d8] bg-white p-4">
//               <div className="flex gap-3">
//                 <Truck size={18} className="mt-0.5 shrink-0 text-[#6b6560]" />
//                 <div>
//                   <p className="text-sm font-semibold text-[#1a1a1a]">
//                     Delivery
//                   </p>
//                   {/* <p className="mt-1 text-xs leading-5 text-[#6b6560]">
//                     {product.leadTime
//                       ? `Typical lead time: ${product.leadTime}`
//                       : product.leadTimeDays
//                         ? `Typical lead time: ${product.leadTimeDays} days`
//                         : "Delivery details are confirmed at checkout."}
//                   </p> */}

//                   <p className="mt-1 text-xs leading-5 text-[#6b6560]">
//                     {product.leadTimeDays
//                       ? `${product.leadTimeDays} days`
//                       : product.leadTime
//                         ? product.leadTime
//                         : "Delivery details are confirmed at checkout."}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Reviews */}
//         <div className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//           <ProductReviews
//             productId={product.id}
//             productName={product.name}
//           />
//         </div>

//         {/* Related */}
//         {related.length > 0 && (
//           <section className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//             <div className="flex items-end justify-between gap-4">
//               <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//                 You may also like
//               </h2>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//               >
//                 View all
//               </Link>
//             </div>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-xl border border-[#e8e2d8] bg-white transition hover:border-[#c4b8a8]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-[#f5f0e8]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   GitCompare,
//   Heart,
//   Loader2,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
// } from "lucide-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   query,
//   where,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
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
// import {
//   addToCompare,
//   isInCompare,
//   removeFromCompare,
// } from "@/services/compareService";
// import ProductReviews from "@/components/product/ProductReviews";
// import { colorNameFromHex } from "@/lib/productOptions";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   description: string;
//   listPrice: number;
//   discountPercent: number;
//   effectivePrice: number;
//   hasDiscount: boolean;
//   ageDays: number;
//   material: string;
//   dimensions: string;
//   finish?: string;
//   color?: string;
//   colors: string[];
//   sizes: string[];
//   warranty?: string;
//   stock: number;
//   image?: string;
//   images: string[];
//   leadTime?: string;
//   leadTimeDays?: number;
//   rating?: number;
//   reviewCount?: number;
//   featured?: boolean;
//   active?: boolean;
// }

// interface RelatedProduct {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   listPrice: number;
//   hasDiscount: boolean;
//   image?: string;
//   rating?: number;
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
//   if (typeof value === "string") {
//     const m = value.match(/(\d+)/);
//     if (m) {
//       const n = Number(m[1]);
//       if (Number.isFinite(n) && n > 0) return Math.min(365, Math.floor(n));
//     }
//   }
//   return fallback;
// }

// function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
//   const full = Math.round(rating);
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={
//             i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
//           }
//           strokeWidth={1.5}
//         />
//       ))}
//     </div>
//   );
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [related, setRelated] = useState<RelatedProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);

//   const [qty, setQty] = useState(1);
//   const [cartQty, setCartQty] = useState(0);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [inCompare, setInCompare] = useState(false);
//   const [busyCart, setBusyCart] = useState(false);
//   const [busyWish, setBusyWish] = useState(false);
//   const [busyCompare, setBusyCompare] = useState(false);
//   const [compareError, setCompareError] = useState("");

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");

//   const [activeImage, setActiveImage] = useState(0);
//   const [zoomOn, setZoomOn] = useState(false);
//   const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
//   const mainImageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) {
//       setLoading(false);
//       setError("Product not found.");
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       setError("");
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (cancelled) return;

//         if (!snap.exists()) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const data = snap.data() || {};
//         const status = String(data.status || "In Stock");
//         const active = data.active !== false && status !== "Inactive";

//         if (!active) {
//           setProduct(null);
//           setError("This product is no longer available.");
//           setLoading(false);
//           return;
//         }

//         const listPrice = Number(
//           data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//         );
//         const discountPercent = Number(data.discountPercent || 0);
//         const ageDays = getProductAgeDays(data);
//         const ageEligible = canApplyAgeingDiscount(data);
//         const effectivePrice = getEffectiveSellingPrice(
//           listPrice,
//           discountPercent,
//           ageEligible
//         );
//         const hasDiscount =
//           ageEligible && discountPercent > 0 && effectivePrice < listPrice;

//         const imgList: string[] = [];
//         if (Array.isArray(data.images)) {
//           data.images.forEach((u: unknown) => {
//             const s = String(u || "").trim();
//             if (s) imgList.push(s);
//           });
//         }
//         const primary =
//           String(data.imageUrl || data.image || "").trim() || imgList[0] || "";
//         if (primary && !imgList.includes(primary)) imgList.unshift(primary);

//         const colors: string[] = Array.isArray(data.colors)
//           ? (data.colors as unknown[]).map(String).filter(Boolean)
//           : data.color
//             ? [String(data.color)]
//             : [];

//         const sizes: string[] = Array.isArray(data.sizes)
//           ? (data.sizes as unknown[]).map(String).filter(Boolean)
//           : [];

//         const mapped: Product = {
//           id: snap.id,
//           name: String(data.name || "Untitled"),
//           category: String(data.category || ""),
//           subcategory: String(data.subcategory || data.subCategory || ""),
//           description: String(data.description || ""),
//           listPrice,
//           discountPercent,
//           effectivePrice,
//           hasDiscount,
//           ageDays,
//           material: String(data.material || "—"),
//           dimensions: String(data.dimensions || "—"),
//           finish: data.finish ? String(data.finish) : undefined,
//           color: data.color ? String(data.color) : undefined,
//           colors,
//           sizes,
//           warranty: data.warranty ? String(data.warranty) : undefined,
//           stock: Math.max(0, Number(data.stock || 0)),
//           image: primary || undefined,
//           images: imgList.length ? imgList : primary ? [primary] : [],
//           leadTime: data.leadTime ? String(data.leadTime) : undefined,
//           leadTimeDays: parseLeadTimeDays(data.leadTimeDays ?? data.leadTime),
//           rating:
//             typeof data.rating === "number" && data.rating > 0
//               ? data.rating
//               : undefined,
//           reviewCount:
//             typeof data.reviewCount === "number"
//               ? data.reviewCount
//               : undefined,
//           featured: Boolean(data.featured),
//           active: true,
//         };

//         setProduct(mapped);
//         setSelectedColor(colors[0] || "");
//         setSelectedSize(sizes[0] || "");
//         setActiveImage(0);
//         setQty(1);
//         setInCompare(isInCompare(mapped.id));
//       } catch (err) {
//         console.error("Product load failed:", err);
//         if (!cancelled) {
//           setError("Could not load this product. Please try again.");
//           setProduct(null);
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     void load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId]);

//   useEffect(() => {
//     if (!authReady || !product) return;

//     let cancelled = false;

//     async function syncUserState() {
//       if (!cancelled) {
//         setInCompare(isInCompare(product!.id));
//       }

//       if (!authUid) {
//         if (!cancelled) {
//           setCartQty(0);
//           setInWishlist(false);
//         }
//         return;
//       }

//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;

//         const line = (cart?.items || []).find(
//           (i) => i.productId === product!.id
//         );
//         setCartQty(line ? Math.max(0, Number(line.quantity || 0)) : 0);

//         const wishItems = Array.isArray(wish)
//           ? wish
//           : (wish as { items?: { productId?: string; id?: string }[] })
//               ?.items || [];
//         setInWishlist(
//           wishItems.some(
//             (w) => w.productId === product!.id || w.id === product!.id
//           )
//         );
//       } catch (err) {
//         console.error("User state sync failed:", err);
//       }
//     }

//     void syncUserState();

//     const onCart = () => void syncUserState();
//     const onWish = () => void syncUserState();
//     const onCompare = () => {
//       if (product) setInCompare(isInCompare(product.id));
//     };

//     window.addEventListener("cartUpdated", onCart);
//     window.addEventListener("wishlistUpdated", onWish);
//     window.addEventListener("compareUpdated", onCompare);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", onCart);
//       window.removeEventListener("wishlistUpdated", onWish);
//       window.removeEventListener("compareUpdated", onCompare);
//     };
//   }, [authUid, authReady, product]);

//   useEffect(() => {
//     if (!product) return;
//     let cancelled = false;

//     async function loadRelated() {
//       try {
//         const q = query(
//           collection(db, "furniture_products"),
//           where("category", "==", product!.category),
//           limit(8)
//         );
//         const snap = await getDocs(q);
//         if (cancelled) return;

//         const rows: RelatedProduct[] = [];
//         snap.docs.forEach((d) => {
//           if (d.id === product!.id) return;
//           const data = d.data() || {};
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const listPrice = Number(
//             data.sellingPrice ?? data.price ?? data.listPrice ?? 0
//           );
//           const discountPercent = Number(data.discountPercent || 0);
//           const ageEligible = canApplyAgeingDiscount(data);
//           const price = getEffectiveSellingPrice(
//             listPrice,
//             discountPercent,
//             ageEligible
//           );

//           rows.push({
//             id: d.id,
//             name: String(data.name || "Untitled"),
//             category: String(data.category || ""),
//             price,
//             listPrice,
//             hasDiscount:
//               ageEligible && discountPercent > 0 && price < listPrice,
//             image:
//               String(data.imageUrl || data.image || "").trim() ||
//               (Array.isArray(data.images) && data.images[0]
//                 ? String(data.images[0])
//                 : undefined),
//             rating:
//               typeof data.rating === "number" && data.rating > 0
//                 ? data.rating
//                 : undefined,
//           });
//         });

//         setRelated(rows.slice(0, 4));
//       } catch (err) {
//         console.error("Related products failed:", err);
//       }
//     }

//     void loadRelated();
//     return () => {
//       cancelled = true;
//     };
//   }, [product]);

//   const images = useMemo(() => {
//     if (!product) return [];
//     return product.images.length
//       ? product.images
//       : product.image
//         ? [product.image]
//         : [];
//   }, [product]);

//   const outOfStock = !product || product.stock <= 0;
//   const maxQty = product ? Math.max(1, product.stock) : 1;
//   const atMax = cartQty >= maxQty;

//   const variantLabel = useMemo(() => {
//     const parts: string[] = [];
//     if (selectedColor) {
//       parts.push(
//         selectedColor.startsWith("#")
//           ? colorNameFromHex(selectedColor)
//           : selectedColor
//       );
//     }
//     if (selectedSize) parts.push(selectedSize);
//     return parts.join(" · ");
//   }, [selectedColor, selectedSize]);

//   const requireAuth = () => {
//     if (!authUid) {
//       router.push(`/sign-in?redirect=/products/${productId}`);
//       return false;
//     }
//     return true;
//   };

//   const handleAddToCart = async () => {
//     if (!product || outOfStock || busyCart) return;
//     if (!requireAuth()) return;

//     const remaining = Math.max(0, product.stock - cartQty);
//     if (remaining <= 0) return;

//     const toAdd = Math.min(qty, remaining);
//     if (toAdd <= 0) return;

//     setBusyCart(true);
//     try {
//       const variant = variantLabel || undefined;

//       const updated = await addToFirebaseCart(authUid!, {
//         productId: product.id,
//         name: product.name,
//         price: product.effectivePrice,
//         listPrice: product.listPrice,
//         discountPercent: product.hasDiscount
//           ? product.discountPercent
//           : undefined,
//         quantity: toAdd,
//         image: product.image || product.images[0] || "",
//         category: product.category,
//         leadTimeDays: product.leadTimeDays,
//         variant,
//       });

//       const line = (updated?.items || []).find(
//         (i) => i.productId === product.id
//       );
//       setCartQty(
//         line ? Math.max(0, Number(line.quantity || 0)) : cartQty + toAdd
//       );
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Add to cart failed:", err);
//     } finally {
//       setBusyCart(false);
//     }
//   };

//   const handleWishlist = async (e?: MouseEvent) => {
//     e?.preventDefault();
//     e?.stopPropagation();
//     if (!product || busyWish) return;
//     if (!requireAuth()) return;

//     setBusyWish(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid!, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid!, {
//           productId: product.id,
//           name: product.name,
//           price: product.effectivePrice,
//           image: product.image || product.images[0] || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed:", err);
//     } finally {
//       setBusyWish(false);
//     }
//   };

//   const handleCompare = (e?: MouseEvent) => {
//     e?.preventDefault();
//     e?.stopPropagation();
//     if (!product || busyCompare) return;

//     setCompareError("");
//     setBusyCompare(true);
//     try {
//       if (isInCompare(product.id)) {
//         removeFromCompare(product.id);
//         setInCompare(false);
//       } else {
//         const err = addToCompare({
//           id: product.id,
//           name: product.name,
//           category: product.category,
//           subcategory: product.subcategory || product.category,
//           price: product.effectivePrice,
//           listPrice: product.listPrice,
//           hasDiscount: product.hasDiscount,
//           discountPercent: product.discountPercent,
//           image: product.image || product.images[0] || "",
//           material: product.material,
//           finish: product.finish,
//           color: product.color || selectedColor,
//           dimensions: product.dimensions,
//           stock: product.stock,
//           warranty: product.warranty,
//           leadTime: product.leadTime,
//           leadTimeDays: product.leadTimeDays,
//           rating: product.rating,
//           reviewCount: product.reviewCount,
//         });
//         if (err) {
//           setCompareError(err);
//         } else {
//           setInCompare(true);
//         }
//       }
//     } finally {
//       setBusyCompare(false);
//     }
//   };

//   const onMainImageMove = (e: MouseEvent<HTMLDivElement>) => {
//     if (!mainImageRef.current) return;
//     const rect = mainImageRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setLensPos({
//       x: Math.min(100, Math.max(0, x)),
//       y: Math.min(100, Math.max(0, y)),
//     });
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-[#faf8f4]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (error || !product) {
//     return (
//       <main className="min-h-[60vh] bg-[#faf8f4]">
//         <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
//           <ShoppingBag size={36} className="mx-auto text-[#d4cdc2]" />
//           <h1 className="mt-4 text-xl font-bold text-[#1a1a1a]">
//             Product unavailable
//           </h1>
//           <p className="mt-2 text-sm text-[#6b6560]">
//             {error || "We could not find this product."}
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
//           >
//             Browse products
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const currentImage = images[activeImage] || product.image || "";

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[#8a847c] sm:mb-7 sm:text-sm">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span>/</span>
//           <Link href="/products" className="hover:text-[#1a1a1a]">
//             Products
//           </Link>
//           {product.category ? (
//             <>
//               <span>/</span>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="hover:text-[#1a1a1a]"
//               >
//                 {product.category}
//               </Link>
//             </>
//           ) : null}
//           <span>/</span>
//           <span className="line-clamp-1 font-medium text-[#1a1a1a]">
//             {product.name}
//           </span>
//         </nav>

//         <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Gallery */}
//           <div>
//             <div
//               ref={mainImageRef}
//               className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white sm:aspect-square"
//               onMouseEnter={() => setZoomOn(true)}
//               onMouseLeave={() => setZoomOn(false)}
//               onMouseMove={onMainImageMove}
//             >
//               {currentImage ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={currentImage}
//                   alt={product.name}
//                   className="h-full w-full object-cover"
//                   style={
//                     zoomOn
//                       ? {
//                           transformOrigin: `${lensPos.x}% ${lensPos.y}%`,
//                           transform: "scale(1.85)",
//                         }
//                       : undefined
//                   }
//                 />
//               ) : (
//                 <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                   <ShoppingBag size={40} />
//                 </div>
//               )}

//               {product.hasDiscount && (
//                 <span className="absolute left-3 top-3 z-10 rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[11px] font-semibold text-white">
//                   {Math.round(product.discountPercent)}% off
//                 </span>
//               )}

//               {/* Wishlist + Compare — top right, vertical */}
//               <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
//                 <button
//                   type="button"
//                   disabled={busyWish}
//                   onClick={(e) => void handleWishlist(e)}
//                   className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 ${
//                     inWishlist
//                       ? "text-[#c45c4a]"
//                       : "text-[#6b6560] hover:text-[#c45c4a]"
//                   }`}
//                   title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
//                   aria-label="Wishlist"
//                 >
//                   {busyWish ? (
//                     <Loader2 size={15} className="animate-spin" />
//                   ) : (
//                     <Heart
//                       size={15}
//                       className={inWishlist ? "fill-current" : ""}
//                       strokeWidth={1.75}
//                     />
//                   )}
//                 </button>

//                 <button
//                   type="button"
//                   disabled={busyCompare}
//                   onClick={(e) => handleCompare(e)}
//                   className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 ${
//                     inCompare
//                       ? "text-[#b8956c] ring-2 ring-[#b8956c]/40"
//                       : "text-[#6b6560] hover:text-[#1a1a1a]"
//                   }`}
//                   title={inCompare ? "Remove from compare" : "Add to compare"}
//                   aria-label="Compare"
//                 >
//                   {busyCompare ? (
//                     <Loader2 size={15} className="animate-spin" />
//                   ) : (
//                     <GitCompare size={15} strokeWidth={1.75} />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {images.length > 1 && (
//               <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
//                 {images.map((src, i) => (
//                   <button
//                     key={`${src}-${i}`}
//                     type="button"
//                     onClick={() => setActiveImage(i)}
//                     className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${
//                       i === activeImage
//                         ? "border-[#1a1a1a]"
//                         : "border-transparent opacity-80"
//                     }`}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={src}
//                       alt=""
//                       className="h-full w-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//             {images.length > 1 && (
//               <div className="mt-2 flex justify-center gap-2 sm:hidden">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) =>
//                       i === 0 ? images.length - 1 : i - 1
//                     )
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveImage((i) => (i + 1) % images.length)
//                   }
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Buy box */}
//           <div>
//             <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#b8956c]">
//               {product.category}
//               {product.subcategory ? ` · ${product.subcategory}` : ""}
//             </p>

//             <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
//               {product.name}
//             </h1>

//             {typeof product.rating === "number" && product.rating > 0 && (
//               <div className="mt-3 flex items-center gap-2">
//                 <StarRow rating={product.rating} size={15} />
//                 <span className="text-sm text-[#6b6560]">
//                   {product.rating.toFixed(1)}
//                   {product.reviewCount
//                     ? ` · ${product.reviewCount} reviews`
//                     : ""}
//                 </span>
//               </div>
//             )}

//             <div className="mt-4 flex flex-wrap items-baseline gap-2.5">
//               <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
//                 {formatCurrency(product.effectivePrice)}
//               </p>
//               {product.hasDiscount && (
//                 <>
//                   <p className="text-base text-[#8a847c] line-through">
//                     {formatCurrency(product.listPrice)}
//                   </p>
//                   <span className="rounded-full bg-[#f0ebe3] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
//                     Save {Math.round(product.discountPercent)}%
//                   </span>
//                 </>
//               )}
//             </div>

//             {product.description ? (
//               <p className="mt-4 text-sm leading-6 text-[#5c564e]">
//                 {product.description}
//               </p>
//             ) : null}

//             <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-[#e8e2d8] py-4 text-sm">
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Material</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.material || "—"}
//                 </dd>
//               </div>
//               <div>
//                 <dt className="text-xs text-[#8a847c]">Dimensions</dt>
//                 <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                   {product.dimensions || "—"}
//                 </dd>
//               </div>
//               {product.finish ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Finish</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.finish}
//                   </dd>
//                 </div>
//               ) : null}
//               {product.warranty ? (
//                 <div>
//                   <dt className="text-xs text-[#8a847c]">Warranty</dt>
//                   <dd className="mt-0.5 font-medium text-[#1a1a1a]">
//                     {product.warranty}
//                   </dd>
//                 </div>
//               ) : null}
//             </dl>

//             <p
//               className={`mt-4 text-sm font-medium ${
//                 outOfStock
//                   ? "text-red-600"
//                   : product.stock <= 3
//                     ? "text-amber-700"
//                     : "text-[#176b5b]"
//               }`}
//             >
//               {outOfStock
//                 ? "Out of stock"
//                 : product.stock <= 3
//                   ? `Only ${product.stock} left`
//                   : "In stock"}
//             </p>

//             {product.colors.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Colour
//                   {selectedColor ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       ·{" "}
//                       {selectedColor.startsWith("#")
//                         ? colorNameFromHex(selectedColor)
//                         : selectedColor}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.colors.map((c) => {
//                     const active = selectedColor === c;
//                     const isHex = c.startsWith("#");
//                     return (
//                       <button
//                         key={c}
//                         type="button"
//                         onClick={() => setSelectedColor(c)}
//                         title={isHex ? colorNameFromHex(c) : c}
//                         className={`h-9 w-9 rounded-full border-2 transition ${
//                           active
//                             ? "border-[#1a1a1a] ring-2 ring-[#1a1a1a]/20"
//                             : "border-[#e8e2d8] hover:border-[#c4b8a8]"
//                         }`}
//                         style={{
//                           backgroundColor: isHex ? c : "#e8e2d8",
//                         }}
//                         aria-label={`Colour ${isHex ? colorNameFromHex(c) : c}`}
//                         aria-pressed={active}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {product.sizes.length > 0 && (
//               <div className="mt-5">
//                 <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
//                   Size
//                   {selectedSize ? (
//                     <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
//                       · {selectedSize}
//                     </span>
//                   ) : null}
//                 </p>
//                 <div className="mt-2.5 flex flex-wrap gap-2">
//                   {product.sizes.map((s) => {
//                     const active = selectedSize === s;
//                     return (
//                       <button
//                         key={s}
//                         type="button"
//                         onClick={() => setSelectedSize(s)}
//                         className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
//                           active
//                             ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                             : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
//                         }`}
//                         aria-pressed={active}
//                       >
//                         {s}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Qty + Add to cart only */}
//             <div className="mt-6 flex flex-wrap items-center gap-2.5">
//               <div className="inline-flex h-11 items-center rounded-full border border-[#e8e2d8] bg-white">
//                 <button
//                   type="button"
//                   disabled={qty <= 1 || outOfStock}
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={15} />
//                 </button>
//                 <span className="min-w-[2rem] text-center text-sm font-semibold text-[#1a1a1a]">
//                   {qty}
//                 </span>
//                 <button
//                   type="button"
//                   disabled={qty >= maxQty || outOfStock}
//                   onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
//                   className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={15} />
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 disabled={outOfStock || busyCart || atMax}
//                 onClick={() => void handleAddToCart()}
//                 className={`inline-flex h-11 min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition sm:flex-none ${
//                   outOfStock || atMax
//                     ? "cursor-not-allowed bg-[#e8e2d8] text-[#8a847c]"
//                     : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
//                 }`}
//               >
//                 {busyCart ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : outOfStock ? (
//                   "Sold out"
//                 ) : atMax ? (
//                   "Max in cart"
//                 ) : cartQty > 0 ? (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add more
//                   </>
//                 ) : (
//                   <>
//                     <ShoppingBag size={16} />
//                     Add to cart
//                   </>
//                 )}
//               </button>
//             </div>

//             {compareError ? (
//               <p className="mt-2 text-xs font-medium text-[#c45c4a]">
//                 {compareError}
//               </p>
//             ) : null}

//             {cartQty > 0 && (
//               <p className="mt-2 text-xs text-[#176b5b]">
//                 {cartQty} in your cart
//                 {variantLabel ? ` · ${variantLabel}` : ""}
//                 {" · "}
//                 <Link href="/cart" className="font-semibold underline">
//                   View cart
//                 </Link>
//               </p>
//             )}

//             {inCompare && (
//               <p className="mt-1.5 text-xs text-[#6b6560]">
//                 In compare ·{" "}
//                 <Link
//                   href="/compare"
//                   className="font-semibold text-[#1a1a1a] underline"
//                 >
//                   View comparison
//                 </Link>
//               </p>
//             )}
//           </div>
//         </section>

//         <div className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//           <ProductReviews
//             productId={product.id}
//             productName={product.name}
//           />
//         </div>

//         {related.length > 0 && (
//           <section className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
//             <div className="flex items-end justify-between gap-4">
//               <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
//                 You may also like
//               </h2>
//               <Link
//                 href={`/products?category=${encodeURIComponent(product.category)}`}
//                 className="text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
//               >
//                 View all
//               </Link>
//             </div>
//             <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
//               {related.map((r) => (
//                 <Link
//                   key={r.id}
//                   href={`/products/${r.id}`}
//                   className="group overflow-hidden rounded-xl border border-[#e8e2d8] bg-white transition hover:border-[#c4b8a8]"
//                 >
//                   <div className="aspect-[4/5] overflow-hidden bg-[#f5f0e8]">
//                     {r.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={r.image}
//                         alt={r.name}
//                         className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                         <ShoppingBag size={28} />
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
//                       {r.category}
//                     </p>
//                     <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
//                       {r.name}
//                     </p>
//                     {typeof r.rating === "number" && r.rating > 0 && (
//                       <div className="mt-1">
//                         <StarRow rating={r.rating} size={11} />
//                       </div>
//                     )}
//                     <div className="mt-1.5 flex items-baseline gap-1.5">
//                       <p className="text-sm font-semibold text-[#1a1a1a]">
//                         {formatCurrency(r.price)}
//                       </p>
//                       {r.hasDiscount && (
//                         <p className="text-xs text-[#8a847c] line-through">
//                           {formatCurrency(r.listPrice)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GitCompare,
  Heart,
  Loader2,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  addToCart as addToFirebaseCart,
  getCart,
  getProductAgeDays,
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
  isInCompare,
  removeFromCompare,
} from "@/services/compareService";
import ProductReviews from "@/components/product/ProductReviews";
import { colorNameFromHex } from "@/lib/productOptions";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  listPrice: number;
  discountPercent: number;
  effectivePrice: number;
  hasDiscount: boolean;
  ageDays: number;
  material: string;
  dimensions: string;
  finish?: string;
  color?: string;
  colors: string[];
  sizes: string[];
  warranty?: string;
  stock: number;
  image?: string;
  images: string[];
  leadTime?: string;
  leadTimeDays?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  active?: boolean;
}

interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  listPrice: number;
  hasDiscount: boolean;
  image?: string;
  rating?: number;
}

/** Flipkart-style zoom factor for the side panel */
const ZOOM = 2.4;

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
  if (typeof value === "string") {
    const m = value.match(/(\d+)/);
    if (m) {
      const n = Number(m[1]);
      if (Number.isFinite(n) && n > 0) return Math.min(365, Math.floor(n));
    }
  }
  return fallback;
}

function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < full ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = (params?.id as string) || "";

  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<RelatedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [authUid, setAuthUid] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);

  const [qty, setQty] = useState(1);
  const [cartQty, setCartQty] = useState(0);
  const [inWishlist, setInWishlist] = useState(false);
  const [inCompare, setInCompare] = useState(false);
  const [busyCart, setBusyCart] = useState(false);
  const [busyWish, setBusyWish] = useState(false);
  const [busyCompare, setBusyCompare] = useState(false);
  const [compareError, setCompareError] = useState("");

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [activeImage, setActiveImage] = useState(0);
  const [zoomOn, setZoomOn] = useState(false);
  /** Cursor position as % of image box (0–100) */
  const [lensPct, setLensPct] = useState({ x: 50, y: 50 });
  /** Lens box size in px (half of viewport under cursor) */
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });
  const mainImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      setError("Product not found.");
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const snap = await getDoc(doc(db, "furniture_products", productId));
        if (cancelled) return;

        if (!snap.exists()) {
          setProduct(null);
          setError("This product is no longer available.");
          setLoading(false);
          return;
        }

        const data = snap.data() || {};
        const status = String(data.status || "In Stock");
        const active = data.active !== false && status !== "Inactive";

        if (!active) {
          setProduct(null);
          setError("This product is no longer available.");
          setLoading(false);
          return;
        }

        const listPrice = Number(
          data.sellingPrice ?? data.price ?? data.listPrice ?? 0
        );
        const discountPercent = Number(data.discountPercent || 0);
        const ageDays = getProductAgeDays(data);
        const ageEligible = canApplyAgeingDiscount(data);
        const effectivePrice = getEffectiveSellingPrice(
          listPrice,
          discountPercent,
          ageEligible
        );
        const hasDiscount =
          ageEligible && discountPercent > 0 && effectivePrice < listPrice;

        const imgList: string[] = [];
        if (Array.isArray(data.images)) {
          data.images.forEach((u: unknown) => {
            const s = String(u || "").trim();
            if (s) imgList.push(s);
          });
        }
        const primary =
          String(data.imageUrl || data.image || "").trim() || imgList[0] || "";
        if (primary && !imgList.includes(primary)) imgList.unshift(primary);

        const colors: string[] = Array.isArray(data.colors)
          ? (data.colors as unknown[]).map(String).filter(Boolean)
          : data.color
            ? [String(data.color)]
            : [];

        const sizes: string[] = Array.isArray(data.sizes)
          ? (data.sizes as unknown[]).map(String).filter(Boolean)
          : [];

        const mapped: Product = {
          id: snap.id,
          name: String(data.name || "Untitled"),
          category: String(data.category || ""),
          subcategory: String(data.subcategory || data.subCategory || ""),
          description: String(data.description || ""),
          listPrice,
          discountPercent,
          effectivePrice,
          hasDiscount,
          ageDays,
          material: String(data.material || "—"),
          dimensions: String(data.dimensions || "—"),
          finish: data.finish ? String(data.finish) : undefined,
          color: data.color ? String(data.color) : undefined,
          colors,
          sizes,
          warranty: data.warranty ? String(data.warranty) : undefined,
          stock: Math.max(0, Number(data.stock || 0)),
          image: primary || undefined,
          images: imgList.length ? imgList : primary ? [primary] : [],
          leadTime: data.leadTime ? String(data.leadTime) : undefined,
          leadTimeDays: parseLeadTimeDays(data.leadTimeDays ?? data.leadTime),
          rating:
            typeof data.rating === "number" && data.rating > 0
              ? data.rating
              : undefined,
          reviewCount:
            typeof data.reviewCount === "number"
              ? data.reviewCount
              : undefined,
          featured: Boolean(data.featured),
          active: true,
        };

        setProduct(mapped);
        setSelectedColor(colors[0] || "");
        setSelectedSize(sizes[0] || "");
        setActiveImage(0);
        setQty(1);
        setInCompare(isInCompare(mapped.id));
      } catch (err) {
        console.error("Product load failed:", err);
        if (!cancelled) {
          setError("Could not load this product. Please try again.");
          setProduct(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [productId]);

  useEffect(() => {
    if (!authReady || !product) return;

    let cancelled = false;

    async function syncUserState() {
      if (!cancelled) {
        setInCompare(isInCompare(product!.id));
      }

      if (!authUid) {
        if (!cancelled) {
          setCartQty(0);
          setInWishlist(false);
        }
        return;
      }

      try {
        const [cart, wish] = await Promise.all([
          getCart(authUid),
          getWishlist(authUid),
        ]);
        if (cancelled) return;

        const line = (cart?.items || []).find(
          (i) => i.productId === product!.id
        );
        setCartQty(line ? Math.max(0, Number(line.quantity || 0)) : 0);

        const wishItems = Array.isArray(wish)
          ? wish
          : (wish as { items?: { productId?: string; id?: string }[] })
              ?.items || [];
        setInWishlist(
          wishItems.some(
            (w) => w.productId === product!.id || w.id === product!.id
          )
        );
      } catch (err) {
        console.error("User state sync failed:", err);
      }
    }

    void syncUserState();

    const onCart = () => void syncUserState();
    const onWish = () => void syncUserState();
    const onCompare = () => {
      if (product) setInCompare(isInCompare(product.id));
    };

    window.addEventListener("cartUpdated", onCart);
    window.addEventListener("wishlistUpdated", onWish);
    window.addEventListener("compareUpdated", onCompare);

    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", onCart);
      window.removeEventListener("wishlistUpdated", onWish);
      window.removeEventListener("compareUpdated", onCompare);
    };
  }, [authUid, authReady, product]);

  useEffect(() => {
    if (!product) return;
    let cancelled = false;

    async function loadRelated() {
      try {
        const q = query(
          collection(db, "furniture_products"),
          where("category", "==", product!.category),
          limit(8)
        );
        const snap = await getDocs(q);
        if (cancelled) return;

        const rows: RelatedProduct[] = [];
        snap.docs.forEach((d) => {
          if (d.id === product!.id) return;
          const data = d.data() || {};
          const status = String(data.status || "In Stock");
          const active = data.active !== false && status !== "Inactive";
          if (!active) return;

          const listPrice = Number(
            data.sellingPrice ?? data.price ?? data.listPrice ?? 0
          );
          const discountPercent = Number(data.discountPercent || 0);
          const ageEligible = canApplyAgeingDiscount(data);
          const price = getEffectiveSellingPrice(
            listPrice,
            discountPercent,
            ageEligible
          );

          rows.push({
            id: d.id,
            name: String(data.name || "Untitled"),
            category: String(data.category || ""),
            price,
            listPrice,
            hasDiscount:
              ageEligible && discountPercent > 0 && price < listPrice,
            image:
              String(data.imageUrl || data.image || "").trim() ||
              (Array.isArray(data.images) && data.images[0]
                ? String(data.images[0])
                : undefined),
            rating:
              typeof data.rating === "number" && data.rating > 0
                ? data.rating
                : undefined,
          });
        });

        setRelated(rows.slice(0, 4));
      } catch (err) {
        console.error("Related products failed:", err);
      }
    }

    void loadRelated();
    return () => {
      cancelled = true;
    };
  }, [product]);

  const images = useMemo(() => {
    if (!product) return [];
    return product.images.length
      ? product.images
      : product.image
        ? [product.image]
        : [];
  }, [product]);

  const outOfStock = !product || product.stock <= 0;
  const maxQty = product ? Math.max(1, product.stock) : 1;
  const atMax = cartQty >= maxQty;

  const variantLabel = useMemo(() => {
    const parts: string[] = [];
    if (selectedColor) {
      parts.push(
        selectedColor.startsWith("#")
          ? colorNameFromHex(selectedColor)
          : selectedColor
      );
    }
    if (selectedSize) parts.push(selectedSize);
    return parts.join(" · ");
  }, [selectedColor, selectedSize]);

  const requireAuth = () => {
    if (!authUid) {
      router.push(`/sign-in?redirect=/products/${productId}`);
      return false;
    }
    return true;
  };

  const handleAddToCart = async () => {
    if (!product || outOfStock || busyCart) return;
    if (!requireAuth()) return;

    const remaining = Math.max(0, product.stock - cartQty);
    if (remaining <= 0) return;

    const toAdd = Math.min(qty, remaining);
    if (toAdd <= 0) return;

    setBusyCart(true);
    try {
      const variant = variantLabel || undefined;

      const updated = await addToFirebaseCart(authUid!, {
        productId: product.id,
        name: product.name,
        price: product.effectivePrice,
        listPrice: product.listPrice,
        discountPercent: product.hasDiscount
          ? product.discountPercent
          : undefined,
        quantity: toAdd,
        image: product.image || product.images[0] || "",
        category: product.category,
        leadTimeDays: product.leadTimeDays,
        variant,
      });

      const line = (updated?.items || []).find(
        (i) => i.productId === product.id
      );
      setCartQty(
        line ? Math.max(0, Number(line.quantity || 0)) : cartQty + toAdd
      );
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Add to cart failed:", err);
    } finally {
      setBusyCart(false);
    }
  };

  const handleWishlist = async (e?: MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!product || busyWish) return;
    if (!requireAuth()) return;

    setBusyWish(true);
    try {
      if (inWishlist) {
        await removeFromWishlist(authUid!, product.id);
        setInWishlist(false);
      } else {
        await addToWishlist(authUid!, {
          productId: product.id,
          name: product.name,
          price: product.effectivePrice,
          image: product.image || product.images[0] || "",
          category: product.category,
        });
        setInWishlist(true);
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist toggle failed:", err);
    } finally {
      setBusyWish(false);
    }
  };

  const handleCompare = (e?: MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!product || busyCompare) return;

    setCompareError("");
    setBusyCompare(true);
    try {
      if (isInCompare(product.id)) {
        removeFromCompare(product.id);
        setInCompare(false);
      } else {
        const err = addToCompare({
          id: product.id,
          name: product.name,
          category: product.category,
          subcategory: product.subcategory || product.category,
          price: product.effectivePrice,
          listPrice: product.listPrice,
          hasDiscount: product.hasDiscount,
          discountPercent: product.discountPercent,
          image: product.image || product.images[0] || "",
          material: product.material,
          finish: product.finish,
          color: product.color || selectedColor,
          dimensions: product.dimensions,
          stock: product.stock,
          warranty: product.warranty,
          leadTime: product.leadTime,
          leadTimeDays: product.leadTimeDays,
          rating: product.rating,
          reviewCount: product.reviewCount,
        });
        if (err) {
          setCompareError(err);
        } else {
          setInCompare(true);
        }
      }
    } finally {
      setBusyCompare(false);
    }
  };

  const onMainImageMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = mainImageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPct({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
    // Lens ≈ 1/ZOOM of the image so the panel fills 100%
    setBoxSize({
      w: rect.width / ZOOM,
      h: rect.height / ZOOM,
    });
  };

  /** Lens top-left in px, clamped so it stays inside the image */
  const lensStyle = useMemo(() => {
    const el = mainImageRef.current;
    if (!el || boxSize.w <= 0) return { left: 0, top: 0 };
    const rect = el.getBoundingClientRect();
    let left = (lensPct.x / 100) * rect.width - boxSize.w / 2;
    let top = (lensPct.y / 100) * rect.height - boxSize.h / 2;
    left = Math.max(0, Math.min(left, rect.width - boxSize.w));
    top = Math.max(0, Math.min(top, rect.height - boxSize.h));
    return { left, top };
  }, [lensPct, boxSize]);

  /** Background position for the zoom panel */
  const zoomBgPos = useMemo(() => {
    const el = mainImageRef.current;
    if (!el || boxSize.w <= 0) return "50% 50%";
    const rect = el.getBoundingClientRect();
    const x =
      ((lensStyle.left + boxSize.w / 2) / rect.width) * 100;
    const y =
      ((lensStyle.top + boxSize.h / 2) / rect.height) * 100;
    return `${x}% ${y}%`;
  }, [lensStyle, boxSize]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#faf8f4]">
        <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-[60vh] bg-[#faf8f4]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ShoppingBag size={36} className="mx-auto text-[#d4cdc2]" />
          <h1 className="mt-4 text-xl font-bold text-[#1a1a1a]">
            Product unavailable
          </h1>
          <p className="mt-2 text-sm text-[#6b6560]">
            {error || "We could not find this product."}
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  const currentImage = images[activeImage] || product.image || "";

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-[#8a847c] sm:mb-7 sm:text-sm">
          <Link href="/" className="hover:text-[#1a1a1a]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#1a1a1a]">
            Products
          </Link>
          {product.category ? (
            <>
              <span>/</span>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="hover:text-[#1a1a1a]"
              >
                {product.category}
              </Link>
            </>
          ) : null}
          <span>/</span>
          <span className="line-clamp-1 font-medium text-[#1a1a1a]">
            {product.name}
          </span>
        </nav>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery + Flipkart zoom */}
          <div className="relative">
            <div
              ref={mainImageRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white sm:aspect-square lg:cursor-crosshair"
              onMouseEnter={() => {
                if (window.matchMedia("(min-width: 1024px)").matches) {
                  setZoomOn(true);
                }
              }}
              onMouseLeave={() => setZoomOn(false)}
              onMouseMove={onMainImageMove}
            >
              {currentImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentImage}
                  alt={product.name}
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[#d4cdc2]">
                  <ShoppingBag size={40} />
                </div>
              )}

              {/* Lens rectangle (desktop only) */}
              {zoomOn && currentImage && boxSize.w > 0 ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute z-[5] hidden border border-white/80 bg-white/25 shadow-sm backdrop-blur-[1px] lg:block"
                  style={{
                    width: boxSize.w,
                    height: boxSize.h,
                    left: lensStyle.left,
                    top: lensStyle.top,
                  }}
                />
              ) : null}

              {product.hasDiscount && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[11px] font-semibold text-white">
                  {Math.round(product.discountPercent)}% off
                </span>
              )}

              <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
                <button
                  type="button"
                  disabled={busyWish}
                  onClick={(e) => void handleWishlist(e)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 ${
                    inWishlist
                      ? "text-[#c45c4a]"
                      : "text-[#6b6560] hover:text-[#c45c4a]"
                  }`}
                  title={
                    inWishlist ? "Remove from wishlist" : "Add to wishlist"
                  }
                  aria-label="Wishlist"
                >
                  {busyWish ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Heart
                      size={15}
                      className={inWishlist ? "fill-current" : ""}
                      strokeWidth={1.75}
                    />
                  )}
                </button>

                <button
                  type="button"
                  disabled={busyCompare}
                  onClick={(e) => handleCompare(e)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 ${
                    inCompare
                      ? "text-[#b8956c] ring-2 ring-[#b8956c]/40"
                      : "text-[#6b6560] hover:text-[#1a1a1a]"
                  }`}
                  title={inCompare ? "Remove from compare" : "Add to compare"}
                  aria-label="Compare"
                >
                  {busyCompare ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <GitCompare size={15} strokeWidth={1.75} />
                  )}
                </button>
              </div>
            </div>

            {/* Separate zoom window — desktop only, beside gallery */}
            {zoomOn && currentImage ? (
              <div
                className="pointer-events-none absolute left-[calc(100%+1rem)] top-0 z-30 hidden h-[min(480px,70vh)] w-[min(400px,48vw)] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white shadow-[0_20px_60px_rgba(26,26,26,0.15)] lg:block"
                aria-hidden
              >
                <div
                  className="h-full w-full bg-no-repeat"
                  style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: `${ZOOM * 100}%`,
                    backgroundPosition: zoomBgPos,
                  }}
                />
              </div>
            ) : null}

            {images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    onClick={() => {
                      setActiveImage(i);
                      setZoomOn(false);
                    }}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-20 ${
                      i === activeImage
                        ? "border-[#1a1a1a]"
                        : "border-transparent opacity-80"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {images.length > 1 && (
              <div className="mt-2 flex justify-center gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((i) =>
                      i === 0 ? images.length - 1 : i - 1
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((i) => (i + 1) % images.length)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Buy box */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#b8956c]">
              {product.category}
              {product.subcategory ? ` · ${product.subcategory}` : ""}
            </p>

            <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
              {product.name}
            </h1>

            {typeof product.rating === "number" && product.rating > 0 && (
              <div className="mt-3 flex items-center gap-2">
                <StarRow rating={product.rating} size={15} />
                <span className="text-sm text-[#6b6560]">
                  {product.rating.toFixed(1)}
                  {product.reviewCount
                    ? ` · ${product.reviewCount} reviews`
                    : ""}
                </span>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-baseline gap-2.5">
              <p className="text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">
                {formatCurrency(product.effectivePrice)}
              </p>
              {product.hasDiscount && (
                <>
                  <p className="text-base text-[#8a847c] line-through">
                    {formatCurrency(product.listPrice)}
                  </p>
                  <span className="rounded-full bg-[#f0ebe3] px-2 py-0.5 text-xs font-semibold text-[#8b7355]">
                    Save {Math.round(product.discountPercent)}%
                  </span>
                </>
              )}
            </div>

            {product.description ? (
              <p className="mt-4 text-sm leading-6 text-[#5c564e]">
                {product.description}
              </p>
            ) : null}

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-[#e8e2d8] py-4 text-sm">
              <div>
                <dt className="text-xs text-[#8a847c]">Material</dt>
                <dd className="mt-0.5 font-medium text-[#1a1a1a]">
                  {product.material || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#8a847c]">Dimensions</dt>
                <dd className="mt-0.5 font-medium text-[#1a1a1a]">
                  {product.dimensions || "—"}
                </dd>
              </div>
              {product.finish ? (
                <div>
                  <dt className="text-xs text-[#8a847c]">Finish</dt>
                  <dd className="mt-0.5 font-medium text-[#1a1a1a]">
                    {product.finish}
                  </dd>
                </div>
              ) : null}
              {product.warranty ? (
                <div>
                  <dt className="text-xs text-[#8a847c]">Warranty</dt>
                  <dd className="mt-0.5 font-medium text-[#1a1a1a]">
                    {product.warranty}
                  </dd>
                </div>
              ) : null}
            </dl>

            <p
              className={`mt-4 text-sm font-medium ${
                outOfStock
                  ? "text-red-600"
                  : product.stock <= 3
                    ? "text-amber-700"
                    : "text-[#176b5b]"
              }`}
            >
              {outOfStock
                ? "Out of stock"
                : product.stock <= 3
                  ? `Only ${product.stock} left`
                  : "In stock"}
            </p>

            {product.colors.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
                  Colour
                  {selectedColor ? (
                    <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
                      ·{" "}
                      {selectedColor.startsWith("#")
                        ? colorNameFromHex(selectedColor)
                        : selectedColor}
                    </span>
                  ) : null}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.colors.map((c) => {
                    const active = selectedColor === c;
                    const isHex = c.startsWith("#");
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        title={isHex ? colorNameFromHex(c) : c}
                        className={`h-9 w-9 rounded-full border-2 transition ${
                          active
                            ? "border-[#1a1a1a] ring-2 ring-[#1a1a1a]/20"
                            : "border-[#e8e2d8] hover:border-[#c4b8a8]"
                        }`}
                        style={{
                          backgroundColor: isHex ? c : "#e8e2d8",
                        }}
                        aria-label={`Colour ${isHex ? colorNameFromHex(c) : c}`}
                        aria-pressed={active}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {product.sizes.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8a847c]">
                  Size
                  {selectedSize ? (
                    <span className="ml-2 normal-case tracking-normal text-[#5c564e]">
                      · {selectedSize}
                    </span>
                  ) : null}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.sizes.map((s) => {
                    const active = selectedSize === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                          active
                            ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                            : "border-[#e8e2d8] bg-white text-[#5c564e] hover:border-[#c4b8a8]"
                        }`}
                        aria-pressed={active}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex h-11 items-center rounded-full border border-[#e8e2d8] bg-white">
                <button
                  type="button"
                  disabled={qty <= 1 || outOfStock}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="min-w-[2rem] text-center text-sm font-semibold text-[#1a1a1a]">
                  {qty}
                </span>
                <button
                  type="button"
                  disabled={qty >= maxQty || outOfStock}
                  onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
                  className="flex h-11 w-10 items-center justify-center text-[#1a1a1a] disabled:opacity-30"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                disabled={outOfStock || busyCart || atMax}
                onClick={() => void handleAddToCart()}
                className={`inline-flex h-11 min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition sm:flex-none ${
                  outOfStock || atMax
                    ? "cursor-not-allowed bg-[#e8e2d8] text-[#8a847c]"
                    : "bg-[#1a1a1a] text-white hover:bg-[#2c2a26]"
                }`}
              >
                {busyCart ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : outOfStock ? (
                  "Sold out"
                ) : atMax ? (
                  "Max in cart"
                ) : cartQty > 0 ? (
                  <>
                    <ShoppingBag size={16} />
                    Add more
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to cart
                  </>
                )}
              </button>
            </div>

            {compareError ? (
              <p className="mt-2 text-xs font-medium text-[#c45c4a]">
                {compareError}
              </p>
            ) : null}

            {cartQty > 0 && (
              <p className="mt-2 text-xs text-[#176b5b]">
                {cartQty} in your cart
                {variantLabel ? ` · ${variantLabel}` : ""}
                {" · "}
                <Link href="/cart" className="font-semibold underline">
                  View cart
                </Link>
              </p>
            )}

            {inCompare && (
              <p className="mt-1.5 text-xs text-[#6b6560]">
                In compare ·{" "}
                <Link
                  href="/compare"
                  className="font-semibold text-[#1a1a1a] underline"
                >
                  View comparison
                </Link>
              </p>
            )}
          </div>
        </section>

        <div className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
          <ProductReviews
            productId={product.id}
            productName={product.name}
          />
        </div>

        {related.length > 0 && (
          <section className="mt-12 border-t border-[#e8e2d8] pt-10 sm:mt-14 sm:pt-12">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
                You may also like
              </h2>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
              >
                View all
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/products/${r.id}`}
                  className="group overflow-hidden rounded-xl border border-[#e8e2d8] bg-white transition hover:border-[#c4b8a8]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#f5f0e8]">
                    {r.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.image}
                        alt={r.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#d4cdc2]">
                        <ShoppingBag size={28} />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-wide text-[#b8956c]">
                      {r.category}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-sm font-semibold text-[#1a1a1a]">
                      {r.name}
                    </p>
                    {typeof r.rating === "number" && r.rating > 0 && (
                      <div className="mt-1">
                        <StarRow rating={r.rating} size={11} />
                      </div>
                    )}
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        {formatCurrency(r.price)}
                      </p>
                      {r.hasDiscount && (
                        <p className="text-xs text-[#8a847c] line-through">
                          {formatCurrency(r.listPrice)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
