import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "María Victoria Ureña | Portafolio",
  description:
    "Perfil profesional, experiencia y portafolio de trabajos en Python.",
  icons: {
    icon: "/mvu-v3.png",
    shortcut: "/mvu-v3.png",
    apple: "/mvu-v3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
