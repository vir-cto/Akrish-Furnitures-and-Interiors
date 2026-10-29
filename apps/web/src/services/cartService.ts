// // import { db } from "@/lib/firebase";
// // import {
// //   collection,
// //   doc,
// //   getDoc,
// //   getDocs,
// //   setDoc,
// //   deleteDoc,
// //   updateDoc,
// //   query,
// //   where,
// //   serverTimestamp,
// // } from "firebase/firestore";

// // export interface CartItem {
// //   id: string;
// //   productId: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// //   image?: string;
// //   category?: string;
// //   variant?: string;
// // }

// // export interface Cart {
// //   id: string;
// //   userId: string;
// //   items: CartItem[];
// //   totalItems: number;
// //   totalAmount: number;
// //   updatedAt?: unknown;
// // }

// // const CART_COLLECTION = "carts";

// // /**
// //  * Calculate total number of items in the cart.
// //  */
// // export function getCartItemCount(items: CartItem[]): number {
// //   return items.reduce((total, item) => total + item.quantity, 0);
// // }

// // /**
// //  * Calculate total cart amount.
// //  */
// // export function getCartTotal(items: CartItem[]): number {
// //   return items.reduce(
// //     (total, item) => total + item.price * item.quantity,
// //     0
// //   );
// // }

// // /**
// //  * Get the current user's cart.
// //  */
// // export async function getCart(userId: string): Promise<Cart | null> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return null;
// //   }

// //   const data = cartSnapshot.data();

// //   return {
// //     id: cartSnapshot.id,
// //     userId,
// //     items: (data.items || []) as CartItem[],
// //     totalItems: data.totalItems || 0,
// //     totalAmount: data.totalAmount || 0,
// //     updatedAt: data.updatedAt,
// //   };
// // }

// // /**
// //  * Add a product to the cart.
// //  */
// // export async function addToCart(
// //   userId: string,
// //   item: CartItem
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   let items: CartItem[] = [];

// //   if (cartSnapshot.exists()) {
// //     items = (cartSnapshot.data().items || []) as CartItem[];
// //   }

// //   const existingItemIndex = items.findIndex(
// //     (cartItem) =>
// //       cartItem.productId === item.productId &&
// //       cartItem.variant === item.variant
// //   );

