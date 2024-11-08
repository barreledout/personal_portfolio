import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import BgGridDesign from "./components/BgGridDesign";
import { Providers } from "./Providers";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2", // Update this line
  variable: "--font-satoshi",
});
const satoshiItalic = localFont({
  src: "./fonts/Satoshi-VariableItalic.woff2", // Update this line
  variable: "--font-satoshi-italic",
});

export const metadata: Metadata = {
  title: "Saan.dev",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${satoshi.className}`} suppressHydrationWarning>
      <body className="text-custom-fontColor ">
        <Providers>
          <Navbar />
          <BgGridDesign />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
