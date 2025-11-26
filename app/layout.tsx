import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "International Spice Trade Assistant",
  description: "Professional guide for connecting with foreign spice buyers via WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
