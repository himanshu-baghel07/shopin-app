"use client";

import { IProduct } from "@/types/product";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
  product: IProduct;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-sm pt-0 transition border rounded-xl overflow-hidden
      ${isFavorite ? "border-blue-400/50 shadow-md" : "hover:shadow-lg border-gray-800"}`}
    >
      <div className="absolute inset-0 z-10 aspect-video bg-black/25" />

      <img
        src={product.thumbnail}
        alt={product.title}
        className="relative z-0 aspect-video w-full object-contain bg-amber-50"
      />

      <div className="relative z-20 flex flex-col gap-1.5 px-6 pt-4">
        <div className="flex justify-end">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
            {product.category}
          </span>
        </div>

        <h3 className="font-semibold leading-none tracking-tight line-clamp-1">
          {product.title}
        </h3>

        <div className="relative flex items-center gap-1 text-sm text-muted-foreground">
          <Star size={15} fill="yellow" strokeWidth={0} />
          {`${product.rating.toFixed(1)} / 5`}
        </div>
      </div>

      <div className="relative z-20 flex justify-between items-center px-6 py-4">
        <span className="font-semibold text-lg">$ {product.price}</span>

        <button
          className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => onToggleFavorite(product.id)}
        >
          <Heart
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }
          />
        </button>
      </div>
    </div>
  );
}
