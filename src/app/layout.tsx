import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Separator} from "@/components/ui/separator";
import Navbar from "@/app/shared/ui/navbar";
import Footer from "@/app/shared/ui/footer";
import Logo from "@/app/main/ui/logo";
import Creator from "@/app/main/ui/creator";
import MobileMenu from "@/components/ui/mobile";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className=" flex flex-wrap w-full items-center justify-between">
      <Logo className="m-2 w-16"/>
      <Creator className="m-2"/>
    </div>
    <Separator className=""/>
    <div className="md:contents hidden"><Navbar className=""/></div>
    <div className="md:hidden contents"><MobileMenu/></div>

    {children}
    <Separator className=""/>
    <Footer className=""/>
    </body>
    </html>
  );
}
