// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
// } from "lucide-react";

// interface CartItem {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
//   image?: string;
// }

// const INITIAL_CART: CartItem[] = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     price: 54900,
//     quantity: 1,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     price: 30000,
//     quantity: 1,
//   },
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function CartPage() {
//   const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

//   const updateQuantity = (
//     id: string,
//     change: number
//   ) => {
//     setItems((current) =>
//       current
//         .map((item) => {
//           if (item.id !== id) return item;

//           return {
//             ...item,
//             quantity: Math.max(1, item.quantity + change),
//           };
//         })
//     );
//   };

//   const removeItem = (id: string) => {
//     setItems((current) =>
//       current.filter((item) => item.id !== id)
//     );
//   };

//   const subtotal = useMemo(
//     () =>
//       items.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//     [items]
//   );

//   const delivery = subtotal > 0 ? 0 : 0;
//   const total = subtotal + delivery;

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link
//             href="/"
//             className="transition hover:text-slate-900"
//           >
//             Home
//           </Link>

//           <span>/</span>

//           <span className="font-medium text-slate-800">
//             Cart
//           </span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>

//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>

//           <p className="mt-2 text-sm text-slate-500">
//             Review your selected furniture before checkout.
//           </p>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             {/* Cart items */}
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     Cart items
//                   </h2>

//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce(
//                       (count, item) =>
//                         count + item.quantity,
//                       0
//                     )}{" "}
//                     item
//                     {items.reduce(
//                       (count, item) =>
//                         count + item.quantity,
//                       0
//                     ) !== 1
//                       ? "s"
//                       : ""}
//                   </p>
//                 </div>

//                 <ShoppingBag
//                   size={19}
//                   className="text-slate-400"
//                 />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={item.id}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       {/* Product image placeholder */}
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         <ShoppingBag size={27} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category}
//                             </p>

//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>

