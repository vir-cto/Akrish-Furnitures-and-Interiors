// "use client";

// import Link from "next/link";
// import { FormEvent, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   LockKeyhole,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";

// interface CheckoutItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const INITIAL_ITEMS: CheckoutItem[] = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     price: 54900,
//     quantity: 1,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     price: 30000,
//     quantity: 1,
//   },
// ];

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function CheckoutPage() {
//   const [items] = useState<CheckoutItem[]>(INITIAL_ITEMS);
//   const [form, setForm] =
//     useState<AddressForm>(INITIAL_ADDRESS);

//   const [paymentMethod, setPaymentMethod] =
//     useState("card");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const subtotal = useMemo(
//     () =>
//       items.reduce(
//         (total, item) =>
//           total + item.price * item.quantity,
//         0
//       ),
//     [items]
//   );

//   const delivery = 0;
//   const total = subtotal + delivery;

//   const updateField = (
//     field: keyof AddressForm,
//     value: string
//   ) => {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     setError("");
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setError("");

//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this section to your checkout/order API
//        * or server action when backend order processing
//        * is available.
//        */
//       await new Promise((resolve) =>
//         setTimeout(resolve, 700)
//       );

//       console.log("Checkout submitted:", {
//         customer: form,
//         paymentMethod,
//         items,
//         total,
//       });

//       setOrderPlaced(true);
//     } catch (checkoutError) {
//       console.error(
//         "Checkout failed:",
//         checkoutError
//       );

//       setError(
//         "We could not place your order. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>

//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>

//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>

//             <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//               Your order has been submitted successfully.
//               You can view your order details from your
//               account.
//             </p>

//             <div className="mt-6 rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-500">
//                 Order total
//               </p>

//               <p className="mt-1 text-xl font-bold text-slate-900">
//                 {formatCurrency(total)}
//               </p>
//             </div>

//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>

//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         {/* Header */}
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>

//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
//               VIP
//             </div>

//             <div>
//               <p className="text-sm font-bold text-slate-900">
//                 VIP Interior
//               </p>

//               <p className="text-[11px] text-slate-500">
//                 Secure checkout
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//           {/* Checkout form */}
//           <section className="rounded-xl border border-slate-200 bg-white">
//             <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//               <h1 className="text-xl font-bold text-slate-900">
//                 Checkout
//               </h1>

//               <p className="mt-1 text-xs text-slate-500">
//                 Enter your details to complete your order.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="px-5 py-6 sm:px-7"
//             >
//               {/* Contact */}
//               <div>
//                 <div className="mb-4 flex items-center gap-2">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
//                     <span className="text-xs font-bold">
//                       1
//                     </span>
//                   </div>

//                   <h2 className="text-sm font-bold text-slate-900">
//                     Contact information
//                   </h2>
//                 </div>

//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="firstName"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       First name
//                     </label>

//                     <input
//                       id="firstName"
//                       type="text"
//                       required
//                       value={form.firstName}
//                       onChange={(event) =>
//                         updateField(
//                           "firstName",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="lastName"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       Last name
//                     </label>

//                     <input
//                       id="lastName"
//                       type="text"
//                       required
//                       value={form.lastName}
//                       onChange={(event) =>
//                         updateField(
//                           "lastName",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       Email address
//                     </label>

//                     <input
//                       id="email"
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       Phone number
//                     </label>

//                     <input
//                       id="phone"
//                       type="tel"
//                       required
//                       value={form.phone}
//                       onChange={(event) =>
//                         updateField(
//                           "phone",
//                           event.target.value
//                         )
//                       }
//                       placeholder="+91 XXXXX XXXXX"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="mt-8 border-t border-slate-100 pt-7">
//                 <div className="mb-4 flex items-center gap-2">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
//                     <span className="text-xs font-bold">
//                       2
//                     </span>
//                   </div>

//                   <h2 className="text-sm font-bold text-slate-900">
//                     Delivery address
//                   </h2>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="address"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       Address
//                     </label>

//                     <div className="relative">
//                       <MapPin
//                         size={16}
//                         className="absolute left-3 top-3 text-slate-400"
//                       />

//                       <textarea
//                         id="address"
//                         required
//                         rows={3}
//                         value={form.address}
//                         onChange={(event) =>
//                           updateField(
//                             "address",
//                             event.target.value
//                           )
//                         }
//                         placeholder="House number, street, area"
//                         className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid gap-4 sm:grid-cols-3">
//                     <div>
//                       <label
//                         htmlFor="city"
//                         className="mb-2 block text-xs font-semibold text-slate-700"
//                       >
//                         City
//                       </label>

//                       <input
//                         id="city"
//                         type="text"
//                         required
//                         value={form.city}
//                         onChange={(event) =>
//                           updateField(
//                             "city",
//                             event.target.value
//                           )
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="state"
//                         className="mb-2 block text-xs font-semibold text-slate-700"
//                       >
//                         State
//                       </label>

//                       <input
//                         id="state"
//                         type="text"
//                         required
//                         value={form.state}
//                         onChange={(event) =>
//                           updateField(
//                             "state",
//                             event.target.value
//                           )
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="pincode"
//                         className="mb-2 block text-xs font-semibold text-slate-700"
//                       >
//                         PIN code
//                       </label>

//                       <input
//                         id="pincode"
//                         type="text"
//                         inputMode="numeric"
//                         maxLength={6}
//                         required
//                         value={form.pincode}
//                         onChange={(event) =>
//                           updateField(
//                             "pincode",
//                             event.target.value.replace(
//                               /\D/g,
//                               ""
//                             )
//                           )
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment */}
//               <div className="mt-8 border-t border-slate-100 pt-7">
//                 <div className="mb-4 flex items-center gap-2">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
//                     <span className="text-xs font-bold">
//                       3
//                     </span>
//                   </div>

//                   <h2 className="text-sm font-bold text-slate-900">
//                     Payment method
//                   </h2>
//                 </div>

//                 <div className="space-y-3">
//                   <label
//                     className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
//                       paymentMethod === "card"
//                         ? "border-slate-900 bg-slate-50"
//                         : "border-slate-200 hover:bg-slate-50"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="card"
//                       checked={paymentMethod === "card"}
//                       onChange={(event) =>
//                         setPaymentMethod(
//                           event.target.value
//                         )
//                       }
//                       className="accent-slate-900"
//                     />

//                     <CreditCard
//                       size={19}
//                       className="text-slate-600"
//                     />

//                     <div>
//                       <p className="text-sm font-semibold text-slate-900">
//                         Card / Online payment
//                       </p>

//                       <p className="mt-0.5 text-xs text-slate-500">
//                         Secure payment at checkout
//                       </p>
//                     </div>
//                   </label>

//                   <label
//                     className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
//                       paymentMethod === "cod"
//                         ? "border-slate-900 bg-slate-50"
//                         : "border-slate-200 hover:bg-slate-50"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="cod"
//                       checked={paymentMethod === "cod"}
//                       onChange={(event) =>
//                         setPaymentMethod(
//                           event.target.value
//                         )
//                       }
//                       className="accent-slate-900"
//                     />

//                     <Package
//                       size={19}
//                       className="text-slate-600"
//                     />

//                     <div>
//                       <p className="text-sm font-semibold text-slate-900">
//                         Cash on delivery
//                       </p>

//                       <p className="mt-0.5 text-xs text-slate-500">
//                         Pay when your order arrives
//                       </p>
//                     </div>
//                   </label>
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
//                 >
//                   {error}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {loading ? (
//                   <>
//                     <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                     Processing order...
//                   </>
//                 ) : (
//                   <>
//                     Place order
//                     <ArrowRight size={16} />
//                   </>
//                 )}
//               </button>

//               <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
//                 <LockKeyhole size={13} />
//                 Secure checkout
//               </div>
//             </form>
//           </section>

//           {/* Order summary */}
//           <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//             <div className="border-b border-slate-100 px-5 py-5">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>

//                 <ShoppingBag
//                   size={18}
//                   className="text-slate-400"
//                 />
//               </div>
//             </div>

//             <div className="divide-y divide-slate-100">
//               {items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-3 px-5 py-4"
//                 >
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
//                     <Package size={20} />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <p className="text-xs font-semibold text-slate-900">
//                       {item.name}
//                     </p>

//                     <p className="mt-1 text-[11px] text-slate-500">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>

//                   <p className="text-xs font-bold text-slate-900">
//                     {formatCurrency(
//                       item.price * item.quantity
//                     )}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-3 px-5 py-5">
//               <div className="flex justify-between text-sm">
//                 <span className="text-slate-500">
//                   Subtotal
//                 </span>

//                 <span className="font-semibold text-slate-900">
//                   {formatCurrency(subtotal)}
//                 </span>
//               </div>

//               <div className="flex justify-between text-sm">
//                 <span className="flex items-center gap-2 text-slate-500">
//                   <Truck size={14} />
//                   Delivery
//                 </span>

//                 <span className="font-semibold text-emerald-600">
//                   Free
//                 </span>
//               </div>

//               <div className="border-t border-slate-100 pt-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-bold text-slate-900">
//                     Total
//                   </span>

//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   LockKeyhole,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateShipping,
//   calculateTax,
//   calculateCheckoutTotal,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function loadCartItems(): CheckoutItem[] {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return [];
//     const parsed = JSON.parse(raw) as unknown;
//     if (!Array.isArray(parsed)) return [];
//     return parsed
//       .map((row: Record<string, unknown>) => ({
//         productId: String(row.productId || row.id || ""),
//         name: String(row.name || "Item"),
//         price: Number(row.price || 0),
//         quantity: Number(row.quantity || row.qty || 1),
//         image: row.image ? String(row.image) : undefined,
//         category: row.category ? String(row.category) : undefined,
//       }))
//       .filter((i) => i.productId && i.quantity > 0);
//   } catch {
//     return [];
//   }
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);

//   useEffect(() => {
//     setItems(loadCartItems());

//     try {
//       const raw = localStorage.getItem("user");
//       if (raw) {
//         const u = JSON.parse(raw) as {
//           uid?: string;
//           name?: string;
//           email?: string;
//           phone?: string;
//         };
//         if (u.email || u.name) {
//           const parts = (u.name || "").split(" ");
//           setForm((f) => ({
//             ...f,
//             firstName: f.firstName || parts[0] || "",
//             lastName: f.lastName || parts.slice(1).join(" ") || "",
//             email: f.email || u.email || "",
//             phone: f.phone || u.phone || "",
//           }));
//         }
//         if (u.uid) setUserId(u.uid);
//       }
//     } catch {
//       /* ignore */
//     }

