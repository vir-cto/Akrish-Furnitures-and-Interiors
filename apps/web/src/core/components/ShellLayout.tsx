// "use client";

// import { ReactNode, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   Menu,
//   User,
//   X,
// } from "lucide-react";
// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
// };

// const interiorNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard" },
//   { label: "CRM", href: "/interior/crm" },
//   { label: "Clients", href: "/interior/clients" },
//   { label: "Quotations", href: "/interior/quotations" },
//   { label: "Contracts", href: "/interior/contracts" },
//   { label: "Projects", href: "/interior/projects" },
//   { label: "HRMS", href: "/interior/hrms" },
//   { label: "Vendors", href: "/interior/vendors" },
//   { label: "Payments", href: "/interior/payments" },
//   { label: "Reports", href: "/interior/reports" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard" },
//   { label: "Products", href: "/furniture/products" },
//   { label: "Inventory", href: "/furniture/inventory" },
//   { label: "Customers", href: "/furniture/customers" },
//   { label: "Enquiries", href: "/furniture/enquiries" },
//   { label: "Orders", href: "/furniture/orders" },
//   { label: "Payments", href: "/furniture/payments" },
//   { label: "Expenses", href: "/furniture/expenses" },
//   { label: "Reports", href: "/furniture/reports" },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const navigation = isFurniture
//     ? furnitureNavigation
//     : interiorNavigation;

//   const moduleName = isFurniture ? "Furniture" : "Interior";

//   const isActive = (href: string) => {
//     if (pathname === href) return true;

//     return pathname.startsWith(`${href}/`);
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
//           collapsed ? "w-[76px]" : "w-[260px]"
//         } ${
//           sidebarOpen
//             ? "translate-x-0"
//             : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex h-16 items-center border-b border-slate-200 px-4">
//           <div className="flex min-w-0 flex-1 items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//               VIP
//             </div>

//             {!collapsed && (
//               <div className="min-w-0">
//                 <p className="truncate text-sm font-bold text-slate-900">
//                   VIP Interior
//                 </p>
//                 <p className="truncate text-xs text-slate-500">
//                   ERP Management
//                 </p>
//               </div>
//             )}
//           </div>

//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         {/* Module switcher */}
//         <div className="border-b border-slate-200 p-3">
//           <ModuleSwitcher />
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto px-3 py-4">
//           <p
//             className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
//               collapsed ? "sr-only" : ""
//             }`}
//           >
//             {moduleName} Module
//           </p>

//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   title={collapsed ? item.label : undefined}
//                   className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
//                     collapsed ? "justify-center" : "gap-3"
//                   } ${
//                     active
//                       ? "bg-slate-900 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${
//                       active ? "bg-white" : "bg-slate-300"
//                     }`}
//                   />

//                   {!collapsed && (
//                     <span className="truncate">{item.label}</span>
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Collapse button */}
//         <div className="hidden border-t border-slate-200 p-3 lg:block">
//           <button
//             type="button"
//             onClick={() => setCollapsed((value) => !value)}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             {collapsed ? (
//               <ChevronRight size={18} />
//             ) : (
//               <>
//                 <ChevronLeft size={18} />
//                 <span>Collapse sidebar</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* User */}
//         <div className="border-t border-slate-200 p-3">
//           <div
//             className={`flex items-center ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
//               <User size={17} />
//             </div>

//             {!collapsed && (
//               <>
//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-semibold text-slate-800">
//                     {user?.name || "User"}
//                   </p>
//                   <p className="truncate text-xs capitalize text-slate-500">
//                     {user?.role || "Employee"}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   title="Logout"
//                   className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={17} />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </aside>

//       {/* Main area */}
//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
//         }`}
//       >
//         {/* Header */}
//         <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open sidebar"
//             >
//               <Menu size={21} />
//             </button>

//             <div>
//               <p className="text-sm font-semibold text-slate-900">
//                 {moduleName} Management
//               </p>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 VIP Interior ERP
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               title="Notifications"
//               className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//             >
//               <Bell size={19} />

//               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
//             </button>

//             <div className="hidden h-7 w-px bg-slate-200 sm:block" />

//             <div className="hidden items-center gap-2 sm:flex">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                 {user?.name?.charAt(0).toUpperCase() || "U"}
//               </div>

//               <div className="max-w-[150px]">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {user?.name || "User"}
//                 </p>
//                 <p className="truncate text-[11px] capitalize text-slate-500">
//                   {user?.role || "Employee"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page content */}
//         <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   Menu,
//   User,
//   X,
// } from "lucide-react";
// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
// };

// const interiorNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard" },
//   { label: "CRM", href: "/interior/crm" },
//   { label: "Clients", href: "/interior/clients" },
//   { label: "Quotations", href: "/interior/quotations" },
//   { label: "Contracts", href: "/interior/contracts" },
//   { label: "Projects", href: "/interior/projects" },
//   { label: "HRMS", href: "/interior/hrms" },
//   { label: "Vendors", href: "/interior/vendors" },
//   { label: "Payments", href: "/interior/payments" },
//   { label: "Reports", href: "/interior/reports" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard" },
//   { label: "Products", href: "/furniture/products" },
//   { label: "Inventory", href: "/furniture/inventory" },
//   { label: "Customers", href: "/furniture/customers" },
//   { label: "Enquiries", href: "/furniture/enquiries" },
//   { label: "Orders", href: "/furniture/orders" },
//   { label: "Payments", href: "/furniture/payments" },
//   { label: "Expenses", href: "/furniture/expenses" },
//   { label: "Reports", href: "/furniture/reports" },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const navigation = isFurniture ? furnitureNavigation : interiorNavigation;
//   const moduleName = isFurniture ? "Furniture" : "Interior";

