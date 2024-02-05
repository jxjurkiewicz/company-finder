import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wyszukiwarka firm po NIP",
  description: "Wpisz NIP, a my wyświetlimy dla Ciebie szczegółowe dane firmy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  );
}
