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
//   User,
// } from "lucide-react";

// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
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
//     setSuccess(false);

//     const name = form.name.trim();
//     const email = form.email.trim().toLowerCase();

//     if (!name) {
//       setError("Please enter your full name.");
//       return;
//     }

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this section to your registration API/server
//        * action when backend authentication is available.
//        */
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       setSuccess(true);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch {
//       setError(
//         "Unable to create the account. Please try again."
//       );
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
//               Manage your interior business in one place.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Manage projects, clients, quotations, vendors,
//               payments and operations through the VIP Interior
//               ERP platform.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Project and client management",
//                 "Quotations and contract tracking",
//                 "Vendor and payment management",
//                 "Business reports and visibility",
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

//         {/* Register panel */}
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
//                   Get started
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>

//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your details to create an account and
//                   access the ERP platform.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2
//                     size={18}
//                     className="mt-0.5 shrink-0"
//                   />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully.
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now continue to the login page.
//                     </p>
//                   </div>
//                 </div>
//               )}

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
//                 className="space-y-4"
//               >
//                 {/* Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Full name
//                   </label>

//                   <div className="relative">
//                     <User
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       autoComplete="name"
//                       value={form.name}
//                       onChange={(event) =>
//                         updateField(
//                           "name",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Enter your full name"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

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
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Password
//                   </label>

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
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(event) =>
//                         updateField(
//                           "password",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
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

//                   <p className="mt-1.5 text-[11px] text-slate-400">
//                     Use at least 6 characters.
//                   </p>
//                 </div>

//                 {/* Confirm password */}
//                 <div>
//                   <label
//                     htmlFor="confirmPassword"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Confirm password
//                   </label>

//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type={
//                         showConfirmPassword
//                           ? "text"
//                           : "password"
//                       }
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(event) =>
//                         updateField(
//                           "confirmPassword",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(
//                           (value) => !value
//                         )
//                       }
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide confirm password"
//                           : "Show confirm password"
//                       }
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       Creating account...
//                     </>
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="font-semibold text-slate-900 hover:underline"
//                   >
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
//               By creating an account, you agree to use the VIP
//               Interior ERP platform according to your
//               organization&apos;s policies.
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const name = form.name.trim();
//     const email = form.email.trim().toLowerCase();

//     if (!name) {
//       setError("Please enter your full name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real customer registration API
//       await new Promise((resolve) => setTimeout(resolve, 700));

//       setSuccess(true);
//       setForm({ name: "", email: "", password: "", confirmPassword: "" });
//     } catch {
//       setError("Unable to create the account. Please try again.");
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
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
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
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Account created successfully!</p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="underline font-medium">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Full name
//                   </label>
//                   <div className="relative">
//                     <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type="text"
//                       value={form.name}
//                       onChange={(e) => updateField("name", e.target.value)}
//                       placeholder="Enter your full name"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) => updateField("confirmPassword", e.target.value)}
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Creating account..." : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link href="/sign-in" className="font-semibold text-[#176b5b] hover:underline">
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim();

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth + Firestore later
//       await new Promise((resolve) => setTimeout(resolve, 700));

//       const fullName = `${firstName} ${lastName}`.trim();

//       // Save user for demo login
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: fullName,
//           email,
//           phone,
//           gender: form.gender,
//         })
//       );

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch {
//       setError("Unable to create the account. Please try again.");
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
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
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
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Account created successfully!</p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* First + Last Name */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         value={form.firstName}
//                         onChange={(e) => updateField("firstName", e.target.value)}
//                         placeholder="First name"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last name"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile number"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? (
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
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       // 1) Firebase Auth account
//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       // 2) ERP-visible customer row (furniture_customers / uid)
//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       // 3) Website session (wishlist / cart still use email)
//       // localStorage.setItem(
//       //   "user",
//       //   JSON.stringify({
//       //     uid: cred.user.uid,
//       //     name: fullName,
//       //     email,
//       //     phone,
//       //     gender: form.gender,
//       //   })
//       // );

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
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
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
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
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully!
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in.
//                       </Link>
//                       {/* . Your profile is available in Furniture ERP → Customers. */}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         placeholder="First name"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last name"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile number"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? (
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
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
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
//               Create your Akrish account
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
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
//             <div className="mb-5 flex items-center justify-between lg:hidden">
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
//               <div className="mb-5 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Create your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-4 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700 sm:mb-5">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully!
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
//                 {/* First + last always side by side */}
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         autoComplete="given-name"
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         placeholder="First"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-2 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       autoComplete="family-name"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       inputMode="numeric"
//                       autoComplete="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Min. 6 characters"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showConfirmPassword ? (
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
//                   className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       // Keep header as Login until user signs in on /sign-in
//       await signOut(auth);

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
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
//               Create your Akrish account
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
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
//             <div className="mb-5 flex items-center justify-between lg:hidden">
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
//               <div className="mb-5 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Create your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-4 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700 sm:mb-5">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully!
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         autoComplete="given-name"
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         placeholder="First"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-2 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       autoComplete="family-name"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       inputMode="numeric"
//                       autoComplete="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Min. 6 characters"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showConfirmPassword ? (
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
//                   className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       await signOut(auth);

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     "w-full rounded-xl border border-[#e8e2d8] bg-[#faf8f4] py-2.5 pl-9 pr-3 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#a6a089] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15";

//   return (
//     <div className="min-h-[100dvh] bg-[#faf8f4]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         {/* Left panel */}
//         <div className="relative hidden overflow-hidden bg-[#1a1a1a] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,149,108,0.18),transparent_45%)]" />
//           <div className="relative">
//             <Link href="/" className="inline-flex items-center gap-3">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/Akrish.jpg"
//                 alt="Akrish"
//                 className="h-11 w-11 rounded-xl object-cover"
//               />
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-white/50">Furniture &amp; Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e2cda4]">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="font-display text-4xl font-semibold leading-tight xl:text-5xl">
//               Create your Akrish account
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-[#e2cda4]"
//                   />
//                   <span className="text-sm text-white/75">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="relative text-xs text-white/40">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-5 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src="/Akrish.jpg"
//                   alt="Akrish"
//                   className="h-10 w-10 rounded-xl object-cover"
//                 />
//                 <div>
//                   <p className="text-sm font-bold text-[#1a1a1a]">Akrish</p>
//                   <p className="text-[10px] text-[#8a847c]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-[#6b6560] hover:text-[#1a1a1a]"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-[#e8e2d8] bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-5 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-[#b8956c] sm:text-xs">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-1.5 font-display text-xl font-semibold text-[#1a1a1a] sm:mt-2 sm:text-2xl">
//                   Create your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-[#6b6560] sm:mt-2 sm:text-sm">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-4 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700 sm:mb-5">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully!
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link
//                         href="/sign-in"
//                         className="font-medium underline"
//                       >
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                       />
//                       <input
//                         type="text"
//                         autoComplete="given-name"
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         placeholder="First"
//                         className={inputClass}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       autoComplete="family-name"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last"
//                       className="w-full rounded-xl border border-[#e8e2d8] bg-[#faf8f4] px-3 py-2.5 text-sm outline-none transition focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                     />
//                     <input
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                     />
//                     <input
//                       type="tel"
//                       inputMode="numeric"
//                       autoComplete="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile"
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-[#5c564e]">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-[#5c564e]">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#b8956c]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-[#5c564e]">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#b8956c]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Min. 6 characters"
//                       className={`${inputClass} pr-11`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[#8a847c]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-[#5c564e]">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a847c]"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm password"
//                       className={`${inputClass} pr-11`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[#8a847c]"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showConfirmPassword ? (
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
//                   className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account…"
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-[#f0ebe3] pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-[#6b6560]">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#b8956c] hover:underline"
//                   >
//                     Sign in
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
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   Loader2,
//   ShieldCheck,
//   ShoppingBag,
//   UserPlus,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       await signOut(auth);

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fieldClass =
//     "h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15";

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

//         <Link
//           href="/sign-in"
//           className="rounded-full border border-[#e8e2d8] bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] transition hover:border-[#b8956c] hover:text-[#8b7355]"
//         >
//           Sign in
//         </Link>
//       </header>

//       {/* Stage */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5.5rem)] max-w-6xl flex-col items-center justify-center px-5 pb-12 pt-2 sm:px-8 lg:px-12">
//         <p
//           aria-hidden
//           className="pointer-events-none absolute left-1/2 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[9rem]"
//         >
//           JOIN
//         </p>

//         <div className="relative w-full max-w-[440px]">
//           <div
//             aria-hidden
//             className="absolute -inset-x-3 -bottom-3 top-6 rounded-[2rem] bg-gradient-to-br from-[#b8956c]/25 via-[#d4c4a8]/20 to-transparent sm:-inset-x-4 sm:-bottom-4"
//           />
//           <div
//             aria-hidden
//             className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-[#b8956c]/25 sm:block"
//           />

//           <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-[0_24px_64px_rgba(26,26,26,0.08)] backdrop-blur-md">
//             <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

//             <div className="max-h-[min(78dvh,720px)] overflow-y-auto px-6 py-7 sm:px-8 sm:py-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               <div className="mb-6 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
//                     Customer registration
//                   </p>
//                   <h1 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:text-[1.75rem]">
//                     Create your account
//                   </h1>
//                   <p className="mt-1.5 text-sm text-[#7a746c]">
//                     Shop, wishlist &amp; track orders in one place.
//                   </p>
//                 </div>
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
//                   <UserPlus size={20} strokeWidth={1.6} />
//                 </div>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/90 px-4 py-3 text-sm text-emerald-800">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Account created successfully</p>
//                     <p className="mt-0.5 text-xs text-emerald-700">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-semibold underline">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-5 rounded-2xl border border-red-100 bg-red-50/90 px-4 py-3 text-sm text-red-700"
//                 >
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-3.5">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                       First name
//                     </label>
//                     <input
//                       type="text"
//                       autoComplete="given-name"
//                       value={form.firstName}
//                       onChange={(e) => updateField("firstName", e.target.value)}
//                       placeholder="First"
//                       className={fieldClass}
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       autoComplete="family-name"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last"
//                       className={fieldClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     autoComplete="email"
//                     inputMode="email"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                     placeholder="you@example.com"
//                     className={fieldClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                     Mobile
//                   </label>
//                   <input
//                     type="tel"
//                     inputMode="numeric"
//                     autoComplete="tel"
//                     value={form.phone}
//                     onChange={(e) => updateField("phone", e.target.value)}
//                     placeholder="10-digit mobile"
//                     className={fieldClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                     Gender
//                   </label>
//                   <div className="flex gap-2">
//                     {(["Male", "Female"] as const).map((g) => {
//                       const active = form.gender === g;
//                       return (
//                         <button
//                           key={g}
//                           type="button"
//                           onClick={() => updateField("gender", g)}
//                           className={`flex-1 rounded-2xl border py-2.5 text-sm font-semibold transition ${
//                             active
//                               ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
//                               : "border-[#ebe4d9] bg-[#faf8f4] text-[#5c564e] hover:border-[#c4b8a8]"
//                           }`}
//                         >
//                           {g}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Min. 6 characters"
//                       className={`${fieldClass} pr-11`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] hover:bg-[#f0e8dc]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm password"
//                       className={`${fieldClass} pr-11`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword((v) => !v)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] hover:bg-[#f0e8dc]"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showConfirmPassword ? (
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
//                   className="group relative mt-2 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span
//                     aria-hidden
//                     className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
//                   />
//                   {loading ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Creating account…
//                     </>
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-5 text-center text-sm text-[#6b6560]">
//                 Already have an account?{" "}
//                 <Link
//                   href="/sign-in"
//                   className="font-semibold text-[#b8956c] hover:underline"
//                 >
//                   Sign in
//                 </Link>
//               </p>
//             </div>

//             <div className="flex items-center justify-center gap-2 border-t border-[#f0ebe3] bg-[#faf8f4]/80 px-4 py-3.5">
//               <ShoppingBag size={14} className="text-[#b8956c]" />
//               <p className="text-[11px] text-[#9a9188]">
//                 <span className="font-semibold text-[#1a1a1a]">Shop ready</span>
//                 {" — "}wishlist, cart &amp; order history after you join
//               </p>
//             </div>
//           </div>

//           <p className="mt-8 text-center text-xs text-[#9a9188]">
//             <span className="inline-flex items-center gap-1">
//               <ShieldCheck size={12} className="text-[#b8956c]" />
//               Your details stay on your account
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



"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { upsertCustomerFromAuth } from "@/services/customerService";

export default function CustomerRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "" as "" | "Male" | "Female",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

    if (!firstName) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!phone) {
      setError("Please enter your mobile number.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!form.gender) {
      setError("Please select your gender.");
      return;
    }
    if (!form.password) {
      setError("Please create a password.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const fullName = `${firstName} ${lastName}`.trim();

      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        form.password
      );

      await updateProfile(cred.user, { displayName: fullName });

      await upsertCustomerFromAuth({
        uid: cred.user.uid,
        name: fullName,
        email,
        phone,
        gender: form.gender,
        photoURL: cred.user.photoURL || "",
      });

      await signOut(auth);

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err: unknown) {
      console.error(err);
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code: string }).code)
          : "";

      if (code === "auth/email-already-in-use") {
        setError("This email is already registered. Please sign in.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (code === "auth/weak-password") {
        setError("Password is too weak. Use at least 6 characters.");
      } else {
        setError("Unable to create the account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "h-11 w-full rounded-2xl border border-[#ebe4d9] bg-[#faf8f4] px-4 text-sm text-[#1a1a1a] outline-none transition placeholder:text-[#b8b0a4] focus:border-[#b8956c] focus:bg-white focus:ring-4 focus:ring-[#b8956c]/15";

  return (
    <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col bg-[#f5f0e8]">
      {/* Ambient mesh */}
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
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-semibold leading-none tracking-tighter text-[#1a1a1a]/[0.03] sm:block lg:text-[8rem]"
        >
          JOIN
        </p>

        <div className="relative w-full max-w-[440px]">
          <div
            aria-hidden
            className="absolute -inset-x-2 -bottom-2 top-4 rounded-[1.75rem] bg-gradient-to-br from-[#b8956c]/20 via-[#d4c4a8]/15 to-transparent sm:-inset-x-3 sm:-bottom-3"
          />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_20px_50px_rgba(26,26,26,0.08)] backdrop-blur-md">
            <div className="h-1 w-full bg-gradient-to-r from-[#b8956c] via-[#d4b896] to-[#b8956c]/40" />

            <div className="max-h-[min(calc(100dvh-8rem),720px)] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {/* Customer account + Staff login */}
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8956c]">
                  Customer registration
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e2d8] bg-[#faf8f4] px-2.5 py-1 text-[10px] font-semibold text-[#6b6560] transition hover:border-[#b8956c] hover:bg-white hover:text-[#8b7355]"
                >
                  <Lock size={11} className="text-[#b8956c]" />
                  Staff login
                </Link>
              </div>

              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <h1 className="font-display text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
                    Create your account
                  </h1>
                  <p className="mt-1 text-xs text-[#7a746c] sm:text-sm">
                    Shop, wishlist &amp; track orders in one place.
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f5f0e8] text-[#b8956c]">
                  <UserPlus size={18} strokeWidth={1.6} />
                </div>
              </div>

              {success && (
                <div className="mb-4 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/90 px-3.5 py-3 text-sm text-emerald-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Account created successfully</p>
                    <p className="mt-0.5 text-xs text-emerald-700">
                      You can now{" "}
                      <Link href="/sign-in" className="font-semibold underline">
                        sign in
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="mb-4 rounded-2xl border border-red-100 bg-red-50/90 px-3.5 py-2.5 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                      First name
                    </label>
                    <input
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      placeholder="First"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                      Last name
                    </label>
                    <input
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="Last"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="10-digit mobile"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                    Gender
                  </label>
                  <div className="flex gap-2">
                    {(["Male", "Female"] as const).map((g) => {
                      const active = form.gender === g;
                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => updateField("gender", g)}
                          className={`flex-1 rounded-2xl border py-2.5 text-sm font-semibold transition ${
                            active
                              ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                              : "border-[#ebe4d9] bg-[#faf8f4] text-[#5c564e] hover:border-[#c4b8a8]"
                          }`}
                        >
                          {g}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="Min. 6 characters"
                      className={`${fieldClass} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] hover:bg-[#f0e8dc]"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9188]">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        updateField("confirmPassword", e.target.value)
                      }
                      placeholder="Confirm password"
                      className={`${fieldClass} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a9188] hover:bg-[#f0e8dc]"
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-1 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#1a1a1a] text-sm font-semibold text-white transition hover:bg-[#2c2a26] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-[#b8956c]"
                  />
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Creating account…
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-[#6b6560]">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-[#b8956c] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="border-t border-[#f0ebe3] bg-[#faf8f4]/80 px-4 py-3 text-center">
              <p className="text-[11px] text-[#9a9188]">
                <span className="font-semibold text-[#1a1a1a]">Shop ready</span>
                {" — "}wishlist, cart &amp; order history after you join
              </p>
            </div>
          </div>

          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] text-[#9a9188]">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#b8956c]" />
              Your details stay on your account
            </span>
            <span className="text-[#d4cdc2]">·</span>
            {/* <Link
              href="/"
              className="inline-flex items-center gap-1 font-medium text-[#1a1a1a]/80 underline decoration-[#e0d9ce] underline-offset-2 transition hover:text-[#1a1a1a] hover:decoration-[#b8956c]"
            >
              <ArrowLeft size={12} />
              Back to website
            </Link> */}
          </p>
        </div>
      </div>
    </div>
  );
}
