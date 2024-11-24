import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Gradient from "@/components/gradient";

const IBMPlexSans = localFont({
  src: "../public/fonts/IBMPlexSans-Regular.ttf",
  variable: "--font-ibmplex-sans",
  weight: "100 900",
});
const InputSans = localFont({
  src: "../public/fonts/InputSans-Regular.ttf",
  variable: "--font-input-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joy Odhiambo",
  description: "HR Generalist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>

      <body
        className={`${IBMPlexSans.variable} ${InputSans.variable} bg-[url(/images/background.png)] bg-[#16171b] antialiased bg-[0px_0px] bg-[size:200px_200px] min-h-[100%] m-0 text-white leading-[1.5] pb-[200px] xl:pb-[100px]`}
      >
        <Navbar />
        <main className="font-[family-name:var(--font-ibmplex-sans)] tracking-[2px] leading-loose mt-[4.5rem] px-[2.5rem] xd:px-[10px] h-full min-h-[100vh] font-normal">
          <Gradient />
          {children}
        </main>
      </body>
    </html>
  );
}
