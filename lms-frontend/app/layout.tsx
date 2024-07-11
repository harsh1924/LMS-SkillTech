import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillTech India",
  description: "Welcome to Skill Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:image" content="https://images.pexels.com/photos/23476915/pexels-photo-23476915/free-photo-of-black-and-white-photograph-of-a-church-with-arched-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/23476915/pexels-photo-23476915/free-photo-of-black-and-white-photograph-of-a-church-with-arched-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>

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
