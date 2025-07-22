import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-background">
          <Header />
          <main className="flex h-full w-full">{children}</main>
          <footer className="flex flex-row gap-4 items-center justify-center w-full py-4 text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} LAB307 Technologies Inc.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
