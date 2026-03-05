import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";


export const metadata: Metadata = {
  title: "Portafolio | LuisPv",
  description: "Luis Fernando - Desarrollador Fullstack con más de 2 años de experiencia creando aplicaciones web modernas con React.js y Node.js",
  authors: [{name: "Luis Fernando"}],
  keywords: ["Desarrollador", "Frontend", "Fullstack", "React", "Portafolio"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-linear-to-b from-[#020918] to-[#01030E] antialiased">
        <Header />

        <main className="max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
