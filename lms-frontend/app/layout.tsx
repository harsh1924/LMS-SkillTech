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
    images: 'https://images.pexels.com/photos/18939401/pexels-photo-18939401/free-photo-of-cars-and-motorbikes-on-street-at-sunset-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  },
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
