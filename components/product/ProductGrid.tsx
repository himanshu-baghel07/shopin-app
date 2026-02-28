"use client";

import { IProduct } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: IProduct[];
  loading: boolean;
  favoriteIds: Set<number>;
  onToggleFavorite: (id: number) => void;
  lastElementRef?: (node: HTMLDivElement | null) => void;
}

const ProductSkeleton = () => (
  <div className="relative mx-auto w-full max-w-sm pt-0 border rounded-xl overflow-hidden border-gray-800">
    <div className="absolute inset-0 z-10 aspect-video" />

    <div className="relative z-0 aspect-video w-full animate-pulse bg-muted rounded-md" />

    <div className="relative z-20 flex flex-col gap-1.5 px-6 pt-4">
      <div className="flex justify-end">
        <div className="h-5 w-20 rounded-full animate-pulse bg-muted" />
      </div>

      <div className="h-5 w-3/4 animate-pulse bg-muted rounded-md" />

      <div className="h-4 w-24 animate-pulse bg-muted rounded-md" />
    </div>

    <div className="relative z-20 flex justify-between items-center px-6 py-4">
      <div className="h-6 w-20 animate-pulse bg-muted rounded-md" />

      <div className="h-9 w-9 rounded-md animate-pulse bg-muted" />
    </div>
  </div>
);

export const ProductGrid = ({
  products,
  loading,
  favoriteIds,
  onToggleFavorite,
  lastElementRef,
}: ProductGridProps) => {
  if (loading && !products.length) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-12 text-gray-400">
        No products found matching your filters.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={index === products.length - 1 ? lastElementRef : null}
          >
            <ProductCard
              product={product}
              isFavorite={favoriteIds.has(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>

      {/* Bottom loader — shown while fetching the next page on scroll */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-pulse">
          {Array.from({ length: 5 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
};
