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

// export type FurnitureCategory = {
//   id: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   status?: "Active" | "Inactive";
//   sortOrder?: number;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_categories";

// function toSlug(name: string): string {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export async function getAllCategories(): Promise<FurnitureCategory[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("sortOrder", "asc"))
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureCategory
//   );
// }

// export async function createCategory(
//   data: Omit<FurnitureCategory, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const name = data.name.trim();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     name,
//     slug: data.slug?.trim() || toSlug(name),
//     description: data.description?.trim() || "",
//     status: data.status || "Active",
//     sortOrder: typeof data.sortOrder === "number" ? data.sortOrder : 0,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateCategory(
//   id: string,
//   data: Partial<FurnitureCategory>
// ): Promise<void> {
//   const payload: Record<string, unknown> = {
//     updatedAt: serverTimestamp(),
//   };
//   if (data.name !== undefined) {
//     payload.name = data.name.trim();
//     if (!data.slug) payload.slug = toSlug(data.name);
//   }
//   if (data.slug !== undefined) payload.slug = data.slug.trim();
//   if (data.description !== undefined)
//     payload.description = data.description.trim();
//   if (data.status !== undefined) payload.status = data.status;
//   if (data.sortOrder !== undefined) payload.sortOrder = data.sortOrder;

//   await updateDoc(doc(db, COLLECTION, id), payload);
// }

// export async function deleteCategory(id: string): Promise<void> {
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
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// // export type FurnitureCategory = {
// //   id: string;
// //   name: string;
// //   slug?: string;
// //   description?: string;
// //   status?: "Active" | "Inactive";
// //   sortOrder?: number;
// //   createdAt?: Timestamp | null;
// //   updatedAt?: Timestamp | null;
// // };

// export type FurnitureCategory = {
//   id: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   status?: "Active" | "Inactive";
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_categories";

// function toSlug(name: string): string {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export async function getAllCategories(): Promise<FurnitureCategory[]> {
// //   const snap = await getDocs(
// //     query(collection(db, COLLECTION), orderBy("sortOrder", "asc"))
// //   );
//     const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("name", "asc"))
//     );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureCategory
//   );
// }

// export async function createCategory(
//   data: Omit<FurnitureCategory, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const name = data.name.trim();
// //   const ref = await addDoc(collection(db, COLLECTION), {
// //     name,
// //     slug: data.slug?.trim() || toSlug(name),
// //     description: data.description?.trim() || "",
// //     status: data.status || "Active",
// //     sortOrder: typeof data.sortOrder === "number" ? data.sortOrder : 0,
// //     createdAt: serverTimestamp(),
// //     updatedAt: serverTimestamp(),
// //   });
//     const ref = await addDoc(collection(db, COLLECTION), {
//     name,
//     slug: data.slug?.trim() || toSlug(name),
//     description: data.description?.trim() || "",
//     status: data.status || "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//     });
//   return ref.id;
// }

// export async function updateCategory(
//   id: string,
//   data: Partial<FurnitureCategory>
// ): Promise<void> {
//   const payload: Record<string, unknown> = {
//     updatedAt: serverTimestamp(),
//   };
//   if (data.name !== undefined) {
//     payload.name = data.name.trim();
//     if (!data.slug) payload.slug = toSlug(data.name);
//   }
//   if (data.slug !== undefined) payload.slug = data.slug.trim();
//   if (data.description !== undefined)
//     payload.description = data.description.trim();
//   if (data.status !== undefined) payload.status = data.status;
// //   if (data.sortOrder !== undefined) payload.sortOrder = data.sortOrder;

//   await updateDoc(doc(db, COLLECTION, id), payload);
// }

// export async function deleteCategory(id: string): Promise<void> {
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
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { getErpDb } from "@/core/config/firebaseClient";

// export type FurnitureCategory = {
//   id: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   status?: "Active" | "Inactive";
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_categories";

// function db() {
//   return getErpDb();
// }

