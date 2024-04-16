import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUS Bill Digitize",
  description: "Digitize bills for AUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