//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//         setForm((f) => ({
//           ...f,
//           email: f.email || user.email || "",
//           firstName:
//             f.firstName ||
//             user.displayName?.split(" ")[0] ||
//             "",
//           lastName:
//             f.lastName ||
//             user.displayName?.split(" ").slice(1).join(" ") ||
//             "",
//         }));
//       }
//     });
//     return () => unsub();
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]); // 0 if tax included in price
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const method: PaymentMethod =
//         paymentMethod === "cod" ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       setPlacedTotal(order.totalAmount);
//       try {
//         localStorage.removeItem("cart");
//       } catch {
//         /* ignore */
//       }
//       setItems([]);
//       setOrderPlaced(true);
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//               Your order is saved. It will appear in Furniture ERP → Orders.
//             </p>
//             <div className="mt-6 rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-500">Order total</p>
//               <p className="mt-1 text-xl font-bold text-slate-900">
//                 {formatCurrency(placedTotal)}
//               </p>
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div>
//         </div>

//         {items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Enter your details to complete your order.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       2
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Delivery address
//                     </h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Payment status stays Pending until confirmed
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Processing order..." : "Place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//                 <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
//                   <LockKeyhole size={13} />
//                   Saved to Firebase · visible in ERP Orders
//                 </div>
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
//                       <Package size={20} />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4 flex justify-between">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   LockKeyhole,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateShipping,
//   calculateTax,
//   calculateCheckoutTotal,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => ({
//       productId: String(row.productId || row.id || ""),
//       name: String(row.name || "Item"),
//       price: Number(row.price || 0),
//       quantity: Number(row.quantity || 1),
//       image: row.image ? String(row.image) : undefined,
//       category: row.category ? String(row.category) : undefined,
//     }))
//     .filter((i) => i.productId && i.quantity > 0);
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setItems([]);
//         setCartLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setForm((f) => ({
//         ...f,
//         email: f.email || user.email || "",
//         firstName:
//           f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       try {
//         const cart = await getCart(user.uid);
//         if (cancelled) return;
//         setItems(mapCartToCheckout(cart?.items || []));
//       } catch (err) {
//         console.error("Failed to load cart for checkout:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setCartLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const method: PaymentMethod =
//         paymentMethod === "cod" ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       setPlacedTotal(order.totalAmount);

//       try {
//         await clearCart(userId);
//       } catch (err) {
//         console.error("Failed to clear cart after order:", err);
//       }

//       setItems([]);
//       setOrderPlaced(true);
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//               Your order is saved. It will appear in Furniture ERP → Orders.
//             </p>
//             <div className="mt-6 rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-500">Order total</p>
//               <p className="mt-1 text-xl font-bold text-slate-900">
//                 {formatCurrency(placedTotal)}
//               </p>
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div>
//         </div>

//         {cartLoading ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Please sign in to checkout
//             </p>
//             <p className="mt-2 text-xs text-slate-500">
//               Your cart is saved to your account.
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Enter your details to complete your order.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       2
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Delivery address
//                     </h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Payment status stays Pending until confirmed
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Processing order..." : "Place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//                 <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
//                   <LockKeyhole size={13} />
//                   Saved to Firebase · visible in ERP Orders
//                 </div>
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-slate-400">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   LockKeyhole,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateShipping,
//   calculateTax,
//   calculateCheckoutTotal,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => ({
//       productId: String(row.productId || row.id || ""),
//       name: String(row.name || "Item"),
//       price: Number(row.price || 0),
//       quantity: Math.max(1, Number(row.quantity || 1)),
//       image: row.image ? String(row.image) : undefined,
//       category: row.category ? String(row.category) : undefined,
//     }))
//     .filter((i) => i.productId && i.quantity > 0);
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setItems([]);
//         setCartLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setForm((f) => ({
//         ...f,
//         email: f.email || user.email || "",
//         firstName: f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       try {
//         const cart = await getCart(user.uid);
//         if (cancelled) return;
//         setItems(mapCartToCheckout(cart?.items || []));
//       } catch (err) {
//         console.error("Failed to load cart for checkout:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setCartLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const method: PaymentMethod =
//         paymentMethod === "cod" ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       setPlacedTotal(order.totalAmount);

//       try {
//         await clearCart(userId);
//       } catch (err) {
//         console.error("Failed to clear cart after order:", err);
//       }

//       setItems([]);
//       setOrderPlaced(true);
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//               Your order is saved. It will appear in Furniture ERP → Orders.
//             </p>
//             <div className="mt-6 rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-500">Order total</p>
//               <p className="mt-1 text-xl font-bold text-slate-900">
//                 {formatCurrency(placedTotal)}
//               </p>
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div>
//         </div>

//         {cartLoading ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Please sign in to checkout
//             </p>
//             <p className="mt-2 text-xs text-slate-500">
//               Your cart is saved to your account in Firebase.
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Enter your details to complete your order.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       2
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Delivery address
//                     </h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Payment status stays Pending until confirmed
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Processing order..." : "Place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//                 <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
//                   <LockKeyhole size={13} />
//                   Saved to Firebase · visible in ERP Orders
//                 </div>
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-slate-400">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   LockKeyhole,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateShipping,
//   calculateTax,
//   calculateCheckoutTotal,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";
// import {
//   getAddressesByEmail,
//   type SavedAddress,
// } from "@/services/addressService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => ({
//       productId: String(row.productId || row.id || ""),
//       name: String(row.name || "Item"),
//       price: Number(row.price || 0),
//       quantity: Math.max(1, Number(row.quantity || 1)),
//       image: row.image ? String(row.image) : undefined,
//       category: row.category ? String(row.category) : undefined,
//     }))
//     .filter((i) => i.productId && i.quantity > 0);
// }

// function applySavedAddress(
//   saved: SavedAddress,
//   emailFallback: string
// ): AddressForm {
//   const parts = (saved.name || "").trim().split(/\s+/);
//   const firstName = parts[0] || "";
//   const lastName = parts.slice(1).join(" ") || "";
//   const line2 = saved.addressLine2?.trim();
//   const address = line2
//     ? `${saved.addressLine1.trim()}, ${line2}`
//     : saved.addressLine1.trim();

//   return {
//     firstName,
//     lastName,
//     email: emailFallback,
//     phone: saved.phone || "",
//     address,
//     city: saved.city || "",
//     state: saved.state || "",
//     pincode: saved.pincode || "",
//   };
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);

//   const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<string>("");
//   const [addressesLoading, setAddressesLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setSavedAddresses([]);
//         setSelectedAddressId("");
//         setCartLoading(false);
//         return;
//       }

//       const email = (user.email || "").toLowerCase();
//       setUserId(user.uid);
//       setUserEmail(email);
//       setForm((f) => ({
//         ...f,
//         email: f.email || email,
//         firstName: f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       setAddressesLoading(true);

//       try {
//         const [cart, addresses] = await Promise.all([
//           getCart(user.uid),
//           email ? getAddressesByEmail(email) : Promise.resolve([]),
//         ]);

//         if (cancelled) return;

//         setItems(mapCartToCheckout(cart?.items || []));
//         setSavedAddresses(addresses);

//         const defaultAddr =
//           addresses.find((a) => a.isDefault) || addresses[0] || null;

//         if (defaultAddr) {
//           setSelectedAddressId(defaultAddr.id);
//           setForm(applySavedAddress(defaultAddr, email));
//         }
//       } catch (err) {
//         console.error("Failed to load checkout data:", err);
//         if (!cancelled) {
//           setItems([]);
//           setSavedAddresses([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setCartLoading(false);
//           setAddressesLoading(false);
//         }
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSelectAddress = (id: string) => {
//     setSelectedAddressId(id);
//     setError("");

//     if (!id) {
//       // Manual entry
//       setForm((f) => ({
//         ...INITIAL_ADDRESS,
//         email: userEmail || f.email,
//         firstName: f.firstName,
//         lastName: f.lastName,
//       }));
//       return;
//     }

//     const saved = savedAddresses.find((a) => a.id === id);
//     if (saved) {
//       setForm(applySavedAddress(saved, userEmail || form.email));
//     }
//   };

//   // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   setError("");

//   //   if (items.length === 0) {
//   //     setError("Your cart is empty.");
//   //     return;
//   //   }
//   //   if (!userId) {
//   //     setError("Please sign in before placing an order.");
//   //     return;
//   //   }
//   //   if (form.pincode.length !== 6) {
//   //     setError("Please enter a valid 6-digit PIN code.");
//   //     return;
//   //   }

//   //   setLoading(true);
//   //   try {
//   //     const method: PaymentMethod =
//   //       paymentMethod === "cod" ? "COD" : "Card";

//   //     const order = await createOrder({
//   //       userId,
//   //       items,
//   //       shippingAddress: {
//   //         fullName: `${form.firstName} ${form.lastName}`.trim(),
//   //         phone: form.phone.trim(),
//   //         email: form.email.trim(),
//   //         addressLine1: form.address.trim(),
//   //         city: form.city.trim(),
//   //         state: form.state.trim(),
//   //         postalCode: form.pincode.trim(),
//   //         country: "India",
//   //       },
//   //       paymentMethod: method,
//   //       subtotal,
//   //       shippingCharge: shipping,
//   //       discount: 0,
//   //       tax,
//   //       totalAmount: total,
//   //       notes: "",
//   //     });

//   //     setPlacedTotal(order.totalAmount);

//   //     try {
//   //       await clearCart(userId);
//   //     } catch (err) {
//   //       console.error("Failed to clear cart after order:", err);
//   //     }

//   //     setItems([]);
//   //     setOrderPlaced(true);
//   //   } catch (err) {
//   //     console.error("Checkout failed:", err);
//   //     setError(
//   //       err instanceof Error
//   //         ? err.message
//   //         : "We could not place your order. Please try again."
//   //     );
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const method: PaymentMethod =
//         paymentMethod === "cod" ? "COD" : "Card";

//       // 1) Always create Firebase order first (Pending)
//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       // 2) COD → success on site
//       // if (method === "COD") {
//       //   setPlacedTotal(order.totalAmount);
//       //   try {
//       //     await clearCart(userId);
//       //   } catch (err) {
//       //     console.error("Failed to clear cart after order:", err);
//       //   }
//       //   setItems([]);
//       //   setOrderPlaced(true);
//       //   return;
//       // }

//             // 2) COD → success on site
//       if (method === "COD") {
//         setPlacedTotal(order.totalAmount);
//         try {
//           await clearCart(userId);
//           window.dispatchEvent(new Event("cartUpdated")); // badge → 0
//         } catch (err) {
//           console.error("Failed to clear cart after order:", err);
//         }
//         setItems([]);
//         setOrderPlaced(true);
//         setLoading(false);
//         return;
//       }

//       // 3) Card / UPI → Cashfree session + redirect (do NOT clear cart yet)
//       const sessionRes = await fetch("/api/cashfree/create-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           orderId: order.id,
//           orderNumber: order.orderNumber,
//           amount: order.totalAmount,
//           customerName: `${form.firstName} ${form.lastName}`.trim(),
//           customerEmail: form.email.trim(),
//           customerPhone: form.phone.trim(),
//         }),
//       });

//       const sessionData = await sessionRes.json();
//       if (!sessionRes.ok || !sessionData.paymentSessionId) {
//         throw new Error(
//           sessionData.error ||
//             "Could not start Cashfree payment. Check API keys."
//         );
//       }

//       // Load Cashfree JS and open checkout
//       await new Promise<void>((resolve, reject) => {
//         const existing = document.querySelector(
//           'script[src*="sdk.cashfree.com"]'
//         );
//         if (existing) {
//           resolve();
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//         script.async = true;
//         script.onload = () => resolve();
//         script.onerror = () => reject(new Error("Failed to load Cashfree SDK"));
//         document.body.appendChild(script);
//       });

//       // @ts-expect-error Cashfree global
//       const cashfree = window.Cashfree({
//         mode:
//           process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
//             ? "production"
//             : "sandbox",
//       });

//       cashfree.checkout({
//         paymentSessionId: sessionData.paymentSessionId,
//         redirectTarget: "_self",
//       });
//       // Browser navigates to Cashfree; no local success UI
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             {/* <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//               Your order is saved. It will appear in Furniture ERP → Orders.
//             </p> */}
//             <div className="mt-6 rounded-xl bg-slate-50 p-4">
//               <p className="text-xs text-slate-500">Order total</p>
//               <p className="mt-1 text-xl font-bold text-slate-900">
//                 {formatCurrency(placedTotal)}
//               </p>
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div>
//         </div>

//         {cartLoading ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Please sign in to checkout
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Select a saved address or enter a new one.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 {/* Contact */}
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Delivery — dropdown from Manage Addresses */}
//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                         2
//                       </div>
//                       <h2 className="text-sm font-bold text-slate-900">
//                         Delivery address
//                       </h2>
//                     </div>
//                     <Link
//                       href="/account/addresses"
//                       className="text-xs font-semibold text-[#176b5b] hover:underline"
//                     >
//                       Manage addresses
//                     </Link>
//                   </div>

