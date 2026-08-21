import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bootstrap Studio Landing Page recreated",
  description: "Bootstrap Studio Landing Page is recreated in nextjs and tailwind CSS",
  metadataBase: new URL("https://bootstrap-studio-landing-page.jashanpreet.me"),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: "Bootstrap Studio Landing Page recreated",
    description: "Bootstrap Studio Landing Page is recreated in nextjs and tailwind CSS",
    url: "https://bootstrap-studio-landing-page.jashanpreet.me",
    siteName: "Bootstrap Studio Landing Page recreated",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
