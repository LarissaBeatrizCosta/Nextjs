"use client";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import Link from "next/link";
import { Corretora } from "@/types/corretora";

interface Props {
  corretora: Corretora;
}

function formatarValorMoeda(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function CorretoraCard({ corretora }: Props) {
  const cnpjFormatado = corretora.cnpj.replace(/\D/g, "");

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "12px",
        border: "1px solid #21262d",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "#3fb950",
          backgroundColor: "#1a2130",
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/corretoras/${cnpjFormatado}`}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: "#e6edf3",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {corretora.nome_comercial}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#8b949e",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
          >
            {corretora.cnpj}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5,
            flexShrink: 0,
            ml: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#3fb950", fontFamily: "monospace", fontWeight: 500 }}
          >
            {formatarValorMoeda(Number(corretora.valor_patrimonio_liquido))}
          </Typography>
          <Box
            sx={{
              fontSize: "0.75rem",
              px: 1,
              py: 0.25,
              borderRadius: "999px",
              backgroundColor: "rgba(63, 185, 80, 0.1)",
              color: "#3fb950",
              border: "1px solid rgba(63, 185, 80, 0.2)",
              fontFamily: "monospace",
            }}
          >
            {corretora.status === "EM FUNCIONAMENTO NORMAL"
              ? "Ativo"
              : corretora.status}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
