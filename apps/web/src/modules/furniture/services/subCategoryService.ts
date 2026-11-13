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
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// // export type FurnitureSubCategory = {
// //   id: string;
// //   categoryId: string;
// //   categoryName?: string;
// //   name: string;
// //   slug?: string;
// //   description?: string;
// //   status?: "Active" | "Inactive";
// //   sortOrder?: number;
// //   createdAt?: Timestamp | null;
// //   updatedAt?: Timestamp | null;
// // };

// export type FurnitureSubCategory = {
//   id: string;
//   categoryId: string;
//   categoryName?: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   status?: "Active" | "Inactive";
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_sub_categories";

// function toSlug(name: string): string {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export async function getAllSubCategories(): Promise<FurnitureSubCategory[]> {
//   const snap = await getDocs(
//     // query(collection(db, COLLECTION), orderBy("sortOrder", "asc"))
//     query(collection(db, COLLECTION), orderBy("name", "asc"))
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureSubCategory
//   );
// }

// export async function getSubCategoriesByCategory(
//   categoryId: string
// ): Promise<FurnitureSubCategory[]> {
//   const snap = await getDocs(
//     // query(
//     //   collection(db, COLLECTION),
//     //   where("categoryId", "==", categoryId),
//     //   orderBy("sortOrder", "asc")
//     // )
//     query(
//         collection(db, COLLECTION),
//         where("categoryId", "==", categoryId),
//         orderBy("name", "asc")
//     )
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureSubCategory
//   );
// }

// export async function createSubCategory(
//   data: Omit<FurnitureSubCategory, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const name = data.name.trim();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     categoryId: data.categoryId,
//     categoryName: data.categoryName?.trim() || "",
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

// export async function updateSubCategory(
//   id: string,
//   data: Partial<FurnitureSubCategory>
// ): Promise<void> {
//   const payload: Record<string, unknown> = {
//     updatedAt: serverTimestamp(),
//   };
//   if (data.categoryId !== undefined) payload.categoryId = data.categoryId;
//   if (data.categoryName !== undefined)
//     payload.categoryName = data.categoryName.trim();
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

// export async function deleteSubCategory(id: string): Promise<void> {
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
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureSubCategory = {
//   id: string;
//   categoryId: string;
//   categoryName?: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   status?: "Active" | "Inactive";
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_sub_categories";

// function toSlug(name: string): string {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export async function getAllSubCategories(): Promise<FurnitureSubCategory[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("name", "asc"))
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureSubCategory
//   );
// }

// export async function getSubCategoriesByCategory(
//   categoryId: string
// ): Promise<FurnitureSubCategory[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("categoryId", "==", categoryId),
//       orderBy("name", "asc")
//     )
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() }) as FurnitureSubCategory
//   );
// }

// export async function createSubCategory(
//   data: Omit<FurnitureSubCategory, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const name = data.name.trim();
//   const ref = await addDoc(collection(db, COLLECTION), {
//     categoryId: data.categoryId,
//     categoryName: data.categoryName?.trim() || "",
//     name,
//     slug: data.slug?.trim() || toSlug(name),
//     description: data.description?.trim() || "",
//     status: data.status || "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateSubCategory(
//   id: string,
//   data: Partial<FurnitureSubCategory>
// ): Promise<void> {
//   const payload: Record<string, unknown> = {
//     updatedAt: serverTimestamp(),
//   };
//   if (data.categoryId !== undefined) payload.categoryId = data.categoryId;
//   if (data.categoryName !== undefined)
//     payload.categoryName = data.categoryName.trim();
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

// export async function deleteSubCategory(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }



import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";

import { getErpDb } from "@/core/config/firebaseClient";

// =========================================================
// COLLECTION
// =========================================================

const COLLECTION = "furniture_sub_categories";

// =========================================================
// FIRESTORE DATABASE
// =========================================================

function db() {
  return getErpDb();
}

// =========================================================
// TYPES
// =========================================================

export type FurnitureSubCategory = {
  id: string;
  categoryId: string;
  categoryName?: string;
  name: string;
  slug?: string;
  description?: string;
  status?: "Active" | "Inactive";
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

export type SubCategoryInput = Omit<
  FurnitureSubCategory,
  "id" | "createdAt" | "updatedAt"
>;

export type SubCategoryUpdate = Partial<SubCategoryInput>;

// =========================================================
// HELPER FUNCTIONS
// =========================================================

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// =========================================================
// GET ALL SUBCATEGORIES
// =========================================================

export async function getAllSubCategories(): Promise<FurnitureSubCategory[]> {
  const snap = await getDocs(
    query(
      collection(db(), COLLECTION),
      orderBy("name", "asc")
    )
  );

  return snap.docs.map((d) => ({
    ...d.data(),
    id: d.id,
  })) as FurnitureSubCategory[];
}

// =========================================================
// GET SUBCATEGORIES BY CATEGORY
// =========================================================

export async function getSubCategoriesByCategory(
  categoryId: string
): Promise<FurnitureSubCategory[]> {
  if (!categoryId.trim()) {
    return [];
  }

  const snap = await getDocs(
    query(
      collection(db(), COLLECTION),
      where("categoryId", "==", categoryId),
      orderBy("name", "asc")
    )
  );

  return snap.docs.map((d) => ({
    ...d.data(),
    id: d.id,
  })) as FurnitureSubCategory[];
}

// =========================================================
// CREATE SUBCATEGORY
// =========================================================

export async function createSubCategory(
  data: SubCategoryInput
): Promise<string> {
  const name = data.name.trim();

  if (!name) {
    throw new Error("Subcategory name is required.");
  }

  if (!data.categoryId?.trim()) {
    throw new Error("Category is required.");
  }

  const ref = await addDoc(collection(db(), COLLECTION), {
    categoryId: data.categoryId.trim(),
    categoryName: data.categoryName?.trim() || "",
    name,
    slug: data.slug?.trim() || toSlug(name),
    description: data.description?.trim() || "",
    status: data.status || "Active",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}

// =========================================================
// UPDATE SUBCATEGORY
// =========================================================

export async function updateSubCategory(
  id: string,
  data: SubCategoryUpdate
): Promise<void> {
  if (!id.trim()) {
    throw new Error("Subcategory ID is required.");
  }

  const payload: Record<string, unknown> = {
    updatedAt: serverTimestamp(),
  };

  if (data.categoryId !== undefined) {
    payload.categoryId = data.categoryId.trim();
  }

  if (data.categoryName !== undefined) {
    payload.categoryName = data.categoryName.trim();
  }

  if (data.name !== undefined) {
    const name = data.name.trim();

    if (!name) {
      throw new Error("Subcategory name cannot be empty.");
    }

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
}

// =========================================================
// DELETE SUBCATEGORY
// =========================================================

export async function deleteSubCategory(id: string): Promise<void> {
  if (!id.trim()) {
    throw new Error("Subcategory ID is required.");
  }

  await deleteDoc(
    doc(db(), COLLECTION, id)
  );
}
