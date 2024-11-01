import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
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
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-backgroundColor text-fontColor [transition:background-color_0.3s_ease]">
      <body
        className={`${satoshi.className} font-medium`}
      >
        <Navbar />
        <div className='grid_background'></div>
        {children}
      </body>
    </html>
  );
}