// function toSlug(name: string): string {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export async function getAllCategories(): Promise<FurnitureCategory[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("name", "asc"))
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureCategory
//   );
// }

// export async function createCategory(
//   data: Omit<FurnitureCategory, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const name = data.name.trim();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     name,
//     slug: data.slug?.trim() || toSlug(name),
//     description: data.description?.trim() || "",
//     status: data.status || "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateCategory(
//   id: string,
//   data: Partial<FurnitureCategory>
// ): Promise<void> {
//   const payload: Record<string, unknown> = {
//     updatedAt: serverTimestamp(),
//   };
//   if (data.name !== undefined) {
//     payload.name = data.name.trim();
//     if (!data.slug) payload.slug = toSlug(data.name);
//   }
//   if (data.slug !== undefined) payload.slug = data.slug.trim();
//   if (data.description !== undefined)
//     payload.description = data.description.trim();
//   if (data.status !== undefined) payload.status = data.status;

//   await updateDoc(doc(db, COLLECTION, id), payload);
// }

// export async function deleteCategory(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }



"use client";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

import { getErpDb } from "@/core/config/firebaseClient";

export type FurnitureCategory = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  status?: "Active" | "Inactive";
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

type CategoryInput = Omit<
  FurnitureCategory,
  "id" | "createdAt" | "updatedAt"
>;

const COLLECTION = "furniture_categories";

function db() {
  return getErpDb();
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function validateName(name: string): string {
  const trimmedName = name.trim();

  if (!trimmedName) {
    throw new Error("Category name is required.");
  }

  return trimmedName;
}

/**
 * Get all furniture categories.
 */
export async function getAllCategories(): Promise<FurnitureCategory[]> {
  try {
    const categoriesRef = collection(db(), COLLECTION);

    const categoriesQuery = query(
      categoriesRef,
      orderBy("name", "asc")
    );

    const snapshot = await getDocs(categoriesQuery);

    return snapshot.docs.map((categoryDoc) => ({
      id: categoryDoc.id,
      ...categoryDoc.data(),
    })) as FurnitureCategory[];

  } catch (error) {
    console.error("[Furniture Categories] Fetch failed:", error);
    throw new Error("Unable to fetch furniture categories.");
  }
}

/**
 * Create a furniture category.
 */
export async function createCategory(
  data: CategoryInput
): Promise<string> {
  try {
    const name = validateName(data.name);

    const categoriesRef = collection(db(), COLLECTION);

    const categoryRef = await addDoc(categoriesRef, {
      name,
      slug: data.slug?.trim() || toSlug(name),
      description: data.description?.trim() || "",
      status: data.status || "Active",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return categoryRef.id;

  } catch (error) {
    console.error("[Furniture Categories] Create failed:", error);
    throw error;
  }
}

/**
 * Update an existing furniture category.
 */
export async function updateCategory(
  id: string,
  data: Partial<CategoryInput>
): Promise<void> {
  try {
    if (!id.trim()) {
      throw new Error("Category ID is required.");
    }

    const payload: Record<string, unknown> = {
      updatedAt: serverTimestamp(),
    };

    if (data.name !== undefined) {
      const name = validateName(data.name);

      payload.name = name;

      if (data.slug === undefined) {
        payload.slug = toSlug(name);
      }
    }

    if (data.slug !== undefined) {
      payload.slug = data.slug.trim();
    }

    if (data.description !== undefined) {
      payload.description = data.description.trim();
    }

    if (data.status !== undefined) {
      payload.status = data.status;
    }

    await updateDoc(
      doc(db(), COLLECTION, id),
      payload
    );

  } catch (error) {
    console.error("[Furniture Categories] Update failed:", error);
    throw error;
  }
}

/**
 * Delete a furniture category.
 */
export async function deleteCategory(id: string): Promise<void> {
  try {
    if (!id.trim()) {
      throw new Error("Category ID is required.");
    }

    await deleteDoc(
      doc(db(), COLLECTION, id)
    );

  } catch (error) {
    console.error("[Furniture Categories] Delete failed:", error);
    throw error;
  }
}
