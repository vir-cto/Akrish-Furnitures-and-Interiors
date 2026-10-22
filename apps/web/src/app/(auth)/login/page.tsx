// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this to your real authentication API.
//        *
//        * Example:
//        *
//        * const response = await fetch("/api/auth/login", {
//        *   method: "POST",
//        *   headers: {
//        *     "Content-Type": "application/json",
//        *   },
//        *   body: JSON.stringify({
//        *     email,
//        *     password,
//        *   }),
//        * });
//        *
//        * const data = await response.json();
//        *
//        * if (!response.ok) {
//        *   throw new Error(data.message || "Invalid credentials");
//        * }
//        */

//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Invalid email or password.");
//       }

//       router.push("/");
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Unable to sign in. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-4">
//       <div className="w-full max-w-[1100px] min-h-[650px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
//         {/* LEFT - LOGIN FORM */}
//         <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
//           <div className="w-full max-w-[420px]">
//             {/* Logo */}
//             <div className="mb-10">
//               <div className="text-[28px] font-bold tracking-tight text-[#9a5b18]">
//                 Akrish
//               </div>

//               <div className="text-[9px] uppercase tracking-[3px] text-[#6d6d6d]">
//                 Furniture and Interior
//               </div>
//             </div>

//             {/* Heading */}
//             <div className="mb-8">
//               <h1 className="text-[28px] font-semibold text-[#202020]">
//                 Sign in to Collective ERP
//               </h1>

//               <p className="mt-2 text-sm text-[#777]">
//                 Access your interior and furniture modules
//               </p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-medium text-[#333]"
//                 >
//                   Email address
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   autoComplete="email"
//                   className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="mb-2 flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-[#333]"
//                   >
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       // Forgot password can be connected later
//                       router.push("/forgot-password");
//                     }}
//                     className="text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-20 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {/* Error */}
//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                   {error}
//                 </div>
//               )}

//               {/* Remember */}
//               <div className="flex items-center gap-2">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                 />

//                 <label
//                   htmlFor="remember"
//                   className="text-sm text-[#666]"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               {/* Login button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {loading ? "Signing in..." : "Sign In"}
//               </button>
//             </form>

//             {/* Footer */}
//             <p className="mt-8 text-center text-xs text-[#999]">
//               Authorized users only
//             </p>
//           </div>
//         </section>

//         {/* RIGHT - INTERIOR IMAGE / BRANDING */}
//         <section className="relative hidden min-h-[650px] overflow-hidden lg:block">
//           {/* Background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//             }}
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/20" />

//           {/* Content */}
//           <div className="relative z-10 flex h-full flex-col justify-between p-10">
//             <div className="flex justify-end">
//               <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                 Interior & Furniture ERP
//               </div>
//             </div>

//             <div className="max-w-[420px]">
//               <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                 Collective ERP
//               </div>

//               <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                 Transforming Spaces,
//                 <br />
//                 Creating Better Lives
//               </h2>

//               <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                 Manage your interior projects, clients, quotations,
//                 employees, payments and furniture operations from one
//                 connected ERP platform.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       // After successful login → go to Module Switcher
//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/"); // will land on Module Switcher page
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-4">
//       <div className="w-full max-w-[1100px] min-h-[650px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
//         {/* LEFT – FORM */}
//         <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
//           <div className="w-full max-w-[420px]">
//             <div className="mb-10">
//               <div className="text-[28px] font-bold tracking-tight text-[#9a5b18]">Akrish</div>
//               <div className="text-[9px] uppercase tracking-[3px] text-[#6d6d6d]">
//                 Furniture and Interior
//               </div>
//             </div>

//             <div className="mb-8">
//               <h1 className="text-[28px] font-semibold text-[#202020]">
//                 Sign in to Collective ERP
//               </h1>
//               <p className="mt-2 text-sm text-[#777]">
//                 Access your interior and furniture modules
//               </p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-5">
//               <div>
//                 <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#333]">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="admin@akrish.in"
//                   autoComplete="email"
//                   className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <div className="mb-2 flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium text-[#333]">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => router.push("/forgot-password")}
//                     className="text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-20 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                   {error}
//                 </div>
//               )}

//               <div className="flex items-center gap-2">
//                 <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]" />
//                 <label htmlFor="remember" className="text-sm text-[#666]">Remember me</label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {loading ? "Signing in..." : "Sign In"}
//               </button>
//             </form>

//             <p className="mt-8 text-center text-xs text-[#999]">Authorized users only</p>
//             {/* <p className="mt-2 text-center text-xs text-[#aaa]">
//               Demo: admin@akrish.in / Admin123
//             </p> */}
//           </div>
//         </section>

//         {/* RIGHT – BRANDING */}
//         <section className="relative hidden min-h-[650px] overflow-hidden lg:block">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//             }}
//           />
//           <div className="absolute inset-0 bg-black/20" />
//           <div className="relative z-10 flex h-full flex-col justify-between p-10">
//             <div className="flex justify-end">
//               <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                 Interior & Furniture ERP
//               </div>
//             </div>
//             <div className="max-w-[420px]">
//               <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                 Collective ERP
//               </div>
//               <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                 Transforming Spaces,
//                 <br />
//                 Creating Better Lives
//               </h2>
//               <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                 Manage your interior projects, clients, quotations, employees, payments and furniture operations from one connected ERP platform.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/");
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       {/* Header */}
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">A</span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Body */}
//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           {/* LEFT – FORM */}
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized users only
//               </p>
//             </div>
//           </section>

//           {/* RIGHT – BRANDING */}
//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior & Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login, lastError } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       router.push(redirect || "/");
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">
//                 A
//               </span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized staff only · Customers use the website login
//               </p>
//             </div>
//           </section>

//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior & Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/");
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1]">
//       {/* Keep your existing login UI here — form, header, image panel, etc. */}
//       {/* Example minimal form if you need a full drop-in: */}
//       <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-10">
//         <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
//         <p className="mt-1 text-sm text-slate-500">Sign in to Collective ERP</p>

//         <form onSubmit={handleLogin} className="mt-8 space-y-4">
//           {error && (
//             <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
//               {error}
//             </div>
//           )}

//           <div>
//             <label className="mb-1.5 block text-sm font-medium text-slate-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//               placeholder="admin@akrish.in"
//               autoComplete="email"
//             />
//           </div>

//           <div>
//             <label className="mb-1.5 block text-sm font-medium text-slate-700">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="h-11 w-full rounded-lg border border-slate-200 px-3 pr-16 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                 placeholder="••••••••"
//                 autoComplete="current-password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((v) => !v)}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="flex h-11 w-full items-center justify-center rounded-lg bg-[#176b5b] text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60"
//           >
//             {loading ? "Signing in..." : "Sign in"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-screen items-center justify-center bg-[#f7f6f1]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       router.push(redirect || "/");
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       {/* Header */}
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">A</span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture &amp; Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Body */}
//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           {/* LEFT – FORM */}
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized staff only · Customers use the website login
//               </p>
//             </div>
//           </section>

//           {/* RIGHT – BRANDING */}
//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f6f1]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";
//   // only same-origin relative paths
//   if (path.startsWith("/") && !path.startsWith("//")) {
//     // don't send staff to public home by accident
//     if (path === "/") return "/erp";
//     return path;
//   }
//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     // Prefer ERP firebase client if present
//     let authMod: { auth?: { currentUser: { getIdToken: () => Promise<string> } | null } } | null =
//       null;
//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();
//     document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold session; middleware may need cookie from AuthContext
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">A</span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture &amp; Interior
//               </p>
//             </div>
//           </div>

