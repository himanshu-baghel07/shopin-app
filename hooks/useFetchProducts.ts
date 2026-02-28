"use client";

import { IProduct, ProductsResponse } from "@/types/product";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const PAGE_SIZE = 10;

function buildUrl(
  base: string,
  searchQuery?: string,
  category?: string,
  skip = 0,
) {
  const params = `limit=${PAGE_SIZE}&skip=${skip}`;
  if (searchQuery?.trim())
    return `${base}/products/search?q=${encodeURIComponent(searchQuery)}&${params}`;
  if (category && category !== "all")
    return `${base}/products/category/${category}?${params}`;
  return `${base}/products?${params}`;
}

export default function useFetchProducts(
  searchQuery?: string,
  category?: string,
) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const skipRef = useRef(0);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  const fetchMore = useCallback(async () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const url = buildUrl(
        process.env.NEXT_PUBLIC_API_URL!,
        searchQuery,
        category,
        skipRef.current,
      );
      const { data } = await axios.get<ProductsResponse>(url);
      const { products: newProducts, total } = data;

      skipRef.current += newProducts.length;
      setProducts((prev) => [...prev, ...newProducts]);

      const done = skipRef.current >= total || newProducts.length === 0;
      hasMoreRef.current = !done;
    } catch {
      setError("Failed to fetch products");
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [searchQuery, category]);

  // Reset and refetch when filters change
  useEffect(() => {
    skipRef.current = 0;
    hasMoreRef.current = true;
    setProducts([]);
    fetchMore();
  }, [fetchMore]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (loadingRef.current || !hasMoreRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight + 1 >= scrollHeight) fetchMore();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMore]);

  return { products, loading, error };
}
