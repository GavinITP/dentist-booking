import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MyChakraProvider from "../providers/MyChakraProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentBook",
  description: "Book Your Smile Session",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyChakraProvider>
          <Navbar />
          {children}
        </MyChakraProvider>
      </body>
    </html>
  );
}
