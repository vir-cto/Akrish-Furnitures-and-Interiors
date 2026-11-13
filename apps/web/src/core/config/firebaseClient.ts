// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export const db = getFirestore(app);

// export const storage = getStorage(app);

// export default app;

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;



// import { getApp, getApps, initializeApp } from "firebase/app";
// import {
//   browserSessionPersistence,
//   initializeAuth,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHcn8jZ5uK_x7clbQAOGAs2KIYdSMseFY",
//   authDomain: "akrish-collective-erp.firebaseapp.com",
//   projectId: "akrish-collective-erp",
//   storageBucket: "akrish-collective-erp.firebasestorage.app",
//   messagingSenderId: "309709340408",
//   appId: "1:309709340408:web:f77b3c13a7738d1cb3850d",
// };

// // Use a different Firebase app name for staff authentication.
// const ERP_APP_NAME = "akrish-erp-staff";

// const erpApp =
//   getApps().find((app) => app.name === ERP_APP_NAME) ??
//   initializeApp(firebaseConfig, ERP_APP_NAME);

// // Staff authentication is isolated from the website's default Firebase app.
// // Session persistence keeps the staff login for this browser session.
// function createStaffAuth() {
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch (error) {
//     // Reuse the instance if this module has already initialized it.
//     const existingApp = getApps().find(
//       (app) => app.name === ERP_APP_NAME
//     );

//     if (!existingApp) {
//       throw error;
//     }

//     // getAuth returns the existing Auth instance without reinitializing it.
//     return getAuth(existingApp);
//   }
// }

// import { getAuth } from "firebase/auth";

// export const auth = createStaffAuth();
// export const db = getFirestore(erpApp);
// export const storage = getStorage(erpApp);
// export const firebaseApp = erpApp;


// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAHcn8jZ5uK_x7clbQAOGAs2KIYdSMseFY",
//   authDomain:
//     process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
//     "akrish-collective-erp.firebaseapp.com",
//   projectId:
//     process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "akrish-collective-erp",
//   storageBucket:
//     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
//     "akrish-collective-erp.firebasestorage.app",
//   messagingSenderId:
//     process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "309709340408",
//   appId:
//     process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
//     "1:309709340408:web:f77b3c13a7738d1cb3850d",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function getErpApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("ERP Firebase client is browser-only");
//   }
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function getErpAuth(): Auth {
//   const erpApp = getErpApp();
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// function createBrowserProxy<T extends object>(getter: () => T): T {
//   return new Proxy({} as T, {
//     get(_target, prop, receiver) {
//       const mod = getter();
//       const value = Reflect.get(mod as object, prop, receiver);
//       return typeof value === "function" ? value.bind(mod) : value;
//     },
//   });
// }

// export const firebaseApp = createBrowserProxy(() => getErpApp());
// export const auth = createBrowserProxy(() => getErpAuth()) as Auth;
// export const db = createBrowserProxy(() => getFirestore(getErpApp())) as Firestore;
// export const storage = createBrowserProxy(
//   () => getStorage(getErpApp())
// ) as FirebaseStorage;


// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey:
//     process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
//     "AIzaSyAHcn8jZ5uK_x7clbQAOGAs2KIYdSMseFY",
//   authDomain:
//     process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
//     "akrish-collective-erp.firebaseapp.com",
//   projectId:
//     process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "akrish-collective-erp",
//   storageBucket:
//     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
//     "akrish-collective-erp.firebasestorage.app",
//   messagingSenderId:
//     process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "309709340408",
//   appId:
//     process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
//     "1:309709340408:web:f77b3c13a7738d1cb3850d",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function getErpApp(): FirebaseApp {
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function getErpAuth(): Auth {
//   const erpApp = getErpApp();
//   // browserSessionPersistence only works in the browser
//   if (typeof window !== "undefined") {
//     try {
//       return initializeAuth(erpApp, {
//         persistence: browserSessionPersistence,
//       });
//     } catch {
//       return getAuth(erpApp);
//     }
//   }
//   return getAuth(erpApp);
// }

// function createLazyProxy<T extends object>(getter: () => T): T {
//   let cached: T | null = null;
//   return new Proxy({} as T, {
//     get(_target, prop, receiver) {
//       if (!cached) cached = getter();
//       const value = Reflect.get(cached as object, prop, receiver);
//       return typeof value === "function" ? value.bind(cached) : value;
//     },
//   });
// }

// export const firebaseApp = createLazyProxy(() => getErpApp());
// export const auth = createLazyProxy(() => getErpAuth()) as Auth;
// export const db = createLazyProxy(
//   () => getFirestore(getErpApp())
// ) as Firestore;
// export const storage = createLazyProxy(
//   () => getStorage(getErpApp())
// ) as FirebaseStorage;


// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey:
//     process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain:
//     process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId:
//     process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket:
//     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:
//     process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId:
//     process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// const existing = getApps().find((a) => a.name === ERP_APP_NAME);
// const erpApp = existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);

// function createStaffAuth() {
//   if (typeof window === "undefined") {
//     return getAuth(erpApp);
//   }
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// export const firebaseApp = erpApp;
// export const auth = createStaffAuth();
// export const db = getFirestore(erpApp);
// export const storage = getStorage(erpApp);


// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function getErpApp(): FirebaseApp {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
//     throw new Error(
//       "[Firebase ERP] Missing NEXT_PUBLIC_FIREBASE_* env vars. Set them in Cloudflare and rebuild."
//     );
//   }
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function getErpAuth(): Auth {
//   const erpApp = getErpApp();
//   if (typeof window === "undefined") {
//     return getAuth(erpApp);
//   }
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// function createLazyProxy<T extends object>(getter: () => T): T {
//   let cached: T | null = null;
//   return new Proxy({} as T, {
//     get(_target, prop, receiver) {
//       if (!cached) cached = getter();
//       const value = Reflect.get(cached as object, prop, receiver);
//       return typeof value === "function" ? value.bind(cached) : value;
//     },
//   });
// }

// export const firebaseApp = createLazyProxy(() => getErpApp());
// export const auth = createLazyProxy(() => getErpAuth()) as Auth;
// export const db = createLazyProxy(() => getFirestore(getErpApp())) as Firestore;
// export const storage = createLazyProxy(
//   () => getStorage(getErpApp())
// ) as FirebaseStorage;



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function getErpApp(): FirebaseApp {
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function createStaffAuth(): Auth {
//   const erpApp = getErpApp();
//   if (typeof window === "undefined") {
//     return getAuth(erpApp);
//   }
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// const erpApp = getErpApp();

// export const firebaseApp = erpApp;
// export const auth = createStaffAuth();
// export const db = getFirestore(erpApp);
// export const storage = getStorage(erpApp);



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
// };

// /** Named app so it never collides with storefront [DEFAULT] */
// const ERP_APP_NAME = "akrish-erp-staff";

// function getErpApp(): FirebaseApp {
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function createStaffAuth(): Auth {
//   const erpApp = getErpApp();
//   if (typeof window === "undefined") {
//     return getAuth(erpApp);
//   }
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// const erpApp = getErpApp();

// export const firebaseApp = erpApp;
// export const auth = createStaffAuth();
// export const db = getFirestore(erpApp);
// export const storage = getStorage(erpApp);






// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function assertConfig() {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "[Firebase ERP] Missing NEXT_PUBLIC_FIREBASE_* env vars."
//     );
//   }
// }

// function getErpApp(): FirebaseApp {
//   assertConfig();
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function createStaffAuth(erpApp: FirebaseApp): Auth {
//   // Only use browser persistence in the browser
//   if (typeof window === "undefined") {
//     return getAuth(erpApp);
//   }
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// function erpApp(): FirebaseApp {
//   if (!_app) _app = getErpApp();
//   return _app;
// }

// export const firebaseApp = new Proxy({} as FirebaseApp, {
//   get(_t, prop, receiver) {
//     const value = Reflect.get(erpApp() as object, prop, receiver);
//     return typeof value === "function" ? value.bind(erpApp()) : value;
//   },
// });

// export const auth: Auth = new Proxy({} as Auth, {
//   get(_t, prop, receiver) {
//     if (!_auth) _auth = createStaffAuth(erpApp());
//     const value = Reflect.get(_auth as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_auth) : value;
//   },
// });

// export const db: Firestore = new Proxy({} as Firestore, {
//   get(_t, prop, receiver) {
//     if (!_db) _db = getFirestore(erpApp());
//     const value = Reflect.get(_db as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_db) : value;
//   },
// });

// export const storage: FirebaseStorage = new Proxy({} as FirebaseStorage, {
//   get(_t, prop, receiver) {
//     if (!_storage) _storage = getStorage(erpApp());
//     const value = Reflect.get(_storage as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_storage) : value;
//   },
// });



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   type Auth,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function assertBrowser() {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase ERP] Browser-only. Use inside useEffect / client handlers.");
//   }
// }

// function assertConfig() {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "[Firebase ERP] Missing NEXT_PUBLIC_FIREBASE_* env vars."
//     );
//   }
// }

// function getErpApp(): FirebaseApp {
//   assertBrowser();
//   assertConfig();
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function createStaffAuth(erpApp: FirebaseApp): Auth {
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// /** ERP Firebase app — call only in the browser */
// export function getErpFirebaseApp(): FirebaseApp {
//   if (!_app) _app = getErpApp();
//   return _app;
// }

// /** Staff auth — call only in the browser */
// export function getErpAuth(): Auth {
//   if (!_auth) _auth = createStaffAuth(getErpFirebaseApp());
//   return _auth;
// }

// /** ERP Firestore — call only in the browser */
// export function getErpDb(): Firestore {
//   if (!_db) _db = getFirestore(getErpFirebaseApp());
//   return _db;
// }

// /** ERP Storage — call only in the browser */
// export function getErpStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getErpFirebaseApp());
//   return _storage;
// }

// /**
//  * Backward-compatible named exports.
//  * Prefer getErpAuth() / getErpDb() in new code.
//  * These still throw if touched during SSR (no Proxy eval path).
//  */
// export const firebaseApp = {
//   get current() {
//     return getErpFirebaseApp();
//   },
// };

// export const auth = {
//   get currentUser() {
//     if (typeof window === "undefined") return null;
//     return getErpAuth().currentUser;
//   },
//   onAuthStateChanged(
//     ...args: Parameters<Auth["onAuthStateChanged"]>
//   ): ReturnType<Auth["onAuthStateChanged"]> {
//     return getErpAuth().onAuthStateChanged(...args);
//   },
//   signInWithEmailAndPassword(
//     ...args: Parameters<Auth["signInWithEmailAndPassword"]>
//   ) {
//     return getErpAuth().signInWithEmailAndPassword(...args);
//   },
//   signOut() {
//     return getErpAuth().signOut();
//   },
// } as unknown as Auth;

// export const db = {
//   get _delegate() {
//     return getErpDb();
//   },
// } as unknown as Firestore;

// export const storage = {
//   get _delegate() {
//     return getErpStorage();
//   },
// } as unknown as FirebaseStorage;



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import {
//   getAuth,
//   initializeAuth,
//   browserSessionPersistence,
//   signInWithEmailAndPassword as fbSignIn,
//   signOut as fbSignOut,
//   onAuthStateChanged as fbOnAuthStateChanged,
//   type Auth,
//   type User,
//   type NextOrObserver,
//   type ErrorFn,
//   type CompleteFn,
//   type Unsubscribe,
// } from "firebase/auth";
// import { getFirestore, type Firestore } from "firebase/firestore";
// import { getStorage, type FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
// };

// const ERP_APP_NAME = "akrish-erp-staff";

// function assertBrowser() {
//   if (typeof window === "undefined") {
//     throw new Error(
//       "[Firebase ERP] Browser-only. Use inside useEffect / client handlers."
//     );
//   }
// }

// function assertConfig() {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "[Firebase ERP] Missing NEXT_PUBLIC_FIREBASE_* env vars."
//     );
//   }
// }

// function getErpApp(): FirebaseApp {
//   assertBrowser();
//   assertConfig();
//   const existing = getApps().find((a) => a.name === ERP_APP_NAME);
//   return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
// }

// function createStaffAuth(erpApp: FirebaseApp): Auth {
//   try {
//     return initializeAuth(erpApp, {
//       persistence: browserSessionPersistence,
//     });
//   } catch {
//     return getAuth(erpApp);
//   }
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getErpFirebaseApp(): FirebaseApp {
//   if (!_app) _app = getErpApp();
//   return _app;
// }

// export function getErpAuth(): Auth {
//   if (!_auth) _auth = createStaffAuth(getErpFirebaseApp());
//   return _auth;
// }

// export function getErpDb(): Firestore {
//   if (!_db) _db = getFirestore(getErpFirebaseApp());
//   return _db;
// }

// export function getErpStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getErpFirebaseApp());
//   return _storage;
// }

// /** Prefer these helpers in login / AuthContext */
// export async function erpSignIn(email: string, password: string) {
//   return fbSignIn(getErpAuth(), email, password);
// }

// export async function erpSignOut() {
//   return fbSignOut(getErpAuth());
// }

// export function erpOnAuthStateChanged(
//   next: NextOrObserver<User>,
//   error?: ErrorFn,
//   completed?: CompleteFn
// ): Unsubscribe {
//   return fbOnAuthStateChanged(getErpAuth(), next, error, completed);
// }

// /** Lightweight compatibility object for older call sites */
// export const auth = {
//   get currentUser(): User | null {
//     if (typeof window === "undefined") return null;
//     return getErpAuth().currentUser;
//   },
// };

// export const db = null as unknown as Firestore;
// export const storage = null as unknown as FirebaseStorage;
// export const firebaseApp = null as unknown as FirebaseApp;


import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  browserSessionPersistence,
  signInWithEmailAndPassword as fbSignIn,
  signOut as fbSignOut,
  onAuthStateChanged as fbOnAuthStateChanged,
  type Auth,
  type User,
  type NextOrObserver,
  type ErrorFn,
  type CompleteFn,
  type Unsubscribe,
} from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

const ERP_APP_NAME = "akrish-erp-staff";

function assertBrowser() {
  if (typeof window === "undefined") {
    throw new Error(
      "[Firebase ERP] Browser-only. Use inside useEffect / client handlers."
    );
  }
}

function assertConfig() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error(
      "[Firebase ERP] Missing NEXT_PUBLIC_FIREBASE_* env vars."
    );
  }
}

function getErpApp(): FirebaseApp {
  assertBrowser();
  assertConfig();
  const existing = getApps().find((a) => a.name === ERP_APP_NAME);
  return existing ?? initializeApp(firebaseConfig, ERP_APP_NAME);
}

function createStaffAuth(erpApp: FirebaseApp): Auth {
  try {
    return initializeAuth(erpApp, {
      persistence: browserSessionPersistence,
    });
  } catch {
    return getAuth(erpApp);
  }
}

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _storage: FirebaseStorage | null = null;

export function getErpFirebaseApp(): FirebaseApp {
  if (!_app) _app = getErpApp();
  return _app;
}

export function getErpAuth(): Auth {
  if (!_auth) _auth = createStaffAuth(getErpFirebaseApp());
  return _auth;
}

export function getErpDb(): Firestore {
  if (!_db) _db = getFirestore(getErpFirebaseApp());
  return _db;
}

export function getErpStorage(): FirebaseStorage {
  if (!_storage) _storage = getStorage(getErpFirebaseApp());
  return _storage;
}

/** Aliases used by some modules */
export const getClientDb = getErpDb;
export const getClientAuth = getErpAuth;
export const getClientStorage = getErpStorage;
export const getClientApp = getErpFirebaseApp;

export async function erpSignIn(email: string, password: string) {
  return fbSignIn(getErpAuth(), email, password);
}

export async function erpSignOut() {
  return fbSignOut(getErpAuth());
}

export function erpOnAuthStateChanged(
  next: NextOrObserver<User>,
  error?: ErrorFn,
  completed?: CompleteFn
): Unsubscribe {
  return fbOnAuthStateChanged(getErpAuth(), next, error, completed);
}

/** Auth compatibility (safe getters) */
export const auth = {
  get currentUser(): User | null {
    if (typeof window === "undefined") return null;
    try {
      return getErpAuth().currentUser;
    } catch {
      return null;
    }
  },
};

/**
 * Do NOT export null as Firestore.
 * Old code that imported { db } must switch to getErpDb().
 * These throw if misused so bugs are obvious.
 */
export function db(): Firestore {
  return getErpDb();
}

export function storage(): FirebaseStorage {
  return getErpStorage();
}
