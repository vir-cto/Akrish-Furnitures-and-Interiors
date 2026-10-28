// "use client";

// import { FormEvent, useEffect, useState } from "react";
// import Link from "next/link";
// import { Loader2, Star } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   averageRating,
//   getApprovedReviewsForProduct,
//   submitProductReview,
// } from "@/services/reviewService";
// import type { FurnitureReview } from "@/modules/furniture/types/review.types";

// type Props = {
//   productId: string;
//   productName?: string;
// };

// function Stars({
//   value,
//   onChange,
//   size = 18,
//   interactive = false,
// }: {
//   value: number;
//   onChange?: (n: number) => void;
//   size?: number;
//   interactive?: boolean;
// }) {
//   return (
//     <div className="flex items-center gap-0.5">
//       {[1, 2, 3, 4, 5].map((n) => (
//         <button
//           key={n}
//           type="button"
//           disabled={!interactive}
//           onClick={() => onChange?.(n)}
//           className={interactive ? "cursor-pointer p-0.5" : "cursor-default p-0"}
//           aria-label={`${n} star${n > 1 ? "s" : ""}`}
//         >
//           <Star
//             size={size}
//             className={
//               n <= value
//                 ? "fill-amber-400 text-amber-400"
//                 : "text-slate-300"
//             }
//           />
//         </button>
//       ))}
//     </div>
//   );
// }

// function formatDate(r: FurnitureReview): string {
//   try {
//     const d = r.createdAt?.toDate?.();
//     if (!d) return "";
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return "";
//   }
// }

// export default function ProductReviews({ productId, productName }: Props) {
//   const [reviews, setReviews] = useState<FurnitureReview[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [uid, setUid] = useState<string | null>(null);
//   const [userName, setUserName] = useState("Customer");
//   const [userEmail, setUserEmail] = useState("");
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => {
//       setUid(u?.uid ?? null);
//       setUserName(u?.displayName || u?.email?.split("@")[0] || "Customer");
//       setUserEmail(u?.email || "");
//     });
//     return () => unsub();
//   }, []);

//   const load = async () => {
//     if (!productId) return;
//     setLoading(true);
//     try {
//       const list = await getApprovedReviewsForProduct(productId);
//       setReviews(list);
//     } catch (err) {
//       console.error("Failed to load reviews", err);
//       setReviews([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     void load();
//   }, [productId]);

//   const avg = averageRating(reviews);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     if (!uid) return;

//     setSubmitting(true);
//     try {
//       await submitProductReview({
//         productId,
//         productName,
//         userId: uid,
//         userName,
//         userEmail,
//         rating,
//         comment,
//       });
//       setComment("");
//       setRating(5);
//       setSuccess("Thank you! Your review was posted.");
//       await load();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Could not submit review.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white sm:mt-8 sm:rounded-2xl">
//       <div className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
//         <div className="flex flex-wrap items-center justify-between gap-3">
//           <div>
//             <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
//               Customer reviews
//             </h2>
//             <p className="mt-1 text-sm text-slate-500">
//               {loading
//                 ? "Loading…"
//                 : reviews.length === 0
//                   ? "No reviews yet — be the first."
//                   : `${reviews.length} review${reviews.length === 1 ? "" : "s"}`}
//             </p>
//           </div>
//           {!loading && reviews.length > 0 && (
//             <div className="flex items-center gap-2">
//               <Stars value={Math.round(avg)} size={16} />
//               <span className="text-sm font-semibold text-slate-800">
//                 {avg.toFixed(1)}
//               </span>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
//         <div className="divide-y divide-slate-100 px-4 py-2 sm:px-6">
//           {loading ? (
//             <div className="flex justify-center py-10">
//               <Loader2 className="h-6 w-6 animate-spin text-[#176b5b]" />
//             </div>
//           ) : reviews.length === 0 ? (
//             <p className="py-8 text-center text-sm text-slate-500">
//               No reviews for this product yet.
//             </p>
//           ) : (
//             reviews.map((r) => (
//               <article key={r.id} className="py-4">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ef] text-xs font-bold text-[#176b5b]">
//                     {(r.userName || "C").charAt(0).toUpperCase()}
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <p className="truncate text-sm font-semibold text-slate-800">
//                       {r.userName}
//                     </p>
//                     <p className="text-[11px] text-slate-400">{formatDate(r)}</p>
//                   </div>
//                   <Stars value={r.rating} size={14} />
//                 </div>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   {r.comment}
//                 </p>
//               </article>
//             ))
//           )}
//         </div>

//         <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5 lg:border-l lg:border-t-0">
//           <h3 className="text-sm font-bold text-slate-900">Write a review</h3>
//           {!uid ? (
//             <p className="mt-3 text-sm text-slate-600">
//               <Link
//                 href="/sign-in"
//                 className="font-semibold text-[#176b5b] hover:underline"
//               >
//                 Sign in
//               </Link>{" "}
//               to share your experience with this product.
//             </p>
//           ) : (
//             <form onSubmit={handleSubmit} className="mt-3 space-y-3">
//               <div>
//                 <p className="mb-1.5 text-xs font-semibold text-slate-600">
//                   Your rating
//                 </p>
//                 <Stars
//                   value={rating}
//                   onChange={setRating}
//                   interactive
//                   size={22}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="review-comment"
//                   className="mb-1.5 block text-xs font-semibold text-slate-600"
//                 >
//                   Your review
//                 </label>
//                 <textarea
//                   id="review-comment"
//                   rows={4}
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Quality, comfort, delivery…"
//                   className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                 />
//               </div>
//               {error && (
//                 <p className="text-xs text-red-600" role="alert">
//                   {error}
//                 </p>
//               )}
//               {success && (
//                 <p className="text-xs text-emerald-700">{success}</p>
//               )}
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60"
//               >
//                 {submitting ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   "Submit review"
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Star } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  averageRating,
  getApprovedReviewsForProduct,
  submitProductReview,
} from "@/services/reviewService";
import type { FurnitureReview } from "@/modules/furniture/types/review.types";

