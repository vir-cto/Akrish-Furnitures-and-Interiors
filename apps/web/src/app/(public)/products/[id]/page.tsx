
"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Loader2,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  addToCart as addToFirebaseCart,
  removeFromCart as removeFromFirebaseCart,
  getCart,
  getProductAgeDays,
  canApplyAgeingDiscount,
  getEffectiveSellingPrice,
} from "@/services/cartService";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/services/wishlistService";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  listPrice: number;
  discountPercent: number;
  effectivePrice: number;
  hasDiscount: boolean;
  ageDays: number;
  material: string;
  dimensions: string;
  stock: number;
  image?: string;
  leadTime?: string;
  leadTimeDays: number;
}

function parseLeadTimeDays(value: unknown, fallback = 7): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.min(365, Math.floor(value));
  }

  const s = String(value ?? "").trim();
  if (!s || s === "—") return fallback;

  const nums = s.match(/\d+/g);
  if (!nums?.length) return fallback;

  const max = Math.max(
    ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
  );

  return Number.isFinite(max) ? Math.min(365, max) : fallback;
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDeliveryDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = (params?.id as string) || "";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [busy, setBusy] = useState(false);
  const [wishBusy, setWishBusy] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!productId) return;

    async function load() {
      setLoading(true);

      try {
        const snap = await getDoc(
          doc(db, "furniture_products", productId)
        );

        if (snap.exists()) {
          const data = snap.data();
          const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
          const leadTimeDays = parseLeadTimeDays(leadRaw, 7);

          const listPrice = Number(
            data.sellingPrice ?? data.price ?? 0
          );

          const discountPercent = Math.min(
            100,
            Math.max(0, Number(data.discountPercent) || 0)
          );

          const ageDays = getProductAgeDays(data as {
            createdAt?: { toMillis?: () => number } | null;
            publishedAt?: { toMillis?: () => number } | null;
          });

          const hasDiscount = canApplyAgeingDiscount({
            createdAt: data.createdAt as
              | { toMillis?: () => number }
              | null
              | undefined,
            publishedAt: data.publishedAt as
              | { toMillis?: () => number }
              | null
              | undefined,
            discountPercent,
          });

          const effectivePrice = getEffectiveSellingPrice(
            listPrice,
            discountPercent,
            hasDiscount
          );

          setProduct({
            id: snap.id,
            name: data.name || "Product",
            category: data.category || "Other",
            description: data.description || "",
            listPrice,
            discountPercent: hasDiscount ? discountPercent : 0,
            effectivePrice,
            hasDiscount,
            ageDays,
            material: data.material || "—",
            dimensions: data.dimensions || "—",
            stock: Number(data.stock ?? 0),
            image: data.imageUrl || data.image || "",
            leadTime: String(leadRaw || "").trim() || undefined,
            leadTimeDays,
          });
        } else {
          setProduct(null);
        }
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [productId]);

  const expectedDelivery = useMemo(() => {
    if (!product) return null;
    return addDays(new Date(), product.leadTimeDays);
  }, [product]);

  useEffect(() => {
    if (!productId) return;

    let cancelled = false;

    async function sync() {
      if (!authUid) {
        if (!cancelled) {
          setInCart(false);
          setInWishlist(false);
        }
        return;
      }

      try {
        const [cart, wish] = await Promise.all([
          getCart(authUid),
          getWishlist(authUid),
        ]);

        if (cancelled) return;

        setInCart(
          Boolean(
            cart?.items?.some((i) => i.productId === productId)
          )
        );

        setInWishlist(
          Boolean(
            wish?.items?.some((i) => i.productId === productId)
          )
        );
      } catch {
        if (!cancelled) {
          setInCart(false);
          setInWishlist(false);
        }
      }
    }

    sync();

    window.addEventListener("cartUpdated", sync);
    window.addEventListener("wishlistUpdated", sync);

    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", sync);
      window.removeEventListener("wishlistUpdated", sync);
    };
  }, [productId, authUid]);

  const toggleCart = async () => {
    if (!product) return;

    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    setBusy(true);

    try {
      if (inCart) {
        await removeFromFirebaseCart(authUid, product.id);
        setInCart(false);
      } else {
        const cart = await getCart(authUid);

        const already = cart?.items?.some(
          (i) => i.productId === product.id
        );

        if (!already) {
          await addToFirebaseCart(authUid, {
            productId: product.id,
            name: product.name,
            price: product.effectivePrice,
            listPrice: product.listPrice,
            discountPercent: product.hasDiscount
              ? product.discountPercent
              : undefined,
            quantity: 1,
            image: product.image || "",
            category: product.category,
            leadTimeDays: product.leadTimeDays,
          });
        }

        setInCart(true);
      }

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Cart toggle failed", err);
    } finally {
      setBusy(false);
    }
  };

  const toggleWishlist = async () => {
    if (!product) return;

    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    setWishBusy(true);

    try {
      if (inWishlist) {
        await removeFromWishlist(authUid, product.id);
        setInWishlist(false);
      } else {
        await addToWishlist(authUid, {
          productId: product.id,
          name: product.name,
          price: product.effectivePrice,
          image: product.image || "",
          category: product.category,
        });

        setInWishlist(true);
      }

      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist toggle failed", err);
    } finally {
      setWishBusy(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
        <p className="text-slate-600">Product not found.</p>

        <Link
          href="/products"
          className="mt-4 inline-block font-semibold text-[#176b5b]"
        >
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
          {/* <Link
            href="/products"
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
          >
            <ArrowLeft size={14} className="shrink-0" />
            Back to products
          </Link> */}
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
          <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
            {/* Product image */}
            <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
                />
              ) : (
                <div className="p-2 text-center">
                  <ShoppingBag
                    size={36}
                    className="mx-auto text-slate-300 lg:h-14 lg:w-14"
                  />
                </div>
              )}

              {/* Back arrow button at the top-left of the image */}
              <Link
                href="/products"
                aria-label="Back to products"
                title="Back to products"
                className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
              >
                <ArrowLeft size={18} />
              </Link>

              {/* Discount badge below the arrow */}
              {product.hasDiscount && (
                <span className="absolute left-3 top-16 z-10 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
                  {product.discountPercent}% OFF
                </span>
              )}

              {/* Wishlist button */}
              <button
                type="button"
                disabled={wishBusy}
                onClick={toggleWishlist}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
                aria-label={
                  inWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={14}
                  className={
                    inWishlist
                      ? "fill-current text-red-500 sm:h-4 sm:w-4"
                      : "text-slate-600 sm:h-4 sm:w-4"
                  }
                />
              </button>
            </div>

            {/* Mobile title and price */}
            <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                {product.category}
              </p>

              <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
                {product.name}
              </h1>

              {product.hasDiscount ? (
                <div className="mt-2">
                  <p className="text-xs text-slate-400 line-through">
                    {formatCurrency(product.listPrice)}
                  </p>

                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    {formatCurrency(product.effectivePrice)}
                  </p>

                  <span className="mt-0.5 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                    {product.discountPercent}% off
                  </span>
                </div>
              ) : (
                <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  {formatCurrency(product.effectivePrice)}
                </p>
              )}

              <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-emerald-700">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            {/* Product details */}
            <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {product.category}
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  {product.name}
                </h1>

                {product.hasDiscount ? (
                  <div className="mt-6">
                    <p className="text-base text-slate-400 line-through">
                      {formatCurrency(product.listPrice)}
                    </p>

                    <p className="text-3xl font-bold text-slate-900">
                      {formatCurrency(product.effectivePrice)}
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      {product.discountPercent}% off · discount
                    </span>
                  </div>
                ) : (
                  <p className="mt-6 text-3xl font-bold text-slate-900">
                    {formatCurrency(product.effectivePrice)}
                  </p>
                )}
              </div>

              <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
                {product.description || "No description available."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
                <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
                  <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
                    Material
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                    {product.material}
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
                  <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
                    Dimensions
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                    {product.dimensions}
                  </p>
                </div>
              </div>

              <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-emerald-700">
                  {product.stock} units available
                </span>
              </div>

              <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
                Change quantity on the cart page after adding.
                {product.hasDiscount
                  ? ` Price includes ${product.discountPercent}% discount.`
                  : ""}
              </p>

              {/* Cart actions */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                <button
                  type="button"
                  disabled={busy}
                  onClick={toggleCart}
                  className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
                    inCart
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {busy ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : inCart ? (
                    <>
                      <Trash2 size={15} className="shrink-0" />
                      <span className="truncate">Remove</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={15} className="shrink-0" />
                      <span className="truncate">Add to cart</span>
                    </>
                  )}
                </button>

                <Link
                  href="/cart"
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
                >
                  <span className="truncate">Go to Cart</span>
                </Link>
              </div>

              {!authUid && (
                <p className="mt-3 text-xs text-slate-500">
                  <Link
                    href="/sign-in"
                    className="font-semibold text-[#176b5b] hover:underline"
                  >
                    Sign in
                  </Link>{" "}
                  to add this product to your cart.
                </p>
              )}

              {/* Estimated delivery */}
              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
                <div className="flex gap-3">
                  <Truck
                    size={18}
                    className="mt-0.5 shrink-0 text-[#176b5b]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Estimated delivery
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {expectedDelivery ? (
                        <>
                          By{" "}
                          <span className="font-semibold text-slate-800">
                            {formatDeliveryDate(expectedDelivery)}
                          </span>
                          {" · "}
                          {product.leadTimeDays} day
                          {product.leadTimeDays === 1 ? "" : "s"} lead time
                          {product.leadTime
                            ? ` (${product.leadTime})`
                            : ""}
                        </>
                      ) : (
                        "Delivery date confirmed at checkout."
                      )}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Exact date may vary by location and order volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
