'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

/** Componente de botão de voltar */
export function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="outlined" size="small">
      ← Voltar
    </Button>
  );
}