type Props = {
  productId: string;
  productName?: string;
};

function Stars({
  value,
  onChange,
  size = 18,
  interactive = false,
}: {
  value: number;
  onChange?: (n: number) => void;
  size?: number;
  interactive?: boolean;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(n)}
          className={interactive ? "cursor-pointer p-0.5" : "cursor-default p-0"}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
        >
          <Star
            size={size}
            className={
              n <= value
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300"
            }
          />
        </button>
      ))}
    </div>
  );
}

function formatDate(r: FurnitureReview): string {
  try {
    const d = r.createdAt?.toDate?.();
    if (!d) return "";
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function ProductReviews({ productId, productName }: Props) {
  const [reviews, setReviews] = useState<FurnitureReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [userName, setUserName] = useState("Customer");
  const [userEmail, setUserEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUid(u?.uid ?? null);
      setUserName(u?.displayName || u?.email?.split("@")[0] || "Customer");
      setUserEmail(u?.email || "");
    });
    return () => unsub();
  }, []);

  const load = async () => {
    if (!productId) return;
    setLoading(true);
    try {
      const list = await getApprovedReviewsForProduct(productId);
      setReviews(list);
    } catch (err) {
      console.error("Failed to load reviews", err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [productId]);

  const avg = averageRating(reviews);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!uid) return;

    if (rating < 1) {
      setError("Please select a star rating.");
      return;
    }

    setSubmitting(true);
    try {
      await submitProductReview({
        productId,
        productName,
        userId: uid,
        userName,
        userEmail,
        rating,
        comment,
      });
      setComment("");
      setRating(0);
      setSuccess("Thank you! Your review was posted.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white sm:mt-8 sm:rounded-2xl">
      <div className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Customer reviews
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {loading
                ? "Loading…"
                : reviews.length === 0
                  ? "No reviews yet — be the first."
                  : `${reviews.length} review${reviews.length === 1 ? "" : "s"}`}
            </p>
          </div>
          {!loading && reviews.length > 0 && (
            <div className="flex items-center gap-2">
              <Stars value={Math.round(avg)} size={16} />
              <span className="text-sm font-semibold text-slate-800">
                {avg.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        <div className="divide-y divide-slate-100 px-4 py-2 sm:px-6">
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="h-6 w-6 animate-spin text-[#176b5b]" />
            </div>
          ) : reviews.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">
              No reviews for this product yet.
            </p>
          ) : (
            reviews.map((r) => (
              <article key={r.id} className="py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ef] text-xs font-bold text-[#176b5b]">
                    {(r.userName || "C").charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {r.userName}
                    </p>
                    <p className="text-[11px] text-slate-400">{formatDate(r)}</p>
                  </div>
                  <Stars value={r.rating} size={14} />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {r.comment}
                </p>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5 lg:border-l lg:border-t-0">
          <h3 className="text-sm font-bold text-slate-900">Write a review</h3>
          {!uid ? (
            <p className="mt-3 text-sm text-slate-600">
              <Link
                href="/sign-in"
                className="font-semibold text-[#176b5b] hover:underline"
              >
                Sign in
              </Link>{" "}
              to share your experience with this product.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-3 space-y-3">
              <div>
                <p className="mb-1.5 text-xs font-semibold text-slate-600">
                  Your rating
                </p>
                <Stars
                  value={rating}
                  onChange={setRating}
                  interactive
                  size={22}
                />
                {rating === 0 && (
                  <p className="mt-1 text-[11px] text-slate-400">
                    Tap a star to rate
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="review-comment"
                  className="mb-1.5 block text-xs font-semibold text-slate-600"
                >
                  Your review
                </label>
                <textarea
                  id="review-comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Quality, comfort, delivery…"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
                />
              </div>
              {error && (
                <p className="text-xs text-red-600" role="alert">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-xs text-emerald-700">{success}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60"
              >
                {submitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Submit review"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
