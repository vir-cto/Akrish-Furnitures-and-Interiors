// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   CheckCircle2,
//   Package,
//   ShoppingBag,
//   ArrowRight,
//   Home,
//   Copy,
//   Check,
// } from "lucide-react";

// interface OrderData {
//   orderId?: string;
//   orderNumber?: string;
//   total?: number;
//   paymentMethod?: string;
//   paymentStatus?: string;
//   customerName?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function CheckoutSuccessPage() {
//   const [order, setOrder] = useState<OrderData | null>(null);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     try {
//       const storedOrder = sessionStorage.getItem("lastOrder");

//       if (storedOrder) {
//         setOrder(JSON.parse(storedOrder));
//       }
//     } catch (error) {
//       console.error("Unable to read order information:", error);
//     }
//   }, []);

//   const orderNumber = order?.orderNumber || order?.orderId || "Processing";
//   const total = order?.total ?? 0;
//   const paymentMethod = order?.paymentMethod || "Online Payment";
//   const paymentStatus = order?.paymentStatus || "Paid";

//   const copyOrderNumber = async () => {
//     if (!orderNumber || orderNumber === "Processing") return;

//     try {
//       await navigator.clipboard.writeText(orderNumber);
//       setCopied(true);

//       setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     } catch {
//       setCopied(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] px-4 py-10 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl">
//         {/* Success Header */}
//         <div className="text-center">
//           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f5ef]">
//             <CheckCircle2 className="h-12 w-12 text-[#176b5b]" />
//           </div>

//           <h1 className="mt-6 text-3xl font-bold text-[#17352f] sm:text-4xl">
//             Order Placed Successfully!
//           </h1>

//           <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
//             Thank you for your order. Your order has been received and is being
//             processed.
//           </p>
//         </div>

//         {/* Order Card */}
//         <section className="mt-8 overflow-hidden rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] bg-[#176b5b] px-6 py-5 text-white">
//             <div className="flex items-center justify-between gap-4">
//               <div>
//                 <p className="text-xs font-medium uppercase tracking-wider text-white/75">
//                   Order Number
//                 </p>

//                 <div className="mt-1 flex items-center gap-2">
//                   <p className="text-xl font-bold">{orderNumber}</p>

//                   {orderNumber !== "Processing" && (
//                     <button
//                       type="button"
//                       onClick={copyOrderNumber}
//                       className="rounded-lg p-2 transition hover:bg-white/10"
//                       aria-label="Copy order number"
//                     >
//                       {copied ? (
//                         <Check className="h-4 w-4" />
//                       ) : (
//                         <Copy className="h-4 w-4" />
//                       )}
//                     </button>
//                   )}
//                 </div>
//               </div>

//               <CheckCircle2 className="hidden h-9 w-9 sm:block" />
//             </div>
//           </div>

//           <div className="grid gap-0 sm:grid-cols-3">
//             <div className="border-b border-[#e4e2da] p-6 sm:border-b-0 sm:border-r">
//               <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
//                 Order Total
//               </p>
//               <p className="mt-2 text-xl font-bold text-[#17352f]">
//                 {total > 0 ? formatCurrency(total) : "Processing"}
//               </p>
//             </div>

//             <div className="border-b border-[#e4e2da] p-6 sm:border-b-0 sm:border-r">
//               <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
//                 Payment Method
//               </p>
//               <p className="mt-2 font-semibold text-[#17352f]">
//                 {paymentMethod}
//               </p>
//             </div>

//             <div className="p-6">
//               <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
//                 Payment Status
//               </p>
//               <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#e7f5ef] px-3 py-1.5 text-sm font-semibold text-[#176b5b]">
//                 <CheckCircle2 className="h-4 w-4" />
//                 {paymentStatus}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Next Steps */}
//         <section className="mt-6 rounded-2xl border border-[#e4e2da] bg-white p-6 shadow-sm">
//           <h2 className="text-lg font-bold text-[#17352f]">
//             What happens next?
//           </h2>

//           <div className="mt-6 space-y-6">
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1eee7]">
//                 <CheckCircle2 className="h-5 w-5 text-[#176b5b]" />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[#17352f]">
//                   Order Confirmation
//                 </h3>
//                 <p className="mt-1 text-sm leading-6 text-gray-600">
//                   Your order has been successfully recorded in our system.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1eee7]">
//                 <Package className="h-5 w-5 text-[#9a5b18]" />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[#17352f]">
//                   Order Processing
//                 </h3>
//                 <p className="mt-1 text-sm leading-6 text-gray-600">
//                   Our team will prepare your items and update the order status
//                   as it progresses.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1eee7]">
//                 <ShoppingBag className="h-5 w-5 text-[#176b5b]" />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[#17352f]">
//                   Delivery Updates
//                 </h3>
//                 <p className="mt-1 text-sm leading-6 text-gray-600">
//                   You can check your order status from your account orders
//                   section.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Actions */}
//         <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
//           <Link
//             href="/orders"
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#125548]"
//           >
//             View My Orders
//             <ArrowRight className="h-4 w-4" />
//           </Link>

