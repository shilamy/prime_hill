import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar, } from "@/components";
import ServicesSection from "@/components/ServicesSection";




export const metadata: Metadata = {
  title: "LUC PRIME HILL",
  description: "Discover properties for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <ServicesSection/>
        <Footer/>
        
        </body>
    </html>
  );
}
