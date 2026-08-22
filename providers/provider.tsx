"use client";

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider as JotaiProvider } from "jotai";
import { theme } from "@/styles/theme";

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
