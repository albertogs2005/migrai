import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Importa tu archivo global de estilos personalizado
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Importa el componente de pie de página si lo tienes

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MigrAI - Migrate to AI",
  description: "Facilitamos la transición de empresas hacia la inteligencia artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/assets/images/page/Recurso 3.svg" />
        <link rel="preload" as="image" href="/assets/images/page/Recurso 4.svg" />
        {/* Añade otros metadatos o enlaces aquí si es necesario */}
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Incluye el componente de pie de página */}
      </body>
    </html>
  );
}

