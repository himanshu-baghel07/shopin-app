"use client";

interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
  categories: string[];
}

export function CategoryFilter({
  value,
  onChange,
  categories,
}: CategoryFilterProps) {
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    ...categories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#1a1a1a] border-2 border-gray-800 focus:border-gray-500 h-10 rounded-lg px-2.5 py-0 text-base md:text-sm transition-colors w-full min-w-0 outline-none"
    >
      {categoryOptions.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}