//           {/* <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div> */}

//           <div className="flex items-center gap-2 sm:gap-3">
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e2da] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#17352f] transition hover:bg-[#f7f6f1] sm:px-3 sm:py-2 sm:text-sm"
//             >
//               <ArrowLeft className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
//               <span className="hidden xs:inline sm:inline">Back to website</span>
//               {/* <span className="sm:hidden">Website</span> */}
//             </Link>

//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized staff only · Customers use the website login
//               </p>
//             </div>
//           </section>

//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f6f1]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import { ArrowLeft, Eye, EyeOff } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";
//   if (path.startsWith("/") && !path.startsWith("//")) {
//     if (path === "/") return "/erp";
//     return path;
//   }
//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: { currentUser: { getIdToken: () => Promise<string> } | null };
//     } | null = null;
//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();
//     document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold session
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">A</span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture &amp; Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <Link
//               href="/"
//               className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e2da] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#17352f] transition hover:bg-[#f7f6f1] sm:px-3 sm:py-2 sm:text-sm"
//             >
//               <ArrowLeft className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
//               <span className="hidden sm:inline">Back to website</span>
//               <span className="sm:hidden">Website</span>
//             </Link>

//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-12 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-[#176b5b] hover:bg-[#f0f9f6]"
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                     >
//                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized staff only · Customers use the website login
//               </p>
//             </div>
//           </section>

//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f6f1]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";

//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }

//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();

//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Unable to sign in."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f2ed] px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-900/[0.06] blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-amber-700/[0.07] blur-3xl" />

//       <div className="relative z-10 w-full max-w-[1180px]">
//         {/* Top navigation */}
//         <header className="mb-5 flex items-center justify-between gap-3 px-1 sm:mb-7 sm:px-2">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#686960] transition-colors hover:text-[#176b5b]"
//           >
//             <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#deded5] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={16} />
//             </span>
//             <span className="hidden sm:inline">Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-2 rounded-full border border-[#deded5] bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm sm:px-4">
//             <ShieldCheck size={15} className="text-[#176b5b]" />
//             <span className="text-xs font-semibold tracking-wide text-[#44483f] sm:text-sm">
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Main login card */}
//         <div className="grid overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_25px_80px_rgba(36,43,34,0.12)] lg:min-h-[670px] lg:grid-cols-[0.92fr_1.08fr] lg:rounded-[30px]">
//           {/* Left: Login form */}
//           <section className="flex items-center justify-center px-5 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-[68px]">
//             <div className="w-full max-w-[390px]">
//               {/* Brand */}
//               <Link
//                 href="/"
//                 className="mb-9 inline-flex items-center gap-3 sm:mb-12"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176b5b] shadow-[0_8px_20px_rgba(23,107,91,0.23)]">
//                   <span className="font-serif text-2xl font-bold text-white">
//                     A
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-2xl font-bold leading-none tracking-tight text-[#252b25]">
//                     Akrish
//                   </h2>
//                   <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#a47740]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>

//               {/* Heading */}
//               <div className="mb-8">
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#edf5f0] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#176b5b]">
//                   <Sparkles size={13} />
//                   Collective ERP
//                 </div>

//                 <h1 className="font-serif text-[32px] font-bold leading-[1.15] tracking-tight text-[#252b25] sm:text-[38px]">
//                   Welcome
//                   <br />
//                   <span className="text-[#176b5b]">back.</span>
//                 </h1>

//                 <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#777970]">
//                   Sign in to manage your projects, clients and daily
//                   business operations.
//                 </p>
//               </div>

//               {/* Login form */}
//               <form onSubmit={handleLogin} className="space-y-5">
//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-[13px] font-semibold text-[#383d36]"
//                   >
//                     Email address
//                   </label>

//                   <div className="group flex h-[52px] items-center gap-3 rounded-xl border border-[#e4e5dd] bg-[#fafbf8] px-4 transition-all duration-200 focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/[0.08]">
//                     <Mail
//                       size={18}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="admin@akrish.in"
//                       autoComplete="email"
//                       className="h-full w-full bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-[13px] font-semibold text-[#383d36]"
//                     >
//                       Password
//                     </label>

//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#0e493d] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>

//                   <div className="group flex h-[52px] items-center gap-3 rounded-xl border border-[#e4e5dd] bg-[#fafbf8] px-4 transition-all duration-200 focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/[0.08]">
//                     <LockKeyhole
//                       size={18}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-full w-full bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b] focus:outline-none focus:ring-2 focus:ring-[#176b5b]/30"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={18} />
//                       ) : (
//                         <Eye size={18} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div
//                     role="alert"
//                     className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
//                   >
//                     <span className="mt-0.5 font-bold">!</span>
//                     <p>{error}</p>
//                   </div>
//                 )}

//                 {/* Remember me */}
//                 <div className="flex items-center justify-between gap-3 pt-0.5">
//                   <label
//                     htmlFor="remember"
//                     className="flex cursor-pointer items-center gap-2.5 text-xs text-[#72766d]"
//                   >
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="h-4 w-4 cursor-pointer rounded border-[#d4d8cf] accent-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/20"
//                     />
//                     Remember me
//                   </label>

//                   <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#777970]">
//                     <ShieldCheck size={14} className="text-[#176b5b]" />
//                     Secure access
//                   </span>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative flex h-[53px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#176b5b] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,107,91,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-[0_12px_26px_rgba(23,107,91,0.25)] focus:outline-none focus:ring-4 focus:ring-[#176b5b]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                 >
//                   <span>
//                     {loading ? "Signing in..." : "Sign in to your account"}
//                   </span>

//                   {!loading && (
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   )}
//                 </button>
//               </form>

//               {/* Staff login note */}
//               <div className="mt-7 rounded-xl border border-[#e8e9e1] bg-[#fafbf8] p-4 text-center">
//                 <p className="text-xs leading-5 text-[#777970]">
//                   Are you a staff member?
//                 </p>

//                 <p className="mt-1.5">
//                   <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#176b5b]">
//                     Collective ERP Staff Portal
//                     <ShieldCheck size={15} />
//                   </span>
//                 </p>
//               </div>

//               <p className="mt-6 text-center text-[11px] leading-5 text-[#9a9d94]">
//                 Authorized staff only. Customers can continue using the
//                 main website.
//               </p>
//             </div>
//           </section>

//           {/* Right: Interior image panel */}
//           <section className="relative hidden overflow-hidden bg-[#26372e] lg:block">
//             {/* Background image */}
//             <div
//               className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.03]"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90')",
//               }}
//             />

//             {/* Layered overlays */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#17241d]/35 via-[#17241d]/10 to-[#101c15]/90" />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#15251c]/20 to-transparent" />

//             <div className="relative z-10 flex min-h-[670px] h-full flex-col justify-between p-8 xl:p-12">
//               {/* Top badge */}
//               <div className="flex justify-end">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-xs font-medium text-white shadow-lg backdrop-blur-xl">
//                   <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>

//               {/* Bottom content */}
//               <div className="max-w-[470px] pb-2">
//                 <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
//                   <Sparkles size={14} />
//                   Designed for excellence
//                 </div>

