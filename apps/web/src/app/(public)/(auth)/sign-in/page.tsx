// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Building2,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
// } from "lucide-react";

// export default function SignInPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (
//     field: keyof typeof form,
//     value: string
//   ) => {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     setError("");
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this section to your authentication API/server
//        * action when backend authentication is available.
//        */
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       // Example:
//       // const response = await fetch("/api/auth/sign-in", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(form),
//       // });
//       //
//       // if (!response.ok) {
//       //   throw new Error("Invalid email or password.");
//       // }
//       //
//       // window.location.href = "/";

//       console.log("Sign-in submitted:", {
//         email,
//       });
//     } catch (signInError) {
//       console.error("Sign-in failed:", signInError);
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left panel */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-3"
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-900">
//                 VIP
//               </div>

//               <div>
//                 <p className="text-sm font-bold">
//                   VIP Interior
//                 </p>
//                 <p className="text-xs text-slate-400">
//                   Interior & Furniture
//                 </p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <Building2 size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to VIP Interior ERP.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to manage your interior projects,
//               clients, quotations, vendors, payments and
//               business operations.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Manage interior projects",
//                 "Track clients and quotations",
//                 "Manage vendors and payments",
//                 "Monitor business performance",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />

//                   <span className="text-sm text-slate-300">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} VIP Interior ERP
//           </p>
//         </div>

//         {/* Sign-in panel */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             {/* Mobile logo */}
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link
//                 href="/"
//                 className="inline-flex items-center gap-3"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//                   VIP
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold text-slate-900">
//                     VIP Interior
//                   </p>

//                   <p className="text-xs text-slate-500">
//                     Interior & Furniture
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Welcome back
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>

//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue to the
//                   VIP Interior ERP platform.
//                 </p>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700"
//                 >
//                   {error}
//                 </div>
//               )}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>

//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       autoFocus
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>

//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="password"
//                       name="password"
//                       type={
//                         showPassword ? "text" : "password"
//                       }
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(event) =>
//                         updateField(
//                           "password",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword((value) => !value)
//                       }
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
//                       aria-label={
//                         showPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Remember me */}
//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-slate-900"
//                   />

//                   <span className="text-xs text-slate-500">
//                     Remember me
//                   </span>
//                 </label>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       Signing in...
//                     </>
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-slate-900 hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
//               Secure access to your VIP Interior ERP
//               workspace.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real customer auth API later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       // Demo success
//       localStorage.setItem(
//         "user",
//         JSON.stringify({ name: "Customer", email })
//       );
//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left branding */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue shopping for beautiful furniture.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 size={17} className="shrink-0 text-emerald-400" />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label htmlFor="password" className="text-xs font-semibold text-slate-700">
//                       Password
//                     </label>
//                     <Link href="/forgot-password" className="text-xs font-semibold text-slate-600 hover:underline">
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]" />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link href="/register" className="font-semibold text-[#176b5b] hover:underline">
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       // Create a proper display name from email
//       // Example: "ram@gmail.com" → "Ram"
//       const nameFromEmail = email
//         .split("@")[0]
//         .replace(/[._]/g, " ")
//         .split(" ")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");

//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: nameFromEmail,
//           email: email,
//         })
//       );

//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left branding */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//   //   setLoading(true);

//   //   try {
//   //     const cred = await signInWithEmailAndPassword(
//   //       auth,
//   //       email,
//   //       form.password
//   //     );

//   //     const name =
//   //       cred.user.displayName ||
//   //       email
//   //         .split("@")[0]
//   //         .replace(/[._]/g, " ")
//   //         .split(" ")
//   //         .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//   //         .join(" ");

//   //     // Ensure ERP customer row exists (covers older local-only accounts)
//   //     await upsertCustomerFromAuth({
//   //       uid: cred.user.uid,
//   //       name,
//   //       email: cred.user.email || email,
//   //       photoURL: cred.user.photoURL || "",
//   //     });

//   //     localStorage.setItem(
//   //       "user",
//   //       JSON.stringify({
//   //         uid: cred.user.uid,
//   //         name,
//   //         email: cred.user.email || email,
//   //       })
//   //     );

//   //     window.location.href = "/account";
//   //   } catch (err: unknown) {
//   //     console.error(err);
//   //     const code =
//   //       err && typeof err === "object" && "code" in err
//   //         ? String((err as { code: string }).code)
//   //         : "";

//   //     if (
//   //       code === "auth/invalid-credential" ||
//   //       code === "auth/wrong-password" ||
//   //       code === "auth/user-not-found" ||
//   //       code === "auth/invalid-email"
//   //     ) {
//   //       setError("Invalid email or password. Please try again.");
//   //     } else {
//   //       setError("Unable to sign in. Please try again.");
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//       setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       const emailKey = email.toLowerCase();

//       // Prefer saved full profile from registration
//       const savedProfile = localStorage.getItem(`profile_${emailKey}`);

//       if (savedProfile) {
//         localStorage.setItem("user", savedProfile);
//       } else {
//         // Fallback: build name from email
//         const nameFromEmail = email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//         localStorage.setItem(
//           "user",
//           JSON.stringify({
//             name: nameFromEmail,
//             email: emailKey,
//             phone: "",
//             gender: "",
//           })
//         );
//       }

//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//             </div>
//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>
//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>
//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>
//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       // Default name from displayName or email
//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       // 1) Try furniture_customers/{uid}
//       try {
//         const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//         if (customerSnap.exists()) {
//           const data = customerSnap.data();
//           if (data.name) name = data.name;
//           if (data.phone) phone = String(data.phone);
//           if (data.gender) gender = String(data.gender);
//         }
//       } catch (e) {
//         console.warn("Could not load furniture_customers:", e);
//       }

//       // 2) Fallback: local profile cache from registration
//       if (!phone || !gender) {
//         const savedProfile = localStorage.getItem(`profile_${email}`);
//         if (savedProfile) {
//           try {
//             const parsed = JSON.parse(savedProfile);
//             if (!phone && parsed.phone) phone = parsed.phone;
//             if (!gender && parsed.gender) gender = parsed.gender;
//             if (parsed.name) name = parsed.name;
//           } catch {
//             // ignore
//           }
//         }
//       }

//       // Ensure ERP customer row exists
//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const userData = {
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//       };

//       localStorage.setItem("user", JSON.stringify(userData));
//       localStorage.setItem(`profile_${email}`, JSON.stringify(userData));

//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       // Session is Firebase Auth only — no localStorage
//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 size={17} className="shrink-0 text-emerald-400" />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         {/* Left panel — desktop only */}
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       // Block ERP staff from using the storefront login
//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (path === "/login" || path.startsWith("/erp") || path.startsWith("/interior")) {
//       return "/account/profile";
//     }
//     return path;
//   }
//   return "/account/profile";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       window.location.href = target;
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof error === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : err && typeof err === "object" && "code" in err
//             ? String((err as { code: string }).code)
//             : "";

//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// /** After customer login always prefer home; never send into ERP. */
// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       window.location.href = target;
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>
//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(
//   uid: string,
//   email: string
// ): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// /** Customer login should never redirect into the ERP. */
// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }

//     return path;
//   }

//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));
//     setError("");
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);

//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map(
//             (word) =>
//               word.charAt(0).toUpperCase() + word.slice(1)
//           )
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(
//         doc(db, "furniture_customers", uid)
//       );

//       if (customerSnap.exists()) {
//         const data = customerSnap.data();

//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(
//         searchParams.get("redirect")
//       );

//       // Navigate without forcing a full browser reload.
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);

//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />

//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>

//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">
//                   Furniture & Interior
//                 </p>
//               </div>
//             </Link>
//           </div>

//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and
//               continue shopping for beautiful furniture.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold text-slate-900">
//                     Akrish
//                   </p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>

//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>

//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>

//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-4 sm:space-y-5"
//               >
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>

//                   <div className="relative">
//                     <Mail
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) =>
//                         updateField("email", e.target.value)
//                       }
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>

//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) =>
//                         updateField("password", e.target.value)
//                       }
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(!showPassword)
//                       }
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         {/* Left brand panel — desktop */}
//         <div className="relative hidden overflow-hidden bg-[#0f2924] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,107,91,0.45),transparent_55%)]" />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />

