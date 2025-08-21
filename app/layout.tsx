import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dulces Criollos",
  description: "Sitio oficial de Dulces Criollos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
