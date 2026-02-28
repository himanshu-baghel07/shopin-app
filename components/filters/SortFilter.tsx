"use client";

interface SortFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Rating: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

export function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#1a1a1a] border-2 border-gray-800 focus:border-gray-500 h-10 rounded-lg px-2.5 py-0 text-base md:text-sm transition-colors w-full min-w-0 outline-none"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
