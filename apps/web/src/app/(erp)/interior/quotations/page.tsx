// "use client";

// import { useMemo, useState } from "react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
// };

// const initialQuotations: Quotation[] = [
//   {
//     id: "QT-001",
//     quotationNo: "QT-2026-101",
//     client: "Rahul Kumar",
//     phone: "9876543210",
//     email: "rahul@example.com",
//     projectName: "Luxury 3 BHK Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     quotationDate: "2026-10-01",
//     validUntil: "2026-10-16",
//     amount: 720339,
//     tax: 129661,
//     total: 850000,
//     status: "Accepted",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Complete 3 BHK interior quotation.",
//   },
//   {
//     id: "QT-002",
//     quotationNo: "QT-2026-102",
//     client: "Priya Sharma",
//     phone: "9988776655",
//     email: "priya@example.com",
//     projectName: "Modern 2 BHK Interior",
//     projectType: "Apartment",
//     location: "Vijayawada",
//     designer: "Anjali Rao",
//     quotationDate: "2026-10-02",
//     validUntil: "2026-10-17",
//     amount: 525424,
//     tax: 94576,
//     total: 620000,
//     status: "Sent",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Modern apartment interior proposal.",
//   },
//   {
//     id: "QT-003",
//     quotationNo: "QT-2026-103",
//     client: "Suresh Reddy",
//     phone: "9123456780",
//     email: "suresh@example.com",
//     projectName: "Modern Villa Interior",
//     projectType: "Villa",
//     location: "Hyderabad",
//     designer: "Anjali Rao",
//     quotationDate: "2026-09-28",
//     validUntil: "2026-10-13",
//     amount: 1059322,
//     tax: 190678,
//     total: 1250000,
//     status: "Converted",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Villa complete interior package.",
//   },
//   {
//     id: "QT-004",
//     quotationNo: "QT-2026-104",
//     client: "Anjali Rao",
//     phone: "9012345678",
//     email: "anjali@example.com",
//     projectName: "Apartment Interior",
//     projectType: "Apartment",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     quotationDate: "2026-09-25",
//     validUntil: "2026-10-10",
//     amount: 406780,
//     tax: 73220,
//     total: 480000,
//     status: "Accepted",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Apartment living and bedroom interiors.",
//   },
//   {
//     id: "QT-005",
//     quotationNo: "QT-2026-105",
//     client: "Kiran Kumar",
//     phone: "8899776655",
//     email: "kiran@example.com",
//     projectName: "Corporate Office Interior",
//     projectType: "Office",
//     location: "Vijayawada",
//     designer: "Sneha Rao",
//     quotationDate: "2026-10-03",
//     validUntil: "2026-10-18",
//     amount: 830508,
//     tax: 149492,
//     total: 980000,
//     status: "Sent",
//     paymentTerms:
//       "30% Advance, 40% During Work, 30% On Completion",
//     notes: "Office reception, cabins and workstations.",
//   },
//   {
//     id: "QT-006",
//     quotationNo: "QT-2026-106",
//     client: "Meghana Devi",
//     phone: "9000011111",
//     email: "meghana@example.com",
//     projectName: "2 BHK Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     designer: "Anjali Rao",
//     quotationDate: "2026-10-04",
//     validUntil: "2026-10-19",
//     amount: 330508,
//     tax: 59492,
//     total: 390000,
//     status: "Draft",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Budget-focused 2 BHK interior.",
//   },
//   {
//     id: "QT-007",
//     quotationNo: "QT-2026-107",
//     client: "Vamsi Krishna",
//     phone: "9111122222",
//     email: "vamsi@example.com",
//     projectName: "Commercial Office Interior",
//     projectType: "Commercial",
//     location: "Hyderabad",
//     designer: "Priya Sharma",
//     quotationDate: "2026-09-20",
//     validUntil: "2026-10-05",
//     amount: 610170,
//     tax: 109830,
//     total: 720000,
//     status: "Expired",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Commercial office interior proposal.",
//   },
//   {
//     id: "QT-008",
//     quotationNo: "QT-2026-108",
//     client: "Sneha Reddy",
//     phone: "9222233333",
//     email: "sneha@example.com",
//     projectName: "Living Room Interior",
//     projectType: "Residential",
//     location: "Tenali",
//     designer: "Sneha Rao",
//     quotationDate: "2026-09-30",
//     validUntil: "2026-10-15",
//     amount: 237288,
//     tax: 42712,
//     total: 280000,
//     status: "Rejected",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Living room furniture and false ceiling.",
//   },
// ];

// const statuses: Array<QuotationStatus | "All"> = [
//   "All",
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const projectTypes: Array<ProjectType | "All"> = [
//   "All",
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) {
//     return `₹${(value / 10000000).toFixed(1)} Cr`;
//   }

//   if (value >= 100000) {
//     return `₹${(value / 100000).toFixed(1)} L`;
//   }

//   if (value >= 1000) {
//     return `₹${Math.round(value / 1000)}K`;
//   }

//   return `₹${value}`;
// }

// function formatDate(date: string) {
//   if (!date) return "-";

//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "border-gray-200 bg-gray-50 text-gray-700";

//     case "Sent":
//       return "border-blue-200 bg-blue-50 text-blue-700";

//     case "Accepted":
//       return "border-green-200 bg-green-50 text-green-700";

//     case "Rejected":
//       return "border-red-200 bg-red-50 text-red-700";

//     case "Expired":
//       return "border-orange-200 bg-orange-50 text-orange-700";

//     case "Converted":
//       return "border-purple-200 bg-purple-50 text-purple-700";

//     default:
//       return "border-gray-200 bg-gray-50 text-gray-700";
//   }
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] =
//     useState<Quotation[]>(initialQuotations);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] =
//     useState<QuotationStatus | "All">("All");
//   const [typeFilter, setTypeFilter] =
//     useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] =
//     useState<Quotation | null>(null);

//   const [showDeleteModal, setShowDeleteModal] =
//     useState(false);

//   const [showConvertModal, setShowConvertModal] =
//     useState(false);

//   const [showSendModal, setShowSendModal] =
//     useState(false);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo
//           .toLowerCase()
//           .includes(query) ||
//         quotation.client
//           .toLowerCase()
//           .includes(query) ||
//         quotation.projectName
//           .toLowerCase()
//           .includes(query) ||
//         quotation.location
//           .toLowerCase()
//           .includes(query) ||
//         quotation.designer
//           .toLowerCase()
//           .includes(query);

//       const matchesStatus =
//         statusFilter === "All" ||
//         quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" ||
//         quotation.projectType === typeFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesType
//       );
//     });
//   }, [
//     quotations,
//     search,
//     statusFilter,
//     typeFilter,
//   ]);

//   const totalValue = quotations.reduce(
//     (sum, quotation) =>
//       sum + quotation.total,
//     0
//   );

//   const acceptedValue = quotations
//     .filter(
//       (quotation) =>
//         quotation.status === "Accepted" ||
//         quotation.status === "Converted"
//     )
//     .reduce(
//       (sum, quotation) =>
//         sum + quotation.total,
//       0
//     );

//   const pendingValue = quotations
//     .filter(
//       (quotation) =>
//         quotation.status === "Sent" ||
//         quotation.status === "Draft"
//     )
//     .reduce(
//       (sum, quotation) =>
//         sum + quotation.total,
//       0
//     );

//   const acceptedCount = quotations.filter(
//     (quotation) =>
//       quotation.status === "Accepted" ||
//       quotation.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round(
//           (acceptedCount / quotations.length) *
//             100
//         );

//   function changeStatus(
//     quotationId: string,
//     status: QuotationStatus
//   ) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId
//           ? {
//               ...quotation,
//               status,
//             }
//           : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current
//         ? {
//             ...current,
//             status,
//           }
//         : null
//     );
//   }

//   function deleteQuotation() {
//     if (!selectedQuotation) return;

//     setQuotations((current) =>
//       current.filter(
//         (quotation) =>
//           quotation.id !==
//           selectedQuotation.id
//       )
//     );

//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;

//     changeStatus(
//       selectedQuotation.id,
//       "Converted"
//     );

//     setShowConvertModal(false);

//     alert(
//       `${selectedQuotation.quotationNo} has been converted to a project.`
//     );
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;

//     changeStatus(
//       selectedQuotation.id,
//       "Sent"
//     );

//     setShowSendModal(false);

//     alert(
//       `Quotation ${selectedQuotation.quotationNo} is ready to be sent to ${selectedQuotation.email}.`
//     );
//   }

//   function exportCSV() {
//     const header = [
//       "Quotation No",
//       "Client",
//       "Phone",
//       "Email",
//       "Project",
//       "Project Type",
//       "Location",
//       "Designer",
//       "Quotation Date",
//       "Valid Until",
//       "Amount",
//       "Tax",
//       "Total",
//       "Status",
//     ];

//     const rows = filteredQuotations.map(
//       (quotation) => [
//         quotation.quotationNo,
//         quotation.client,
//         quotation.phone,
//         quotation.email,
//         quotation.projectName,
//         quotation.projectType,
//         quotation.location,
//         quotation.designer,
//         quotation.quotationDate,
//         quotation.validUntil,
//         quotation.amount,
//         quotation.tax,
//         quotation.total,
//         quotation.status,
//       ]
//     );

//     const csv = [
//       header,
//       ...rows,
//     ]
//       .map((row) =>
//         row
//           .map((value) =>
//             `"${String(value).replace(
//               /"/g,
//               '""'
//             )}"`
//           )
//           .join(",")
//       )
//       .join("\n");

//     const blob = new Blob([csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");

//     link.href = url;
//     link.download = "interior-quotations.csv";
//     link.click();

//     URL.revokeObjectURL(url);
//   }

//   function clearFilters() {
//     setSearch("");
//     setStatusFilter("All");
//     setTypeFilter("All");
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-5 py-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//                 <span className="font-semibold text-[#9a5b18]">
//                   Akrish
//                 </span>

//                 <span>/</span>

//                 <span>Interior</span>

//                 <span>/</span>

//                 <span>Quotations</span>
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Quotations
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Create, manage and track interior project
//                 quotations.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={exportCSV}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 ↓ Export CSV
//               </button>

//               <button
//                 onClick={() => window.print()}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <a
//                 href="/interior/quotations/new"
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 + New Quotation
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* Summary Cards */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//           <SummaryCard
//             title="Total Quotations"
//             value={quotations.length}
//             subtitle="All quotations"
//             icon="▤"
//           />

//           <SummaryCard
//             title="Total Quotation Value"
//             value={formatCompactCurrency(
//               totalValue
//             )}
//             subtitle="All quotation value"
//             icon="₹"
//           />

//           <SummaryCard
//             title="Accepted Value"
//             value={formatCompactCurrency(
//               acceptedValue
//             )}
//             subtitle="Accepted + converted"
//             icon="✓"
//             green
//           />

//           <SummaryCard
//             title="Pending Value"
//             value={formatCompactCurrency(
//               pendingValue
//             )}
//             subtitle="Draft + sent"
//             icon="◷"
//             orange
//           />

//           <SummaryCard
//             title="Conversion Rate"
//             value={`${conversionRate}%`}
//             subtitle={`${acceptedCount} accepted/converted`}
//             icon="%"
//           />
//         </section>

//         {/* Status Overview */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="font-semibold">
//                   Quotation Status
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Current quotation pipeline
//                 </p>
//               </div>

//               <span className="text-xs font-medium text-gray-400">
//                 {quotations.length} total
//               </span>
//             </div>

//             <div className="mt-5 space-y-3">
//               {statuses
//                 .filter((status) => status !== "All")
//                 .map((status) => {
//                   const count =
//                     quotations.filter(
//                       (quotation) =>
//                         quotation.status ===
//                         status
//                     ).length;

//                   const percentage =
//                     quotations.length
//                       ? Math.round(
//                           (count /
//                             quotations.length) *
//                             100
//                         )
//                       : 0;

//                   return (
//                     <div key={status}>
//                       <div className="mb-1.5 flex items-center justify-between">
//                         <span className="text-xs font-medium text-gray-600">
//                           {status}
//                         </span>

//                         <span className="text-xs font-semibold">
//                           {count}
//                         </span>
//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className={`h-full rounded-full ${
//                             status === "Accepted"
//                               ? "bg-green-500"
//                               : status === "Converted"
//                               ? "bg-purple-500"
//                               : status === "Sent"
//                               ? "bg-blue-500"
//                               : status === "Rejected"
//                               ? "bg-red-500"
//                               : status === "Expired"
//                               ? "bg-orange-500"
//                               : "bg-gray-400"
//                           }`}
//                           style={{
//                             width: `${percentage}%`,
//                           }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Project Type Distribution
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Quotations by project category
//             </p>

//             <div className="mt-5 space-y-4">
//               {(
//                 [
//                   "Residential",
//                   "Apartment",
//                   "Villa",
//                   "Office",
//                   "Commercial",
//                 ] as ProjectType[]
//               ).map((type) => {
//                 const matching =
//                   quotations.filter(
//                     (quotation) =>
//                       quotation.projectType ===
//                       type
//                   );

//                 const value =
//                   matching.reduce(
//                     (sum, quotation) =>
//                       sum + quotation.total,
//                     0
//                   );

//                 const percentage =
//                   totalValue > 0
//                     ? Math.round(
//                         (value / totalValue) *
//                           100
//                       )
//                     : 0;

//                 return (
//                   <div key={type}>
//                     <div className="mb-1.5 flex justify-between">
//                       <span className="text-xs font-medium text-gray-600">
//                         {type}
//                       </span>

//                       <span className="text-xs font-semibold">
//                         {matching.length} •{" "}
//                         {formatCompactCurrency(
//                           value
//                         )}
//                       </span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                       <div
//                         className="h-full rounded-full bg-[#176b5b]"
//                         style={{
//                           width: `${percentage}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Quick Actions
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Common quotation operations
//             </p>

