// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_customers";

// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureCustomer));
// }

// export async function createCustomer(
//   data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     enquiries: data.enquiries ?? 0,
//     orders: data.orders ?? 0,
//     totalPurchase: data.totalPurchase ?? 0,
//     pendingAmount: data.pendingAmount ?? 0,
//     status: data.status ?? "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateCustomer(
//   id: string,
//   data: Partial<FurnitureCustomer>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteCustomer(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   limit,
//   serverTimestamp,
//   Timestamp,
//   setDoc,
// } from "firebase/firestore";
// // import { db } from "@/core/config/firebaseClient";
// import { getErpDb } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   /** Firebase Auth UID when user signed up on website */
//   uid?: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   photoURL?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_customers";

// function db() {
//   return getErpDb();
// }

// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db(), COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   } catch {
//     const snap = await getDocs(collection(db(), COLLECTION));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   }
// }

// export async function createCustomer(
//   data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db(), COLLECTION), {
//     ...data,
//     enquiries: data.enquiries ?? 0,
//     orders: data.orders ?? 0,
//     totalPurchase: data.totalPurchase ?? 0,
//     pendingAmount: data.pendingAmount ?? 0,
//     status: data.status ?? "Active",
//     source: data.source ?? "Other",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// /**
//  * Upsert customer from website Auth (same uid = same doc).
//  * Call this after sign-up / first login on the website.
//  */
// export async function upsertCustomerFromAuth(data: {
//   uid: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   photoURL?: string;
//   area?: string;
// }): Promise<string> {
//   const uid = data.uid.trim();
//   if (!uid) throw new Error("uid is required");

//   // Prefer doc id = uid for stable link to Auth
//   const ref = doc(db(), COLLECTION, uid);
//   const existingSnap = await getDocs(
//     query(collection(db(), COLLECTION), where("uid", "==", uid), limit(1))
//   );

//   const payload = {
//     uid,
//     name: (data.name || data.email || "Customer").trim(),
//     email: (data.email || "").trim(),
//     phone: (data.phone || "").trim(),
//     photoURL: data.photoURL || "",
//     area: (data.area || "").trim(),
//     source: "Website",
//     status: "Active" as const,
//     updatedAt: serverTimestamp(),
//   };

//   if (!existingSnap.empty) {
//     const id = existingSnap.docs[0].id;
//     await updateDoc(doc(db(), COLLECTION, id), payload);
//     return id;
//   }

//   await setDoc(
//     ref,
//     {
//       ...payload,
//       enquiries: 0,
//       orders: 0,
//       totalPurchase: 0,
//       pendingAmount: 0,
//       lastInteraction: "Signed up",
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );

//   return uid;
// }

// export async function updateCustomer(
//   id: string,
//   data: Partial<FurnitureCustomer>
// ): Promise<void> {
//   await updateDoc(doc(db(), COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteCustomer(id: string): Promise<void> {
//   await deleteDoc(doc(db(), COLLECTION, id));
// }




// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   limit,
//   serverTimestamp,
//   Timestamp,
//   setDoc,
//   type Firestore,
// } from "firebase/firestore";
// import { getErpDb } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   /** Firebase Auth UID when user signed up on website */
//   uid?: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   gender?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   photoURL?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_customers";

// /** Always returns a real Firestore instance (never a function / null). */
// function firestore(): Firestore {
//   const db = getErpDb();
//   if (!db || typeof (db as { type?: string }).type !== "firestore") {
//     // Fallback shape check — still throw clearly if something is wrong
//     if (!db) {
//       throw new Error(
//         "[customerService] Firestore is not initialized. Call only from the browser (useEffect / event handlers)."
//       );
//     }
//   }
//   return db;
// }

// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   const db = firestore();
//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   }
// }

// export async function getCustomerById(
//   id: string
// ): Promise<FurnitureCustomer | null> {
//   const db = firestore();
//   const snap = await getDoc(doc(db, COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureCustomer;
// }

// export async function createCustomer(
//   data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const db = firestore();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     enquiries: data.enquiries ?? 0,
//     orders: data.orders ?? 0,
//     totalPurchase: data.totalPurchase ?? 0,
//     pendingAmount: data.pendingAmount ?? 0,
//     status: data.status ?? "Active",
//     source: data.source ?? "Other",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// /**
//  * Upsert customer from website Auth (doc id = uid).
//  * Call after sign-up / first login on the website.
//  */
// export async function upsertCustomerFromAuth(data: {
//   uid: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   gender?: string;
//   photoURL?: string;
//   area?: string;
// }): Promise<string> {
//   const uid = String(data.uid || "").trim();
//   if (!uid) throw new Error("uid is required");

