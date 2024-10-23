import "./globals.css";
import Footer from "@/components/footer";
import NavbarLayout from "./navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <NavbarLayout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
