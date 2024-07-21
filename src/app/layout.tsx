import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pre-signed-url-demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen bg-blue-50"}>
        <main className="p-4 mx-auto max-w-2xl">
        {children}
        </main>
      </body>
    </html>
  );
}