//             <div className="mt-5 grid grid-cols-2 gap-3">
//               <a
//                 href="/interior/quotations/new"
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ＋
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   New Quotation
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Create a quotation
//                 </p>
//               </a>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Sent")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ✉
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Sent
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   View sent quotations
//                 </p>
//               </button>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Accepted")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ✓
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Accepted
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   View accepted quotes
//                 </p>
//               </button>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Draft")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   📝
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Drafts
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Continue drafts
//                 </p>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Filters */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1fr_190px_190px_auto]">
//             <div className="relative">
//               <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search quotation, client, project..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(event) =>
//                 setStatusFilter(
//                   event.target
//                     .value as QuotationStatus | "All"
//                 )
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((status) => (
//                 <option key={status} value={status}>
//                   {status === "All"
//                     ? "All Statuses"
//                     : status}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(event) =>
//                 setTypeFilter(
//                   event.target
//                     .value as ProjectType | "All"
//                 )
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type === "All"
//                     ? "All Project Types"
//                     : type}
//                 </option>
//               ))}
//             </select>

//             <button
//               onClick={clearFilters}
//               className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </section>

//         {/* Quotation Table */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] p-5 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Quotation List
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Showing{" "}
//                 {filteredQuotations.length} of{" "}
//                 {quotations.length} quotations
//               </p>
//             </div>

//             <div className="rounded-lg bg-[#f7f7f4] px-3 py-2 text-xs font-medium text-gray-600">
//               Total Value:{" "}
//               {formatCurrency(totalValue)}
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1250px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3">
//                     Quotation
//                   </th>

//                   <th className="px-4 py-3">
//                     Client
//                   </th>

//                   <th className="px-4 py-3">
//                     Project
//                   </th>

//                   <th className="px-4 py-3">
//                     Type
//                   </th>

//                   <th className="px-4 py-3">
//                     Date
//                   </th>

//                   <th className="px-4 py-3">
//                     Valid Until
//                   </th>

//                   <th className="px-4 py-3">
//                     Amount
//                   </th>

//                   <th className="px-4 py-3">
//                     Status
//                   </th>

//                   <th className="px-4 py-3 text-right">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredQuotations.map(
//                   (quotation) => (
//                     <tr
//                       key={quotation.id}
//                       className="border-b border-[#eeeeea] last:border-0 hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <button
//                           onClick={() =>
//                             setSelectedQuotation(
//                               quotation
//                             )
//                           }
//                           className="text-left"
//                         >
//                           <p className="font-semibold text-gray-900 hover:text-[#176b5b]">
//                             {quotation.quotationNo}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-500">
//                             {quotation.designer}
//                           </p>
//                         </button>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-semibold">
//                           {quotation.client}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="max-w-[220px] truncate text-sm font-medium">
//                           {quotation.projectName}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {quotation.location}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
//                           {quotation.projectType}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(
//                           quotation.quotationDate
//                         )}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(
//                           quotation.validUntil
//                         )}
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-bold">
//                           {formatCompactCurrency(
//                             quotation.total
//                           )}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           Incl. tax
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="flex justify-end">
//                           <button
//                             onClick={() =>
//                               setSelectedQuotation(
//                                 quotation
//                               )
//                             }
//                             className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//                           >
//                             View
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {filteredQuotations.length === 0 && (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
//                 📄
//               </div>

//               <h3 className="mt-4 font-semibold">
//                 No quotations found
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try changing your search or filters.
//               </p>

//               <button
//                 onClick={clearFilters}
//                 className="mt-4 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </section>

//         {/* Bottom Section */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Recent Quotations
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Latest quotation activity
//             </p>

//             <div className="mt-4 space-y-3">
//               {quotations
//                 .slice(0, 5)
//                 .map((quotation) => (
//                   <button
//                     key={quotation.id}
//                     onClick={() =>
//                       setSelectedQuotation(
//                         quotation
//                       )
//                     }
//                     className="flex w-full items-center gap-3 rounded-lg border border-[#eeeeea] p-3 text-left hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#176b5b]/10 font-semibold text-[#176b5b]">
//                       ₹
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <p className="truncate text-sm font-semibold">
//                         {quotation.projectName}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-500">
//                         {quotation.client} •{" "}
//                         {formatDate(
//                           quotation.quotationDate
//                         )}
//                       </p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-sm font-bold">
//                         {formatCompactCurrency(
//                           quotation.total
//                         )}
//                       </p>

//                       <span
//                         className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                           quotation.status
//                         )}`}
//                       >
//                         {quotation.status}
//                       </span>
//                     </div>
//                   </button>
//                 ))}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Sales Pipeline
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Current quotation opportunity
//             </p>

//             <div className="mt-5 grid grid-cols-2 gap-3">
//               <PipelineCard
//                 title="Draft"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Draft"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Draft"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Sent"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Sent"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Sent"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Accepted"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Accepted"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Accepted"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Converted"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Converted"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Converted"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Details Modal */}
//       {selectedQuotation && (
//         <Modal
//           title="Quotation Details"
//           onClose={() =>
//             setSelectedQuotation(null)
//           }
//         >
//           <div className="space-y-5">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-xl font-bold">
//                     {selectedQuotation.quotationNo}
//                   </h2>

//                   <span
//                     className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
//                       selectedQuotation.status
//                     )}`}
//                   >
//                     {selectedQuotation.status}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-500">
//                   Created on{" "}
//                   {formatDate(
//                     selectedQuotation.quotationDate
//                   )}
//                 </p>
//               </div>

//               <p className="text-2xl font-bold text-[#176b5b]">
//                 {formatCurrency(
//                   selectedQuotation.total
//                 )}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <DetailBox
//                 title="Client"
//                 value={selectedQuotation.client}
//               />

//               <DetailBox
//                 title="Phone"
//                 value={selectedQuotation.phone}
//               />

//               <DetailBox
//                 title="Email"
//                 value={selectedQuotation.email}
//               />

//               <DetailBox
//                 title="Project"
//                 value={
//                   selectedQuotation.projectName
//                 }
//               />

//               <DetailBox
//                 title="Project Type"
//                 value={
//                   selectedQuotation.projectType
//                 }
//               />

//               <DetailBox
//                 title="Location"
//                 value={selectedQuotation.location}
//               />

//               <DetailBox
//                 title="Designer"
//                 value={selectedQuotation.designer}
//               />

//               <DetailBox
//                 title="Valid Until"
//                 value={formatDate(
//                   selectedQuotation.validUntil
//                 )}
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
//               <AmountBox
//                 label="Base Amount"
//                 value={formatCurrency(
//                   selectedQuotation.amount
//                 )}
//               />

//               <AmountBox
//                 label="Tax"
//                 value={formatCurrency(
//                   selectedQuotation.tax
//                 )}
//               />

//               <AmountBox
//                 label="Grand Total"
//                 value={formatCurrency(
//                   selectedQuotation.total
//                 )}
//                 green
//               />
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Payment Terms
//               </p>

//               <p className="mt-2 text-sm leading-6 text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Notes
//               </p>

//               <p className="mt-2 text-sm leading-6 text-gray-700">
//                 {selectedQuotation.notes}
//               </p>
//             </div>

//             {/* Status Controls */}
//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="mb-3 text-sm font-semibold">
//                 Update Status
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {(
//                   [
//                     "Draft",
//                     "Sent",
//                     "Accepted",
//                     "Rejected",
//                     "Expired",
//                     "Converted",
//                   ] as QuotationStatus[]
//                 ).map((status) => (
//                   <button
//                     key={status}
//                     onClick={() =>
//                       changeStatus(
//                         selectedQuotation.id,
//                         status
//                       )
//                     }
//                     className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
//                       selectedQuotation.status ===
//                       status
//                         ? statusClass(status)
//                         : "border-[#dddcd5] text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
//               {selectedQuotation.status !==
//                 "Sent" &&
//                 selectedQuotation.status !==
//                   "Accepted" &&
//                 selectedQuotation.status !==
//                   "Converted" && (
//                   <button
//                     onClick={() =>
//                       setShowSendModal(true)
//                     }
//                     className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
//                   >
//                     ✉ Send
//                   </button>
//                 )}

//               {selectedQuotation.status !==
//                 "Converted" && (
//                 <button
//                   onClick={() =>
//                     setShowConvertModal(true)
//                   }
//                   className="rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-100"
//                 >
//                   Convert to Project
//                 </button>
//               )}

//               <button
//                 onClick={() => window.print()}
//                 className="rounded-lg border border-[#dddcd5] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <button
//                 onClick={() =>
//                   setShowDeleteModal(true)
//                 }
//                 className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
//               >
//                 Delete
//               </button>

//               <button
//                 onClick={() =>
//                   setSelectedQuotation(null)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* Delete Modal */}
//       {showDeleteModal &&
//         selectedQuotation && (
//           <Modal
//             title="Delete Quotation"
//             onClose={() =>
//               setShowDeleteModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-600">
//                 !
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Delete this quotation?
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <strong>
//                   {selectedQuotation.quotationNo}
//                 </strong>
//                 ? This action cannot be undone in
//                 this local demo.
//               </p>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowDeleteModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={deleteQuotation}
//                   className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       {/* Convert Modal */}
//       {showConvertModal &&
//         selectedQuotation && (
//           <Modal
//             title="Convert Quotation"
//             onClose={() =>
//               setShowConvertModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-2xl text-purple-600">
//                 ✓
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Convert to Project?
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//                 The quotation{" "}
//                 <strong>
//                   {selectedQuotation.quotationNo}
//                 </strong>{" "}
//                 will be marked as converted and can
//                 be used to create an interior project.
//               </p>

//               <div className="mt-5 rounded-lg bg-[#fafaf8] p-4 text-left">
//                 <p className="text-xs text-gray-500">
//                   Project
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.projectName}
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Client
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.client}
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Value
//                 </p>

//                 <p className="mt-1 font-semibold text-[#176b5b]">
//                   {formatCurrency(
//                     selectedQuotation.total
//                   )}
//                 </p>
//               </div>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowConvertModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={convertToProject}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//                 >
//                   Convert
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       {/* Send Modal */}
//       {showSendModal &&
//         selectedQuotation && (
//           <Modal
//             title="Send Quotation"
//             onClose={() =>
//               setShowSendModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
//                 ✉
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Send quotation to client?
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">
//                 The quotation will be marked as
//                 Sent.
//               </p>

//               <div className="mt-5 rounded-lg bg-[#fafaf8] p-4 text-left">
//                 <p className="text-xs text-gray-500">
//                   Client
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.client}
//                 </p>

//                 <p className="mt-3 text-xs text-gray-500">
//                   Email
//                 </p>

//                 <p className="mt-1 font-medium text-blue-600">
//                   {selectedQuotation.email}
//                 </p>

//                 <p className="mt-3 text-xs text-gray-500">
//                   Quotation Value
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {formatCurrency(
//                     selectedQuotation.total
//                   )}
//                 </p>
//               </div>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowSendModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={sendQuotation}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//                 >
//                   Send Quotation
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           button,
//           input,
//           select {
//             display: none !important;
//           }

//           @page {
//             size: A4 landscape;
//             margin: 10mm;
//           }

//           .shadow-sm {
//             box-shadow: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   green = false,
//   orange = false,
// }: {
//   title: string;
//   value: string | number;
//   subtitle: string;
//   icon: string;
//   green?: boolean;
//   orange?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-xs font-medium text-gray-500">
//             {title}
//           </p>

//           <p
//             className={`mt-2 text-2xl font-bold ${
//               green
//                 ? "text-green-600"
//                 : orange
//                 ? "text-orange-600"
//                 : "text-gray-900"
//             }`}
//           >
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-400">
//             {subtitle}
//           </p>
//         </div>

//         <div
//           className={`flex h-10 w-10 items-center justify-center rounded-lg ${
//             green
//               ? "bg-green-50 text-green-600"
//               : orange
//               ? "bg-orange-50 text-orange-600"
//               : "bg-[#176b5b]/10 text-[#176b5b]"
//           }`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function PipelineCard({
//   title,
//   count,
//   value,
// }: {
//   title: string;
//   count: number;
//   value: number;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-semibold">
//           {title}
//         </span>

//         <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-500">
//           {count}
//         </span>
//       </div>

//       <p className="mt-3 text-xl font-bold text-[#176b5b]">
//         {formatCompactCurrency(value)}
//       </p>
//     </div>
//   );
// }

// function DetailBox({
//   title,
//   value,
// }: {
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-500">
//         {title}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-gray-800">
//         {value || "-"}
//       </p>
//     </div>
//   );
// }

// function AmountBox({
//   label,
//   value,
//   green = false,
// }: {
//   label: string;
//   value: string;
//   green?: boolean;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-500">
//         {label}
//       </p>

//       <p
//         className={`mt-1 text-lg font-bold ${
//           green
//             ? "text-[#176b5b]"
//             : "text-gray-900"
//         }`}
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

// function Modal({
//   title,
//   children,
//   onClose,
// }: {
//   title: string;
//   children: React.ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//       <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
//           <h2 className="text-lg font-bold">
//             {title}
//           </h2>

//           <button
//             onClick={onClose}
//             className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100"
//           >
//             ×
//           </button>
//         </div>

//         <div className="p-5">{children}</div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllQuotations,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount = Number(q.amount ?? 0) || (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//   };
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);

//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);

//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(
//     quotationId: string,
//     status: QuotationStatus
//   ) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current && current.id === quotationId
//         ? { ...current, status }
//         : current
//     );

//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;

//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);

//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <a
//               href="/interior/quotations/new"
//               className="inline-flex items-center justify-center rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Quotation
//             </a>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project, designer..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as QuotationStatus | "All")
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Status</option>
//               {statusOptions.map((s) => (
//                 <option key={s} value={s}>
//                   {s}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={typeFilter}
//               onChange={(e) =>
//                 setTypeFilter(e.target.value as ProjectType | "All")
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Types</option>
//               {typeOptions.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredQuotations.map((quotation) => (
//                       <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-[#176b5b]">
//                             {quotation.quotationNo}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {formatDate(quotation.quotationDate)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-900">
//                             {quotation.client}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {quotation.phone}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {quotation.projectName}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {quotation.projectType} · {quotation.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                           {formatCurrency(quotation.total)}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {formatDate(quotation.validUntil)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               quotation.status
//                             )}`}
//                           >
//                             {quotation.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <button
//                             onClick={() => setSelectedQuotation(quotation)}
//                             className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredQuotations.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No quotations found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>

//       {/* Detail modal */}
//       {selectedQuotation && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setSelectedQuotation(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedQuotation.client} />
//               <Info label="Phone" value={selectedQuotation.phone} />
//               <Info label="Email" value={selectedQuotation.email || "—"} />
//               <Info label="Designer" value={selectedQuotation.designer} />
//               <Info label="Type" value={selectedQuotation.projectType} />
//               <Info label="Location" value={selectedQuotation.location} />
//               <Info
//                 label="Date"
//                 value={formatDate(selectedQuotation.quotationDate)}
//               />
//               <Info
//                 label="Valid Until"
//                 value={formatDate(selectedQuotation.validUntil)}
//               />
//               <Info
//                 label="Amount"
//                 value={formatCurrency(selectedQuotation.amount)}
//               />
//               <Info
//                 label="Tax"
//                 value={formatCurrency(selectedQuotation.tax)}
//               />
//               <Info
//                 label="Total"
//                 value={formatCurrency(selectedQuotation.total)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     selectedQuotation.status
//                   )}`}
//                 >
//                   {selectedQuotation.status}
//                 </span>
//               </div>
//             </div>

//             <div className="px-6 pb-2">
//               <p className="text-xs text-gray-400">Payment Terms</p>
//               <p className="mt-1 text-sm text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             {selectedQuotation.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {selectedQuotation.notes}
//               </div>
//             )}

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     onClick={() => changeStatus(selectedQuotation.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedQuotation.status === status
//                         ? statusClass(status)
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ConfirmModal
//           title="Delete quotation?"
//           message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//           confirmLabel="Delete"
//           danger
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//         />
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ConfirmModal
//           title="Convert to project?"
//           message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//           confirmLabel="Convert"
//           onCancel={() => setShowConvertModal(false)}
//           onConfirm={convertToProject}
//         />
//       )}

//       {showSendModal && selectedQuotation && (
//         <ConfirmModal
//           title="Mark as sent?"
//           message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//           confirmLabel="Mark Sent"
//           onCancel={() => setShowSendModal(false)}
//           onConfirm={sendQuotation}
//         />
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//       <p className="mt-1 text-xs text-gray-400">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-800">{value}</p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex justify-end gap-3">
//           <button
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? 0) || (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//   };
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     if (!selectedQuotation && !showDeleteModal) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [selectedQuotation, showDeleteModal, showConvertModal, showSendModal]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);

//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);

//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );

//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;

//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);

//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header: title + New Quotation beside */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         {/* Summary — 2 per row mobile */}
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         {/* Filters */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         {/* List */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           {/* Desktop table */}
//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <button
//                           type="button"
//                           onClick={() => setSelectedQuotation(quotation)}
//                           className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile cards */}
//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => setSelectedQuotation(quotation)}
//                     className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
//                   >
//                     View
//                   </button>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {/* Detail modal */}
//       {selectedQuotation && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
//               <div className="min-w-0">
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
//               <Info label="Client" value={selectedQuotation.client} />
//               <Info label="Phone" value={selectedQuotation.phone} />
//               <Info label="Email" value={selectedQuotation.email || "—"} />
//               <Info label="Designer" value={selectedQuotation.designer} />
//               <Info label="Type" value={selectedQuotation.projectType} />
//               <Info label="Location" value={selectedQuotation.location} />
//               <Info
//                 label="Date"
//                 value={formatDate(selectedQuotation.quotationDate)}
//               />
//               <Info
//                 label="Valid Until"
//                 value={formatDate(selectedQuotation.validUntil)}
//               />
//               <Info
//                 label="Amount"
//                 value={formatCurrency(selectedQuotation.amount)}
//               />
//               <Info
//                 label="Tax"
//                 value={formatCurrency(selectedQuotation.tax)}
//               />
//               <Info
//                 label="Total"
//                 value={formatCurrency(selectedQuotation.total)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     selectedQuotation.status
//                   )}`}
//                 >
//                   {selectedQuotation.status}
//                 </span>
//               </div>
//             </div>

//             <div className="px-4 pb-2 sm:px-6">
//               <p className="text-xs text-gray-400">Payment Terms</p>
//               <p className="mt-1 text-sm text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             {selectedQuotation.notes && (
//               <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
//                 {selectedQuotation.notes}
//               </div>
//             )}

//             <div className="px-4 pb-2 sm:px-6">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     type="button"
//                     onClick={() => changeStatus(selectedQuotation.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedQuotation.status === status
//                         ? statusClass(status)
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   type="button"
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   type="button"
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ConfirmModal
//           title="Delete quotation?"
//           message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//           confirmLabel="Delete"
//           danger
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//         />
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ConfirmModal
//           title="Convert to project?"
//           message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//           confirmLabel="Convert"
//           onCancel={() => setShowConvertModal(false)}
//           onConfirm={convertToProject}
//         />
//       )}

//       {showSendModal && selectedQuotation && (
//         <ConfirmModal
//           title="Mark as sent?"
//           message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//           confirmLabel="Mark Sent"
//           onCancel={() => setShowSendModal(false)}
//           onConfirm={sendQuotation}
//         />
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// export default function InteriorQuotationsPage() {
//   const router = useRouter();
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   const [printData, setPrintData] = useState<Quotation | null>(null);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     if (!selectedQuotation && !showDeleteModal && !printData) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [
//     selectedQuotation,
//     showDeleteModal,
//     showConvertModal,
//     showSendModal,
//     printData,
//   ]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);

//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);

//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );

//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;

//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);

//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       if (full) {
//         setPrintData(mapToUi(full));
//         setTimeout(() => window.print(), 400);
//       } else {
//         const local = quotations.find((q) => q.id === id);
//         if (local) {
//           setPrintData(local);
//           setTimeout(() => window.print(), 400);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8 print:hidden">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {/* Detail modal */}
//       {selectedQuotation && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 print:hidden sm:p-4">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
//               <div className="min-w-0">
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
//               <Info label="Client" value={selectedQuotation.client} />
//               <Info label="Phone" value={selectedQuotation.phone} />
//               <Info label="Email" value={selectedQuotation.email || "—"} />
//               <Info label="Designer" value={selectedQuotation.designer} />
//               <Info label="Type" value={selectedQuotation.projectType} />
//               <Info label="Location" value={selectedQuotation.location} />
//               <Info
//                 label="Date"
//                 value={formatDate(selectedQuotation.quotationDate)}
//               />
//               <Info
//                 label="Valid Until"
//                 value={formatDate(selectedQuotation.validUntil)}
//               />
//               <Info
//                 label="Amount"
//                 value={formatCurrency(selectedQuotation.amount)}
//               />
//               <Info
//                 label="Tax"
//                 value={formatCurrency(selectedQuotation.tax)}
//               />
//               <Info
//                 label="Total"
//                 value={formatCurrency(selectedQuotation.total)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     selectedQuotation.status
//                   )}`}
//                 >
//                   {selectedQuotation.status}
//                 </span>
//               </div>
//             </div>

//             <div className="px-4 pb-2 sm:px-6">
//               <p className="text-xs text-gray-400">Payment Terms</p>
//               <p className="mt-1 text-sm text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             {selectedQuotation.notes && (
//               <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
//                 {selectedQuotation.notes}
//               </div>
//             )}

//             <div className="px-4 pb-2 sm:px-6">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     type="button"
//                     onClick={() => changeStatus(selectedQuotation.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedQuotation.status === status
//                         ? statusClass(status)
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
//               <Link
//                 href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 Edit
//               </Link>
//               <button
//                 type="button"
//                 onClick={() => void handlePrint(selectedQuotation.id)}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Print
//               </button>
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   type="button"
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   type="button"
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ConfirmModal
//           title="Delete quotation?"
//           message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//           confirmLabel="Delete"
//           danger
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//         />
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ConfirmModal
//           title="Convert to project?"
//           message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//           confirmLabel="Convert"
//           onCancel={() => setShowConvertModal(false)}
//           onConfirm={convertToProject}
//         />
//       )}

//       {showSendModal && selectedQuotation && (
//         <ConfirmModal
//           title="Mark as sent?"
//           message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//           confirmLabel="Mark Sent"
//           onCancel={() => setShowSendModal(false)}
//           onConfirm={sendQuotation}
//         />
//       )}

//       {/* Print area */}
//       {printData && (
//         <div className="fixed inset-0 z-[70] overflow-y-auto bg-black/40 p-4 print:static print:bg-white print:p-0">
//           <div className="mx-auto my-4 max-w-4xl rounded-xl bg-white shadow-2xl print:my-0 print:max-w-none print:rounded-none print:shadow-none">
//             <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3 print:hidden">
//               <p className="font-semibold">Print — {printData.quotationNo}</p>
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={() => window.print()}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   Print
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setPrintData(null)}
//                   className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//             <div className="quotation-print-area p-8">
//               <div className="border-b-2 border-[#176b5b] pb-5">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <div className="text-3xl font-bold text-[#9a5b18]">
//                       AKRISH
//                     </div>
//                     <p className="mt-1 text-sm font-semibold">
//                       Furniture & Interior
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <h1 className="text-2xl font-bold">QUOTATION</h1>
//                     <p className="mt-2 text-sm">
//                       <strong>No:</strong> {printData.quotationNo}
//                     </p>
//                     <p className="mt-1 text-sm">
//                       <strong>Date:</strong>{" "}
//                       {formatDate(printData.quotationDate)}
//                     </p>
//                     <p className="mt-1 text-sm">
//                       <strong>Valid Until:</strong>{" "}
//                       {formatDate(printData.validUntil)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-8">
//                 <div>
//                   <p className="mb-2 text-xs font-bold uppercase text-gray-500">
//                     Bill To
//                   </p>
//                   <p className="font-bold">{printData.client}</p>
//                   <p className="mt-1 text-sm">{printData.phone}</p>
//                   {printData.email && (
//                     <p className="mt-1 text-sm">{printData.email}</p>
//                   )}
//                   {printData.address && (
//                     <p className="mt-1 text-sm">{printData.address}</p>
//                   )}
//                 </div>
//                 <div>
//                   <p className="mb-2 text-xs font-bold uppercase text-gray-500">
//                     Project
//                   </p>
//                   <p className="font-bold">{printData.projectName}</p>
//                   <p className="mt-1 text-sm">Type: {printData.projectType}</p>
//                   <p className="mt-1 text-sm">
//                     Location: {printData.location}
//                   </p>
//                   {printData.designer !== "—" && (
//                     <p className="mt-1 text-sm">
//                       Designer: {printData.designer}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {printData.items.length > 0 ? (
//                 <div className="mt-7 overflow-hidden rounded-lg border border-gray-300">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-gray-100 text-left text-xs uppercase">
//                         <th className="border-b px-3 py-3">#</th>
//                         <th className="border-b px-3 py-3">Description</th>
//                         <th className="border-b px-3 py-3">Qty</th>
//                         <th className="border-b px-3 py-3">Unit</th>
//                         <th className="border-b px-3 py-3 text-right">Rate</th>
//                         <th className="border-b px-3 py-3 text-right">
//                           Amount
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {printData.items.map((item, index) => {
//                         const qty = Number(item.quantity) || 0;
//                         const rate = Number(item.rate) || 0;
//                         const disc = Number(item.discount) || 0;
//                         const amt = qty * rate * (1 - disc / 100);
//                         return (
//                           <tr key={index}>
//                             <td className="border-b px-3 py-3 text-sm">
//                               {index + 1}
//                             </td>
//                             <td className="border-b px-3 py-3 text-sm">
//                               <p className="font-medium">
//                                 {item.description || "—"}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {item.category}
//                               </p>
//                             </td>
//                             <td className="border-b px-3 py-3 text-sm">
//                               {qty}
//                             </td>
//                             <td className="border-b px-3 py-3 text-sm">
//                               {item.unit || "Nos"}
//                             </td>
//                             <td className="border-b px-3 py-3 text-right text-sm">
//                               {formatCurrency(rate)}
//                             </td>
//                             <td className="border-b px-3 py-3 text-right text-sm font-semibold">
//                               {formatCurrency(amt)}
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : null}

//               <div className="mt-5 flex justify-end">
//                 <div className="w-72 space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>{formatCurrency(printData.amount)}</span>
//                   </div>
//                   {printData.additionalDiscount > 0 && (
//                     <div className="flex justify-between">
//                       <span>Additional Discount</span>
//                       <span>
//                         - {formatCurrency(printData.additionalDiscount)}
//                       </span>
//                     </div>
//                   )}
//                   <div className="flex justify-between">
//                     <span>GST ({printData.taxRate}%)</span>
//                     <span>{formatCurrency(printData.tax)}</span>
//                   </div>
//                   <div className="flex justify-between border-t-2 border-gray-800 pt-3 text-lg font-bold">
//                     <span>Grand Total</span>
//                     <span>{formatCurrency(printData.total)}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 grid grid-cols-2 gap-8 text-xs text-gray-600">
//                 <div>
//                   <p className="font-bold text-gray-900">Notes</p>
//                   <p className="mt-2 whitespace-pre-line">
//                     {printData.notes || "—"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900">Terms</p>
//                   <p className="mt-2 whitespace-pre-line">
//                     {printData.terms || "—"}
//                   </p>
//                   <p className="mt-3">
//                     <strong>Payment:</strong> {printData.paymentTerms}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           .quotation-print-area,
//           .quotation-print-area * {
//             visibility: visible;
//           }
//           .quotation-print-area {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }
//           @page {
//             size: A4;
//             margin: 12mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 print:hidden">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   const [printData, setPrintData] = useState<Quotation | null>(null);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   /* Lock page scroll when any overlay is open — modal panels still scroll */
//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal ||
//       !!printData;

//     if (!open) return;

//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [
//     selectedQuotation,
//     showDeleteModal,
//     showConvertModal,
//     showSendModal,
//     printData,
//   ]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);

//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);

//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );

//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;

//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);

//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       if (full) {
//         setPrintData(mapToUi(full));
//       } else {
//         const local = quotations.find((q) => q.id === id);
//         if (local) setPrintData(local);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function runBrowserPrint() {
//     // Defer so layout paints before print dialog
//     requestAnimationFrame(() => {
//       setTimeout(() => window.print(), 50);
//     });
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8 print:hidden">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {/* ========== VIEW MODAL — scrollable body ========== */}
//       {selectedQuotation && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 print:hidden sm:p-4">
//           <div className="flex max-h-[min(92vh,900px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6">
//               <div className="min-w-0">
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* THIS is the scroll region */}
//             <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
//               <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                 <Info label="Client" value={selectedQuotation.client} />
//                 <Info label="Phone" value={selectedQuotation.phone} />
//                 <Info label="Email" value={selectedQuotation.email || "—"} />
//                 <Info label="Designer" value={selectedQuotation.designer} />
//                 <Info label="Type" value={selectedQuotation.projectType} />
//                 <Info label="Location" value={selectedQuotation.location} />
//                 <Info
//                   label="Date"
//                   value={formatDate(selectedQuotation.quotationDate)}
//                 />
//                 <Info
//                   label="Valid Until"
//                   value={formatDate(selectedQuotation.validUntil)}
//                 />
//                 <Info
//                   label="Amount"
//                   value={formatCurrency(selectedQuotation.amount)}
//                 />
//                 <Info
//                   label="Tax"
//                   value={formatCurrency(selectedQuotation.tax)}
//                 />
//                 <Info
//                   label="Total"
//                   value={formatCurrency(selectedQuotation.total)}
//                 />
//                 <div className="rounded-xl bg-[#fafaf8] p-3">
//                   <p className="text-xs text-gray-400">Status</p>
//                   <span
//                     className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                       selectedQuotation.status
//                     )}`}
//                   >
//                     {selectedQuotation.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p className="text-xs text-gray-400">Payment Terms</p>
//                 <p className="mt-1 text-sm text-gray-700">
//                   {selectedQuotation.paymentTerms}
//                 </p>
//               </div>

//               {selectedQuotation.notes ? (
//                 <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                   {selectedQuotation.notes}
//                 </div>
//               ) : null}

//               <div className="mt-4 pb-2">
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Update Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {statusOptions.map((status) => (
//                     <button
//                       key={status}
//                       type="button"
//                       onClick={() => changeStatus(selectedQuotation.id, status)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selectedQuotation.status === status
//                           ? statusClass(status)
//                           : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
//               <Link
//                 href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 Edit
//               </Link>
//               <button
//                 type="button"
//                 onClick={() => void handlePrint(selectedQuotation.id)}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Print
//               </button>
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   type="button"
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   type="button"
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ConfirmModal
//           title="Delete quotation?"
//           message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//           confirmLabel="Delete"
//           danger
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//         />
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ConfirmModal
//           title="Convert to project?"
//           message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//           confirmLabel="Convert"
//           onCancel={() => setShowConvertModal(false)}
//           onConfirm={convertToProject}
//         />
//       )}

//       {showSendModal && selectedQuotation && (
//         <ConfirmModal
//           title="Mark as sent?"
//           message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//           confirmLabel="Mark Sent"
//           onCancel={() => setShowSendModal(false)}
//           onConfirm={sendQuotation}
//         />
//       )}

//       {/* ========== PRINT PREVIEW — scroll on screen, clean 1-page print ========== */}
//       {printData && (
//         <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/50 p-3 print:static print:block print:overflow-visible print:bg-white print:p-0 sm:p-6">
//           <div className="my-2 w-full max-w-4xl rounded-xl bg-white shadow-2xl print:my-0 print:max-w-none print:rounded-none print:shadow-none">
//             <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-3 print:hidden sm:px-5">
//               <p className="font-semibold">Print — {printData.quotationNo}</p>
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={runBrowserPrint}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   Print
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setPrintData(null)}
//                   className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>

//             <div className="quotation-print-area max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain p-5 sm:p-8 print:max-h-none print:overflow-visible print:p-0">
//               <div className="border-b-2 border-[#176b5b] pb-4">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <div className="text-2xl font-bold text-[#9a5b18] sm:text-3xl">
//                       AKRISH
//                     </div>
//                     <p className="mt-0.5 text-sm font-semibold">
//                       Furniture & Interior
//                     </p>
//                   </div>
//                   <div className="text-right text-sm">
//                     <h1 className="text-xl font-bold sm:text-2xl">QUOTATION</h1>
//                     <p className="mt-2">
//                       <strong>No:</strong> {printData.quotationNo}
//                     </p>
//                     <p className="mt-1">
//                       <strong>Date:</strong>{" "}
//                       {formatDate(printData.quotationDate)}
//                     </p>
//                     <p className="mt-1">
//                       <strong>Valid Until:</strong>{" "}
//                       {formatDate(printData.validUntil)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
//                     Bill To
//                   </p>
//                   <p className="font-bold">{printData.client}</p>
//                   <p className="mt-1 text-sm">{printData.phone}</p>
//                   {printData.email ? (
//                     <p className="mt-0.5 text-sm">{printData.email}</p>
//                   ) : null}
//                   {printData.address ? (
//                     <p className="mt-0.5 text-sm">{printData.address}</p>
//                   ) : null}
//                 </div>
//                 <div>
//                   <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
//                     Project
//                   </p>
//                   <p className="font-bold">{printData.projectName}</p>
//                   <p className="mt-1 text-sm">Type: {printData.projectType}</p>
//                   <p className="mt-0.5 text-sm">
//                     Location: {printData.location}
//                   </p>
//                   {printData.designer !== "—" ? (
//                     <p className="mt-0.5 text-sm">
//                       Designer: {printData.designer}
//                     </p>
//                   ) : null}
//                 </div>
//               </div>

//               {printData.items.length > 0 ? (
//                 <div className="mt-5 overflow-hidden rounded-lg border border-gray-300">
//                   <table className="w-full border-collapse text-sm">
//                     <thead>
//                       <tr className="bg-gray-100 text-left text-[10px] uppercase">
//                         <th className="border-b px-2 py-2 sm:px-3">#</th>
//                         <th className="border-b px-2 py-2 sm:px-3">
//                           Description
//                         </th>
//                         <th className="border-b px-2 py-2 sm:px-3">Qty</th>
//                         <th className="border-b px-2 py-2 sm:px-3">Unit</th>
//                         <th className="border-b px-2 py-2 text-right sm:px-3">
//                           Rate
//                         </th>
//                         <th className="border-b px-2 py-2 text-right sm:px-3">
//                           Amount
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {printData.items.map((item, index) => {
//                         const qty = Number(item.quantity) || 0;
//                         const rate = Number(item.rate) || 0;
//                         const disc = Number(item.discount) || 0;
//                         const amt = qty * rate * (1 - disc / 100);
//                         return (
//                           <tr key={index}>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {index + 1}
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               <p className="font-medium">
//                                 {item.description || "—"}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {item.category}
//                               </p>
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {qty}
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {item.unit || "Nos"}
//                             </td>
//                             <td className="border-b px-2 py-2 text-right sm:px-3">
//                               {formatCurrency(rate)}
//                             </td>
//                             <td className="border-b px-2 py-2 text-right font-semibold sm:px-3">
//                               {formatCurrency(amt)}
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : null}

//               <div className="mt-4 flex justify-end">
//                 <div className="w-full max-w-xs space-y-1.5 text-sm">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>{formatCurrency(printData.amount)}</span>
//                   </div>
//                   {printData.additionalDiscount > 0 ? (
//                     <div className="flex justify-between">
//                       <span>Additional Discount</span>
//                       <span>
//                         - {formatCurrency(printData.additionalDiscount)}
//                       </span>
//                     </div>
//                   ) : null}
//                   <div className="flex justify-between">
//                     <span>GST ({printData.taxRate}%)</span>
//                     <span>{formatCurrency(printData.tax)}</span>
//                   </div>
//                   <div className="flex justify-between border-t-2 border-gray-800 pt-2 text-base font-bold">
//                     <span>Grand Total</span>
//                     <span>{formatCurrency(printData.total)}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-1 gap-6 text-xs text-gray-600 sm:grid-cols-2">
//                 <div>
//                   <p className="font-bold text-gray-900">Notes</p>
//                   <p className="mt-1 whitespace-pre-line">
//                     {printData.notes || "—"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900">Terms</p>
//                   <p className="mt-1 whitespace-pre-line">
//                     {printData.terms || "—"}
//                   </p>
//                   <p className="mt-2">
//                     <strong>Payment:</strong> {printData.paymentTerms}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Print CSS: only quotation content, no blank extra pages */}
//       <style jsx global>{`
//         @media print {
//           @page {
//             size: A4;
//             margin: 12mm;
//           }

//           html,
//           body {
//             background: white !important;
//             height: auto !important;
//             overflow: visible !important;
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }

//           /* Hide UI chrome */
//           body * {
//             visibility: hidden !important;
//           }

//           .quotation-print-area,
//           .quotation-print-area * {
//             visibility: visible !important;
//           }

//           .quotation-print-area {
//             position: static !important;
//             left: auto !important;
//             top: auto !important;
//             width: 100% !important;
//             max-height: none !important;
//             overflow: visible !important;
//             padding: 0 !important;
//             margin: 0 !important;
//             box-shadow: none !important;
//           }

//           /* Kill fixed overlays that force extra pages */
//           .fixed {
//             position: static !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 print:hidden">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// /** Portal so modals escape ERP layout transform/overflow */
// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   const [printData, setPrintData] = useState<Quotation | null>(null);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal ||
//       !!printData;
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [
//     selectedQuotation,
//     showDeleteModal,
//     showConvertModal,
//     showSendModal,
//     printData,
//   ]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();
//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);
//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;
//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;
//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);
//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);
//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;
//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );
//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );
//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;
//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       if (full) setPrintData(mapToUi(full));
//       else {
//         const local = quotations.find((q) => q.id === id);
//         if (local) setPrintData(local);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function runBrowserPrint() {
//     requestAnimationFrame(() => {
//       setTimeout(() => window.print(), 50);
//     });
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   const viewModal =
//     selectedQuotation &&
//     (
//       <ModalPortal>
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4 print:hidden"
//           role="dialog"
//           aria-modal="true"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) setSelectedQuotation(null);
//           }}
//         >
//           {/* max height = viewport; header/footer fixed; middle scrolls */}
//           <div
//             className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
//             style={{ maxHeight: "min(90dvh, 880px)" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
//               <div className="min-w-0 pr-2">
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Scrollable body — minHeight 0 is required for flex overflow */}
//             <div
//               className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
//               style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
//             >
//               <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                 <Info label="Client" value={selectedQuotation.client} />
//                 <Info label="Phone" value={selectedQuotation.phone} />
//                 <Info label="Email" value={selectedQuotation.email || "—"} />
//                 <Info label="Designer" value={selectedQuotation.designer} />
//                 <Info label="Type" value={selectedQuotation.projectType} />
//                 <Info label="Location" value={selectedQuotation.location} />
//                 <Info
//                   label="Date"
//                   value={formatDate(selectedQuotation.quotationDate)}
//                 />
//                 <Info
//                   label="Valid Until"
//                   value={formatDate(selectedQuotation.validUntil)}
//                 />
//                 <Info
//                   label="Amount"
//                   value={formatCurrency(selectedQuotation.amount)}
//                 />
//                 <Info
//                   label="Tax"
//                   value={formatCurrency(selectedQuotation.tax)}
//                 />
//                 <Info
//                   label="Total"
//                   value={formatCurrency(selectedQuotation.total)}
//                 />
//                 <div className="rounded-xl bg-[#fafaf8] p-3">
//                   <p className="text-xs text-gray-400">Status</p>
//                   <span
//                     className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                       selectedQuotation.status
//                     )}`}
//                   >
//                     {selectedQuotation.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p className="text-xs text-gray-400">Payment Terms</p>
//                 <p className="mt-1 text-sm text-gray-700">
//                   {selectedQuotation.paymentTerms}
//                 </p>
//               </div>

//               {selectedQuotation.notes ? (
//                 <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                   {selectedQuotation.notes}
//                 </div>
//               ) : null}

//               <div className="mt-4 pb-1">
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Update Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {statusOptions.map((status) => (
//                     <button
//                       key={status}
//                       type="button"
//                       onClick={() =>
//                         changeStatus(selectedQuotation.id, status)
//                       }
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selectedQuotation.status === status
//                           ? statusClass(status)
//                           : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Footer always visible */}
//             <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
//               <Link
//                 href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                 className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
//               >
//                 Edit
//               </Link>
//               <button
//                 type="button"
//                 onClick={() => void handlePrint(selectedQuotation.id)}
//                 className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//               >
//                 Print
//               </button>
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   type="button"
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   type="button"
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </ModalPortal>
//     );

//   const printModal =
//     printData &&
//     (
//       <ModalPortal>
//         <div className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto bg-black/50 p-3 print:static print:block print:overflow-visible print:bg-white print:p-0 sm:p-6">
//           <div className="my-3 w-full max-w-4xl rounded-xl bg-white shadow-2xl print:my-0 print:max-w-none print:rounded-none print:shadow-none">
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 print:hidden sm:px-5">
//               <p className="font-semibold">Print — {printData.quotationNo}</p>
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={runBrowserPrint}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   Print
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setPrintData(null)}
//                   className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>

//             <div className="quotation-print-area p-5 sm:p-8 print:p-0">
//               <div className="border-b-2 border-[#176b5b] pb-4">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <div className="text-2xl font-bold text-[#9a5b18] sm:text-3xl">
//                       AKRISH
//                     </div>
//                     <p className="mt-0.5 text-sm font-semibold">
//                       Furniture & Interior
//                     </p>
//                   </div>
//                   <div className="text-right text-sm">
//                     <h1 className="text-xl font-bold sm:text-2xl">QUOTATION</h1>
//                     <p className="mt-2">
//                       <strong>No:</strong> {printData.quotationNo}
//                     </p>
//                     <p className="mt-1">
//                       <strong>Date:</strong>{" "}
//                       {formatDate(printData.quotationDate)}
//                     </p>
//                     <p className="mt-1">
//                       <strong>Valid Until:</strong>{" "}
//                       {formatDate(printData.validUntil)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
//                     Bill To
//                   </p>
//                   <p className="font-bold">{printData.client}</p>
//                   <p className="mt-1 text-sm">{printData.phone}</p>
//                   {printData.email ? (
//                     <p className="mt-0.5 text-sm">{printData.email}</p>
//                   ) : null}
//                   {printData.address ? (
//                     <p className="mt-0.5 text-sm">{printData.address}</p>
//                   ) : null}
//                 </div>
//                 <div>
//                   <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
//                     Project
//                   </p>
//                   <p className="font-bold">{printData.projectName}</p>
//                   <p className="mt-1 text-sm">Type: {printData.projectType}</p>
//                   <p className="mt-0.5 text-sm">
//                     Location: {printData.location}
//                   </p>
//                   {printData.designer !== "—" ? (
//                     <p className="mt-0.5 text-sm">
//                       Designer: {printData.designer}
//                     </p>
//                   ) : null}
//                 </div>
//               </div>

//               {printData.items.length > 0 ? (
//                 <div className="mt-5 overflow-hidden rounded-lg border border-gray-300">
//                   <table className="w-full border-collapse text-sm">
//                     <thead>
//                       <tr className="bg-gray-100 text-left text-[10px] uppercase">
//                         <th className="border-b px-2 py-2 sm:px-3">#</th>
//                         <th className="border-b px-2 py-2 sm:px-3">
//                           Description
//                         </th>
//                         <th className="border-b px-2 py-2 sm:px-3">Qty</th>
//                         <th className="border-b px-2 py-2 sm:px-3">Unit</th>
//                         <th className="border-b px-2 py-2 text-right sm:px-3">
//                           Rate
//                         </th>
//                         <th className="border-b px-2 py-2 text-right sm:px-3">
//                           Amount
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {printData.items.map((item, index) => {
//                         const qty = Number(item.quantity) || 0;
//                         const rate = Number(item.rate) || 0;
//                         const disc = Number(item.discount) || 0;
//                         const amt = qty * rate * (1 - disc / 100);
//                         return (
//                           <tr key={index}>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {index + 1}
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               <p className="font-medium">
//                                 {item.description || "—"}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {item.category}
//                               </p>
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {qty}
//                             </td>
//                             <td className="border-b px-2 py-2 sm:px-3">
//                               {item.unit || "Nos"}
//                             </td>
//                             <td className="border-b px-2 py-2 text-right sm:px-3">
//                               {formatCurrency(rate)}
//                             </td>
//                             <td className="border-b px-2 py-2 text-right font-semibold sm:px-3">
//                               {formatCurrency(amt)}
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : null}

//               <div className="mt-4 flex justify-end">
//                 <div className="w-full max-w-xs space-y-1.5 text-sm">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>{formatCurrency(printData.amount)}</span>
//                   </div>
//                   {printData.additionalDiscount > 0 ? (
//                     <div className="flex justify-between">
//                       <span>Additional Discount</span>
//                       <span>
//                         - {formatCurrency(printData.additionalDiscount)}
//                       </span>
//                     </div>
//                   ) : null}
//                   <div className="flex justify-between">
//                     <span>GST ({printData.taxRate}%)</span>
//                     <span>{formatCurrency(printData.tax)}</span>
//                   </div>
//                   <div className="flex justify-between border-t-2 border-gray-800 pt-2 text-base font-bold">
//                     <span>Grand Total</span>
//                     <span>{formatCurrency(printData.total)}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-1 gap-6 text-xs text-gray-600 sm:grid-cols-2">
//                 <div>
//                   <p className="font-bold text-gray-900">Notes</p>
//                   <p className="mt-1 whitespace-pre-line">
//                     {printData.notes || "—"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900">Terms</p>
//                   <p className="mt-1 whitespace-pre-line">
//                     {printData.terms || "—"}
//                   </p>
//                   <p className="mt-2">
//                     <strong>Payment:</strong> {printData.paymentTerms}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ModalPortal>
//     );

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8 print:hidden">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {viewModal}
//       {printModal}

//       {showDeleteModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Delete quotation?"
//             message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//             confirmLabel="Delete"
//             danger
//             onCancel={() => setShowDeleteModal(false)}
//             onConfirm={confirmDelete}
//           />
//         </ModalPortal>
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Convert to project?"
//             message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//             confirmLabel="Convert"
//             onCancel={() => setShowConvertModal(false)}
//             onConfirm={convertToProject}
//           />
//         </ModalPortal>
//       )}

//       {showSendModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Mark as sent?"
//             message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//             confirmLabel="Mark Sent"
//             onCancel={() => setShowSendModal(false)}
//             onConfirm={sendQuotation}
//           />
//         </ModalPortal>
//       )}

//       <style jsx global>{`
//         @media print {
//           @page {
//             size: A4;
//             margin: 12mm;
//           }
//           html,
//           body {
//             background: white !important;
//             height: auto !important;
//             overflow: visible !important;
//           }
//           body * {
//             visibility: hidden !important;
//           }
//           .quotation-print-area,
//           .quotation-print-area * {
//             visibility: visible !important;
//           }
//           .quotation-print-area {
//             position: static !important;
//             width: 100% !important;
//             max-height: none !important;
//             overflow: visible !important;
//             padding: 0 !important;
//             margin: 0 !important;
//           }
//           .fixed {
//             position: static !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4 print:hidden">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   const [printData, setPrintData] = useState<Quotation | null>(null);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal ||
//       !!printData;
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [
//     selectedQuotation,
//     showDeleteModal,
//     showConvertModal,
//     showSendModal,
//     printData,
//   ]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();
//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);
//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;
//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;
//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);
//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);
//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;
//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );
//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );
//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;
//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       if (full) setPrintData(mapToUi(full));
//       else {
//         const local = quotations.find((q) => q.id === id);
//         if (local) setPrintData(local);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function runBrowserPrint() {
//     requestAnimationFrame(() => {
//       setTimeout(() => window.print(), 80);
//     });
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8 print:hidden">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {/* VIEW MODAL */}
//       {selectedQuotation && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4 print:hidden"
//             role="dialog"
//             aria-modal="true"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setSelectedQuotation(null);
//             }}
//           >
//             <div
//               className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
//               style={{ maxHeight: "min(90dvh, 880px)" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
//                 <div className="min-w-0 pr-2">
//                   <p className="text-xs font-semibold text-[#176b5b]">
//                     {selectedQuotation.quotationNo}
//                   </p>
//                   <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
//                     {selectedQuotation.projectName}
//                   </h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
//                 style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
//               >
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   <Info label="Client" value={selectedQuotation.client} />
//                   <Info label="Phone" value={selectedQuotation.phone} />
//                   <Info label="Email" value={selectedQuotation.email || "—"} />
//                   <Info label="Designer" value={selectedQuotation.designer} />
//                   <Info label="Type" value={selectedQuotation.projectType} />
//                   <Info label="Location" value={selectedQuotation.location} />
//                   <Info
//                     label="Date"
//                     value={formatDate(selectedQuotation.quotationDate)}
//                   />
//                   <Info
//                     label="Valid Until"
//                     value={formatDate(selectedQuotation.validUntil)}
//                   />
//                   <Info
//                     label="Amount"
//                     value={formatCurrency(selectedQuotation.amount)}
//                   />
//                   <Info
//                     label="Tax"
//                     value={formatCurrency(selectedQuotation.tax)}
//                   />
//                   <Info
//                     label="Total"
//                     value={formatCurrency(selectedQuotation.total)}
//                   />
//                   <div className="rounded-xl bg-[#fafaf8] p-3">
//                     <p className="text-xs text-gray-400">Status</p>
//                     <span
//                       className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                         selectedQuotation.status
//                       )}`}
//                     >
//                       {selectedQuotation.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-xs text-gray-400">Payment Terms</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedQuotation.paymentTerms}
//                   </p>
//                 </div>

//                 {selectedQuotation.notes ? (
//                   <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                     {selectedQuotation.notes}
//                   </div>
//                 ) : null}

//                 <div className="mt-4 pb-1">
//                   <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                     Update Status
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {statusOptions.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           changeStatus(selectedQuotation.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                           selectedQuotation.status === status
//                             ? statusClass(status)
//                             : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
//                 <Link
//                   href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                   className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={() => void handlePrint(selectedQuotation.id)}
//                   className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Print
//                 </button>
//                 {selectedQuotation.status === "Draft" && (
//                   <button
//                     type="button"
//                     onClick={() => setShowSendModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Mark as Sent
//                   </button>
//                 )}
//                 {(selectedQuotation.status === "Sent" ||
//                   selectedQuotation.status === "Accepted") && (
//                   <button
//                     type="button"
//                     onClick={() => setShowConvertModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Convert to Project
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => setShowDeleteModal(true)}
//                   className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* PRINT MODAL */}
//       {printData && (
//         <ModalPortal>
//           <div className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto bg-black/50 p-3 print:static print:block print:h-auto print:overflow-visible print:bg-white print:p-0 sm:p-6">
//             <div className="my-3 w-full max-w-4xl rounded-xl bg-white shadow-2xl print:my-0 print:w-full print:max-w-none print:rounded-none print:shadow-none">
//               <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 print:hidden sm:px-5">
//                 <p className="font-semibold">Print — {printData.quotationNo}</p>
//                 <div className="flex gap-2">
//                   <button
//                     type="button"
//                     onClick={runBrowserPrint}
//                     className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//                   >
//                     Print
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setPrintData(null)}
//                     className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>

//               <div className="quotation-print-area p-5 text-[13px] leading-snug text-black sm:p-8 print:p-0">
//                 <div className="print-avoid-break border-b-2 border-[#176b5b] pb-3">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <div className="text-2xl font-bold tracking-tight text-[#9a5b18]">
//                         AKRISH
//                       </div>
//                       <p className="mt-0.5 text-xs font-semibold text-gray-800">
//                         Furniture &amp; Interior
//                       </p>
//                       <p className="mt-0.5 text-[10px] text-gray-500">
//                         Interior Design &amp; Execution Services
//                       </p>
//                     </div>
//                     <div className="text-right text-xs">
//                       <h1 className="text-xl font-bold tracking-wide text-gray-900">
//                         QUOTATION
//                       </h1>
//                       <p className="mt-1.5">
//                         <strong>No:</strong> {printData.quotationNo}
//                       </p>
//                       <p className="mt-0.5">
//                         <strong>Date:</strong>{" "}
//                         {formatDate(printData.quotationDate)}
//                       </p>
//                       <p className="mt-0.5">
//                         <strong>Valid Until:</strong>{" "}
//                         {formatDate(printData.validUntil)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="print-avoid-break mt-4 grid grid-cols-2 gap-6">
//                   <div>
//                     <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
//                       Bill To
//                     </p>
//                     <p className="font-bold text-gray-900">{printData.client}</p>
//                     {printData.phone && printData.phone !== "—" ? (
//                       <p className="mt-0.5 text-xs text-gray-700">
//                         {printData.phone}
//                       </p>
//                     ) : null}
//                     {printData.email ? (
//                       <p className="mt-0.5 text-xs text-gray-700">
//                         {printData.email}
//                       </p>
//                     ) : null}
//                     {printData.address ? (
//                       <p className="mt-0.5 whitespace-pre-line text-xs text-gray-700">
//                         {printData.address}
//                       </p>
//                     ) : null}
//                   </div>
//                   <div>
//                     <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
//                       Project
//                     </p>
//                     <p className="font-bold text-gray-900">
//                       {printData.projectName}
//                     </p>
//                     <p className="mt-0.5 text-xs text-gray-700">
//                       Type: {printData.projectType}
//                     </p>
//                     {printData.location && printData.location !== "—" ? (
//                       <p className="mt-0.5 text-xs text-gray-700">
//                         Location: {printData.location}
//                       </p>
//                     ) : null}
//                     {printData.designer && printData.designer !== "—" ? (
//                       <p className="mt-0.5 text-xs text-gray-700">
//                         Designer: {printData.designer}
//                       </p>
//                     ) : null}
//                   </div>
//                 </div>

//                 {printData.items.length > 0 ? (
//                   <div className="print-avoid-break mt-4 overflow-hidden rounded border border-gray-300">
//                     <table className="w-full border-collapse text-xs">
//                       <thead>
//                         <tr className="bg-gray-100 text-left text-[9px] uppercase tracking-wide text-gray-600">
//                           <th className="border-b border-gray-300 px-2 py-1.5">
//                             #
//                           </th>
//                           <th className="border-b border-gray-300 px-2 py-1.5">
//                             Description
//                           </th>
//                           <th className="border-b border-gray-300 px-2 py-1.5">
//                             Qty
//                           </th>
//                           <th className="border-b border-gray-300 px-2 py-1.5">
//                             Unit
//                           </th>
//                           <th className="border-b border-gray-300 px-2 py-1.5 text-right">
//                             Rate
//                           </th>
//                           <th className="border-b border-gray-300 px-2 py-1.5 text-right">
//                             Amount
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {printData.items.map((item, index) => {
//                           const qty = Number(item.quantity) || 0;
//                           const rate = Number(item.rate) || 0;
//                           const disc = Number(item.discount) || 0;
//                           const amt = qty * rate * (1 - disc / 100);
//                           return (
//                             <tr key={index} className="print-avoid-break">
//                               <td className="border-b border-gray-200 px-2 py-1.5 align-top">
//                                 {index + 1}
//                               </td>
//                               <td className="border-b border-gray-200 px-2 py-1.5 align-top">
//                                 <p className="font-medium text-gray-900">
//                                   {item.description || "—"}
//                                 </p>
//                                 {item.category ? (
//                                   <p className="text-[10px] text-gray-500">
//                                     {item.category}
//                                   </p>
//                                 ) : null}
//                               </td>
//                               <td className="border-b border-gray-200 px-2 py-1.5 align-top">
//                                 {qty}
//                               </td>
//                               <td className="border-b border-gray-200 px-2 py-1.5 align-top">
//                                 {item.unit || "Nos"}
//                               </td>
//                               <td className="border-b border-gray-200 px-2 py-1.5 text-right align-top">
//                                 {formatCurrency(rate)}
//                               </td>
//                               <td className="border-b border-gray-200 px-2 py-1.5 text-right align-top font-semibold">
//                                 {formatCurrency(amt)}
//                               </td>
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : null}

//                 <div className="print-avoid-break mt-3 flex justify-end">
//                   <div className="w-56 space-y-1 text-xs">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Subtotal</span>
//                       <span>{formatCurrency(printData.amount)}</span>
//                     </div>
//                     {printData.additionalDiscount > 0 ? (
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">
//                           Additional Discount
//                         </span>
//                         <span>
//                           - {formatCurrency(printData.additionalDiscount)}
//                         </span>
//                       </div>
//                     ) : null}
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">
//                         GST ({printData.taxRate}%)
//                       </span>
//                       <span>{formatCurrency(printData.tax)}</span>
//                     </div>
//                     <div className="flex justify-between border-t-2 border-gray-900 pt-1.5 text-sm font-bold">
//                       <span>Grand Total</span>
//                       <span>{formatCurrency(printData.total)}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="print-avoid-break mt-5 grid grid-cols-2 gap-6 text-[11px] text-gray-700">
//                   <div>
//                     <p className="font-bold text-gray-900">Notes</p>
//                     <p className="mt-1 whitespace-pre-line">
//                       {printData.notes || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900">
//                       Terms &amp; Conditions
//                     </p>
//                     <p className="mt-1 whitespace-pre-line">
//                       {printData.terms || "—"}
//                     </p>
//                     <p className="mt-2">
//                       <strong>Payment:</strong> {printData.paymentTerms}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="print-signatures mt-10 grid grid-cols-2 gap-10 print:mt-12">
//                   <div className="text-center">
//                     <div className="mx-auto h-12 border-b border-gray-400" />
//                     <p className="mt-2 text-xs font-semibold text-gray-800">
//                       Client Signature
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-gray-500">
//                       Name &amp; Date
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <div className="mx-auto h-12 border-b border-gray-400" />
//                     <p className="mt-2 text-xs font-semibold text-gray-800">
//                       For Akrish Furniture &amp; Interior
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-gray-500">
//                       Authorized Signatory
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-6 text-center text-[9px] text-gray-400 print:mt-4">
//                   This quotation is system generated and is subject to the terms
//                   mentioned above.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Delete quotation?"
//             message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//             confirmLabel="Delete"
//             danger
//             onCancel={() => setShowDeleteModal(false)}
//             onConfirm={confirmDelete}
//           />
//         </ModalPortal>
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Convert to project?"
//             message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//             confirmLabel="Convert"
//             onCancel={() => setShowConvertModal(false)}
//             onConfirm={convertToProject}
//           />
//         </ModalPortal>
//       )}

//       {showSendModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Mark as sent?"
//             message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//             confirmLabel="Mark Sent"
//             onCancel={() => setShowSendModal(false)}
//             onConfirm={sendQuotation}
//           />
//         </ModalPortal>
//       )}

//       <style jsx global>{`
//         @media print {
//           @page {
//             size: A4 portrait;
//             margin: 10mm 12mm;
//           }

//           html,
//           body {
//             background: #fff !important;
//             color: #000 !important;
//             height: auto !important;
//             min-height: 0 !important;
//             overflow: visible !important;
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }

//           body * {
//             visibility: hidden !important;
//           }

//           .quotation-print-area,
//           .quotation-print-area * {
//             visibility: visible !important;
//           }

//           .quotation-print-area {
//             display: block !important;
//             position: relative !important;
//             left: 0 !important;
//             top: 0 !important;
//             width: 100% !important;
//             max-width: 100% !important;
//             max-height: none !important;
//             margin: 0 !important;
//             padding: 0 !important;
//             overflow: visible !important;
//             box-shadow: none !important;
//             background: #fff !important;
//           }

//           .fixed {
//             position: static !important;
//             inset: auto !important;
//             height: auto !important;
//             max-height: none !important;
//             overflow: visible !important;
//             background: transparent !important;
//             box-shadow: none !important;
//           }

//           .print-avoid-break {
//             break-inside: avoid;
//             page-break-inside: avoid;
//           }

//           .print-signatures {
//             break-inside: avoid;
//             page-break-inside: avoid;
//           }

//           tr {
//             break-inside: avoid;
//             page-break-inside: avoid;
//           }

//           thead {
//             display: table-header-group;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4 print:hidden">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// /** Public logo path — place file at apps/web/public/Akrish.jpg */
// const LOGO_SRC = "/Akrish.jpg";

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// function escapeHtml(s: string) {
//   return String(s || "")
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// }

// /** Build standalone HTML so print has no blank pages from the app shell */
// function buildPrintHtml(q: Quotation, logoUrl: string): string {
//   const rows =
//     q.items.length > 0
//       ? q.items
//           .map((item, index) => {
//             const qty = Number(item.quantity) || 0;
//             const rate = Number(item.rate) || 0;
//             const disc = Number(item.discount) || 0;
//             const amt = qty * rate * (1 - disc / 100);
//             return `<tr>
//               <td>${index + 1}</td>
//               <td><strong>${escapeHtml(item.description || "—")}</strong><br/><span class="muted">${escapeHtml(item.category || "")}</span></td>
//               <td>${qty}</td>
//               <td>${escapeHtml(item.unit || "Nos")}</td>
//               <td class="right">${formatCurrency(rate)}</td>
//               <td class="right"><strong>${formatCurrency(amt)}</strong></td>
//             </tr>`;
//           })
//           .join("")
//       : "";

//   const discRow =
//     q.additionalDiscount > 0
//       ? `<div class="row"><span>Additional Discount</span><span>- ${formatCurrency(q.additionalDiscount)}</span></div>`
//       : "";

//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8"/>
// <title>${escapeHtml(q.quotationNo)} — Quotation</title>
// <style>
//   * { box-sizing: border-box; margin: 0; padding: 0; }
//   body {
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 12px;
//     color: #111;
//     line-height: 1.35;
//     padding: 0;
//     background: #fff;
//   }
//   @page { size: A4 portrait; margin: 12mm; }
//   .sheet { max-width: 190mm; margin: 0 auto; }
//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     border-bottom: 2px solid #176b5b;
//     padding-bottom: 12px;
//     margin-bottom: 16px;
//   }
//   .brand { display: flex; gap: 12px; align-items: center; }
//   .brand img {
//     width: 52px; height: 52px; object-fit: contain;
//     border-radius: 8px;
//   }
//   .brand h1 { font-size: 22px; color: #9a5b18; letter-spacing: 0.02em; }
//   .brand p { font-size: 11px; font-weight: 600; color: #333; }
//   .brand .sub { font-size: 10px; color: #777; font-weight: 400; }
//   .meta { text-align: right; font-size: 11px; }
//   .meta h2 { font-size: 18px; margin-bottom: 6px; }
//   .two {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 24px;
//     margin-bottom: 16px;
//   }
//   .label {
//     font-size: 9px; font-weight: 700; text-transform: uppercase;
//     letter-spacing: 0.06em; color: #888; margin-bottom: 4px;
//   }
//   .muted { color: #777; font-size: 10px; }
//   table {
//     width: 100%; border-collapse: collapse; margin: 12px 0 8px;
//     font-size: 11px;
//   }
//   th {
//     background: #f3f3f3; text-align: left; font-size: 9px;
//     text-transform: uppercase; padding: 6px 8px;
//     border: 1px solid #ddd;
//   }
//   td {
//     padding: 6px 8px; border: 1px solid #e5e5e5; vertical-align: top;
//   }
//   .right { text-align: right; }
//   .totals { width: 220px; margin-left: auto; margin-top: 8px; font-size: 11px; }
//   .totals .row { display: flex; justify-content: space-between; padding: 2px 0; }
//   .totals .grand {
//     border-top: 2px solid #111; margin-top: 4px; padding-top: 6px;
//     font-size: 13px; font-weight: 700;
//   }
//   .notes {
//     display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
//     margin-top: 18px; font-size: 11px; color: #333;
//   }
//   .notes strong { display: block; margin-bottom: 4px; color: #111; }
//   /* Signatures stick to end of document / last page */
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 40px;
//     margin-top: 48px;
//     page-break-inside: avoid;
//     break-inside: avoid;
//   }
//   .sig {
//     text-align: center;
//   }
//   .sig .line {
//     border-bottom: 1px solid #444;
//     height: 40px;
//     margin-bottom: 6px;
//   }
//   .sig .title { font-size: 11px; font-weight: 700; }
//   .sig .hint { font-size: 9px; color: #777; }
//   .footer-note {
//     margin-top: 20px;
//     text-align: center;
//     font-size: 9px;
//     color: #999;
//   }
//   @media print {
//     body { padding: 0; }
//     .sheet { max-width: none; }
//   }
// </style>
// </head>
// <body>
//   <div class="sheet">
//     <div class="header">
//       <div class="brand">
//         <img src="${escapeHtml(logoUrl)}" alt="Akrish" onerror="this.style.display='none'"/>
//         <div>
//           <h1>AKRISH</h1>
//           <p>Furniture &amp; Interior</p>
//           <p class="sub">Interior Design &amp; Execution Services</p>
//         </div>
//       </div>
//       <div class="meta">
//         <h2>QUOTATION</h2>
//         <div><strong>No:</strong> ${escapeHtml(q.quotationNo)}</div>
//         <div><strong>Date:</strong> ${escapeHtml(formatDate(q.quotationDate))}</div>
//         <div><strong>Valid Until:</strong> ${escapeHtml(formatDate(q.validUntil))}</div>
//       </div>
//     </div>

//     <div class="two">
//       <div>
//         <div class="label">Bill To</div>
//         <div><strong>${escapeHtml(q.client)}</strong></div>
//         ${q.phone && q.phone !== "—" ? `<div>${escapeHtml(q.phone)}</div>` : ""}
//         ${q.email ? `<div>${escapeHtml(q.email)}</div>` : ""}
//         ${q.address ? `<div>${escapeHtml(q.address)}</div>` : ""}
//       </div>
//       <div>
//         <div class="label">Project</div>
//         <div><strong>${escapeHtml(q.projectName)}</strong></div>
//         <div>Type: ${escapeHtml(q.projectType)}</div>
//         ${q.location && q.location !== "—" ? `<div>Location: ${escapeHtml(q.location)}</div>` : ""}
//         ${q.designer && q.designer !== "—" ? `<div>Designer: ${escapeHtml(q.designer)}</div>` : ""}
//       </div>
//     </div>

//     ${
//       q.items.length
//         ? `<table>
//       <thead>
//         <tr>
//           <th style="width:28px">#</th>
//           <th>Description</th>
//           <th style="width:48px">Qty</th>
//           <th style="width:48px">Unit</th>
//           <th class="right" style="width:80px">Rate</th>
//           <th class="right" style="width:90px">Amount</th>
//         </tr>
//       </thead>
//       <tbody>${rows}</tbody>
//     </table>`
//         : ""
//     }

//     <div class="totals">
//       <div class="row"><span>Subtotal</span><span>${formatCurrency(q.amount)}</span></div>
//       ${discRow}
//       <div class="row"><span>GST (${q.taxRate}%)</span><span>${formatCurrency(q.tax)}</span></div>
//       <div class="row grand"><span>Grand Total</span><span>${formatCurrency(q.total)}</span></div>
//     </div>

//     <div class="notes">
//       <div>
//         <strong>Notes</strong>
//         ${escapeHtml(q.notes || "—").replace(/\n/g, "<br/>")}
//       </div>
//       <div>
//         <strong>Terms &amp; Conditions</strong>
//         ${escapeHtml(q.terms || "—").replace(/\n/g, "<br/>")}
//         <div style="margin-top:6px"><strong>Payment:</strong> ${escapeHtml(q.paymentTerms)}</div>
//       </div>
//     </div>

//     <div class="signatures">
//       <div class="sig">
//         <div class="line"></div>
//         <div class="title">Client Signature</div>
//         <div class="hint">Name &amp; Date</div>
//       </div>
//       <div class="sig">
//         <div class="line"></div>
//         <div class="title">For Akrish Furniture &amp; Interior</div>
//         <div class="hint">Authorized Signatory</div>
//       </div>
//     </div>

//     <p class="footer-note">
//       This quotation is system generated and is subject to the terms mentioned above.
//     </p>
//   </div>
// </body>
// </html>`;
// }

// function printQuotationDocument(q: Quotation) {
//   const logoUrl =
//     typeof window !== "undefined"
//       ? `${window.location.origin}${LOGO_SRC}`
//       : LOGO_SRC;

//   const html = buildPrintHtml(q, logoUrl);
//   const win = window.open("", "_blank", "noopener,noreferrer,width=900,height=1000");

//   if (!win) {
//     // Popup blocked — fallback: write into iframe
//     const iframe = document.createElement("iframe");
//     iframe.style.position = "fixed";
//     iframe.style.right = "0";
//     iframe.style.bottom = "0";
//     iframe.style.width = "0";
//     iframe.style.height = "0";
//     iframe.style.border = "0";
//     document.body.appendChild(iframe);
//     const doc = iframe.contentDocument || iframe.contentWindow?.document;
//     if (!doc) return;
//     doc.open();
//     doc.write(html);
//     doc.close();
//     setTimeout(() => {
//       iframe.contentWindow?.focus();
//       iframe.contentWindow?.print();
//       setTimeout(() => document.body.removeChild(iframe), 1000);
//     }, 300);
//     return;
//   }

//   win.document.open();
//   win.document.write(html);
//   win.document.close();
//   // Wait for logo image, then print
//   setTimeout(() => {
//     win.focus();
//     win.print();
//   }, 400);
// }

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal;
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [selectedQuotation, showDeleteModal, showConvertModal, showSendModal]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();
//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);
//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;
//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;
//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);
//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);
//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;
//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );
//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );
//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;
//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       const data = full
//         ? mapToUi(full)
//         : quotations.find((q) => q.id === id) || null;
//       if (data) printQuotationDocument(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {selectedQuotation && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4"
//             role="dialog"
//             aria-modal="true"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setSelectedQuotation(null);
//             }}
//           >
//             <div
//               className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
//               style={{ maxHeight: "min(90dvh, 880px)" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
//                 <div className="min-w-0 pr-2">
//                   <p className="text-xs font-semibold text-[#176b5b]">
//                     {selectedQuotation.quotationNo}
//                   </p>
//                   <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
//                     {selectedQuotation.projectName}
//                   </h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
//                 style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
//               >
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   <Info label="Client" value={selectedQuotation.client} />
//                   <Info label="Phone" value={selectedQuotation.phone} />
//                   <Info label="Email" value={selectedQuotation.email || "—"} />
//                   <Info label="Designer" value={selectedQuotation.designer} />
//                   <Info label="Type" value={selectedQuotation.projectType} />
//                   <Info label="Location" value={selectedQuotation.location} />
//                   <Info
//                     label="Date"
//                     value={formatDate(selectedQuotation.quotationDate)}
//                   />
//                   <Info
//                     label="Valid Until"
//                     value={formatDate(selectedQuotation.validUntil)}
//                   />
//                   <Info
//                     label="Amount"
//                     value={formatCurrency(selectedQuotation.amount)}
//                   />
//                   <Info
//                     label="Tax"
//                     value={formatCurrency(selectedQuotation.tax)}
//                   />
//                   <Info
//                     label="Total"
//                     value={formatCurrency(selectedQuotation.total)}
//                   />
//                   <div className="rounded-xl bg-[#fafaf8] p-3">
//                     <p className="text-xs text-gray-400">Status</p>
//                     <span
//                       className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                         selectedQuotation.status
//                       )}`}
//                     >
//                       {selectedQuotation.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-xs text-gray-400">Payment Terms</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedQuotation.paymentTerms}
//                   </p>
//                 </div>

//                 {selectedQuotation.notes ? (
//                   <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                     {selectedQuotation.notes}
//                   </div>
//                 ) : null}

//                 <div className="mt-4 pb-1">
//                   <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                     Update Status
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {statusOptions.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           changeStatus(selectedQuotation.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                           selectedQuotation.status === status
//                             ? statusClass(status)
//                             : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
//                 <Link
//                   href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                   className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={() => void handlePrint(selectedQuotation.id)}
//                   className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Print
//                 </button>
//                 {selectedQuotation.status === "Draft" && (
//                   <button
//                     type="button"
//                     onClick={() => setShowSendModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Mark as Sent
//                   </button>
//                 )}
//                 {(selectedQuotation.status === "Sent" ||
//                   selectedQuotation.status === "Accepted") && (
//                   <button
//                     type="button"
//                     onClick={() => setShowConvertModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Convert to Project
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => setShowDeleteModal(true)}
//                   className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Delete quotation?"
//             message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//             confirmLabel="Delete"
//             danger
//             onCancel={() => setShowDeleteModal(false)}
//             onConfirm={confirmDelete}
//           />
//         </ModalPortal>
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Convert to project?"
//             message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//             confirmLabel="Convert"
//             onCancel={() => setShowConvertModal(false)}
//             onConfirm={convertToProject}
//           />
//         </ModalPortal>
//       )}

//       {showSendModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Mark as sent?"
//             message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//             confirmLabel="Mark Sent"
//             onCancel={() => setShowSendModal(false)}
//             onConfirm={sendQuotation}
//           />
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// /** File at: apps/web/public/Akrish.jpg */
// const LOGO_SRC = "/Akrish.jpg";

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// function escapeHtml(s: string) {
//   return String(s || "")
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// }

// function buildPrintHtml(q: Quotation, logoUrl: string): string {
//   const rows =
//     q.items.length > 0
//       ? q.items
//           .map((item, index) => {
//             const qty = Number(item.quantity) || 0;
//             const rate = Number(item.rate) || 0;
//             const disc = Number(item.discount) || 0;
//             const amt = qty * rate * (1 - disc / 100);
//             return `<tr>
//               <td>${index + 1}</td>
//               <td><strong>${escapeHtml(item.description || "—")}</strong><br/><span class="muted">${escapeHtml(item.category || "")}</span></td>
//               <td>${qty}</td>
//               <td>${escapeHtml(item.unit || "Nos")}</td>
//               <td class="right">${formatCurrency(rate)}</td>
//               <td class="right"><strong>${formatCurrency(amt)}</strong></td>
//             </tr>`;
//           })
//           .join("")
//       : "";

//   const discRow =
//     q.additionalDiscount > 0
//       ? `<div class="t-row"><span>Additional Discount</span><span>- ${formatCurrency(q.additionalDiscount)}</span></div>`
//       : "";

//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8"/>
// <title>${escapeHtml(q.quotationNo)}</title>
// <style>
//   * { box-sizing: border-box; margin: 0; padding: 0; }
//   html, body {
//     height: 100%;
//     background: #fff;
//     color: #111;
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 12px;
//     line-height: 1.35;
//   }
//   @page {
//     size: A4 portrait;
//     margin: 12mm;
//   }
//   /* One page height ≈ A4 printable area so signatures sit at bottom */
//   .sheet {
//     min-height: calc(297mm - 24mm);
//     display: flex;
//     flex-direction: column;
//     padding: 0;
//   }
//   .main { flex: 1 0 auto; }
//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     border-bottom: 2px solid #176b5b;
//     padding-bottom: 12px;
//     margin-bottom: 16px;
//   }
//   .brand { display: flex; gap: 12px; align-items: center; }
//   .brand img {
//     width: 52px; height: 52px; object-fit: contain; border-radius: 8px;
//   }
//   .brand h1 { font-size: 22px; color: #9a5b18; }
//   .brand p { font-size: 11px; font-weight: 600; color: #333; }
//   .brand .sub { font-size: 10px; color: #777; font-weight: 400; }
//   .meta { text-align: right; font-size: 11px; }
//   .meta h2 { font-size: 18px; margin-bottom: 6px; }
//   .two {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 24px;
//     margin-bottom: 16px;
//   }
//   .label {
//     font-size: 9px; font-weight: 700; text-transform: uppercase;
//     letter-spacing: 0.06em; color: #888; margin-bottom: 4px;
//   }
//   .muted { color: #777; font-size: 10px; }
//   table {
//     width: 100%; border-collapse: collapse; margin: 12px 0 8px; font-size: 11px;
//   }
//   th {
//     background: #f3f3f3; text-align: left; font-size: 9px;
//     text-transform: uppercase; padding: 6px 8px; border: 1px solid #ddd;
//   }
//   td { padding: 6px 8px; border: 1px solid #e5e5e5; vertical-align: top; }
//   .right { text-align: right; }
//   .totals { width: 220px; margin-left: auto; margin-top: 8px; font-size: 11px; }
//   .t-row { display: flex; justify-content: space-between; padding: 2px 0; }
//   .grand {
//     border-top: 2px solid #111; margin-top: 4px; padding-top: 6px;
//     font-size: 13px; font-weight: 700;
//   }
//   .notes {
//     display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
//     margin-top: 18px; font-size: 11px; color: #333;
//   }
//   .notes strong { display: block; margin-bottom: 4px; color: #111; }

//   /* Footer block: signatures at bottom of page */
//   .footer-block {
//     flex: 0 0 auto;
//     margin-top: auto;
//     padding-top: 28px;
//     page-break-inside: avoid;
//     break-inside: avoid;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 48px;
//   }
//   .sig { text-align: center; }
//   .sig .line {
//     border-bottom: 1px solid #444;
//     height: 44px;
//     margin-bottom: 6px;
//   }
//   .sig .title { font-size: 11px; font-weight: 700; }
//   .sig .hint { font-size: 9px; color: #777; }
//   .footer-note {
//     margin-top: 16px;
//     text-align: center;
//     font-size: 9px;
//     color: #999;
//   }
//   @media print {
//     html, body { height: auto; }
//     .sheet {
//       min-height: calc(297mm - 24mm);
//     }
//   }
// </style>
// </head>
// <body>
//   <div class="sheet">
//     <div class="main">
//       <div class="header">
//         <div class="brand">
//           <img src="${escapeHtml(logoUrl)}" alt="Akrish" onerror="this.style.display='none'"/>
//           <div>
//             <h1>AKRISH</h1>
//             <p>Furniture &amp; Interior</p>
//             <p class="sub">Interior Design &amp; Execution Services</p>
//           </div>
//         </div>
//         <div class="meta">
//           <h2>QUOTATION</h2>
//           <div><strong>No:</strong> ${escapeHtml(q.quotationNo)}</div>
//           <div><strong>Date:</strong> ${escapeHtml(formatDate(q.quotationDate))}</div>
//           <div><strong>Valid Until:</strong> ${escapeHtml(formatDate(q.validUntil))}</div>
//         </div>
//       </div>

//       <div class="two">
//         <div>
//           <div class="label">Bill To</div>
//           <div><strong>${escapeHtml(q.client)}</strong></div>
//           ${q.phone && q.phone !== "—" ? `<div>${escapeHtml(q.phone)}</div>` : ""}
//           ${q.email ? `<div>${escapeHtml(q.email)}</div>` : ""}
//           ${q.address ? `<div>${escapeHtml(q.address)}</div>` : ""}
//         </div>
//         <div>
//           <div class="label">Project</div>
//           <div><strong>${escapeHtml(q.projectName)}</strong></div>
//           <div>Type: ${escapeHtml(q.projectType)}</div>
//           ${q.location && q.location !== "—" ? `<div>Location: ${escapeHtml(q.location)}</div>` : ""}
//           ${q.designer && q.designer !== "—" ? `<div>Designer: ${escapeHtml(q.designer)}</div>` : ""}
//         </div>
//       </div>

//       ${
//         q.items.length
//           ? `<table>
//         <thead>
//           <tr>
//             <th style="width:28px">#</th>
//             <th>Description</th>
//             <th style="width:48px">Qty</th>
//             <th style="width:48px">Unit</th>
//             <th class="right" style="width:80px">Rate</th>
//             <th class="right" style="width:90px">Amount</th>
//           </tr>
//         </thead>
//         <tbody>${rows}</tbody>
//       </table>`
//           : ""
//       }

//       <div class="totals">
//         <div class="t-row"><span>Subtotal</span><span>${formatCurrency(q.amount)}</span></div>
//         ${discRow}
//         <div class="t-row"><span>GST (${q.taxRate}%)</span><span>${formatCurrency(q.tax)}</span></div>
//         <div class="t-row grand"><span>Grand Total</span><span>${formatCurrency(q.total)}</span></div>
//       </div>

//       <div class="notes">
//         <div>
//           <strong>Notes</strong>
//           ${escapeHtml(q.notes || "—").replace(/\n/g, "<br/>")}
//         </div>
//         <div>
//           <strong>Terms &amp; Conditions</strong>
//           ${escapeHtml(q.terms || "—").replace(/\n/g, "<br/>")}
//           <div style="margin-top:6px"><strong>Payment:</strong> ${escapeHtml(q.paymentTerms)}</div>
//         </div>
//       </div>
//     </div>

//     <div class="footer-block">
//       <div class="signatures">
//         <div class="sig">
//           <div class="line"></div>
//           <div class="title">Client Signature</div>
//           <div class="hint">Name &amp; Date</div>
//         </div>
//         <div class="sig">
//           <div class="line"></div>
//           <div class="title">For Akrish Furniture &amp; Interior</div>
//           <div class="hint">Authorized Signatory</div>
//         </div>
//       </div>
//       <p class="footer-note">
//         This quotation is system generated and is subject to the terms mentioned above.
//       </p>
//     </div>
//   </div>
// </body>
// </html>`;
// }

// /** Print via hidden iframe only — no about:blank tab */
// function printQuotationDocument(q: Quotation) {
//   const logoUrl =
//     typeof window !== "undefined"
//       ? `${window.location.origin}${LOGO_SRC}`
//       : LOGO_SRC;

//   const html = buildPrintHtml(q, logoUrl);

//   const existing = document.getElementById("akrish-print-frame");
//   if (existing) existing.remove();

//   const iframe = document.createElement("iframe");
//   iframe.id = "akrish-print-frame";
//   iframe.setAttribute("aria-hidden", "true");
//   iframe.style.cssText =
//     "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;";
//   document.body.appendChild(iframe);

//   const doc = iframe.contentDocument || iframe.contentWindow?.document;
//   if (!doc) {
//     iframe.remove();
//     return;
//   }

//   doc.open();
//   doc.write(html);
//   doc.close();

//   const trigger = () => {
//     try {
//       iframe.contentWindow?.focus();
//       iframe.contentWindow?.print();
//     } finally {
//       // Remove after print dialog closes (best-effort)
//       setTimeout(() => {
//         if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
//       }, 1500);
//     }
//   };

//   // Wait for logo, then print
//   const img = doc.querySelector("img");
//   if (img && !(img as HTMLImageElement).complete) {
//     img.addEventListener("load", () => setTimeout(trigger, 50));
//     img.addEventListener("error", () => setTimeout(trigger, 50));
//     setTimeout(trigger, 800);
//   } else {
//     setTimeout(trigger, 200);
//   }
// }

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);
//   const [printLoading, setPrintLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal;
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [selectedQuotation, showDeleteModal, showConvertModal, showSendModal]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();
//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);
//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;
//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;
//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);
//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);
//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;
//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );
//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );
//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;
//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       const data = full
//         ? mapToUi(full)
//         : quotations.find((q) => q.id === id) || null;
//       if (data) printQuotationDocument(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {selectedQuotation && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4"
//             role="dialog"
//             aria-modal="true"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setSelectedQuotation(null);
//             }}
//           >
//             <div
//               className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
//               style={{ maxHeight: "min(90dvh, 880px)" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
//                 <div className="min-w-0 pr-2">
//                   <p className="text-xs font-semibold text-[#176b5b]">
//                     {selectedQuotation.quotationNo}
//                   </p>
//                   <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
//                     {selectedQuotation.projectName}
//                   </h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
//                 style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
//               >
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   <Info label="Client" value={selectedQuotation.client} />
//                   <Info label="Phone" value={selectedQuotation.phone} />
//                   <Info label="Email" value={selectedQuotation.email || "—"} />
//                   <Info label="Designer" value={selectedQuotation.designer} />
//                   <Info label="Type" value={selectedQuotation.projectType} />
//                   <Info label="Location" value={selectedQuotation.location} />
//                   <Info
//                     label="Date"
//                     value={formatDate(selectedQuotation.quotationDate)}
//                   />
//                   <Info
//                     label="Valid Until"
//                     value={formatDate(selectedQuotation.validUntil)}
//                   />
//                   <Info
//                     label="Amount"
//                     value={formatCurrency(selectedQuotation.amount)}
//                   />
//                   <Info
//                     label="Tax"
//                     value={formatCurrency(selectedQuotation.tax)}
//                   />
//                   <Info
//                     label="Total"
//                     value={formatCurrency(selectedQuotation.total)}
//                   />
//                   <div className="rounded-xl bg-[#fafaf8] p-3">
//                     <p className="text-xs text-gray-400">Status</p>
//                     <span
//                       className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                         selectedQuotation.status
//                       )}`}
//                     >
//                       {selectedQuotation.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-xs text-gray-400">Payment Terms</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedQuotation.paymentTerms}
//                   </p>
//                 </div>

//                 {selectedQuotation.notes ? (
//                   <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                     {selectedQuotation.notes}
//                   </div>
//                 ) : null}

//                 <div className="mt-4 pb-1">
//                   <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                     Update Status
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {statusOptions.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           changeStatus(selectedQuotation.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                           selectedQuotation.status === status
//                             ? statusClass(status)
//                             : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
//                 <Link
//                   href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                   className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={() => void handlePrint(selectedQuotation.id)}
//                   className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Print
//                 </button>
//                 {selectedQuotation.status === "Draft" && (
//                   <button
//                     type="button"
//                     onClick={() => setShowSendModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Mark as Sent
//                   </button>
//                 )}
//                 {(selectedQuotation.status === "Sent" ||
//                   selectedQuotation.status === "Accepted") && (
//                   <button
//                     type="button"
//                     onClick={() => setShowConvertModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Convert to Project
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => setShowDeleteModal(true)}
//                   className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Delete quotation?"
//             message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//             confirmLabel="Delete"
//             danger
//             onCancel={() => setShowDeleteModal(false)}
//             onConfirm={confirmDelete}
//           />
//         </ModalPortal>
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Convert to project?"
//             message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//             confirmLabel="Convert"
//             onCancel={() => setShowConvertModal(false)}
//             onConfirm={convertToProject}
//           />
//         </ModalPortal>
//       )}

//       {showSendModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Mark as sent?"
//             message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//             confirmLabel="Mark Sent"
//             onCancel={() => setShowSendModal(false)}
//             onConfirm={sendQuotation}
//           />
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import Link from "next/link";
// import {
//   getAllQuotations,
//   getQuotationById,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
//   type QuotationItem,
// } from "@/modules/interior/services/quotationService";
// import { createProject } from "@/modules/interior/services/projectService";
// import { Timestamp } from "firebase/firestore";
// import { Plus, Pencil, Printer, Eye } from "lucide-react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   address: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   taxRate: number;
//   additionalDiscount: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
//   terms: string;
//   items: QuotationItem[];
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// const LOGO_SRC = "/Akrish.jpg";

// function formatCurrency(value: number) {
//   return `₹${Number(value || 0).toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount =
//     Number(q.amount ?? q.subtotal ?? 0) ||
//     (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     address: q.address || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     taxRate: Number(q.taxRate ?? 18) || 18,
//     additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//     terms: q.terms || "",
//     items: Array.isArray(q.items) ? q.items : [],
//   };
// }

// function escapeHtml(s: string) {
//   return String(s || "")
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// }

// function buildPrintHtml(q: Quotation, logoUrl: string): string {
//   const rows =
//     q.items.length > 0
//       ? q.items
//           .map((item, index) => {
//             const qty = Number(item.quantity) || 0;
//             const rate = Number(item.rate) || 0;
//             const disc = Number(item.discount) || 0;
//             const amt = qty * rate * (1 - disc / 100);
//             return `<tr>
//               <td>${index + 1}</td>
//               <td><strong>${escapeHtml(item.description || "—")}</strong><br/><span class="muted">${escapeHtml(item.category || "")}</span></td>
//               <td>${qty}</td>
//               <td>${escapeHtml(item.unit || "Nos")}</td>
//               <td class="right">${formatCurrency(rate)}</td>
//               <td class="right"><strong>${formatCurrency(amt)}</strong></td>
//             </tr>`;
//           })
//           .join("")
//       : "";

//   const discRow =
//     q.additionalDiscount > 0
//       ? `<div class="t-row"><span>Additional Discount</span><span>- ${formatCurrency(q.additionalDiscount)}</span></div>`
//       : "";

//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8"/>
// <title>${escapeHtml(q.quotationNo)}</title>
// <style>
//   * { box-sizing: border-box; margin: 0; padding: 0; }
//   html, body {
//     height: 100%;
//     background: #fff;
//     color: #111;
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 12px;
//     line-height: 1.35;
//   }
//   @page { size: A4 portrait; margin: 12mm; }
//   .sheet {
//     min-height: calc(297mm - 24mm);
//     display: flex;
//     flex-direction: column;
//   }
//   .main { flex: 1 0 auto; }
//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     border-bottom: 2px solid #176b5b;
//     padding-bottom: 12px;
//     margin-bottom: 16px;
//   }
//   .brand { display: flex; gap: 12px; align-items: center; }
//   .brand img {
//     width: 52px; height: 52px; object-fit: contain; border-radius: 8px;
//   }
//   .brand h1 { font-size: 22px; color: #9a5b18; }
//   .brand p { font-size: 11px; font-weight: 600; color: #333; }
//   .brand .sub { font-size: 10px; color: #777; font-weight: 400; }
//   .meta { text-align: right; font-size: 11px; }
//   .meta h2 { font-size: 18px; margin-bottom: 6px; }
//   .two {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 24px;
//     margin-bottom: 16px;
//   }
//   .label {
//     font-size: 9px; font-weight: 700; text-transform: uppercase;
//     letter-spacing: 0.06em; color: #888; margin-bottom: 4px;
//   }
//   .muted { color: #777; font-size: 10px; }
//   table {
//     width: 100%; border-collapse: collapse; margin: 12px 0 8px; font-size: 11px;
//   }
//   th {
//     background: #f3f3f3; text-align: left; font-size: 9px;
//     text-transform: uppercase; padding: 6px 8px; border: 1px solid #ddd;
//   }
//   td { padding: 6px 8px; border: 1px solid #e5e5e5; vertical-align: top; }
//   .right { text-align: right; }
//   .totals { width: 220px; margin-left: auto; margin-top: 8px; font-size: 11px; }
//   .t-row { display: flex; justify-content: space-between; padding: 2px 0; }
//   .grand {
//     border-top: 2px solid #111; margin-top: 4px; padding-top: 6px;
//     font-size: 13px; font-weight: 700;
//   }
//   .notes {
//     display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
//     margin-top: 18px; font-size: 11px; color: #333;
//   }
//   .notes strong { display: block; margin-bottom: 4px; color: #111; }
//   .footer-block {
//     flex: 0 0 auto;
//     margin-top: auto;
//     padding-top: 28px;
//     page-break-inside: avoid;
//     break-inside: avoid;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 48px;
//   }
//   .sig { text-align: center; }
//   .sig .line {
//     border-bottom: 1px solid #444;
//     height: 44px;
//     margin-bottom: 6px;
//   }
//   .sig .title { font-size: 11px; font-weight: 700; }
//   .sig .hint { font-size: 9px; color: #777; }
//   .footer-note {
//     margin-top: 16px;
//     text-align: center;
//     font-size: 9px;
//     color: #999;
//   }
// </style>
// </head>
// <body>
//   <div class="sheet">
//     <div class="main">
//       <div class="header">
//         <div class="brand">
//           <img src="${escapeHtml(logoUrl)}" alt="Akrish" onerror="this.style.display='none'"/>
//           <div>
//             <h1>AKRISH</h1>
//             <p>Furniture &amp; Interior</p>
//             <p class="sub">Interior Design &amp; Execution Services</p>
//           </div>
//         </div>
//         <div class="meta">
//           <h2>QUOTATION</h2>
//           <div><strong>No:</strong> ${escapeHtml(q.quotationNo)}</div>
//           <div><strong>Date:</strong> ${escapeHtml(formatDate(q.quotationDate))}</div>
//           <div><strong>Valid Until:</strong> ${escapeHtml(formatDate(q.validUntil))}</div>
//         </div>
//       </div>

//       <div class="two">
//         <div>
//           <div class="label">Bill To</div>
//           <div><strong>${escapeHtml(q.client)}</strong></div>
//           ${q.phone && q.phone !== "—" ? `<div>${escapeHtml(q.phone)}</div>` : ""}
//           ${q.email ? `<div>${escapeHtml(q.email)}</div>` : ""}
//           ${q.address ? `<div>${escapeHtml(q.address)}</div>` : ""}
//         </div>
//         <div>
//           <div class="label">Project</div>
//           <div><strong>${escapeHtml(q.projectName)}</strong></div>
//           <div>Type: ${escapeHtml(q.projectType)}</div>
//           ${q.location && q.location !== "—" ? `<div>Location: ${escapeHtml(q.location)}</div>` : ""}
//           ${q.designer && q.designer !== "—" ? `<div>Designer: ${escapeHtml(q.designer)}</div>` : ""}
//         </div>
//       </div>

//       ${
//         q.items.length
//           ? `<table>
//         <thead>
//           <tr>
//             <th style="width:28px">#</th>
//             <th>Description</th>
//             <th style="width:48px">Qty</th>
//             <th style="width:48px">Unit</th>
//             <th class="right" style="width:80px">Rate</th>
//             <th class="right" style="width:90px">Amount</th>
//           </tr>
//         </thead>
//         <tbody>${rows}</tbody>
//       </table>`
//           : ""
//       }

//       <div class="totals">
//         <div class="t-row"><span>Subtotal</span><span>${formatCurrency(q.amount)}</span></div>
//         ${discRow}
//         <div class="t-row"><span>GST (${q.taxRate}%)</span><span>${formatCurrency(q.tax)}</span></div>
//         <div class="t-row grand"><span>Grand Total</span><span>${formatCurrency(q.total)}</span></div>
//       </div>

//       <div class="notes">
//         <div>
//           <strong>Notes</strong>
//           ${escapeHtml(q.notes || "—").replace(/\n/g, "<br/>")}
//         </div>
//         <div>
//           <strong>Terms &amp; Conditions</strong>
//           ${escapeHtml(q.terms || "—").replace(/\n/g, "<br/>")}
//           <div style="margin-top:6px"><strong>Payment:</strong> ${escapeHtml(q.paymentTerms)}</div>
//         </div>
//       </div>
//     </div>

//     <div class="footer-block">
//       <div class="signatures">
//         <div class="sig">
//           <div class="line"></div>
//           <div class="title">Client Signature</div>
//           <div class="hint">Name &amp; Date</div>
//         </div>
//         <div class="sig">
//           <div class="line"></div>
//           <div class="title">For Akrish Furniture &amp; Interior</div>
//           <div class="hint">Authorized Signatory</div>
//         </div>
//       </div>
//       <p class="footer-note">
//         This quotation is system generated and is subject to the terms mentioned above.
//       </p>
//     </div>
//   </div>
// </body>
// </html>`;
// }

// function printQuotationDocument(q: Quotation) {
//   const logoUrl =
//     typeof window !== "undefined"
//       ? `${window.location.origin}${LOGO_SRC}`
//       : LOGO_SRC;

//   const html = buildPrintHtml(q, logoUrl);
//   const existing = document.getElementById("akrish-print-frame");
//   if (existing) existing.remove();

//   const iframe = document.createElement("iframe");
//   iframe.id = "akrish-print-frame";
//   iframe.setAttribute("aria-hidden", "true");
//   iframe.style.cssText =
//     "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;";
//   document.body.appendChild(iframe);

//   const doc = iframe.contentDocument || iframe.contentWindow?.document;
//   if (!doc) {
//     iframe.remove();
//     return;
//   }

//   doc.open();
//   doc.write(html);
//   doc.close();

//   const trigger = () => {
//     try {
//       iframe.contentWindow?.focus();
//       iframe.contentWindow?.print();
//     } finally {
//       setTimeout(() => {
//         if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
//       }, 1500);
//     }
//   };

//   const img = doc.querySelector("img");
//   if (img && !(img as HTMLImageElement).complete) {
//     img.addEventListener("load", () => setTimeout(trigger, 50));
//     img.addEventListener("error", () => setTimeout(trigger, 50));
//     setTimeout(trigger, 800);
//   } else {
//     setTimeout(trigger, 200);
//   }
// }

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);
//   const [printLoading, setPrintLoading] = useState(false);
//   const [convertLoading, setConvertLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const open =
//       !!selectedQuotation ||
//       showDeleteModal ||
//       showConvertModal ||
//       showSendModal;
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [selectedQuotation, showDeleteModal, showConvertModal, showSendModal]);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();
//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);
//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;
//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;
//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);
//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);
//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;
//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(quotationId: string, status: QuotationStatus) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );
//     setSelectedQuotation((current) =>
//       current && current.id === quotationId ? { ...current, status } : current
//     );
//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;
//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function convertToProject() {
//     if (!selectedQuotation) return;

//     setConvertLoading(true);
//     try {
//       const q = selectedQuotation;
//       const today = new Date().toISOString().split("T")[0];
//       const projectNo = `INT-${Date.now().toString().slice(-6)}`;
//       const projectValue = Number(q.total) || Number(q.amount) || 0;

//       await createProject({
//         projectNo,
//         client: q.client,
//         clientName: q.client,
//         projectName: q.projectName === "—" ? "Untitled Project" : q.projectName,
//         name: q.projectName === "—" ? "Untitled Project" : q.projectName,
//         projectType: q.projectType,
//         type: q.projectType,
//         location: q.location === "—" ? "" : q.location,
//         designer:
//           !q.designer || q.designer === "—"
//             ? "Akrish Design Team"
//             : q.designer,
//         manager: "",
//         value: projectValue,
//         projectValue,
//         paid: 0,
//         progress: 10,
//         status: "New",
//         rooms: 0,
//         startDate: today,
//         expectedDate:
//           q.validUntil && q.validUntil !== "—" ? q.validUntil : "",
//         endDate: q.validUntil && q.validUntil !== "—" ? q.validUntil : "",
//         createdDate: today,
//         // extra link fields stored on the document
//         ...( {
//           quotationId: q.id,
//           quotationNo: q.quotationNo,
//           projectId: projectNo,
//         } as object),
//       });

//       await updateQuotation(q.id, { status: "Converted" });

//       setQuotations((current) =>
//         current.map((item) =>
//           item.id === q.id ? { ...item, status: "Converted" as const } : item
//         )
//       );

//       setShowConvertModal(false);
//       setSelectedQuotation(null);

//       alert(
//         `Project ${projectNo} created from ${q.quotationNo}.\nOpen Projects to view it.`
//       );
//     } catch (err) {
//       console.error("Convert to project failed:", err);
//       alert(
//         "Could not create project. Check the console and Firestore rules for interior_projects."
//       );
//     } finally {
//       setConvertLoading(false);
//     }
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     void changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   async function handlePrint(id: string) {
//     setPrintLoading(true);
//     try {
//       const full = await getQuotationById(id);
//       const data = full
//         ? mapToUi(full)
//         : quotations.find((q) => q.id === id) || null;
//       if (data) printQuotationDocument(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPrintLoading(false);
//     }
//   }

//   function ActionButtons({ quotation }: { quotation: Quotation }) {
//     return (
//       <div className="flex flex-wrap items-center justify-end gap-1.5">
//         <Link
//           href={`/interior/quotations/${quotation.id}/edit`}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Pencil size={12} />
//           Edit
//         </Link>
//         <button
//           type="button"
//           disabled={printLoading}
//           onClick={() => void handlePrint(quotation.id)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
//         >
//           <Printer size={12} />
//           Print
//         </button>
//         <button
//           type="button"
//           onClick={() => setSelectedQuotation(quotation)}
//           className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//         >
//           <Eye size={12} />
//           View
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Quotations
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/quotations/new"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <Plus size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">New Quotation</span>
//               <span className="sm:hidden">New</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
//             />
//             <div className="flex gap-2">
//               <select
//                 value={statusFilter}
//                 onChange={(e) =>
//                   setStatusFilter(e.target.value as QuotationStatus | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Status</option>
//                 {statusOptions.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={typeFilter}
//                 onChange={(e) =>
//                   setTypeFilter(e.target.value as ProjectType | "All")
//                 }
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
//               >
//                 <option value="All">All Types</option>
//                 {typeOptions.map((t) => (
//                   <option key={t} value={t}>
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : filteredQuotations.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No quotations found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotations.map((quotation) => (
//                     <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <p className="font-semibold text-[#176b5b]">
//                           {quotation.quotationNo}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {formatDate(quotation.quotationDate)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           {quotation.client}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium text-gray-800">
//                           {quotation.projectName}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {quotation.projectType} · {quotation.location}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                         {formatCurrency(quotation.total)}
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(quotation.validUntil)}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-right">
//                         <ActionButtons quotation={quotation} />
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading quotations…
//               </p>
//             ) : filteredQuotations.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No quotations found.
//               </p>
//             ) : (
//               filteredQuotations.map((quotation) => (
//                 <article
//                   key={quotation.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="font-semibold text-[#176b5b]">
//                         {quotation.quotationNo}
//                       </p>
//                       <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
//                         {quotation.client}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {quotation.projectName}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         quotation.status
//                       )}`}
//                     >
//                       {quotation.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(quotation.total)}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Valid {formatDate(quotation.validUntil)}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <ActionButtons quotation={quotation} />
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>
//       </main>

//       {selectedQuotation && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4"
//             role="dialog"
//             aria-modal="true"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setSelectedQuotation(null);
//             }}
//           >
//             <div
//               className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
//               style={{ maxHeight: "min(90dvh, 880px)" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
//                 <div className="min-w-0 pr-2">
//                   <p className="text-xs font-semibold text-[#176b5b]">
//                     {selectedQuotation.quotationNo}
//                   </p>
//                   <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
//                     {selectedQuotation.projectName}
//                   </h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
//                 style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
//               >
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   <Info label="Client" value={selectedQuotation.client} />
//                   <Info label="Phone" value={selectedQuotation.phone} />
//                   <Info label="Email" value={selectedQuotation.email || "—"} />
//                   <Info label="Designer" value={selectedQuotation.designer} />
//                   <Info label="Type" value={selectedQuotation.projectType} />
//                   <Info label="Location" value={selectedQuotation.location} />
//                   <Info
//                     label="Date"
//                     value={formatDate(selectedQuotation.quotationDate)}
//                   />
//                   <Info
//                     label="Valid Until"
//                     value={formatDate(selectedQuotation.validUntil)}
//                   />
//                   <Info
//                     label="Amount"
//                     value={formatCurrency(selectedQuotation.amount)}
//                   />
//                   <Info
//                     label="Tax"
//                     value={formatCurrency(selectedQuotation.tax)}
//                   />
//                   <Info
//                     label="Total"
//                     value={formatCurrency(selectedQuotation.total)}
//                   />
//                   <div className="rounded-xl bg-[#fafaf8] p-3">
//                     <p className="text-xs text-gray-400">Status</p>
//                     <span
//                       className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                         selectedQuotation.status
//                       )}`}
//                     >
//                       {selectedQuotation.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-xs text-gray-400">Payment Terms</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedQuotation.paymentTerms}
//                   </p>
//                 </div>

//                 {selectedQuotation.notes ? (
//                   <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                     {selectedQuotation.notes}
//                   </div>
//                 ) : null}

//                 <div className="mt-4 pb-1">
//                   <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                     Update Status
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {statusOptions.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           changeStatus(selectedQuotation.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                           selectedQuotation.status === status
//                             ? statusClass(status)
//                             : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
//                 <Link
//                   href={`/interior/quotations/${selectedQuotation.id}/edit`}
//                   className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={() => void handlePrint(selectedQuotation.id)}
//                   className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Print
//                 </button>
//                 {selectedQuotation.status === "Draft" && (
//                   <button
//                     type="button"
//                     onClick={() => setShowSendModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Mark as Sent
//                   </button>
//                 )}
//                 {(selectedQuotation.status === "Sent" ||
//                   selectedQuotation.status === "Accepted") && (
//                   <button
//                     type="button"
//                     onClick={() => setShowConvertModal(true)}
//                     className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
//                   >
//                     Convert to Project
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => setShowDeleteModal(true)}
//                   className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setSelectedQuotation(null)}
//                   className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Delete quotation?"
//             message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//             confirmLabel="Delete"
//             danger
//             onCancel={() => setShowDeleteModal(false)}
//             onConfirm={confirmDelete}
//           />
//         </ModalPortal>
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Convert to project?"
//             message={`Create a new project from ${selectedQuotation.quotationNo} (${selectedQuotation.projectName}) and mark this quotation as Converted?`}
//             confirmLabel={convertLoading ? "Creating…" : "Convert"}
//             onCancel={() => {
//               if (!convertLoading) setShowConvertModal(false);
//             }}
//             onConfirm={() => void convertToProject()}
//           />
//         </ModalPortal>
//       )}

//       {showSendModal && selectedQuotation && (
//         <ModalPortal>
//           <ConfirmModal
//             title="Mark as sent?"
//             message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//             confirmLabel="Mark Sent"
//             onCancel={() => setShowSendModal(false)}
//             onConfirm={sendQuotation}
//           />
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   const busy =
//     confirmLabel.includes("…") || confirmLabel.toLowerCase().includes("...");

//   return (
//     <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//           <button
//             type="button"
//             disabled={busy}
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 disabled:opacity-50"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             disabled={busy}
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60 ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation as deleteQuotationFromDb,
  type InteriorQuotation,
  type QuotationItem,
} from "@/modules/interior/services/quotationService";
import { createProject } from "@/modules/interior/services/projectService";
import { Timestamp } from "firebase/firestore";
import { Plus, Pencil, Printer, Eye, CheckCircle2 } from "lucide-react";

type QuotationStatus =
  | "Draft"
  | "Sent"
  | "Accepted"
  | "Rejected"
  | "Expired"
  | "Converted";

type ProjectType =
  | "Residential"
  | "Commercial"
  | "Office"
  | "Villa"
  | "Apartment";

type Quotation = {
  id: string;
  quotationNo: string;
  client: string;
  phone: string;
  email: string;
  address: string;
  projectName: string;
  projectType: ProjectType;
  location: string;
  designer: string;
  quotationDate: string;
  validUntil: string;
  amount: number;
  tax: number;
  taxRate: number;
  additionalDiscount: number;
  total: number;
  status: QuotationStatus;
  paymentTerms: string;
  notes: string;
  terms: string;
  items: QuotationItem[];
};

const statusOptions: QuotationStatus[] = [
  "Draft",
  "Sent",
  "Accepted",
  "Rejected",
  "Expired",
  "Converted",
];

const typeOptions: ProjectType[] = [
  "Residential",
  "Commercial",
  "Office",
  "Villa",
  "Apartment",
];

const LOGO_SRC = "/Akrish.jpg";

function formatCurrency(value: number) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

function formatCompactCurrency(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
  return formatCurrency(value);
}

function formatDate(date: string) {
  if (!date || date === "—") return "—";
  try {
    const d = date.includes("T")
      ? new Date(date)
      : new Date(`${date}T00:00:00`);
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function statusClass(status: QuotationStatus) {
  switch (status) {
    case "Draft":
      return "bg-gray-100 text-gray-700 border-gray-200";
    case "Sent":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Accepted":
      return "bg-green-50 text-green-700 border-green-200";
    case "Rejected":
      return "bg-red-50 text-red-700 border-red-200";
    case "Expired":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Converted":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function toDateString(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value.slice(0, 10);
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate().toISOString().slice(0, 10);
    }
  } catch {
    /* ignore */
  }
  return "";
}

function normalizeStatus(raw?: string): QuotationStatus {
  const s = (raw || "Draft").trim();
  if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
  const lower = s.toLowerCase();
  if (lower.includes("sent")) return "Sent";
  if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
  if (lower.includes("reject")) return "Rejected";
  if (lower.includes("expir")) return "Expired";
  if (lower.includes("convert")) return "Converted";
  return "Draft";
}

function normalizeType(raw?: string): ProjectType {
  const s = (raw || "Residential").trim();
  if ((typeOptions as string[]).includes(s)) return s as ProjectType;
  const lower = s.toLowerCase();
  if (lower.includes("commercial")) return "Commercial";
  if (lower.includes("office")) return "Office";
  if (lower.includes("villa")) return "Villa";
  if (lower.includes("apartment")) return "Apartment";
  return "Residential";
}

function mapToUi(q: InteriorQuotation): Quotation {
  const total = Number(q.total ?? 0) || 0;
  const amount =
    Number(q.amount ?? q.subtotal ?? 0) ||
    (total ? Math.round(total / 1.18) : 0);
  const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);
  return {
    id: q.id,
    quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
    client: q.client || q.clientName || "Unknown",
    phone: q.phone || "—",
    email: q.email || "",
    address: q.address || "",
    projectName: q.projectName || "—",
    projectType: normalizeType(q.projectType),
    location: q.location || "—",
    designer: q.designer || "—",
    quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
    validUntil: q.validUntil || "—",
    amount,
    tax,
    taxRate: Number(q.taxRate ?? 18) || 18,
    additionalDiscount: Number(q.additionalDiscount ?? 0) || 0,
    total: total || amount + tax,
    status: normalizeStatus(q.status),
    paymentTerms:
      q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
    notes: q.notes || "",
    terms: q.terms || "",
    items: Array.isArray(q.items) ? q.items : [],
  };
}

function escapeHtml(s: string) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPrintHtml(q: Quotation, logoUrl: string): string {
  const rows =
    q.items.length > 0
      ? q.items
          .map((item, index) => {
            const qty = Number(item.quantity) || 0;
            const rate = Number(item.rate) || 0;
            const disc = Number(item.discount) || 0;
            const amt = qty * rate * (1 - disc / 100);
            return `<tr>
              <td>${index + 1}</td>
              <td><strong>${escapeHtml(item.description || "—")}</strong><br/><span class="muted">${escapeHtml(item.category || "")}</span></td>
              <td>${qty}</td>
              <td>${escapeHtml(item.unit || "Nos")}</td>
              <td class="right">${formatCurrency(rate)}</td>
              <td class="right"><strong>${formatCurrency(amt)}</strong></td>
            </tr>`;
          })
          .join("")
      : "";

  const discRow =
    q.additionalDiscount > 0
      ? `<div class="t-row"><span>Additional Discount</span><span>- ${formatCurrency(q.additionalDiscount)}</span></div>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${escapeHtml(q.quotationNo)}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    height: 100%;
    background: #fff;
    color: #111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 1.35;
  }
  @page { size: A4 portrait; margin: 12mm; }
  .sheet {
    min-height: calc(297mm - 24mm);
    display: flex;
    flex-direction: column;
  }
  .main { flex: 1 0 auto; }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #176b5b;
    padding-bottom: 12px;
    margin-bottom: 16px;
  }
  .brand { display: flex; gap: 12px; align-items: center; }
  .brand img {
    width: 52px; height: 52px; object-fit: contain; border-radius: 8px;
  }
  .brand h1 { font-size: 22px; color: #9a5b18; }
  .brand p { font-size: 11px; font-weight: 600; color: #333; }
  .brand .sub { font-size: 10px; color: #777; font-weight: 400; }
  .meta { text-align: right; font-size: 11px; }
  .meta h2 { font-size: 18px; margin-bottom: 6px; }
  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 16px;
  }
  .label {
    font-size: 9px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.06em; color: #888; margin-bottom: 4px;
  }
  .muted { color: #777; font-size: 10px; }
  table {
    width: 100%; border-collapse: collapse; margin: 12px 0 8px; font-size: 11px;
  }
  th {
    background: #f3f3f3; text-align: left; font-size: 9px;
    text-transform: uppercase; padding: 6px 8px; border: 1px solid #ddd;
  }
  td { padding: 6px 8px; border: 1px solid #e5e5e5; vertical-align: top; }
  .right { text-align: right; }
  .totals { width: 220px; margin-left: auto; margin-top: 8px; font-size: 11px; }
  .t-row { display: flex; justify-content: space-between; padding: 2px 0; }
  .grand {
    border-top: 2px solid #111; margin-top: 4px; padding-top: 6px;
    font-size: 13px; font-weight: 700;
  }
  .notes {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
    margin-top: 18px; font-size: 11px; color: #333;
  }
  .notes strong { display: block; margin-bottom: 4px; color: #111; }
  .footer-block {
    flex: 0 0 auto;
    margin-top: auto;
    padding-top: 28px;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .signatures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
  .sig { text-align: center; }
  .sig .line {
    border-bottom: 1px solid #444;
    height: 44px;
    margin-bottom: 6px;
  }
  .sig .title { font-size: 11px; font-weight: 700; }
  .sig .hint { font-size: 9px; color: #777; }
  .footer-note {
    margin-top: 16px;
    text-align: center;
    font-size: 9px;
    color: #999;
  }
</style>
</head>
<body>
  <div class="sheet">
    <div class="main">
      <div class="header">
        <div class="brand">
          <img src="${escapeHtml(logoUrl)}" alt="Akrish" onerror="this.style.display='none'"/>
          <div>
            <h1>AKRISH</h1>
            <p>Furniture &amp; Interior</p>
            <p class="sub">Interior Design &amp; Execution Services</p>
          </div>
        </div>
        <div class="meta">
          <h2>QUOTATION</h2>
          <div><strong>No:</strong> ${escapeHtml(q.quotationNo)}</div>
          <div><strong>Date:</strong> ${escapeHtml(formatDate(q.quotationDate))}</div>
          <div><strong>Valid Until:</strong> ${escapeHtml(formatDate(q.validUntil))}</div>
        </div>
      </div>
      <div class="two">
        <div>
          <div class="label">Bill To</div>
          <div><strong>${escapeHtml(q.client)}</strong></div>
          ${q.phone && q.phone !== "—" ? `<div>${escapeHtml(q.phone)}</div>` : ""}
          ${q.email ? `<div>${escapeHtml(q.email)}</div>` : ""}
          ${q.address ? `<div>${escapeHtml(q.address)}</div>` : ""}
        </div>
        <div>
          <div class="label">Project</div>
          <div><strong>${escapeHtml(q.projectName)}</strong></div>
          <div>Type: ${escapeHtml(q.projectType)}</div>
          ${q.location && q.location !== "—" ? `<div>Location: ${escapeHtml(q.location)}</div>` : ""}
          ${q.designer && q.designer !== "—" ? `<div>Designer: ${escapeHtml(q.designer)}</div>` : ""}
        </div>
      </div>
      ${
        q.items.length
          ? `<table>
        <thead>
          <tr>
            <th style="width:28px">#</th>
            <th>Description</th>
            <th style="width:48px">Qty</th>
            <th style="width:48px">Unit</th>
            <th class="right" style="width:80px">Rate</th>
            <th class="right" style="width:90px">Amount</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`
          : ""
      }
      <div class="totals">
        <div class="t-row"><span>Subtotal</span><span>${formatCurrency(q.amount)}</span></div>
        ${discRow}
        <div class="t-row"><span>GST (${q.taxRate}%)</span><span>${formatCurrency(q.tax)}</span></div>
        <div class="t-row grand"><span>Grand Total</span><span>${formatCurrency(q.total)}</span></div>
      </div>
      <div class="notes">
        <div>
          <strong>Notes</strong>
          ${escapeHtml(q.notes || "—").replace(/\n/g, "<br/>")}
        </div>
        <div>
          <strong>Terms &amp; Conditions</strong>
          ${escapeHtml(q.terms || "—").replace(/\n/g, "<br/>")}
          <div style="margin-top:6px"><strong>Payment:</strong> ${escapeHtml(q.paymentTerms)}</div>
        </div>
      </div>
    </div>
    <div class="footer-block">
      <div class="signatures">
        <div class="sig">
          <div class="line"></div>
          <div class="title">Client Signature</div>
          <div class="hint">Name &amp; Date</div>
        </div>
        <div class="sig">
          <div class="line"></div>
          <div class="title">For Akrish Furniture &amp; Interior</div>
          <div class="hint">Authorized Signatory</div>
        </div>
      </div>
      <p class="footer-note">
        This quotation is system generated and is subject to the terms mentioned above.
      </p>
    </div>
  </div>
</body>
</html>`;
}

/** Print once only — fixes double dialog from load + timeout */
function printQuotationDocument(q: Quotation) {
  const logoUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${LOGO_SRC}`
      : LOGO_SRC;
  const html = buildPrintHtml(q, logoUrl);

  const existing = document.getElementById("akrish-print-frame");
  if (existing) existing.remove();

  const iframe = document.createElement("iframe");
  iframe.id = "akrish-print-frame";
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText =
    "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;";
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) {
    iframe.remove();
    return;
  }

  doc.open();
  doc.write(html);
  doc.close();

  let printed = false;
  const trigger = () => {
    if (printed) return;
    printed = true;
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } finally {
      // Remove after dialog is likely closed; does not block cancel
      window.setTimeout(() => {
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      }, 1000);
    }
  };

  const img = doc.querySelector("img") as HTMLImageElement | null;
  if (img && !img.complete) {
    const onDone = () => {
      img.removeEventListener("load", onDone);
      img.removeEventListener("error", onDone);
      window.setTimeout(trigger, 50);
    };
    img.addEventListener("load", onDone);
    img.addEventListener("error", onDone);
    // Safety: single fallback, guarded by `printed`
    window.setTimeout(trigger, 600);
  } else {
    window.setTimeout(trigger, 150);
  }
}

function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function InteriorQuotationsPage() {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
    "All"
  );
  const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
    null
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [printLoading, setPrintLoading] = useState(false);
  const [convertLoading, setConvertLoading] = useState(false);

  /** Success after convert — replaces window.alert */
  const [convertSuccess, setConvertSuccess] = useState<{
    projectNo: string;
    quotationNo: string;
    projectName: string;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const data = await getAllQuotations();
        if (cancelled) return;
        setQuotations(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load quotations:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const open =
      !!selectedQuotation ||
      showDeleteModal ||
      showConvertModal ||
      showSendModal ||
      !!convertSuccess;
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [
    selectedQuotation,
    showDeleteModal,
    showConvertModal,
    showSendModal,
    convertSuccess,
  ]);

  const filteredQuotations = useMemo(() => {
    const query = search.toLowerCase().trim();
    return quotations.filter((quotation) => {
      const matchesSearch =
        !query ||
        quotation.quotationNo.toLowerCase().includes(query) ||
        quotation.client.toLowerCase().includes(query) ||
        quotation.projectName.toLowerCase().includes(query) ||
        quotation.location.toLowerCase().includes(query) ||
        quotation.designer.toLowerCase().includes(query);
      const matchesStatus =
        statusFilter === "All" || quotation.status === statusFilter;
      const matchesType =
        typeFilter === "All" || quotation.projectType === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [quotations, search, statusFilter, typeFilter]);

  const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);
  const acceptedValue = quotations
    .filter((q) => q.status === "Accepted" || q.status === "Converted")
    .reduce((sum, q) => sum + q.total, 0);
  const pendingValue = quotations
    .filter((q) => q.status === "Sent" || q.status === "Draft")
    .reduce((sum, q) => sum + q.total, 0);
  const acceptedCount = quotations.filter(
    (q) => q.status === "Accepted" || q.status === "Converted"
  ).length;
  const conversionRate =
    quotations.length === 0
      ? 0
      : Math.round((acceptedCount / quotations.length) * 100);

  async function changeStatus(quotationId: string, status: QuotationStatus) {
    setQuotations((current) =>
      current.map((quotation) =>
        quotation.id === quotationId ? { ...quotation, status } : quotation
      )
    );
    setSelectedQuotation((current) =>
      current && current.id === quotationId ? { ...current, status } : current
    );
    try {
      await updateQuotation(quotationId, { status });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllQuotations();
        setQuotations(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function confirmDelete() {
    if (!selectedQuotation) return;
    const id = selectedQuotation.id;
    setQuotations((current) => current.filter((q) => q.id !== id));
    setSelectedQuotation(null);
    setShowDeleteModal(false);
    try {
      await deleteQuotationFromDb(id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllQuotations();
        setQuotations(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function convertToProject() {
    if (!selectedQuotation) return;
    setConvertLoading(true);
    try {
      const q = selectedQuotation;
      const today = new Date().toISOString().split("T")[0];
      const projectNo = `INT-${Date.now().toString().slice(-6)}`;
      const projectValue = Number(q.total) || Number(q.amount) || 0;
      const projectName =
        q.projectName === "—" ? "Untitled Project" : q.projectName;

      await createProject({
        projectNo,
        client: q.client,
        clientName: q.client,
        projectName,
        name: projectName,
        projectType: q.projectType,
        type: q.projectType,
        location: q.location === "—" ? "" : q.location,
        designer:
          !q.designer || q.designer === "—"
            ? "Akrish Design Team"
            : q.designer,
        manager: "",
        value: projectValue,
        projectValue,
        paid: 0,
        progress: 10,
        status: "New",
        rooms: 0,
        startDate: today,
        expectedDate:
          q.validUntil && q.validUntil !== "—" ? q.validUntil : "",
        endDate: q.validUntil && q.validUntil !== "—" ? q.validUntil : "",
        createdDate: today,
        ...({
          quotationId: q.id,
          quotationNo: q.quotationNo,
          projectId: projectNo,
        } as object),
      });

      await updateQuotation(q.id, { status: "Converted" });

      setQuotations((current) =>
        current.map((item) =>
          item.id === q.id ? { ...item, status: "Converted" as const } : item
        )
      );

      setShowConvertModal(false);
      setSelectedQuotation(null);
      setConvertSuccess({
        projectNo,
        quotationNo: q.quotationNo,
        projectName,
      });
    } catch (err) {
      console.error("Convert to project failed:", err);
      setShowConvertModal(false);
      setConvertSuccess(null);
      // soft error banner via reusing success modal pattern is overkill; keep simple
      window.alert(
        "Could not create project. Check the console and Firestore rules for interior_projects."
      );
    } finally {
      setConvertLoading(false);
    }
  }

  function sendQuotation() {
    if (!selectedQuotation) return;
    void changeStatus(selectedQuotation.id, "Sent");
    setShowSendModal(false);
  }

  async function handlePrint(id: string) {
    if (printLoading) return;
    setPrintLoading(true);
    try {
      const full = await getQuotationById(id);
      const data = full
        ? mapToUi(full)
        : quotations.find((q) => q.id === id) || null;
      if (data) printQuotationDocument(data);
    } catch (err) {
      console.error(err);
    } finally {
      setPrintLoading(false);
    }
  }

  function ActionButtons({ quotation }: { quotation: Quotation }) {
    return (
      <div className="flex flex-wrap items-center justify-end gap-1.5">
        <Link
          href={`/interior/quotations/${quotation.id}/edit`}
          className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
        >
          <Pencil size={12} />
        </Link>
        <button
          type="button"
          disabled={printLoading}
          onClick={() => void handlePrint(quotation.id)}
          className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b] disabled:opacity-50"
        >
          <Printer size={12} />
          Print
        </button>
        <button
          type="button"
          onClick={() => setSelectedQuotation(quotation)}
          className="inline-flex items-center gap-1 rounded-md border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
        >
          <Eye size={12} />
          View
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Quotations
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage interior quotations, approvals and conversions.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <Link
              href="/interior/quotations/new"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">New Quotation</span>
              <span className="sm:hidden">New</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total Quotations"
            value={loading ? "…" : String(quotations.length)}
            helper={formatCompactCurrency(totalValue)}
          />
          <SummaryCard
            label="Accepted Value"
            value={loading ? "…" : formatCompactCurrency(acceptedValue)}
            helper={`${acceptedCount} accepted / converted`}
          />
          <SummaryCard
            label="Pending Value"
            value={loading ? "…" : formatCompactCurrency(pendingValue)}
            helper="Draft + Sent"
          />
          <SummaryCard
            label="Conversion Rate"
            value={loading ? "…" : `${conversionRate}%`}
            helper="Accepted vs total"
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search quotation, client, project..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as QuotationStatus | "All")
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Status</option>
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={typeFilter}
                onChange={(e) =>
                  setTypeFilter(e.target.value as ProjectType | "All")
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Types</option>
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Quotation List</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredQuotations.length} records
            </p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1100px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Quotation</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Valid Until</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading quotations…
                    </td>
                  </tr>
                ) : filteredQuotations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No quotations found.
                    </td>
                  </tr>
                ) : (
                  filteredQuotations.map((quotation) => (
                    <tr key={quotation.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#176b5b]">
                          {quotation.quotationNo}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {formatDate(quotation.quotationDate)}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {quotation.client}
                        </p>
                        <p className="text-xs text-gray-500">
                          {quotation.phone}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {quotation.projectName}
                        </p>
                        <p className="text-xs text-gray-400">
                          {quotation.projectType} · {quotation.location}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                        {formatCurrency(quotation.total)}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {formatDate(quotation.validUntil)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            quotation.status
                          )}`}
                        >
                          {quotation.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <ActionButtons quotation={quotation} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {loading ? (
              <p className="py-10 text-center text-sm text-gray-500">
                Loading quotations…
              </p>
            ) : filteredQuotations.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No quotations found.
              </p>
            ) : (
              filteredQuotations.map((quotation) => (
                <article
                  key={quotation.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-[#176b5b]">
                        {quotation.quotationNo}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
                        {quotation.client}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {quotation.projectName}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                        quotation.status
                      )}`}
                    >
                      {quotation.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(quotation.total)}
                    </span>
                    <span className="text-xs text-gray-500">
                      Valid {formatDate(quotation.validUntil)}
                    </span>
                  </div>
                  <div className="mt-3">
                    <ActionButtons quotation={quotation} />
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      {selectedQuotation && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 sm:p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedQuotation(null);
            }}
          >
            <div
              className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              style={{ maxHeight: "min(90dvh, 880px)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-[#e4e2da] px-4 py-3.5 sm:px-5">
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-semibold text-[#176b5b]">
                    {selectedQuotation.quotationNo}
                  </p>
                  <h2 className="mt-0.5 truncate text-lg font-bold sm:text-xl">
                    {selectedQuotation.projectName}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedQuotation(null)}
                  className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
                style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
              >
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Info label="Client" value={selectedQuotation.client} />
                  <Info label="Phone" value={selectedQuotation.phone} />
                  <Info label="Email" value={selectedQuotation.email || "—"} />
                  <Info label="Designer" value={selectedQuotation.designer} />
                  <Info label="Type" value={selectedQuotation.projectType} />
                  <Info label="Location" value={selectedQuotation.location} />
                  <Info
                    label="Date"
                    value={formatDate(selectedQuotation.quotationDate)}
                  />
                  <Info
                    label="Valid Until"
                    value={formatDate(selectedQuotation.validUntil)}
                  />
                  <Info
                    label="Amount"
                    value={formatCurrency(selectedQuotation.amount)}
                  />
                  <Info
                    label="Tax"
                    value={formatCurrency(selectedQuotation.tax)}
                  />
                  <Info
                    label="Total"
                    value={formatCurrency(selectedQuotation.total)}
                  />
                  <div className="rounded-xl bg-[#fafaf8] p-3">
                    <p className="text-xs text-gray-400">Status</p>
                    <span
                      className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                        selectedQuotation.status
                      )}`}
                    >
                      {selectedQuotation.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-gray-400">Payment Terms</p>
                  <p className="mt-1 text-sm text-gray-700">
                    {selectedQuotation.paymentTerms}
                  </p>
                </div>

                {selectedQuotation.notes ? (
                  <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                    {selectedQuotation.notes}
                  </div>
                ) : null}

                <div className="mt-4 pb-1">
                  <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                    Update Status
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() =>
                          changeStatus(selectedQuotation.id, status)
                        }
                        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                          selectedQuotation.status === status
                            ? statusClass(status)
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#e4e2da] bg-white px-4 py-3 sm:px-5">
                <Link
                  href={`/interior/quotations/${selectedQuotation.id}/edit`}
                  className="rounded-lg border border-[#176b5b] px-3 py-2 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 sm:px-4 sm:py-2.5"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={printLoading}
                  onClick={() => void handlePrint(selectedQuotation.id)}
                  className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 sm:px-4 sm:py-2.5"
                >
                  {printLoading ? "Preparing…" : "Print"}
                </button>
                {selectedQuotation.status === "Draft" && (
                  <button
                    type="button"
                    onClick={() => setShowSendModal(true)}
                    className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
                  >
                    Mark as Sent
                  </button>
                )}
                {(selectedQuotation.status === "Sent" ||
                  selectedQuotation.status === "Accepted") && (
                  <button
                    type="button"
                    onClick={() => setShowConvertModal(true)}
                    className="rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125848] sm:px-4 sm:py-2.5"
                  >
                    Convert to Project
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
                  className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 sm:px-4 sm:py-2.5"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedQuotation(null)}
                  className="ml-auto rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 sm:px-4 sm:py-2.5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}

      {showDeleteModal && selectedQuotation && (
        <ModalPortal>
          <ConfirmModal
            title="Delete quotation?"
            message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
            confirmLabel="Delete"
            danger
            onCancel={() => setShowDeleteModal(false)}
            onConfirm={confirmDelete}
          />
        </ModalPortal>
      )}

      {showConvertModal && selectedQuotation && (
        <ModalPortal>
          <ConfirmModal
            title="Convert to project?"
            message={`Create a new project from ${selectedQuotation.quotationNo} (${selectedQuotation.projectName}) and mark this quotation as Converted?`}
            confirmLabel={convertLoading ? "Creating…" : "Convert"}
            onCancel={() => {
              if (!convertLoading) setShowConvertModal(false);
            }}
            onConfirm={() => void convertToProject()}
          />
        </ModalPortal>
      )}

      {showSendModal && selectedQuotation && (
        <ModalPortal>
          <ConfirmModal
            title="Mark as sent?"
            message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
            confirmLabel="Mark Sent"
            onCancel={() => setShowSendModal(false)}
            onConfirm={sendQuotation}
          />
        </ModalPortal>
      )}

      {/* Success UI instead of alert */}
      {convertSuccess && (
        <ModalPortal>
          <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="bg-[#eef7f4] px-5 pb-5 pt-7 text-center sm:px-6 sm:pt-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#176b5b] text-white">
                  <CheckCircle2 size={28} strokeWidth={2.5} />
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#1a1a1a]">
                  Project created
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  <span className="font-semibold text-[#176b5b]">
                    {convertSuccess.projectNo}
                  </span>{" "}
                  was created from{" "}
                  <span className="font-medium text-gray-800">
                    {convertSuccess.quotationNo}
                  </span>
                  .
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {convertSuccess.projectName} · Status New · Open Projects to
                  continue.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-end sm:gap-3 sm:p-5">
                <button
                  type="button"
                  onClick={() => setConvertSuccess(null)}
                  className="min-h-[44px] rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <Link
                  href="/interior/projects"
                  onClick={() => setConvertSuccess(null)}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Open Projects
                </Link>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}

function SummaryCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#fafaf8] p-3">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
}

function ConfirmModal({
  title,
  message,
  confirmLabel,
  danger,
  onCancel,
  onConfirm,
}: {
  title: string;
  message: string;
  confirmLabel: string;
  danger?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const busy =
    confirmLabel.includes("…") || confirmLabel.toLowerCase().includes("...");
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            disabled={busy}
            onClick={onCancel}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onConfirm}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60 ${
              danger
                ? "bg-red-600 hover:bg-red-700"
                : "bg-[#176b5b] hover:bg-[#125848]"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
