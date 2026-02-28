"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchFilter({ value, onChange }: SearchFilterProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  return (
    <div className="relative w-2/3 md:w-2/3">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search products..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="pl-9 w-full h-10 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 focus:border-gray-500 px-3 py-2 text-sm outline-none transition-colors"
      />
    </div>
  );
}
