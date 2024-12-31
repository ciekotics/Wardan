import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CUSTOM IMPORTs
import { Navbar, Footer } from "@/components/layout";
// import AppWrapper from "@/components/app-wrapper";

import "@/scss/main.scss";

import '../embla.css';
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wardan - Best Spice Manufacturing Company",
  description: "The leading manufacturer of high-quality spices, our main products are Haldi Powder 15g (EAN-8939123850198), Haldi Powder 50g (EAN-8939123850266), Lal Mirch Powder 7g (EAN-8939123851324), Lal Mirch Powder 50g (EAN-893912350402), Jeera Powder 5g (EAN-8939123850570), Jeera Powder 50g (EAN-8939123850648), Dhaniya Powder 10g (EAN-8939123850716), Dhaniya Powder 50g (EAN-8939123850884), Garam Masala 5g (EAN-8939123850952), Garam Masala 50g (EAN-8939123851010)",
  keywords:
    "EAN-8939123851010, EAN-8939123850952, EAN-8939123850884, EAN-8939123850716, EAN-8939123850648, EAN-8939123850570, EAN-893912350402, EAN-8939123851324, EAN-8939123850266, EAN-8939123850198,  spices, spice manufacturing, organic spices, best spices, world best spices, world top manufacturing, world top manufacturing company, spice manufacturing company, manufacturing company, Wardan",
  authors: [{ name: "Wardan Team", url: "https://www.wardanspices.com" }],
  robots: "index, follow",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wardan",
  url: "https://www.wardanspices.com",
  logo: "https://www.wardanspices.com/logo.png",
  // sameAs: [
  //   "https://www.facebook.com/yourprofile",
  //   "https://twitter.com/yourprofile",
  //   "https://www.instagram.com/yourprofile",
  // ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "15, PTR SIDING COAL DEPO, SHIBPUR, HOWRAH MUNICIPAL CORPORATION",
    addressLocality: "Howrah",
    addressRegion: "West Bengal",
    postalCode: "711102",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-983-122-0855",
    contactType: "Customer Service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Wardan - Best Spice Manufacturing Company"
        />
        <meta property="og:description" content="Explore our premium spices." />
        <meta property="og:image" content="/images/logo_1.png" />
        <meta property="og:url" content="https://www.wardanspices.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wardan - Best Spice Manufacturing Company"
        />
        <meta
          name="twitter:description"
          content="Discover premium spices at Wardan."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