//           <Link
//             href="/products"
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e4e2da] bg-white px-6 py-3.5 text-sm font-semibold text-[#17352f] transition hover:bg-[#f7f7f4]"
//           >
//             <ShoppingBag className="h-4 w-4" />
//             Continue Shopping
//           </Link>

//           <Link
//             href="/"
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e4e2da] bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-[#f7f7f4]"
//           >
//             <Home className="h-4 w-4" />
//             Home
//           </Link>
//         </div>

//         {/* Support */}
//         <p className="mt-8 text-center text-sm text-gray-500">
//           Need help with your order?{" "}
//           <Link
//             href="/contact"
//             className="font-semibold text-[#176b5b] hover:underline"
//           >
//             Contact us
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Package,
  ShoppingBag,
  ArrowRight,
  Home,
  Copy,
  Check,
} from "lucide-react";

const C = {
  page: "#f7f3ec",
  card: "#ffffff",
  border: "#ebe4d8",
  text: "#1c1916",
  muted: "#8a8378",
  gold: "#9a7b3c",
  goldSoft: "#c4a265",
  black: "#1a1a1a",
  cream: "#f3efe6",
};

interface OrderData {
  orderId?: string;
  orderNumber?: string;
  total?: number;
  paymentMethod?: string;
  paymentStatus?: string;
  customerName?: string;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const storedOrder = sessionStorage.getItem("lastOrder");
      if (storedOrder) setOrder(JSON.parse(storedOrder));
    } catch (error) {
      console.error("Unable to read order information:", error);
    }
  }, []);

  const orderNumber = order?.orderNumber || order?.orderId || "Processing";
  const total = order?.total ?? 0;
  const paymentMethod = order?.paymentMethod || "Online Payment";
  const paymentStatus = order?.paymentStatus || "Paid";

  const copyOrderNumber = async () => {
    if (!orderNumber || orderNumber === "Processing") return;
    try {
      await navigator.clipboard.writeText(orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8" style={{ background: C.page }}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: "#f0e9dc" }}
          >
            <CheckCircle2 className="h-12 w-12" style={{ color: C.gold }} />
          </div>

          <p
            className="mt-6 text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: C.goldSoft }}
          >
            Order confirmed
          </p>

          <h1
            className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: C.text }}
          >
            Order Placed Successfully!
          </h1>

          <p
            className="mx-auto mt-3 max-w-xl text-sm leading-6 sm:text-base"
            style={{ color: C.muted }}
          >
            Thank you for your order. We&apos;ve received it and will start
            processing shortly.
          </p>
        </div>

        <section
          className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm"
          style={{ borderColor: C.border }}
        >
          <div
            className="px-6 py-5 text-white"
            style={{ background: C.black }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Order Number
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <p className="text-xl font-bold">{orderNumber}</p>
                  {orderNumber !== "Processing" && (
                    <button
                      type="button"
                      onClick={copyOrderNumber}
                      className="rounded-lg p-2 transition hover:bg-white/10"
                      aria-label="Copy order number"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              <CheckCircle2 className="hidden h-9 w-9 opacity-80 sm:block" />
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-3">
            <div
              className="border-b p-6 sm:border-b-0 sm:border-r"
              style={{ borderColor: C.border }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: C.muted }}
              >
                Order Total
              </p>
              <p
                className="mt-2 text-xl font-bold"
                style={{ color: C.text }}
              >
                {total > 0 ? formatCurrency(total) : "Processing"}
              </p>
            </div>

            <div
              className="border-b p-6 sm:border-b-0 sm:border-r"
              style={{ borderColor: C.border }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: C.muted }}
              >
                Payment Method
              </p>
              <p className="mt-2 font-semibold" style={{ color: C.text }}>
                {paymentMethod}
              </p>
            </div>

            <div className="p-6">
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: C.muted }}
              >
                Payment Status
              </p>
              <div
                className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold"
                style={{ background: C.cream, color: C.gold }}
              >
                <CheckCircle2 className="h-4 w-4" />
                {paymentStatus}
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-6 rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: C.border }}
        >
          <h2 className="text-lg font-semibold" style={{ color: C.text }}>
            What happens next?
          </h2>

          <div className="mt-6 space-y-6">
            {[
              {
                icon: CheckCircle2,
                title: "Order Confirmation",
                body: "Your order has been recorded. Keep your order number for reference.",
              },
              {
                icon: Package,
                title: "Order Processing",
                body: "Our team will prepare your items and update status as it progresses.",
              },
              {
                icon: ShoppingBag,
                title: "Delivery Updates",
                body: "Track everything anytime from your account orders section.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: C.cream, color: C.gold }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: C.text }}>
                    {title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-6"
                    style={{ color: C.muted }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/account/orders"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition"
            style={{ background: C.gold }}
          >
            View My Orders
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-3.5 text-sm font-semibold transition"
            style={{ borderColor: C.border, color: C.text }}
          >
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-3.5 text-sm font-semibold transition"
            style={{ borderColor: C.border, color: C.muted }}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        <p className="mt-8 text-center text-sm" style={{ color: C.muted }}>
          Need help with your order?{" "}
          <Link
            href="/contact"
            className="font-semibold hover:underline"
            style={{ color: C.gold }}
          >
            Contact us
          </Link>
        </p>
      </div>
    </main>
  );
}