//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(`${href}/`);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!sidebarOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [sidebarOpen]);

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white shadow-xl transition-all duration-300 lg:shadow-none ${
//           collapsed ? "lg:w-[76px]" : "lg:w-[260px]"
//         } w-[min(280px,85vw)] ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-14 items-center border-b border-slate-200 px-4 sm:h-16">
//           <div className="flex min-w-0 flex-1 items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//               VIP
//             </div>
//             {!collapsed && (
//               <div className="min-w-0">
//                 <p className="truncate text-sm font-bold text-slate-900">
//                   VIP Interior
//                 </p>
//                 <p className="truncate text-xs text-slate-500">ERP Management</p>
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         <div className="border-b border-slate-200 p-3">
//           <ModuleSwitcher />
//         </div>

//         <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
//           <p
//             className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
//               collapsed ? "lg:sr-only" : ""
//             }`}
//           >
//             {moduleName} Module
//           </p>
//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active = isActive(item.href);
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   title={collapsed ? item.label : undefined}
//                   className={`flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-medium transition lg:min-h-0 ${
//                     collapsed ? "lg:justify-center" : "gap-3"
//                   } ${
//                     active
//                       ? "bg-slate-900 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${
//                       active ? "bg-white" : "bg-slate-300"
//                     }`}
//                   />
//                   <span className={collapsed ? "lg:hidden" : ""}>
//                     {item.label}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         <div className="hidden border-t border-slate-200 p-3 lg:block">
//           <button
//             type="button"
//             onClick={() => setCollapsed((v) => !v)}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             {collapsed ? (
//               <ChevronRight size={18} />
//             ) : (
//               <>
//                 <ChevronLeft size={18} />
//                 <span>Collapse sidebar</span>
//               </>
//             )}
//           </button>
//         </div>

//         <div className="border-t border-slate-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
//           <div
//             className={`flex items-center ${
//               collapsed ? "lg:justify-center" : "gap-3"
//             }`}
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
//               <User size={17} />
//             </div>
//             <div className={`min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
//               <p className="truncate text-sm font-semibold text-slate-800">
//                 {user?.name || "User"}
//               </p>
//               <p className="truncate text-xs capitalize text-slate-500">
//                 {user?.role || "Employee"}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => logout()}
//               title="Logout"
//               className={`rounded-lg p-2.5 text-slate-400 hover:bg-red-50 hover:text-red-600 ${
//                 collapsed ? "lg:hidden" : ""
//               }`}
//             >
//               <LogOut size={17} />
//             </button>
//           </div>
//         </div>
//       </aside>

//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
//         }`}
//       >
//         <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-3 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-16 sm:px-6">
//           <div className="flex min-w-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open sidebar"
//             >
//               <Menu size={21} />
//             </button>
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold text-slate-900">
//                 {moduleName} Management
//               </p>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 VIP Interior ERP
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               title="Notifications"
//               className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"
//             >
//               <Bell size={19} />
//               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
//             </button>
//             <div className="hidden items-center gap-2 sm:flex">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                 {user?.name?.charAt(0).toUpperCase() || "U"}
//               </div>
//               <div className="max-w-[150px]">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {user?.name || "User"}
//                 </p>
//                 <p className="truncate text-[11px] capitalize text-slate-500">
//                   {user?.role || "Employee"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="min-h-[calc(100vh-3.5rem)] p-3 sm:min-h-[calc(100vh-4rem)] sm:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   Menu,
//   User,
//   X,
// } from "lucide-react";
// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
// };

// const interiorNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard" },
//   { label: "CRM", href: "/interior/crm" },
//   { label: "Clients", href: "/interior/clients" },
//   { label: "Quotations", href: "/interior/quotations" },
//   { label: "Contracts", href: "/interior/contracts" },
//   { label: "Projects", href: "/interior/projects" },
//   { label: "HRMS", href: "/interior/hrms" },
//   { label: "Vendors", href: "/interior/vendors" },
//   { label: "Payments", href: "/interior/payments" },
//   { label: "Reports", href: "/interior/reports" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard" },
//   { label: "Products", href: "/furniture/products" },
//   { label: "Inventory", href: "/furniture/inventory" },
//   { label: "Customers", href: "/furniture/customers" },
//   { label: "Enquiries", href: "/furniture/enquiries" },
//   { label: "Orders", href: "/furniture/orders" },
//   { label: "Payments", href: "/furniture/payments" },
//   { label: "Expenses", href: "/furniture/expenses" },
//   { label: "Delivery", href: "/furniture/settings/delivery" },
//   { label: "Reports", href: "/furniture/reports" },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const navigation = isFurniture ? furnitureNavigation : interiorNavigation;
//   const moduleName = isFurniture ? "Furniture" : "Interior";

//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(`${href}/`);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!sidebarOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [sidebarOpen]);

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white shadow-xl transition-all duration-300 lg:shadow-none ${
//           collapsed ? "lg:w-[76px]" : "lg:w-[260px]"
//         } w-[min(280px,85vw)] ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-14 items-center border-b border-slate-200 px-4 sm:h-16">
//           <div className="flex min-w-0 flex-1 items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//               VIP
//             </div>
//             {!collapsed && (
//               <div className="min-w-0">
//                 <p className="truncate text-sm font-bold text-slate-900">
//                   VIP Interior
//                 </p>
//                 <p className="truncate text-xs text-slate-500">ERP Management</p>
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         <div className="border-b border-slate-200 p-3">
//           <ModuleSwitcher />
//         </div>

//         <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
//           <p
//             className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
//               collapsed ? "lg:sr-only" : ""
//             }`}
//           >
//             {moduleName} Module
//           </p>
//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active = isActive(item.href);
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   title={collapsed ? item.label : undefined}
//                   className={`flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-medium transition lg:min-h-0 ${
//                     collapsed ? "lg:justify-center" : "gap-3"
//                   } ${
//                     active
//                       ? "bg-slate-900 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${
//                       active ? "bg-white" : "bg-slate-300"
//                     }`}
//                   />
//                   <span className={collapsed ? "lg:hidden" : ""}>
//                     {item.label}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         <div className="hidden border-t border-slate-200 p-3 lg:block">
//           <button
//             type="button"
//             onClick={() => setCollapsed((v) => !v)}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             {collapsed ? (
//               <ChevronRight size={18} />
//             ) : (
//               <>
//                 <ChevronLeft size={18} />
//                 <span>Collapse sidebar</span>
//               </>
//             )}
//           </button>
//         </div>

//         <div className="border-t border-slate-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
//           <div
//             className={`flex items-center ${
//               collapsed ? "lg:justify-center" : "gap-3"
//             }`}
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
//               <User size={17} />
//             </div>
//             <div className={`min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
//               <p className="truncate text-sm font-semibold text-slate-800">
//                 {user?.name || "User"}
//               </p>
//               <p className="truncate text-xs capitalize text-slate-500">
//                 {user?.role || "Employee"}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => logout()}
//               title="Logout"
//               className={`rounded-lg p-2.5 text-slate-400 hover:bg-red-50 hover:text-red-600 ${
//                 collapsed ? "lg:hidden" : ""
//               }`}
//             >
//               <LogOut size={17} />
//             </button>
//           </div>
//         </div>
//       </aside>

//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
//         }`}
//       >
//         <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-3 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-16 sm:px-6">
//           <div className="flex min-w-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open sidebar"
//             >
//               <Menu size={21} />
//             </button>
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold text-slate-900">
//                 {moduleName} Management
//               </p>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 VIP Interior ERP
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               title="Notifications"
//               className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"
//             >
//               <Bell size={19} />
//               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
//             </button>
//             <div className="hidden items-center gap-2 sm:flex">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                 {user?.name?.charAt(0).toUpperCase() || "U"}
//               </div>
//               <div className="max-w-[150px]">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {user?.name || "User"}
//                 </p>
//                 <p className="truncate text-[11px] capitalize text-slate-500">
//                   {user?.role || "Employee"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="min-h-[calc(100vh-3.5rem)] p-3 sm:min-h-[calc(100vh-4rem)] sm:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { ReactNode, useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   Box,
//   ChartNoAxesColumn,
//   ChevronDown,
//   ChevronRight,
//   CircleDollarSign,
//   ClipboardList,
//   CreditCard,
//   Folder,
//   Gauge,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   Package,
//   Search,
//   Settings,
//   ShieldCheck,
//   Truck,
//   Users,
//   UserRound,
//   Wallet,
//   X,
//   Layers,
//   Tag,
//   Warehouse,
//   Hammer,
// } from "lucide-react";

// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: ReactNode;
//   children?: NavItem[];
// };

// const iconSize = 16;

// const interiorNavigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/interior/dashboard",
//     icon: <LayoutDashboard size={iconSize} />,
//   },
//   {
//     label: "CRM",
//     href: "/interior/crm",
//     icon: <Users size={iconSize} />,
//   },
//   {
//     label: "Clients",
//     href: "/interior/clients",
//     icon: <UserRound size={iconSize} />,
//   },
//   {
//     label: "Quotations",
//     href: "/interior/quotations",
//     icon: <ClipboardList size={iconSize} />,
//   },
//   {
//     label: "Contracts",
//     href: "/interior/contracts",
//     icon: <Folder size={iconSize} />,
//   },
//   {
//     label: "Projects",
//     href: "/interior/projects",
//     icon: <Layers size={iconSize} />,
//   },
//   {
//     label: "HRMS",
//     href: "/interior/hrms",
//     icon: <Users size={iconSize} />,
//   },
//   {
//     label: "Vendors",
//     href: "/interior/vendors",
//     icon: <Package size={iconSize} />,
//   },
//   {
//     label: "Payments",
//     href: "/interior/payments",
//     icon: <CreditCard size={iconSize} />,
//   },
//   {
//     label: "Reports",
//     href: "/interior/reports",
//     icon: <ChartNoAxesColumn size={iconSize} />,
//   },
// ];

// const furnitureNavigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/furniture/dashboard",
//     icon: <LayoutDashboard size={iconSize} />,
//   },
//   {
//     label: "Products",
//     href: "/furniture/products",
//     icon: <Package size={iconSize} />,
//     children: [
//       {
//         label: "Categories",
//         href: "/furniture/categories",
//         icon: <Folder size={iconSize} />,
//       },
//       {
//         label: "Sub Categories",
//         href: "/furniture/sub-categories",
//         icon: <Layers size={iconSize} />,
//       },
//       {
//         label: "Materials",
//         href: "/furniture/materials",
//         icon: <Hammer size={iconSize} />,
//       },
//       {
//         label: "Finishes",
//         href: "/furniture/finishes",
//         icon: <Tag size={iconSize} />,
//       },
//     ],
//   },
//   {
//     label: "Inventory",
//     href: "/furniture/inventory",
//     icon: <Warehouse size={iconSize} />,
//   },
//   {
//     label: "Customers",
//     href: "/furniture/customers",
//     icon: <UserRound size={iconSize} />,
//   },
//   {
//     label: "Enquiries",
//     href: "/furniture/enquiries",
//     icon: <ClipboardList size={iconSize} />,
//   },
//   {
//     label: "Orders",
//     href: "/furniture/orders",
//     icon: <Box size={iconSize} />,
//   },
//   {
//     label: "Payments",
//     href: "/furniture/payments",
//     icon: <CreditCard size={iconSize} />,
//   },
//   {
//     label: "Expenses",
//     href: "/furniture/expenses",
//     icon: <Wallet size={iconSize} />,
//   },
//   {
//     label: "Delivery",
//     href: "/furniture/settings/delivery",
//     icon: <Truck size={iconSize} />,
//   },
//   {
//     label: "Reports",
//     href: "/furniture/reports",
//     icon: <ChartNoAxesColumn size={iconSize} />,
//   },
// ];

// const administrationNavigation: NavItem[] = [
//   {
//     label: "Staff Users",
//     href: "/admin/users",
//     icon: <ShieldCheck size={iconSize} />,
//   },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");

//   const navigation = isFurniture
//     ? furnitureNavigation
//     : interiorNavigation;

//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";

//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(`${href}/`);

//   const productSectionActive =
//     pathname.startsWith("/furniture/products") ||
//     pathname.startsWith("/furniture/categories") ||
//     pathname.startsWith("/furniture/sub-categories") ||
//     pathname.startsWith("/furniture/materials") ||
//     pathname.startsWith("/furniture/finishes");

//   const pageTitle = useMemo(() => {
//     const allItems = [
//       ...interiorNavigation,
//       ...furnitureNavigation,
//       ...administrationNavigation,
//     ];

//     for (const item of allItems) {
//       if (pathname === item.href) return item.label;

//       if (item.children) {
//         const child = item.children.find(
//           (childItem) => pathname === childItem.href
//         );

//         if (child) return child.label;
//       }
//     }

//     const lastSegment = pathname.split("/").filter(Boolean).pop() || "Dashboard";

//     return lastSegment
//       .replace(/[-_]/g, " ")
//       .replace(/\b\w/g, (letter) => letter.toUpperCase());
//   }, [pathname]);

//   useEffect(() => {
//     setSidebarOpen(false);
//     setSearchOpen(false);
//     setSearchQuery("");
//   }, [pathname]);

//   useEffect(() => {
//     if (productSectionActive) {
//       setProductsOpen(true);
//     }
//   }, [productSectionActive]);

//   useEffect(() => {
//     if (!sidebarOpen) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [sidebarOpen]);

//   const filteredNavigation = useMemo(() => {
//     const query = searchQuery.trim().toLowerCase();

//     if (!query) return navigation;

//     return navigation.filter((item) => {
//       const parentMatches = item.label.toLowerCase().includes(query);
//       const childMatches = item.children?.some((child) =>
//         child.label.toLowerCase().includes(query)
//       );

//       return parentMatches || childMatches;
//     });
//   }, [navigation, searchQuery]);

//   const userName = user?.name || "Admin";
//   const userRole = user?.role || "Admin";
//   const userInitial = userName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f7f4] text-[#182c28]">
//       {/* Mobile backdrop */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[1px] lg:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[min(280px,86vw)] flex-col border-r border-[#e7e9e6] bg-white transition-transform duration-200 lg:w-[215px] ${
//           sidebarOpen
//             ? "translate-x-0"
//             : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* Brand */}
//         <div className="flex h-[64px] shrink-0 items-center gap-2.5 border-b border-[#edf0ed] px-4">
//           <div className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[9px] bg-[#176b57] text-[17px] font-bold text-white">
//             A
//           </div>

//           <div className="min-w-0 flex-1">
//             <p className="truncate text-[16px] font-bold leading-5 tracking-[-0.3px] text-[#182b27]">
//               Akrish
//             </p>
//             <p className="mt-0.5 truncate text-[8px] font-medium uppercase tracking-[1.15px] text-[#8b9b95]">
//               Furniture and Interior
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             aria-label="Close menu"
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-[#72827c] hover:bg-[#f4f6f4] lg:hidden"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto px-[13px] pb-4 pt-3">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[1.4px] text-[#91a098]">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {filteredNavigation.map((item) => {
//               const active =
//                 pathname === item.href ||
//                 (item.href !== "/furniture/products" &&
//                   pathname.startsWith(`${item.href}/`));

//               const hasChildren = Boolean(item.children?.length);
//               const parentActive =
//                 item.label === "Products" && productSectionActive;

//               return (
//                 <div key={item.href}>
//                   <div
//                     className={`flex min-h-[38px] items-center rounded-[9px] transition-colors ${
//                       active || parentActive
//                         ? "bg-[#e8f5ef] text-[#126b57]"
//                         : "text-[#43544e] hover:bg-[#f5f7f5]"
//                     }`}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setSidebarOpen(false)}
//                       className="flex min-w-0 flex-1 items-center gap-[11px] px-[11px] py-[9px] text-[12px] font-medium"
//                     >
//                       <span
//                         className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] ${
//                           active || parentActive
//                             ? "bg-[#176b57] text-white"
//                             : "bg-[#f0f3f5] text-[#6e8798]"
//                         }`}
//                       >
//                         {item.icon}
//                       </span>

//                       <span className="truncate">{item.label}</span>

//                       {active && !hasChildren && (
//                         <span className="ml-auto h-[5px] w-[5px] shrink-0 rounded-full bg-[#176b57]" />
//                       )}
//                     </Link>

//                     {hasChildren && (
//                       <button
//                         type="button"
//                         aria-label={
//                           productsOpen
//                             ? "Collapse product links"
//                             : "Expand product links"
//                         }
//                         aria-expanded={productsOpen}
//                         onClick={() => setProductsOpen((open) => !open)}
//                         className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#7d9188] hover:bg-white/70"
//                       >
//                         {productsOpen ? (
//                           <ChevronDown size={14} />
//                         ) : (
//                           <ChevronRight size={14} />
//                         )}
//                       </button>
//                     )}
//                   </div>

//                   {hasChildren && productsOpen && (
//                     <div className="ml-[9px] mt-1 space-y-1 border-l border-[#e3eae5] pl-[9px]">
//                       {item.children?.map((child) => {
//                         const childActive = isActive(child.href);

//                         return (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             onClick={() => setSidebarOpen(false)}
//                             className={`flex min-h-[37px] items-center gap-[10px] rounded-[8px] px-[10px] py-2 text-[11.5px] transition-colors ${
//                               childActive
//                                 ? "bg-[#e8f5ef] font-semibold text-[#176b57]"
//                                 : "text-[#52645d] hover:bg-[#f5f7f5]"
//                             }`}
//                           >
//                             <span
//                               className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] ${
//                                 childActive
//                                   ? "bg-[#d5ebe0] text-[#176b57]"
//                                   : "bg-[#f0f3f5] text-[#71899a]"
//                               }`}
//                             >
//                               {child.icon}
//                             </span>
//                             {child.label}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Administration */}
//           <div className="mb-2 mt-4 border-t border-[#edf0ed] pt-3">
//             <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[1.4px] text-[#91a098]">
//               Administration
//             </p>

//             {administrationNavigation.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`flex min-h-[38px] items-center gap-[11px] rounded-[9px] px-[11px] py-[9px] text-[12px] font-medium transition-colors ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-[#43544e] hover:bg-[#f5f7f5]"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-[#f0f3f5] text-[#6e8798]"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Sidebar user profile */}
//         <div className="shrink-0 border-t border-[#edf0ed] p-[10px]">
//           <div className="flex items-center gap-2.5 rounded-[10px] bg-[#f7f9f8] px-[11px] py-[10px]">
//             <div className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#176b57] text-[11px] font-semibold text-white">
//               {userInitial}
//             </div>

//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[11px] font-semibold text-[#263a33]">
//                 {userName}
//               </p>
//               <p className="mt-0.5 truncate text-[9px] capitalize text-[#91a098]">
//                 {userRole}
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={() => logout()}
//               title="Logout"
//               aria-label="Logout"
//               className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#8b9b95] hover:bg-[#e8f5ef] hover:text-[#176b57]"
//             >
//               <LogOut size={14} />
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main content */}
//       <div className="min-h-screen min-w-0 lg:pl-[215px]">
//         {/* Top header */}
//         <header className="sticky top-0 z-30 flex h-[64px] items-center justify-between gap-3 border-b border-[#e7e9e6] bg-white px-3 sm:px-5 lg:px-[22px]">
//           <div className="flex min-w-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               aria-label="Open menu"
//               className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#62756c] hover:bg-[#f4f6f4] lg:hidden"
//             >
//               <Menu size={19} />
//             </button>

//             <div className="min-w-0">
//               <p className="truncate text-[9px] font-medium uppercase tracking-[0.8px] text-[#8a9a93]">
//                 {moduleName}
//               </p>
//               <h1 className="truncate text-[12px] font-semibold text-[#27362f]">
//                 {pageTitle}
//               </h1>
//             </div>
//           </div>

//           <div className="flex shrink-0 items-center gap-1 sm:gap-2">
//             <div className="hidden sm:block">
//               <ModuleSwitcher />
//             </div>

//             {searchOpen && (
//               <input
//                 autoFocus
//                 type="search"
//                 value={searchQuery}
//                 onChange={(event) => setSearchQuery(event.target.value)}
//                 placeholder="Search menu..."
//                 aria-label="Search navigation"
//                 className="w-[125px] rounded-lg border border-[#dfe6e1] bg-white px-3 py-2 text-xs outline-none focus:border-[#176b57] sm:w-[180px]"
//               />
//             )}

//             <button
//               type="button"
//               title="Search navigation"
//               aria-label="Search navigation"
//               onClick={() => {
//                 setSearchOpen((open) => !open);
//                 setSearchQuery("");
//               }}
//               className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
//                 searchOpen
//                   ? "bg-[#e8f5ef] text-[#176b57]"
//                   : "text-[#708278] hover:bg-[#f5f7f5]"
//               }`}
//             >
//               <Search size={17} />
//             </button>

//             <button
//               type="button"
//               title="Notifications"
//               aria-label="Notifications"
//               className="relative flex h-9 w-9 items-center justify-center rounded-lg text-[#708278] hover:bg-[#f5f7f5]"
//             >
//               <Bell size={17} />
//             </button>

//             <Link
//               href={isFurniture ? "/furniture/settings" : "/interior/settings"}
//               title="Settings"
//               aria-label="Settings"
//               className="flex h-9 w-9 items-center justify-center rounded-lg text-[#708278] hover:bg-[#f5f7f5]"
//             >
//               <Settings size={17} />
//             </Link>

//             <div className="ml-1 hidden h-8 items-center gap-2 border-l border-[#e7e9e6] pl-3 sm:flex">
//               <div className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#e0f1e8] text-[11px] font-semibold text-[#176b57]">
//                 {userInitial}
//               </div>
//               <div className="max-w-[90px]">
//                 <p className="truncate text-[11px] font-semibold text-[#263a33]">
//                   {userName}
//                 </p>
//                 <p className="truncate text-[9px] capitalize text-[#91a098]">
//                   {userRole}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Module switcher on small screens */}
//         <div className="border-b border-[#e7e9e6] bg-white px-3 py-2 sm:hidden">
//           <ModuleSwitcher />
//         </div>

//         {/* Page content */}
//         <main className="min-h-[calc(100vh-64px)] min-w-0 bg-[#f7f7f4] p-3 sm:p-5 lg:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM", href: "/interior/crm", icon: "♟" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Categories", href: "/furniture/categories", icon: "☰", nested: true },
//   { label: "Sub Categories", href: "/furniture/sub-categories", icon: "▤", nested: true },
//   { label: "Materials", href: "/furniture/materials", icon: "◆", nested: true },
//   { label: "Finishes", href: "/furniture/finishes", icon: "▣", nested: true },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Delivery", href: "/furniture/settings/delivery", icon: "↗" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;

//   if (value && typeof value === "object" && "toDate" in value) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }

//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);

//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;

//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;

//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;

//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );

//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex min-w-0 items-center gap-2">
//       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="min-w-0 leading-none">
//         <div className="truncate text-[18px] font-bold tracking-tight text-[#1f2937] sm:text-[20px]">
//           Akrish
//         </div>
//         <div className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   if (!canInterior || !canFurniture) return null;

//   return (
//     <div
//       className="relative flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300"
//         style={{ left: isFurniture ? "calc(50% + 1px)" : "2px" }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           !isFurniture ? "text-[#176b57]" : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard size={15} className="shrink-0" />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           isFurniture ? "text-[#176b57]" : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP"
//       >
//         <Sofa size={15} className="shrink-0" />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);

//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);
//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");

//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";

//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   useEffect(() => {
//     setSidebarOpen(false);
//     setNotifOpen(false);
//     setSettingsOpen(false);
//     setUserMenuOpen(false);
//     setSearchOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!sidebarOpen) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [sidebarOpen]);

//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//       return;
//     }

//     if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   // Listen for new website enquiries in real time.
//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsubscribe: (() => void) | undefined;

//     try {
//       const enquiriesQuery = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsubscribe = onSnapshot(
//         enquiriesQuery,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New").trim().toLowerCase();
//             const seen = data.notificationSeen === true;

//             if (status !== "new" || seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";

//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();

//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (error) => {
//           console.error("Enquiry notifications listener error:", error);
//         }
//       );
//     } catch (error) {
//       console.error("Failed to start enquiry notifications:", error);
//     }

//     return () => unsubscribe?.();
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     const previousModule = prevModuleRef.current;

//     if (previousModule !== null && previousModule !== currentModule) {
//       setContentVisible(false);

//       const timer = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);

//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(timer);
//     }

//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function handleDocumentClick(event: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(event.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleDocumentClick);
//     return () => document.removeEventListener("mousedown", handleDocumentClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       window.setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function handleKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//         setSidebarOpen(false);
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const targets = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) targets.push({ label: "Staff Users", href: "/admin/users" });
//     return targets;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const queryText = searchQuery.toLowerCase().trim();
//     if (!queryText) return searchTargets;

//     return searchTargets.filter((target) =>
//       target.label.toLowerCase().includes(queryText)
//     );
//   }, [searchQuery, searchTargets]);

//   function runSearch(event?: React.FormEvent) {
//     event?.preventDefault();

//     const queryText = searchQuery.trim();
//     if (!queryText) return;

//     const match = filteredSearch[0];

//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(queryText)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(queryText)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(queryText)}`);
//     }

//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(notification: NotificationItem) {
//     // Remove it immediately from the bell and then save its read state.
//     setNotifications((current) =>
//       current.filter((item) => item.id !== notification.id)
//     );
//     setNotifOpen(false);

//     try {
//       await markEnquiryNotificationSeen(notification.enquiryId);
//     } catch (error) {
//       console.error("Failed to mark notification seen:", error);
//     } finally {
//       router.push("/furniture/enquiries");
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((notification) => notification.enquiryId);

//     setNotifications([]);
//     setNotifOpen(false);

//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (error) {
//       console.error("Failed to clear notifications:", error);
//     }
//   }

//   function handleLogout() {
//     logout();
//     router.push("/login");
//   }

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed z-50 flex flex-col bg-white transition-all duration-200 ease-out left-3 top-3 bottom-3 w-[min(17.5rem,calc(100vw-1.5rem))] rounded-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-slate-900/5 lg:left-0 lg:top-0 lg:bottom-0 lg:w-[215px] lg:rounded-none lg:border-0 lg:border-r lg:border-slate-200 lg:shadow-none lg:ring-0 ${
//           sidebarOpen
//             ? "translate-x-0 opacity-100"
//             : "-translate-x-[calc(100%+1.5rem)] opacity-0 pointer-events-none lg:pointer-events-auto lg:translate-x-0 lg:opacity-100"
//         }`}
//       >
//         <div className="flex h-14 shrink-0 items-center border-b border-slate-100 px-4 sm:h-[64px] sm:px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 lg:hidden"
//             aria-label="Close menu"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <nav className="mt-2 flex-1 overflow-y-auto overscroll-contain px-2.5 pb-3 sm:mt-3 sm:px-3">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-0.5 sm:space-y-1">
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all sm:min-h-0 sm:rounded-lg ${
//                     item.nested ? "ml-2 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] sm:h-6 sm:w-6 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span className="truncate">{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all sm:min-h-0 sm:rounded-lg ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-500 sm:h-6 sm:w-6">
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="shrink-0 border-t border-slate-100 p-2.5 sm:p-3">
//           <div className="rounded-xl bg-slate-50 p-2.5 sm:rounded-lg sm:p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white sm:h-8 sm:w-8">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-600 sm:h-7 sm:w-7"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[215px]">
//         <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-[64px]">
//           <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-4 md:px-6">
//             <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div className="min-w-0">
//                 <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="truncate text-sm font-semibold leading-tight text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher
//                 isFurniture={isFurniture}
//                 canInterior={canInterior}
//                 canFurniture={canFurniture}
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:h-9 sm:w-9"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {isFurniture && canFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((value) => !value);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:h-9 sm:w-9"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>

//                       <div className="max-h-[min(18rem,50vh)] overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell size={28} className="mx-auto mb-2 text-slate-300" />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((notification) => (
//                             <button
//                               key={notification.id}
//                               type="button"
//                               onClick={() => openNotification(notification)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {notification.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {notification.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">
//                                 {notification.body}
//                               </p>
//                             </button>
//                           ))
//                         )}
//                       </div>

//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((value) => !value);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(isFurniture ? "/furniture/reports" : "/interior/reports");
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(isFurniture ? "/furniture/dashboard" : "/interior/dashboard");
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((value) => !value);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 hover:bg-slate-50"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden min-w-0 text-left md:block">
//                     <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-3 pt-[max(10vh,env(safe-area-inset-top))] sm:p-4 sm:pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4"
//               >
//                 <Search size={18} className="shrink-0 text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(event) => setSearchQuery(event.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 min-w-0 flex-1 border-0 bg-transparent text-base outline-none sm:text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//                   aria-label="Close search"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>

//               <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const queryText = searchQuery.trim();
//                         router.push(
//                           queryText
//                             ? `${item.href}?search=${encodeURIComponent(queryText)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 sm:py-2.5"
//                     >
//                       <span>{item.label}</span>
//                       <span className="hidden shrink-0 text-[10px] text-slate-400 sm:inline">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>

//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-3.5rem)] overflow-x-hidden px-3 py-4 transition-all duration-300 sm:min-h-[calc(100vh-64px)] sm:p-6"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishSidebarIn {
//           from {
//             opacity: 0.7;
//             transform: translateX(-12px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   Bell,
//   ChartNoAxesColumn,
//   ClipboardList,
//   CreditCard,
//   Folder,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   Package,
//   Search,
//   Settings,
//   ShieldCheck,
//   Sofa,
//   Tag,
//   Truck,
//   UserRound,
//   Users,
//   Wallet,
//   Warehouse,
//   Hammer,
//   X,
// } from "lucide-react";
// import {
//   collection,
//   limit,
//   onSnapshot,
//   orderBy,
//   query,
//   type Timestamp,
// } from "firebase/firestore";

// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: React.ReactNode;
//   nested?: boolean;
// };

// type NotificationItem = {
//   id: string;
//   enquiryId: string;
//   title: string;
//   body: string;
//   time: string;
// };

// const interiorNavigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/interior/dashboard",
//     icon: <LayoutDashboard size={15} />,
//   },
//   { label: "CRM", href: "/interior/crm", icon: <Users size={15} /> },
//   { label: "HRMS", href: "/interior/hrms", icon: <Users size={15} /> },
//   { label: "Clients", href: "/interior/clients", icon: <UserRound size={15} /> },
//   {
//     label: "Quotations",
//     href: "/interior/quotations",
//     icon: <ClipboardList size={15} />,
//   },
//   { label: "Contracts", href: "/interior/contracts", icon: <Folder size={15} /> },
//   { label: "Projects", href: "/interior/projects", icon: <Package size={15} /> },
//   { label: "Vendors", href: "/interior/vendors", icon: <Users size={15} /> },
//   {
//     label: "Payments",
//     href: "/interior/payments",
//     icon: <CreditCard size={15} />,
//   },
//   {
//     label: "Reports",
//     href: "/interior/reports",
//     icon: <ChartNoAxesColumn size={15} />,
//   },
// ];

// const furnitureNavigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/furniture/dashboard",
//     icon: <LayoutDashboard size={15} />,
//   },
//   {
//     label: "Products",
//     href: "/furniture/products",
//     icon: <Package size={15} />,
//   },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: <Folder size={15} />,
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: <Package size={15} />,
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: <Hammer size={15} />,
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: <Tag size={15} />,
//     nested: true,
//   },
//   {
//     label: "Inventory",
//     href: "/furniture/inventory",
//     icon: <Warehouse size={15} />,
//   },
//   {
//     label: "Customers",
//     href: "/furniture/customers",
//     icon: <UserRound size={15} />,
//   },
//   {
//     label: "Enquiries",
//     href: "/furniture/enquiries",
//     icon: <ClipboardList size={15} />,
//   },
//   { label: "Orders", href: "/furniture/orders", icon: <Package size={15} /> },
//   {
//     label: "Payments",
//     href: "/furniture/payments",
//     icon: <CreditCard size={15} />,
//   },
//   {
//     label: "Expenses",
//     href: "/furniture/expenses",
//     icon: <Wallet size={15} />,
//   },
//   {
//     label: "Delivery",
//     href: "/furniture/settings/delivery",
//     icon: <Truck size={15} />,
//   },
//   {
//     label: "Reports",
//     href: "/furniture/reports",
//     icon: <ChartNoAxesColumn size={15} />,
//   },
// ];

// const ADMIN_NAVIGATION: NavItem = {
//   label: "Staff Users",
//   href: "/admin/users",
//   icon: <ShieldCheck size={15} />,
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;

//   if (value && typeof value === "object" && "toDate" in value) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }

//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const minutes = Math.floor((Date.now() - date.getTime()) / 60000);

//   if (minutes < 1) return "Just now";
//   if (minutes < 60) return `${minutes}m ago`;

//   const hours = Math.floor(minutes / 60);

//   if (hours < 24) return `${hours}h ago`;

//   const days = Math.floor(hours / 24);

//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;

//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string): string {
//   if (pathname.startsWith("/admin/users")) return "Staff Users";

//   const items = [...interiorNavigation, ...furnitureNavigation];
//   const matched = items
//     .filter(
//       (item) =>
//         pathname === item.href || pathname.startsWith(`${item.href}/`)
//     )
//     .sort((a, b) => b.href.length - a.href.length)[0];

//   if (matched) return matched.label;

//   const lastSegment = pathname.split("/").filter(Boolean).pop();

//   return lastSegment
//     ? lastSegment.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) =>
//         letter.toUpperCase()
//       )
//     : "Dashboard";
// }

// function Brand() {
//   return (
//     <div className="flex min-w-0 items-center gap-2.5">
//       <div className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-[9px] bg-[#176b57] text-lg font-bold text-white">
//         A
//       </div>
//       <div className="min-w-0">
//         <p className="truncate text-[19px] font-bold leading-5 tracking-tight text-[#182b27]">
//           Akrish
//         </p>
//         <p className="mt-1 hidden truncate text-[8px] font-medium uppercase tracking-[1.25px] text-[#8b9b95] sm:block">
//           Furniture and Interior
//         </p>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   if (!canInterior || !canFurniture) return null;

//   return (
//     <div
//       role="group"
//       aria-label="Switch ERP module"
//       className="relative flex h-[42px] shrink-0 items-center rounded-full border border-[#e0e6ef] bg-[#f8fafc] p-[3px] shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
//     >
//       <span
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[3px] top-[3px] w-[calc(50%-3px)] rounded-full border border-[#e4e9f0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-all duration-200"
//         style={{ left: isFurniture ? "calc(50% + 0px)" : "3px" }}
//       />

//       <Link
//         href="/interior/dashboard"
//         title="Interior ERP"
//         className={`relative z-10 flex h-full items-center justify-center gap-1.5 rounded-full px-3 text-[13px] font-semibold transition-colors ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-[#64748b] hover:text-slate-800"
//         }`}
//       >
//         <LayoutDashboard size={15} />
//         <span>Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         title="Furniture ERP"
//         className={`relative z-10 flex h-full items-center justify-center gap-1.5 rounded-full px-3 text-[13px] font-semibold transition-colors ${
//           isFurniture
//             ? "text-[#08775f]"
//             : "text-[#64748b] hover:text-slate-800"
//         }`}
//       >
//         <Sofa size={15} />
//         <span>Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");

//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const pageTitle = getPageTitle(pathname);
//   const navigation = isFurniture ? furnitureNavigation : interiorNavigation;

//   const displayName = user?.name || "Admin";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Admin";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const productSectionActive =
//     pathname.startsWith("/furniture/products") ||
//     pathname.startsWith("/furniture/categories") ||
//     pathname.startsWith("/furniture/sub-categories") ||
//     pathname.startsWith("/furniture/materials") ||
//     pathname.startsWith("/furniture/finishes");

//   const [productsOpen, setProductsOpen] = useState(productSectionActive);

//   useEffect(() => {
//     setSidebarOpen(false);
//     setNotifOpen(false);
//     setSettingsOpen(false);
//     setUserMenuOpen(false);
//     setSearchOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (productSectionActive) setProductsOpen(true);
//   }, [productSectionActive]);

//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//     } else if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   // Real-time notifications for new Furniture website enquiries.
//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       return;
//     }

//     const enquiriesQuery = query(
//       collection(db, ENQUIRIES_COLLECTION),
//       orderBy("createdAt", "desc"),
//       limit(50)
//     );

//     const unsubscribe = onSnapshot(
//       enquiriesQuery,
//       (snapshot) => {
//         const items: NotificationItem[] = [];

//         snapshot.forEach((document) => {
//           const data = document.data();
//           const status = String(data.status || "New").toLowerCase();
//           const seen = data.notificationSeen === true;

//           if (status !== "new" || seen) return;

//           const customerName = String(
//             data.customerName || data.name || "Website customer"
//           );
//           const productName = String(
//             data.productName || data.productCode || ""
//           );
//           const message = String(data.message || "");

//           items.push({
//             id: document.id,
//             enquiryId: document.id,
//             title: "New enquiry",
//             body: productName
//               ? `${customerName} · ${productName}`
//               : message
//                 ? `${customerName}: ${message.slice(0, 65)}`
//                 : `${customerName} submitted an enquiry`,
//             time: formatRelativeTime(data.createdAt),
//           });
//         });

//         setNotifications(items);
//       },
//       (error) => {
//         console.error("Unable to load enquiry notifications:", error);
//       }
//     );

//     return () => unsubscribe();
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     function closeMenus(event: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(event.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", closeMenus);
//     return () => document.removeEventListener("mousedown", closeMenus);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) searchInputRef.current?.focus();

//     function handleEscape(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//         setSidebarOpen(false);
//       }
//     }

//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [searchOpen]);

//   useEffect(() => {
//     if (!sidebarOpen) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [sidebarOpen]);

//   const searchTargets = useMemo(() => {
//     const targets = navigation.map((item) => ({
//       label: item.label,
//       href: item.href,
//     }));

//     if (isAdmin) {
//       targets.push({
//         label: ADMIN_NAVIGATION.label,
//         href: ADMIN_NAVIGATION.href,
//       });
//     }

//     return targets;
//   }, [navigation, isAdmin]);

//   const filteredSearch = searchTargets.filter((item) =>
//     item.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
//   );

//   function handleLogout() {
//     logout();
//     router.push("/login");
//   }

//   function navigateTo(href: string) {
//     setSettingsOpen(false);
//     setNotifOpen(false);
//     setUserMenuOpen(false);
//     setSearchOpen(false);
//     router.push(href);
//   }

//   async function openNotification(notification: NotificationItem) {
//     // Hide the selected notification immediately.
//     setNotifications((current) =>
//       current.filter((item) => item.id !== notification.id)
//     );
//     setNotifOpen(false);

//     try {
//       await markEnquiryNotificationSeen(notification.enquiryId);
//     } catch (error) {
//       console.error("Unable to mark enquiry notification as read:", error);
//     } finally {
//       router.push("/furniture/enquiries");
//     }
//   }

//   async function clearAllNotifications() {
//     const ids = notifications.map((item) => item.enquiryId);

//     setNotifications([]);
//     setNotifOpen(false);

//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (error) {
//       console.error("Unable to clear enquiry notifications:", error);
//     }
//   }

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/35 lg:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[min(280px,86vw)] flex-col border-r border-[#e7e9e6] bg-white transition-transform duration-200 lg:w-[215px] ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[64px] shrink-0 items-center border-b border-[#edf0ed] px-4">
//           <Brand />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             aria-label="Close sidebar"
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <nav className="flex-1 overflow-y-auto px-[13px] pb-4 pt-3">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[1.4px] text-[#91a098]">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active =
//                 pathname === item.href ||
//                 (item.href !== "/furniture/products" &&
//                   pathname.startsWith(`${item.href}/`));

//               const isProducts = isFurniture && item.label === "Products";

//               return (
//                 <div key={item.href}>
//                   <div
//                     className={`flex min-h-[38px] items-center rounded-[9px] transition-colors ${
//                       active || (isProducts && productSectionActive)
//                         ? "bg-[#e8f5ef] text-[#126b57]"
//                         : "text-[#43544e] hover:bg-[#f5f7f5]"
//                     }`}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setSidebarOpen(false)}
//                       className={`flex min-w-0 flex-1 items-center gap-[11px] px-[11px] py-[9px] text-[12px] font-medium ${
//                         item.nested ? "ml-2 border-l border-[#e3eae5]" : ""
//                       }`}
//                     >
//                       <span
//                         className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] ${
//                           active
//                             ? "bg-[#176b57] text-white"
//                             : "bg-[#f0f3f5] text-[#6e8798]"
//                         }`}
//                       >
//                         {item.icon}
//                       </span>
//                       <span className="truncate">{item.label}</span>
//                       {active && (
//                         <span className="ml-auto h-[5px] w-[5px] shrink-0 rounded-full bg-[#176b57]" />
//                       )}
//                     </Link>

//                     {isProducts && (
//                       <button
//                         type="button"
//                         aria-label={productsOpen ? "Collapse products" : "Expand products"}
//                         aria-expanded={productsOpen}
//                         onClick={() => setProductsOpen((open) => !open)}
//                         className="mr-2 rounded-md p-1.5 text-slate-500 hover:bg-white"
//                       >
//                         {productsOpen ? (
//                           <span className="text-sm">⌄</span>
//                         ) : (
//                           <span className="text-sm">›</span>
//                         )}
//                       </button>
//                     )}
//                   </div>

//                   {isProducts && productsOpen && (
//                     <div className="ml-[14px] mt-1 space-y-1 border-l border-[#e3eae5] pl-[9px]">
//                       {furnitureNavigation
//                         .filter((child) => child.nested)
//                         .map((child) => {
//                           const childActive =
//                             pathname === child.href ||
//                             pathname.startsWith(`${child.href}/`);

//                           return (
//                             <Link
//                               key={child.href}
//                               href={child.href}
//                               onClick={() => setSidebarOpen(false)}
//                               className={`flex min-h-[37px] items-center gap-[10px] rounded-[8px] px-[10px] py-2 text-[11.5px] transition-colors ${
//                                 childActive
//                                   ? "bg-[#e8f5ef] font-semibold text-[#176b57]"
//                                   : "text-[#52645d] hover:bg-[#f5f7f5]"
//                               }`}
//                             >
//                               <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#f0f3f5] text-[#71899a]">
//                                 {child.icon}
//                               </span>
//                               {child.label}
//                             </Link>
//                           );
//                         })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {isAdmin && (
//             <div className="mb-2 mt-4 border-t border-[#edf0ed] pt-3">
//               <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[1.4px] text-[#91a098]">
//                 Administration
//               </p>

//               <Link
//                 href={ADMIN_NAVIGATION.href}
//                 onClick={() => setSidebarOpen(false)}
//                 className={`flex min-h-[38px] items-center gap-[11px] rounded-[9px] px-[11px] py-[9px] text-[12px] font-medium ${
//                   pathname.startsWith("/admin/users")
//                     ? "bg-[#e8f5ef] text-[#176b57]"
//                     : "text-[#43544e] hover:bg-[#f5f7f5]"
//                 }`}
//               >
//                 <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-[#f0f3f5] text-[#6e8798]">
//                   {ADMIN_NAVIGATION.icon}
//                 </span>
//                 Staff Users
//               </Link>
//             </div>
//           )}
//         </nav>

//         <div className="shrink-0 border-t border-[#edf0ed] p-[10px]">
//           <div className="flex items-center gap-2.5 rounded-[10px] bg-[#f7f9f8] px-[11px] py-[10px]">
//             <div className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#176b57] text-[11px] font-semibold text-white">
//               {avatarLetter}
//             </div>
//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[11px] font-semibold text-[#263a33]">
//                 {displayName}
//               </p>
//               <p className="mt-0.5 truncate text-[9px] text-[#91a098]">
//                 {displayRole}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={handleLogout}
//               title="Logout"
//               aria-label="Logout"
//               className="flex h-7 w-7 items-center justify-center rounded-md text-[#8b9b95] hover:bg-[#e8f5ef] hover:text-[#176b57]"
//             >
//               <LogOut size={14} />
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Header and page content */}
//       <div className="min-h-screen min-w-0 lg:pl-[215px]">
//         <header className="sticky top-0 z-30 flex h-[64px] items-center justify-between gap-2 border-b border-[#e7e9e6] bg-white px-3 sm:px-5 lg:px-[22px]">
//           <div className="flex min-w-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               aria-label="Open navigation"
//               className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
//             >
//               <Menu size={19} />
//             </button>

//             <div className="min-w-0">
//               <p className="truncate text-[9px] font-medium uppercase tracking-[0.8px] text-[#8a9a93]">
//                 {moduleName}
//               </p>
//               <h1 className="truncate text-[12px] font-semibold text-[#27362f]">
//                 {pageTitle}
//               </h1>
//             </div>
//           </div>

//           <div
//             ref={headerActionsRef}
//             className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
//           >
//             <HeaderModuleSwitcher
//               isFurniture={isFurniture}
//               canInterior={canInterior}
//               canFurniture={canFurniture}
//             />

//             {/* Search */}
//             <button
//               type="button"
//               onClick={() => {
//                 setSearchOpen(true);
//                 setNotifOpen(false);
//                 setSettingsOpen(false);
//                 setUserMenuOpen(false);
//               }}
//               aria-label="Search"
//               title="Search"
//               className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//             >
//               <Search size={18} />
//             </button>

//             {/* Enquiry notifications */}
//             {isFurniture && canFurniture && (
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setNotifOpen((open) => !open);
//                     setSettingsOpen(false);
//                     setUserMenuOpen(false);
//                     setSearchOpen(false);
//                   }}
//                   aria-label="Notifications"
//                   aria-expanded={notifOpen}
//                   title="Notifications"
//                   className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 >
//                   <Bell size={18} />
//                   {notifications.length > 0 && (
//                     <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                       {notifications.length > 9 ? "9+" : notifications.length}
//                     </span>
//                   )}
//                 </button>

//                 {notifOpen && (
//                   <div className="absolute right-0 z-[70] mt-2 w-[min(340px,calc(100vw-24px))] overflow-hidden rounded-[14px] border border-[#e1e7ef] bg-white shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
//                     <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         Notifications
//                       </p>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={clearAllNotifications}
//                           className="text-xs font-medium text-[#176b57] hover:underline"
//                         >
//                           Clear all
//                         </button>
//                       )}
//                     </div>

//                     <div className="max-h-[min(360px,55vh)] overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-9 text-center">
//                           <Bell size={26} className="mx-auto mb-2 text-slate-300" />
//                           <p className="text-sm font-medium text-slate-600">
//                             No notifications
//                           </p>
//                           <p className="mt-1 text-xs text-slate-400">
//                             New website enquiries will appear here.
//                           </p>
//                         </div>
//                       ) : (
//                         notifications.map((notification) => (
//                           <button
//                             key={notification.id}
//                             type="button"
//                             onClick={() => openNotification(notification)}
//                             className="flex w-full flex-col gap-1 border-b border-slate-100 bg-[#f4fbf8] px-4 py-3 text-left hover:bg-[#eaf6f0]"
//                           >
//                             <div className="flex w-full items-center justify-between gap-2">
//                               <span className="text-sm font-semibold text-slate-800">
//                                 {notification.title}
//                               </span>
//                               <span className="shrink-0 text-[10px] text-slate-400">
//                                 {notification.time}
//                               </span>
//                             </div>
//                             <span className="text-xs leading-5 text-slate-500">
//                               {notification.body}
//                             </span>
//                             <span className="mt-1 text-[11px] font-semibold text-[#176b57]">
//                               View enquiry →
//                             </span>
//                           </button>
//                         ))
//                       )}
//                     </div>

//                     {notifications.length > 0 && (
//                       <button
//                         type="button"
//                         onClick={() => navigateTo("/furniture/enquiries")}
//                         className="w-full border-t border-slate-100 px-4 py-3 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                       >
//                         View all enquiries
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Settings dropdown: dynamically follows the current module */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSettingsOpen((open) => !open);
//                   setNotifOpen(false);
//                   setUserMenuOpen(false);
//                   setSearchOpen(false);
//                 }}
//                 aria-label="Settings"
//                 aria-expanded={settingsOpen}
//                 title="Settings"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//               >
//                 <Settings size={18} />
//               </button>

//               {settingsOpen && (
//                 <div className="absolute right-0 top-full z-[70] mt-2 w-[230px] overflow-hidden rounded-[14px] border border-[#e1e7ef] bg-white py-1 shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
//                   {isAdmin && (
//                     <button
//                       type="button"
//                       onClick={() => navigateTo("/admin/users")}
//                       className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
//                     >
//                       <Users size={14} />
//                       <span>Staff Users</span>
//                     </button>
//                   )}

//                   <button
//                     type="button"
//                     onClick={() =>
//                       navigateTo(
//                         isFurniture ? "/furniture/reports" : "/interior/reports"
//                       )
//                     }
//                     className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
//                   >
//                     Reports
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       navigateTo(
//                         isFurniture
//                           ? "/furniture/dashboard"
//                           : "/interior/dashboard"
//                       )
//                     }
//                     className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
//                   >
//                     {isFurniture ? "Furniture Dashboard" : "Interior Dashboard"}
//                   </button>

//                   <div className="my-1 border-t border-[#edf0f4]" />

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSettingsOpen(false);
//                       handleLogout();
//                     }}
//                     className="flex min-h-[44px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-red-500 transition-colors hover:bg-red-50"
//                   >
//                     <LogOut size={14} />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* User menu */}
//             <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setUserMenuOpen((open) => !open);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setSearchOpen(false);
//                 }}
//                 aria-label="User menu"
//                 aria-expanded={userMenuOpen}
//                 className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//               >
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
//                   {avatarLetter}
//                 </div>
//                 <div className="hidden min-w-0 text-left md:block">
//                   <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
//                     {displayName}
//                   </p>
//                   <p className="text-[10px] text-slate-400">{displayRole}</p>
//                 </div>
//               </button>

//               {userMenuOpen && (
//                 <div className="absolute right-0 z-[70] mt-2 w-[min(230px,calc(100vw-24px))] overflow-hidden rounded-[14px] border border-[#e1e7ef] bg-white py-1 shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
//                   <div className="border-b border-slate-100 px-4 py-3">
//                     <p className="text-sm font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-xs text-slate-400">{displayRole}</p>
//                   </div>

//                   {isAdmin && (
//                     <button
//                       type="button"
//                       onClick={() => navigateTo("/admin/users")}
//                       className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-slate-700 hover:bg-slate-50"
//                     >
//                       <Users size={14} />
//                       Staff Users
//                     </button>
//                   )}

//                   <button
//                     type="button"
//                     onClick={() => navigateTo(isFurniture ? "/furniture/reports" : "/interior/reports")}
//                     className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-slate-700 hover:bg-slate-50"
//                   >
//                     Reports
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       navigateTo(
//                         isFurniture
//                           ? "/furniture/dashboard"
//                           : "/interior/dashboard"
//                       )
//                     }
//                     className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-slate-700 hover:bg-slate-50"
//                   >
//                     {isFurniture ? "Furniture Dashboard" : "Interior Dashboard"}
//                   </button>

//                   <div className="my-1 border-t border-slate-100" />

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setUserMenuOpen(false);
//                       handleLogout();
//                     }}
//                     className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-red-500 hover:bg-red-50"
//                   >
//                     <LogOut size={14} />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* Search dialog */}
//         {searchOpen && (
//           <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/40 p-3 pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
//               <form
//                 onSubmit={(event) => {
//                   event.preventDefault();
//                   const match = filteredSearch[0];
//                   const search = searchQuery.trim();

//                   if (match) {
//                     router.push(
//                       search
//                         ? `${match.href}?search=${encodeURIComponent(search)}`
//                         : match.href
//                     );
//                   }

//                   setSearchOpen(false);
//                   setSearchQuery("");
//                 }}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="shrink-0 text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(event) => setSearchQuery(event.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 min-w-0 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   aria-label="Close search"
//                   className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>

//               <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const search = searchQuery.trim();

//                         router.push(
//                           search
//                             ? `${item.href}?search=${encodeURIComponent(search)}`
//                             : item.href
//                         );

//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <main className="min-h-[calc(100vh-64px)] min-w-0 overflow-x-hidden bg-[#f7f7f4] p-3 sm:p-5 lg:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LogOut,
  Users,
  Search,
  Bell,
  Settings,
  X,
  Sofa,
  LayoutDashboard,
} from "lucide-react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  type Timestamp,
} from "firebase/firestore";
import { useAuth } from "@/core/auth/AuthContext";
import { db } from "@/core/config/firebaseClient";
import {
  markEnquiryNotificationSeen,
  markEnquiryNotificationsSeen,
} from "@/modules/furniture/services/enquiryService";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  nested?: boolean;
};

const navigation: NavItem[] = [
  { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
    { label: "CRM", href: "/interior/crm", icon: "♟" },
    { label: "HRMS", href: "/interior/hrms", icon: "♟" },
  { label: "Clients", href: "/interior/clients", icon: "♙" },
  { label: "Quotations", href: "/interior/quotations", icon: "▤" },
  { label: "Contracts", href: "/interior/contracts", icon: "▥" },
  { label: "Projects", href: "/interior/projects", icon: "▣" },
  { label: "Vendors", href: "/interior/vendors", icon: "◆" },
  { label: "Payments", href: "/interior/payments", icon: "₹" },
  { label: "Reports", href: "/interior/reports", icon: "▥" },
];

const furnitureNavigation: NavItem[] = [
  { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
  { label: "Products", href: "/furniture/products", icon: "▤" },
  {
    label: "Categories",
    href: "/furniture/categories",
    icon: "☰",
    nested: true,
  },
  {
    label: "Sub Categories",
    href: "/furniture/sub-categories",
    icon: "▤",
    nested: true,
  },
  {
    label: "Materials",
    href: "/furniture/materials",
    icon: "◆",
    nested: true,
  },
  {
    label: "Finishes",
    href: "/furniture/finishes",
    icon: "▣",
    nested: true,
  },
  { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
  { label: "Customers", href: "/furniture/customers", icon: "♙" },
  { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
  { label: "Orders", href: "/furniture/orders", icon: "▥" },
  { label: "Payments", href: "/furniture/payments", icon: "₹" },
  { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
  // { label: "Delivery", href: "/furniture/settings/delivery", icon: "" },
  { label: "Delivery", href: "/furniture/settings/delivery", icon: "↗" },
  { label: "Reports", href: "/furniture/reports", icon: "▥" },
];

type NotificationItem = {
  id: string;
  title: string;
  body: string;
  href: string;
  time: string;
  read: boolean;
  enquiryId: string;
};

const ENQUIRIES_COLLECTION = "furniture_enquiries";

function formatRelativeTime(value: unknown): string {
  let date: Date | null = null;
  if (value && typeof value === "object" && "toDate" in (value as object)) {
    try {
      date = (value as Timestamp).toDate();
    } catch {
      date = null;
    }
  } else if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  }
  if (!date || Number.isNaN(date.getTime())) return "Just now";

  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function getPageTitle(pathname: string) {
  const allItems = [...navigation, ...furnitureNavigation];
  const item = allItems.find(
    (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
  );
  if (pathname.startsWith("/admin/users")) return "Staff Users";
  return item?.label ?? "Dashboard";
}

function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
        <span className="text-lg font-bold">A</span>
      </div>
      <div className="min-w-0 leading-none">
        <div className="truncate text-[18px] font-bold tracking-tight text-[#1f2937] sm:text-[20px]">
          Akrish
        </div>
        <div className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
          Furniture and Interior
        </div>
      </div>
    </div>
  );
}

function HeaderModuleSwitcher({
  isFurniture,
  canInterior,
  canFurniture,
}: {
  isFurniture: boolean;
  canInterior: boolean;
  canFurniture: boolean;
}) {
  return (
    <div
      className="relative flex h-[42px] shrink-0 items-center rounded-full border border-[#e0e6ef] bg-[#f8fafc] p-[3px] shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
      role="group"
      aria-label="Switch ERP module"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[3px] top-[3px] w-[calc(50%-3px)] rounded-full border border-[#e4e9f0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-all duration-200"
        style={{ left: isFurniture ? "calc(50% + 0px)" : "3px" }}
      />
      <Link
        href="/interior/dashboard"
        title="Interior ERP"
        className={`relative z-10 flex h-full items-center justify-center gap-1.5 rounded-full px-3 text-[13px] font-semibold transition-colors ${
          !isFurniture ? "text-[#176b57]" : "text-[#64748b] hover:text-slate-800"
        }`}
      >
        <LayoutDashboard size={15} />
        <span>Interior</span>
      </Link>
      <Link
        href="/furniture/dashboard"
        title="Furniture ERP"
        className={`relative z-10 flex h-full items-center justify-center gap-1.5 rounded-full px-3 text-[13px] font-semibold transition-colors ${
          isFurniture ? "text-[#08775f]" : "text-[#64748b] hover:text-slate-800"
        }`}
      >
        <Sofa size={15} />
        <span>Furniture</span>
      </Link>
    </div>
  );
}

export default function ERPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

  const canInterior = hasModule("interior");
  const canFurniture = hasModule("furniture");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [contentVisible, setContentVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerActionsRef = useRef<HTMLDivElement>(null);

  const isFurniture =
    pathname === "/furniture" || pathname.startsWith("/furniture/");
  const currentModule: "interior" | "furniture" = isFurniture
    ? "furniture"
    : "interior";
  const currentNavigation = isFurniture ? furnitureNavigation : navigation;
  const pageTitle = getPageTitle(pathname);
  const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
  const moduleKey = isFurniture ? "furniture" : "interior";

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    setSidebarOpen(false);
    setNotifOpen(false);
    setSettingsOpen(false);
    setUserMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (isLoading || !user) return;

    if (pathname.startsWith("/furniture") && !canFurniture) {
      router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
      return;
    }

    if (pathname.startsWith("/interior") && !canInterior) {
      router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
    }
  }, [isLoading, user, pathname, canInterior, canFurniture, router]);

  useEffect(() => {
    if (!canFurniture) {
      setNotifications([]);
      setNotifOpen(false);
      return;
    }

    let unsub: (() => void) | undefined;

    try {
      const q = query(
        collection(db, ENQUIRIES_COLLECTION),
        orderBy("createdAt", "desc"),
        limit(25)
      );

      unsub = onSnapshot(
        q,
        (snapshot) => {
          const items: NotificationItem[] = [];

          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const status = String(data.status || "New").trim().toLowerCase();
            const seen = data.notificationSeen === true;

            if (status !== "new") return;
            if (seen) return;

            const name =
              String(data.customerName || data.name || "Customer").trim() ||
              "Customer";
            const product = String(
              data.productName || data.productCode || ""
            ).trim();
            const source = String(data.source || "Website").trim();
            const message = String(data.message || "").trim();

            items.push({
              id: `enq-${docSnap.id}`,
              enquiryId: docSnap.id,
              title: "New enquiry",
              body: product
                ? `${name} · ${product}${source ? ` · ${source}` : ""}`
                : message
                  ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
                  : `${name} sent a contact request${source ? ` (${source})` : ""}`,
              href: "/furniture/enquiries",
              time: formatRelativeTime(data.createdAt),
              read: false,
            });
          });

          setNotifications(items);
        },
        (err) => {
          console.error("Enquiry notifications listener error:", err);
        }
      );
    } catch (err) {
      console.error("Failed to start enquiry notifications:", err);
    }

    return () => {
      unsub?.();
    };
  }, [canFurniture]);

  useEffect(() => {
    const prev = prevModuleRef.current;
    if (prev !== null && prev !== currentModule) {
      setContentVisible(false);
      const t = window.setTimeout(() => {
        setDisplayChildren(children);
        setContentVisible(true);
      }, 180);
      prevModuleRef.current = currentModule;
      return () => window.clearTimeout(t);
    }
    setDisplayChildren(children);
    setContentVisible(true);
    prevModuleRef.current = currentModule;
  }, [children, currentModule]);

  const unreadCount = notifications.length;

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        headerActionsRef.current &&
        !headerActionsRef.current.contains(e.target as Node)
      ) {
        setNotifOpen(false);
        setSettingsOpen(false);
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setNotifOpen(false);
        setSettingsOpen(false);
        setUserMenuOpen(false);
        setSidebarOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const searchTargets = useMemo(() => {
    const base = isFurniture
      ? [
          { label: "Products", href: "/furniture/products" },
          { label: "Inventory", href: "/furniture/inventory" },
          { label: "Categories", href: "/furniture/categories" },
          { label: "Sub Categories", href: "/furniture/sub-categories" },
          { label: "Materials", href: "/furniture/materials" },
          { label: "Finishes", href: "/furniture/finishes" },
          { label: "Customers", href: "/furniture/customers" },
          { label: "Enquiries", href: "/furniture/enquiries" },
          { label: "Orders", href: "/furniture/orders" },
          { label: "Payments", href: "/furniture/payments" },
          { label: "Expenses", href: "/furniture/expenses" },
          { label: "Reports", href: "/furniture/reports" },
        ]
      : [
          { label: "CRM / Leads", href: "/interior/crm" },
          { label: "Clients", href: "/interior/clients" },
          { label: "Quotations", href: "/interior/quotations" },
          { label: "Contracts", href: "/interior/contracts" },
          { label: "Projects", href: "/interior/projects" },
          { label: "HRMS", href: "/interior/hrms" },
          { label: "Vendors", href: "/interior/vendors" },
          { label: "Payments", href: "/interior/payments" },
          { label: "Reports", href: "/interior/reports" },
        ];

    if (isAdmin) {
      base.push({ label: "Staff Users", href: "/admin/users" });
    }
    return base;
  }, [isFurniture, isAdmin]);

  const filteredSearch = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return searchTargets;
    return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
  }, [searchQuery, searchTargets]);

  function runSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    const match = filteredSearch[0];
    if (match) {
      router.push(`${match.href}?search=${encodeURIComponent(q)}`);
    } else if (isFurniture) {
      router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
    } else {
      router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
    }
    setSearchOpen(false);
    setSearchQuery("");
  }

  async function openNotification(n: NotificationItem) {
    // Clear it immediately in the UI so the badge disappears without waiting
    // for Firestore, then persist the read state for future sessions/devices.
    setNotifications((list) => list.filter((item) => item.id !== n.id));
    setNotifOpen(false);

    try {
      await markEnquiryNotificationSeen(n.enquiryId);
    } catch (err) {
      console.error("Failed to mark notification seen:", err);
    } finally {
      // Every new website enquiry takes the admin directly to Enquiries.
      router.push("/furniture/enquiries");
    }
  }

  async function markAllRead() {
    const ids = notifications.map((n) => n.enquiryId);
    setNotifications([]);
    setNotifOpen(false);
    try {
      await markEnquiryNotificationsSeen(ids);
    } catch (err) {
      console.error("Failed to clear notifications:", err);
    }
  }

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const displayName = user?.name || "User";
  const displayRole = user?.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
    : "Staff";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden"
        />
      )}

      {/* Sidebar — floating card on mobile, docked on desktop */}
      <aside
        className={`
          fixed z-50 flex flex-col bg-white
          transition-all duration-250 ease-out
          /* mobile floating */
          left-3 top-3 bottom-3 w-[min(17.5rem,calc(100vw-1.5rem))]
          rounded-2xl border border-white/80
          shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-slate-900/5
          /* desktop docked */
          lg:left-0 lg:top-0 lg:bottom-0 lg:w-[215px]
          lg:rounded-none lg:border-0 lg:border-r lg:border-slate-200
          lg:shadow-none lg:ring-0
          ${
            sidebarOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-[calc(100%+1.5rem)] opacity-0 pointer-events-none lg:pointer-events-auto lg:translate-x-0 lg:opacity-100"
          }
        `}
        style={{
          animation: sidebarOpen ? "akrishSidebarIn 0.22s ease-out" : undefined,
        }}
      >
        <div className="flex h-14 shrink-0 items-center border-b border-slate-100 px-4 sm:h-[64px] sm:px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-2 flex-1 overflow-y-auto overscroll-contain px-2.5 pb-3 sm:mt-3 sm:px-3">
          <p
            key={moduleKey + "-label"}
            className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400"
          >
            {isFurniture ? "Furniture Management" : "Interior Management"}
          </p>

          <div key={moduleKey + "-nav"} className="space-y-0.5 sm:space-y-1">
            {currentNavigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 sm:min-h-0 sm:rounded-lg ${
                    item.nested ? "ml-2 border-l border-slate-200 pl-3" : ""
                  } ${
                    active
                      ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] transition-colors duration-200 sm:h-6 sm:w-6 ${
                      active
                        ? "bg-[#176b57] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#176b57]" />
                  )}
                </Link>
              );
            })}

            {isAdmin && (
              <>
                <div className="my-3 border-t border-slate-100" />
                <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Administration
                </p>
                <Link
                  href="/admin/users"
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 sm:min-h-0 sm:rounded-lg ${
                    pathname.startsWith("/admin/users")
                      ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-200 sm:h-6 sm:w-6 ${
                      pathname.startsWith("/admin/users")
                        ? "bg-[#176b57] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <Users size={14} />
                  </span>
                  <span>Staff Users</span>
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="shrink-0 border-t border-slate-100 p-2.5 sm:p-3">
          <div className="rounded-xl bg-slate-50 p-2.5 sm:rounded-lg sm:p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white sm:h-8 sm:w-8">
                {avatarLetter}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {displayName}
                </p>
                <p className="truncate text-[10px] text-slate-400">
                  {displayRole}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 sm:h-7 sm:w-7"
                title="Logout"
              >
                <LogOut size={14} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[215px]">
        <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-[64px]">
          <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-4 md:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
                aria-label="Open navigation"
              >
                ☰
              </button>

              {/* <div key={moduleKey + "-title"} className="min-w-0">
                <p className="hidden text-[10px] uppercase tracking-wide text-slate-400 sm:block">
                  {moduleName}
                </p>
                <h1 className="truncate text-sm font-semibold text-slate-800">
                  {pageTitle}
                </h1>
              </div> */}

              <div key={moduleKey + "-title"} className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  {moduleName}
                </p>
                <h1 className="truncate text-sm font-semibold leading-tight text-slate-800">
                  {pageTitle}
                </h1>
              </div>
            </div>

            <div
              ref={headerActionsRef}
              className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
            >
              <HeaderModuleSwitcher
                isFurniture={isFurniture}
                canInterior={canInterior}
                canFurniture={canFurniture}
              />

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(true);
                  setNotifOpen(false);
                  setSettingsOpen(false);
                  setUserMenuOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {canFurniture && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setNotifOpen((v) => !v);
                      setSettingsOpen(false);
                      setUserMenuOpen(false);
                    }}
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
                    aria-label="Notifications"
                  >
                    <Bell size={18} />
                    {unreadCount > 0 && (
                      <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </button>

                  {notifOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                        <p className="text-sm font-semibold text-slate-800">
                          Notifications
                        </p>
                        {notifications.length > 0 && (
                          <button
                            type="button"
                            onClick={markAllRead}
                            className="text-xs font-medium text-[#176b57] hover:underline"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                      <div className="max-h-[min(18rem,50vh)] overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-10 text-center">
                            <Bell
                              size={28}
                              className="mx-auto mb-2 text-slate-300"
                            />
                            <p className="text-sm font-medium text-slate-600">
                              No notifications
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              New website enquiries will appear here
                            </p>
                          </div>
                        ) : (
                          notifications.map((n) => (
                            <button
                              key={n.id}
                              type="button"
                              onClick={() => openNotification(n)}
                              className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-semibold text-slate-800">
                                  {n.title}
                                </p>
                                <span className="shrink-0 text-[10px] text-slate-400">
                                  {n.time}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500">{n.body}</p>
                            </button>
                          ))
                        )}
                      </div>
                      {notifications.length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setNotifOpen(false);
                            router.push("/furniture/enquiries");
                          }}
                          className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
                        >
                          View all enquiries
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setSettingsOpen((open) => !open);
                    setNotifOpen(false);
                    setUserMenuOpen(false);
                    setSearchOpen(false);
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
                  aria-label="Settings"
                  aria-expanded={settingsOpen}
                  title="Settings"
                >
                  <Settings size={18} />
                </button>

                {settingsOpen && (
                  <div className="absolute right-0 top-full z-[70] mt-2 w-[230px] overflow-hidden rounded-[14px] border border-[#e1e7ef] bg-white py-1 shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => {
                          setSettingsOpen(false);
                          router.push("/admin/users");
                        }}
                        className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
                      >
                        <Users size={14} />
                        <span>Staff Users</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        router.push(isFurniture ? "/furniture/reports" : "/interior/reports");
                      }}
                      className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
                    >
                      <span>Reports</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        router.push(isFurniture ? "/furniture/dashboard" : "/interior/dashboard");
                      }}
                      className="flex min-h-[40px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-[#334155] transition-colors hover:bg-[#f8fafc]"
                    >
                      <span>{isFurniture ? "Furniture Dashboard" : "Interior Dashboard"}</span>
                    </button>
                    <div className="my-1 border-t border-[#edf0f4]" />
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        handleLogout();
                      }}
                      className="flex min-h-[44px] w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-red-500 transition-colors hover:bg-red-50"
                    >
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
                <button
                  type="button"
                  onClick={() => {
                    setUserMenuOpen((v) => !v);
                    setNotifOpen(false);
                    setSettingsOpen(false);
                  }}
                  className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
                    {avatarLetter}
                  </div>
                  <div className="hidden min-w-0 text-left md:block">
                    <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
                      {displayName}
                    </p>
                    <p className="text-[10px] text-slate-400">{displayRole}</p>
                  </div>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                    <div className="border-b border-slate-100 px-4 py-3">
                      <p className="text-sm font-semibold text-slate-800">
                        {displayName}
                      </p>
                      <p className="text-xs text-slate-400">{displayRole}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
                        {moduleKey} module
                      </p>
                    </div>
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          router.push("/admin/users");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <Users size={14} />
                        Manage users
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        handleLogout();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {searchOpen && (
          <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-3 pt-[max(10vh,env(safe-area-inset-top))] sm:p-4 sm:pt-[12vh]">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
              <form
                onSubmit={runSearch}
                className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4"
              >
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search in ${moduleName}…`}
                  className="h-10 min-w-0 flex-1 border-0 bg-transparent text-base outline-none sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <X size={16} />
                </button>
              </form>
              <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
                {filteredSearch.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-slate-500">
                    No matching pages
                  </p>
                ) : (
                  filteredSearch.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => {
                        const q = searchQuery.trim();
                        router.push(
                          q
                            ? `${item.href}?search=${encodeURIComponent(q)}`
                            : item.href
                        );
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 sm:py-2.5"
                    >
                      <span>{item.label}</span>
                      <span className="hidden shrink-0 text-[10px] text-slate-400 sm:inline">
                        {item.href}
                      </span>
                    </button>
                  ))
                )}
              </div>
              <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
                Enter to open · Esc to close
              </div>
            </div>
          </div>
        )}

        <main
          className="min-h-[calc(100vh-3.5rem)] overflow-x-hidden px-3 py-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[calc(100vh-64px)] sm:p-6"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible
              ? "translateY(0) scale(1)"
              : "translateY(8px) scale(0.99)",
          }}
        >
          {displayChildren}
        </main>
      </div>

      <style jsx global>{`
        @keyframes akrishSidebarIn {
          from {
            opacity: 0.7;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes akrishNavIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes akrishTitleIn {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
