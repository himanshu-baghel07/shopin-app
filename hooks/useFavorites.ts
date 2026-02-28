"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "shop-favorites";

function loadFromStorage(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: number[] = JSON.parse(raw);
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveToStorage(ids: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Load from localStorage on mount (client only)
  useEffect(() => {
    setFavoriteIds(loadFromStorage());
  }, []);

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveToStorage(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: number) => favoriteIds.has(id),
    [favoriteIds],
  );

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    showFavoritesOnly,
    setShowFavoritesOnly,
  };
}
