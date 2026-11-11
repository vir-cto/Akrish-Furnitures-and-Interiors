// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
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

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";


// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // Fail fast in development if env is missing
// if (
//   process.env.NODE_ENV === "development" &&
//   (!firebaseConfig.apiKey || !firebaseConfig.projectId)
// ) {
//   console.error(
//     "[Firebase] Missing NEXT_PUBLIC_FIREBASE_* env vars. Check apps/website/.env.local"
//   );
// }

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);

// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   const existing = getApps();
//   if (existing.length > 0) {
//     return existing[0] as FirebaseApp;
//   }

//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "Missing NEXT_PUBLIC_FIREBASE_* in apps/web/.env.local — restart npm run dev after fixing."
//     );
//   }

//   return initializeApp(firebaseConfig);
// }

// export const app = getFirebaseApp();
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export default app;




// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("Firebase client SDK is browser-only");
//   }
//   return getApps().length ? getApp() : initializeApp(firebaseConfig);
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

// /** Use only from client components / browser event handlers */
// export const app = createBrowserProxy(() => getFirebaseApp());
// export const auth = createBrowserProxy(() => getAuth(getFirebaseApp())) as Auth;
// export const db = createBrowserProxy(() => getFirestore(getFirebaseApp())) as Firestore;
// export const storage = createBrowserProxy(
//   () => getStorage(getFirebaseApp())
// ) as FirebaseStorage;



// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (getApps().length > 0) return getApp();
//   return initializeApp(firebaseConfig);
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

// export const app = createLazyProxy(() => getFirebaseApp());
// export const auth = createLazyProxy(() => getAuth(getFirebaseApp())) as Auth;
// export const db = createLazyProxy(
//   () => getFirestore(getFirebaseApp())
// ) as Firestore;
// export const storage = createLazyProxy(
//   () => getStorage(getFirebaseApp())
// ) as FirebaseStorage;

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

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

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export { app };



// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
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

// function getDefaultApp() {
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig); // creates [DEFAULT]
// }

// const app = getDefaultApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export { app };


// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function assertConfig() {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
//     throw new Error(
//       "[Firebase] Missing NEXT_PUBLIC_FIREBASE_* env vars. Set them in Cloudflare and rebuild."
//     );
//   }
// }

// function getFirebaseApp(): FirebaseApp {
//   assertConfig();
//   if (getApps().length > 0) return getApp();
//   return initializeApp(firebaseConfig);
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

// export const app = createLazyProxy(() => getFirebaseApp());
// export const auth = createLazyProxy(() => getAuth(getFirebaseApp())) as Auth;
// export const db = createLazyProxy(() => getFirestore(getFirebaseApp())) as Firestore;
// export const storage = createLazyProxy(
//   () => getStorage(getFirebaseApp())
// ) as FirebaseStorage;



// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (getApps().length > 0) return getApp();
//   return initializeApp(firebaseConfig);
// }

// const app = getFirebaseApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export { app };



// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
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

// /**
//  * Always use the [DEFAULT] app for the storefront.
//  * Do NOT call getApp() just because another named app (ERP) already exists.
//  */
// function getFirebaseApp(): FirebaseApp {
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig); // creates [DEFAULT]
// }

// const app = getFirebaseApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export { app };



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function assertConfig() {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "[Firebase] Missing NEXT_PUBLIC_FIREBASE_* env vars. " +
//         "Set them in Cloudflare (Build + Runtime) and redeploy."
//     );
//   }
// }

// /**
//  * Storefront always uses the [DEFAULT] Firebase app.
//  * Do not call getApp() just because the ERP named app already exists.
//  */
// function getFirebaseApp(): FirebaseApp {
//   assertConfig();
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// function app(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// /** Lazy proxies — safe at module load on Cloudflare Workers */
// export const auth: Auth = new Proxy({} as Auth, {
//   get(_target, prop, receiver) {
//     if (!_auth) _auth = getAuth(app());
//     const value = Reflect.get(_auth as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_auth) : value;
//   },
// });

// export const db: Firestore = new Proxy({} as Firestore, {
//   get(_target, prop, receiver) {
//     if (!_db) _db = getFirestore(app());
//     const value = Reflect.get(_db as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_db) : value;
//   },
// });

// export const storage: FirebaseStorage = new Proxy({} as FirebaseStorage, {
//   get(_target, prop, receiver) {
//     if (!_storage) _storage = getStorage(app());
//     const value = Reflect.get(_storage as object, prop, receiver);
//     return typeof value === "function" ? value.bind(_storage) : value;
//   },
// });

// export { app as getAppInstance };




// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// /** Call only in browser (useEffect / event handlers). */
// export function getClientApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("Firebase app is browser-only");
//   }
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }

