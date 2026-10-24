"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationButton({
  page,
  isActive,
  label,
}: {
  page: number;
  isActive: boolean;
  label?: string;
}) {
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
      className={`px-3 py-1.5 text-sm rounded-full cursor-pointer border transition-colors ${
        isActive
          ? "bg-[#00c94f] text-[#fafafa] border-[#00c94f]"
          : "bg-transparent text-[#292929] border-[#292929] hover:bg-[#00c94f] hover:text-[#fafafa] hover:border-[#00c94f]"
      }`}
    >
      {label || page}
    </button>
  );
}
