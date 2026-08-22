import { Container, Box } from '@mui/material';
import { notFound } from 'next/navigation';

import { BackButton } from '@/components/backButton';
import { CardDetailsCorretora } from '@/components/detailsCorretora';
import { getCorretoraByCnpj } from '@/services/corretoras';
import { Corretora } from '@/types/corretora';

interface Props {
  params: Promise<{ cnpj: string }>;
}

/** Página de detalhes de uma corretora. */
export default async function CorretoraPage({ params }: Props) {
  const { cnpj } = await params;

  let corretora: Corretora | undefined;
  try {
    corretora = await getCorretoraByCnpj(cnpj);
  } catch {
    notFound();
  }

  if (!corretora) {notFound();}

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackButton />
      </Box>
      <CardDetailsCorretora corretora={corretora} />
    </Container>
  );
}
