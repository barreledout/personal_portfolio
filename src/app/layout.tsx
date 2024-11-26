import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import BgGridDesign from "./components/BgGridDesign";
import { Providers } from "./Providers";
import { PageWrapper } from "./components/FramerMotion/PageWrapper";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
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
    <html
      lang="en"
      className={`${satoshi.className} `}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`bg-custom-backgroundColor text-custom-fontColor `}>
        <Providers>
          <Navbar />
          {/* <BgGridDesign /> */}
          <PageWrapper>
            <main className="">{children}</main>
          </PageWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
