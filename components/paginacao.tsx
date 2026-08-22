"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination as MuiPagination, Box } from "@mui/material";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => router.push(createPageURL(page))}
        color="primary"
      />
    </Box>
  );
}
