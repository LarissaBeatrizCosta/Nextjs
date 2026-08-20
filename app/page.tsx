import { Suspense } from "react";
import { Container, Box, Typography, CircularProgress } from "@mui/material";
import { SearchBar } from "@/components/buscaCorretora";
import { CorretorasList } from "@/components/listaCorretoras";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10, px: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            color: "#3fb950",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          CVM — Corretoras
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#e6edf3", fontWeight: 600, mb: 1 }}
        >
          Instituições
        </Typography>
        <Typography variant="body2" sx={{ color: "#8b949e" }}>
          Clique na corretora escolhida para acessar os detalhes.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <SearchBar />
      </Box>

      <Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "#3fb950" }} />
          </Box>
        }
      >
        <CorretorasList />
      </Suspense>
    </Container>
  );
}
