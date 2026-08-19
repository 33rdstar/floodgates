import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Floodgates Symphony Company Ltd",
    template: "%s | Floodgates Symphony Company Ltd",
  },
  description:
    "Floodgates Symphony Company Ltd is a Zambian business solutions provider offering mining and trading, agriculture consultancy, construction, and general dealing services.",
  openGraph: {
    title: "Floodgates Symphony Company Ltd",
    description:
      "Your trusted partner in effective delivery of goods and services, mining, and agricultural solutions.",
    siteName: "Floodgates Symphony Company Ltd",
    locale: "en_ZM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
