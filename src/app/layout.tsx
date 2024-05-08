import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "./globals1.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appscrip",
  description: "Generated by Appscrip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
