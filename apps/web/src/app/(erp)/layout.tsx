// "use client";

// import ERPLayout from "@/core/components/ShellLayout";

// export default function ErpRouteLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <ERPLayout>{children}</ERPLayout>;
// }


// "use client";

// import ERPLayout from "@/core/components/ShellLayout";

// export default function ErpRouteLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <ERPLayout>{children}</ERPLayout>;
// }



// "use client";

// import ERPLayout from "@/core/components/ShellLayout";

// export default function ErpRouteLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <ERPLayout>{children}</ERPLayout>;
// }


"use client";

import { usePathname } from "next/navigation";
import ERPLayout from "@/core/components/ShellLayout";

export default function ErpRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Module switcher: no sidebar / top header
  if (pathname === "/erp" || pathname === "/erp/") {
    return <>{children}</>;
  }

  return <ERPLayout>{children}</ERPLayout>;
}
