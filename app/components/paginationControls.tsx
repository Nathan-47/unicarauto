import PaginationButton from "@/app/components/paginationButton";
import { getCarCount, totalPages } from "../lib/cars";

export default async function PaginationControls({
  currentPage,
}: {
  currentPage: number;
}) {
  const carsCount = await getCarCount();
  const pagesToShow = Math.ceil(carsCount / totalPages);

  return (
    <div className="flex justify-center gap-1 items-center">
      {currentPage != 1 && (
        <PaginationButton page={1} isActive={false} label="<<" />
      )}
      {currentPage != 1 && (
        <PaginationButton page={currentPage - 1} isActive={false} />
      )}

      <PaginationButton page={currentPage} isActive={true} />

      {currentPage != pagesToShow && (
        <PaginationButton page={currentPage + 1} isActive={false} />
      )}
      {currentPage != pagesToShow && (
        <PaginationButton page={pagesToShow} isActive={false} label=">>" />
      )}
    </div>
  );
}
