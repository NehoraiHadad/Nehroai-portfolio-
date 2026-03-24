import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Solution Architect Portfolio",
  description: "High-fidelity AI Solution Architect portfolio featuring agentic showcase, neural infrastructure monitoring, and strategic dossier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
