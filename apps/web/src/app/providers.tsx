// "use client";

// import { AuthProvider } from "@/core/auth/AuthContext";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <AuthProvider>{children}</AuthProvider>;
// }


// "use client";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }


// "use client";

// import { AuthProvider } from "@/context/AuthContext";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <AuthProvider>{children}</AuthProvider>;
// }


"use client";

import { AuthProvider } from "@/core/auth/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