//   const db = firestore();
//   const ref = doc(db, COLLECTION, uid);
//   const existing = await getDoc(ref);

//   const payload = {
//     uid,
//     name: (data.name || data.email || "Customer").trim(),
//     email: (data.email || "").trim(),
//     phone: (data.phone || "").trim(),
//     gender: (data.gender || "").trim(),
//     photoURL: data.photoURL || "",
//     area: (data.area || "").trim(),
//     source: "Website",
//     status: "Active" as const,
//     lastInteraction: existing.exists() ? "Signed in" : "Signed up",
//     updatedAt: serverTimestamp(),
//   };

//   if (existing.exists()) {
//     await updateDoc(ref, payload);
//     return uid;
//   }

//   await setDoc(
//     ref,
//     {
//       ...payload,
//       enquiries: 0,
//       orders: 0,
//       totalPurchase: 0,
//       pendingAmount: 0,
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );

//   return uid;
// }

// export async function updateCustomer(
//   id: string,
//   data: Partial<FurnitureCustomer>
// ): Promise<void> {
//   const db = firestore();
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteCustomer(id: string): Promise<void> {
//   const db = firestore();
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// /** Find by email (ERP search helpers). */
// export async function findCustomerByEmail(
//   email: string
// ): Promise<FurnitureCustomer | null> {
//   const normalized = email.trim().toLowerCase();
//   if (!normalized) return null;
//   const db = firestore();
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("email", "==", normalized),
//       limit(1)
//     )
//   );
//   if (snap.empty) return null;
//   const d = snap.docs[0];
//   return { id: d.id, ...d.data() } as FurnitureCustomer;
// }


// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   limit,
//   serverTimestamp,
//   Timestamp,
//   setDoc,
//   type Firestore,
// } from "firebase/firestore";
// import { getErpDb } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   uid?: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   gender?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   photoURL?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_customers";

// function firestore(): Firestore {
//   return getErpDb();
// }

// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   const db = firestore();
//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   }
// }

// export async function getCustomerById(
//   id: string
// ): Promise<FurnitureCustomer | null> {
//   const db = firestore();
//   const snap = await getDoc(doc(db, COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureCustomer;
// }

// export async function createCustomer(
//   data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const db = firestore();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     enquiries: data.enquiries ?? 0,
//     orders: data.orders ?? 0,
//     totalPurchase: data.totalPurchase ?? 0,
//     pendingAmount: data.pendingAmount ?? 0,
//     status: data.status ?? "Active",
//     source: data.source ?? "Other",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function upsertCustomerFromAuth(data: {
//   uid: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   gender?: string;
//   photoURL?: string;
//   area?: string;
// }): Promise<string> {
//   const uid = String(data.uid || "").trim();
//   if (!uid) throw new Error("uid is required");

//   const db = firestore();
//   const ref = doc(db, COLLECTION, uid);
//   const existing = await getDoc(ref);

//   const payload = {
//     uid,
//     name: (data.name || data.email || "Customer").trim(),
//     email: (data.email || "").trim(),
//     phone: (data.phone || "").trim(),
//     gender: (data.gender || "").trim(),
//     photoURL: data.photoURL || "",
//     area: (data.area || "").trim(),
//     source: "Website",
//     status: "Active" as const,
//     lastInteraction: existing.exists() ? "Signed in" : "Signed up",
//     updatedAt: serverTimestamp(),
//   };

//   if (existing.exists()) {
//     await updateDoc(ref, payload);
//     return uid;
//   }

//   await setDoc(
//     ref,
//     {
//       ...payload,
//       enquiries: 0,
//       orders: 0,
//       totalPurchase: 0,
//       pendingAmount: 0,
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );

//   return uid;
// }

