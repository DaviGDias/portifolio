import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight: ["100",'200','300','400','500','600','700','800'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Davi Dias - Portifólio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en " className="scroll-smooth">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        
      </body>
    </html>
  );
}