//                   <div className="mb-4">
//                     <label className="mb-2 block text-xs font-semibold text-slate-700">
//                       Saved address
//                     </label>
//                     {addressesLoading ? (
//                       <p className="text-xs text-slate-500">
//                         Loading addresses…
//                       </p>
//                     ) : (
//                       <select
//                         value={selectedAddressId}
//                         onChange={(e) => handleSelectAddress(e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       >
//                         <option value="">
//                           {savedAddresses.length === 0
//                             ? "No saved addresses — enter manually"
//                             : "— Select a saved address —"}
//                         </option>
//                         {savedAddresses.map((a) => (
//                           <option key={a.id} value={a.id}>
//                             {a.type}
//                             {a.isDefault ? " (Default)" : ""} — {a.name},{" "}
//                             {a.addressLine1}, {a.city} – {a.pincode}
//                           </option>
//                         ))}
//                       </select>
//                     )}
//                     {savedAddresses.length === 0 && (
//                       <p className="mt-2 text-xs text-slate-500">
//                         Add addresses under{" "}
//                         <Link
//                           href="/account/addresses"
//                           className="font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Account → Addresses
//                         </Link>{" "}
//                         for faster checkout.
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment */}
//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Payment status stays Pending until confirmed
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Processing order..." : "Place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//                 {/* <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
//                   <LockKeyhole size={13} />
//                   Saved to Firebase · visible in ERP Orders
//                 </div> */}
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-slate-400">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateShipping,
//   calculateTax,
//   calculateCheckoutTotal,
//   parseLeadTimeDays,
//   addCalendarDays,
//   formatExpectedDeliveryLabel,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";
// import {
//   getAddressesByEmail,
//   type SavedAddress,
// } from "@/services/addressService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => {
//       const lead =
//         row.leadTimeDays != null && Number(row.leadTimeDays) > 0
//           ? Math.floor(Number(row.leadTimeDays))
//           : undefined;

//       return {
//         productId: String(row.productId || row.id || ""),
//         name: String(row.name || "Item"),
//         price: Number(row.price || 0),
//         quantity: Math.max(1, Number(row.quantity || 1)),
//         image: row.image ? String(row.image) : undefined,
//         category: row.category ? String(row.category) : undefined,
//         leadTimeDays: lead,
//       };
//     })
//     .filter((i) => i.productId && i.quantity > 0);
// }

// function applySavedAddress(
//   saved: SavedAddress,
//   emailFallback: string
// ): AddressForm {
//   const parts = (saved.name || "").trim().split(/\s+/);
//   const firstName = parts[0] || "";
//   const lastName = parts.slice(1).join(" ") || "";
//   const line2 = saved.addressLine2?.trim();
//   const address = line2
//     ? `${saved.addressLine1.trim()}, ${line2}`
//     : saved.addressLine1.trim();

//   return {
//     firstName,
//     lastName,
//     email: emailFallback,
//     phone: saved.phone || "",
//     address,
//     city: saved.city || "",
//     state: saved.state || "",
//     pincode: saved.pincode || "",
//   };
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);
//   const [placedDeliveryLabel, setPlacedDeliveryLabel] = useState("");

//   const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<string>("");
//   const [addressesLoading, setAddressesLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setSavedAddresses([]);
//         setSelectedAddressId("");
//         setCartLoading(false);
//         return;
//       }

//       const email = (user.email || "").toLowerCase();
//       setUserId(user.uid);
//       setUserEmail(email);
//       setForm((f) => ({
//         ...f,
//         email: f.email || email,
//         firstName: f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       setAddressesLoading(true);

//       try {
//         const [cart, addresses] = await Promise.all([
//           getCart(user.uid),
//           email ? getAddressesByEmail(email) : Promise.resolve([]),
//         ]);

//         if (cancelled) return;

//         setItems(mapCartToCheckout(cart?.items || []));
//         setSavedAddresses(addresses);

//         const defaultAddr =
//           addresses.find((a) => a.isDefault) || addresses[0] || null;

