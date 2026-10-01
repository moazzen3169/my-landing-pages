import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOIRÉ — Contemporary Menswear",
  description: "Minimal luxury and contemporary men's fashion e-commerce experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} antialiased selection:bg-[#111111] selection:text-[#F3F2EE]`}>
      <body className="min-h-screen bg-[#F3F2EE] text-[#111111] font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