//           {/* <div className="relative z-10">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white shadow-lg">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold tracking-tight">Akrish</p>
//                 <p className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/80">
//                   Furniture &amp; Interior
//                 </p>
//               </div>
//             </Link>
//           </div> */}

//           {/* <div className="relative z-10 max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
//               <ShoppingBag size={28} className="text-emerald-200" />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
//               Welcome back to
//               <br />
//               Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track orders, manage your wishlist, and continue
//               shopping for beautiful furniture.
//             </p>
//             <ul className="mt-8 space-y-3.5">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
//                     <CheckCircle2 size={15} className="text-emerald-300" />
//                   </span>
//                   <span className="text-sm text-slate-200">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//                   {/* Left brand panel — desktop */}
//         <div className="relative hidden overflow-hidden bg-[#0f2924] p-10 text-white lg:flex lg:flex-col lg:items-center lg:justify-center xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,107,91,0.45),transparent_55%)]" />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />

//           <div className="relative z-10 mx-auto max-w-lg text-center">
//             <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
//               <ShoppingBag size={28} className="text-emerald-200" />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
//               Welcome back to
//               <br />
//               Akrish Furniture.
//             </h1>

//             <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track orders, manage your wishlist, and continue
//               shopping for beautiful furniture.
//             </p>

//             <ul className="mx-auto mt-8 max-w-sm space-y-3.5 text-left">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
//                     <CheckCircle2 size={15} className="text-emerald-300" />
//                   </span>
//                   <span className="text-sm text-slate-200">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* <p className="mt-10 text-xs text-slate-500">
//               © {new Date().getFullYear()} Akrish Furniture
//             </p> */}
//           </div>
//         </div>

//           <p className="relative z-10 text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Right form */}
//         <div className="flex min-h-[100dvh] flex-col">
//           {/* Mobile top bar */}
//           <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
//             <Link href="/" className="inline-flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Akrish</p>
//                 <p className="text-[10px] text-slate-500">Furniture &amp; Interior</p>
//               </div>
//             </Link>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
//             >
//               <ArrowLeft size={14} />
//               Store
//             </Link>
//           </div>

//           <div className="flex flex-1 items-start justify-center px-4 pb-10 pt-8 sm:items-center sm:px-6 sm:py-12 lg:px-10">
//             <div className="w-full max-w-[420px]">
//               <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,41,36,0.08)]">
//                 <div className="border-b border-slate-100 bg-gradient-to-r from-[#f4fbf8] to-white px-5 py-5 sm:px-8 sm:py-6">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#176b5b]">
//                     Customer login
//                   </p>
//                   <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
//                     Sign in to your account
//                   </h2>
//                   <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
//                     Enter your email and password to continue shopping.
//                   </p>
//                 </div>

//                 <div className="px-5 py-6 sm:px-8 sm:py-7">
//                   {error && (
//                     <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                       {error}
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 block text-sm font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Go to Staff Login →
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-xs font-semibold text-slate-700"
//                       >
//                         Email address
//                       </label>
//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) => updateField("email", e.target.value)}
//                           placeholder="you@example.com"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-xs font-semibold text-slate-700"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="relative">
//                         <LockKeyhole
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#176b5b] hover:bg-[#f0f9f6]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={18} />
//                           ) : (
//                             <Eye size={18} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] text-sm font-semibold text-white shadow-sm transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {loading ? (
//                         "Signing in..."
//                       ) : (
//                         <>
//                           Sign in
//                           <ArrowRight size={16} />
//                         </>
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                     <p className="text-sm text-slate-500">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>
//                     <p className="mt-3 text-xs text-slate-400">
//                       Staff?{" "}
//                       <Link
//                         href="/login"
//                         className="font-medium text-slate-600 hover:text-[#176b5b] hover:underline"
//                       >
//                         Collective ERP login
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-6 hidden text-center text-xs text-slate-400 lg:block">
//                 <Link
//                   href="/"
//                   className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-[#176b5b]"
//                 >
//                   <ArrowLeft size={14} />
//                   Back to website
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         {/* Left brand panel — centered content */}
//         <div className="relative hidden overflow-hidden bg-[#0f2924] p-10 text-white lg:flex lg:flex-col lg:items-center lg:justify-center xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,107,91,0.45),transparent_55%)]" />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />

//           <div className="relative z-10 mx-auto max-w-lg text-center">
//             <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
//               <ShoppingBag size={28} className="text-emerald-200" />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
//               Welcome back to
//               <br />
//               Akrish Furniture.
//             </h1>

//             <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track orders, manage your wishlist, and continue
//               shopping for beautiful furniture.
//             </p>

//             <ul className="mx-auto mt-8 max-w-sm space-y-3.5 text-left">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
//                     <CheckCircle2 size={15} className="text-emerald-300" />
//                   </span>
//                   <span className="text-sm text-slate-200">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <p className="mt-10 text-xs text-slate-500">
//               © {new Date().getFullYear()} Akrish Furniture
//             </p>
//           </div>
//         </div>

//         {/* Right form */}
//         <div className="flex min-h-[100dvh] flex-col">
//           <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
//             <Link href="/" className="inline-flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Akrish</p>
//                 <p className="text-[10px] text-slate-500">
//                   Furniture &amp; Interior
//                 </p>
//               </div>
//             </Link>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
//             >
//               <ArrowLeft size={14} />
//               Store
//             </Link>
//           </div>

//           <div className="flex flex-1 items-start justify-center px-4 pb-10 pt-8 sm:items-center sm:px-6 sm:py-12 lg:px-10">
//             <div className="w-full max-w-[420px]">
//               <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,41,36,0.08)]">
//                 <div className="border-b border-slate-100 bg-gradient-to-r from-[#f4fbf8] to-white px-5 py-5 sm:px-8 sm:py-6">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#176b5b]">
//                     Customer login
//                   </p>
//                   <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
//                     Sign in to your account
//                   </h2>
//                   <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
//                     Enter your email and password to continue shopping.
//                   </p>
//                 </div>

