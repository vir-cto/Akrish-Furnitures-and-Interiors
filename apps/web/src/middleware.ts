// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_EXACT = new Set([
//   "/",
//   "/login",
//   "/sign-in",
//   "/register",
//   "/forgot-password",
//   "/products",
//   "/catalog",
//   "/about",
//   "/contact",
//   "/services",
//   "/cart",
//   "/checkout",
//   "/wishlist",
// ]);

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/api",
//   "/favicon.ico",
//   "/images",
//   "/icons",
//   "/products",
//   "/services",
//   "/cart",
//   "/checkout",
//   "/about",
//   "/contact",
//   "/wishlist",
//   "/sign-in",
//   "/register",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_EXACT.has(pathname)) return true;
//   return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
// }

// // function isAuthenticated(request: NextRequest) {
// //   return Boolean(
// //     request.cookies.get("authToken")?.value ||
// //       request.cookies.get("session")?.value ||
// //       request.cookies.get("firebaseToken")?.value
// //   );
// // }


// function isAuthenticated(request: NextRequest) {
//   return Boolean(
//     request.cookies.get("erpAuthToken")?.value ||
//       request.cookies.get("authToken")?.value ||
//       request.cookies.get("session")?.value ||
//       request.cookies.get("firebaseToken")?.value
//   );
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   const customerProtected = ["/account", "/profile", "/orders"];
//   if (
//     customerProtected.some(
//       (p) => pathname === p || pathname.startsWith(`${p}/`)
//     )
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/sign-in", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   if (
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/login", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };


// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_EXACT = new Set([
//   "/",
//   "/login",
//   "/sign-in",
//   "/register",
//   "/forgot-password",
//   "/products",
//   "/catalog",
//   "/about",
//   "/contact",
//   "/services",
//   "/cart",
//   "/checkout",
//   "/wishlist",
// ]);

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/api",
//   "/favicon.ico",
//   "/images",
//   "/icons",
//   "/products",
//   "/services",
//   "/cart",
//   "/checkout",
//   "/about",
//   "/contact",
//   "/wishlist",
//   "/sign-in",
//   "/register",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_EXACT.has(pathname)) return true;
//   return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
// }

// function isAuthenticated(request: NextRequest) {
//   return Boolean(
//     request.cookies.get("erpAuthToken")?.value ||
//       request.cookies.get("authToken")?.value ||
//       request.cookies.get("session")?.value ||
//       request.cookies.get("firebaseToken")?.value
//   );
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Customer account area → website sign-in
//   const customerProtected = ["/account", "/profile", "/orders"];
//   if (
//     customerProtected.some(
//       (p) => pathname === p || pathname.startsWith(`${p}/`)
//     )
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/sign-in", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   // Staff ERP (module switcher + modules)
//   if (
//     pathname === "/erp" ||
//     pathname.startsWith("/erp/") ||
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/login", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };



// import { NextRequest, NextResponse } from "next/server";

// /** Exact paths anyone can open without a cookie */
// const PUBLIC_EXACT = new Set([
//   "/",
//   "/login",
//   "/sign-in",
//   "/register",
//   "/forgot-password",
//   "/products",
//   "/catalog",
//   "/about",
//   "/contact",
//   "/services",
//   "/cart",
//   "/checkout",
//   "/checkout/success",
//   "/checkout/result",
//   "/wishlist",
//   "/compare",
//   "/unauthorized",
// ]);

// /** Prefixes that are always public */
// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/api",
//   "/favicon.ico",
//   "/images",
//   "/icons",
//   "/fonts",
//   "/products/", // product detail pages
//   "/services",
//   "/cart",
//   "/checkout",
//   "/about",
//   "/contact",
//   "/wishlist",
//   "/compare",
//   "/sign-in",
//   "/register",
// ];

// function isPublicPath(pathname: string): boolean {
//   if (PUBLIC_EXACT.has(pathname)) return true;
//   return PUBLIC_PREFIXES.some(
//     (prefix) => pathname === prefix || pathname.startsWith(prefix)
//   );
// }

// function isAuthenticated(request: NextRequest): boolean {
//   return Boolean(
//     request.cookies.get("erpAuthToken")?.value ||
//       request.cookies.get("authToken")?.value ||
//       request.cookies.get("session")?.value ||
//       request.cookies.get("firebaseToken")?.value
//   );
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Never block static / API / public storefront routes
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Customer account area → sign-in
//   const customerProtected = ["/account", "/profile", "/orders"];
//   if (
//     customerProtected.some(
//       (p) => pathname === p || pathname.startsWith(`${p}/`)
//     )
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/sign-in", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   // Staff ERP
//   if (
//     pathname === "/erp" ||
//     pathname.startsWith("/erp/") ||
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const url = new URL("/login", request.url);
//       url.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Run on all routes except static assets that never need auth.
//      * Keeping matcher simple avoids edge/OpenNext eval issues.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$).*)",
//   ],
// };


import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
