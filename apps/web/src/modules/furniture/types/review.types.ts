import type { Timestamp } from "firebase/firestore";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type FurnitureReview = {
  id: string;
  productId: string;
  productName?: string;
  userId: string;
  userName: string;
  userEmail?: string;
  rating: number; // 1–5
  comment: string;
  status: ReviewStatus;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};
