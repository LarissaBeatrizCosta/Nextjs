import { getCorretoraByCnpj } from "@/services/corretoras";
import { notFound } from "next/navigation";
import { Container, Box } from "@mui/material";
import { CardDetailsCorretora } from "@/components/detailsCorretora";
import { Corretora } from "@/types/corretora";
import { BackButton } from "@/components/backButton";

interface Props {
  params: Promise<{ cnpj: string }>;
}

export default async function CorretoraPage({ params }: Props) {
  const { cnpj } = await params;

  let corretora: Corretora | undefined;
  try {
    corretora = await getCorretoraByCnpj(cnpj);
  } catch {
    notFound();
  }

  if (!corretora) notFound();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackButton />
      </Box>
      <CardDetailsCorretora corretora={corretora} />
    </Container>
  );
}
