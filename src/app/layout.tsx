import type { Metadata } from "next";
import { Kalam, Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const QuicksandFont = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const kalamFont = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
})

const dancingScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Boda Damian y Sofia",
  description: "Boda damian y sofia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