//                 <h2 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-lg xl:text-[52px]">
//                   Transforming
//                   <br />
//                   spaces,
//                   <br />
//                   <span className="italic text-[#d8c39b]">
//                     creating better lives.
//                   </span>
//                 </h2>

//                 <p className="mt-6 max-w-[380px] text-sm leading-7 text-white/80 xl:text-[15px]">
//                   One connected platform to manage interior projects,
//                   customers, quotations, employees, payments and
//                   furniture operations with confidence.
//                 </p>

//                 <div className="my-8 h-px w-full max-w-[360px] bg-gradient-to-r from-white/50 to-transparent" />

//                 {/* Feature highlights */}
//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <p className="text-sm font-semibold text-white">
//                       Projects
//                     </p>
//                     <p className="mt-1 text-[11px] leading-4 text-white/60">
//                       Stay organized
//                     </p>
//                   </div>

//                   <div className="border-l border-white/20 pl-4">
//                     <p className="text-sm font-semibold text-white">
//                       Operations
//                     </p>
//                     <p className="mt-1 text-[11px] leading-4 text-white/60">
//                       Work smarter
//                     </p>
//                   </div>

//                   <div className="border-l border-white/20 pl-4">
//                     <p className="text-sm font-semibold text-white">
//                       Growth
//                     </p>
//                     <p className="mt-1 text-[11px] leading-4 text-white/60">
//                       Move forward
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
//                   AKRISH · FURNITURE &amp; INTERIOR
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="mt-5 flex flex-col items-center justify-between gap-2 px-2 text-[11px] text-[#92958b] sm:mt-6 sm:flex-row">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={13} />
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[100dvh] items-center justify-center bg-[#f4f2ed]">
//           <div className="h-11 w-11 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";

//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }

//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();

//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Unable to sign in."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f3ee] px-4 py-6 font-sans sm:px-6 lg:px-8">
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 w-full max-w-[1440px]">
//         {/* Header */}
//         <header className="mb-6 flex items-center justify-between gap-3 px-1 sm:mb-8 sm:px-2">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[#62675f] transition-colors hover:text-[#176b5b]"
//           >
//             <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={17} />
//             </span>
//             <span>Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-2 rounded-full border border-[#dedfd7] bg-white px-3 py-2 sm:px-4">
//             <ShieldCheck size={16} className="text-[#176b5b]" />
//             <span className="text-xs font-semibold text-[#41463f] sm:text-sm">
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Main card */}
//         <div className="grid w-full overflow-hidden rounded-2xl border border-white bg-white shadow-[0_24px_80px_rgba(36,43,34,0.12)] lg:min-h-[700px] lg:grid-cols-2 lg:rounded-[28px]">
//           {/* Login section */}
//           <section className="flex items-center justify-center px-5 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-20">
//             <div className="w-full max-w-[470px]">
//               {/* Brand */}
//               <Link
//                 href="/"
//                 className="mb-9 inline-flex items-center gap-3 sm:mb-11"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#176b5b] shadow-lg shadow-emerald-900/15">
//                   <span className="text-2xl font-bold text-white">
//                     A
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#252b25]">
//                     Akrish
//                   </h2>
//                   <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a47740]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>

//               {/* Title */}
//               <div className="mb-8">
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#edf5f0] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#176b5b]">
//                   <Sparkles size={14} />
//                   Collective ERP
//                 </div>

//                 <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#252b25] sm:text-4xl">
//                   Welcome back.
//                 </h1>

//                 <p className="mt-3 max-w-[400px] text-sm leading-6 text-[#747970] sm:text-base">
//                   Sign in to manage your projects, clients, and daily
//                   business operations.
//                 </p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-semibold text-[#383d36]"
//                   >
//                     Email address
//                   </label>

//                   <div className="group flex h-13 min-h-[54px] items-center gap-3 rounded-xl border border-[#e0e2d9] bg-[#fafbf8] px-4 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <Mail
//                       size={19}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="admin@akrish.in"
//                       autoComplete="email"
//                       className="h-full min-w-0 flex-1 bg-transparent py-3 text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-3">
//                     <label
//                       htmlFor="password"
//                       className="text-sm font-semibold text-[#383d36]"
//                     >
//                       Password
//                     </label>

//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline sm:text-sm"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>

//                   <div className="group flex min-h-[54px] items-center gap-3 rounded-xl border border-[#e0e2d9] bg-[#fafbf8] px-4 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <LockKeyhole
//                       size={19}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-full min-w-0 flex-1 bg-transparent py-3 text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b] focus:outline-none focus:ring-2 focus:ring-[#176b5b]/30"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={19} />
//                       ) : (
//                         <Eye size={19} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Error */}
//                 {error && (
//                   <div
//                     role="alert"
//                     className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
//                   >
//                     {error}
//                   </div>
//                 )}

//                 {/* Remember me */}
//                 <div className="flex items-center justify-between gap-3 py-1">
//                   <label
//                     htmlFor="remember"
//                     className="flex cursor-pointer items-center gap-2.5 text-sm text-[#72766d]"
//                   >
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#176b5b] focus:ring-[#176b5b]"
//                     />
//                     Remember me
//                   </label>

//                   <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#777970]">
//                     <ShieldCheck size={15} className="text-[#176b5b]" />
//                     Secure access
//                   </span>
//                 </div>

//                 {/* Login button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,107,91,0.17)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#176b5b]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                 >
//                   {loading ? "Signing in..." : "Sign in to your account"}

//                   {!loading && (
//                     <ArrowRight
//                       size={18}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   )}
//                 </button>
//               </form>

//               {/* Staff information */}
//               <div className="mt-7 rounded-xl border border-[#e5e7de] bg-[#fafbf8] px-4 py-5 text-center transition-colors hover:border-[#cbdcd2]">
//                 <p className="text-sm text-[#777970]">
//                   Are you a staff member?
//                 </p>

//                 <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#176b5b]">
//                   Collective ERP Staff Portal
//                   <ShieldCheck size={16} />
//                 </p>
//               </div>

//               <p className="mt-6 text-center text-xs leading-5 text-[#96998f]">
//                 Authorized staff only. Customers can continue using
//                 the main website.
//               </p>
//             </div>
//           </section>

//           {/* Interior image section */}
//           <section className="relative hidden min-h-[700px] overflow-hidden bg-[#26372e] lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90')",
//               }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-[#17241d]/35 via-[#17241d]/15 to-[#101c15]/90" />

//             <div className="relative z-10 flex h-full min-h-[700px] flex-col justify-between p-8 xl:p-12 2xl:p-16">
//               {/* Image badge */}
//               <div className="flex justify-end">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
//                   <span className="h-2 w-2 rounded-full bg-emerald-300" />
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>

//               {/* Image text */}
//               <div className="max-w-[500px] pb-4">
//                 <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
//                   <Sparkles size={15} />
//                   Designed for excellence
//                 </div>

//                 <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-white drop-shadow-lg xl:text-5xl 2xl:text-6xl">
//                   Transforming
//                   <br />
//                   spaces,
//                   <br />
//                   <span className="text-[#e2cda4]">
//                     creating better lives.
//                   </span>
//                 </h2>

//                 <p className="mt-6 max-w-[430px] text-sm leading-7 text-white/85 xl:text-base">
//                   Manage interior projects, customers, quotations,
//                   employees, payments, and furniture operations
//                   through one connected ERP platform.
//                 </p>

//                 <div className="my-8 h-px w-full max-w-[420px] bg-gradient-to-r from-white/50 to-transparent" />

