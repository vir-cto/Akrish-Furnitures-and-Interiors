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


import { NextRequest, NextResponse } from "next/server";

const PUBLIC_EXACT = new Set([
  "/",
  "/login",
  "/sign-in",
  "/register",
  "/forgot-password",
  "/products",
  "/catalog",
  "/about",
  "/contact",
  "/services",
  "/cart",
  "/checkout",
  "/wishlist",
]);

const PUBLIC_PREFIXES = [
  "/_next",
  "/api",
  "/favicon.ico",
  "/images",
  "/icons",
  "/products",
  "/services",
  "/cart",
  "/checkout",
  "/about",
  "/contact",
  "/wishlist",
  "/sign-in",
  "/register",
];

function isPublicPath(pathname: string) {
  if (PUBLIC_EXACT.has(pathname)) return true;
  return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
}

function isAuthenticated(request: NextRequest) {
  return Boolean(
    request.cookies.get("erpAuthToken")?.value ||
      request.cookies.get("authToken")?.value ||
      request.cookies.get("session")?.value ||
      request.cookies.get("firebaseToken")?.value
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Customer account area → website sign-in
  const customerProtected = ["/account", "/profile", "/orders"];
  if (
    customerProtected.some(
      (p) => pathname === p || pathname.startsWith(`${p}/`)
    )
  ) {
    if (!isAuthenticated(request)) {
      const url = new URL("/sign-in", request.url);
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Staff ERP (module switcher + modules)
  if (
    pathname === "/erp" ||
    pathname.startsWith("/erp/") ||
    pathname.startsWith("/interior") ||
    pathname.startsWith("/furniture") ||
    pathname.startsWith("/admin")
  ) {
    if (!isAuthenticated(request)) {
      const url = new URL("/login", request.url);
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
