import React from "react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Divyanshu Soni | Software Engineer",
  description: "Building impactful digital experiences with code",
  openGraph: {
    title: "Divyanshu Soni | Software Engineer",
    description: "Building impactful digital experiences with code",
    url: "https://divyanshusoni.com",
    siteName: "Divyanshu Soni",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-zinc-50 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-950`}>
        <main className="mx-auto"> {children}</main>
      </body>
    </html>
  );
}