//         if (defaultAddr) {
//           setSelectedAddressId(defaultAddr.id);
//           setForm(applySavedAddress(defaultAddr, email));
//         }
//       } catch (err) {
//         console.error("Failed to load checkout data:", err);
//         if (!cancelled) {
//           setItems([]);
//           setSavedAddresses([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setCartLoading(false);
//           setAddressesLoading(false);
//         }
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const leadTimeDays = useMemo(() => {
//     if (items.length === 0) return 7;
//     const days = items.map((i) =>
//       i.leadTimeDays && i.leadTimeDays > 0
//         ? i.leadTimeDays
//         : parseLeadTimeDays(undefined, 7)
//     );
//     return Math.max(...days, 7);
//   }, [items]);

//   const expectedDeliveryLabel = useMemo(() => {
//     return formatExpectedDeliveryLabel(addCalendarDays(new Date(), leadTimeDays));
//   }, [leadTimeDays]);

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSelectAddress = (id: string) => {
//     setSelectedAddressId(id);
//     setError("");

//     if (!id) {
//       setForm((f) => ({
//         ...INITIAL_ADDRESS,
//         email: userEmail || f.email,
//         firstName: f.firstName,
//         lastName: f.lastName,
//       }));
//       return;
//     }

//     const saved = savedAddresses.find((a) => a.id === id);
//     if (saved) {
//       setForm(applySavedAddress(saved, userEmail || form.email));
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const isCod = paymentMethod === "cod";
//       const method: PaymentMethod = isCod ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       // ——— COD only: never load Cashfree ———
//       if (isCod || method === "COD") {
//         setPlacedTotal(order.totalAmount);
//         setPlacedDeliveryLabel(
//           order.expectedDeliveryLabel || expectedDeliveryLabel
//         );
//         try {
//           await clearCart(userId);
//           window.dispatchEvent(new Event("cartUpdated"));
//         } catch (err) {
//           console.error("Failed to clear cart after order:", err);
//         }
//         setItems([]);
//         setOrderPlaced(true);
//         setLoading(false);
//         return;
//       }

//       // ——— Online (Card) only: Cashfree ———
//       const sessionRes = await fetch("/api/cashfree/create-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           orderId: order.id,
//           orderNumber: order.orderNumber,
//           amount: order.totalAmount,
//           customerName: `${form.firstName} ${form.lastName}`.trim(),
//           customerEmail: form.email.trim(),
//           customerPhone: form.phone.trim(),
//         }),
//       });

//       const sessionData = await sessionRes.json();
//       if (!sessionRes.ok || !sessionData.paymentSessionId) {
//         throw new Error(
//           sessionData.error ||
//             "Could not start Cashfree payment. Check API keys."
//         );
//       }

//       await new Promise<void>((resolve, reject) => {
//         const existing = document.querySelector(
//           'script[src*="sdk.cashfree.com"]'
//         );
//         if (existing) {
//           resolve();
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//         script.async = true;
//         script.onload = () => resolve();
//         script.onerror = () =>
//           reject(new Error("Failed to load Cashfree SDK"));
//         document.body.appendChild(script);
//       });

//       // @ts-expect-error Cashfree global
//       const cashfree = window.Cashfree({
//         mode:
//           process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
//             ? "production"
//             : "sandbox",
//       });

//       cashfree.checkout({
//         paymentSessionId: sessionData.paymentSessionId,
//         redirectTarget: "_self",
//       });
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             <div className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4">
//               <div>
//                 <p className="text-xs text-slate-500">Order total</p>
//                 <p className="mt-1 text-xl font-bold text-slate-900">
//                   {formatCurrency(placedTotal)}
//                 </p>
//               </div>
//               {placedDeliveryLabel && (
//                 <div className="border-t border-slate-200 pt-3">
//                   <p className="text-xs text-slate-500">Expected delivery</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {placedDeliveryLabel}
//                   </p>
//                 </div>
//               )}
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div>
//         </div>

//         {cartLoading ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Please sign in to checkout
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Select a saved address or enter a new one.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                         2
//                       </div>
//                       <h2 className="text-sm font-bold text-slate-900">
//                         Delivery address
//                       </h2>
//                     </div>
//                     <Link
//                       href="/account/addresses"
//                       className="text-xs font-semibold text-[#176b5b] hover:underline"
//                     >
//                       Manage addresses
//                     </Link>
//                   </div>

//                   <div className="mb-4">
//                     <label className="mb-2 block text-xs font-semibold text-slate-700">
//                       Saved address
//                     </label>
//                     {addressesLoading ? (
//                       <p className="text-xs text-slate-500">
//                         Loading addresses…
//                       </p>
//                     ) : (
//                       <select
//                         value={selectedAddressId}
//                         onChange={(e) => handleSelectAddress(e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       >
//                         <option value="">
//                           {savedAddresses.length === 0
//                             ? "No saved addresses — enter manually"
//                             : "— Select a saved address —"}
//                         </option>
//                         {savedAddresses.map((a) => (
//                           <option key={a.id} value={a.id}>
//                             {a.type}
//                             {a.isDefault ? " (Default)" : ""} — {a.name},{" "}
//                             {a.addressLine1}, {a.city} – {a.pincode}
//                           </option>
//                         ))}
//                       </select>
//                     )}
//                     {savedAddresses.length === 0 && (
//                       <p className="mt-2 text-xs text-slate-500">
//                         Add addresses under{" "}
//                         <Link
//                           href="/account/addresses"
//                           className="font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Account → Addresses
//                         </Link>{" "}
//                         for faster checkout.
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Pay securely via Cashfree
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives · no online payment
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading
//                     ? paymentMethod === "cod"
//                       ? "Placing order..."
//                       : "Redirecting to payment..."
//                     : paymentMethod === "cod"
//                       ? "Place COD order"
//                       : "Pay & place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-slate-400">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
//                   <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                     Expected delivery
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-900">
//                     {expectedDeliveryLabel}
//                   </p>
//                   <p className="mt-0.5 text-[11px] text-slate-500">
//                     Based on {leadTimeDays} day{leadTimeDays === 1 ? "" : "s"}{" "}
//                     lead time
//                   </p>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateTax,
//   calculateCheckoutTotal,
//   parseLeadTimeDays,
//   addCalendarDays,
//   formatExpectedDeliveryLabel,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getDeliverySettings,
//   calcShippingFromSettings,
//   DEFAULT_DELIVERY_SETTINGS,
//   type DeliverySettings,
// } from "@/services/deliverySettingsService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";
// import {
//   getAddressesByEmail,
//   type SavedAddress,
// } from "@/services/addressService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => {
//       const lead =
//         row.leadTimeDays != null && Number(row.leadTimeDays) > 0
//           ? Math.floor(Number(row.leadTimeDays))
//           : undefined;

//       return {
//         productId: String(row.productId || row.id || ""),
//         name: String(row.name || "Item"),
//         price: Number(row.price || 0),
//         quantity: Math.max(1, Number(row.quantity || 1)),
//         image: row.image ? String(row.image) : undefined,
//         category: row.category ? String(row.category) : undefined,
//         leadTimeDays: lead,
//       };
//     })
//     .filter((i) => i.productId && i.quantity > 0);
// }

// function applySavedAddress(
//   saved: SavedAddress,
//   emailFallback: string
// ): AddressForm {
//   const parts = (saved.name || "").trim().split(/\s+/);
//   const firstName = parts[0] || "";
//   const lastName = parts.slice(1).join(" ") || "";
//   const line2 = saved.addressLine2?.trim();
//   const address = line2
//     ? `${saved.addressLine1.trim()}, ${line2}`
//     : saved.addressLine1.trim();

//   return {
//     firstName,
//     lastName,
//     email: emailFallback,
//     phone: saved.phone || "",
//     address,
//     city: saved.city || "",
//     state: saved.state || "",
//     pincode: saved.pincode || "",
//   };
// }

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);
//   const [placedDeliveryLabel, setPlacedDeliveryLabel] = useState("");

//   const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<string>("");
//   const [addressesLoading, setAddressesLoading] = useState(false);

//   const [deliverySettings, setDeliverySettings] = useState<DeliverySettings>(
//     DEFAULT_DELIVERY_SETTINGS
//   );

//   useEffect(() => {
//     getDeliverySettings()
//       .then(setDeliverySettings)
//       .catch(() => setDeliverySettings(DEFAULT_DELIVERY_SETTINGS));
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setSavedAddresses([]);
//         setSelectedAddressId("");
//         setCartLoading(false);
//         return;
//       }

//       const email = (user.email || "").toLowerCase();
//       setUserId(user.uid);
//       setUserEmail(email);
//       setForm((f) => ({
//         ...f,
//         email: f.email || email,
//         firstName: f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       setAddressesLoading(true);

//       try {
//         const [cart, addresses] = await Promise.all([
//           getCart(user.uid),
//           email ? getAddressesByEmail(email) : Promise.resolve([]),
//         ]);

//         if (cancelled) return;

//         setItems(mapCartToCheckout(cart?.items || []));
//         setSavedAddresses(addresses);

//         const defaultAddr =
//           addresses.find((a) => a.isDefault) || addresses[0] || null;

//         if (defaultAddr) {
//           setSelectedAddressId(defaultAddr.id);
//           setForm(applySavedAddress(defaultAddr, email));
//         }
//       } catch (err) {
//         console.error("Failed to load checkout data:", err);
//         if (!cancelled) {
//           setItems([]);
//           setSavedAddresses([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setCartLoading(false);
//           setAddressesLoading(false);
//         }
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(
//     () => calcShippingFromSettings(subtotal, deliverySettings),
//     [subtotal, deliverySettings]
//   );
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const leadTimeDays = useMemo(() => {
//     const fallback = deliverySettings.defaultLeadTimeDays || 7;
//     if (items.length === 0) return fallback;
//     const days = items.map((i) =>
//       i.leadTimeDays && i.leadTimeDays > 0
//         ? i.leadTimeDays
//         : parseLeadTimeDays(undefined, fallback)
//     );
//     return Math.max(...days, fallback);
//   }, [items, deliverySettings]);

//   const expectedDeliveryLabel = useMemo(() => {
//     return formatExpectedDeliveryLabel(
//       addCalendarDays(new Date(), leadTimeDays)
//     );
//   }, [leadTimeDays]);

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSelectAddress = (id: string) => {
//     setSelectedAddressId(id);
//     setError("");

//     if (!id) {
//       setForm((f) => ({
//         ...INITIAL_ADDRESS,
//         email: userEmail || f.email,
//         firstName: f.firstName,
//         lastName: f.lastName,
//       }));
//       return;
//     }

//     const saved = savedAddresses.find((a) => a.id === id);
//     if (saved) {
//       setForm(applySavedAddress(saved, userEmail || form.email));
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const isCod = paymentMethod === "cod";
//       const method: PaymentMethod = isCod ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       if (isCod || method === "COD") {
//         setPlacedTotal(order.totalAmount);
//         setPlacedDeliveryLabel(
//           order.expectedDeliveryLabel || expectedDeliveryLabel
//         );
//         try {
//           await clearCart(userId);
//           window.dispatchEvent(new Event("cartUpdated"));
//         } catch (err) {
//           console.error("Failed to clear cart after order:", err);
//         }
//         setItems([]);
//         setOrderPlaced(true);
//         setLoading(false);
//         return;
//       }

//       const sessionRes = await fetch("/api/cashfree/create-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           orderId: order.id,
//           orderNumber: order.orderNumber,
//           amount: order.totalAmount,
//           customerName: `${form.firstName} ${form.lastName}`.trim(),
//           customerEmail: form.email.trim(),
//           customerPhone: form.phone.trim(),
//         }),
//       });

//       const sessionData = await sessionRes.json();
//       if (!sessionRes.ok || !sessionData.paymentSessionId) {
//         throw new Error(
//           sessionData.error ||
//             "Could not start Cashfree payment. Check API keys."
//         );
//       }

//       await new Promise<void>((resolve, reject) => {
//         const existing = document.querySelector(
//           'script[src*="sdk.cashfree.com"]'
//         );
//         if (existing) {
//           resolve();
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//         script.async = true;
//         script.onload = () => resolve();
//         script.onerror = () =>
//           reject(new Error("Failed to load Cashfree SDK"));
//         document.body.appendChild(script);
//       });

//       // @ts-expect-error Cashfree global
//       const cashfree = window.Cashfree({
//         mode:
//           process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
//             ? "production"
//             : "sandbox",
//       });

//       cashfree.checkout({
//         paymentSessionId: sessionData.paymentSessionId,
//         redirectTarget: "_self",
//       });
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
//               Order confirmed
//             </p>
//             <h1 className="mt-2 text-2xl font-bold text-slate-900">
//               Thank you for your order!
//             </h1>
//             <div className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4">
//               <div>
//                 <p className="text-xs text-slate-500">Order total</p>
//                 <p className="mt-1 text-xl font-bold text-slate-900">
//                   {formatCurrency(placedTotal)}
//                 </p>
//               </div>
//               {placedDeliveryLabel && (
//                 <div className="border-t border-slate-200 pt-3">
//                   <p className="text-xs text-slate-500">Expected delivery</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {placedDeliveryLabel}
//                   </p>
//                 </div>
//               )}
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Continue shopping
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
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//           {/* <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-xs font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">Secure checkout</p>
//             </div>
//           </div> */}
//         </div>

//         {cartLoading ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Please sign in to checkout
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-slate-800">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#176b5b] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//                 <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Select a saved address or enter a new one.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                         2
//                       </div>
//                       <h2 className="text-sm font-bold text-slate-900">
//                         Delivery address
//                       </h2>
//                     </div>
//                     <Link
//                       href="/account/addresses"
//                       className="text-xs font-semibold text-[#176b5b] hover:underline"
//                     >
//                       Manage addresses
//                     </Link>
//                   </div>

//                   <div className="mb-4">
//                     <label className="mb-2 block text-xs font-semibold text-slate-700">
//                       Saved address
//                     </label>
//                     {addressesLoading ? (
//                       <p className="text-xs text-slate-500">
//                         Loading addresses…
//                       </p>
//                     ) : (
//                       <select
//                         value={selectedAddressId}
//                         onChange={(e) => handleSelectAddress(e.target.value)}
//                         className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                       >
//                         <option value="">
//                           {savedAddresses.length === 0
//                             ? "No saved addresses — enter manually"
//                             : "— Select a saved address —"}
//                         </option>
//                         {savedAddresses.map((a) => (
//                           <option key={a.id} value={a.id}>
//                             {a.type}
//                             {a.isDefault ? " (Default)" : ""} — {a.name},{" "}
//                             {a.addressLine1}, {a.city} – {a.pincode}
//                           </option>
//                         ))}
//                       </select>
//                     )}
//                     {savedAddresses.length === 0 && (
//                       <p className="mt-2 text-xs text-slate-500">
//                         Add addresses under{" "}
//                         <Link
//                           href="/account/addresses"
//                           className="font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Account → Addresses
//                         </Link>{" "}
//                         for faster checkout.
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-slate-700">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-slate-400"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-slate-700">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 border-t border-slate-100 pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-slate-900">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "card"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                       />
//                       <CreditCard size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">Card / Online</p>
//                         <p className="text-xs text-slate-500">
//                           Pay securely via Cashfree
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${
//                         paymentMethod === "cod"
//                           ? "border-[#176b5b] bg-[#f4fbf8]"
//                           : "border-slate-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                       />
//                       <Package size={19} />
//                       <div>
//                         <p className="text-sm font-semibold">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-slate-500">
//                           Pay when order arrives · no online payment
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading
//                     ? paymentMethod === "cod"
//                       ? "Placing order..."
//                       : "Redirecting to payment..."
//                     : paymentMethod === "cod"
//                       ? "Place COD order"
//                       : "Pay & place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//               </form>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold">Order summary</h2>
//                   <ShoppingBag size={18} className="text-slate-400" />
//                 </div>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-slate-400">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold">{item.name}</p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-slate-500">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-emerald-600">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 {deliverySettings.freeShippingMin > 0 && (
//                   <p className="text-[10px] text-slate-400">
//                     {shipping === 0
//                       ? `Free delivery (order ≥ ${formatCurrency(deliverySettings.freeShippingMin)})`
//                       : `Free delivery above ${formatCurrency(deliverySettings.freeShippingMin)}`}
//                   </p>
//                 )}
//                 <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
//                   <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                     Expected delivery
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-900">
//                     {expectedDeliveryLabel}
//                   </p>
//                   <p className="mt-0.5 text-[11px] text-slate-500">
//                     Based on {leadTimeDays} day
//                     {leadTimeDays === 1 ? "" : "s"} lead time
//                   </p>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-bold">Total</span>
//                   <span className="text-xl font-bold">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CreditCard,
//   MapPin,
//   Package,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   createOrder,
//   calculateSubtotal,
//   calculateTax,
//   calculateCheckoutTotal,
//   parseLeadTimeDays,
//   addCalendarDays,
//   formatExpectedDeliveryLabel,
//   type CheckoutItem,
//   type PaymentMethod,
// } from "@/services/checkoutService";
// import {
//   getDeliverySettings,
//   calcShippingFromSettings,
//   DEFAULT_DELIVERY_SETTINGS,
//   type DeliverySettings,
// } from "@/services/deliverySettingsService";
// import {
//   getCart,
//   clearCart,
//   type CartItem,
// } from "@/services/cartService";
// import {
//   getAddressesByEmail,
//   type SavedAddress,
// } from "@/services/addressService";

// interface AddressForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_ADDRESS: AddressForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
//   return items
//     .map((row) => {
//       const lead =
//         row.leadTimeDays != null && Number(row.leadTimeDays) > 0
//           ? Math.floor(Number(row.leadTimeDays))
//           : undefined;

//       return {
//         productId: String(row.productId || row.id || ""),
//         name: String(row.name || "Item"),
//         price: Number(row.price || 0),
//         quantity: Math.max(1, Number(row.quantity || 1)),
//         image: row.image ? String(row.image) : undefined,
//         category: row.category ? String(row.category) : undefined,
//         leadTimeDays: lead,
//       };
//     })
//     .filter((i) => i.productId && i.quantity > 0);
// }

// function applySavedAddress(
//   saved: SavedAddress,
//   emailFallback: string
// ): AddressForm {
//   const parts = (saved.name || "").trim().split(/\s+/);
//   const firstName = parts[0] || "";
//   const lastName = parts.slice(1).join(" ") || "";
//   const line2 = saved.addressLine2?.trim();
//   const address = line2
//     ? `${saved.addressLine1.trim()}, ${line2}`
//     : saved.addressLine1.trim();

//   return {
//     firstName,
//     lastName,
//     email: emailFallback,
//     phone: saved.phone || "",
//     address,
//     city: saved.city || "",
//     state: saved.state || "",
//     pincode: saved.pincode || "",
//   };
// }

// const fieldClass =
//   "w-full rounded-xl border border-[#e0d9ce] bg-white px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#a6a089] focus:border-[#b8956c] focus:ring-2 focus:ring-[#b8956c]/15";

// export default function CheckoutPage() {
//   const [items, setItems] = useState<CheckoutItem[]>([]);
//   const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
//   const [userId, setUserId] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [cartLoading, setCartLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [placedTotal, setPlacedTotal] = useState(0);
//   const [placedDeliveryLabel, setPlacedDeliveryLabel] = useState("");

//   const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<string>("");
//   const [addressesLoading, setAddressesLoading] = useState(false);

//   const [deliverySettings, setDeliverySettings] = useState<DeliverySettings>(
//     DEFAULT_DELIVERY_SETTINGS
//   );

//   useEffect(() => {
//     getDeliverySettings()
//       .then(setDeliverySettings)
//       .catch(() => setDeliverySettings(DEFAULT_DELIVERY_SETTINGS));
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setSavedAddresses([]);
//         setSelectedAddressId("");
//         setCartLoading(false);
//         return;
//       }

//       const email = (user.email || "").toLowerCase();
//       setUserId(user.uid);
//       setUserEmail(email);
//       setForm((f) => ({
//         ...f,
//         email: f.email || email,
//         firstName: f.firstName || user.displayName?.split(" ")[0] || "",
//         lastName:
//           f.lastName ||
//           user.displayName?.split(" ").slice(1).join(" ") ||
//           "",
//       }));

//       setCartLoading(true);
//       setAddressesLoading(true);

//       try {
//         const [cart, addresses] = await Promise.all([
//           getCart(user.uid),
//           email ? getAddressesByEmail(email) : Promise.resolve([]),
//         ]);

//         if (cancelled) return;

//         setItems(mapCartToCheckout(cart?.items || []));
//         setSavedAddresses(addresses);

//         const defaultAddr =
//           addresses.find((a) => a.isDefault) || addresses[0] || null;

//         if (defaultAddr) {
//           setSelectedAddressId(defaultAddr.id);
//           setForm(applySavedAddress(defaultAddr, email));
//         }
//       } catch (err) {
//         console.error("Failed to load checkout data:", err);
//         if (!cancelled) {
//           setItems([]);
//           setSavedAddresses([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setCartLoading(false);
//           setAddressesLoading(false);
//         }
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const subtotal = useMemo(() => calculateSubtotal(items), [items]);
//   const shipping = useMemo(
//     () => calcShippingFromSettings(subtotal, deliverySettings),
//     [subtotal, deliverySettings]
//   );
//   const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
//   const total = useMemo(
//     () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
//     [subtotal, shipping, tax]
//   );

//   const leadTimeDays = useMemo(() => {
//     const fallback = deliverySettings.defaultLeadTimeDays || 7;
//     if (items.length === 0) return fallback;
//     const days = items.map((i) =>
//       i.leadTimeDays && i.leadTimeDays > 0
//         ? i.leadTimeDays
//         : parseLeadTimeDays(undefined, fallback)
//     );
//     return Math.max(...days, fallback);
//   }, [items, deliverySettings]);

//   const expectedDeliveryLabel = useMemo(() => {
//     return formatExpectedDeliveryLabel(
//       addCalendarDays(new Date(), leadTimeDays)
//     );
//   }, [leadTimeDays]);

//   const updateField = (field: keyof AddressForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSelectAddress = (id: string) => {
//     setSelectedAddressId(id);
//     setError("");

//     if (!id) {
//       setForm((f) => ({
//         ...INITIAL_ADDRESS,
//         email: userEmail || f.email,
//         firstName: f.firstName,
//         lastName: f.lastName,
//       }));
//       return;
//     }

//     const saved = savedAddresses.find((a) => a.id === id);
//     if (saved) {
//       setForm(applySavedAddress(saved, userEmail || form.email));
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (items.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }
//     if (!userId) {
//       setError("Please sign in before placing an order.");
//       return;
//     }
//     if (form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const isCod = paymentMethod === "cod";
//       const method: PaymentMethod = isCod ? "COD" : "Card";

//       const order = await createOrder({
//         userId,
//         items,
//         shippingAddress: {
//           fullName: `${form.firstName} ${form.lastName}`.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           addressLine1: form.address.trim(),
//           city: form.city.trim(),
//           state: form.state.trim(),
//           postalCode: form.pincode.trim(),
//           country: "India",
//         },
//         paymentMethod: method,
//         subtotal,
//         shippingCharge: shipping,
//         discount: 0,
//         tax,
//         totalAmount: total,
//         notes: "",
//       });

//       if (isCod || method === "COD") {
//         setPlacedTotal(order.totalAmount);
//         setPlacedDeliveryLabel(
//           order.expectedDeliveryLabel || expectedDeliveryLabel
//         );
//         try {
//           await clearCart(userId);
//           window.dispatchEvent(new Event("cartUpdated"));
//         } catch (err) {
//           console.error("Failed to clear cart after order:", err);
//         }
//         setItems([]);
//         setOrderPlaced(true);
//         setLoading(false);
//         return;
//       }

//       const sessionRes = await fetch("/api/cashfree/create-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           orderId: order.id,
//           orderNumber: order.orderNumber,
//           amount: order.totalAmount,
//           customerName: `${form.firstName} ${form.lastName}`.trim(),
//           customerEmail: form.email.trim(),
//           customerPhone: form.phone.trim(),
//         }),
//       });

//       const sessionData = await sessionRes.json();
//       if (!sessionRes.ok || !sessionData.paymentSessionId) {
//         throw new Error(
//           sessionData.error ||
//             "Could not start Cashfree payment. Check API keys."
//         );
//       }

//       await new Promise<void>((resolve, reject) => {
//         const existing = document.querySelector(
//           'script[src*="sdk.cashfree.com"]'
//         );
//         if (existing) {
//           resolve();
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//         script.async = true;
//         script.onload = () => resolve();
//         script.onerror = () =>
//           reject(new Error("Failed to load Cashfree SDK"));
//         document.body.appendChild(script);
//       });

//       // @ts-expect-error Cashfree global
//       const cashfree = window.Cashfree({
//         mode:
//           process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
//             ? "production"
//             : "sandbox",
//       });

//       cashfree.checkout({
//         paymentSessionId: sessionData.paymentSessionId,
//         redirectTarget: "_self",
//       });
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "We could not place your order. Please try again."
//       );
//       setLoading(false);
//     }
//   };

//   if (orderPlaced) {
//     return (
//       <main className="min-h-screen bg-[#faf8f4]">
//         <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//           <section className="w-full rounded-2xl border border-[#e8e2d8] bg-white p-8 text-center shadow-sm sm:p-10">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3ebe0] text-[#9a5b18]">
//               <Check size={30} />
//             </div>
//             <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#b8956c]">
//               Order confirmed
//             </p>
//             <h1 className="font-display mt-2 text-2xl font-semibold text-[#1a1a1a]">
//               Thank you for your order!
//             </h1>
//             <div className="mt-6 space-y-3 rounded-xl border border-[#f0ebe3] bg-[#faf8f4] p-4">
//               <div>
//                 <p className="text-xs text-[#8a847c]">Order total</p>
//                 <p className="mt-1 text-xl font-bold text-[#1a1a1a]">
//                   {formatCurrency(placedTotal)}
//                 </p>
//               </div>
//               {placedDeliveryLabel && (
//                 <div className="border-t border-[#e8e2d8] pt-3">
//                   <p className="text-xs text-[#8a847c]">Expected delivery</p>
//                   <p className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {placedDeliveryLabel}
//                   </p>
//                 </div>
//               )}
//             </div>
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26]"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-full border border-[#e0d9ce] bg-white px-5 py-3 text-sm font-semibold text-[#5c564e] transition hover:border-[#b8956c] hover:bg-[#faf8f4]"
//               >
//                 Continue shopping
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#faf8f4]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#8a847c] transition hover:text-[#1a1a1a]"
//           >
//             <ArrowLeft size={15} />
//             Back to cart
//           </Link>
//         </div>

//         {cartLoading ? (
//           <div className="rounded-2xl border border-[#e8e2d8] bg-white p-10 text-center text-sm text-[#8a847c]">
//             Loading your cart…
//           </div>
//         ) : !userId ? (
//           <div className="rounded-2xl border border-[#e8e2d8] bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-[#1a1a1a]">
//               Please sign in to checkout
//             </p>
//             <Link
//               href="/sign-in"
//               className="mt-4 inline-block text-sm font-semibold text-[#b8956c] hover:text-[#8b7355] hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         ) : items.length === 0 ? (
//           <div className="rounded-2xl border border-[#e8e2d8] bg-white p-10 text-center">
//             <p className="text-sm font-semibold text-[#1a1a1a]">
//               Your cart is empty
//             </p>
//             <Link
//               href="/products"
//               className="mt-4 inline-block text-sm font-semibold text-[#b8956c] hover:text-[#8b7355] hover:underline"
//             >
//               Browse products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
//             <section className="rounded-2xl border border-[#e8e2d8] bg-white shadow-sm">
//               <div className="border-b border-[#f0ebe3] px-5 py-5 sm:px-7">
//                 <h1 className="font-display text-xl font-semibold text-[#1a1a1a]">
//                   Checkout
//                 </h1>
//                 <p className="mt-1 text-xs text-[#8a847c]">
//                   Select a saved address or enter a new one.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
//                 {/* Contact */}
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3ebe0] text-xs font-bold text-[#9a5b18]">
//                       1
//                     </div>
//                     <h2 className="text-sm font-bold text-[#1a1a1a]">
//                       Contact information
//                     </h2>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                         First name
//                       </label>
//                       <input
//                         required
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                         Last name
//                       </label>
//                       <input
//                         required
//                         value={form.lastName}
//                         onChange={(e) =>
//                           updateField("lastName", e.target.value)
//                         }
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => updateField("email", e.target.value)}
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => updateField("phone", e.target.value)}
//                         className={fieldClass}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="mt-8 border-t border-[#f0ebe3] pt-7">
//                   <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3ebe0] text-xs font-bold text-[#9a5b18]">
//                         2
//                       </div>
//                       <h2 className="text-sm font-bold text-[#1a1a1a]">
//                         Delivery address
//                       </h2>
//                     </div>
//                     <Link
//                       href="/account/addresses"
//                       className="text-xs font-semibold text-[#b8956c] hover:text-[#8b7355] hover:underline"
//                     >
//                       Manage addresses
//                     </Link>
//                   </div>

//                   <div className="mb-4">
//                     <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                       Saved address
//                     </label>
//                     {addressesLoading ? (
//                       <p className="text-xs text-[#8a847c]">
//                         Loading addresses…
//                       </p>
//                     ) : (
//                       <select
//                         value={selectedAddressId}
//                         onChange={(e) => handleSelectAddress(e.target.value)}
//                         className={fieldClass}
//                       >
//                         <option value="">
//                           {savedAddresses.length === 0
//                             ? "No saved addresses — enter manually"
//                             : "— Select a saved address —"}
//                         </option>
//                         {savedAddresses.map((a) => (
//                           <option key={a.id} value={a.id}>
//                             {a.type}
//                             {a.isDefault ? " (Default)" : ""} — {a.name},{" "}
//                             {a.addressLine1}, {a.city} – {a.pincode}
//                           </option>
//                         ))}
//                       </select>
//                     )}
//                     {savedAddresses.length === 0 && (
//                       <p className="mt-2 text-xs text-[#8a847c]">
//                         Add addresses under{" "}
//                         <Link
//                           href="/account/addresses"
//                           className="font-semibold text-[#b8956c] hover:underline"
//                         >
//                           Account → Addresses
//                         </Link>{" "}
//                         for faster checkout.
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                         Address
//                       </label>
//                       <div className="relative">
//                         <MapPin
//                           size={16}
//                           className="absolute left-3 top-3 text-[#a6a089]"
//                         />
//                         <textarea
//                           required
//                           rows={3}
//                           value={form.address}
//                           onChange={(e) =>
//                             updateField("address", e.target.value)
//                           }
//                           className={`${fieldClass} resize-none py-2.5 pl-9 pr-3`}
//                         />
//                       </div>
//                     </div>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                           City
//                         </label>
//                         <input
//                           required
//                           value={form.city}
//                           onChange={(e) => updateField("city", e.target.value)}
//                           className={fieldClass}
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                           State
//                         </label>
//                         <input
//                           required
//                           value={form.state}
//                           onChange={(e) => updateField("state", e.target.value)}
//                           className={fieldClass}
//                         />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                           PIN code
//                         </label>
//                         <input
//                           required
//                           maxLength={6}
//                           value={form.pincode}
//                           onChange={(e) =>
//                             updateField(
//                               "pincode",
//                               e.target.value.replace(/\D/g, "")
//                             )
//                           }
//                           className={fieldClass}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment */}
//                 <div className="mt-8 border-t border-[#f0ebe3] pt-7">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3ebe0] text-xs font-bold text-[#9a5b18]">
//                       3
//                     </div>
//                     <h2 className="text-sm font-bold text-[#1a1a1a]">
//                       Payment method
//                     </h2>
//                   </div>
//                   <div className="space-y-3">
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
//                         paymentMethod === "card"
//                           ? "border-[#b8956c] bg-[#faf6f0]"
//                           : "border-[#e0d9ce] hover:border-[#d4cdc2]"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "card"}
//                         onChange={() => setPaymentMethod("card")}
//                         className="accent-[#9a5b18]"
//                       />
//                       <CreditCard size={19} className="text-[#5c564e]" />
//                       <div>
//                         <p className="text-sm font-semibold text-[#1a1a1a]">
//                           Card / Online
//                         </p>
//                         <p className="text-xs text-[#8a847c]">
//                           Pay securely via Cashfree
//                         </p>
//                       </div>
//                     </label>
//                     <label
//                       className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
//                         paymentMethod === "cod"
//                           ? "border-[#b8956c] bg-[#faf6f0]"
//                           : "border-[#e0d9ce] hover:border-[#d4cdc2]"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="payment"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => setPaymentMethod("cod")}
//                         className="accent-[#9a5b18]"
//                       />
//                       <Package size={19} className="text-[#5c564e]" />
//                       <div>
//                         <p className="text-sm font-semibold text-[#1a1a1a]">
//                           Cash on delivery
//                         </p>
//                         <p className="text-xs text-[#8a847c]">
//                           Pay when order arrives · no online payment
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-60"
//                 >
//                   {loading
//                     ? paymentMethod === "cod"
//                       ? "Placing order..."
//                       : "Redirecting to payment..."
//                     : paymentMethod === "cod"
//                       ? "Place COD order"
//                       : "Pay & place order"}
//                   {!loading && <ArrowRight size={16} />}
//                 </button>
//               </form>
//             </section>

//             {/* Order summary */}
//             <aside className="h-fit rounded-2xl border border-[#e8e2d8] bg-white shadow-sm lg:sticky lg:top-6">
//               <div className="border-b border-[#f0ebe3] px-5 py-5">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-base font-bold text-[#1a1a1a]">
//                     Order summary
//                   </h2>
//                   <ShoppingBag size={18} className="text-[#a6a089]" />
//                 </div>
//               </div>
//               <div className="divide-y divide-[#f0ebe3]">
//                 {items.map((item) => (
//                   <div key={item.productId} className="flex gap-3 px-5 py-4">
//                     <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f5f0e8]">
//                       {item.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-full w-full object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-[#a6a089]">
//                           <Package size={20} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs font-semibold text-[#1a1a1a]">
//                         {item.name}
//                       </p>
//                       <p className="mt-1 text-[11px] text-[#8a847c]">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-xs font-bold text-[#1a1a1a]">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-3 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-[#8a847c]">Subtotal</span>
//                   <span className="font-semibold text-[#1a1a1a]">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="flex items-center gap-2 text-[#8a847c]">
//                     <Truck size={14} />
//                     Delivery
//                   </span>
//                   <span className="font-semibold text-[#9a5b18]">
//                     {shipping === 0 ? "Free" : formatCurrency(shipping)}
//                   </span>
//                 </div>
//                 {deliverySettings.freeShippingMin > 0 && (
//                   <p className="text-[10px] text-[#a6a089]">
//                     {shipping === 0
//                       ? `Free delivery (order ≥ ${formatCurrency(deliverySettings.freeShippingMin)})`
//                       : `Free delivery above ${formatCurrency(deliverySettings.freeShippingMin)}`}
//                   </p>
//                 )}
//                 <div className="rounded-xl border border-[#f0ebe3] bg-[#faf8f4] px-3 py-3">
//                   <p className="text-[11px] font-semibold uppercase tracking-wide text-[#a6a089]">
//                     Expected delivery
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-[#1a1a1a]">
//                     {expectedDeliveryLabel}
//                   </p>
//                   <p className="mt-0.5 text-[11px] text-[#8a847c]">
//                     Based on {leadTimeDays} day
//                     {leadTimeDays === 1 ? "" : "s"} lead time
//                   </p>
//                 </div>
//                 <div className="flex justify-between border-t border-[#f0ebe3] pt-4">
//                   <span className="text-sm font-bold text-[#1a1a1a]">Total</span>
//                   <span className="text-xl font-bold text-[#1a1a1a]">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Lock,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  createOrder,
  calculateSubtotal,
  calculateTax,
  calculateCheckoutTotal,
  parseLeadTimeDays,
  addCalendarDays,
  formatExpectedDeliveryLabel,
  type CheckoutItem,
  type PaymentMethod,
} from "@/services/checkoutService";
import {
  getDeliverySettings,
  calcShippingFromSettings,
  DEFAULT_DELIVERY_SETTINGS,
  type DeliverySettings,
} from "@/services/deliverySettingsService";
import {
  getCart,
  clearCart,
  type CartItem,
} from "@/services/cartService";
import {
  getAddressesByEmail,
  type SavedAddress,
} from "@/services/addressService";

/** Palette aligned with cart + reference */
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
  goldHover: "#866832",
  goldRing: "#c4a265",
  black: "#1a1a1a",
  selectedBg: "#faf6f0",
};

interface AddressForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes: string;
}

const INITIAL_ADDRESS: AddressForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  notes: "",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function mapCartToCheckout(items: CartItem[]): CheckoutItem[] {
  return items
    .map((row) => {
      const lead =
        row.leadTimeDays != null && Number(row.leadTimeDays) > 0
          ? Math.floor(Number(row.leadTimeDays))
          : undefined;
      return {
        productId: String(row.productId || row.id || ""),
        name: String(row.name || "Item"),
        price: Number(row.price || 0),
        quantity: Math.max(1, Number(row.quantity || 1)),
        image: row.image ? String(row.image) : undefined,
        category: row.category ? String(row.category) : undefined,
        leadTimeDays: lead,
      };
    })
    .filter((i) => i.productId && i.quantity > 0);
}

function applySavedAddress(
  saved: SavedAddress,
  emailFallback: string
): AddressForm {
  const parts = (saved.name || "").trim().split(/\s+/);
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";
  const line2 = saved.addressLine2?.trim();
  const address = line2
    ? `${saved.addressLine1.trim()}, ${line2}`
    : saved.addressLine1.trim();

  return {
    firstName,
    lastName,
    email: emailFallback,
    phone: saved.phone || "",
    address,
    city: saved.city || "",
    state: saved.state || "",
    pincode: saved.pincode || "",
    notes: "",
  };
}

const fieldClass =
  "w-full rounded-xl border border-[#ebe4d8] bg-white px-3.5 py-2.5 text-sm text-[#1c1916] outline-none transition placeholder:text-[#a39e93] focus:border-[#c4a265] focus:ring-2 focus:ring-[#c4a265]/20";

export default function CheckoutPage() {
  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [form, setForm] = useState<AddressForm>(INITIAL_ADDRESS);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [cartLoading, setCartLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedTotal, setPlacedTotal] = useState(0);
  const [placedDeliveryLabel, setPlacedDeliveryLabel] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [showNewAddress, setShowNewAddress] = useState(false);

  const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("");
  const [addressesLoading, setAddressesLoading] = useState(false);

  const [deliverySettings, setDeliverySettings] = useState<DeliverySettings>(
    DEFAULT_DELIVERY_SETTINGS
  );

  useEffect(() => {
    getDeliverySettings()
      .then(setDeliverySettings)
      .catch(() => setDeliverySettings(DEFAULT_DELIVERY_SETTINGS));
  }, []);

  useEffect(() => {
    let cancelled = false;

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (cancelled) return;

      if (!user) {
        setUserId("");
        setUserEmail("");
        setItems([]);
        setSavedAddresses([]);
        setSelectedAddressId("");
        setCartLoading(false);
        return;
      }

      const email = (user.email || "").toLowerCase();
      setUserId(user.uid);
      setUserEmail(email);
      setForm((f) => ({
        ...f,
        email: f.email || email,
        firstName: f.firstName || user.displayName?.split(" ")[0] || "",
        lastName:
          f.lastName ||
          user.displayName?.split(" ").slice(1).join(" ") ||
          "",
      }));

      setCartLoading(true);
      setAddressesLoading(true);

      try {
        const [cart, addresses] = await Promise.all([
          getCart(user.uid),
          email ? getAddressesByEmail(email) : Promise.resolve([]),
        ]);

        if (cancelled) return;

        setItems(mapCartToCheckout(cart?.items || []));
        setSavedAddresses(addresses);

        const defaultAddr =
          addresses.find((a) => a.isDefault) || addresses[0] || null;

        if (defaultAddr) {
          setSelectedAddressId(defaultAddr.id);
          setForm(applySavedAddress(defaultAddr, email));
          setShowNewAddress(false);
        } else {
          setShowNewAddress(true);
        }
      } catch (err) {
        console.error("Failed to load checkout data:", err);
        if (!cancelled) {
          setItems([]);
          setSavedAddresses([]);
        }
      } finally {
        if (!cancelled) {
          setCartLoading(false);
          setAddressesLoading(false);
        }
      }
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const shipping = useMemo(
    () => calcShippingFromSettings(subtotal, deliverySettings),
    [subtotal, deliverySettings]
  );
  const tax = useMemo(() => calculateTax(subtotal, 0), [subtotal]);
  const total = useMemo(
    () => calculateCheckoutTotal(subtotal, shipping, 0, tax),
    [subtotal, shipping, tax]
  );

  const leadTimeDays = useMemo(() => {
    const fallback = deliverySettings.defaultLeadTimeDays || 7;
    if (items.length === 0) return fallback;
    const days = items.map((i) =>
      i.leadTimeDays && i.leadTimeDays > 0
        ? i.leadTimeDays
        : parseLeadTimeDays(undefined, fallback)
    );
    return Math.max(...days, fallback);
  }, [items, deliverySettings]);

  const expectedDeliveryLabel = useMemo(() => {
    return formatExpectedDeliveryLabel(
      addCalendarDays(new Date(), leadTimeDays)
    );
  }, [leadTimeDays]);

  const updateField = (field: keyof AddressForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id);
    setShowNewAddress(false);
    setError("");
    const saved = savedAddresses.find((a) => a.id === id);
    if (saved) {
      setForm(applySavedAddress(saved, userEmail || form.email));
    }
  };

  const handleUseNewAddress = () => {
    setSelectedAddressId("");
    setShowNewAddress(true);
    setForm((f) => ({
      ...INITIAL_ADDRESS,
      email: userEmail || f.email,
      firstName: f.firstName,
      lastName: f.lastName,
      phone: f.phone,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    if (!userId) {
      setError("Please sign in before placing an order.");
      return;
    }
    if (form.pincode.length !== 6) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }
    if (!form.address.trim() || !form.city.trim() || !form.state.trim()) {
      setError("Please complete the delivery address.");
      return;
    }

    setLoading(true);
    try {
      const isCod = paymentMethod === "cod";
      const method: PaymentMethod = isCod ? "COD" : "Card";

      const order = await createOrder({
        userId,
        items,
        shippingAddress: {
          fullName: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          addressLine1: form.address.trim(),
          city: form.city.trim(),
          state: form.state.trim(),
          postalCode: form.pincode.trim(),
          country: "India",
        },
        paymentMethod: method,
        subtotal,
        shippingCharge: shipping,
        discount: 0,
        tax,
        totalAmount: total,
        notes: form.notes.trim() || "",
      });

      if (isCod || method === "COD") {
        setPlacedTotal(order.totalAmount);
        setPlacedDeliveryLabel(
          order.expectedDeliveryLabel || expectedDeliveryLabel
        );
        try {
          await clearCart(userId);
          window.dispatchEvent(new Event("cartUpdated"));
        } catch (err) {
          console.error("Failed to clear cart after order:", err);
        }
        setItems([]);
        setOrderPlaced(true);
        setLoading(false);
        return;
      }

      const sessionRes = await fetch("/api/cashfree/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: order.id,
          orderNumber: order.orderNumber,
          amount: order.totalAmount,
          customerName: `${form.firstName} ${form.lastName}`.trim(),
          customerEmail: form.email.trim(),
          customerPhone: form.phone.trim(),
        }),
      });

      const sessionData = await sessionRes.json();
      if (!sessionRes.ok || !sessionData.paymentSessionId) {
        throw new Error(
          sessionData.error ||
            "Could not start Cashfree payment. Check API keys."
        );
      }

      await new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(
          'script[src*="sdk.cashfree.com"]'
        );
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load Cashfree SDK"));
        document.body.appendChild(script);
      });

      // @ts-expect-error Cashfree global
      const cashfree = window.Cashfree({
        mode:
          process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
            ? "production"
            : "sandbox",
      });

      cashfree.checkout({
        paymentSessionId: sessionData.paymentSessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.error("Checkout failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "We could not place your order. Please try again."
      );
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen" style={{ background: C.page }}>
        <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
          <section
            className="w-full rounded-2xl border bg-white p-8 text-center shadow-sm sm:p-10"
            style={{ borderColor: C.border }}
          >
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "#f0e9dc", color: C.gold }}
            >
              <Check size={30} />
            </div>
            <p
              className="mt-6 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: C.goldRing }}
            >
              Order confirmed
            </p>
            <h1
              className="font-display mt-2 text-2xl font-semibold"
              style={{ color: C.text }}
            >
              Thank you for your order!
            </h1>
            <div
              className="mt-6 space-y-3 rounded-xl border p-4"
              style={{ borderColor: C.borderSoft, background: C.page }}
            >
              <div>
                <p className="text-xs" style={{ color: C.muted }}>
                  Order total
                </p>
                <p
                  className="mt-1 text-xl font-bold"
                  style={{ color: C.text }}
                >
                  {formatCurrency(placedTotal)}
                </p>
              </div>
              {placedDeliveryLabel && (
                <div
                  className="border-t pt-3"
                  style={{ borderColor: C.border }}
                >
                  <p className="text-xs" style={{ color: C.muted }}>
                    Expected delivery
                  </p>
                  <p
                    className="mt-1 text-sm font-semibold"
                    style={{ color: C.text }}
                  >
                    {placedDeliveryLabel}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/account/orders"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ background: C.black }}
              >
                View orders
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border bg-white px-5 py-3 text-sm font-semibold"
                style={{ borderColor: C.border, color: C.muted }}
              >
                Continue shopping
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-10" style={{ background: C.page }}>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header: title + steps */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link
              href="/cart"
              className="mb-3 inline-flex items-center gap-1.5 text-sm"
              style={{ color: C.muted }}
            >
              <ArrowLeft size={15} />
              Back to cart
            </Link>
            <h1
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: C.text }}
            >
              Checkout
            </h1>
          </div>

          <nav
            aria-label="Checkout progress"
            className="flex items-center gap-0 self-start text-xs font-medium sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border text-[11px]"
                style={{
                  borderColor: C.goldRing,
                  color: C.gold,
                  background: "#fff",
                }}
              >
                <Check size={14} strokeWidth={2.5} />
              </span>
              <span style={{ color: C.muted }}>Cart</span>
            </div>
            <div
              className="mx-2 h-px w-8 sm:mx-3 sm:w-12"
              style={{ background: C.goldRing }}
            />
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: C.black }}
              >
                2
              </span>
              <span style={{ color: C.text }}>Shipping</span>
            </div>
            <div
              className="mx-2 h-px w-8 sm:mx-3 sm:w-12"
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

        {cartLoading ? (
          <div
            className="rounded-2xl border bg-white p-10 text-center text-sm"
            style={{ borderColor: C.border, color: C.muted }}
          >
            Loading your cart…
          </div>
        ) : !userId ? (
          <div
            className="rounded-2xl border bg-white p-10 text-center"
            style={{ borderColor: C.border }}
          >
            <p className="text-sm font-semibold" style={{ color: C.text }}>
              Please sign in to checkout
            </p>
            <Link
              href="/sign-in"
              className="mt-4 inline-block text-sm font-semibold"
              style={{ color: C.gold }}
            >
              Sign in
            </Link>
          </div>
        ) : items.length === 0 ? (
          <div
            className="rounded-2xl border bg-white p-10 text-center"
            style={{ borderColor: C.border }}
          >
            <p className="text-sm font-semibold" style={{ color: C.text }}>
              Your cart is empty
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block text-sm font-semibold"
              style={{ color: C.gold }}
            >
              Browse products
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
              {/* Left column */}
              <div className="space-y-4">
                {/* Contact */}
                <section
                  className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
                  style={{ borderColor: C.border }}
                >
                  <h2
                    className="text-base font-semibold"
                    style={{ color: C.text }}
                  >
                    Contact Information
                  </h2>
                  <div className="mt-4">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="Email address"
                      className={fieldClass}
                    />
                    {form.email && (
                      <span className="mt-1 flex justify-end text-[#2f6b4f]">
                        <Check size={16} />
                      </span>
                    )}
                  </div>
                  <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-sm" style={{ color: C.muted }}>
                    <input
                      type="checkbox"
                      checked={emailUpdates}
                      onChange={(e) => setEmailUpdates(e.target.checked)}
                      className="mt-0.5 accent-[#9a7b3c]"
                    />
                    Email me with order updates and shipping notifications
                  </label>
                </section>

                {/* Delivery address */}
                <section
                  className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
                  style={{ borderColor: C.border }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2
                      className="text-base font-semibold"
                      style={{ color: C.text }}
                    >
                      Delivery Address
                    </h2>
                    <button
                      type="button"
                      onClick={handleUseNewAddress}
                      className="text-sm font-semibold"
                      style={{ color: C.gold }}
                    >
                      + Add New Address
                    </button>
                  </div>

                  {addressesLoading ? (
                    <p className="mt-4 text-sm" style={{ color: C.muted }}>
                      Loading addresses…
                    </p>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {savedAddresses.map((a) => {
                        const selected = selectedAddressId === a.id && !showNewAddress;
                        return (
                          <button
                            key={a.id}
                            type="button"
                            onClick={() => handleSelectAddress(a.id)}
                            className="flex w-full items-start gap-3 rounded-xl border p-4 text-left transition"
                            style={{
                              borderColor: selected ? C.goldRing : C.border,
                              background: selected ? C.selectedBg : "#fff",
                              boxShadow: selected
                                ? `0 0 0 1px ${C.goldRing}`
                                : undefined,
                            }}
                          >
                            <span
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"
                              style={{
                                borderColor: selected ? C.gold : C.border,
                              }}
                            >
                              {selected && (
                                <span
                                  className="h-2 w-2 rounded-full"
                                  style={{ background: C.gold }}
                                />
                              )}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: C.text }}
                                >
                                  {a.name}
                                  {a.type ? ` — ${a.type}` : ""}
                                </p>
                                {a.isDefault && (
                                  <span
                                    className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                                    style={{ background: C.gold }}
                                  >
                                    Default
                                  </span>
                                )}
                              </div>
                              <p
                                className="mt-1 text-sm leading-relaxed"
                                style={{ color: C.muted }}
                              >
                                {a.addressLine1}
                                {a.addressLine2 ? `, ${a.addressLine2}` : ""}
                                <br />
                                {a.city}
                                {a.state ? `, ${a.state}` : ""} {a.pincode}
                                {a.phone ? ` · ${a.phone}` : ""}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {(showNewAddress || savedAddresses.length === 0) && (
                    <div className="mt-5 space-y-4 border-t pt-5" style={{ borderColor: C.borderSoft }}>
                      <p className="text-sm" style={{ color: C.muted }}>
                        {savedAddresses.length === 0
                          ? "Enter your delivery address below."
                          : "Shipping to a new address? Use the form below."}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          required
                          placeholder="First name"
                          value={form.firstName}
                          onChange={(e) =>
                            updateField("firstName", e.target.value)
                          }
                          className={fieldClass}
                        />
                        <input
                          required
                          placeholder="Last name"
                          value={form.lastName}
                          onChange={(e) =>
                            updateField("lastName", e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                      <input
                        required
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={fieldClass}
                      />
                      <div className="relative">
                        <MapPin
                          size={16}
                          className="absolute left-3.5 top-3"
                          style={{ color: C.soft }}
                        />
                        <textarea
                          required
                          rows={2}
                          placeholder="Street address"
                          value={form.address}
                          onChange={(e) =>
                            updateField("address", e.target.value)
                          }
                          className={`${fieldClass} resize-none pl-10`}
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <input
                          required
                          placeholder="City"
                          value={form.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          className={fieldClass}
                        />
                        <input
                          required
                          placeholder="State"
                          value={form.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          className={fieldClass}
                        />
                        <input
                          required
                          maxLength={6}
                          placeholder="PIN code"
                          value={form.pincode}
                          onChange={(e) =>
                            updateField(
                              "pincode",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className={fieldClass}
                        />
                      </div>
                    </div>
                  )}

                  {!showNewAddress && selectedAddressId && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <input
                        type="tel"
                        required
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={fieldClass}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                  )}
                </section>

                {/* Delivery instructions */}
                <section
                  className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
                  style={{ borderColor: C.border }}
                >
                  <h2
                    className="text-base font-semibold"
                    style={{ color: C.text }}
                  >
                    Delivery Instructions
                  </h2>
                  <p className="mt-1 text-sm" style={{ color: C.muted }}>
                    Optional notes for delivery (gate code, landmark, etc.)
                  </p>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="e.g. Gate code, call on arrival, leave with security…"
                    className={`${fieldClass} mt-4 resize-none`}
                  />
                </section>

                {/* Payment method */}
                <section
                  className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
                  style={{ borderColor: C.border }}
                >
                  <h2
                    className="text-base font-semibold"
                    style={{ color: C.text }}
                  >
                    Payment Method
                  </h2>
                  <div className="mt-4 space-y-3">
                    <label
                      className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition"
                      style={{
                        borderColor:
                          paymentMethod === "card" ? C.goldRing : C.border,
                        background:
                          paymentMethod === "card" ? C.selectedBg : "#fff",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="accent-[#9a7b3c]"
                      />
                      <CreditCard size={18} style={{ color: C.muted }} />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: C.text }}
                        >
                          Card / Online
                        </p>
                        <p className="text-xs" style={{ color: C.muted }}>
                          Pay securely via Cashfree
                        </p>
                      </div>
                    </label>
                    <label
                      className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition"
                      style={{
                        borderColor:
                          paymentMethod === "cod" ? C.goldRing : C.border,
                        background:
                          paymentMethod === "cod" ? C.selectedBg : "#fff",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="accent-[#9a7b3c]"
                      />
                      <Package size={18} style={{ color: C.muted }} />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: C.text }}
                        >
                          Cash on delivery
                        </p>
                        <p className="text-xs" style={{ color: C.muted }}>
                          Pay when your order arrives
                        </p>
                      </div>
                    </label>
                  </div>
                </section>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}
              </div>

              {/* Order summary */}
              <aside
                className="h-fit rounded-2xl border p-5 sm:p-6 lg:sticky lg:top-6"
                style={{ background: C.summary, borderColor: C.border }}
              >
                <h2
                  className="text-lg font-semibold"
                  style={{ color: C.text }}
                >
                  Order Summary
                </h2>

                <ul className="mt-5 space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="h-14 w-14 shrink-0 overflow-hidden rounded-xl"
                        style={{ background: "#ebe4d8" }}
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
                            style={{ color: C.soft }}
                          >
                            <Package size={18} />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="truncate text-sm font-semibold"
                          style={{ color: C.text }}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs" style={{ color: C.muted }}>
                          Qty {item.quantity}
                        </p>
                      </div>
                      <p
                        className="shrink-0 text-sm font-semibold"
                        style={{ color: C.text }}
                      >
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-5 space-y-3 border-t pt-5 text-sm"
                  style={{ borderColor: C.border }}
                >
                  <div className="flex justify-between">
                    <span style={{ color: C.muted }}>Subtotal</span>
                    <span className="font-medium" style={{ color: C.text }}>
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5" style={{ color: C.muted }}>
                      <Truck size={14} />
                      Shipping
                    </span>
                    <span
                      className="font-medium"
                      style={{ color: shipping === 0 ? "#2f6b4f" : C.text }}
                    >
                      {shipping === 0 ? "Free" : formatCurrency(shipping)}
                    </span>
                  </div>
                  <div
                    className="rounded-xl border px-3 py-2.5"
                    style={{ borderColor: C.border, background: "#fff" }}
                  >
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wide"
                      style={{ color: C.soft }}
                    >
                      Expected delivery
                    </p>
                    <p
                      className="mt-0.5 text-sm font-semibold"
                      style={{ color: C.text }}
                    >
                      {expectedDeliveryLabel}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 flex items-center justify-between border-t pt-4"
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

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60"
                  style={{ background: C.gold }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      e.currentTarget.style.background = C.goldHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.gold;
                  }}
                >
                  {loading
                    ? paymentMethod === "cod"
                      ? "Placing order…"
                      : "Redirecting to payment…"
                    : paymentMethod === "cod"
                      ? `Place Order — ${formatCurrency(total)}`
                      : `Pay & Place Order — ${formatCurrency(total)}`}
                </button>

                <p
                  className="mt-4 flex items-center justify-center gap-1.5 text-[11px]"
                  style={{ color: C.soft }}
                >
                  <Lock size={12} />
                  Secure checkout · encrypted payment
                </p>
              </aside>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
