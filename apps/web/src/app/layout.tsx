// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "VIP Interior ERP",
//   description:
//     "Collective ERP for VIP Interior - Interior and Furniture Management",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-800 antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import { AuthProvider } from "@/core/auth/AuthContext";

// export const metadata: Metadata = {
//   title: "Akrish Collective ERP",
//   description:
//     "Collective ERP for Akrish Furniture and Interior - Interior and Furniture Management",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-800 antialiased">
//         <AuthProvider>
//           {children}
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata, Viewport } from "next";
// import "./globals.css";
// import { AuthProvider } from "@/core/auth/AuthContext";

// export const metadata: Metadata = {
//   title: "Akrish Collective ERP",
//   description:
//     "Collective ERP for Akrish Furniture and Interior - Interior and Furniture Management",
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
//   viewportFit: "cover",
//   themeColor: "#176b57",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800 antialiased">
//         <AuthProvider>{children}</AuthProvider>
//       </body>
//     </html>
//   );
// }


// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen antialiased">{children}</body>
//     </html>
//   );
// }

// import "./globals.css";
// import { Providers } from "./providers";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen antialiased">
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import { DM_Sans, Cormorant_Garamond } from "next/font/google";
// import "./globals.css";
// import { Providers } from "./providers";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   variable: "--font-cormorant",
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// export const metadata: Metadata = {
//   title: "Akrish Furniture & Interior",
//   description: "Furniture and interior solutions",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${dmSans.variable} ${cormorant.variable}`}
//     >
//       <body className="min-h-screen font-sans antialiased">
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = localFont({
  src: [
    {
      path: "../../public/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akrish Furniture & Interior",
  description: "Furniture and interior solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
