import { Container, Box, CircularProgress, Typography } from '@mui/material';

/** Página de carregamento*/
export default function Loading() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 16,
        px: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CircularProgress sx={{ color: 'primary.main' }} />
        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          Carregando...
        </Typography>
      </Box>
    </Container>
  );
}
