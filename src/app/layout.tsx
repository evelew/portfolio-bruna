import type { Metadata } from "next";
import { Red_Hat_Display, Open_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";


import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import ExternalLinks from '@/app/components/external-links'

import "@/app/styles/globals.scss";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Bruna Freitas",
  description: "Product designer with +6 years of experience. Working on end to end design process, from discovery to delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.ANALYTICS_ID as string} />

      <body className={`${redHatDisplay.variable} ${openSans.variable}`}>
        <Header />
        <main>
          {children}
          <ExternalLinks />
        </main>
        <Footer />

      </body>
    </html>
  );
}
