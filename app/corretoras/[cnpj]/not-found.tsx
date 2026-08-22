'use client';
import { Container, Typography, Button } from '@mui/material';
import NextLink from 'next/link';

/** Mensagem de erro caso não seja encontrada uma corretora com o CNPJ informado. */
export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        px: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}
      >
        Instituição não encontrada
      </Typography>
      <Typography sx={{ color: 'text.primary', mb: 4 }}>
        O CNPJ informado não corresponde a nenhuma corretora.
      </Typography>
      <Button
        component={NextLink}
        href="/"
        variant="outlined"
        sx={{
          color: 'primary.main',
          borderColor: 'text.primary',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          '&:hover': {
            borderColor: 'primary.main',
          },
        }}
      >
        ← Voltar
      </Button>
    </Container>
  );
}
