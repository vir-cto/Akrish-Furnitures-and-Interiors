// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//             About Us
//           </p>
//           <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
//             About Akrish Furniture
//           </h1>
//           <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
//             We design and curate beautiful spaces with thoughtfully selected furniture and complete interior solutions.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
//             <p className="mt-4 text-sm leading-7 text-slate-600">
//               Akrish was founded with a simple idea — to make high-quality furniture and interior design accessible, beautiful and practical for every home and workspace.
//             </p>
//             <p className="mt-4 text-sm leading-7 text-slate-600">
//               Today we help customers discover furniture they love and support them with complete interior solutions that transform the way they live and work.
//             </p>
//           </div>

//           <div className="rounded-2xl bg-slate-900 p-8 text-white">
//             <h3 className="text-xl font-bold">What we offer</h3>
//             <ul className="mt-5 space-y-3 text-sm text-slate-300">
//               <li>• Premium furniture collection</li>
//               <li>• Residential & commercial interior design</li>
//               <li>• Custom design consultation</li>
//               <li>• Reliable delivery & support</li>
//             </ul>
//             <Link
//               href="/products"
//               className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
//             >
//               Explore Furniture
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Hammer, Sofa, HeartHandshake } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "Thoughtful materials",
    text: "Solid woods, quality finishes, and pieces built for everyday life.",
  },
  {
    icon: Hammer,
    title: "Craft first",
    text: "We prioritise construction and comfort over trends that fade.",
  },
  {
    icon: Sofa,
    title: "Rooms that work",
    text: "Furniture that feels right in real homes — not just showrooms.",
  },
  {
    icon: HeartHandshake,
    title: "Clear support",
    text: "Honest lead times, reliable delivery, and help when you need it.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <section className="border-b border-[#e8e2d8] bg-[#faf8f4]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b8956c] sm:text-xs">
            About us
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:mt-3 sm:text-4xl">
            About Akrish Furniture
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b6560] sm:mt-4">
            We design and curate beautiful spaces with thoughtfully selected
            furniture and complete interior solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1a1a1a]">
              Our story
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5c564e]">
              Akrish was founded with a simple idea — to make high-quality
              furniture and interior design accessible, beautiful, and practical
              for every home and workspace.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5c564e]">
              Today we help customers discover furniture they love and support
              them with complete interior solutions that transform the way they
              live and work.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b8956c] hover:text-[#8b7355]"
            >
              Explore the collection
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e8e2d8] bg-[#1a1a1a] p-7 text-white sm:p-9">
            <h3 className="font-display text-xl font-semibold">What we offer</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="text-[#b8956c]">•</span>
                Premium furniture collection
              </li>
              <li className="flex gap-2">
                <span className="text-[#b8956c]">•</span>
                Residential &amp; commercial interior design
              </li>
              <li className="flex gap-2">
                <span className="text-[#b8956c]">•</span>
                Custom design consultation
              </li>
              <li className="flex gap-2">
                <span className="text-[#b8956c]">•</span>
                Reliable delivery &amp; support
              </li>
            </ul>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f0ebe3]"
            >
              Explore furniture
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e8e2d8] bg-white p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3ebe0] text-[#b8956c]">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-[#1a1a1a]">
                {title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-[#6b6560]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
