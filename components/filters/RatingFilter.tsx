"use client";

interface RatingFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const ratingOptions = [
  { value: "all", label: "All Ratings" },
  { value: "4", label: "4+ Stars" },
  { value: "3", label: "3+ Stars" },
  { value: "2", label: "2+ Stars" },
  { value: "1", label: "1+ Stars" },
];

export function RatingFilter({ value, onChange }: RatingFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#1a1a1a] border-2 border-gray-800 focus:border-gray-500 h-10 rounded-lg px-2.5 py-0 text-base md:text-sm transition-colors w-full min-w-0 outline-none"
    >
      {ratingOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
