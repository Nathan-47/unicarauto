import PaginationButton from "@/app/components/paginationButton";
import { getCarCount } from "../lib/cars";

export default async function PaginationControls() {
  const carsCount = await getCarCount();
  const pagesArray = Array.from({ length: carsCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-1">
      {pagesArray.map((page) => (
        <PaginationButton key={page} page={page} />
      ))}
    </div>
  );
}
