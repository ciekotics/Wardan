import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CUSTOM IMPORTs
import { Navbar, Footer } from "@/components/shared";

import "@/scss/main.scss"
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wardan",
  description: "Best Spice Manufacturing Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
