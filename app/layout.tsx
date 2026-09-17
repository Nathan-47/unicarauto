import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar'
import Footer from "./components/footer";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unicar",
  description: "A place where all can find their next car for a good price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.className} min-h-full flex flex-col`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
