// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },

//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": ".",
//     };

//     return config;
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Serve the ERP under /erp
//   basePath: "/erp",

//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },

//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": ".",
//     };

//     return config;
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // The ERP is accessed through the website at /erp.
//   basePath: "/erp",

//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },

//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": ".",
//     };

//     return config;
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Served under https://yourdomain.com/erp/...
//   basePath: "/erp",

//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "plus.unsplash.com" },
//       { protocol: "https", hostname: "firebasestorage.googleapis.com" },
//       { protocol: "https", hostname: "akrish-collective-erp.firebasestorage.app" },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // basePath removed — ERP is deployed at domain root
//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "plus.unsplash.com" },
//       { protocol: "https", hostname: "firebasestorage.googleapis.com" },
//       { protocol: "https", hostname: "akrish-collective-erp.firebasestorage.app" },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "plus.unsplash.com" },
//       { protocol: "https", hostname: "firebasestorage.googleapis.com" },
//       { protocol: "https", hostname: "akrish-collective-erp.firebasestorage.app" },
//     ],
//   },
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },
// };

// export default nextConfig;




import path from "node:path";
import { createRequire } from "node:module";

const req = createRequire(path.join(process.cwd(), "package.json"));
const firestoreBrowserEntry = path.join(
  path.dirname(req.resolve("@firebase/firestore/package.json")),
  "dist",
  "index.esm.js"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "akrish-collective-erp.firebasestorage.app" },
    ],
  },
  experimental: {
    serverActions: { bodySizeLimit: "10mb" },
  },
  // Firebase must be BUNDLED (not external) so the browser build of Firestore
  // is used. The "node" build pulls in gRPC + protobufjs, which needs new Function().
  webpack(config, { isServer }) {
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@firebase/firestore$": firestoreBrowserEntry,
      };
    }
    return config;
  },
};

export default nextConfig;
