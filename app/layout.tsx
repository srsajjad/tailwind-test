"use client";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Semibold.woff",
      weight: "600",
    },
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/WEB/fonts/ClashDisplay-Extralight.woff",
      weight: "800",
    },
  ],
  variable: "--font-clash-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
