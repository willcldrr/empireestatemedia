import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empire Estate Media | Real Estate Marketing NYC",
  description: "Premium marketing infrastructure for New York's most ambitious real estate professionals. Strategic marketing systems that build empires.",
  keywords: ["real estate marketing", "NYC", "digital marketing", "real estate agency", "lead generation", "New York real estate"],
  metadataBase: new URL("https://empireestatemedia.vercel.app"),
  openGraph: {
    title: "Empire Estate Media",
    description: "Premium marketing infrastructure for New York's most ambitious real estate professionals.",
    url: "https://empireestatemedia.vercel.app",
    siteName: "Empire Estate Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Empire Estate Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empire Estate Media",
    description: "Premium marketing infrastructure for New York's most ambitious real estate professionals.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/eemlogo.png",
    apple: "/eemlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
