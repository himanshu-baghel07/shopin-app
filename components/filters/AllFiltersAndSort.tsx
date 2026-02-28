"use client";

import {
  setCategory,
  setRating,
  setSearch,
  setSort,
} from "@/lib/features/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Heart } from "lucide-react";
import { CategoryFilter } from "./CategoryFilter";
import { RatingFilter } from "./RatingFilter";
import { SearchFilter } from "./SearchFilter";
import { SortFilter } from "./SortFilter";

interface AllFiltersAndSortProps {
  categories: string[];
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

export function AllFiltersAndSort({
  categories,
  showFavoritesOnly,
  onToggleFavorites,
}: AllFiltersAndSortProps) {
  const dispatch = useAppDispatch();
  const { search, category, rating, sort } = useAppSelector(
    (state) => state.filters,
  );

  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      {/* Search Box - 6 columns */}
      <div className="col-span-12 md:col-span-6 flex justify-between">
        <SearchFilter
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
        />
            <button
          onClick={onToggleFavorites}
          title={showFavoritesOnly ? "Show all products" : "Show favorites only"}
          className={`inline-flex md:hidden w-fit items-center justify-center gap-2 h-10 px-3 rounded-md border text-sm font-medium transition-colors
            ${
              showFavoritesOnly
                ? "bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20"
                : "border-gray-700 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
        >
          <Heart
            size={15}
            className={showFavoritesOnly ? "fill-red-500 text-red-500" : ""}
          />
          <span className="hidden sm:inline">
            {showFavoritesOnly ? "Favorites" : "Favorites"}
          </span>
        </button>
      </div>

      {/* Filters, Sort + Favorites - 6 columns */}
      <div className="col-span-12 md:col-span-6 grid grid-cols-3 md:grid-cols-4 gap-3 items-center ">
        <CategoryFilter
          value={category}
          onChange={(value) => dispatch(setCategory(value))}
          categories={categories}
        />
        <RatingFilter
          value={rating}
          onChange={(value) => dispatch(setRating(value))}
        />
        <SortFilter
          value={sort}
          onChange={(value) => dispatch(setSort(value))}
        />
      
        {/* Favorites toggle button */}
        <button
          onClick={onToggleFavorites}
          title={showFavoritesOnly ? "Show all products" : "Show favorites only"}
          className={`hidden md:inline-flex w-fit items-center justify-center gap-2 h-10 px-3 rounded-md border text-sm font-medium transition-colors
            ${
              showFavoritesOnly
                ? "bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20"
                : "border-gray-700 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
        >
          <Heart
            size={15}
            className={showFavoritesOnly ? "fill-red-500 text-red-500" : ""}
          />
          <span className="hidden sm:inline">
            {showFavoritesOnly ? "Favorites" : "Favorites"}
          </span>
        </button>
      </div>
    </div>
  );
}
