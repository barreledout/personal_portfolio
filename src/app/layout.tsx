import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import BgGridDesign from "./components/BgGridDesign";
import { Providers } from "./Providers";
import { PageWrapper } from "./components/FramerMotion/PageWrapper";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2", // Update this line
  variable: "--font-satoshi",
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
      <body className={`bg-custom-backgroundColor text-custom-fontColor [transition:background-color_0.4s_ease-in-out]`}>
        <Providers>
          <Navbar />
          <BgGridDesign />
          <PageWrapper>
            <main className="max-w-[750px]">{children}</main>
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
