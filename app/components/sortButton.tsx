"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortButton({
  children,
  sort,
}: {
  children: React.ReactNode;
  sort: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeSort = searchParams.get("sort") === sort;

  function handleSort() {
    const url = `${pathname}?sort=${sort}`;
    router.push(url);
  }

  return (
    <button
      onClick={handleSort}
      className={`px-3 py-1.5 text-sm rounded-full cursor-pointer border transition-colors ${
        activeSort
          ? "bg-[#075A30] text-[#fafafa] border-[#075A30]"
          : "bg-transparent text-[#292929] border-[#292929] hover:bg-[#00c94f] hover:text-[#fafafa] hover:border-[#00c94f]"
      }`}
    >
      {children}
    </button>
  );
}