// /** @deprecated Prefer getClientAuth / getClientDb in browser-only code */
// export const auth = {
//   get currentUser() {
//     if (typeof window === "undefined") return null;
//     return getClientAuth().currentUser;
//   },
// };

// export const db = null as unknown as Firestore;
// export const storage = null as unknown as FirebaseStorage;


// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function assertBrowser() {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase] Browser-only");
//   }
// }

// function getFirebaseApp(): FirebaseApp {
//   assertBrowser();
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getClientApp(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase] Browser-only. Do not call during SSR.");
//   }
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getClientApp(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }

// /**
//  * Lazy proxies so existing code can still:
//  *   import { auth, db } from "@/lib/firebase"
//  * Only initializes when a property is accessed in the browser.
//  */
// export const auth: Auth = new Proxy({} as Auth, {
//   get(_target, prop, receiver) {
//     const instance = getClientAuth();
//     const value = Reflect.get(instance as object, prop, receiver);
//     return typeof value === "function" ? value.bind(instance) : value;
//   },
// });

// export const db: Firestore = new Proxy({} as Firestore, {
//   get(_target, prop, receiver) {
//     const instance = getClientDb();
//     const value = Reflect.get(instance as object, prop, receiver);
//     return typeof value === "function" ? value.bind(instance) : value;
//   },
// });

// export const storage: FirebaseStorage = new Proxy({} as FirebaseStorage, {
//   get(_target, prop, receiver) {
//     const instance = getClientStorage();
//     const value = Reflect.get(instance as object, prop, receiver);
//     return typeof value === "function" ? value.bind(instance) : value;
//   },
// });



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase] Browser-only");
//   }
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getClientApp(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }



// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase] Browser-only");
//   }
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getClientApp(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }


// import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function getFirebaseApp(): FirebaseApp {
//   if (typeof window === "undefined") {
//     throw new Error("[Firebase] Client SDK is browser-only.");
//   }
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     throw new Error(
//       "[Firebase] Missing NEXT_PUBLIC_FIREBASE_* env vars. Check apps/web/.env.local and restart the dev server."
//     );
//   }
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;
//   return initializeApp(firebaseConfig);
// }

// let _app: FirebaseApp | null = null;
// let _auth: Auth | null = null;
// let _db: Firestore | null = null;
// let _storage: FirebaseStorage | null = null;

// export function getClientApp(): FirebaseApp {
//   if (!_app) _app = getFirebaseApp();
//   return _app;
// }

// export function getClientAuth(): Auth {
//   if (!_auth) _auth = getAuth(getClientApp());
//   return _auth;
// }

// export function getClientDb(): Firestore {
//   if (!_db) _db = getFirestore(getClientApp());
//   return _db;
// }

// export function getClientStorage(): FirebaseStorage {
//   if (!_storage) _storage = getStorage(getClientApp());
//   return _storage;
// }

// /** Lazy proxies so `import { auth, db } from "@/lib/firebase"` works. */
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

// export const app = createLazyProxy(() => getClientApp());
// export const auth = createLazyProxy(() => getClientAuth()) as Auth;
// export const db = createLazyProxy(() => getClientDb()) as Firestore;
// export const storage = createLazyProxy(() => getClientStorage()) as FirebaseStorage;



// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth";
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

// function createApp(): FirebaseApp {
//   if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
//     console.error(
//       "[Firebase] Missing NEXT_PUBLIC_FIREBASE_* env vars. Check apps/web/.env.local and restart the dev server."
//     );
//   }

//   // Always use the default app (storefront + shared client)
//   const existing = getApps().find((a) => a.name === "[DEFAULT]");
//   if (existing) return existing;

//   if (getApps().length > 0) {
//     try {
//       return getApp();
//     } catch {
//       /* fall through */
//     }
//   }

//   return initializeApp(firebaseConfig);
// }

// const app = createApp();

// export const auth: Auth = getAuth(app);
// export const db: Firestore = getFirestore(app);
// export const storage: FirebaseStorage = getStorage(app);

// export { app };

// /** Aliases for code that prefers getters */
// export function getClientApp(): FirebaseApp {
//   return app;
// }
// export function getClientAuth(): Auth {
//   return auth;
// }
// export function getClientDb(): Firestore {
//   return db;
// }
// export function getClientStorage(): FirebaseStorage {
//   return storage;
// }



"use client";

import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";

import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

function createApp(): FirebaseApp {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error(
      "[Firebase] Missing Firebase configuration. Check Cloudflare build variables."
    );
  }

  const existing = getApps().find((a) => a.name === "[DEFAULT]");

  if (existing) {
    return existing;
  }

  return initializeApp(firebaseConfig);
}

const app = createApp();

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

export { app };

export function getClientApp(): FirebaseApp {
  return app;
}

export function getClientAuth(): Auth {
  return auth;
}

export function getClientDb(): Firestore {
  return db;
}

export function getClientStorage(): FirebaseStorage {
  return storage;
}
