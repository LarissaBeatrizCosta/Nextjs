"use client";
import { useAtomValue } from "jotai";
import { useSearchParams } from "next/navigation";
import { corretorasFiltradasAtom } from "@/atoms/corretora";
import { CorretoraCard } from "./cardCorretora";
import { Pagination } from "./paginacao";
import { Box, Typography, Stack } from "@mui/material";

const itemPorPagina = 10;

export function CorretorasList() {
  const corretoras = useAtomValue(corretorasFiltradasAtom);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  if (corretoras.length === 0) {
    return (
      <Box
        sx={{
          p: 6,
          textAlign: "center",
          backgroundColor: "default",
        }}
      >
        <Typography variant="h6" sx={{ color: "rgba(0, 8, 38, 0.6)" }}>
          Nenhuma corretora encontrada.
        </Typography>
      </Box>
    );
  }

  const totalPages = Math.ceil(corretoras.length / itemPorPagina);
  const start = (currentPage - 1) * itemPorPagina;
  const paginadas = corretoras.slice(start, start + itemPorPagina);

  return (
    <>
      <Stack spacing={2}>
        {paginadas.map((corretora) => (
          <CorretoraCard key={corretora.cnpj} corretora={corretora} />
        ))}
      </Stack>
      <Pagination totalPages={totalPages} />
    </>
  );
}
