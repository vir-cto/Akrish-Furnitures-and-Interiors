// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(p + "/")
//   );

//   if (isAuth) {
//     return <main className="min-h-screen">{children}</main>;
//   }

//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(p + "/")
//   );

//   return (
//     <>
//       <Header />
//       <main className={isAuth ? "min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-5rem)]" : undefined}>
//         {children}
//       </main>
//       {!isAuth && <Footer />}
//     </>
//   );
// }


// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(p + "/")
//   );

//   return (
//     <>
//       <Header />
//       <main
//         className={
//           isAuth
//             ? "min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-5rem)]"
//             : undefined
//         }
//       >
//         {children}
//       </main>
//       {!isAuth && <Footer />}
//     </>
//   );
// }


// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password", "/login"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(`${p}/`)
//   );

//   // Auth pages render their own full-viewport UI (no site header / footer)
//   if (isAuth) {
//     return <>{children}</>;
//   }

//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }



// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(`${p}/`)
//   );

//   return (
//     <>
//       {/* Always show website header (Home, Shop, Staff, etc.) */}
//       <Header />
//       <main
//         className={
//           isAuth
//             ? "min-h-[calc(100dvh-4rem)] overflow-hidden"
//             : undefined
//         }
//       >
//         {children}
//       </main>
//       {/* Hide footer only on auth screens */}
//       {!isAuth && <Footer />}
//     </>
//   );
// }



"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Customer auth: header yes, footer no */
const CUSTOMER_AUTH = ["/sign-in", "/register", "/forgot-password"];

/** ERP staff login: no header, no footer */
const ERP_ONLY = ["/login"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  const isErpOnly = ERP_ONLY.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const isCustomerAuth = CUSTOMER_AUTH.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  if (isErpOnly) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main
        className={
          isCustomerAuth
            ? "min-h-[calc(100dvh-4rem)] overflow-hidden"
            : undefined
        }
      >
        {children}
      </main>
      {!isCustomerAuth && <Footer />}
    </>
  );
}
