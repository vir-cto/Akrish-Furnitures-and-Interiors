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

//     if (rating < 1) {
//       setError("Please select a star rating.");
//       return;
//     }

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
//       setRating(0);
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
//                 {rating === 0 && (
//                   <p className="mt-1 text-[11px] text-slate-400">
//                     Tap a star to rate
//                   </p>
//                 )}
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

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2, Star } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import Link from "next/link";

export type ProductReview = {
  id: string;
  productId: string;
  userId?: string;
  authorName: string;
  rating: number;
  title?: string;
  body: string;
  createdAt?: Timestamp | null;
};

type Props = {
  productId: string;
  productName: string;
};

const COLLECTION = "product_reviews";

function formatReviewDate(ts?: Timestamp | null) {
  if (!ts || typeof ts.toDate !== "function") return "";
  try {
    return ts.toDate().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function StarDisplay({
  rating,
  size = 14,
}: {
  rating: number;
  size?: number;
}) {
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

function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1;
        const filled = n <= shown;
        return (
          <button
            key={n}
            type="button"
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(n)}
            className="p-0.5 transition"
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
          >
            <Star
              size={22}
              className={
                filled ? "fill-amber-400 text-amber-400" : "text-[#e5dfd4]"
              }
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ProductReviews({ productId, productName }: Props) {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [authName, setAuthName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    rating: 0,
    title: "",
    body: "",
    authorName: "",
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
      const name =
        user?.displayName ||
        (user?.email ? user.email.split("@")[0] : "") ||
        "";
      setAuthName(name);
      if (name) {
        setForm((f) => ({ ...f, authorName: f.authorName || name }));
      }
    });
    return () => unsub();
  }, []);

  async function loadReviews() {
    if (!productId) return;
    setLoading(true);
    try {
      const snap = await getDocs(
        query(
          collection(db, COLLECTION),
          where("productId", "==", productId),
          orderBy("createdAt", "desc")
        )
      );
      setReviews(
        snap.docs.map((d) => ({ id: d.id, ...d.data() } as ProductReview))
      );
    } catch (err) {
      console.error("Load reviews failed", err);
      // Fallback without orderBy if index missing
      try {
        const snap = await getDocs(
          query(
            collection(db, COLLECTION),
            where("productId", "==", productId)
          )
        );
        const list = snap.docs.map(
          (d) => ({ id: d.id, ...d.data() } as ProductReview)
        );
        list.sort((a, b) => {
          const ta = a.createdAt?.toMillis?.() ?? 0;
          const tb = b.createdAt?.toMillis?.() ?? 0;
          return tb - ta;
        });
        setReviews(list);
      } catch (e2) {
        console.error(e2);
        setReviews([]);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const stats = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;
    for (const r of reviews) {
      const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 0)));
      counts[star as 1 | 2 | 3 | 4 | 5]++;
      sum += Number(r.rating) || 0;
    }
    const total = reviews.length;
    const avg = total > 0 ? Math.round((sum / total) * 10) / 10 : 0;
    return { counts, total, avg };
  }, [reviews]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!authUid) {
      setError("Please sign in to write a review.");
      return;
    }
    if (form.rating < 1 || form.rating > 5) {
      setError("Please select a star rating.");
      return;
    }
    if (!form.body.trim() || form.body.trim().length < 10) {
      setError("Please write at least 10 characters.");
      return;
    }

    const name = (form.authorName || authName || "Customer").trim();

    setSaving(true);
    try {
      await addDoc(collection(db, COLLECTION), {
        productId,
        productName,
        userId: authUid,
        authorName: name,
        rating: form.rating,
        title: form.title.trim() || "",
        body: form.body.trim(),
        createdAt: serverTimestamp(),
      });
      setSuccess("Thank you — your review was submitted.");
      setForm({
        rating: 0,
        title: "",
        body: "",
        authorName: authName || "",
      });
      setShowForm(false);
      await loadReviews();
    } catch (err) {
      console.error(err);
      setError("Could not save review. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
          Customer reviews
        </h2>
        <button
          type="button"
          onClick={() => {
            setShowForm((v) => !v);
            setError("");
            setSuccess("");
          }}
          className="inline-flex h-10 items-center justify-center rounded-full border border-[#e8e2d8] bg-[#faf7f2] px-4 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#b8956c]"
        >
          {showForm ? "Cancel" : "Write a review"}
        </button>
      </div>

      {/* Summary */}
      {loading ? (
        <div className="mt-8 flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-[#b8956c]" />
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
            <div className="text-center sm:text-left">
              {/* <p className="text-5xl font-semibold tracking-tight text-[#1a1a1a]">
                {stats.total > 0 ? stats.avg.toFixed(1) : "—"}
              </p> */}

              <p className="font-display text-5xl font-bold tracking-tight text-[#1a1a1a]">
  {stats.total > 0 ? stats.avg.toFixed(1) : "—"}
</p>
              <div className="mt-2 flex justify-center sm:justify-start">
                <StarDisplay rating={stats.avg} size={16} />
              </div>
              <p className="mt-1.5 text-xs text-[#8a847c]">
                {stats.total > 0
                  ? `Based on ${stats.total} review${stats.total === 1 ? "" : "s"}`
                  : "No reviews yet"}
              </p>
            </div>

            <div className="space-y-1.5">
              {([5, 4, 3, 2, 1] as const).map((star) => {
                const count = stats.counts[star];
                const pct =
                  stats.total > 0
                    ? Math.round((count / stats.total) * 100)
                    : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-3 tabular-nums text-[#6b6560]">
                      {star}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#f0ebe3]">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right tabular-nums text-[#8a847c]">
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add review form */}
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-xl border border-[#e8e2d8] bg-[#faf7f2] p-4 sm:p-5"
            >
              <h3 className="text-sm font-semibold text-[#1a1a1a]">
                Share your experience
              </h3>
              <p className="mt-1 text-xs text-[#8a847c]">
                Reviewing <span className="font-medium">{productName}</span>
              </p>

              {!authUid && (
                <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs text-[#6b6560]">
                  <Link
                    href="/sign-in"
                    className="font-semibold text-[#b8956c] hover:underline"
                  >
                    Sign in
                  </Link>{" "}
                  to publish a review.
                </p>
              )}

              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium text-[#5c564e]">
                  Your rating
                </p>
                <StarInput
                  value={form.rating}
                  onChange={(n) => setForm((f) => ({ ...f, rating: n }))}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#5c564e]">
                    Display name
                  </label>
                  <input
                    value={form.authorName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, authorName: e.target.value }))
                    }
                    placeholder="Your name"
                    className="h-10 w-full rounded-lg border border-[#e8e2d8] bg-white px-3 text-sm outline-none focus:border-[#b8956c]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#5c564e]">
                    Title (optional)
                  </label>
                  <input
                    value={form.title}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, title: e.target.value }))
                    }
                    placeholder="Sum up your review"
                    className="h-10 w-full rounded-lg border border-[#e8e2d8] bg-white px-3 text-sm outline-none focus:border-[#b8956c]"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="mb-1.5 block text-xs font-medium text-[#5c564e]">
                  Review
                </label>
                <textarea
                  value={form.body}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, body: e.target.value }))
                  }
                  rows={4}
                  placeholder="What did you like or dislike? How does it look at home?"
                  className="w-full resize-y rounded-lg border border-[#e8e2d8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#b8956c]"
                />
              </div>

              {error && (
                <p className="mt-3 text-xs font-medium text-red-600">{error}</p>
              )}
              {success && (
                <p className="mt-3 text-xs font-medium text-emerald-700">
                  {success}
                </p>
              )}

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="h-10 rounded-full border border-[#e8e2d8] bg-white px-4 text-sm font-semibold text-[#5c564e]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || !authUid}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-[#1a1a1a] px-5 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Submit review"
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Review cards */}
          {stats.total > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <article
                  key={r.id}
                  className="flex flex-col border-t border-[#f0ebe3] pt-5 sm:border-t-0 sm:pt-0"
                >
                  <StarDisplay rating={Number(r.rating) || 0} size={13} />
                  {r.title ? (
                    <h3 className="mt-2 text-sm font-semibold text-[#1a1a1a]">
                      {r.title}
                    </h3>
                  ) : null}
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#5c564e]">
                    {r.body}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0ebe3] text-[10px] font-bold text-[#6b6560]">
                      {initials(r.authorName || "C")}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#1a1a1a]">
                        {r.authorName || "Customer"}
                      </p>
                      {formatReviewDate(r.createdAt) && (
                        <p className="text-[10px] text-[#8a847c]">
                          {formatReviewDate(r.createdAt)}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            !showForm && (
              <p className="mt-8 text-center text-sm text-[#8a847c]">
                Be the first to review this product.
              </p>
            )
          )}
        </>
      )}
    </section>
  );
}