// //   if (existingItemIndex >= 0) {
// //     items[existingItemIndex] = {
// //       ...items[existingItemIndex],
// //       quantity: items[existingItemIndex].quantity + item.quantity,
// //     };
// //   } else {
// //     items.push(item);
// //   }

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await setDoc(cartRef, {
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // /**
// //  * Update the quantity of an existing cart item.
// //  */
// // export async function updateCartItem(
// //   userId: string,
// //   productId: string,
// //   quantity: number,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   if (quantity < 1) {
// //     return removeFromCart(userId, productId, variant);
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     throw new Error("Cart not found");
// //   }

// //   const data = cartSnapshot.data();
// //   const items = [...((data.items || []) as CartItem[])];

// //   const itemIndex = items.findIndex(
// //     (item) =>
// //       item.productId === productId && item.variant === variant
// //   );

// //   if (itemIndex === -1) {
// //     throw new Error("Product not found in cart");
// //   }

// //   items[itemIndex] = {
// //     ...items[itemIndex],
// //     quantity,
// //   };

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // /**
// //  * Remove a product from the cart.
// //  */
// // export async function removeFromCart(
// //   userId: string,
// //   productId: string,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return {
// //       id: userId,
// //       userId,
// //       items: [],
// //       totalItems: 0,
// //       totalAmount: 0,
// //     };
// //   }

// //   const data = cartSnapshot.data();

// //   const items = ((data.items || []) as CartItem[]).filter(
// //     (item) =>
// //       !(
// //         item.productId === productId &&
// //         item.variant === variant
// //       )
// //   );

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // /**
// //  * Clear all items from the cart.
// //  */
// // export async function clearCart(userId: string): Promise<void> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);

// //   await setDoc(cartRef, {
// //     userId,
// //     items: [],
// //     totalItems: 0,
// //     totalAmount: 0,
// //     updatedAt: serverTimestamp(),
// //   });
// // }

// // /**
// //  * Get all carts.
// //  * Useful for admin/order management pages.
// //  */
// // export async function getAllCarts(): Promise<Cart[]> {
// //   const cartsRef = collection(db, CART_COLLECTION);
// //   const snapshot = await getDocs(cartsRef);

// //   return snapshot.docs.map((cartDoc) => {
// //     const data = cartDoc.data();

// //     return {
// //       id: cartDoc.id,
// //       userId: data.userId || cartDoc.id,
// //       items: (data.items || []) as CartItem[],
// //       totalItems: data.totalItems || 0,
// //       totalAmount: data.totalAmount || 0,
// //       updatedAt: data.updatedAt,
// //     };
// //   });
// // }

// // /**
// //  * Get a cart by user ID.
// //  */
// // export async function getCartByUserId(
// //   userId: string
// // ): Promise<Cart | null> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartsRef = collection(db, CART_COLLECTION);

// //   const cartQuery = query(
// //     cartsRef,
// //     where("userId", "==", userId)
// //   );

// //   const snapshot = await getDocs(cartQuery);

// //   if (snapshot.empty) {
// //     return null;
// //   }

// //   const cartDoc = snapshot.docs[0];
// //   const data = cartDoc.data();

// //   return {
// //     id: cartDoc.id,
// //     userId: data.userId || userId,
// //     items: (data.items || []) as CartItem[],
// //     totalItems: data.totalItems || 0,
// //     totalAmount: data.totalAmount || 0,
// //     updatedAt: data.updatedAt,
// //   };
// // }

// // /**
// //  * Delete the entire cart document.
// //  */
// // export async function deleteCart(userId: string): Promise<void> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   await deleteDoc(cartRef);
// // }

// // import { db } from "@/lib/firebase";
// // import {
// //   collection,
// //   doc,
// //   getDoc,
// //   getDocs,
// //   setDoc,
// //   updateDoc,
// //   serverTimestamp,
// // } from "firebase/firestore";

// // export interface CartItem {
// //   id: string;
// //   productId: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// //   image?: string;
// //   category?: string;
// //   variant?: string;
// //   leadTimeDays?: number; // ← add this
// // }

// // export interface Cart {
// //   id: string;
// //   userId: string;
// //   items: CartItem[];
// //   totalItems: number;
// //   totalAmount: number;
// //   updatedAt?: unknown;
// // }

// // const CART_COLLECTION = "carts";

// // // /** Remove undefined fields — Firestore does not allow them */
// // // function cleanItem(item: Partial<CartItem> & { productId: string; name: string; price: number; quantity: number }): CartItem {
// // //   const productId = String(item.productId || item.id || "");
// // //   const cleaned: CartItem = {
// // //     id: String(item.id || productId),
// // //     productId,
// // //     name: String(item.name || "Product"),
// // //     price: Number(item.price || 0),
// // //     quantity: Math.max(1, Number(item.quantity || 1)),
// // //   };

// // //   if (item.image) cleaned.image = String(item.image);
// // //   if (item.category) cleaned.category = String(item.category);
// // //   if (item.variant) cleaned.variant = String(item.variant);

// // //   return cleaned;
// // // }

// // function cleanItem(item: Partial<CartItem> & {
// //   productId: string;
// //   name: string;
// //   price: number;
// // }): CartItem {
// //   const cleaned: CartItem = {
// //     productId: String(item.productId),
// //     name: String(item.name || "Product"),
// //     price: Number(item.price || 0),
// //     quantity: Math.max(1, Number(item.quantity) || 1),
// //   };
// //   if (item.image) cleaned.image = String(item.image);
// //   if (item.category) cleaned.category = String(item.category);
// //   if (item.variant) cleaned.variant = String(item.variant);
// //   if (item.leadTimeDays && Number(item.leadTimeDays) > 0) {
// //     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
// //   }
// //   return cleaned;
// // }

// // function cleanItems(items: CartItem[]): CartItem[] {
// //   return items.map((item) => cleanItem(item));
// // }

// // export function getCartItemCount(items: CartItem[]): number {
// //   return items.reduce((total, item) => total + item.quantity, 0);
// // }

// // export function getCartTotal(items: CartItem[]): number {
// //   return items.reduce(
// //     (total, item) => total + item.price * item.quantity,
// //     0
// //   );
// // }

// // export async function getCart(userId: string): Promise<Cart | null> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return null;
// //   }

// //   const data = cartSnapshot.data();

// //   return {
// //     id: cartSnapshot.id,
// //     userId,
// //     items: cleanItems((data.items || []) as CartItem[]),
// //     totalItems: data.totalItems || 0,
// //     totalAmount: data.totalAmount || 0,
// //     updatedAt: data.updatedAt,
// //   };
// // }

// // export async function addToCart(
// //   userId: string,
// //   item: Partial<CartItem> & {
// //     productId: string;
// //     name: string;
// //     price: number;
// //     quantity: number;
// //   }
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const newItem = cleanItem(item);
// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   let items: CartItem[] = [];

// //   if (cartSnapshot.exists()) {
// //     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
// //   }

// //   const existingItemIndex = items.findIndex(
// //     (cartItem) =>
// //       cartItem.productId === newItem.productId &&
// //       (cartItem.variant || "") === (newItem.variant || "")
// //   );

// //   if (existingItemIndex >= 0) {
// //     items[existingItemIndex] = {
// //       ...items[existingItemIndex],
// //       quantity: items[existingItemIndex].quantity + newItem.quantity,
// //     };
// //   } else {
// //     items.push(newItem);
// //   }

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await setDoc(cartRef, {
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function updateCartItem(
// //   userId: string,
// //   productId: string,
// //   quantity: number,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   if (quantity < 1) {
// //     return removeFromCart(userId, productId, variant);
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     throw new Error("Cart not found");
// //   }

// //   const items = cleanItems([
// //     ...((cartSnapshot.data().items || []) as CartItem[]),
// //   ]);

// //   const itemIndex = items.findIndex(
// //     (item) =>
// //       item.productId === productId &&
// //       (item.variant || "") === (variant || "")
// //   );

// //   if (itemIndex === -1) {
// //     throw new Error("Product not found in cart");
// //   }

// //   items[itemIndex] = {
// //     ...items[itemIndex],
// //     quantity,
// //   };

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function removeFromCart(
// //   userId: string,
// //   productId: string,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return {
// //       id: userId,
// //       userId,
// //       items: [],
// //       totalItems: 0,
// //       totalAmount: 0,
// //     };
// //   }

// //   const items = cleanItems(
// //     ((cartSnapshot.data().items || []) as CartItem[]).filter(
// //       (item) =>
// //         !(
// //           item.productId === productId &&
// //           (item.variant || "") === (variant || "")
// //         )
// //     )
// //   );

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function clearCart(userId: string): Promise<void> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);

// //   await setDoc(cartRef, {
// //     userId,
// //     items: [],
// //     totalItems: 0,
// //     totalAmount: 0,
// //     updatedAt: serverTimestamp(),
// //   });
// // }


// // import { db } from "@/lib/firebase";
// // import {
// //   doc,
// //   getDoc,
// //   setDoc,
// //   updateDoc,
// //   serverTimestamp,
// // } from "firebase/firestore";

// // export interface CartItem {
// //   id: string;
// //   productId: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// //   image?: string;
// //   category?: string;
// //   variant?: string;
// //   leadTimeDays?: number;
// // }

// // export interface Cart {
// //   id: string;
// //   userId: string;
// //   items: CartItem[];
// //   totalItems: number;
// //   totalAmount: number;
// //   updatedAt?: unknown;
// // }

// // const CART_COLLECTION = "carts";

// // function cleanItem(
// //   item: Partial<CartItem> & {
// //     productId: string;
// //     name: string;
// //     price: number;
// //   }
// // ): CartItem {
// //   const productId = String(item.productId || item.id || "");
// //   const cleaned: CartItem = {
// //     id: String(item.id || productId),
// //     productId,
// //     name: String(item.name || "Product"),
// //     price: Number(item.price || 0),
// //     quantity: Math.max(1, Number(item.quantity) || 1),
// //   };

// //   if (item.image) cleaned.image = String(item.image);
// //   if (item.category) cleaned.category = String(item.category);
// //   if (item.variant) cleaned.variant = String(item.variant);
// //   if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
// //     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
// //   }

// //   return cleaned;
// // }

// // function cleanItems(items: CartItem[]): CartItem[] {
// //   return items.map((item) => cleanItem(item));
// // }

// // export function getCartItemCount(items: CartItem[]): number {
// //   return items.reduce((total, item) => total + item.quantity, 0);
// // }

// // export function getCartTotal(items: CartItem[]): number {
// //   return items.reduce(
// //     (total, item) => total + item.price * item.quantity,
// //     0
// //   );
// // }

// // export async function getCart(userId: string): Promise<Cart | null> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return null;
// //   }

// //   const data = cartSnapshot.data();

// //   return {
// //     id: cartSnapshot.id,
// //     userId,
// //     items: cleanItems((data.items || []) as CartItem[]),
// //     totalItems: data.totalItems || 0,
// //     totalAmount: data.totalAmount || 0,
// //     updatedAt: data.updatedAt,
// //   };
// // }

// // export async function addToCart(
// //   userId: string,
// //   item: Partial<CartItem> & {
// //     productId: string;
// //     name: string;
// //     price: number;
// //     quantity?: number;
// //   }
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const newItem = cleanItem({
// //     ...item,
// //     quantity: item.quantity ?? 1,
// //   });

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   let items: CartItem[] = [];

// //   if (cartSnapshot.exists()) {
// //     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
// //   }

// //   const existingItemIndex = items.findIndex(
// //     (cartItem) =>
// //       cartItem.productId === newItem.productId &&
// //       (cartItem.variant || "") === (newItem.variant || "")
// //   );

// //   if (existingItemIndex >= 0) {
// //     const existing = items[existingItemIndex];
// //     items[existingItemIndex] = {
// //       ...existing,
// //       quantity: existing.quantity + newItem.quantity,
// //       // refresh lead time / image if provided on re-add
// //       leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
// //       image: newItem.image || existing.image,
// //       category: newItem.category || existing.category,
// //     };
// //   } else {
// //     items.push(newItem);
// //   }

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await setDoc(cartRef, {
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function updateCartItem(
// //   userId: string,
// //   productId: string,
// //   quantity: number,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   if (quantity < 1) {
// //     return removeFromCart(userId, productId, variant);
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     throw new Error("Cart not found");
// //   }

// //   const items = cleanItems([
// //     ...((cartSnapshot.data().items || []) as CartItem[]),
// //   ]);

// //   const itemIndex = items.findIndex(
// //     (item) =>
// //       item.productId === productId &&
// //       (item.variant || "") === (variant || "")
// //   );

// //   if (itemIndex === -1) {
// //     throw new Error("Product not found in cart");
// //   }

// //   items[itemIndex] = {
// //     ...items[itemIndex],
// //     quantity,
// //   };

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function removeFromCart(
// //   userId: string,
// //   productId: string,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return {
// //       id: userId,
// //       userId,
// //       items: [],
// //       totalItems: 0,
// //       totalAmount: 0,
// //     };
// //   }

// //   const items = cleanItems(
// //     ((cartSnapshot.data().items || []) as CartItem[]).filter(
// //       (item) =>
// //         !(
// //           item.productId === productId &&
// //           (item.variant || "") === (variant || "")
// //         )
// //     )
// //   );

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function clearCart(userId: string): Promise<void> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);

// //   await setDoc(cartRef, {
// //     userId,
// //     items: [],
// //     totalItems: 0,
// //     totalAmount: 0,
// //     updatedAt: serverTimestamp(),
// //   });
// // }


// // import { db } from "@/lib/firebase";
// // import {
// //   doc,
// //   getDoc,
// //   setDoc,
// //   updateDoc,
// //   serverTimestamp,
// // } from "firebase/firestore";

// // export interface CartItem {
// //   id: string;
// //   productId: string;
// //   name: string;
// //   /** Unit price charged (effective / discounted). */
// //   price: number;
// //   /** Original list price before discount (display). */
// //   listPrice?: number;
// //   /** 0–100, for display only. */
// //   discountPercent?: number;
// //   quantity: number;
// //   image?: string;
// //   category?: string;
// //   variant?: string;
// //   leadTimeDays?: number;
// // }

// // export interface Cart {
// //   id: string;
// //   userId: string;
// //   items: CartItem[];
// //   totalItems: number;
// //   totalAmount: number;
// //   updatedAt?: unknown;
// // }

// // const CART_COLLECTION = "carts";

// // export const AGEING_DISCOUNT_DAYS = 7;

// // export function getProductAgeDays(data: {
// //   createdAt?: { toMillis?: () => number } | null;
// //   publishedAt?: { toMillis?: () => number } | null;
// // }): number {
// //   const ms =
// //     data.createdAt?.toMillis?.() ??
// //     data.publishedAt?.toMillis?.() ??
// //     Date.now();
// //   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// // }

// // export function canApplyAgeingDiscount(data: {
// //   createdAt?: { toMillis?: () => number } | null;
// //   publishedAt?: { toMillis?: () => number } | null;
// //   discountPercent?: number;
// // }): boolean {
// //   const pct = Math.min(100, Math.max(0, Number(data.discountPercent) || 0));
// //   return pct > 0 && getProductAgeDays(data) >= AGEING_DISCOUNT_DAYS;
// // }

// // export function getEffectiveSellingPrice(
// //   sellingPrice: number,
// //   discountPercent?: number | null,
// //   ageEligible = true
// // ): number {
// //   const base = Math.max(0, Number(sellingPrice) || 0);
// //   if (!ageEligible) return base;
// //   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
// //   if (pct <= 0) return base;
// //   return Math.round(base * (1 - pct / 100));
// // }

// // function cleanItem(
// //   item: Partial<CartItem> & {
// //     productId: string;
// //     name: string;
// //     price: number;
// //   }
// // ): CartItem {
// //   const productId = String(item.productId || item.id || "");
// //   const cleaned: CartItem = {
// //     id: String(item.id || productId),
// //     productId,
// //     name: String(item.name || "Product"),
// //     price: Number(item.price || 0),
// //     quantity: Math.max(1, Number(item.quantity) || 1),
// //   };

// //   if (item.image) cleaned.image = String(item.image);
// //   if (item.category) cleaned.category = String(item.category);
// //   if (item.variant) cleaned.variant = String(item.variant);
// //   if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
// //     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
// //   }
// //   if (item.listPrice != null && Number(item.listPrice) > 0) {
// //     cleaned.listPrice = Number(item.listPrice);
// //   }
// //   if (item.discountPercent != null && Number(item.discountPercent) > 0) {
// //     cleaned.discountPercent = Math.min(
// //       100,
// //       Math.max(0, Number(item.discountPercent))
// //     );
// //   }

// //   return cleaned;
// // }

// // function cleanItems(items: CartItem[]): CartItem[] {
// //   return items.map((item) => cleanItem(item));
// // }

// // export function getCartItemCount(items: CartItem[]): number {
// //   return items.reduce((total, item) => total + item.quantity, 0);
// // }

// // export function getCartTotal(items: CartItem[]): number {
// //   return items.reduce(
// //     (total, item) => total + item.price * item.quantity,
// //     0
// //   );
// // }

// // export async function getCart(userId: string): Promise<Cart | null> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return null;
// //   }

// //   const data = cartSnapshot.data();

// //   return {
// //     id: cartSnapshot.id,
// //     userId,
// //     items: cleanItems((data.items || []) as CartItem[]),
// //     totalItems: data.totalItems || 0,
// //     totalAmount: data.totalAmount || 0,
// //     updatedAt: data.updatedAt,
// //   };
// // }

// // export async function addToCart(
// //   userId: string,
// //   item: Partial<CartItem> & {
// //     productId: string;
// //     name: string;
// //     price: number;
// //     quantity?: number;
// //   }
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const newItem = cleanItem({
// //     ...item,
// //     quantity: item.quantity ?? 1,
// //   });

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   let items: CartItem[] = [];

// //   if (cartSnapshot.exists()) {
// //     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
// //   }

// //   const existingItemIndex = items.findIndex(
// //     (cartItem) =>
// //       cartItem.productId === newItem.productId &&
// //       (cartItem.variant || "") === (newItem.variant || "")
// //   );

// //   if (existingItemIndex >= 0) {
// //     const existing = items[existingItemIndex];
// //     items[existingItemIndex] = {
// //       ...existing,
// //       quantity: existing.quantity + newItem.quantity,
// //       price: newItem.price,
// //       listPrice: newItem.listPrice ?? existing.listPrice,
// //       discountPercent: newItem.discountPercent ?? existing.discountPercent,
// //       leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
// //       image: newItem.image || existing.image,
// //       category: newItem.category || existing.category,
// //     };
// //   } else {
// //     items.push(newItem);
// //   }

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await setDoc(cartRef, {
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function updateCartItem(
// //   userId: string,
// //   productId: string,
// //   quantity: number,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   if (quantity < 1) {
// //     return removeFromCart(userId, productId, variant);
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     throw new Error("Cart not found");
// //   }

// //   const items = cleanItems([
// //     ...((cartSnapshot.data().items || []) as CartItem[]),
// //   ]);

// //   const itemIndex = items.findIndex(
// //     (item) =>
// //       item.productId === productId &&
// //       (item.variant || "") === (variant || "")
// //   );

// //   if (itemIndex === -1) {
// //     throw new Error("Product not found in cart");
// //   }

// //   items[itemIndex] = {
// //     ...items[itemIndex],
// //     quantity,
// //   };

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function removeFromCart(
// //   userId: string,
// //   productId: string,
// //   variant?: string
// // ): Promise<Cart> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);
// //   const cartSnapshot = await getDoc(cartRef);

// //   if (!cartSnapshot.exists()) {
// //     return {
// //       id: userId,
// //       userId,
// //       items: [],
// //       totalItems: 0,
// //       totalAmount: 0,
// //     };
// //   }

// //   const items = cleanItems(
// //     ((cartSnapshot.data().items || []) as CartItem[]).filter(
// //       (item) =>
// //         !(
// //           item.productId === productId &&
// //           (item.variant || "") === (variant || "")
// //         )
// //     )
// //   );

// //   const totalItems = getCartItemCount(items);
// //   const totalAmount = getCartTotal(items);

// //   await updateDoc(cartRef, {
// //     items,
// //     totalItems,
// //     totalAmount,
// //     updatedAt: serverTimestamp(),
// //   });

// //   return {
// //     id: userId,
// //     userId,
// //     items,
// //     totalItems,
// //     totalAmount,
// //   };
// // }

// // export async function clearCart(userId: string): Promise<void> {
// //   if (!userId) {
// //     throw new Error("User ID is required");
// //   }

// //   const cartRef = doc(db, CART_COLLECTION, userId);

// //   await setDoc(cartRef, {
// //     userId,
// //     items: [],
// //     totalItems: 0,
// //     totalAmount: 0,
// //     updatedAt: serverTimestamp(),
// //   });
// // }


// import { db } from "@/lib/firebase";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   updateDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import {
//   getDeliverySettings,
//   DEFAULT_DELIVERY_SETTINGS,
// } from "@/services/deliverySettingsService";

// export interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   /** Unit price charged (effective / discounted). */
//   price: number;
//   /** Original list price before discount (display). */
//   listPrice?: number;
//   /** 0–100, for display only. */
//   discountPercent?: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
//   leadTimeDays?: number;
// }

// export interface Cart {
//   id: string;
//   userId: string;
//   items: CartItem[];
//   totalItems: number;
//   totalAmount: number;
//   updatedAt?: unknown;
// }

// const CART_COLLECTION = "carts";

// export const DEFAULT_AGEING_DISCOUNT_DAYS =
//   DEFAULT_DELIVERY_SETTINGS.ageingDiscountDays;

// /** @deprecated Prefer getAgeingDiscountDays() from Delivery settings */
// export const AGEING_DISCOUNT_DAYS = DEFAULT_AGEING_DISCOUNT_DAYS;

// /** Reads threshold from furniture_settings/delivery */
// export async function getAgeingDiscountDays(): Promise<number> {
//   try {
//     const s = await getDeliverySettings();
//     return Math.min(365, Math.max(1, Number(s.ageingDiscountDays) || 7));
//   } catch {
//     return DEFAULT_AGEING_DISCOUNT_DAYS;
//   }
// }

// export function getProductAgeDays(data: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): number {
//   const ms =
//     data.createdAt?.toMillis?.() ??
//     data.publishedAt?.toMillis?.() ??
//     Date.now();
//   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// }

// export function canApplyAgeingDiscount(
//   data: {
//     createdAt?: { toMillis?: () => number } | null;
//     publishedAt?: { toMillis?: () => number } | null;
//     discountPercent?: number;
//   },
//   thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
// ): boolean {
//   const pct = Math.min(100, Math.max(0, Number(data.discountPercent) || 0));
//   const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
//   return pct > 0 && getProductAgeDays(data) >= threshold;
// }

// export function getEffectiveSellingPrice(
//   sellingPrice: number,
//   discountPercent?: number | null,
//   ageEligible = true
// ): number {
//   const base = Math.max(0, Number(sellingPrice) || 0);
//   if (!ageEligible) return base;
//   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
//   if (pct <= 0) return base;
//   return Math.round(base * (1 - pct / 100));
// }

// function cleanItem(
//   item: Partial<CartItem> & {
//     productId: string;
//     name: string;
//     price: number;
//   }
// ): CartItem {
//   const productId = String(item.productId || item.id || "");
//   const cleaned: CartItem = {
//     id: String(item.id || productId),
//     productId,
//     name: String(item.name || "Product"),
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };

//   if (item.image) cleaned.image = String(item.image);
//   if (item.category) cleaned.category = String(item.category);
//   if (item.variant) cleaned.variant = String(item.variant);
//   if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
//     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
//   }
//   if (item.listPrice != null && Number(item.listPrice) > 0) {
//     cleaned.listPrice = Number(item.listPrice);
//   }
//   if (item.discountPercent != null && Number(item.discountPercent) > 0) {
//     cleaned.discountPercent = Math.min(
//       100,
//       Math.max(0, Number(item.discountPercent))
//     );
//   }

//   return cleaned;
// }

// function cleanItems(items: CartItem[]): CartItem[] {
//   return items.map((item) => cleanItem(item));
// }

// export function getCartItemCount(items: CartItem[]): number {
//   return items.reduce((total, item) => total + item.quantity, 0);
// }

// export function getCartTotal(items: CartItem[]): number {
//   return items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// }

// export async function getCart(userId: string): Promise<Cart | null> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return null;
//   }

//   const data = cartSnapshot.data();

//   return {
//     id: cartSnapshot.id,
//     userId,
//     items: cleanItems((data.items || []) as CartItem[]),
//     totalItems: data.totalItems || 0,
//     totalAmount: data.totalAmount || 0,
//     updatedAt: data.updatedAt,
//   };
// }

// export async function addToCart(
//   userId: string,
//   item: Partial<CartItem> & {
//     productId: string;
//     name: string;
//     price: number;
//     quantity?: number;
//   }
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const newItem = cleanItem({
//     ...item,
//     quantity: item.quantity ?? 1,
//   });

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   let items: CartItem[] = [];

//   if (cartSnapshot.exists()) {
//     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
//   }

//   const existingItemIndex = items.findIndex(
//     (cartItem) =>
//       cartItem.productId === newItem.productId &&
//       (cartItem.variant || "") === (newItem.variant || "")
//   );

//   if (existingItemIndex >= 0) {
//     const existing = items[existingItemIndex];
//     items[existingItemIndex] = {
//       ...existing,
//       quantity: existing.quantity + newItem.quantity,
//       price: newItem.price,
//       listPrice: newItem.listPrice ?? existing.listPrice,
//       discountPercent: newItem.discountPercent ?? existing.discountPercent,
//       leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
//       image: newItem.image || existing.image,
//       category: newItem.category || existing.category,
//     };
//   } else {
//     items.push(newItem);
//   }

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await setDoc(cartRef, {
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function updateCartItem(
//   userId: string,
//   productId: string,
//   quantity: number,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   if (quantity < 1) {
//     return removeFromCart(userId, productId, variant);
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     throw new Error("Cart not found");
//   }

//   const items = cleanItems([
//     ...((cartSnapshot.data().items || []) as CartItem[]),
//   ]);

//   const itemIndex = items.findIndex(
//     (item) =>
//       item.productId === productId &&
//       (item.variant || "") === (variant || "")
//   );

//   if (itemIndex === -1) {
//     throw new Error("Product not found in cart");
//   }

//   items[itemIndex] = {
//     ...items[itemIndex],
//     quantity,
//   };

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function removeFromCart(
//   userId: string,
//   productId: string,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return {
//       id: userId,
//       userId,
//       items: [],
//       totalItems: 0,
//       totalAmount: 0,
//     };
//   }

//   const items = cleanItems(
//     ((cartSnapshot.data().items || []) as CartItem[]).filter(
//       (item) =>
//         !(
//           item.productId === productId &&
//           (item.variant || "") === (variant || "")
//         )
//     )
//   );

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function clearCart(userId: string): Promise<void> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);

//   await setDoc(cartRef, {
//     userId,
//     items: [],
//     totalItems: 0,
//     totalAmount: 0,
//     updatedAt: serverTimestamp(),
//   });
// }




// import { db } from "@/lib/firebase";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   updateDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import {
//   getDeliverySettings,
//   DEFAULT_DELIVERY_SETTINGS,
// } from "@/services/deliverySettingsService";

// export interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   /** Unit price charged (effective / discounted). */
//   price: number;
//   /** Original list price before discount (display). */
//   listPrice?: number;
//   /** 0–100, for display only. */
//   discountPercent?: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
//   leadTimeDays?: number;
// }

// export interface Cart {
//   id: string;
//   userId: string;
//   items: CartItem[];
//   totalItems: number;
//   totalAmount: number;
//   updatedAt?: unknown;
// }

// const CART_COLLECTION = "carts";

// export const DEFAULT_AGEING_DISCOUNT_DAYS =
//   DEFAULT_DELIVERY_SETTINGS.ageingDiscountDays;

// /** @deprecated Prefer getAgeingDiscountDays() from Delivery settings */
// export const AGEING_DISCOUNT_DAYS = DEFAULT_AGEING_DISCOUNT_DAYS;

// /** Reads threshold from furniture_settings/delivery */
// export async function getAgeingDiscountDays(): Promise<number> {
//   try {
//     const s = await getDeliverySettings();
//     return Math.min(365, Math.max(1, Number(s.ageingDiscountDays) || 7));
//   } catch {
//     return DEFAULT_AGEING_DISCOUNT_DAYS;
//   }
// }

// export function getProductAgeDays(data: {
//   createdAt?: { toMillis?: () => number } | null;
//   publishedAt?: { toMillis?: () => number } | null;
// }): number {
//   const ms =
//     data.createdAt?.toMillis?.() ??
//     data.publishedAt?.toMillis?.() ??
//     Date.now();
//   return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
// }

// export function canApplyAgeingDiscount(
//   data: {
//     createdAt?: { toMillis?: () => number } | null;
//     publishedAt?: { toMillis?: () => number } | null;
//     discountPercent?: number;
//   },
//   thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
// ): boolean {
//   const pct = Math.min(100, Math.max(0, Number(data.discountPercent) || 0));
//   const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
//   return pct > 0 && getProductAgeDays(data) >= threshold;
// }

// export function getEffectiveSellingPrice(
//   sellingPrice: number,
//   discountPercent?: number | null,
//   ageEligible = true
// ): number {
//   const base = Math.max(0, Number(sellingPrice) || 0);
//   if (!ageEligible) return base;
//   const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
//   if (pct <= 0) return base;
//   return Math.round(base * (1 - pct / 100));
// }

// /** Build a Firestore-safe cart item — never includes undefined */
// function cleanItem(
//   item: Partial<CartItem> & {
//     productId: string;
//     name: string;
//     price: number;
//   }
// ): CartItem {
//   const productId = String(item.productId || item.id || "");
//   const cleaned: CartItem = {
//     id: String(item.id || productId),
//     productId,
//     name: String(item.name || "Product"),
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };

//   const image = item.image != null ? String(item.image).trim() : "";
//   if (image) cleaned.image = image;

//   const category = item.category != null ? String(item.category).trim() : "";
//   if (category) cleaned.category = category;

//   const variant = item.variant != null ? String(item.variant).trim() : "";
//   if (variant) cleaned.variant = variant;

//   if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
//     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
//   }
//   if (item.listPrice != null && Number(item.listPrice) > 0) {
//     cleaned.listPrice = Number(item.listPrice);
//   }
//   if (item.discountPercent != null && Number(item.discountPercent) > 0) {
//     cleaned.discountPercent = Math.min(
//       100,
//       Math.max(0, Number(item.discountPercent))
//     );
//   }

//   return cleaned;
// }

// function cleanItems(items: CartItem[]): CartItem[] {
//   return items.map((item) => cleanItem(item));
// }

// export function getCartItemCount(items: CartItem[]): number {
//   return items.reduce((total, item) => total + item.quantity, 0);
// }

// export function getCartTotal(items: CartItem[]): number {
//   return items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// }

// export async function getCart(userId: string): Promise<Cart | null> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return null;
//   }

//   const data = cartSnapshot.data();

//   return {
//     id: cartSnapshot.id,
//     userId,
//     items: cleanItems((data.items || []) as CartItem[]),
//     totalItems: data.totalItems || 0,
//     totalAmount: data.totalAmount || 0,
//     updatedAt: data.updatedAt,
//   };
// }

// export async function addToCart(
//   userId: string,
//   item: Partial<CartItem> & {
//     productId: string;
//     name: string;
//     price: number;
//     quantity?: number;
//   }
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const newItem = cleanItem({
//     ...item,
//     quantity: item.quantity ?? 1,
//   });

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   let items: CartItem[] = [];

//   if (cartSnapshot.exists()) {
//     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
//   }

//   const existingItemIndex = items.findIndex(
//     (cartItem) =>
//       cartItem.productId === newItem.productId &&
//       (cartItem.variant || "") === (newItem.variant || "")
//   );

//   if (existingItemIndex >= 0) {
//     const existing = items[existingItemIndex];
//     // Merge then re-clean so no undefined fields are written
//     items[existingItemIndex] = cleanItem({
//       ...existing,
//       ...newItem,
//       quantity: existing.quantity + newItem.quantity,
//       price: newItem.price,
//       listPrice: newItem.listPrice ?? existing.listPrice,
//       discountPercent: newItem.discountPercent ?? existing.discountPercent,
//       leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
//       image: newItem.image || existing.image,
//       category: newItem.category || existing.category,
//     });
//   } else {
//     items.push(newItem);
//   }

//   // Final sanitize of entire array before write
//   items = cleanItems(items);

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await setDoc(cartRef, {
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function updateCartItem(
//   userId: string,
//   productId: string,
//   quantity: number,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   if (quantity < 1) {
//     return removeFromCart(userId, productId, variant);
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     throw new Error("Cart not found");
//   }

//   const items = cleanItems([
//     ...((cartSnapshot.data().items || []) as CartItem[]),
//   ]);

//   const itemIndex = items.findIndex(
//     (item) =>
//       item.productId === productId &&
//       (item.variant || "") === (variant || "")
//   );

//   if (itemIndex === -1) {
//     throw new Error("Product not found in cart");
//   }

//   items[itemIndex] = cleanItem({
//     ...items[itemIndex],
//     quantity,
//   });

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function removeFromCart(
//   userId: string,
//   productId: string,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return {
//       id: userId,
//       userId,
//       items: [],
//       totalItems: 0,
//       totalAmount: 0,
//     };
//   }

//   const items = cleanItems(
//     ((cartSnapshot.data().items || []) as CartItem[]).filter(
//       (item) =>
//         !(
//           item.productId === productId &&
//           (item.variant || "") === (variant || "")
//         )
//     )
//   );

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function clearCart(userId: string): Promise<void> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);

//   await setDoc(cartRef, {
//     userId,
//     items: [],
//     totalItems: 0,
//     totalAmount: 0,
//     updatedAt: serverTimestamp(),
//   });
// }



import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getDeliverySettings,
  DEFAULT_DELIVERY_SETTINGS,
} from "@/services/deliverySettingsService";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  listPrice?: number;
  discountPercent?: number;
  quantity: number;
  image?: string;
  category?: string;
  variant?: string;
  leadTimeDays?: number;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  updatedAt?: unknown;
}

const CART_COLLECTION = "carts";

export const DEFAULT_AGEING_DISCOUNT_DAYS =
  DEFAULT_DELIVERY_SETTINGS.ageingDiscountDays;

/** @deprecated Prefer getAgeingDiscountDays() */
export const AGEING_DISCOUNT_DAYS = DEFAULT_AGEING_DISCOUNT_DAYS;

export async function getAgeingDiscountDays(): Promise<number> {
  try {
    const s = await getDeliverySettings();
    return Math.min(365, Math.max(1, Number(s.ageingDiscountDays) || 7));
  } catch {
    return DEFAULT_AGEING_DISCOUNT_DAYS;
  }
}

export function getProductAgeDays(data: {
  createdAt?: { toMillis?: () => number } | null;
  publishedAt?: { toMillis?: () => number } | null;
}): number {
  const ms =
    data.createdAt?.toMillis?.() ??
    data.publishedAt?.toMillis?.() ??
    Date.now();
  return Math.max(0, Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24)));
}

export function canApplyAgeingDiscount(
  data: {
    createdAt?: { toMillis?: () => number } | null;
    publishedAt?: { toMillis?: () => number } | null;
    discountPercent?: number;
  },
  thresholdDays: number = DEFAULT_AGEING_DISCOUNT_DAYS
): boolean {
  const pct = Math.min(100, Math.max(0, Number(data.discountPercent) || 0));
  const threshold = Math.min(365, Math.max(1, Number(thresholdDays) || 7));
  return pct > 0 && getProductAgeDays(data) >= threshold;
}

export function getEffectiveSellingPrice(
  sellingPrice: number,
  discountPercent?: number | null,
  ageEligible = true
): number {
  const base = Math.max(0, Number(sellingPrice) || 0);
  if (!ageEligible) return base;
  const pct = Math.min(100, Math.max(0, Number(discountPercent) || 0));
  if (pct <= 0) return base;
  return Math.round(base * (1 - pct / 100));
}

/** Available stock (0 if missing / inactive). */
export async function getProductStock(productId: string): Promise<number> {
  if (!productId) return 0;
  try {
    const snap = await getDoc(doc(db, "furniture_products", productId));
    if (!snap.exists()) return 0;
    const data = snap.data() as { stock?: number; status?: string };
    if (String(data.status || "") === "Inactive") return 0;
    return Math.max(0, Math.floor(Number(data.stock) || 0));
  } catch {
    return 0;
  }
}

export async function getStocksByProductIds(
  productIds: string[]
): Promise<Record<string, number>> {
  const unique = Array.from(new Set(productIds.filter(Boolean)));
  const entries = await Promise.all(
    unique.map(async (id) => [id, await getProductStock(id)] as const)
  );
  return Object.fromEntries(entries);
}

function cleanItem(
  item: Partial<CartItem> & {
    productId: string;
    name: string;
    price: number;
  }
): CartItem {
  const productId = String(item.productId || item.id || "");
  const cleaned: CartItem = {
    id: String(item.id || productId),
    productId,
    name: String(item.name || "Product"),
    price: Number(item.price || 0),
    quantity: Math.max(1, Number(item.quantity) || 1),
  };

  const image = item.image != null ? String(item.image).trim() : "";
  if (image) cleaned.image = image;

  const category = item.category != null ? String(item.category).trim() : "";
  if (category) cleaned.category = category;

  const variant = item.variant != null ? String(item.variant).trim() : "";
  if (variant) cleaned.variant = variant;

  if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
    cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
  }
  if (item.listPrice != null && Number(item.listPrice) > 0) {
    cleaned.listPrice = Number(item.listPrice);
  }
  if (item.discountPercent != null && Number(item.discountPercent) > 0) {
    cleaned.discountPercent = Math.min(
      100,
      Math.max(0, Number(item.discountPercent))
    );
  }

  return cleaned;
}

function cleanItems(items: CartItem[]): CartItem[] {
  return items.map((item) => cleanItem(item));
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export async function getCart(userId: string): Promise<Cart | null> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    return null;
  }

  const data = cartSnapshot.data();

  return {
    id: cartSnapshot.id,
    userId,
    items: cleanItems((data.items || []) as CartItem[]),
    totalItems: data.totalItems || 0,
    totalAmount: data.totalAmount || 0,
    updatedAt: data.updatedAt,
  };
}

export async function addToCart(
  userId: string,
  item: Partial<CartItem> & {
    productId: string;
    name: string;
    price: number;
    quantity?: number;
  }
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const productId = String(item.productId || item.id || "");
  const stock = await getProductStock(productId);
  if (stock <= 0) {
    throw new Error("This product is out of stock.");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  let items: CartItem[] = [];
  if (cartSnapshot.exists()) {
    items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
  }

  const existingItemIndex = items.findIndex(
    (cartItem) =>
      cartItem.productId === productId &&
      (cartItem.variant || "") === (item.variant || "")
  );

  const addQty = Math.max(1, Number(item.quantity) || 1);
  const alreadyInCart =
    existingItemIndex >= 0 ? items[existingItemIndex].quantity : 0;
  const room = stock - alreadyInCart;

  if (room <= 0) {
    throw new Error(
      `Only ${stock} unit${stock === 1 ? "" : "s"} available. You already have ${alreadyInCart} in cart.`
    );
  }

  const qtyToAdd = Math.min(addQty, room);

  const newItem = cleanItem({
    ...item,
    productId,
    quantity: qtyToAdd,
  });

  if (existingItemIndex >= 0) {
    const existing = items[existingItemIndex];
    items[existingItemIndex] = cleanItem({
      ...existing,
      ...newItem,
      quantity: existing.quantity + qtyToAdd,
      price: newItem.price,
      listPrice: newItem.listPrice ?? existing.listPrice,
      discountPercent: newItem.discountPercent ?? existing.discountPercent,
      leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
      image: newItem.image || existing.image,
      category: newItem.category || existing.category,
    });
  } else {
    items.push(newItem);
  }

  items = cleanItems(items);
  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await setDoc(cartRef, {
    userId,
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function updateCartItem(
  userId: string,
  productId: string,
  quantity: number,
  variant?: string
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  if (quantity < 1) {
    return removeFromCart(userId, productId, variant);
  }

  const stock = await getProductStock(productId);
  if (stock <= 0) {
    return removeFromCart(userId, productId, variant);
  }

  const capped = Math.min(Math.max(1, quantity), stock);

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    throw new Error("Cart not found");
  }

  const items = cleanItems([
    ...((cartSnapshot.data().items || []) as CartItem[]),
  ]);

  const itemIndex = items.findIndex(
    (item) =>
      item.productId === productId &&
      (item.variant || "") === (variant || "")
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in cart");
  }

  items[itemIndex] = cleanItem({
    ...items[itemIndex],
    quantity: capped,
  });

  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await updateDoc(cartRef, {
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function removeFromCart(
  userId: string,
  productId: string,
  variant?: string
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    return {
      id: userId,
      userId,
      items: [],
      totalItems: 0,
      totalAmount: 0,
    };
  }

  const items = cleanItems(
    ((cartSnapshot.data().items || []) as CartItem[]).filter(
      (item) =>
        !(
          item.productId === productId &&
          (item.variant || "") === (variant || "")
        )
    )
  );

  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await updateDoc(cartRef, {
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function clearCart(userId: string): Promise<void> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);

  await setDoc(cartRef, {
    userId,
    items: [],
    totalItems: 0,
    totalAmount: 0,
    updatedAt: serverTimestamp(),
  });
}
