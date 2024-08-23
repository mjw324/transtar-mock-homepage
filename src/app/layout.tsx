import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transtar | TS Partners",
  description: "A mock homepage for Transtar, built on React/Next.js and Bootstrap 5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
