'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider as JotaiProvider } from 'jotai';
import { ReactNode } from 'react';

import { theme } from '@/styles/theme';

/** Envolve a aplicação com os provedores do Jotai e do MUI.*/
export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </JotaiProvider>
    </AppRouterCacheProvider>
  );
}
