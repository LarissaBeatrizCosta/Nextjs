import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { Suspense } from 'react';

import { CorretorasList } from '@/components/listCorretora';
import { SearchBar } from '@/components/searchBar';

export const revalidate = 600;

/** Página inicial do site com a lista de corretoras. */
export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10, px: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'primary.main',
            fontFamily: 'monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          CVM — Corretoras
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}
        >
          Instituições
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(0, 8, 38, 0.6)' }}>
          Clique na corretora escolhida para acessar os detalhes.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <SearchBar />
      </Box>

      <Suspense
        fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: 'primary.main' }} />
          </Box>
        }
      >
        <CorretorasList />
      </Suspense>
    </Container>
  );
}
