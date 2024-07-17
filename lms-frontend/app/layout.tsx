import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillTech India",
  description: "Welcome to Skill Tech India",
  openGraph: {
    images: [
      {
        url: 'https://skilltechindia.net/api/og?title=SkillTech',
        width: 1200,
        height: 630,
        alt: "Hello"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillTech India",
    description: "Welcome to Skill Tech India",
    images: ['https://skilltechindia.net/api/og?title=SkillTech',]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="bottom-center" />
          {children}
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>

  );
}
