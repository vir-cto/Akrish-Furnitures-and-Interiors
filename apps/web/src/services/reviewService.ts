// import {
//   addDoc,
//   collection,
//   getDocs,
//   orderBy,
//   query,
//   serverTimestamp,
//   where,
//   type Timestamp,
// } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import type { FurnitureReview, ReviewStatus } from "@/modules/furniture/types/review.types";

// const COL = "furniture_reviews";

// function mapDoc(id: string, data: Record<string, unknown>): FurnitureReview {
//   return {
//     id,
//     productId: String(data.productId || ""),
//     productName: data.productName ? String(data.productName) : undefined,
//     userId: String(data.userId || ""),
//     userName: String(data.userName || "Customer"),
//     userEmail: data.userEmail ? String(data.userEmail) : undefined,
//     rating: Math.min(5, Math.max(1, Number(data.rating) || 1)),
//     comment: String(data.comment || "").trim(),
//     status: (String(data.status || "approved") as ReviewStatus) || "approved",
//     createdAt: (data.createdAt as Timestamp) || null,
//     updatedAt: (data.updatedAt as Timestamp) || null,
//   };
// }

// /** Public: approved reviews for a product (newest first) */
// export async function getApprovedReviewsForProduct(
//   productId: string
// ): Promise<FurnitureReview[]> {
//   if (!productId) return [];

//   const q = query(
//     collection(db, COL),
//     where("productId", "==", productId),
//     where("status", "==", "approved"),
//     orderBy("createdAt", "desc")
//   );

//   const snap = await getDocs(q);
//   return snap.docs.map((d) => mapDoc(d.id, d.data() as Record<string, unknown>));
// }

// export async function submitProductReview(input: {
//   productId: string;
//   productName?: string;
//   userId: string;
//   userName: string;
//   userEmail?: string;
//   rating: number;
//   comment: string;
// }): Promise<string> {
//   const rating = Math.min(5, Math.max(1, Math.round(Number(input.rating) || 1)));
//   const comment = String(input.comment || "").trim();
//   if (!input.productId || !input.userId) {
//     throw new Error("Missing product or user.");
//   }
//   if (comment.length < 3) {
//     throw new Error("Please write a short review (at least 3 characters).");
//   }

//   const ref = await addDoc(collection(db, COL), {
//     productId: input.productId,
//     productName: input.productName || "",
//     userId: input.userId,
//     userName: input.userName || "Customer",
//     userEmail: input.userEmail || "",
//     rating,
//     comment,
//     status: "approved",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });

//   return ref.id;
// }

// export function averageRating(reviews: FurnitureReview[]): number {
//   if (!reviews.length) return 0;
//   const sum = reviews.reduce((a, r) => a + r.rating, 0);
//   return Math.round((sum / reviews.length) * 10) / 10;
// }



import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type {
  FurnitureReview,
  ReviewStatus,
} from "@/modules/furniture/types/review.types";

const COL = "furniture_reviews";

function mapDoc(id: string, data: Record<string, unknown>): FurnitureReview {
  return {
    id,
    productId: String(data.productId || ""),
    productName: data.productName ? String(data.productName) : undefined,
    userId: String(data.userId || ""),
    userName: String(data.userName || "Customer"),
    userEmail: data.userEmail ? String(data.userEmail) : undefined,
    rating: Math.min(5, Math.max(1, Number(data.rating) || 1)),
    comment: String(data.comment || "").trim(),
    status: (String(data.status || "approved") as ReviewStatus) || "approved",
    createdAt: (data.createdAt as Timestamp) || null,
    updatedAt: (data.updatedAt as Timestamp) || null,
  };
}

/**
 * Approved reviews for a product (newest first).
 * Uses productId-only query so no composite index is required.
 */
export async function getApprovedReviewsForProduct(
  productId: string
): Promise<FurnitureReview[]> {
  if (!productId) return [];

  const q = query(collection(db, COL), where("productId", "==", productId));

  const snap = await getDocs(q);
  const list = snap.docs
    .map((d) => mapDoc(d.id, d.data() as Record<string, unknown>))
    .filter((r) => r.status === "approved")
    .sort((a, b) => {
      const ta = a.createdAt?.toMillis?.() ?? 0;
      const tb = b.createdAt?.toMillis?.() ?? 0;
      return tb - ta;
    });

  return list;
}

export async function submitProductReview(input: {
  productId: string;
  productName?: string;
  userId: string;
  userName: string;
  userEmail?: string;
  rating: number;
  comment: string;
}): Promise<string> {
  const rating = Math.min(5, Math.max(1, Math.round(Number(input.rating) || 1)));
  const comment = String(input.comment || "").trim();

  if (!input.productId || !input.userId) {
    throw new Error("Missing product or user.");
  }
  if (comment.length < 3) {
    throw new Error("Please write a short review (at least 3 characters).");
  }

  const ref = await addDoc(collection(db, COL), {
    productId: input.productId,
    productName: input.productName || "",
    userId: input.userId,
    userName: input.userName || "Customer",
    userEmail: input.userEmail || "",
    rating,
    comment,
    status: "approved",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}

export function averageRating(reviews: FurnitureReview[]): number {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
