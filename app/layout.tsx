import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CVM — Corretoras",
  description: "Consulta de instituições registradas na CVM",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} style={{ backgroundColor: "#0d1117" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
