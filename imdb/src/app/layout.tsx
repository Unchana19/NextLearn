import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/search-box";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB",
  description: "This is movie database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