// export async function updateCustomer(
//   id: string,
//   data: Partial<FurnitureCustomer>
// ): Promise<void> {
//   const db = firestore();
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteCustomer(id: string): Promise<void> {
//   const db = firestore();
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// export async function findCustomerByEmail(
//   email: string
// ): Promise<FurnitureCustomer | null> {
//   const normalized = email.trim().toLowerCase();
//   if (!normalized) return null;
//   const db = firestore();
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("email", "==", normalized),
//       limit(1)
//     )
//   );
//   if (snap.empty) return null;
//   const d = snap.docs[0];
//   return { id: d.id, ...d.data() } as FurnitureCustomer;
// }


// "use client";

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   limit,
//   serverTimestamp,
//   Timestamp,
//   setDoc,
// } from "firebase/firestore";
// import { getErpDb } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   uid?: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   gender?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   photoURL?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// type CustomerInput = Omit<
//   FurnitureCustomer,
//   "id" | "createdAt" | "updatedAt"
// >;

// const COLLECTION = "furniture_customers";

// function db() {
//   return getErpDb();
// }

// function validateName(name: string): string {
//   const trimmed = (name || "").trim();
//   if (!trimmed) throw new Error("Customer name is required.");
//   return trimmed;
// }

// /**
//  * Get all furniture customers.
//  */
// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db(), COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//     );
//   } catch (error) {
//     console.error("[Furniture Customers] Fetch failed:", error);
//     try {
//       const snap = await getDocs(collection(db(), COLLECTION));
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
//       );
//     } catch (err) {
//       console.error("[Furniture Customers] Fallback fetch failed:", err);
//       throw new Error("Unable to fetch furniture customers.");
//     }
//   }
// }

// /**
//  * Get one customer by document id.
//  */
// export async function getCustomerById(
//   id: string
// ): Promise<FurnitureCustomer | null> {
//   if (!id.trim()) return null;
//   const snap = await getDoc(doc(db(), COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureCustomer;
// }

// /**
//  * Create a customer (ERP form).
//  */
// export async function createCustomer(data: CustomerInput): Promise<string> {
//   try {
//     const name = validateName(data.name);
//     const ref = await addDoc(collection(db(), COLLECTION), {
//       name,
//       phone: (data.phone || "").trim(),
//       email: (data.email || "").trim(),
//       gender: (data.gender || "").trim(),
//       area: (data.area || "").trim(),
//       address: (data.address || "").trim(),
//       source: data.source || "Other",
//       uid: data.uid || "",
//       photoURL: data.photoURL || "",
//       enquiries: data.enquiries ?? 0,
//       orders: data.orders ?? 0,
//       totalPurchase: data.totalPurchase ?? 0,
//       pendingAmount: data.pendingAmount ?? 0,
//       status: data.status || "Active",
//       lastInteraction: data.lastInteraction || "",
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp(),
//     });
//     return ref.id;
//   } catch (error) {
//     console.error("[Furniture Customers] Create failed:", error);
//     throw error;
//   }
// }

// /**
//  * Upsert from website Auth (doc id = uid).
//  * Call after customer sign-up / sign-in on the website.
//  */
// export async function upsertCustomerFromAuth(data: {
//   uid: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   gender?: string;
//   photoURL?: string;
//   area?: string;
// }): Promise<string> {
//   const uid = String(data.uid || "").trim();
//   if (!uid) throw new Error("uid is required");

//   try {
//     const ref = doc(db(), COLLECTION, uid);
//     const existing = await getDoc(ref);

//     const payload = {
//       uid,
//       name: validateName(data.name || data.email || "Customer"),
//       email: (data.email || "").trim(),
//       phone: (data.phone || "").trim(),
//       gender: (data.gender || "").trim(),
//       photoURL: data.photoURL || "",
//       area: (data.area || "").trim(),
//       source: "Website",
//       status: "Active" as const,
//       lastInteraction: existing.exists() ? "Signed in" : "Signed up",
//       updatedAt: serverTimestamp(),
//     };

//     if (existing.exists()) {
//       await updateDoc(ref, payload);
//       return uid;
//     }

//     await setDoc(
//       ref,
//       {
//         ...payload,
//         enquiries: 0,
//         orders: 0,
//         totalPurchase: 0,
//         pendingAmount: 0,
//         address: "",
//         createdAt: serverTimestamp(),
//       },
//       { merge: true }
//     );

//     return uid;
//   } catch (error) {
//     console.error("[Furniture Customers] Upsert from auth failed:", error);
//     throw error;
//   }
// }

// /**
//  * Update an existing customer.
//  */
// export async function updateCustomer(
//   id: string,
//   data: Partial<CustomerInput>
// ): Promise<void> {
//   try {
//     if (!id.trim()) throw new Error("Customer ID is required.");

//     const payload: Record<string, unknown> = {
//       updatedAt: serverTimestamp(),
//     };

//     if (data.name !== undefined) payload.name = validateName(data.name);
//     if (data.phone !== undefined) payload.phone = data.phone.trim();
//     if (data.email !== undefined) payload.email = data.email.trim();
//     if (data.gender !== undefined) payload.gender = data.gender.trim();
//     if (data.area !== undefined) payload.area = data.area.trim();
//     if (data.address !== undefined) payload.address = data.address.trim();
//     if (data.source !== undefined) payload.source = data.source;
//     if (data.status !== undefined) payload.status = data.status;
//     if (data.enquiries !== undefined) payload.enquiries = data.enquiries;
//     if (data.orders !== undefined) payload.orders = data.orders;
//     if (data.totalPurchase !== undefined)
//       payload.totalPurchase = data.totalPurchase;
//     if (data.pendingAmount !== undefined)
//       payload.pendingAmount = data.pendingAmount;
//     if (data.lastInteraction !== undefined)
//       payload.lastInteraction = data.lastInteraction;
//     if (data.photoURL !== undefined) payload.photoURL = data.photoURL;
//     if (data.uid !== undefined) payload.uid = data.uid;

//     await updateDoc(doc(db(), COLLECTION, id), payload);
//   } catch (error) {
//     console.error("[Furniture Customers] Update failed:", error);
//     throw error;
//   }
// }

// /**
//  * Delete a customer.
//  */
// export async function deleteCustomer(id: string): Promise<void> {
//   try {
//     if (!id.trim()) throw new Error("Customer ID is required.");
//     await deleteDoc(doc(db(), COLLECTION, id));
//   } catch (error) {
//     console.error("[Furniture Customers] Delete failed:", error);
//     throw error;
//   }
// }

// /**
//  * Find by email (optional helper).
//  */
// export async function findCustomerByEmail(
//   email: string
// ): Promise<FurnitureCustomer | null> {
//   const normalized = email.trim().toLowerCase();
//   if (!normalized) return null;

//   try {
//     const snap = await getDocs(
//       query(
//         collection(db(), COLLECTION),
//         where("email", "==", normalized),
//         limit(1)
//       )
//     );
//     if (snap.empty) return null;
//     const d = snap.docs[0];
//     return { id: d.id, ...d.data() } as FurnitureCustomer;
//   } catch (error) {
//     console.error("[Furniture Customers] Find by email failed:", error);
//     return null;
//   }
// }



"use client";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  limit,
  serverTimestamp,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { getErpDb } from "@/core/config/firebaseClient";

export type FurnitureCustomer = {
  id: string;
  uid?: string;
  name: string;
  phone?: string;
  email?: string;
  gender?: string;
  area?: string;
  address?: string;
  source?: string;
  enquiries?: number;
  orders?: number;
  totalPurchase?: number;
  pendingAmount?: number;
  status?: "Active" | "Inactive";
  lastInteraction?: string;
  photoURL?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

type CustomerInput = Omit<
  FurnitureCustomer,
  "id" | "createdAt" | "updatedAt"
>;

const COLLECTION = "furniture_customers";

function db() {
  return getErpDb();
}

function validateName(name: string): string {
  const trimmed = (name || "").trim();
  if (!trimmed) {
    throw new Error("Customer name is required.");
  }
  return trimmed;
}

/**
 * Get all furniture customers.
 */
export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
  try {
    const snap = await getDocs(
      query(collection(db(), COLLECTION), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
    );
  } catch (error) {
    console.error("[Furniture Customers] ordered fetch failed:", error);
    try {
      const snap = await getDocs(collection(db(), COLLECTION));
      return snap.docs.map(
        (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
      );
    } catch (err) {
      console.error("[Furniture Customers] fallback fetch failed:", err);
      throw new Error("Unable to fetch furniture customers.");
    }
  }
}

/**
 * Get one customer by document id.
 */
export async function getCustomerById(
  id: string
): Promise<FurnitureCustomer | null> {
  if (!id.trim()) return null;
  const snap = await getDoc(doc(db(), COLLECTION, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as FurnitureCustomer;
}

/**
 * Create a customer (ERP form).
 */
export async function createCustomer(data: CustomerInput): Promise<string> {
  try {
    const name = validateName(data.name);

    const ref = await addDoc(collection(db(), COLLECTION), {
      name,
      phone: (data.phone || "").trim(),
      email: (data.email || "").trim(),
      gender: (data.gender || "").trim(),
      area: (data.area || "").trim(),
      address: (data.address || "").trim(),
      source: data.source || "Other",
      uid: data.uid || "",
      photoURL: data.photoURL || "",
      enquiries: data.enquiries ?? 0,
      orders: data.orders ?? 0,
      totalPurchase: data.totalPurchase ?? 0,
      pendingAmount: data.pendingAmount ?? 0,
      status: data.status || "Active",
      lastInteraction: data.lastInteraction || "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return ref.id;
  } catch (error) {
    console.error("[Furniture Customers] Create failed:", error);
    throw error;
  }
}

/**
 * Upsert from website Auth (document id = uid).
 */
export async function upsertCustomerFromAuth(data: {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  photoURL?: string;
  area?: string;
}): Promise<string> {
  const uid = String(data.uid || "").trim();
  if (!uid) throw new Error("uid is required");

  try {
    const ref = doc(db(), COLLECTION, uid);
    const existing = await getDoc(ref);

    const payload = {
      uid,
      name: validateName(data.name || data.email || "Customer"),
      email: (data.email || "").trim(),
      phone: (data.phone || "").trim(),
      gender: (data.gender || "").trim(),
      photoURL: data.photoURL || "",
      area: (data.area || "").trim(),
      source: "Website",
      status: "Active" as const,
      lastInteraction: existing.exists() ? "Signed in" : "Signed up",
      updatedAt: serverTimestamp(),
    };

    if (existing.exists()) {
      await updateDoc(ref, payload);
      return uid;
    }

    await setDoc(
      ref,
      {
        ...payload,
        enquiries: 0,
        orders: 0,
        totalPurchase: 0,
        pendingAmount: 0,
        address: "",
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );

    return uid;
  } catch (error) {
    console.error("[Furniture Customers] Upsert from auth failed:", error);
    throw error;
  }
}

/**
 * Update an existing customer.
 */
export async function updateCustomer(
  id: string,
  data: Partial<CustomerInput>
): Promise<void> {
  try {
    if (!id.trim()) {
      throw new Error("Customer ID is required.");
    }

    const payload: Record<string, unknown> = {
      updatedAt: serverTimestamp(),
    };

    if (data.name !== undefined) payload.name = validateName(data.name);
    if (data.phone !== undefined) payload.phone = data.phone.trim();
    if (data.email !== undefined) payload.email = data.email.trim();
    if (data.gender !== undefined) payload.gender = data.gender.trim();
    if (data.area !== undefined) payload.area = data.area.trim();
    if (data.address !== undefined) payload.address = data.address.trim();
    if (data.source !== undefined) payload.source = data.source;
    if (data.status !== undefined) payload.status = data.status;
    if (data.enquiries !== undefined) payload.enquiries = data.enquiries;
    if (data.orders !== undefined) payload.orders = data.orders;
    if (data.totalPurchase !== undefined) {
      payload.totalPurchase = data.totalPurchase;
    }
    if (data.pendingAmount !== undefined) {
      payload.pendingAmount = data.pendingAmount;
    }
    if (data.lastInteraction !== undefined) {
      payload.lastInteraction = data.lastInteraction;
    }
    if (data.photoURL !== undefined) payload.photoURL = data.photoURL;
    if (data.uid !== undefined) payload.uid = data.uid;

    await updateDoc(doc(db(), COLLECTION, id), payload);
  } catch (error) {
    console.error("[Furniture Customers] Update failed:", error);
    throw error;
  }
}

/**
 * Delete a customer.
 */
export async function deleteCustomer(id: string): Promise<void> {
  try {
    if (!id.trim()) {
      throw new Error("Customer ID is required.");
    }
    await deleteDoc(doc(db(), COLLECTION, id));
  } catch (error) {
    console.error("[Furniture Customers] Delete failed:", error);
    throw error;
  }
}

/**
 * Find by email.
 */
export async function findCustomerByEmail(
  email: string
): Promise<FurnitureCustomer | null> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;

  try {
    const snap = await getDocs(
      query(
        collection(db(), COLLECTION),
        where("email", "==", normalized),
        limit(1)
      )
    );
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as FurnitureCustomer;
  } catch (error) {
    console.error("[Furniture Customers] Find by email failed:", error);
    return null;
  }
}
