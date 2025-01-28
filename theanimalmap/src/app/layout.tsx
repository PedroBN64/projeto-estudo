import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";



export const metadata: Metadata = {
  title: "TheAnimalMap",
  description: "Conheça mais sobre o mundo animal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
