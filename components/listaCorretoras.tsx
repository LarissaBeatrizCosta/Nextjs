"use client";
import { useAtomValue } from "jotai";
import { loadBuscaAtom } from "@/atoms/corretora";
import { CorretoraCard } from "./cardLista";
import { Box, Typography, Stack } from "@mui/material";

export function CorretorasList() {
  const corretoras = useAtomValue(loadBuscaAtom);

  if (corretoras.length === 0) {
    return (
      <Box
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 2,
          border: "1px solid #21262d",
          backgroundColor: "#161b22",
        }}
      >
        <Typography variant="h6" sx={{ color: "#8b949e" }}>
          Nenhuma corretora encontrada.
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      {corretoras.map((corretora) => (
        <CorretoraCard key={corretora.cnpj} corretora={corretora} />
      ))}
    </Stack>
  );
}
