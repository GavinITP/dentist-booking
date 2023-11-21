import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MyChakraProvider from "../providers/MyChakraProvider";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/providers/NextAuthProvider";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentBook",
  description: "Book Your Smile Session",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <MyChakraProvider>
            <Navbar />
            {children}
          </MyChakraProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