//                 <div className="px-5 py-6 sm:px-8 sm:py-7">
//                   {error && (
//                     <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                       {error}
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 block text-sm font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Go to Staff Login →
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form
//                     onSubmit={handleSubmit}
//                     className="space-y-4 sm:space-y-5"
//                   >
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-xs font-semibold text-slate-700"
//                       >
//                         Email address
//                       </label>
//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) =>
//                             updateField("email", e.target.value)
//                           }
//                           placeholder="you@example.com"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-xs font-semibold text-slate-700"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="relative">
//                         <LockKeyhole
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#176b5b] hover:bg-[#f0f9f6]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={18} />
//                           ) : (
//                             <Eye size={18} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] text-sm font-semibold text-white shadow-sm transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {loading ? (
//                         "Signing in..."
//                       ) : (
//                         <>
//                           Sign in
//                           <ArrowRight size={16} />
//                         </>
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                     <p className="text-sm text-slate-500">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>
//                     <p className="mt-3 text-xs text-slate-400">
//                       Staff?{" "}
//                       <Link
//                         href="/login"
//                         className="font-medium text-slate-600 hover:text-[#176b5b] hover:underline"
//                       >
//                         Collective ERP login
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-6 hidden text-center text-xs text-slate-400 lg:block">
//                 <Link
//                   href="/"
//                   className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-[#176b5b]"
//                 >
//                   <ArrowLeft size={14} />
//                   Back to website
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[100dvh] overflow-hidden bg-[#f7f9f8]">
//       <div className="grid h-full min-h-0 lg:grid-cols-2">
//         {/* Left brand panel — centered */}
//         <div className="relative hidden h-full overflow-hidden bg-[#0f2924] p-10 text-white lg:flex lg:flex-col lg:items-center lg:justify-center xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,107,91,0.45),transparent_55%)]" />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />

//           <div className="relative z-10 mx-auto max-w-lg text-center">
//             <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
//               <ShoppingBag size={28} className="text-emerald-200" />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
//               Welcome back to
//               <br />
//               Akrish Furniture.
//             </h1>

//             <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track orders, manage your wishlist, and continue
//               shopping for beautiful furniture.
//             </p>

//             <ul className="mx-auto mt-8 max-w-sm space-y-3.5 text-left">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
//                     <CheckCircle2 size={15} className="text-emerald-300" />
//                   </span>
//                   <span className="text-sm text-slate-200">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <p className="mt-10 text-xs text-slate-500">
//               © {new Date().getFullYear()} Akrish Furniture
//             </p>
//           </div>
//         </div>

//         {/* Right form */}
//         <div className="flex h-full min-h-0 flex-col overflow-hidden">
//           <div className="flex shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
//             <Link href="/" className="inline-flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Akrish</p>
//                 <p className="text-[10px] text-slate-500">
//                   Furniture &amp; Interior
//                 </p>
//               </div>
//             </Link>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
//             >
//               <ArrowLeft size={14} />
//               Store
//             </Link>
//           </div>

//           <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             <div className="w-full max-w-[420px]">
//               <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,41,36,0.08)]">
//                 <div className="border-b border-slate-100 bg-gradient-to-r from-[#f4fbf8] to-white px-5 py-5 sm:px-8 sm:py-6">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#176b5b]">
//                     Customer login
//                   </p>
//                   <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
//                     Sign in to your account
//                   </h2>
//                   <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
//                     Enter your email and password to continue shopping.
//                   </p>
//                 </div>

//                 <div className="px-5 py-6 sm:px-8 sm:py-7">
//                   {error && (
//                     <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                       {error}
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 block text-sm font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Go to Staff Login →
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form
//                     onSubmit={handleSubmit}
//                     className="space-y-4 sm:space-y-5"
//                   >
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-xs font-semibold text-slate-700"
//                       >
//                         Email address
//                       </label>
//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) =>
//                             updateField("email", e.target.value)
//                           }
//                           placeholder="you@example.com"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-xs font-semibold text-slate-700"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="relative">
//                         <LockKeyhole
//                           size={17}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#176b5b] hover:bg-[#f0f9f6]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={18} />
//                           ) : (
//                             <Eye size={18} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] text-sm font-semibold text-white shadow-sm transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {loading ? (
//                         "Signing in..."
//                       ) : (
//                         <>
//                           Sign in
//                           <ArrowRight size={16} />
//                         </>
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                     <p className="text-sm text-slate-500">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>
//                     {/* <p className="mt-3 text-xs text-slate-400">
//                       Staff?{" "}
//                       <Link
//                         href="/login"
//                         className="font-medium text-slate-600 hover:text-[#176b5b] hover:underline"
//                       >
//                         Collective ERP login
//                       </Link>
//                     </p> */}


// <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
//   <span className="font-medium">Staff member?</span>

//   <Link
//     href="/login"
//     className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//   >
//     Collective ERP Login
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </Link>
// </p>

//                   </div>
//                 </div>
//               </div>

//               <p className="mt-5 hidden text-center text-xs text-slate-400 lg:block">
//                 <Link
//                   href="/"
//                   className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-[#176b5b]"
//                 >
//                   <ArrowLeft size={14} />
//                   Back to website
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f7f9f8]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(
//   uid: string,
//   email: string
// ): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;

//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;

//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }

//     return path;
//   }

//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (
//     field: keyof typeof form,
//     value: string
//   ) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);

//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map(
//             (word) =>
//               word.charAt(0).toUpperCase() + word.slice(1)
//           )
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(
//         doc(db, "furniture_customers", uid)
//       );

//       if (customerSnap.exists()) {
//         const data = customerSnap.data();

//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(
//         searchParams.get("redirect")
//       );

//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);

//       const errCode =
//         err &&
//         typeof err === "object" &&
//         "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-dvh overflow-x-hidden bg-[#f4f3ee] font-sans lg:h-dvh lg:min-h-0 lg:overflow-hidden">
//       {/* Background decoration */}
//       <div className="pointer-events-none fixed -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col px-4 py-3 sm:px-6 sm:py-4 lg:h-full lg:min-h-0 lg:px-8 lg:py-3">
//         {/* Header */}
//         <header className="mb-3 flex shrink-0 items-center justify-between gap-3 lg:mb-3">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#62675f] transition-colors hover:text-[#176b5b]"
//           >
//             <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={16} />
//             </span>
//             <span className="hidden sm:inline">Back to website</span>
//             <span className="sm:hidden">Website</span>
//           </Link>

//           <div className="inline-flex items-center gap-2 rounded-full border border-[#dedfd7] bg-white px-3 py-2">
//             <ShieldCheck size={15} className="text-[#176b5b]" />
//             <span className="text-xs font-semibold text-[#41463f]">
//               Secure Customer Login
//             </span>
//           </div>
//         </header>

//         {/* Main card */}
//         <div className="grid w-full flex-1 overflow-hidden rounded-2xl border border-white bg-white shadow-[0_20px_65px_rgba(36,43,34,0.10)] lg:min-h-0 lg:grid-cols-2 lg:rounded-[24px]">
//           {/* Left: Brand and benefits */}
//           <section className="relative hidden min-h-0 overflow-hidden bg-[#26372e] lg:flex lg:flex-col lg:justify-between lg:p-8 xl:p-10">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85')",
//               }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-[#10251d]/80 via-[#172d23]/65 to-[#101c15]/95" />

//             <div className="relative z-10">
//               {/* Brand */}
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] shadow-lg">
//                   <span className="text-xl font-bold text-white">A</span>
//                 </div>

//                 <div>
//                   <h2 className="text-xl font-bold tracking-tight text-white">
//                     Akrish
//                   </h2>
//                   <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e2cda4]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             <div className="relative z-10 max-w-[480px] py-8">
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
//                 <Sparkles size={13} />
//                 Your home, your style
//               </div>

//               <h1 className="text-3xl font-bold leading-tight tracking-tight text-white xl:text-4xl 2xl:text-5xl">
//                 Welcome back to
//                 <br />
//                 <span className="text-[#e2cda4]">
//                   Akrish Furniture.
//                 </span>
//               </h1>

//               <p className="mt-4 max-w-[390px] text-sm leading-6 text-white/80 xl:text-base xl:leading-7">
//                 Sign in to track orders, manage your wishlist, and
//                 continue shopping for furniture that makes your
//                 house feel like home.
//               </p>

//               <div className="my-6 h-px w-full max-w-[360px] bg-gradient-to-r from-white/50 to-transparent" />

//               <ul className="space-y-4">
//                 {[
//                   "Track your furniture orders",
//                   "Save your favorite items",
//                   "Enjoy a faster checkout",
//                   "View your purchase history",
//                 ].map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-center gap-3"
//                   >
//                     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
//                       <CheckCircle2
//                         size={16}
//                         className="text-emerald-200"
//                       />
//                     </span>

//                     <span className="text-sm font-medium text-white/90">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <p className="relative z-10 text-xs text-white/55">
//               © {new Date().getFullYear()} Akrish Furniture &amp; Interior
//             </p>
//           </section>

//           {/* Right: Customer form */}
//           <section className="flex min-h-0 min-w-0 flex-col">
//             {/* Mobile brand header */}
//             <div className="flex shrink-0 items-center justify-between border-b border-[#e8e9e1] bg-white px-4 py-3 lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold text-[#252b25]">
//                     Akrish
//                   </p>
//                   <p className="text-[10px] text-[#85887e]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>

//               <span className="rounded-full bg-[#edf5f0] px-3 py-1.5 text-[10px] font-semibold text-[#176b5b]">
//                 Customer Login
//               </span>
//             </div>

//             <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-5 xl:px-12">
//               <div className="w-full max-w-[400px]">
//                 {/* Form heading */}
//                 <div className="mb-6">
//                   <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#176b5b]">
//                     <ShoppingBag size={13} />
//                     Customer account
//                   </div>

//                   <h2 className="text-2xl font-bold tracking-tight text-[#252b25] sm:text-3xl">
//                     Sign in to your account
//                   </h2>

//                   <p className="mt-2 text-sm leading-6 text-[#747970]">
//                     Enter your email and password to continue shopping.
//                   </p>
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div
//                     role="alert"
//                     className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
//                   >
//                     <p>{error}</p>

//                     {error.includes("staff account") && (
//                       <Link
//                         href="/login"
//                         className="mt-2 inline-flex items-center gap-1 font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Go to Collective ERP Login
//                         <ArrowRight size={14} />
//                       </Link>
//                     )}
//                   </div>
//                 )}

//                 {/* Sign-in form */}
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-sm font-semibold text-[#383d36]"
//                     >
//                       Email address
//                     </label>

//                     <div className="group relative">
//                       <Mail
//                         size={18}
//                         className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                       />

//                       <input
//                         id="email"
//                         type="email"
//                         autoComplete="email"
//                         inputMode="email"
//                         value={form.email}
//                         onChange={(e) =>
//                           updateField("email", e.target.value)
//                         }
//                         placeholder="you@example.com"
//                         className="h-12 w-full rounded-xl border border-[#e0e2d9] bg-[#fafbf8] py-3 pl-11 pr-4 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="mb-2 flex items-center justify-between gap-2">
//                       <label
//                         htmlFor="password"
//                         className="text-sm font-semibold text-[#383d36]"
//                       >
//                         Password
//                       </label>

//                       <Link
//                         href="/forgot-password"
//                         className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline"
//                       >
//                         Forgot password?
//                       </Link>
//                     </div>

//                     <div className="group relative">
//                       <LockKeyhole
//                         size={18}
//                         className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                       />

//                       <input
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         autoComplete="current-password"
//                         value={form.password}
//                         onChange={(e) =>
//                           updateField("password", e.target.value)
//                         }
//                         placeholder="Enter your password"
//                         className="h-12 w-full rounded-xl border border-[#e0e2d9] bg-[#fafbf8] py-3 pl-11 pr-12 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                       />

//                       <button
//                         type="button"
//                         onClick={() => setShowPassword((v) => !v)}
//                         className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b] focus:outline-none focus:ring-2 focus:ring-[#176b5b]/30"
//                         aria-label={
//                           showPassword ? "Hide password" : "Show password"
//                         }
//                       >
//                         {showPassword ? (
//                           <EyeOff size={18} />
//                         ) : (
//                           <Eye size={18} />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Submit button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 text-sm font-bold text-white shadow-[0_7px_18px_rgba(23,107,91,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#176b5b]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                   >
//                     {loading ? "Signing in..." : "Sign in"}

//                     {!loading && (
//                       <ArrowRight
//                         size={17}
//                         className="transition-transform duration-200 group-hover:translate-x-1"
//                       />
//                     )}
//                   </button>
//                 </form>

//                 {/* Registration link */}
//                 <div className="mt-6 border-t border-[#e8e9e1] pt-5 text-center">
//                   <p className="text-sm text-[#747970]">
//                     Don&apos;t have an account?{" "}
//                     <Link
//                       href="/register"
//                       className="font-bold text-[#176b5b] hover:underline"
//                     >
//                       Create an account
//                     </Link>
//                   </p>

//                   {/* Staff login link */}
//                   <div className="mt-5 rounded-xl border border-[#e5e7de] bg-[#fafbf8] px-3 py-4">
//                     <p className="text-xs text-[#777970]">
//                       Are you a staff member?
//                     </p>

//                     <Link
//                       href="/login"
//                       className="group mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-[#176b5b] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                     >
//                       Collective ERP Login
//                       <ArrowRight
//                         size={15}
//                         className="transition-transform duration-200 group-hover:translate-x-1"
//                       />
//                     </Link>
//                   </div>
//                 </div>

//                 <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[#96998f]">
//                   <ShieldCheck size={14} className="text-[#176b5b]" />
//                   Your account information is protected.
//                 </p>

//                 <div className="mt-5 text-center lg:hidden">
//                   <Link
//                     href="/"
//                     className="inline-flex items-center gap-1.5 text-xs font-medium text-[#62675f] hover:text-[#176b5b]"
//                   >
//                     <ArrowLeft size={14} />
//                     Back to website
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="mt-2 flex shrink-0 flex-col items-center justify-between gap-1.5 py-1 text-[10px] text-[#92958b] sm:flex-row">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={12} />
//             Secure Customer Account
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-dvh items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#f4f3ee] font-sans">
//       <div className="pointer-events-none fixed -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-72 w-72 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col px-4 py-3 sm:px-6 sm:py-4">
//         {/* Header */}
//         <header className="mb-3 flex shrink-0 items-center justify-between gap-3">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#62675f] transition-colors hover:text-[#176b5b]"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={15} />
//             </span>
//             <span className="hidden sm:inline">Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dedfd7] bg-white px-3 py-1.5">
//             <ShieldCheck size={14} className="text-[#176b5b]" />
//             <span className="text-xs font-semibold text-[#41463f]">
//               Secure Customer Login
//             </span>
//           </div>
//         </header>

//         {/* Centered compact card */}
//         <div className="flex min-h-0 flex-1 items-center justify-center">
//           <div className="grid w-full max-w-[860px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:max-h-[min(560px,calc(100dvh-7rem))] lg:grid-cols-2">
//             {/* Left brand panel */}
//             <section className="relative hidden min-h-0 bg-[#26372e] lg:block">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#10251d]/80 via-[#172d23]/65 to-[#101c15]/95" />

//               <div className="relative z-10 flex h-full flex-col justify-between p-6 xl:p-7">
//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] shadow-md">
//                     <span className="text-base font-bold text-white">A</span>
//                   </div>
//                   <div>
//                     <h2 className="text-base font-bold tracking-tight text-white">
//                       Akrish
//                     </h2>
//                     <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e2cda4]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>

//                 <div className="max-w-[340px]">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                     <Sparkles size={12} />
//                     Your home, your style
//                   </div>

//                   <h1 className="text-2xl font-bold leading-tight tracking-tight text-white xl:text-3xl">
//                     Welcome back to
//                     <br />
//                     <span className="text-[#e2cda4]">Akrish Furniture.</span>
//                   </h1>

//                   <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/80">
//                     Track orders, manage wishlist, and continue shopping.
//                   </p>

//                   <div className="my-4 h-px w-full max-w-[260px] bg-gradient-to-r from-white/50 to-transparent" />

//                   <ul className="space-y-2.5">
//                     {[
//                       "Track your furniture orders",
//                       "Save your favorite items",
//                       "Faster checkout",
//                       "View purchase history",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-2.5">
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
//                           <CheckCircle2 size={14} className="text-emerald-200" />
//                         </span>
//                         <span className="text-sm font-medium text-white/90">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-white/55">
//                   © {new Date().getFullYear()} Akrish Furniture &amp; Interior
//                 </p>
//               </div>
//             </section>

//             {/* Right form */}
//             <section className="flex min-h-0 flex-col overflow-hidden">
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e8e9e1] bg-white px-4 py-2.5 lg:hidden">
//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                     A
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-[#252b25]">Akrish</p>
//                     <p className="text-[10px] text-[#85887e]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>
//                 <span className="rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b]">
//                   Customer Login
//                 </span>
//               </div>

//               <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 py-5 sm:px-6 lg:px-7 lg:py-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                 <div className="w-full max-w-[340px]">
//                   <div className="mb-4">
//                     <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
//                       <ShoppingBag size={12} />
//                       Customer account
//                     </div>
//                     <h2 className="text-2xl font-bold tracking-tight text-[#252b25]">
//                       Sign in to your account
//                     </h2>
//                     <p className="mt-1.5 text-sm leading-5 text-[#747970]">
//                       Enter your email and password to continue shopping.
//                     </p>
//                   </div>

//                   {error && (
//                     <div
//                       role="alert"
//                       className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm leading-5 text-red-700"
//                     >
//                       <p>{error}</p>
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 inline-flex items-center gap-1 font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Go to Collective ERP Login
//                           <ArrowRight size={14} />
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-3">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-sm font-semibold text-[#383d36]"
//                       >
//                         Email address
//                       </label>
//                       <div className="group relative">
//                         <Mail
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) =>
//                             updateField("email", e.target.value)
//                           }
//                           placeholder="you@example.com"
//                           className="h-11 w-full rounded-lg border border-[#e0e2d9] bg-[#fafbf8] py-2.5 pl-10 pr-3 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-sm font-semibold text-[#383d36]"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="group relative">
//                         <LockKeyhole
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-11 w-full rounded-lg border border-[#e0e2d9] bg-[#fafbf8] py-2.5 pl-10 pr-11 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#7c8277] hover:bg-[#edf5f0] hover:text-[#176b5b]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={16} />
//                           ) : (
//                             <Eye size={16} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                     >
//                       {loading ? "Signing in..." : "Sign in"}
//                       {!loading && (
//                         <ArrowRight
//                           size={16}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-4 border-t border-[#e8e9e1] pt-4 text-center">
//                     <p className="text-sm text-[#747970]">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-bold text-[#176b5b] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>

//                     <div className="mt-3 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-2.5">
//                       <p className="text-xs text-[#777970]">Staff member?</p>
//                       <Link
//                         href="/login"
//                         className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Collective ERP Login
//                         <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>

//                   <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#96998f]">
//                     <ShieldCheck size={13} className="text-[#176b5b]" />
//                     Your account information is protected.
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <footer className="mt-2 flex shrink-0 items-center justify-between gap-2 py-1 text-xs text-[#92958b]">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>
//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={12} />
//             Secure Customer Account
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#f4f3ee] font-sans">
//       <div className="pointer-events-none fixed -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-72 w-72 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 py-2.5 sm:px-6 sm:py-3">
//         {/* Header */}
//         <header className="mb-2 flex shrink-0 items-center justify-between gap-3">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#62675f] transition-colors hover:text-[#176b5b]"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={15} />
//             </span>
//             <span className="hidden sm:inline">Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dedfd7] bg-white px-3 py-1.5">
//             <ShieldCheck size={14} className="text-[#176b5b]" />
//             <span className="text-xs font-semibold text-[#41463f]">
//               Secure Customer Login
//             </span>
//           </div>
//         </header>

//         {/* Card — slightly higher, larger window */}
//         {/* <div className="flex min-h-0 flex-1 items-start justify-center pt-4 sm:pt-3 lg:pt-4"> */}
//         <div className="flex min-h-0 flex-1 items-start justify-center pt-8 sm:pt-5 lg:pt-20">
//           <div className="grid w-full max-w-[1080px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:max-h-[min(720px,calc(100dvh-5.5rem))] lg:grid-cols-2">
//             {/* Left brand panel */}
//             <section className="relative hidden min-h-0 bg-[#26372e] lg:block">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#10251d]/80 via-[#172d23]/65 to-[#101c15]/95" />

//               <div className="relative z-10 flex h-full flex-col justify-between p-7 xl:p-8">
//                 {/* <Link href="/" className="inline-flex items-center gap-2.5">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] shadow-md">
//                     <span className="text-lg font-bold text-white">A</span>
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-bold tracking-tight text-white">
//                       Akrish
//                     </h2>
//                     <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e2cda4]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link> */}

//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   <img
//                     src="/Akrish.jpg"
//                     alt="Akrish"
//                     className="h-10 w-10 rounded-xl object-cover shadow-md"
//                   />
//                   <div>
//                     <h2 className="text-lg font-bold tracking-tight text-white">
//                       Akrish
//                     </h2>
//                     <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e2cda4]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>

//                 <div className="max-w-[380px]">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                     <Sparkles size={12} />
//                     Your home, your style
//                   </div>

//                   <h1 className="text-3xl font-bold leading-tight tracking-tight text-white xl:text-[2.15rem]">
//                     Welcome back to
//                     <br />
//                     <span className="text-[#e2cda4]">Akrish Furniture.</span>
//                   </h1>

//                   <p className="mt-3 max-w-[340px] text-sm leading-6 text-white/80">
//                     Track orders, manage wishlist, and continue shopping.
//                   </p>

//                   <div className="my-5 h-px w-full max-w-[280px] bg-gradient-to-r from-white/50 to-transparent" />

//                   <ul className="space-y-3">
//                     {[
//                       "Track your furniture orders",
//                       "Save your favorite items",
//                       "Faster checkout",
//                       "View purchase history",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-2.5">
//                         <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
//                           <CheckCircle2 size={15} className="text-emerald-200" />
//                         </span>
//                         <span className="text-sm font-medium text-white/90">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-white/55">
//                   © {new Date().getFullYear()} Akrish Furniture &amp; Interior
//                 </p>
//               </div>
//             </section>

//             {/* Right form */}
//             <section className="flex min-h-0 flex-col overflow-hidden">
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e8e9e1] bg-white px-4 py-2.5 lg:hidden">
//                 {/* <Link href="/" className="inline-flex items-center gap-2.5">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                     A
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-[#252b25]">Akrish</p>
//                     <p className="text-[10px] text-[#85887e]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link> */}

//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   <img
//                     src="/Akrish.jpg"
//                     alt="Akrish"
//                     className="h-8 w-8 rounded-xl object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-[#252b25]">Akrish</p>
//                     <p className="text-[10px] text-[#85887e]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>
//                 <span className="rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b]">
//                   Customer Login
//                 </span>
//               </div>

//               <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-5 py-6 sm:px-7 lg:px-8 lg:py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                 <div className="w-full max-w-[380px]">
//                   <div className="mb-5">
//                     <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
//                       <ShoppingBag size={12} />
//                       Customer account
//                     </div>
//                     <h2 className="text-2xl font-bold tracking-tight text-[#252b25] sm:text-[1.65rem]">
//                       Sign in to your account
//                     </h2>
//                     <p className="mt-1.5 text-sm leading-5 text-[#747970]">
//                       Enter your email and password to continue shopping.
//                     </p>
//                   </div>

//                   {error && (
//                     <div
//                       role="alert"
//                       className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm leading-5 text-red-700"
//                     >
//                       <p>{error}</p>
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 inline-flex items-center gap-1 font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Go to Collective ERP Login
//                           <ArrowRight size={14} />
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-3.5">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-sm font-semibold text-[#383d36]"
//                       >
//                         Email address
//                       </label>
//                       <div className="group relative">
//                         <Mail
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) =>
//                             updateField("email", e.target.value)
//                           }
//                           placeholder="you@example.com"
//                           className="h-11 w-full rounded-lg border border-[#e0e2d9] bg-[#fafbf8] py-2.5 pl-10 pr-3 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-sm font-semibold text-[#383d36]"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#176b5b] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="group relative">
//                         <LockKeyhole
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-11 w-full rounded-lg border border-[#e0e2d9] bg-[#fafbf8] py-2.5 pl-10 pr-11 text-sm text-[#252b25] outline-none transition placeholder:text-[#a6a89f] focus:border-[#176b5b] focus:bg-white focus:ring-4 focus:ring-[#176b5b]/10"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#7c8277] hover:bg-[#edf5f0] hover:text-[#176b5b]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={16} />
//                           ) : (
//                             <Eye size={16} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                     >
//                       {loading ? "Signing in..." : "Sign in"}
//                       {!loading && (
//                         <ArrowRight
//                           size={16}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-5 border-t border-[#e8e9e1] pt-4 text-center">
//                     <p className="text-sm text-[#747970]">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-bold text-[#176b5b] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>

//                     <div className="mt-3 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-2.5">
//                       <p className="text-xs text-[#777970]">Staff member?</p>
//                       <Link
//                         href="/login"
//                         className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#176b5b] hover:underline"
//                       >
//                         Collective ERP Login
//                         <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>

//                   <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#96998f]">
//                     <ShieldCheck size={13} className="text-[#176b5b]" />
//                     Your account information is protected.
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <footer className="mt-1.5 flex shrink-0 items-center justify-between gap-2 py-1 text-xs text-[#92958b]">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>
//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={12} />
//             Secure Customer Account
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
//   ArrowLeft,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#faf8f4] font-sans">
//       <div className="pointer-events-none fixed -left-32 -top-32 h-72 w-72 rounded-full bg-[#b8956c]/[0.08] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#1a1a1a]/[0.04] blur-3xl" />

//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col px-4 py-2.5 sm:px-6 sm:py-3">
//         <header className="mb-2 flex shrink-0 items-center justify-between gap-3">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#6b6560] transition-colors hover:text-[#1a1a1a]"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d8] bg-white transition-all group-hover:border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white">
//               <ArrowLeft size={15} />
//             </span>
//             <span className="hidden sm:inline">Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e2d8] bg-white px-3 py-1.5">
//             <ShieldCheck size={14} className="text-[#b8956c]" />
//             <span className="text-xs font-semibold text-[#5c564e]">
//               Secure Customer Login
//             </span>
//           </div>
//         </header>

//         <div className="flex min-h-0 flex-1 items-start justify-center pt-8 sm:pt-5 lg:pt-16">
//           <div className="grid w-full max-w-[1080px] overflow-hidden rounded-2xl border border-[#e8e2d8] bg-white shadow-[0_18px_55px_rgba(26,26,26,0.08)] lg:max-h-[min(720px,calc(100dvh-5.5rem))] lg:grid-cols-2">
//             {/* Left brand panel */}
//             <section className="relative hidden min-h-0 bg-[#1a1a1a] lg:block">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/75 via-[#1a1a1a]/55 to-[#1a1a1a]/95" />

//               <div className="relative z-10 flex h-full flex-col justify-between p-7 xl:p-8">
//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src="/Akrish.jpg"
//                     alt="Akrish"
//                     className="h-10 w-10 rounded-xl object-cover shadow-md"
//                   />
//                   <div>
//                     <h2 className="text-lg font-bold tracking-tight text-white">
//                       Akrish
//                     </h2>
//                     <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e2cda4]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>

//                 <div className="max-w-[380px]">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                     <Sparkles size={12} />
//                     Your home, your style
//                   </div>

//                   <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white xl:text-[2.15rem]">
//                     Welcome back to
//                     <br />
//                     <span className="text-[#e2cda4]">Akrish Furniture.</span>
//                   </h1>

//                   <p className="mt-3 max-w-[340px] text-sm leading-6 text-white/75">
//                     Track orders, manage wishlist, and continue shopping.
//                   </p>

//                   <div className="my-5 h-px w-full max-w-[280px] bg-gradient-to-r from-white/40 to-transparent" />

//                   <ul className="space-y-3">
//                     {[
//                       "Track your furniture orders",
//                       "Save your favorite items",
//                       "Faster checkout",
//                       "View purchase history",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-2.5">
//                         <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b8956c]/25">
//                           <CheckCircle2
//                             size={15}
//                             className="text-[#e2cda4]"
//                           />
//                         </span>
//                         <span className="text-sm font-medium text-white/90">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-xs text-white/50">
//                   © {new Date().getFullYear()} Akrish Furniture &amp; Interior
//                 </p>
//               </div>
//             </section>

//             {/* Right form */}
//             <section className="flex min-h-0 flex-col overflow-hidden">
//               <div className="flex shrink-0 items-center justify-between border-b border-[#f0ebe3] bg-white px-4 py-2.5 lg:hidden">
//                 <Link href="/" className="inline-flex items-center gap-2.5">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src="/Akrish.jpg"
//                     alt="Akrish"
//                     className="h-8 w-8 rounded-xl object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-[#1a1a1a]">Akrish</p>
//                     <p className="text-[10px] text-[#8a847c]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>
//                 <span className="rounded-full bg-[#f3ebe0] px-2.5 py-1 text-[10px] font-semibold text-[#8b7355]">
//                   Customer Login
//                 </span>
//               </div>

//               <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-5 py-6 sm:px-7 lg:px-8 lg:py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                 <div className="w-full max-w-[380px]">
//                   <div className="mb-5">
//                     <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#f3ebe0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b7355]">
//                       <ShoppingBag size={12} />
//                       Customer account
//                     </div>
//                     <h2 className="font-display text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[1.65rem]">
//                       Sign in to your account
//                     </h2>
//                     <p className="mt-1.5 text-sm leading-5 text-[#6b6560]">
//                       Enter your email and password to continue shopping.
//                     </p>
//                   </div>

//                   {error && (
//                     <div
//                       role="alert"
//                       className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm leading-5 text-red-700"
//                     >
//                       <p>{error}</p>
//                       {error.includes("staff account") && (
//                         <Link
//                           href="/login"
//                           className="mt-2 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                         >
//                           Go to Collective ERP Login
//                           <ArrowRight size={14} />
//                         </Link>
//                       )}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-3.5">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-sm font-semibold text-[#5c564e]"
//                       >
//                         Email address
//                       </label>
//                       <div className="group relative">
//                         <Mail
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a847c] transition-colors group-focus-within:text-[#b8956c]"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           inputMode="email"
//                           value={form.email}
//                           onChange={(e) =>
//                             updateField("email", e.target.value)
//                           }
//                           placeholder="you@example.com"
//                           className="h-11 w-full rounded-xl border border-[#e8e2d8] bg-[#faf8f4] py-2.5 pl-10 pr-3 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#a6a089] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between gap-2">
//                         <label
//                           htmlFor="password"
//                           className="text-sm font-semibold text-[#5c564e]"
//                         >
//                           Password
//                         </label>
//                         <Link
//                           href="/forgot-password"
//                           className="text-xs font-semibold text-[#b8956c] hover:underline"
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>
//                       <div className="group relative">
//                         <LockKeyhole
//                           size={16}
//                           className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a847c] transition-colors group-focus-within:text-[#b8956c]"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           value={form.password}
//                           onChange={(e) =>
//                             updateField("password", e.target.value)
//                           }
//                           placeholder="Enter your password"
//                           className="h-11 w-full rounded-xl border border-[#e8e2d8] bg-[#faf8f4] py-2.5 pl-10 pr-11 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#a6a089] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#8a847c] hover:bg-[#f3ebe0] hover:text-[#8b7355]"
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <EyeOff size={16} />
//                           ) : (
//                             <Eye size={16} />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-4 text-sm font-bold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {loading ? "Signing in…" : "Sign in"}
//                       {!loading && (
//                         <ArrowRight
//                           size={16}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-5 border-t border-[#f0ebe3] pt-4 text-center">
//                     <p className="text-sm text-[#6b6560]">
//                       Don&apos;t have an account?{" "}
//                       <Link
//                         href="/register"
//                         className="font-bold text-[#b8956c] hover:underline"
//                       >
//                         Create an account
//                       </Link>
//                     </p>

//                     <div className="mt-3 rounded-xl border border-[#e8e2d8] bg-[#faf8f4] px-3 py-2.5">
//                       <p className="text-xs text-[#8a847c]">Staff member?</p>
//                       <Link
//                         href="/login"
//                         className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8956c] hover:underline"
//                       >
//                         Collective ERP Login
//                         <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>

//                   <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#8a847c]">
//                     <ShieldCheck size={13} className="text-[#b8956c]" />
//                     Your account information is protected.
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <footer className="mt-1.5 flex shrink-0 items-center justify-between gap-2 py-1 text-xs text-[#8a847c]">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>
//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={12} />
//             Secure Customer Account
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#faf8f4]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#e8e2d8] border-t-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-[100dvh] overflow-hidden bg-[#f5f0e8]">
//       {/* Ambient mesh */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       {/* Top rail */}
//       <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
//         <Link href="/" className="group inline-flex items-center gap-3">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/Akrish.jpg"
//             alt="Akrish"
//             className="h-10 w-10 rounded-2xl object-cover shadow-sm ring-1 ring-[#e8e2d8] transition group-hover:ring-[#b8956c]/50"
//           />
//           <div className="leading-tight">
//             <p className="font-display text-[15px] font-semibold tracking-tight text-[#1a1a1a]">
//               Akrish
//             </p>
//             <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9a9188]">
//               Furniture &amp; Interior
//             </p>
//           </div>
//         </Link>

//         <div className="flex items-center gap-3">
//           <Link
//             href="/products"
//             className="hidden rounded-full border border-[#e8e2d8] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#6b6560] backdrop-blur transition hover:border-[#b8956c] hover:text-[#1a1a1a] sm:inline-flex"
//           >
//             Browse shop
//           </Link>
//           <Link
//             href="/login"
//             className="rounded-full border border-[#e8e2d8] bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:text-[#8b7355]"
//           >
//             Staff login
//           </Link>
//         </div>
//       </header>

//       {/* Stage */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5.5rem)] max-w-6xl flex-col items-center justify-center px-5 pb-12 pt-4 sm:px-8 lg:px-12">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-[42%] hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.035] sm:block lg:text-[10rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[420px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-3 -bottom-3 top-6 rounded-[2rem] bg-gradient-to-br from-[#b8956c]/25 via-[#d4c4a8]/20 to-transparent sm:-inset-x-4 sm:-bottom-4"
//           />
//           <div
//             aria-hidden
//             className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-[#b8956c]/25 sm:block"
//           />
//           <div
//             aria-hidden
//             className="absolute -left-4 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-2xl border border-[#1a1a1a]/8 bg-white/40 sm:block"
//           />

//           <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-[0_24px_64px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-6 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
//               <div className="mb-6 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                     Customer account
//                   </p>
//                   <h1 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[1.75rem]">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1.5 text-sm text-[#7a746c]">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={20} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-5 rounded-2xl border border-red-100 bg-red-50/90 px-4 py-3 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {error.includes("staff account") && (
//                     <Link
//                       href="/login"
//                       className="mt-2 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                     >
//                       Go to Collective ERP Login
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-12 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-12 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-1 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-5 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-4 py-3.5">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-4 py-3.5">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-8 text-center text-xs text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//             {" · "}
//             <Link
//               href="/"
//               className="font-medium text-[#1a1a1a]/70 underline decoration-[#e0d9ce] underline-offset-2 hover:text-[#1a1a1a] hover:decoration-[#b8956c]"
//             >
//               Back to store
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[#f5f0e8]">
//       {/* Ambient mesh */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       {/* Single compact brand row (no second site header) */}
//       <div className="relative z-20 flex shrink-0 items-center justify-between px-5 py-3 sm:px-8">
//         <Link href="/" className="group inline-flex items-center gap-2.5">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/Akrish.jpg"
//             alt="Akrish"
//             className="h-9 w-9 rounded-xl object-cover shadow-sm ring-1 ring-[#e8e2d8] transition group-hover:ring-[#b8956c]/50"
//           />
//           <div className="leading-tight">
//             <p className="font-display text-sm font-semibold tracking-tight text-[#1a1a1a]">
//               Akrish
//             </p>
//             <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#9a9188]">
//               Furniture &amp; Interior
//             </p>
//           </div>
//         </Link>
//         <Link
//           href="/login"
//           className="rounded-full border border-[#e8e2d8] bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:text-[#8b7355]"
//         >
//           Staff login
//         </Link>
//       </div>

//       {/* Centered stage — no page scroll */}
//       <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-5 pb-4 pt-1 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px] shrink-0">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                     Customer account
//                   </p>
//                   <h1 className="mt-1 font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {error.includes("staff account") && (
//                     <Link
//                       href="/login"
//                       className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                     >
//                       Go to Collective ERP Login
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//             {" · "}
//             <Link
//               href="/"
//               className="font-medium text-[#1a1a1a]/70 underline decoration-[#e0d9ce] underline-offset-2 hover:decoration-[#b8956c]"
//             >
//               Back to store
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Lock,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[#f5f0e8]">
//       {/* Ambient mesh */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       {/* Header: brand + back only (no Staff login here) */}
//       <header className="relative z-20 flex shrink-0 items-center justify-between px-5 py-3 sm:px-8">
//         <Link href="/" className="group inline-flex items-center gap-2.5">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/Akrish.jpg"
//             alt="Akrish"
//             className="h-9 w-9 rounded-xl object-cover shadow-sm ring-1 ring-[#e8e2d8] transition group-hover:ring-[#b8956c]/50 sm:h-10 sm:w-10 sm:rounded-2xl"
//           />
//           <div className="leading-tight">
//             <p className="font-display text-sm font-semibold tracking-tight text-[#1a1a1a] sm:text-[15px]">
//               Akrish
//             </p>
//             <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#9a9188]">
//               Furniture &amp; Interior
//             </p>
//           </div>
//         </Link>

//         <Link
//           href="/"
//           className="group inline-flex items-center gap-2 text-sm font-medium text-[#6b6560] transition hover:text-[#1a1a1a]"
//         >
//           <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d8] bg-white transition group-hover:border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white">
//             <ArrowLeft size={16} />
//           </span>
//           <span className="hidden sm:inline">Back to website</span>
//         </Link>
//       </header>

//       {/* Centered stage */}
//       <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-5 pb-4 pt-1 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px] shrink-0">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               {/* Customer account + Staff login side by side */}
//               <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                   Customer account
//                 </p>
//                 <Link
//                   href="/login"
//                   className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e2d8] bg-[#faf8f4] px-2.5 py-1 text-[10px] font-semibold text-[#6b6560] transition hover:border-[#b8956c] hover:bg-white hover:text-[#8b7355]"
//                 >
//                   <Lock size={11} className="text-[#b8956c]" />
//                   Staff login
//                 </Link>
//               </div>

//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {error.includes("staff account") && (
//                     <Link
//                       href="/login"
//                       className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                     >
//                       Go to Collective ERP Login
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//             <span className="text-[#d4cdc2]">·</span>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1 font-medium text-[#1a1a1a]/80 underline decoration-[#e0d9ce] underline-offset-2 transition hover:text-[#1a1a1a] hover:decoration-[#b8956c]"
//             >
//               <ArrowLeft size={12} />
//               Back to website
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }




// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Lock,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-[#f5f0e8]">
//       {/* Ambient mesh */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       {/* Form stage under the real site Header */}
//       <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               {/* Customer account + Staff login side by side */}
//               <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                   Customer account
//                 </p>
//                 <Link
//                   href="/login"
//                   className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e2d8] bg-[#faf8f4] px-2.5 py-1 text-[10px] font-semibold text-[#6b6560] transition hover:border-[#b8956c] hover:bg-white hover:text-[#8b7355]"
//                 >
//                   <Lock size={11} className="text-[#b8956c]" />
//                   Staff login
//                 </Link>
//               </div>

//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {error.includes("staff account") && (
//                     <Link
//                       href="/login"
//                       className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                     >
//                       Go to Collective ERP Login
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//             <span className="text-[#d4cdc2]">·</span>
//             {/* <Link
//               href="/"
//               className="inline-flex items-center gap-1 font-medium text-[#1a1a1a]/80 underline decoration-[#e0d9ce] underline-offset-2 transition hover:text-[#1a1a1a] hover:decoration-[#b8956c]"
//             >
//               <ArrowLeft size={12} />
//               Back to website
//             </Link> */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   if (email === "admin@akrish.in") return true;
//   const staffSnap = await getDoc(doc(db, "users", uid));
//   if (!staffSnap.exists()) return false;
//   const role = String(staffSnap.data()?.role || "").toLowerCase();
//   return STAFF_ROLES.has(role);
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setError(
//           "This is a staff account. Please sign in through the Collective ERP staff login."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-[#f5f0e8]">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               <div className="mb-3">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                   Customer account
//                 </p>
//               </div>

//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {error.includes("staff account") && (
//                     <Link
//                       href="/login"
//                       className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                     >
//                       Go to Collective ERP Login
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }



// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       // Allow any valid Firebase user to shop (including staff / admin@akrish.in).
//       // Staff ERP access stays on /login via AuthContext.

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-[#f5f0e8]">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               <div className="mb-3">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                   Customer account
//                 </p>
//               </div>

//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }




// "use client";

// import Link from "next/link";
// import { FormEvent, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Heart,
//   Loader2,
//   Package,
//   ShieldCheck,
//   ShoppingBag,
// } from "lucide-react";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// const STAFF_ROLES = new Set([
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ]);

// /** Staff / ERP accounts must not use customer sign-in. */
// async function isStaffAccount(uid: string, email: string): Promise<boolean> {
//   const normalized = (email || "").toLowerCase().trim();
//   if (normalized === "admin@akrish.in") return true;

//   try {
//     const staffSnap = await getDoc(doc(db, "users", uid));
//     if (!staffSnap.exists()) return false;
//     const role = String(staffSnap.data()?.role || "").toLowerCase();
//     return STAFF_ROLES.has(role);
//   } catch {
//     return false;
//   }
// }

// function safeCustomerRedirect(path: string | null): string {
//   if (path && path.startsWith("/") && !path.startsWith("//")) {
//     if (
//       path === "/login" ||
//       path.startsWith("/erp") ||
//       path.startsWith("/interior") ||
//       path.startsWith("/furniture") ||
//       path.startsWith("/admin") ||
//       path.startsWith("/account")
//     ) {
//       return "/";
//     }
//     return path;
//   }
//   return "/";
// }

// function CustomerSignInForm() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [isStaffError, setIsStaffError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//     setIsStaffError(false);
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setIsStaffError(false);

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       if (await isStaffAccount(uid, email)) {
//         await signOut(auth);
//         setIsStaffError(true);
//         setError(
//           "This email is registered for Collective ERP staff access. Website shopping needs a separate customer account."
//         );
//         return;
//       }

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const target = safeCustomerRedirect(searchParams.get("redirect"));
//       router.replace(target);
//       router.refresh();
//     } catch (err: unknown) {
//       console.error(err);
//       const errCode =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         errCode === "auth/invalid-credential" ||
//         errCode === "auth/wrong-password" ||
//         errCode === "auth/user-not-found" ||
//         errCode === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-[#f5f0e8]">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
//         <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
//         <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 sm:px-8">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           SHOP
//         </p>

//         <div className="relative w-full max-w-[400px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
//           />

//           <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
//               <div className="mb-3">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                   Customer account
//                 </p>
//               </div>

//               <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
//                 <div>
//                   <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
//                     Welcome back
//                   </h1>
//                   <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
//                     Sign in to shop, track orders &amp; wishlist.
//                   </p>
//                 </div>
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <ShoppingBag size={18} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
//                 >
//                   <p>{error}</p>
//                   {isStaffError && (
//                     <div className="mt-2 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
//                       <Link
//                         href="/register"
//                         className="inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
//                       >
//                         Create a customer account
//                         <ArrowRight size={14} />
//                       </Link>
//                       <Link
//                         href="/login"
//                         className="inline-flex items-center gap-1 text-xs font-medium text-[#6b6560] hover:text-[#1a1a1a] hover:underline"
//                       >
//                         Staff ERP login
//                         <ArrowRight size={12} />
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
//                     >
//                       Forgot?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="••••••••"
//                       className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign in to shop
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-4 text-center text-sm text-[#6b6560]">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>

//             <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Package size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Orders
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Track delivery</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2 px-3 py-3">
//                 <Heart size={14} className="text-[#b8956c]" />
//                 <div>
//                   <p className="text-[11px] font-semibold text-[#1a1a1a]">
//                     Wishlist
//                   </p>
//                   <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Protected customer account
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomerSignInPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center bg-[#f5f0e8]">
//           <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
//         </div>
//       }
//     >
//       <CustomerSignInForm />
//     </Suspense>
//   );
// }



"use client";

import Link from "next/link";
import { FormEvent, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  Loader2,
  Package,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { upsertCustomerFromAuth } from "@/services/customerService";

const STAFF_ROLES = new Set([
  "admin",
  "manager",
  "sales",
  "designer",
  "accountant",
  "hr",
  "employee",
]);

/** Staff / ERP accounts must not use customer sign-in. */
async function isStaffAccount(uid: string, email: string): Promise<boolean> {
  const normalized = (email || "").toLowerCase().trim();
  if (normalized === "admin@akrish.in") return true;

  try {
    const staffSnap = await getDoc(doc(db, "users", uid));
    if (!staffSnap.exists()) return false;
    const role = String(staffSnap.data()?.role || "").toLowerCase();
    return STAFF_ROLES.has(role);
  } catch {
    return false;
  }
}

function safeCustomerRedirect(path: string | null): string {
  if (path && path.startsWith("/") && !path.startsWith("//")) {
    if (
      path === "/login" ||
      path.startsWith("/erp") ||
      path.startsWith("/interior") ||
      path.startsWith("/furniture") ||
      path.startsWith("/admin") ||
      path.startsWith("/account")
    ) {
      return "/";
    }
    return path;
  }
  return "/";
}

function CustomerSignInForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showSignupHint, setShowSignupHint] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setShowSignupHint(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setShowSignupHint(false);

    const email = form.email.trim().toLowerCase();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!form.password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, form.password);
      const uid = cred.user.uid;

      // Staff emails are not valid customer logins — same UX as “create account”
      if (await isStaffAccount(uid, email)) {
        await signOut(auth);
        setShowSignupHint(true);
        setError(
          "No customer account found for this email. Create an account to shop with us."
        );
        return;
      }

      let name =
        cred.user.displayName ||
        email
          .split("@")[0]
          .replace(/[._]/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      let phone = "";
      let gender = "";

      const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
      if (customerSnap.exists()) {
        const data = customerSnap.data();
        if (data.name) name = String(data.name);
        if (data.phone) phone = String(data.phone);
        if (data.gender) gender = String(data.gender);
      }

      await upsertCustomerFromAuth({
        uid,
        name,
        email: cred.user.email || email,
        phone,
        gender,
        photoURL: cred.user.photoURL || "",
      });

      const target = safeCustomerRedirect(searchParams.get("redirect"));
      router.replace(target);
      router.refresh();
    } catch (err: unknown) {
      console.error(err);
      const errCode =
        err && typeof err === "object" && "code" in err
          ? String((err as { code: string }).code)
          : "";

      if (
        errCode === "auth/invalid-credential" ||
        errCode === "auth/wrong-password" ||
        errCode === "auth/user-not-found" ||
        errCode === "auth/invalid-email"
      ) {
        setShowSignupHint(true);
        setError(
          "No customer account found for this email. Create an account to shop with us."
        );
      } else {
        setError("Unable to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-[#f5f0e8]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#b8956c]/15 blur-[100px]" />
        <div className="absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#d4c4a8]/40 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(184,149,108,0.18) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 sm:px-8">
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
        >
          SHOP
        </p>

        <div className="relative w-full max-w-[400px]">
          <div
            aria-hidden
            className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
          />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
            <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

            <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
              <div className="mb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
                  Customer account
                </p>
              </div>

              <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
                <div>
                  <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
                    Welcome back
                  </h1>
                  <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
                    Sign in to shop, track orders &amp; wishlist.
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
                  <ShoppingBag size={18} strokeWidth={1.6} />
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
                >
                  <p>{error}</p>
                  {showSignupHint && (
                    <Link
                      href="/register"
                      className="mt-2 inline-flex items-center gap-1 font-semibold text-[#b8956c] hover:underline"
                    >
                      Create account / Sign up
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[11px] font-semibold text-[#b8956c] transition hover:text-[#8b7355]"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={form.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="••••••••"
                      className="h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 pr-12 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] transition hover:bg-[#f0e8dc] hover:text-[#1a1a1a]"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-0.5 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
                  />
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Signing in…
                    </>
                  ) : (
                    <>
                      Sign in to shop
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-[#6b6560]">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#b8956c] hover:underline"
                >
                  Create one
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] border-t border-[#f0ebe3] bg-[#faf8f4]/80">
              <div className="flex items-center justify-center gap-2 px-3 py-3">
                <Package size={14} className="text-[#b8956c]" />
                <div>
                  <p className="text-[11px] font-semibold text-[#1a1a1a]">
                    Orders
                  </p>
                  <p className="text-[10px] text-[#9a9188]">Track delivery</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-3">
                <Heart size={14} className="text-[#b8956c]" />
                <div>
                  <p className="text-[11px] font-semibold text-[#1a1a1a]">
                    Wishlist
                  </p>
                  <p className="text-[10px] text-[#9a9188]">Saved pieces</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#b8956c]" />
              Protected customer account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CustomerSignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#f5f0e8]">
          <Loader2 className="h-8 w-8 animate-spin text-[#b8956c]" />
        </div>
      }
    >
      <CustomerSignInForm />
    </Suspense>
  );
}
