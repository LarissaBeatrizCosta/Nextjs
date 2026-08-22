"use client";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import Link from "next/link";
import { Corretora } from "@/types/corretora";
import { formatarCNPJ } from "@/utils/format/cnpj";
import { formatarValorMoeda } from "@/utils/format/moeda";

interface Props {
  corretora: Corretora;
}

export function CorretoraCard({ corretora }: Props) {
  const cnpjFormatado = formatarCNPJ(corretora.cnpj);

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "12px",
        border: "1px solid rgba(0, 8, 38, 0.15)",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "primary.main",
          backgroundColor: "background.default",
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/corretoras/${corretora.cnpj}`}
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
              color: "primary.main",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {corretora.nome_comercial || "NOME INDEFINIDO"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(0, 8, 38, 0.6)",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
          >
            {cnpjFormatado ?? "CNPJ INVÁLIDO"}
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
            sx={{ color: "text.primary", fontFamily: "monospace", fontWeight: 500 }}
          >
            {formatarValorMoeda(Number(corretora.valor_patrimonio_liquido)) ??
              "VALOR INDEFINIDO"}
          </Typography>
          <Box
            sx={{
              fontSize: "0.75rem",
              px: 1,
              py: 0.25,
              borderRadius: "999px",
              backgroundColor: "rgba(232, 0, 112, 0.1)",
              color: "primary.main",
              border: "1px solid rgba(232, 0, 112, 0.2)",
              fontFamily: "monospace",
            }}
          >
            {corretora.status === "EM FUNCIONAMENTO NORMAL"
              ? "ATIVA"
              : (corretora.status ?? "STATUS INDEFINIDO")}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
