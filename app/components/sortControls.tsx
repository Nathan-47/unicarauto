import SortButton from "@/app/components/sortButton";

export default function SortControls() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <span className="text-sm text-gray-600">Sort by:</span>
      <SortButton sort="alpha">A-Z</SortButton>
      <SortButton sort="price-asc">Price (low to high)</SortButton>
      <SortButton sort="price-desc">Price (high to low)</SortButton>
      <SortButton sort="age-desc">Age (oldest)</SortButton>
      <SortButton sort="age-asc">Age (newest)</SortButton>
    </div>
  );
}