//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Projects
//                     </p>
//                     <p className="mt-1.5 text-xs leading-5 text-white/65">
//                       Stay organized
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-4">
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Operations
//                     </p>
//                     <p className="mt-1.5 text-xs leading-5 text-white/65">
//                       Work smarter
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-4">
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Growth
//                     </p>
//                     <p className="mt-1.5 text-xs leading-5 text-white/65">
//                       Move forward
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
//                   Akrish · Furniture &amp; Interior
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="mt-5 flex flex-col items-center justify-between gap-2 px-2 text-xs text-[#92958b] sm:flex-row">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={14} />
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-screen items-center justify-center bg-[#f4f3ee]">
//           <div className="h-11 w-11 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";

//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }

//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();

//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Unable to sign in."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-dvh overflow-x-hidden bg-[#f4f3ee] font-sans lg:h-dvh lg:min-h-0 lg:overflow-hidden">
//       {/* Background decoration */}
//       <div className="pointer-events-none fixed -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6 sm:py-5 lg:h-full lg:min-h-0 lg:px-8 lg:py-3 xl:px-10">
//         {/* Header */}
//         <header className="mb-4 flex shrink-0 items-center justify-between gap-3 sm:mb-5 lg:mb-3">
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

//           <div className="inline-flex items-center gap-2 rounded-full border border-[#dedfd7] bg-white px-3 py-2 sm:px-4">
//             <ShieldCheck size={15} className="text-[#176b5b]" />
//             <span className="text-[11px] font-semibold text-[#41463f] sm:text-sm">
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Main card */}
//         <div className="grid w-full flex-1 overflow-hidden rounded-2xl border border-white bg-white shadow-[0_20px_65px_rgba(36,43,34,0.10)] lg:min-h-0 lg:grid-cols-2 lg:rounded-[26px]">
//           {/* Login section */}
//           <section className="flex min-h-0 items-center justify-center px-5 py-7 sm:px-10 sm:py-8 lg:px-8 lg:py-4 xl:px-14 2xl:px-20">
//             <div className="w-full max-w-[470px]">
//               {/* Brand */}
//               <Link
//                 href="/"
//                 className="mb-6 inline-flex items-center gap-3 sm:mb-7 lg:mb-5"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] shadow-md shadow-emerald-900/15">
//                   <span className="text-xl font-bold text-white">
//                     A
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="text-xl font-bold leading-tight tracking-tight text-[#252b25] sm:text-2xl">
//                     Akrish
//                   </h2>
//                   <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#a47740]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>

//               {/* Heading */}
//               <div className="mb-5 lg:mb-4">
//                 <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#edf5f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#176b5b]">
//                   <Sparkles size={13} />
//                   Collective ERP
//                 </div>

//                 <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#252b25] sm:text-4xl lg:text-[34px]">
//                   Welcome back.
//                 </h1>

//                 <p className="mt-2 max-w-[400px] text-sm leading-5 text-[#747970]">
//                   Sign in to manage your projects, clients, and daily
//                   business operations.
//                 </p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleLogin} className="space-y-4">
//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-sm font-semibold text-[#383d36]"
//                   >
//                     Email address
//                   </label>

//                   <div className="group flex h-[48px] items-center gap-3 rounded-xl border border-[#e0e2d9] bg-[#fafbf8] px-3.5 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <Mail
//                       size={18}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="admin@akrish.in"
//                       autoComplete="email"
//                       className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-3">
//                     <label
//                       htmlFor="password"
//                       className="text-sm font-semibold text-[#383d36]"
//                     >
//                       Password
//                     </label>

//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>

//                   <div className="group flex h-[48px] items-center gap-3 rounded-xl border border-[#e0e2d9] bg-[#fafbf8] px-3.5 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <LockKeyhole
//                       size={18}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b] focus:outline-none focus:ring-2 focus:ring-[#176b5b]/30"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={18} />
//                       ) : (
//                         <Eye size={18} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div
//                     role="alert"
//                     className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm leading-5 text-red-700"
//                   >
//                     {error}
//                   </div>
//                 )}

//                 {/* Remember me */}
//                 <div className="flex items-center justify-between gap-3 py-0.5">
//                   <label
//                     htmlFor="remember"
//                     className="flex cursor-pointer items-center gap-2.5 text-xs text-[#72766d]"
//                   >
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#176b5b] focus:ring-[#176b5b]"
//                     />
//                     Remember me
//                   </label>

//                   <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#777970]">
//                     <ShieldCheck size={14} className="text-[#176b5b]" />
//                     Secure access
//                   </span>
//                 </div>

//                 {/* Sign in */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group flex min-h-[49px] w-full items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-bold text-white shadow-[0_7px_18px_rgba(23,107,91,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#176b5b]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                 >
//                   {loading ? "Signing in..." : "Sign in to your account"}

//                   {!loading && (
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   )}
//                 </button>
//               </form>

//               {/* Staff portal */}
//               <div className="mt-5 rounded-xl border border-[#e5e7de] bg-[#fafbf8] px-4 py-3.5 text-center transition-colors hover:border-[#cbdcd2] lg:mt-4">
//                 <p className="text-xs text-[#777970]">
//                   Are you a staff member?
//                 </p>

//                 <p className="mt-1.5 inline-flex items-center gap-2 text-sm font-bold text-[#176b5b]">
//                   Collective ERP Staff Portal
//                   <ShieldCheck size={15} />
//                 </p>
//               </div>

//               <p className="mt-4 text-center text-[10px] leading-4 text-[#96998f]">
//                 Authorized staff only. Customers can continue using
//                 the main website.
//               </p>
//             </div>
//           </section>

//           {/* Interior image */}
//           <section className="relative hidden min-h-0 overflow-hidden bg-[#26372e] lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90')",
//               }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-[#17241d]/35 via-[#17241d]/15 to-[#101c15]/90" />

//             <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-7 xl:p-10 2xl:p-14">
//               {/* Image badge */}
//               <div className="flex justify-end">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
//                   <span className="h-2 w-2 rounded-full bg-emerald-300" />
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>

//               {/* Image content */}
//               <div className="max-w-[510px] pb-1">
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
//                   <Sparkles size={14} />
//                   Designed for excellence
//                 </div>

//                 <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-white drop-shadow-lg xl:text-4xl 2xl:text-5xl">
//                   Transforming spaces,
//                   <br />
//                   <span className="text-[#e2cda4]">
//                     creating better lives.
//                   </span>
//                 </h2>

//                 <p className="mt-4 max-w-[430px] text-sm leading-6 text-white/85 xl:text-base xl:leading-7">
//                   Manage interior projects, customers, quotations,
//                   employees, payments, and furniture operations
//                   through one connected ERP platform.
//                 </p>

//                 <div className="my-6 h-px w-full max-w-[420px] bg-gradient-to-r from-white/50 to-transparent" />

//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Projects
//                     </p>
//                     <p className="mt-1 text-xs leading-4 text-white/65">
//                       Stay organized
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-4">
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Operations
//                     </p>
//                     <p className="mt-1 text-xs leading-4 text-white/65">
//                       Work smarter
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-4">
//                     <p className="text-sm font-bold text-white xl:text-base">
//                       Growth
//                     </p>
//                     <p className="mt-1 text-xs leading-4 text-white/65">
//                       Move forward
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
//                   Akrish · Furniture &amp; Interior
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="mt-3 flex shrink-0 flex-col items-center justify-between gap-1.5 py-1 text-[10px] text-[#92958b] sm:flex-row lg:mt-2">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={13} />
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-dvh items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }



// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";

//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }

//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();

//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Unable to sign in."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-dvh overflow-x-hidden bg-[#f4f3ee] font-sans lg:h-dvh lg:min-h-0 lg:overflow-hidden">
//       {/* Background decoration */}
//       <div className="pointer-events-none fixed -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-900/[0.05] blur-3xl" />
//       <div className="pointer-events-none fixed -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-700/[0.06] blur-3xl" />

//       <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col px-4 py-3 sm:px-6 sm:py-4 lg:h-full lg:min-h-0 lg:px-8 lg:py-2">
//         {/* Header */}
//         <header className="mb-3 flex shrink-0 items-center justify-between gap-3 sm:mb-4 lg:mb-2">
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-2 text-xs font-medium text-[#62675f] transition-colors hover:text-[#176b5b] sm:text-sm"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
//               <ArrowLeft size={15} />
//             </span>
//             <span>Back to website</span>
//           </Link>

//           <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dedfd7] bg-white px-2.5 py-1.5 sm:gap-2 sm:px-3">
//             <ShieldCheck size={14} className="text-[#176b5b]" />
//             <span className="text-[10px] font-semibold text-[#41463f] sm:text-xs">
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Compact main card */}
//         <div className="grid w-full flex-1 overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:min-h-0 lg:grid-cols-2 lg:rounded-[22px]">
//           {/* Login section */}
//           <section className="flex min-h-0 items-center justify-center px-5 py-6 sm:px-8 sm:py-7 lg:px-8 lg:py-3 xl:px-12">
//             <div className="w-full max-w-[390px]">
//               {/* Brand */}
//               <Link
//                 href="/"
//                 className="mb-5 inline-flex items-center gap-2.5 sm:mb-6 lg:mb-4"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] shadow-md shadow-emerald-900/15">
//                   <span className="text-xl font-bold text-white">A</span>
//                 </div>

//                 <div>
//                   <h2 className="text-xl font-bold leading-tight tracking-tight text-[#252b25]">
//                     Akrish
//                   </h2>
//                   <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a47740]">
//                     Furniture &amp; Interior
//                   </p>
//                 </div>
//               </Link>

//               {/* Heading */}
//               <div className="mb-5 lg:mb-4">
//                 <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
//                   <Sparkles size={12} />
//                   Collective ERP
//                 </div>

//                 <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#252b25]">
//                   Welcome back.
//                 </h1>

//                 <p className="mt-2 text-xs leading-5 text-[#747970] sm:text-sm">
//                   Sign in to manage your projects, clients, and daily
//                   business operations.
//                 </p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleLogin} className="space-y-3.5">
//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-[#383d36] sm:text-sm"
//                   >
//                     Email address
//                   </label>

//                   <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <Mail
//                       size={17}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="admin@akrish.in"
//                       autoComplete="email"
//                       className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-[#383d36] sm:text-sm"
//                     >
//                       Password
//                     </label>

//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-[11px] font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline sm:text-xs"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>

//                   <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                     <LockKeyhole
//                       size={17}
//                       className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                     />

//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b] focus:outline-none focus:ring-2 focus:ring-[#176b5b]/30"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={17} />
//                       ) : (
//                         <Eye size={17} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <div
//                     role="alert"
//                     className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs leading-5 text-red-700"
//                   >
//                     {error}
//                   </div>
//                 )}

//                 {/* Remember me */}
//                 <div className="flex items-center justify-between gap-2 py-0.5">
//                   <label
//                     htmlFor="remember"
//                     className="flex cursor-pointer items-center gap-2 text-[11px] text-[#72766d] sm:text-xs"
//                   >
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-[#176b5b]"
//                     />
//                     Remember me
//                   </label>

//                   <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#777970] sm:text-[11px]">
//                     <ShieldCheck size={13} className="text-[#176b5b]" />
//                     Secure access
//                   </span>
//                 </div>

//                 {/* Sign in */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#176b5b]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                 >
//                   {loading ? "Signing in..." : "Sign in to your account"}

//                   {!loading && (
//                     <ArrowRight
//                       size={16}
//                       className="transition-transform duration-200 group-hover:translate-x-1"
//                     />
//                   )}
//                 </button>
//               </form>

//               {/* Staff portal */}
//               <div className="mt-4 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-3 text-center lg:mt-3">
//                 <p className="text-[11px] text-[#777970]">
//                   Are you a staff member?
//                 </p>

//                 <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-[#176b5b]">
//                   Collective ERP Staff Portal
//                   <ShieldCheck size={14} />
//                 </p>
//               </div>

//               <p className="mt-3 text-center text-[10px] leading-4 text-[#96998f]">
//                 Authorized staff only. Customers can use the main website.
//               </p>
//             </div>
//           </section>

//           {/* Interior image section */}
//           <section className="relative hidden min-h-0 overflow-hidden bg-[#26372e] lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85')",
//               }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-[#17241d]/35 via-[#17241d]/15 to-[#101c15]/90" />

//             <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-6 xl:p-9 2xl:p-11">
//               {/* Badge */}
//               <div className="flex justify-end">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
//                   <span className="h-2 w-2 rounded-full bg-emerald-300" />
//                   Interior &amp; Furniture ERP
//                 </div>
//               </div>

//               {/* Image content */}
//               <div className="max-w-[450px] pb-1">
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                   <Sparkles size={13} />
//                   Designed for excellence
//                 </div>

//                 <h2 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg xl:text-4xl 2xl:text-5xl">
//                   Transforming spaces,
//                   <br />
//                   <span className="text-[#e2cda4]">
//                     creating better lives.
//                   </span>
//                 </h2>

//                 <p className="mt-4 max-w-[390px] text-xs leading-6 text-white/85 sm:text-sm">
//                   Manage interior projects, customers, quotations,
//                   employees, payments, and furniture operations
//                   through one connected ERP platform.
//                 </p>

//                 <div className="my-5 h-px w-full max-w-[360px] bg-gradient-to-r from-white/50 to-transparent" />

//                 <div className="grid grid-cols-3 gap-3">
//                   <div>
//                     <p className="text-xs font-bold text-white sm:text-sm">
//                       Projects
//                     </p>
//                     <p className="mt-1 text-[10px] leading-4 text-white/65 sm:text-xs">
//                       Stay organized
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-3">
//                     <p className="text-xs font-bold text-white sm:text-sm">
//                       Operations
//                     </p>
//                     <p className="mt-1 text-[10px] leading-4 text-white/65 sm:text-xs">
//                       Work smarter
//                     </p>
//                   </div>

//                   <div className="border-l border-white/25 pl-3">
//                     <p className="text-xs font-bold text-white sm:text-sm">
//                       Growth
//                     </p>
//                     <p className="mt-1 text-[10px] leading-4 text-white/65 sm:text-xs">
//                       Move forward
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
//                   Akrish · Furniture &amp; Interior
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="mt-2 flex shrink-0 flex-col items-center justify-between gap-1 py-1 text-[10px] text-[#92958b] sm:flex-row">
//           <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

//           <p className="flex items-center gap-1.5">
//             <ShieldCheck size={12} />
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-dvh items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";
//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }
//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();
//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
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
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Centered compact card */}
//         <div className="flex min-h-0 flex-1 items-center justify-center">
//           <div className="grid w-full max-w-[860px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:max-h-[min(560px,calc(100dvh-7rem))] lg:grid-cols-2">
//             {/* Login form */}
//             <section className="flex items-center justify-center px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-6">
//               <div className="w-full max-w-[340px]">
//                 <Link
//                   href="/"
//                   className="mb-4 inline-flex items-center gap-2.5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] shadow-md shadow-emerald-900/15">
//                     <span className="text-base font-bold text-white">A</span>
//                   </div>
//                   <div>
//                     <h2 className="text-base font-bold leading-tight tracking-tight text-[#252b25]">
//                       Akrish
//                     </h2>
//                     <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a47740]">
//                       Furniture &amp; Interior
//                     </p>
//                   </div>
//                 </Link>

