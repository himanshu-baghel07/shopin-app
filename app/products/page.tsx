"use client";
import { AllFiltersAndSort } from "@/components/filters/AllFiltersAndSort";
import { ProductGrid } from "@/components/product/ProductGrid";
import { useFavorites } from "@/hooks/useFavorites";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import useFetchProducts from "@/hooks/useFetchProducts";
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";

export default function ProductsPage() {
  const { search, category, rating, sort } = useAppSelector(
    (state) => state.filters,
  );
  const { products, loading } = useFetchProducts(search, category);
  const { categories } = useFetchCategories();
  const {
    favoriteIds,
    toggleFavorite,
    showFavoritesOnly,
    setShowFavoritesOnly,
  } = useFavorites();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Favorites filter
    if (showFavoritesOnly) {
      filtered = filtered.filter((p) => favoriteIds.has(p.id));
    }

    // Rating filter
    if (rating !== "all") {
      const minRating = parseFloat(rating);
      filtered = filtered.filter((product) => product.rating >= minRating);
    }

    // Sort
    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  }, [products, rating, sort, showFavoritesOnly, favoriteIds]);

  return (
    <div className=" mx-auto  py-8">
      <div className="sticky top-16 z-50 bg-transparent backdrop-blur-2xl px-4  py-2">
        <AllFiltersAndSort
          categories={categories}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavorites={() => setShowFavoritesOnly((prev) => !prev)}
        />
      </div>
      <ProductGrid
        products={filteredProducts}
        loading={loading}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