//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() =>
//                               removeItem(item.id)
//                             }
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 updateQuantity(
//                                   item.id,
//                                   -1
//                                 )
//                               }
//                               disabled={item.quantity <= 1}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>

//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>

//                             <button
//                               type="button"
//                               onClick={() =>
//                                 updateQuantity(
//                                   item.id,
//                                   1
//                                 )
//                               }
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(
//                               item.price * item.quantity
//                             )}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             {/* Summary */}
//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">
//                     Subtotal
//                   </span>

//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">
//                     Delivery
//                   </span>

//                   <span className="font-semibold text-emerald-600">
//                     Free
//                   </span>
//                 </div>

//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">
//                       Total
//                     </span>

//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if
//                   applicable, will be shown at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           /* Empty cart */
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>

//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>

//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore
//               our furniture collection and find something
//               that fits your space.
//             </p>

//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem,
// } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   // Resolve logged-in user + load cart
//   useEffect(() => {
//     const current = getLoggedInUser();
//     setUser(current);

//     if (!current) {
//       setItems([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const cart = await getCart(current!.email);
//         if (!cancelled) {
//           setItems(cart?.items || []);
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!user) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     // Optimistic UI
//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         user.email,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(cart.items);
//     } catch (err) {
//       console.error(err);
//       // Reload on failure
//       const cart = await getCart(user.email);
//       setItems(cart?.items || []);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!user) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         user.email,
//         item.productId,
//         item.variant
//       );
//       setItems(cart.items);
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(cart?.items || []);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   // Not logged in
//   if (!user) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="transition hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               Your cart is saved per account. Sign in to see items you added
//               earlier, or continue shopping after logging in.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="transition hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Signed in as <span className="font-medium text-slate-700">{user.email}</span>
//           </p>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             {/* Cart items */}
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             {/* Summary */}
//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">Total</span>
//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if applicable, will be shown
//                   at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore our furniture
//               collection and find something that fits your space.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   addToCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// function loadLocalCart(): CartItem[] {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (!Array.isArray(parsed)) return [];
//     return parsed.map((item: Record<string, unknown>) => ({
//       id: String(item.id || item.productId || ""),
//       productId: String(item.productId || item.id || ""),
//       name: String(item.name || "Product"),
//       category: item.category ? String(item.category) : "",
//       price: Number(item.price || 0),
//       quantity: Math.max(1, Number(item.quantity || 1)),
//       image: item.image ? String(item.image) : "",
//       variant: item.variant ? String(item.variant) : undefined,
//     }));
//   } catch {
//     return [];
//   }
// }

// function saveLocalCart(items: CartItem[]) {
//   const payload = items.map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: item.price,
//     quantity: item.quantity,
//     image: item.image || "",
//     variant: item.variant,
//   }));
//   localStorage.setItem("cart", JSON.stringify(payload));
//   window.dispatchEvent(new Event("cartUpdated"));
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId,
//     productId: item.productId,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     const current = getLoggedInUser();
//     setUser(current);

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const localItems = loadLocalCart();

//         if (!current) {
//           // Guest: localStorage only
//           if (!cancelled) {
//             setItems(localItems);
//           }
//           return;
//         }

//         // Logged in: Firebase cart
//         let cart = await getCart(current.email);
//         let firebaseItems = mapFirebaseItems(cart?.items || []);

//         // Merge guest localStorage into Firebase (once)
//         if (localItems.length > 0) {
//           for (const item of localItems) {
//             await addToCart(current.email, {
//               productId: item.productId || item.id,
//               name: item.name,
//               price: item.price,
//               quantity: item.quantity,
//               image: item.image,
//               category: item.category,
//               variant: item.variant,
//             });
//           }
//           localStorage.removeItem("cart");
//           cart = await getCart(current.email);
//           firebaseItems = mapFirebaseItems(cart?.items || []);
//         }

//         if (!cancelled) {
//           setItems(firebaseItems);
//           // Keep header badge in sync
//           saveLocalCart(firebaseItems);
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) {
//           setItems(loadLocalCart());
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     const optimistic = items.map((i) =>
//       i.productId === item.productId && i.variant === item.variant
//         ? { ...i, quantity: nextQty }
//         : i
//     );
//     setItems(optimistic);
//     saveLocalCart(optimistic);

//     try {
//       if (user) {
//         const cart = await updateCartItem(
//           user.email,
//           item.productId,
//           nextQty,
//           item.variant
//         );
//         const mapped = mapFirebaseItems(cart.items);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } catch (err) {
//       console.error(err);
//       if (user) {
//         const cart = await getCart(user.email);
//         const mapped = mapFirebaseItems(cart?.items || []);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     setUpdating(true);

//     const optimistic = items.filter(
//       (i) => !(i.productId === item.productId && i.variant === item.variant)
//     );
//     setItems(optimistic);
//     saveLocalCart(optimistic);

//     try {
//       if (user) {
//         const cart = await removeFromCart(
//           user.email,
//           item.productId,
//           item.variant
//         );
//         const mapped = mapFirebaseItems(cart.items);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } catch (err) {
//       console.error(err);
//       if (user) {
//         const cart = await getCart(user.email);
//         const mapped = mapFirebaseItems(cart?.items || []);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="transition hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {user ? (
//             <p className="mt-2 text-sm text-slate-500">
//               Signed in as{" "}
//               <span className="font-medium text-slate-700">{user.email}</span>
//             </p>
//           ) : (
//             <p className="mt-2 text-sm text-slate-500">
//               Guest cart ·{" "}
//               <Link href="/sign-in" className="font-semibold text-[#176b5b] hover:underline">
//                 Sign in
//               </Link>{" "}
//               to save your cart across devices
//             </p>
//           )}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">Total</span>
//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if applicable, will be shown
//                   at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore our furniture
//               collection and find something that fits your space.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId,
//     productId: item.productId,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     // Clear old localStorage cart once
//     try {
//       localStorage.removeItem("cart");
//     } catch {
//       /* ignore */
//     }

//     const current = getLoggedInUser();
//     setUser(current);

//     if (!current) {
//       setItems([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const cart = await getCart(current!.email);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!user) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         user.email,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!user) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         user.email,
//         item.productId,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!user) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {/* <p className="mt-2 text-sm text-slate-500">
//             Signed in as{" "}
//             <span className="font-medium text-slate-700">{user.email}</span>
//           </p> */}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4 flex justify-between">
//                   <span className="text-sm font-semibold text-slate-900">Total</span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setUserEmail(user.email || "");
//       setLoading(true);

//       try {
//         // IMPORTANT: same key as checkout — Auth UID
//         const cart = await getCart(user.uid);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         userId,
//         item.productId,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-semibold text-slate-900">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setUserEmail(user.email || "");
//       setLoading(true);

//       try {
//         const cart = await getCart(user.uid);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(userId, item.productId, item.variant);
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {/* {userEmail && (
//             <p className="mt-2 text-sm text-slate-500">
//               Signed in as{" "}
//               <span className="font-medium text-slate-700">{userEmail}</span>
//             </p>
//           )} */}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-semibold text-slate-900">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
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
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setUserEmail(user.email || "");
//       setLoading(true);

//       try {
//         const cart = await getCart(user.uid);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(userId, item.productId, item.variant);
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;
//   const itemCount = items.reduce((c, i) => c + i.quantity, 0);

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//           <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 sm:mb-5 sm:text-sm">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 sm:h-16 sm:w-16">
//               <ShoppingBag size={26} />
//             </div>
//             <h2 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8] pb-28 lg:pb-0">
//       <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 sm:mb-5 sm:text-sm">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-5 sm:mb-8">
//           <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
//             Shopping cart
//           </p>
//           <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
//             Your Cart
//           </h1>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-6">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3 sm:px-6 sm:py-4">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     Cart items
//                   </h2>
//                   <p className="mt-0.5 text-xs text-slate-500">
//                     {itemCount} item{itemCount !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={18} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-3 sm:p-6"
//                   >
//                     <div className="flex gap-3 sm:gap-4">
//                       <Link
//                         href={`/products/${item.productId}`}
//                         className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28"
//                       >
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={24} className="sm:h-7 sm:w-7" />
//                         )}
//                       </Link>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex items-start justify-between gap-2">
//                           <div className="min-w-0">
//                             <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[11px]">
//                               {item.category || "Furniture"}
//                             </p>
//                             <Link href={`/products/${item.productId}`}>
//                               <h3 className="mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-slate-900 sm:mt-1 sm:text-base">
//                                 {item.name}
//                               </h3>
//                             </Link>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                             aria-label="Remove item"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-9 items-center justify-center border-x border-slate-200 px-1.5 text-sm font-semibold text-slate-800 sm:min-w-10 sm:px-2">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-3 py-3 sm:px-6 sm:py-4">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             {/* Order summary — desktop sidebar */}
//             <aside className="hidden h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6 lg:block">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-semibold text-slate-900">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>

//             {/* Mobile order summary card */}
//             <div className="rounded-xl border border-slate-200 bg-white p-4 lg:hidden">
//               <h2 className="text-sm font-bold text-slate-900">
//                 Order summary
//               </h2>
//               <div className="mt-3 space-y-2.5 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-2.5">
//                   <span className="font-semibold text-slate-900">Total</span>
//                   <span className="text-lg font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>

//       {/* Sticky checkout bar — mobile only */}
//       {items.length > 0 && (
//         <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
//           <div className="mx-auto flex max-w-6xl items-center gap-3">
//             <div className="min-w-0 flex-1">
//               <p className="text-[10px] text-slate-500">Total</p>
//               <p className="truncate text-base font-bold text-slate-900">
//                 {formatCurrency(total)}
//               </p>
//             </div>
//             <Link
//               href="/checkout"
//               className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white"
//             >
//               Checkout
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   getStocksByProductIds,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
//   /** Max sellable units from Firestore */
//   maxStock: number;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(
//   items: FirebaseCartItem[],
//   stocks: Record<string, number>
// ): CartItem[] {
//   return (items || []).map((item) => {
//     const productId = item.productId || item.id;
//     const maxStock = Math.max(0, Number(stocks[productId] ?? 0));
//     const quantity = Math.min(
//       Math.max(1, Number(item.quantity || 1)),
//       Math.max(1, maxStock || 1)
//     );
//     // If out of stock, still show line but qty clamped to 1 for display until user removes
//     return {
//       id: productId,
//       productId,
//       name: item.name,
//       category: item.category || "",
//       price: Number(item.price || 0),
//       quantity: maxStock > 0 ? Math.min(quantity, maxStock) : Number(item.quantity || 1),
//       image: item.image || "",
//       variant: item.variant,
//       maxStock,
//     };
//   });
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const loadCart = async (uid: string) => {
//     const cart = await getCart(uid);
//     const raw = cart?.items || [];
//     const stocks = await getStocksByProductIds(
//       raw.map((i) => i.productId || i.id)
//     );
//     return mapFirebaseItems(raw, stocks);
//   };

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setLoading(true);

//       try {
//         const mapped = await loadCart(user.uid);
//         if (!cancelled) setItems(mapped);
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;

//     const nextQty = item.quantity + change;
//     if (nextQty < 1) return;
//     if (change > 0 && item.quantity >= item.maxStock) return;

//     const capped = Math.min(nextQty, Math.max(0, item.maxStock));
//     if (capped < 1) return;

//     setUpdating(true);
//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: capped }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         capped,
//         item.variant
//       );
//       const stocks = await getStocksByProductIds(
//         cart.items.map((i) => i.productId || i.id)
//       );
//       setItems(mapFirebaseItems(cart.items, stocks));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       try {
//         setItems(await loadCart(userId));
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(userId, item.productId, item.variant);
//       const stocks = await getStocksByProductIds(
//         cart.items.map((i) => i.productId || i.id)
//       );
//       setItems(mapFirebaseItems(cart.items, stocks));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       try {
//         setItems(await loadCart(userId));
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;
//   const itemCount = items.reduce((c, i) => c + i.quantity, 0);

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf8f4]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#faf8f4]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//           <div className="mb-4 flex items-center gap-2 text-xs text-[#8a847c] sm:mb-5 sm:text-sm">
//             <Link href="/" className="hover:text-[#1a1a1a]">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-[#1a1a1a]">Cart</span>
//           </div>

//           <section className="rounded-2xl border border-[#e8e2d8] bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ebe0] text-[#b8956c] sm:h-16 sm:w-16">
//               <ShoppingBag size={26} />
//             </div>
//             <h2 className="mt-4 text-lg font-bold text-[#1a1a1a] sm:mt-5 sm:text-xl">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-[#8a847c]">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2c2a26]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#e0d9ce] px-5 py-3 text-sm font-semibold text-[#5c564e] hover:bg-[#faf8f4]"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#faf8f4] pb-28 lg:pb-0">
//       <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-4 flex items-center gap-2 text-xs text-[#8a847c] sm:mb-5 sm:text-sm">
//           <Link href="/" className="hover:text-[#1a1a1a]">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-[#1a1a1a]">Cart</span>
//         </div>

//         <div className="mb-5 sm:mb-8">
//           <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a6a089] sm:text-xs">
//             Shopping cart
//           </p>
//           <h1 className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:mt-2 sm:text-3xl">
//             Your Cart
//           </h1>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-6">
//             <section className="rounded-2xl border border-[#e8e2d8] bg-white">
//               <div className="flex items-center justify-between border-b border-[#f0ebe3] px-3 py-3 sm:px-6 sm:py-4">
//                 <div>
//                   <h2 className="text-sm font-bold text-[#1a1a1a]">Cart items</h2>
//                   <p className="mt-0.5 text-xs text-[#8a847c]">
//                     {itemCount} item{itemCount !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={18} className="text-[#a6a089]" />
//               </div>

//               <div className="divide-y divide-[#f0ebe3]">
//                 {items.map((item) => {
//                   const atMax =
//                     item.maxStock > 0 && item.quantity >= item.maxStock;
//                   const outOfStock = item.maxStock <= 0;

//                   return (
//                     <div
//                       key={`${item.productId}-${item.variant || "default"}`}
//                       className="p-3 sm:p-6"
//                     >
//                       <div className="flex gap-3 sm:gap-4">
//                         <Link
//                           href={`/products/${item.productId}`}
//                           className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f5f0e8] text-[#a6a089] sm:h-28 sm:w-28"
//                         >
//                           {item.image ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <ShoppingBag size={24} />
//                           )}
//                         </Link>

//                         <div className="min-w-0 flex-1">
//                           <div className="flex items-start justify-between gap-2">
//                             <div className="min-w-0">
//                               <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-[#b8956c] sm:text-[11px]">
//                                 {item.category || "Furniture"}
//                               </p>
//                               <Link href={`/products/${item.productId}`}>
//                                 <h3 className="mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-[#1a1a1a] sm:mt-1 sm:text-base">
//                                   {item.name}
//                                 </h3>
//                               </Link>
//                               <p className="mt-1 text-sm font-semibold text-[#5c564e]">
//                                 {formatCurrency(item.price)}
//                               </p>
//                               {outOfStock ? (
//                                 <p className="mt-1 text-[11px] font-medium text-red-600">
//                                   Out of stock — remove this item
//                                 </p>
//                               ) : atMax ? (
//                                 <p className="mt-1 text-[11px] font-medium text-[#9a5b18]">
//                                   Max available: {item.maxStock}
//                                 </p>
//                               ) : (
//                                 <p className="mt-1 text-[11px] text-[#a6a089]">
//                                   {item.maxStock} in stock
//                                 </p>
//                               )}
//                             </div>

//                             <button
//                               type="button"
//                               onClick={() => removeItem(item)}
//                               disabled={updating}
//                               className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#a6a089] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                               aria-label="Remove item"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </div>

//                           <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
//                             <div className="flex items-center rounded-lg border border-[#e0d9ce]">
//                               <button
//                                 type="button"
//                                 onClick={() => updateQuantity(item, -1)}
//                                 disabled={item.quantity <= 1 || updating}
//                                 className="flex h-9 w-9 items-center justify-center text-[#5c564e] hover:bg-[#faf8f4] disabled:opacity-40"
//                                 aria-label="Decrease quantity"
//                               >
//                                 <Minus size={14} />
//                               </button>
//                               <span className="flex h-9 min-w-9 items-center justify-center border-x border-[#e0d9ce] px-1.5 text-sm font-semibold text-[#1a1a1a] sm:min-w-10 sm:px-2">
//                                 {item.quantity}
//                               </span>
//                               <button
//                                 type="button"
//                                 onClick={() => updateQuantity(item, 1)}
//                                 disabled={updating || atMax || outOfStock}
//                                 className="flex h-9 w-9 items-center justify-center text-[#5c564e] hover:bg-[#faf8f4] disabled:cursor-not-allowed disabled:opacity-40"
//                                 aria-label="Increase quantity"
//                                 title={
//                                   atMax
//                                     ? `Only ${item.maxStock} available`
//                                     : "Increase quantity"
//                                 }
//                               >
//                                 <Plus size={14} />
//                               </button>
//                             </div>

//                             <p className="text-sm font-bold text-[#1a1a1a]">
//                               {formatCurrency(item.price * item.quantity)}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="border-t border-[#f0ebe3] px-3 py-3 sm:px-6 sm:py-4">
//                 <Link
//                   href="/products"
//                   className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#5c564e] hover:text-[#1a1a1a]"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="hidden h-fit rounded-2xl border border-[#e8e2d8] bg-white lg:sticky lg:top-6 lg:block">
//               <div className="border-b border-[#f0ebe3] px-5 py-5">
//                 <h2 className="text-base font-bold text-[#1a1a1a]">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-[#8a847c]">Subtotal</span>
//                   <span className="font-semibold text-[#1a1a1a]">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-[#8a847c]">Delivery</span>
//                   <span className="font-semibold text-[#9a5b18]">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-[#f0ebe3] pt-4">
//                   <span className="text-sm font-semibold text-[#1a1a1a]">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-[#1a1a1a]">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#2c2a26]"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>

//             <div className="rounded-2xl border border-[#e8e2d8] bg-white p-4 lg:hidden">
//               <h2 className="text-sm font-bold text-[#1a1a1a]">Order summary</h2>
//               <div className="mt-3 space-y-2.5 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-[#8a847c]">Subtotal</span>
//                   <span className="font-semibold text-[#1a1a1a]">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#8a847c]">Delivery</span>
//                   <span className="font-semibold text-[#9a5b18]">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-[#f0ebe3] pt-2.5">
//                   <span className="font-semibold text-[#1a1a1a]">Total</span>
//                   <span className="text-lg font-bold text-[#1a1a1a]">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <section className="rounded-2xl border border-[#e8e2d8] bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
//             <ShoppingBag size={28} className="mx-auto text-[#d4cdc2]" />
//             <h2 className="mt-4 text-lg font-bold text-[#1a1a1a] sm:mt-5 sm:text-xl">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-[#8a847c]">
//               Add products from the collection.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>

//       {items.length > 0 && (
//         <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8e2d8] bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
//           <div className="mx-auto flex max-w-6xl items-center gap-3">
//             <div className="min-w-0 flex-1">
//               <p className="text-[10px] text-[#8a847c]">Total</p>
//               <p className="truncate text-base font-bold text-[#1a1a1a]">
//                 {formatCurrency(total)}
//               </p>
//             </div>
//             <Link
//               href="/checkout"
//               className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white"
//             >
//               Checkout
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   Loader2,
//   Lock,
//   Minus,
//   Package,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   getStocksByProductIds,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
//   maxStock: number;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(
//   items: FirebaseCartItem[],
//   stocks: Record<string, number>
// ): CartItem[] {
//   return (items || []).map((item) => {
//     const productId = item.productId || item.id;
//     const maxStock = Math.max(0, Number(stocks[productId] ?? 0));
//     const rawQty = Math.max(1, Number(item.quantity || 1));
//     const quantity =
//       maxStock > 0 ? Math.min(rawQty, maxStock) : rawQty;

//     return {
//       id: productId,
//       productId,
//       name: item.name,
//       category: item.category || "",
//       price: Number(item.price || 0),
//       quantity,
//       image: item.image || "",
//       variant: item.variant,
//       maxStock,
//     };
//   });
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const loadCart = async (uid: string) => {
//     const cart = await getCart(uid);
//     const raw = cart?.items || [];
//     const stocks = await getStocksByProductIds(
//       raw.map((i) => i.productId || i.id)
//     );
//     return mapFirebaseItems(raw, stocks);
//   };

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setLoading(true);

//       try {
//         const mapped = await loadCart(user.uid);
//         if (!cancelled) setItems(mapped);
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;

//     const nextQty = item.quantity + change;
//     if (nextQty < 1) return;
//     if (change > 0 && item.quantity >= item.maxStock) return;

//     const capped = Math.min(nextQty, Math.max(0, item.maxStock));
//     if (capped < 1) return;

//     setUpdating(true);
//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: capped }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         capped,
//         item.variant
//       );
//       const stocks = await getStocksByProductIds(
//         cart.items.map((i) => i.productId || i.id)
//       );
//       setItems(mapFirebaseItems(cart.items, stocks));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       try {
//         setItems(await loadCart(userId));
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(userId, item.productId, item.variant);
//       const stocks = await getStocksByProductIds(
//         cart.items.map((i) => i.productId || i.id)
//       );
//       setItems(mapFirebaseItems(cart.items, stocks));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       try {
//         setItems(await loadCart(userId));
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((t, item) => t + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;
//   const itemCount = items.reduce((c, i) => c + i.quantity, 0);

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#faf7f2]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#faf7f2]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <section className="rounded-2xl border border-[#ebe4d8] bg-white px-6 py-16 text-center shadow-sm">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3ebe0] text-[#b8956c]">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-semibold text-[#1a1a1a]">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-[#8a847c]">
//               Your cart is saved to your account. Sign in to continue shopping
//               and checkout.
//             </p>
//             <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white hover:bg-[#2c2a26]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#e0d9ce] px-6 text-sm font-semibold text-[#5c564e] hover:bg-[#faf7f2]"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#faf7f2] pb-28 lg:pb-12">
//       <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Header row: title + checkout steps */}
//         <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-4xl">
//               Your Cart
//             </h1>
//             <p className="mt-1.5 text-sm text-[#8a847c]">
//               {items.length === 0
//                 ? "No items yet"
//                 : `${itemCount} item${itemCount !== 1 ? "s" : ""}`}
//             </p>
//           </div>

//           {/* Step indicator */}
//           <nav
//             aria-label="Checkout progress"
//             className="flex items-center gap-0 text-xs font-medium sm:text-sm"
//           >
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a1a1a] text-[11px] font-bold text-white">
//                 1
//               </span>
//               <span className="text-[#1a1a1a]">Cart</span>
//             </div>
//             <div className="mx-2 h-px w-8 bg-[#e0d9ce] sm:mx-3 sm:w-12" />
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[11px] font-bold text-[#a6a089]">
//                 2
//               </span>
//               <span className="text-[#a6a089]">Shipping</span>
//             </div>
//             <div className="mx-2 h-px w-8 bg-[#e0d9ce] sm:mx-3 sm:w-12" />
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e0d9ce] bg-white text-[11px] font-bold text-[#a6a089]">
//                 3
//               </span>
//               <span className="text-[#a6a089]">Payment</span>
//             </div>
//           </nav>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
//             {/* Line items */}
//             <div className="space-y-4">
//               {items.map((item) => {
//                 const atMax =
//                   item.maxStock > 0 && item.quantity >= item.maxStock;
//                 const outOfStock = item.maxStock <= 0;
//                 const lowStock =
//                   !outOfStock && item.maxStock > 0 && item.maxStock <= 3;

//                 return (
//                   <article
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="rounded-2xl border border-[#ebe4d8] bg-white p-4 shadow-sm sm:p-5"
//                   >
//                     <div className="flex gap-4 sm:gap-5">
//                       <Link
//                         href={`/products/${item.productId}`}
//                         className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f3eee6] sm:h-28 sm:w-28"
//                       >
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <div className="flex h-full items-center justify-center text-[#d4cdc2]">
//                             <ShoppingBag size={28} />
//                           </div>
//                         )}
//                       </Link>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex items-start justify-between gap-3">
//                           <div className="min-w-0">
//                             <Link href={`/products/${item.productId}`}>
//                               <h2 className="text-base font-semibold text-[#1a1a1a] hover:underline sm:text-lg">
//                                 {item.name}
//                               </h2>
//                             </Link>
//                             {item.category ? (
//                               <p className="mt-0.5 text-sm text-[#8a847c]">
//                                 {item.category}
//                               </p>
//                             ) : null}
//                             {item.variant ? (
//                               <p className="mt-0.5 text-xs text-[#a6a089]">
//                                 {item.variant}
//                               </p>
//                             ) : null}
//                           </div>
//                           <p className="shrink-0 text-base font-semibold text-[#1a1a1a] sm:text-lg">
//                             {formatCurrency(item.price)}
//                           </p>
//                         </div>

//                         {/* Stock badge */}
//                         <div className="mt-2">
//                           {outOfStock ? (
//                             <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600">
//                               <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
//                               Out of stock
//                             </span>
//                           ) : lowStock ? (
//                             <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
//                               <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
//                               Only {item.maxStock} left
//                             </span>
//                           ) : (
//                             <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
//                               <Check size={13} className="text-emerald-600" />
//                               In Stock
//                             </span>
//                           )}
//                         </div>

//                         {/* Qty + actions */}
//                         <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
//                           <div className="inline-flex items-center rounded-full border border-[#e8e2d8] bg-[#faf7f2]">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-[#5c564e] disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="min-w-[1.75rem] text-center text-sm font-semibold text-[#1a1a1a]">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating || atMax || outOfStock}
//                               className="flex h-9 w-9 items-center justify-center text-[#5c564e] disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Increase quantity"
//                               title={
//                                 atMax
//                                   ? `Only ${item.maxStock} available`
//                                   : undefined
//                               }
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="text-sm font-medium text-[#8a847c] underline-offset-2 hover:text-red-600 hover:underline disabled:opacity-50"
//                           >
//                             Remove
//                           </button>

//                           <span className="ml-auto text-sm font-semibold text-[#1a1a1a] sm:hidden">
//                             {formatCurrency(item.price * item.quantity)}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}

//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-[#5c564e] hover:text-[#1a1a1a]"
//               >
//                 <ArrowLeft size={16} />
//                 Continue Shopping
//               </Link>
//             </div>

//             {/* Order summary */}
//             <aside className="rounded-2xl border border-[#ebe4d8] bg-[#faf7f2] p-5 sm:p-6 lg:sticky lg:top-6">
//               <h2 className="text-lg font-semibold text-[#1a1a1a]">
//                 Order Summary
//               </h2>
//               <div className="mt-1 h-px bg-[#e8e2d8]" />

//               <dl className="mt-5 space-y-3 text-sm">
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-[#8a847c]">
//                     Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})
//                   </dt>
//                   <dd className="font-medium text-[#1a1a1a]">
//                     {formatCurrency(subtotal)}
//                   </dd>
//                 </div>
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-[#8a847c]">Shipping</dt>
//                   <dd className="font-medium text-emerald-700">Free</dd>
//                 </div>
//               </dl>

//               <div className="mt-5 flex items-center justify-between border-t border-[#e8e2d8] pt-4">
//                 <span className="text-base font-semibold text-[#1a1a1a]">
//                   Total
//                 </span>
//                 <span className="text-xl font-bold text-[#1a1a1a]">
//                   {formatCurrency(total)}
//                 </span>
//               </div>

//               <Link
//                 href="/checkout"
//                 className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#c4a265] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b8956c]"
//               >
//                 Proceed to Checkout
//               </Link>

//               <ul className="mt-5 space-y-2.5 text-xs text-[#8a847c]">
//                 <li className="flex items-start gap-2">
//                   <Lock size={14} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                   Secure checkout, encrypted payment
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <Truck size={14} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                   Free delivery on this order
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <Package
//                     size={14}
//                     className="mt-0.5 shrink-0 text-[#b8956c]"
//                   />
//                   Quantity limited by live stock
//                 </li>
//               </ul>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-2xl border border-[#ebe4d8] bg-white px-6 py-16 text-center shadow-sm">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3ebe0] text-[#b8956c]">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-semibold text-[#1a1a1a]">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-[#8a847c]">
//               Add pieces from the collection to get started.
//             </p>
//             <Link
//               href="/products"
//               className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#1a1a1a] px-6 text-sm font-semibold text-white hover:bg-[#2c2a26]"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>

//       {/* Mobile sticky checkout */}
//       {items.length > 0 && (
//         <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ebe4d8] bg-white/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
//           <div className="mx-auto flex max-w-6xl items-center gap-3">
//             <div className="min-w-0 flex-1">
//               <p className="text-[10px] uppercase tracking-wide text-[#8a847c]">
//                 Total
//               </p>
//               <p className="truncate text-lg font-bold text-[#1a1a1a]">
//                 {formatCurrency(total)}
//               </p>
//             </div>
//             <Link
//               href="/checkout"
//               className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full bg-[#c4a265] px-6 text-sm font-semibold text-white"
//             >
//               Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Lock,
  Minus,
  Package,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import {
  getCart,
  updateCartItem,
  removeFromCart,
  addToCart,
  getStocksByProductIds,
  type CartItem as FirebaseCartItem,
} from "@/services/cartService";

/** Palette from reference */
const C = {
  page: "#f7f3ec",
  card: "#ffffff",
  summary: "#f3efe6",
  border: "#ebe4d8",
  borderSoft: "#f0ebe3",
  text: "#1c1916",
  muted: "#8a8378",
  soft: "#a39e93",
  gold: "#9a7b3c",
  goldHover: "#b8956c",
  black: "#1a1a1a",
  inStock: "#2f6b4f",
  lowStock: "#b45309",
  outStock: "#b91c1c",
};

interface CartItem {
  id: string;
  productId: string;
  name: string;
  category?: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
  maxStock: number;
}

interface UpsellProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function mapFirebaseItems(
  items: FirebaseCartItem[],
  stocks: Record<string, number>
): CartItem[] {
  return (items || []).map((item) => {
    const productId = item.productId || item.id;
    const maxStock = Math.max(0, Number(stocks[productId] ?? 0));
    const rawQty = Math.max(1, Number(item.quantity || 1));
    const quantity = maxStock > 0 ? Math.min(rawQty, maxStock) : rawQty;

    return {
      id: productId,
      productId,
      name: item.name,
      category: item.category || "",
      price: Number(item.price || 0),
      quantity,
      image: item.image || "",
      variant: item.variant,
      maxStock,
    };
  });
}

export default function CartPage() {
  const [userId, setUserId] = useState("");
  const [items, setItems] = useState<CartItem[]>([]);
  const [upsells, setUpsells] = useState<UpsellProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [addingId, setAddingId] = useState<string | null>(null);

  const loadCart = async (uid: string) => {
    const cart = await getCart(uid);
    const raw = cart?.items || [];
    const stocks = await getStocksByProductIds(
      raw.map((i) => i.productId || i.id)
    );
    return mapFirebaseItems(raw, stocks);
  };

  useEffect(() => {
    let cancelled = false;

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (cancelled) return;

      if (!user) {
        setUserId("");
        setItems([]);
        setLoading(false);
        return;
      }

      setUserId(user.uid);
      setLoading(true);

      try {
        const mapped = await loadCart(user.uid);
        if (!cancelled) setItems(mapped);
      } catch (err) {
        console.error("Failed to load cart:", err);
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  // Light “Add to your order” strip from published products
  useEffect(() => {
    let cancelled = false;

    async function loadUpsells() {
      try {
        const snap = await getDocs(
          query(
            collection(db, "furniture_products"),
            where("status", "==", "Published"),
            limit(12)
          )
        ).catch(async () => getDocs(collection(db, "furniture_products")));

        if (cancelled) return;

        const inCart = new Set(items.map((i) => i.productId));
        const list: UpsellProduct[] = snap.docs
          .filter((d) => !inCart.has(d.id))
          .slice(0, 3)
          .map((d) => {
            const data = d.data() as Record<string, unknown>;
            return {
              id: d.id,
              name: String(data.name || "Product"),
              price: Number(data.sellingPrice ?? data.price ?? 0),
              image: String(data.imageUrl || data.image || ""),
            };
          });
        setUpsells(list);
      } catch {
        if (!cancelled) setUpsells([]);
      }
    }

    void loadUpsells();
    return () => {
      cancelled = true;
    };
  }, [items]);

  const updateQuantity = async (item: CartItem, change: number) => {
    if (!userId) return;

    const nextQty = item.quantity + change;
    if (nextQty < 1) return;
    if (change > 0 && item.quantity >= item.maxStock) return;

    const capped = Math.min(nextQty, Math.max(0, item.maxStock));
    if (capped < 1) return;

    setUpdating(true);
    setItems((current) =>
      current.map((i) =>
        i.productId === item.productId && i.variant === item.variant
          ? { ...i, quantity: capped }
          : i
      )
    );

    try {
      const cart = await updateCartItem(
        userId,
        item.productId,
        capped,
        item.variant
      );
      const stocks = await getStocksByProductIds(
        cart.items.map((i) => i.productId || i.id)
      );
      setItems(mapFirebaseItems(cart.items, stocks));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      try {
        setItems(await loadCart(userId));
      } catch {
        /* ignore */
      }
    } finally {
      setUpdating(false);
    }
  };

  const removeItem = async (item: CartItem) => {
    if (!userId) return;
    setUpdating(true);

    setItems((current) =>
      current.filter(
        (i) =>
          !(i.productId === item.productId && i.variant === item.variant)
      )
    );

    try {
      const cart = await removeFromCart(userId, item.productId, item.variant);
      const stocks = await getStocksByProductIds(
        cart.items.map((i) => i.productId || i.id)
      );
      setItems(mapFirebaseItems(cart.items, stocks));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      try {
        setItems(await loadCart(userId));
      } catch {
        /* ignore */
      }
    } finally {
      setUpdating(false);
    }
  };

  const addUpsell = async (p: UpsellProduct) => {
    if (!userId) return;
    setAddingId(p.id);
    try {
      await addToCart(userId, {
        productId: p.id,
        name: p.name,
        price: p.price,
        quantity: 1,
        image: p.image || "",
      });
      const mapped = await loadCart(userId);
      setItems(mapped);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
    } finally {
      setAddingId(null);
    }
  };

  const subtotal = useMemo(
    () => items.reduce((t, item) => t + item.price * item.quantity, 0),
    [items]
  );
  const total = subtotal;
  const itemCount = items.reduce((c, i) => c + i.quantity, 0);

  if (loading) {
    return (
      <main
        className="flex min-h-[50vh] items-center justify-center"
        style={{ background: C.page }}
      >
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: C.gold }} />
      </main>
    );
  }

  if (!userId) {
    return (
      <main className="min-h-screen" style={{ background: C.page }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <section
            className="rounded-2xl border bg-white px-6 py-16 text-center shadow-sm"
            style={{ borderColor: C.border }}
          >
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "#f0e9dc", color: C.gold }}
            >
              <ShoppingBag size={28} />
            </div>
            <h2
              className="mt-5 text-xl font-semibold"
              style={{ color: C.text }}
            >
              Sign in to view your cart
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: C.muted }}>
              Your cart is saved to your account. Sign in to continue.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sign-in"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
                style={{ background: C.black }}
              >
                Sign in
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border px-6 text-sm font-semibold"
                style={{ borderColor: C.border, color: C.muted }}
              >
                Browse products
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-28 lg:pb-0" style={{ background: C.page }}>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Title + steps */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1
              className="font-display text-[2rem] font-semibold tracking-tight sm:text-4xl"
              style={{ color: C.text }}
            >
              Your Cart
            </h1>
            <p className="mt-1.5 text-sm" style={{ color: C.muted }}>
              {items.length === 0
                ? "No items yet"
                : `${itemCount} item${itemCount !== 1 ? "s" : ""}`}
            </p>
          </div>

          <nav
            aria-label="Checkout progress"
            className="flex items-center gap-0 self-start text-xs font-medium sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: C.black }}
              >
                1
              </span>
              <span style={{ color: C.text }}>Cart</span>
            </div>
            <div
              className="mx-2.5 h-px w-10 sm:mx-3 sm:w-14"
              style={{ background: C.border }}
            />
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-[11px] font-bold"
                style={{ borderColor: C.border, color: C.soft }}
              >
                2
              </span>
              <span style={{ color: C.soft }}>Shipping</span>
            </div>
            <div
              className="mx-2.5 h-px w-10 sm:mx-3 sm:w-14"
              style={{ background: C.border }}
            />
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-[11px] font-bold"
                style={{ borderColor: C.border, color: C.soft }}
              >
                3
              </span>
              <span style={{ color: C.soft }}>Payment</span>
            </div>
          </nav>
        </div>

        {items.length > 0 ? (
          <>
            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start xl:grid-cols-[1fr_360px]">
              {/* Items */}
              <div className="space-y-4">
                {items.map((item) => {
                  const atMax =
                    item.maxStock > 0 && item.quantity >= item.maxStock;
                  const outOfStock = item.maxStock <= 0;
                  const lowStock =
                    !outOfStock && item.maxStock > 0 && item.maxStock <= 3;

                  return (
                    <article
                      key={`${item.productId}-${item.variant || "default"}`}
                      className="rounded-2xl border bg-white p-4 shadow-[0_1px_3px_rgba(28,25,22,0.04)] sm:p-5"
                      style={{ borderColor: C.border }}
                    >
                      <div className="flex gap-4 sm:gap-5">
                        <Link
                          href={`/products/${item.productId}`}
                          className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28"
                          style={{ background: "#f0ebe3" }}
                        >
                          {item.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div
                              className="flex h-full items-center justify-center"
                              style={{ color: "#d4cdc2" }}
                            >
                              <ShoppingBag size={26} />
                            </div>
                          )}
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <Link href={`/products/${item.productId}`}>
                                <h2
                                  className="text-[15px] font-semibold leading-snug sm:text-base"
                                  style={{ color: C.text }}
                                >
                                  {item.name}
                                </h2>
                              </Link>
                              {item.category ? (
                                <p
                                  className="mt-0.5 text-[13px]"
                                  style={{ color: C.muted }}
                                >
                                  {item.category}
                                </p>
                              ) : null}
                            </div>
                            <p
                              className="shrink-0 text-[15px] font-semibold sm:text-base"
                              style={{ color: C.text }}
                            >
                              {formatCurrency(item.price)}
                            </p>
                          </div>

                          <div className="mt-2">
                            {outOfStock ? (
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-medium"
                                style={{ color: C.outStock }}
                              >
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{ background: C.outStock }}
                                />
                                Out of stock
                              </span>
                            ) : lowStock ? (
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-medium"
                                style={{ color: C.lowStock }}
                              >
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{ background: C.lowStock }}
                                />
                                Only {item.maxStock} left
                              </span>
                            ) : (
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-medium"
                                style={{ color: C.inStock }}
                              >
                                <Check size={13} strokeWidth={2.5} />
                                In Stock
                              </span>
                            )}
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                            <div
                              className="inline-flex items-center rounded-full border bg-white"
                              style={{ borderColor: C.border }}
                            >
                              <button
                                type="button"
                                onClick={() => updateQuantity(item, -1)}
                                disabled={item.quantity <= 1 || updating}
                                className="flex h-9 w-9 items-center justify-center disabled:opacity-40"
                                style={{ color: C.text }}
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <span
                                className="min-w-[1.5rem] text-center text-sm font-semibold"
                                style={{ color: C.text }}
                              >
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item, 1)}
                                disabled={updating || atMax || outOfStock}
                                className="flex h-9 w-9 items-center justify-center disabled:cursor-not-allowed disabled:opacity-40"
                                style={{ color: C.text }}
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item)}
                              disabled={updating}
                              className="text-sm font-medium underline-offset-2 hover:underline disabled:opacity-50"
                              style={{ color: C.muted }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 pt-1 text-sm font-medium"
                  style={{ color: C.muted }}
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>

              {/* Order summary — cream panel like reference */}
              <aside
                className="rounded-2xl border p-5 sm:p-6 lg:sticky lg:top-6"
                style={{
                  background: C.summary,
                  borderColor: C.border,
                }}
              >
                <h2
                  className="text-lg font-semibold"
                  style={{ color: C.text }}
                >
                  Order Summary
                </h2>
                <div
                  className="mt-3 h-px"
                  style={{ background: C.border }}
                />

                <dl className="mt-5 space-y-3.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt style={{ color: C.muted }}>
                      Subtotal ({itemCount} item
                      {itemCount !== 1 ? "s" : ""})
                    </dt>
                    <dd className="font-medium" style={{ color: C.text }}>
                      {formatCurrency(subtotal)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt style={{ color: C.muted }}>Shipping</dt>
                    <dd
                      className="font-medium"
                      style={{ color: C.inStock }}
                    >
                      Free
                    </dd>
                  </div>
                </dl>

                <div
                  className="mt-5 flex items-center justify-between border-t pt-4"
                  style={{ borderColor: C.border }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: C.text }}
                  >
                    Total
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: C.text }}
                  >
                    {formatCurrency(total)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="mt-5 flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition"
                  style={{ background: C.gold }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.goldHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.gold;
                  }}
                >
                  Proceed to Checkout
                </Link>

                <ul
                  className="mt-5 space-y-2.5 text-xs"
                  style={{ color: C.muted }}
                >
                  <li className="flex items-start gap-2">
                    <Lock
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: C.gold }}
                    />
                    Secure checkout, encrypted payment
                  </li>
                  <li className="flex items-start gap-2">
                    <Truck
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: C.gold }}
                    />
                    Free delivery on this order
                  </li>
                  <li className="flex items-start gap-2">
                    <Package
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: C.gold }}
                    />
                    Quantity limited by live stock
                  </li>
                </ul>
              </aside>
            </div>

            {/* Add to your order */}
            {upsells.length > 0 && (
              <section className="mt-12">
                <h2
                  className="text-lg font-semibold sm:text-xl"
                  style={{ color: C.text }}
                >
                  Add to your order
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {upsells.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm"
                      style={{ borderColor: C.border }}
                    >
                      <Link
                        href={`/products/${p.id}`}
                        className="h-16 w-16 shrink-0 overflow-hidden rounded-xl"
                        style={{ background: "#f0ebe3" }}
                      >
                        {p.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[#d4cdc2]">
                            <ShoppingBag size={20} />
                          </div>
                        )}
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link href={`/products/${p.id}`}>
                          <p
                            className="truncate text-sm font-semibold"
                            style={{ color: C.text }}
                          >
                            {p.name}
                          </p>
                        </Link>
                        <p
                          className="mt-0.5 text-sm font-medium"
                          style={{ color: C.muted }}
                        >
                          {formatCurrency(p.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        disabled={addingId === p.id || updating}
                        onClick={() => void addUpsell(p)}
                        className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
                        style={{ background: C.black }}
                      >
                        {addingId === p.id ? "…" : "+ Add"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <section
            className="rounded-2xl border bg-white px-6 py-16 text-center shadow-sm"
            style={{ borderColor: C.border }}
          >
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "#f0e9dc", color: C.gold }}
            >
              <ShoppingBag size={28} />
            </div>
            <h2
              className="mt-5 text-xl font-semibold"
              style={{ color: C.text }}
            >
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm" style={{ color: C.muted }}>
              Add pieces from the collection to get started.
            </p>
            <Link
              href="/products"
              className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
              style={{ background: C.black }}
            >
              Browse products
              <ArrowRight size={16} />
            </Link>
          </section>
        )}
      </div>

      {/* Mobile sticky bar */}
      {items.length > 0 && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden"
          style={{ borderColor: C.border }}
        >
          <div className="mx-auto flex max-w-6xl items-center gap-3">
            <div className="min-w-0 flex-1">
              <p
                className="text-[10px] uppercase tracking-wide"
                style={{ color: C.muted }}
              >
                Total
              </p>
              <p
                className="truncate text-lg font-bold"
                style={{ color: C.text }}
              >
                {formatCurrency(total)}
              </p>
            </div>
            {/* <Link
              href="/checkout"
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full px-6 text-sm font-semibold text-white"
              style={{ background: C.gold }}
            >
              Checkout
            </Link> */}

            <Link
              href="/checkout"
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full px-6 text-sm font-semibold text-[#F5D76E] transition hover:opacity-90"
              style={{ background: "#F5D76E" }}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

