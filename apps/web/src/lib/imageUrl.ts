/**
 * Normalize public image URLs and Google Drive share links for <img src>.
 */

export function extractGoogleDriveFileId(url: string): string | null {
  const patterns = [
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/open\?[^#]*[?&]id=([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/uc\?[^#]*[?&]id=([a-zA-Z0-9_-]+)/,
    /docs\.google\.com\/uc\?[^#]*[?&]id=([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/thumbnail\?[^#]*[?&]id=([a-zA-Z0-9_-]+)/,
    /lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/,
  ];

  for (const re of patterns) {
    const m = url.match(re);
    if (m?.[1]) return m[1];
  }
  return null;
}

/**
 * Drive share → embeddable URL.
 * Prefer lh3.googleusercontent (works in product cards).
 * Fallback: Drive thumbnail API.
 */
export function normalizeImageUrl(raw: string): string {
  const url = (raw || "").trim();
  if (!url) return "";

  const id = extractGoogleDriveFileId(url);
  if (id) {
    // Primary — best for catalog <img>
    return `https://lh3.googleusercontent.com/d/${id}=w2000`;
    // If a specific file still fails in browser, try:
    // return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
  }

  return url;
}

/** One URL per line → normalized, deduped list */
export function parseImageUrlLines(text: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  for (const line of text.split(/\r?\n/)) {
    const n = normalizeImageUrl(line);
    if (!n || seen.has(n)) continue;
    seen.add(n);
    out.push(n);
  }
  return out;
}

/** When reading a product from Firestore for display */
export function resolveProductImage(product: {
  image?: string;
  imageUrl?: string;
  images?: string[];
} | null): string {
  if (!product) return "";
  const first =
    (Array.isArray(product.images) && product.images[0]) ||
    product.imageUrl ||
    product.image ||
    "";
  return normalizeImageUrl(String(first));
}

export function resolveProductImages(product: {
  image?: string;
  imageUrl?: string;
  images?: string[];
} | null): string[] {
  if (!product) return [];
  const list: string[] = [];

  if (Array.isArray(product.images)) {
    for (const u of product.images) {
      const n = normalizeImageUrl(String(u || ""));
      if (n) list.push(n);
    }
  }

  const primary = normalizeImageUrl(
    String(product.imageUrl || product.image || "")
  );
  if (primary && !list.includes(primary)) {
    list.unshift(primary);
  }

  return Array.from(new Set(list));
}