//                 <div className="mb-4">
//                   <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
//                     <Sparkles size={11} />
//                     Collective ERP
//                   </div>

//                   <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#252b25]">
//                     Welcome back.
//                   </h1>

//                   <p className="mt-1.5 text-sm leading-5 text-[#747970]">
//                     Sign in to manage projects, clients, and operations.
//                   </p>
//                 </div>

//                 <form onSubmit={handleLogin} className="space-y-3">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-1.5 block text-sm font-semibold text-[#383d36]"
//                     >
//                       Email address
//                     </label>
//                     <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                       <Mail
//                         size={16}
//                         className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                       />
//                       <input
//                         id="email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="admin@akrish.in"
//                         autoComplete="email"
//                         className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="mb-1.5 flex items-center justify-between gap-2">
//                       <label
//                         htmlFor="password"
//                         className="text-sm font-semibold text-[#383d36]"
//                       >
//                         Password
//                       </label>
//                       <button
//                         type="button"
//                         onClick={() => router.push("/forgot-password")}
//                         className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline"
//                       >
//                         Forgot password?
//                       </button>
//                     </div>
//                     <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                       <LockKeyhole
//                         size={16}
//                         className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                       />
//                       <input
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         autoComplete="current-password"
//                         className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword((v) => !v)}
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b]"
//                         aria-label={
//                           showPassword ? "Hide password" : "Show password"
//                         }
//                       >
//                         {showPassword ? (
//                           <EyeOff size={16} />
//                         ) : (
//                           <Eye size={16} />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {error && (
//                     <div
//                       role="alert"
//                       className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm leading-5 text-red-700"
//                     >
//                       {error}
//                     </div>
//                   )}

//                   <div className="flex items-center justify-between gap-2 py-0.5">
//                     <label
//                       htmlFor="remember"
//                       className="flex cursor-pointer items-center gap-2 text-xs text-[#72766d]"
//                     >
//                       <input
//                         id="remember"
//                         type="checkbox"
//                         className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-[#176b5b]"
//                       />
//                       Remember me
//                     </label>
//                     <span className="inline-flex items-center gap-1 text-xs font-medium text-[#777970]">
//                       <ShieldCheck size={13} className="text-[#176b5b]" />
//                       Secure access
//                     </span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                   >
//                     {loading ? "Signing in..." : "Sign in to your account"}
//                     {!loading && (
//                       <ArrowRight
//                         size={16}
//                         className="transition-transform duration-200 group-hover:translate-x-1"
//                       />
//                     )}
//                   </button>
//                 </form>

//                 <div className="mt-3 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-2.5 text-center">
//                   <p className="text-xs text-[#777970]">Staff portal</p>
//                   <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#176b5b]">
//                     Collective ERP
//                     <ShieldCheck size={14} />
//                   </p>
//                 </div>

//                 <p className="mt-2.5 text-center text-xs leading-4 text-[#96998f]">
//                   Authorized staff only. Customers use the website login.
//                 </p>
//               </div>
//             </section>

//             {/* Image panel */}
//             <section className="relative hidden overflow-hidden bg-[#26372e] lg:block">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#17241d]/35 via-[#17241d]/15 to-[#101c15]/90" />

//               <div className="relative z-10 flex h-full flex-col justify-between p-6 xl:p-7">
//                 <div className="flex justify-end">
//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
//                     <span className="h-2 w-2 rounded-full bg-emerald-300" />
//                     Interior &amp; Furniture ERP
//                   </div>
//                 </div>

//                 <div className="max-w-[360px]">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                     <Sparkles size={12} />
//                     Designed for excellence
//                   </div>

//                   <h2 className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg xl:text-3xl">
//                     Transforming spaces,
//                     <br />
//                     <span className="text-[#e2cda4]">
//                       creating better lives.
//                     </span>
//                   </h2>

//                   <p className="mt-3 max-w-[320px] text-sm leading-6 text-white/85">
//                     Manage projects, customers, quotations, employees, and
//                     furniture ops in one ERP.
//                   </p>

//                   <div className="my-4 h-px w-full max-w-[280px] bg-gradient-to-r from-white/50 to-transparent" />

//                   <div className="grid grid-cols-3 gap-2">
//                     <div>
//                       <p className="text-sm font-bold text-white">Projects</p>
//                       <p className="mt-0.5 text-xs text-white/65">
//                         Stay organized
//                       </p>
//                     </div>
//                     <div className="border-l border-white/25 pl-2.5">
//                       <p className="text-sm font-bold text-white">Operations</p>
//                       <p className="mt-0.5 text-xs text-white/65">Work smarter</p>
//                     </div>
//                     <div className="border-l border-white/25 pl-2.5">
//                       <p className="text-sm font-bold text-white">Growth</p>
//                       <p className="mt-0.5 text-xs text-white/65">Move forward</p>
//                     </div>
//                   </div>

//                   <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
//                     Akrish · Furniture &amp; Interior
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
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Eye,
//   EyeOff,
//   Mail,
//   LockKeyhole,
//   ShieldCheck,
//   Sparkles,
//   LayoutDashboard,
// } from "lucide-react";

// function safeRedirect(path: string | null): string {
//   if (!path) return "/erp";
//   if (path.startsWith("/") && !path.startsWith("//")) {
//     return path === "/" ? "/erp" : path;
//   }
//   return "/erp";
// }

// async function setAuthCookie() {
//   try {
//     let authMod: {
//       auth?: {
//         currentUser: { getIdToken: () => Promise<string> } | null;
//       };
//     } | null = null;

//     try {
//       authMod = await import("@/core/config/firebaseClient");
//     } catch {
//       try {
//         authMod = await import("@/lib/firebase");
//       } catch {
//         authMod = null;
//       }
//     }

//     const user = authMod?.auth?.currentUser;
//     if (!user) return;

