import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobeWit",
  description: "The game to test your global wit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eb_garamond.className} dark`}>{children}</body>
    </html>
  );
}
