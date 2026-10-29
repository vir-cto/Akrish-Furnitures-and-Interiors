// "use client";

// import Link from "next/link";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-[#e4e2da] bg-[#17352f] text-white">
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//                 <span className="text-lg font-bold text-white">A</span>
//               </div>
//               <div>
//                 <div className="text-xl font-bold leading-none">Akrish</div>
//                 <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                   Furniture & Interior
//                 </div>
//               </div>
//             </div>

//             <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
//               Thoughtfully designed furniture and complete interior solutions
//               for modern homes and workspaces.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               <li>
//                 <Link href="/" className="transition hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="transition hover:text-white">
//                   Furniture
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="transition hover:text-white">
//                   Interior Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="transition hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="transition hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Categories
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               <li>
//                 <Link
//                   href="/products?category=Living%20Room"
//                   className="transition hover:text-white"
//                 >
//                   Living Room
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products?category=Dining%20Room"
//                   className="transition hover:text-white"
//                 >
//                   Dining Room
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products?category=Bedroom"
//                   className="transition hover:text-white"
//                 >
//                   Bedroom
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products?category=Office"
//                   className="transition hover:text-white"
//                 >
//                   Office
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="transition hover:text-white">
//                   View All
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Contact Us
//             </h3>
//             <ul className="mt-5 space-y-4 text-sm text-white/70">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-[#9a5b18]" />
//                 <span>
//                   Guntur, Andhra Pradesh
//                   <br />
//                   India
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a href="tel:+919876543210" className="transition hover:text-white">
//                   +91 98765 43210
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a
//                   href="mailto:hello@akrish.in"
//                   className="transition hover:text-white"
//                 >
//                   hello@akrish.in
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
//           <p>© {currentYear} Akrish Furniture & Interior. All rights reserved.</p>

