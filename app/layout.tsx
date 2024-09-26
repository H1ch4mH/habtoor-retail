import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lora as FontSerif } from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif-1",
  weight: "variable",
});
export const metadata: Metadata = {
  title: "Al Habtoor Retail",
  description: "Al Habtoor Retail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSerif.variable} ${geistSans.variable} ${geistMono.variable} relative antialiased font-serif-1`}
      >
        {children}
      </body>
    </html>
  );
}
