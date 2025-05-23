import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LAB 307",
  description: "App Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          <Header />
          <main className="flex flex-col items-center justify-center h-full w-full p-4">
            {children}
          </main>
          <footer className="flex flex-row gap-4 items-center justify-center w-full p-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} LAB307 Technologies Inc.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
