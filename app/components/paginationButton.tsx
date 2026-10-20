"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationButton({ page }: { page: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePage() {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page.toString());
    const url = `${pathname}?${urlSearchParams.toString()}`;
    router.push(url);
  }

  return (
    <button
      onClick={handlePage}
      className="px-3 py-1.5 text-sm rounded-full cursor-pointer border transition-colors"
    >
      {page}
    </button>
  );
}