//     const token = await user.getIdToken();
//     document.cookie = `authToken=${token}; path=/; max-age=${
//       60 * 60 * 24 * 7
//     }; SameSite=Lax`;
//   } catch {
//     // AuthContext may still hold the authenticated session.
//   }
// }

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const { login, lastError } = useAuth() as {
//     login: (email: string, password: string) => Promise<boolean>;
//     lastError?: string | null;
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const success = await login(email.trim(), password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       await setAuthCookie();

//       const target = safeRedirect(searchParams.get("redirect"));
//       router.push(target);
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
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
//               Secure Staff Portal
//             </span>
//           </div>
//         </header>

//         {/* Centered card */}
//         <div className="flex min-h-0 flex-1 items-center justify-center">
//           <div className="grid w-full max-w-[860px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:max-h-[min(560px,calc(100dvh-7rem))] lg:grid-cols-2">
//             {/* Login form */}
//             <section className="flex flex-col">
//               {/* Mobile ERP banner (fills top space on small screens) */}
//               <div className="flex shrink-0 items-center gap-2 border-b border-[#e8ebe4] bg-gradient-to-r from-[#176b5b] to-[#1a7a68] px-5 py-2.5 lg:hidden">
//                 <LayoutDashboard size={15} className="text-white/90" />
//                 <div className="min-w-0">
//                   <p className="text-xs font-bold text-white">
//                     Collective ERP
//                   </p>
//                   <p className="text-[10px] text-white/75">
//                     Interior &amp; Furniture · Staff access
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-1 items-center justify-center px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-6">
//                 <div className="w-full max-w-[340px]">
//                   <Link
//                     href="/"
//                     className="mb-4 inline-flex items-center gap-2.5"
//                   >
//                     <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] shadow-md shadow-emerald-900/15">
//                       <span className="text-base font-bold text-white">A</span>
//                     </div>
//                     <div>
//                       <h2 className="text-base font-bold leading-tight tracking-tight text-[#252b25]">
//                         Akrish
//                       </h2>
//                       <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a47740]">
//                         Furniture &amp; Interior
//                       </p>
//                     </div>
//                   </Link>

//                   <div className="mb-4">
//                     <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
//                       <Sparkles size={11} />
//                       Collective ERP
//                     </div>

//                     <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#252b25]">
//                       Welcome back.
//                     </h1>

//                     <p className="mt-1.5 text-sm leading-5 text-[#747970]">
//                       Sign in to manage projects, clients, and operations.
//                     </p>
//                   </div>

//                   <form onSubmit={handleLogin} className="space-y-3">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-sm font-semibold text-[#383d36]"
//                       >
//                         Email address
//                       </label>
//                       <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                         <Mail
//                           size={16}
//                           className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="admin@akrish.in"
//                           autoComplete="email"
//                           className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
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
//                         <button
//                           type="button"
//                           onClick={() => router.push("/forgot-password")}
//                           className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline"
//                         >
//                           Forgot password?
//                         </button>
//                       </div>
//                       <div className="group flex h-11 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
//                         <LockKeyhole
//                           size={16}
//                           className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
//                         />
//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           placeholder="Enter your password"
//                           autoComplete="current-password"
//                           className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword((v) => !v)}
//                           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b]"
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

//                     {error && (
//                       <div
//                         role="alert"
//                         className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm leading-5 text-red-700"
//                       >
//                         {error}
//                       </div>
//                     )}

//                     <div className="flex items-center justify-between gap-2 py-0.5">
//                       <label
//                         htmlFor="remember"
//                         className="flex cursor-pointer items-center gap-2 text-xs text-[#72766d]"
//                       >
//                         <input
//                           id="remember"
//                           type="checkbox"
//                           className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-[#176b5b]"
//                         />
//                         Remember me
//                       </label>
//                       <span className="inline-flex items-center gap-1 text-xs font-medium text-[#777970]">
//                         <ShieldCheck size={13} className="text-[#176b5b]" />
//                         Secure access
//                       </span>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                     >
//                       {loading ? "Signing in..." : "Sign in to your account"}
//                       {!loading && (
//                         <ArrowRight
//                           size={16}
//                           className="transition-transform duration-200 group-hover:translate-x-1"
//                         />
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-3 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-2.5 text-center">
//                     <p className="text-xs text-[#777970]">Staff portal</p>
//                     <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#176b5b]">
//                       Collective ERP
//                       <ShieldCheck size={14} />
//                     </p>
//                   </div>

//                   <p className="mt-2.5 text-center text-xs leading-4 text-[#96998f]">
//                     Authorized staff only. Customers use the website login.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Image panel — full height, no top white gap */}
//             <section className="relative hidden min-h-0 bg-[#1a2e26] lg:block">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c16]/50 via-[#17241d]/25 to-[#0a1410]/92" />

//               {/* Top ERP strip — fills upper area */}
//               <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0f1c16]/55 px-5 py-3 backdrop-blur-md">
//                 <div className="flex items-center justify-between gap-3">
//                   <div className="flex items-center gap-2">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#176b5b]">
//                       <LayoutDashboard size={15} className="text-white" />
//                     </div>
//                     <div>
//                       <p className="text-xs font-bold text-white">
//                         Collective ERP
//                       </p>
//                       <p className="text-[10px] text-white/65">
//                         Staff workspace
//                       </p>
//                     </div>
//                   </div>
//                   <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white">
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
//                     Interior &amp; Furniture
//                   </div>
//                 </div>
//               </div>

//               <div className="relative z-10 flex h-full flex-col justify-end p-6 pt-16 xl:p-7">
//                 <div className="max-w-[360px]">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
//                     <Sparkles size={12} />
//                     Designed for excellence
//                   </div>

//                   <h2 className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg xl:text-3xl">
//                     Transforming spaces,
//                     <br />
//                     <span className="text-[#e2cda4]">
//                       creating better lives.
//                     </span>
//                   </h2>

//                   <p className="mt-3 max-w-[320px] text-sm leading-6 text-white/85">
//                     Manage projects, customers, quotations, employees, and
//                     furniture ops in one ERP.
//                   </p>

//                   <div className="my-4 h-px w-full max-w-[280px] bg-gradient-to-r from-white/50 to-transparent" />

//                   <div className="grid grid-cols-3 gap-2">
//                     <div>
//                       <p className="text-sm font-bold text-white">Projects</p>
//                       <p className="mt-0.5 text-xs text-white/65">
//                         Stay organized
//                       </p>
//                     </div>
//                     <div className="border-l border-white/25 pl-2.5">
//                       <p className="text-sm font-bold text-white">Operations</p>
//                       <p className="mt-0.5 text-xs text-white/65">Work smarter</p>
//                     </div>
//                     <div className="border-l border-white/25 pl-2.5">
//                       <p className="text-sm font-bold text-white">Growth</p>
//                       <p className="mt-0.5 text-xs text-white/65">Move forward</p>
//                     </div>
//                   </div>

//                   <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
//                     Akrish · Furniture &amp; Interior
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
//             Collective ERP · Staff Access
//           </p>
//         </footer>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f3ee]">
//           <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }



"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/core/auth/AuthContext";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";

function safeRedirect(path: string | null): string {
  if (!path) return "/erp";

  if (path.startsWith("/") && !path.startsWith("//")) {
    return path === "/" ? "/erp" : path;
  }

  return "/erp";
}

async function setAuthCookie() {
  try {
    let authMod: {
      auth?: {
        currentUser: { getIdToken: () => Promise<string> } | null;
      };
    } | null = null;

    try {
      authMod = await import("@/core/config/firebaseClient");
    } catch {
      try {
        authMod = await import("@/lib/firebase");
      } catch {
        authMod = null;
      }
    }

    const user = authMod?.auth?.currentUser;
    if (!user) return;

    const token = await user.getIdToken();

    document.cookie = `authToken=${token}; path=/; max-age=${
      60 * 60 * 24 * 7
    }; SameSite=Lax`;
  } catch {
    // AuthContext may still hold the authenticated session.
  }
}


function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { login, lastError } = useAuth() as {
    login: (email: string, password: string) => Promise<boolean>;
    lastError?: string | null;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const success = await login(email.trim(), password);

      if (!success) {
        throw new Error(lastError || "Invalid email or password.");
      }

      await setAuthCookie();

      const target = safeRedirect(searchParams.get("redirect"));
      router.push(target);
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign in."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  document.title = "Collective ERP";
}, []);

  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#f4f3ee] font-sans">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-900/[0.05] blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 -right-20 h-72 w-72 rounded-full bg-amber-700/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1040px] flex-col px-4 py-3 sm:px-6 sm:py-4">
        {/* Header */}
        <header className="mb-3 flex shrink-0 items-center justify-between gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#62675f] transition-colors hover:text-[#176b5b]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedfd7] bg-white transition-all group-hover:border-[#176b5b] group-hover:bg-[#176b5b] group-hover:text-white">
              <ArrowLeft size={15} />
            </span>
            <span className="hidden sm:inline">Back to website</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dedfd7] bg-white px-3 py-1.5">
            <ShieldCheck size={14} className="text-[#176b5b]" />
            <span className="text-xs font-semibold text-[#41463f]">
              Secure Staff Portal
            </span>
          </div>
        </header>

        {/* Centered card */}
        <div className="flex min-h-0 flex-1 items-start justify-center pt-8 sm:pt-5 lg:pt-20">
          <div className="grid w-full max-w-[1080px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_55px_rgba(36,43,34,0.10)] lg:max-h-[min(720px,calc(100dvh-5.5rem))] lg:grid-cols-2">
            {/* Login form */}
            <section className="flex min-w-0 flex-col">
              {/* Mobile ERP banner */}
              <div className="flex shrink-0 items-center gap-2 border-b border-[#e8ebe4] bg-gradient-to-r from-[#176b5b] to-[#1a7a68] px-5 py-2.5 lg:hidden">
                <LayoutDashboard size={15} className="text-white/90" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white">
                    Collective ERP
                  </p>
                  <p className="text-[10px] text-white/75">
                    Interior &amp; Furniture · Staff access
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-5 xl:px-10">
                <div className="w-full max-w-[360px]">
                  {/* Brand */}
                  <Link
                    href="/"
                    className="mb-5 inline-flex items-center gap-2.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] shadow-md shadow-emerald-900/15">
                      <span className="text-lg font-bold text-white">
                        A
                      </span>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold leading-tight tracking-tight text-[#252b25]">
                        Akrish
                      </h2>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a47740]">
                        Furniture &amp; Interior
                      </p>
                    </div>
                  </Link>

                  {/* Heading */}
                  <div className="mb-5">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#edf5f0] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#176b5b]">
                      <Sparkles size={12} />
                      Collective ERP
                    </div>

                    <h1 className="text-[27px] font-bold leading-tight tracking-tight text-[#252b25]">
                      Welcome back.
                    </h1>

                    <p className="mt-2 text-sm leading-5 text-[#747970]">
                      Sign in to manage projects, clients, and operations.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleLogin} className="space-y-3.5">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-semibold text-[#383d36]"
                      >
                        Email address
                      </label>

                      <div className="group flex h-12 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3.5 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
                        <Mail
                          size={17}
                          className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
                        />

                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="admin@akrish.in"
                          autoComplete="email"
                          className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center justify-between gap-2">
                        <label
                          htmlFor="password"
                          className="text-sm font-semibold text-[#383d36]"
                        >
                          Password
                        </label>

                        <button
                          type="button"
                          onClick={() => router.push("/forgot-password")}
                          className="text-xs font-semibold text-[#176b5b] transition-colors hover:text-[#10483c] hover:underline"
                        >
                          Forgot password?
                        </button>
                      </div>

                      <div className="group flex h-12 items-center gap-2.5 rounded-lg border border-[#e0e2d9] bg-[#fafbf8] px-3.5 transition-all focus-within:border-[#176b5b] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#176b5b]/10">
                        <LockKeyhole
                          size={17}
                          className="shrink-0 text-[#92968b] transition-colors group-focus-within:text-[#176b5b]"
                        />

                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#252b25] outline-none placeholder:text-[#a6a89f]"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7c8277] transition-colors hover:bg-[#edf5f0] hover:text-[#176b5b]"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={17} />
                          ) : (
                            <Eye size={17} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div
                        role="alert"
                        className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm leading-5 text-red-700"
                      >
                        {error}
                      </div>
                    )}

                    {/* Remember me */}
                    <div className="flex items-center justify-between gap-2 py-0.5">
                      <label
                        htmlFor="remember"
                        className="flex cursor-pointer items-center gap-2 text-xs text-[#72766d]"
                      >
                        <input
                          id="remember"
                          type="checkbox"
                          className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-[#176b5b]"
                        />
                        Remember me
                      </label>

                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#777970]">
                        <ShieldCheck size={13} className="text-[#176b5b]" />
                        Secure access
                      </span>
                    </div>

                    {/* Sign in button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-bold text-white shadow-[0_6px_15px_rgba(23,107,91,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125548] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? "Signing in..." : "Sign in to your account"}

                      {!loading && (
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </form>

                  {/* Staff portal */}
                  <div className="mt-4 rounded-lg border border-[#e5e7de] bg-[#fafbf8] px-3 py-3 text-center">
                    <p className="text-xs text-[#777970]">
                      Are you a staff member?
                    </p>

                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-[#176b5b]">
                      Collective ERP Staff Portal
                      <ShieldCheck size={14} />
                    </p>
                  </div>

                  <p className="mt-3 text-center text-[11px] leading-4 text-[#96998f]">
                    Authorized staff only. Customers use the website login.
                  </p>
                </div>
              </div>
            </section>

            {/* Image panel */}
            <section className="relative hidden min-h-0 bg-[#1a2e26] lg:block">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c16]/50 via-[#17241d]/25 to-[#0a1410]/92" />

              {/* ERP strip */}
              <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0f1c16]/55 px-5 py-3 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#176b5b]">
                      <LayoutDashboard size={15} className="text-white" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">
                        Collective ERP
                      </p>
                      <p className="text-[10px] text-white/65">
                        Staff workspace
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Interior &amp; Furniture
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-7 pt-16 xl:p-9">
                <div className="max-w-[400px]">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                    <Sparkles size={12} />
                    Designed for excellence
                  </div>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg xl:text-4xl">
                    Transforming spaces,
                    <br />
                    <span className="text-[#e2cda4]">
                      creating better lives.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-[350px] text-sm leading-6 text-white/85">
                    Manage projects, customers, quotations, employees,
                    and furniture operations in one connected ERP.
                  </p>

                  <div className="my-5 h-px w-full max-w-[320px] bg-gradient-to-r from-white/50 to-transparent" />

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-sm font-bold text-white">Projects</p>
                      <p className="mt-1 text-xs text-white/65">
                        Stay organized
                      </p>
                    </div>

                    <div className="border-l border-white/25 pl-3">
                      <p className="text-sm font-bold text-white">Operations</p>
                      <p className="mt-1 text-xs text-white/65">
                        Work smarter
                      </p>
                    </div>

                    <div className="border-l border-white/25 pl-3">
                      <p className="text-sm font-bold text-white">Growth</p>
                      <p className="mt-1 text-xs text-white/65">
                        Move forward
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Akrish · Furniture &amp; Interior
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-2 flex shrink-0 items-center justify-between gap-2 py-1 text-xs text-[#92958b]">
          <p>© {new Date().getFullYear()} Akrish Furniture &amp; Interior</p>

          <p className="flex items-center gap-1.5">
            <ShieldCheck size={12} />
            Collective ERP · Staff Access
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#f4f3ee]">
          <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#dce7df] border-t-[#176b5b]" />
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