//           <div className="flex items-center gap-6">
//             <Link href="/privacy" className="transition hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="transition hover:text-white">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface CategoryItem {
//   title: string;
//   href: string;
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );
//         const snapshot = await getDocs(q);

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((doc) => {
//           const category = doc.data().category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         const list: CategoryItem[] = Array.from(categorySet)
//           .sort()
//           .map((cat) => ({
//             title: cat,
//             href: `/products?category=${encodeURIComponent(cat)}`,
//           }));

//         setCategories(list);
//       } catch (err) {
//         console.error("Failed to load footer categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Show only first 4 categories
//   const visibleCategories = categories.slice(0, 4);
//   const hasMore = categories.length > 4;

//   return (
//     <footer className="border-t border-[#e4e2da] bg-[#17352f] text-white">
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//                 <span className="text-lg font-bold text-white">A</span>
//               </div>
//               <div>
//                 <div className="text-xl font-bold leading-none">Akrish</div>
//                 <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                   Furniture & Interior
//                 </div>
//               </div>
//             </div>

//             <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
//               Thoughtfully designed furniture and complete interior solutions
//               for modern homes and workspaces.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               <li>
//                 <Link href="/" className="transition hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="transition hover:text-white">
//                   Furniture
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link href="/services" className="transition hover:text-white">
//                   Interior Services
//                 </Link>
//               </li> */}
//               <li>
//                 <Link href="/about" className="transition hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="transition hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories - Dynamic from Firebase */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Categories
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               {loading ? (
//                 <li className="text-white/40">Loading...</li>
//               ) : visibleCategories.length > 0 ? (
//                 <>
//                   {visibleCategories.map((cat) => (
//                     <li key={cat.title}>
//                       <Link
//                         href={cat.href}
//                         className="transition hover:text-white"
//                       >
//                         {cat.title}
//                       </Link>
//                     </li>
//                   ))}
//                   {hasMore && (
//                     <li>
//                       <Link
//                         href="/products"
//                         className="font-medium text-[#9a5b18] transition hover:text-white"
//                       >
//                         View All →
//                       </Link>
//                     </li>
//                   )}
//                 </>
//               ) : (
//                 <li>
//                   <Link
//                     href="/products"
//                     className="transition hover:text-white"
//                   >
//                     View All Products
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Contact Us
//             </h3>
//             <ul className="mt-5 space-y-4 text-sm text-white/70">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-[#9a5b18]" />
//                 <span>
//                   Guntur, Andhra Pradesh
//                   <br />
//                   India
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a
//                   href="tel:+919876543210"
//                   className="transition hover:text-white"
//                 >
//                   +91 98765 43210
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a
//                   href="mailto:hello@akrish.in"
//                   className="transition hover:text-white"
//                 >
//                   hello@akrish.in
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
//           <p>
//             © {currentYear} Akrish Furniture & Interior. All rights reserved.
//           </p>

//           <div className="flex items-center gap-6">
//             <Link href="/privacy" className="transition hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="transition hover:text-white">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface CategoryItem {
//   title: string;
//   href: string;
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         const list: CategoryItem[] = Array.from(categorySet)
//           .sort()
//           .map((cat) => ({
//             title: cat,
//             href: `/products?category=${encodeURIComponent(cat)}`,
//           }));

//         setCategories(list);
//       } catch (err) {
//         console.error("Failed to load footer categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const visibleCategories = categories.slice(0, 4);
//   const hasMore = categories.length > 4;

//   return (
//     <footer className="border-t border-[#e4e2da] bg-[#17352f] text-white">
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//                 <span className="text-lg font-bold text-white">A</span>
//               </div>
//               <div>
//                 <div className="text-xl font-bold leading-none">Akrish</div>
//                 <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                   Furniture & Interior
//                 </div>
//               </div>
//             </div>

//             <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
//               Thoughtfully designed furniture and complete interior solutions
//               for modern homes and workspaces.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               <li>
//                 <Link href="/" className="transition hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="transition hover:text-white">
//                   Furniture
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="transition hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="transition hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories from Firebase */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Categories
//             </h3>
//             <ul className="mt-5 space-y-3 text-sm text-white/70">
//               {loading ? (
//                 <li className="text-white/40">Loading...</li>
//               ) : visibleCategories.length > 0 ? (
//                 <>
//                   {visibleCategories.map((cat) => (
//                     <li key={cat.title}>
//                       <Link
//                         href={cat.href}
//                         className="transition hover:text-white"
//                       >
//                         {cat.title}
//                       </Link>
//                     </li>
//                   ))}
//                   {hasMore && (
//                     <li>
//                       <Link
//                         href="/products"
//                         className="font-medium text-[#9a5b18] transition hover:text-white"
//                       >
//                         View All →
//                       </Link>
//                     </li>
//                   )}
//                 </>
//               ) : (
//                 <li>
//                   <Link
//                     href="/products"
//                     className="transition hover:text-white"
//                   >
//                     View All Products
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Contact Us
//             </h3>
//             <ul className="mt-5 space-y-4 text-sm text-white/70">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-[#9a5b18]" />
//                 <span>
//                   Guntur, Andhra Pradesh
//                   <br />
//                   India
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a
//                   href="tel:+919876543210"
//                   className="transition hover:text-white"
//                 >
//                   +91 98765 43210
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="shrink-0 text-[#9a5b18]" />
//                 <a
//                   href="mailto:hello@akrish.in"
//                   className="transition hover:text-white"
//                 >
//                   hello@akrish.in
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
//           <p>
//             © {currentYear} Akrish Furniture & Interior. All rights reserved.
//           </p>

//           <div className="flex items-center gap-6">
//             <Link href="/privacy" className="transition hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="transition hover:text-white">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface CategoryItem {
//   title: string;
//   href: string;
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [categories, setCategories] = useState<CategoryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         const list: CategoryItem[] = Array.from(categorySet)
//           .sort()
//           .map((cat) => ({
//             title: cat,
//             href: `/products?category=${encodeURIComponent(cat)}`,
//           }));

//         setCategories(list);
//       } catch (err) {
//         console.error("Failed to load footer categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const visibleCategories = categories.slice(0, 4);
//   const hasMore = categories.length > 4;

//   return (
//     <footer className="border-t border-[#e4e2da] bg-[#17352f] text-white">
//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         {/* Mobile: 2 columns · Desktop: 4 columns */}
//         <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
//           {/* Brand — full width on mobile so it sits above the 2×2 grid */}
//           <div className="col-span-2 lg:col-span-1">
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
//                 <span className="text-base font-bold text-white sm:text-lg">
//                   A
//                 </span>
//               </div>
//               <div>
//                 <div className="text-lg font-bold leading-none sm:text-xl">
//                   Akrish
//                 </div>
//                 <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px] sm:tracking-[0.18em]">
//                   Furniture & Interior
//                 </div>
//               </div>
//             </div>

//             <p className="mt-4 max-w-xs text-xs leading-5 text-white/70 sm:mt-5 sm:text-sm sm:leading-6">
//               Thoughtfully designed furniture and complete interior solutions
//               for modern homes and workspaces.
//             </p>

//             <div className="mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#176b5b]"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
//               Quick Links
//             </h3>
//             <ul className="mt-4 space-y-2.5 text-xs text-white/70 sm:mt-5 sm:space-y-3 sm:text-sm">
//               <li>
//                 <Link href="/" className="transition hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="transition hover:text-white">
//                   Furniture
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="transition hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="transition hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
//               Categories
//             </h3>
//             <ul className="mt-4 space-y-2.5 text-xs text-white/70 sm:mt-5 sm:space-y-3 sm:text-sm">
//               {loading ? (
//                 <li className="text-white/40">Loading...</li>
//               ) : visibleCategories.length > 0 ? (
//                 <>
//                   {visibleCategories.map((cat) => (
//                     <li key={cat.title}>
//                       <Link
//                         href={cat.href}
//                         className="transition hover:text-white"
//                       >
//                         {cat.title}
//                       </Link>
//                     </li>
//                   ))}
//                   {hasMore && (
//                     <li>
//                       <Link
//                         href="/products"
//                         className="font-medium text-[#9a5b18] transition hover:text-white"
//                       >
//                         View All →
//                       </Link>
//                     </li>
//                   )}
//                 </>
//               ) : (
//                 <li>
//                   <Link
//                     href="/products"
//                     className="transition hover:text-white"
//                   >
//                     View All Products
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Contact — full width under the 2-col pair on mobile for readability */}
//           <div className="col-span-2 sm:col-span-1 lg:col-span-1">
//             <h3 className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
//               Contact Us
//             </h3>
//             <ul className="mt-4 space-y-3 text-xs text-white/70 sm:mt-5 sm:space-y-4 sm:text-sm">
//               <li className="flex items-start gap-2.5 sm:gap-3">
//                 <MapPin
//                   size={15}
//                   className="mt-0.5 shrink-0 text-[#9a5b18] sm:h-4 sm:w-4"
//                 />
//                 <span>
//                   Guntur, Andhra Pradesh
//                   <br />
//                   India
//                 </span>
//               </li>
//               <li className="flex items-center gap-2.5 sm:gap-3">
//                 <Phone
//                   size={15}
//                   className="shrink-0 text-[#9a5b18] sm:h-4 sm:w-4"
//                 />
//                 <a
//                   href="tel:+919876543210"
//                   className="transition hover:text-white"
//                 >
//                   +91 98765 43210
//                 </a>
//               </li>
//               <li className="flex items-center gap-2.5 sm:gap-3">
//                 <Mail
//                   size={15}
//                   className="shrink-0 text-[#9a5b18] sm:h-4 sm:w-4"
//                 />
//                 <a
//                   href="mailto:hello@akrish.in"
//                   className="transition hover:text-white"
//                 >
//                   hello@akrish.in
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8 sm:text-sm">
//           <p className="text-center sm:text-left">
//             © {currentYear} Akrish Furniture & Interior. All rights reserved.
//           </p>

//           <div className="flex items-center gap-5 sm:gap-6">
//             <Link href="/privacy" className="transition hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="transition hover:text-white">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface CategoryItem {
//   title: string;
//   href: string;
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [categories, setCategories] = useState<CategoryItem[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const categorySet = new Set<string>();

//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;
//           const category = data.category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         setCategories(
//           Array.from(categorySet)
//             .sort()
//             .slice(0, 5)
//             .map((cat) => ({
//               title: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             }))
//         );
//       } catch (err) {
//         console.error("Failed to load footer categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <footer className="bg-[#17352f] text-white">
//       <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         {/* Brand + social */}
//         <div className="flex items-center justify-between gap-4">
//           <Link href="/" className="flex items-center gap-2.5">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-base font-bold">A</span>
//             </div>
//             <div>
//               <p className="text-base font-bold leading-none">Akrish</p>
//               <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18]">
//                 Furniture
//               </p>
//             </div>
//           </Link>

//           <div className="flex items-center gap-1.5">
//             {[
//               { icon: Facebook, label: "Facebook" },
//               { icon: Instagram, label: "Instagram" },
//               { icon: Twitter, label: "Twitter" },
//               { icon: Linkedin, label: "LinkedIn" },
//             ].map(({ icon: Icon, label }) => (
//               <a
//                 key={label}
//                 href="#"
//                 aria-label={label}
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#176b5b]"
//               >
//                 <Icon size={15} />
//               </a>
//             ))}
//           </div>
//         </div>

//         <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
//           Quality furniture for modern homes and workspaces.
//         </p>

//         <div className="my-8 h-px bg-white/10" />

//         {/* 3 columns in one row on all screens */}
//         <div className="grid grid-cols-3 gap-4 sm:gap-8">
//           {/* Quick Links */}
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
//               Quick Links
//             </p>
//             <ul className="mt-3 space-y-2 text-xs text-white/60 sm:mt-3.5 sm:space-y-2.5 sm:text-sm">
//               <li>
//                 <Link href="/" className="hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="hover:text-white">
//                   Furniture
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
//               Categories
//             </p>
//             <ul className="mt-3 space-y-2 text-xs text-white/60 sm:mt-3.5 sm:space-y-2.5 sm:text-sm">
//               {categories.length > 0 ? (
//                 categories.map((cat) => (
//                   <li key={cat.title}>
//                     <Link href={cat.href} className="hover:text-white">
//                       {cat.title}
//                     </Link>
//                   </li>
//                 ))
//               ) : (
//                 <li>
//                   <Link href="/products" className="hover:text-white">
//                     All products
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
//               Contact Us
//             </p>
//             <ul className="mt-3 space-y-2.5 text-xs text-white/60 sm:mt-3.5 sm:space-y-3 sm:text-sm">
//               <li className="flex items-start gap-1.5 sm:gap-2">
//                 <MapPin
//                   size={13}
//                   className="mt-0.5 shrink-0 text-[#9a5b18]"
//                 />
//                 <span className="leading-snug">
//                   Guntur, Andhra Pradesh
//                 </span>
//               </li>
//               <li>
//                 <a
//                   href="tel:+919876543210"
//                   className="flex items-center gap-1.5 hover:text-white sm:gap-2"
//                 >
//                   <Phone size={13} className="shrink-0 text-[#9a5b18]" />
//                   <span className="leading-snug">+91 98765 43210</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="mailto:hello@akrish.in"
//                   className="flex items-center gap-1.5 hover:text-white sm:gap-2"
//                 >
//                   <Mail size={13} className="shrink-0 text-[#9a5b18]" />
//                   <span className="break-all leading-snug">hello@akrish.in</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
//           <p>© {currentYear} Akrish Furniture</p>
//           {/* <div className="flex gap-5">
//             <Link href="/privacy" className="hover:text-white">
//               Privacy
//             </Link>
//             <Link href="/terms" className="hover:text-white">
//               Terms
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface CategoryItem {
//   title: string;
//   href: string;
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [categories, setCategories] = useState<CategoryItem[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const categorySet = new Set<string>();

//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;
//           const category = data.category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         setCategories(
//           Array.from(categorySet)
//             .sort()
//             .slice(0, 6)
//             .map((cat) => ({
//               title: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             }))
//         );
//       } catch (err) {
//         console.error("Failed to load footer categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <footer className="bg-[#1a1814] text-white">
//       {/* Newsletter strip */}
//       <div className="border-b border-white/10">
//         <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
//           <div>
//             <p className="font-display text-xl font-semibold text-white sm:text-2xl">
//               Stay in the loop
//             </p>
//             <p className="mt-1 text-sm text-white/50">
//               New arrivals and exclusive offers — no spam.
//             </p>
//           </div>
//           {/* <form
//             className="flex w-full max-w-md gap-2"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#b8956c]"
//             />
//             <button
//               type="submit"
//               className="shrink-0 rounded-full bg-[#b8956c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8b7355]"
//             >
//               Subscribe
//             </button>
//           </form> */}
//         </div>
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//         <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
//           <div className="max-w-xs">
//             <Link href="/" className="flex items-center gap-2.5">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/Akrish.jpg"
//                 alt="Akrish"
//                 className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
//               />
//               <div>
//                 <p className="font-display text-lg font-semibold leading-none">
//                   Akrish
//                 </p>
//                 <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#b8956c]">
//                   Furniture &amp; Interior
//                 </p>
//               </div>
//             </Link>
//             <p className="mt-4 text-sm leading-6 text-white/50">
//               Considered furniture for modern homes and workspaces — built to
//               last, designed to feel calm.
//             </p>
//             <div className="mt-5 flex items-center gap-1.5">
//               {[
//                 { icon: Facebook, label: "Facebook" },
//                 { icon: Instagram, label: "Instagram" },
//                 { icon: Twitter, label: "Twitter" },
//                 { icon: Linkedin, label: "LinkedIn" },
//               ].map(({ icon: Icon, label }) => (
//                 <a
//                   key={label}
//                   href="#"
//                   aria-label={label}
//                   className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#b8956c]"
//                 >
//                   <Icon size={15} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
//                 Shop
//               </p>
//               <ul className="mt-3 space-y-2.5 text-sm text-white/50">
//                 <li>
//                   <Link href="/products" className="hover:text-white">
//                     All products
//                   </Link>
//                 </li>
//                 {categories.map((cat) => (
//                   <li key={cat.title}>
//                     <Link href={cat.href} className="hover:text-white">
//                       {cat.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
//                 Company
//               </p>
//               <ul className="mt-3 space-y-2.5 text-sm text-white/50">
//                 <li>
//                   <Link href="/" className="hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="hover:text-white">
//                     About us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/services" className="hover:text-white">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="hover:text-white">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
//                 Contact
//               </p>
//               <ul className="mt-3 space-y-3 text-sm text-white/50">
//                 <li className="flex items-start gap-2">
//                   <MapPin size={14} className="mt-0.5 shrink-0 text-[#b8956c]" />
//                   <span>Guntur, Andhra Pradesh</span>
//                 </li>
//                 <li>
//                   <a
//                     href="tel:+919876543210"
//                     className="flex items-center gap-2 hover:text-white"
//                   >
//                     <Phone size={14} className="shrink-0 text-[#b8956c]" />
//                     +91 98765 43210
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="mailto:hello@akrish.in"
//                     className="flex items-center gap-2 hover:text-white"
//                   >
//                     <Mail size={14} className="shrink-0 text-[#b8956c]" />
//                     hello@akrish.in
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
//           <p>© {currentYear} Akrish Furniture &amp; Interior</p>
//           <p className="text-white/30">Crafted for modern living</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface CategoryItem {
  title: string;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "furniture_products"));
        const categorySet = new Set<string>();

        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          const status = String(data.status || "In Stock");
          const active = data.active !== false && status !== "Inactive";
          if (!active) return;
          const category = data.category;
          if (category && typeof category === "string") {
            categorySet.add(category.trim());
          }
        });

        setCategories(
          Array.from(categorySet)
            .sort()
            .slice(0, 6)
            .map((cat) => ({
              title: cat,
              href: `/products?category=${encodeURIComponent(cat)}`,
            }))
        );
      } catch (err) {
        console.error("Failed to load footer categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-[#1a1814] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-xl font-semibold text-white sm:text-2xl">
              Stay in the loop
            </p>
            <p className="mt-1 text-sm text-white/50">
              New arrivals and exclusive offers — no spam.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Brand */}
          <div className="max-w-xs shrink-0">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Akrish.jpg"
                alt="Akrish"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  Akrish
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#b8956c]">
                  Furniture &amp; Interior
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Considered furniture for modern homes and workspaces — built to
              last, designed to feel calm.
            </p>
            {/* <div className="mt-5 flex items-center gap-1.5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#b8956c]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                Shop
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="/products" className="hover:text-white">
                    All products
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.title}>
                    <Link href={cat.href} className="hover:text-white">
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                Company
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account — Staff / ERP (like Admin Login in reference) */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                Account
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="/sign-in" className="hover:text-white">
                    Customer login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Create account
                  </Link>
                </li>
                {/* <li>
                  <Link href="/account/orders" className="hover:text-white">
                    My orders
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/login"
                    className="font-medium text-[#b8956c] hover:text-white"
                  >
                    ERP / Admin panel
                  </Link>
                </li>
                {/* <li>
                  <Link href="/login" className="hover:text-white">
                    ERP / Admin panel
                  </Link>
                </li> */}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                Get in touch
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#b8956c]" />
                  <span>Guntur, Andhra Pradesh</span>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <Phone size={14} className="shrink-0 text-[#b8956c]" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@akrish.in"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <Mail size={14} className="shrink-0 text-[#b8956c]" />
                    hello@akrish.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {currentYear} Akrish Furniture &amp; Interior</p>
          <p className="text-white/30">Crafted for modern living</p>
        </div>
      </div>
    </footer>
  );
}
