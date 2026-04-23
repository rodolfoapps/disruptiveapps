import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Disruptive Apps — Custom Software & Chrome Extensions",
    template: "%s | Disruptive Apps",
  },
  description:
    "We build custom software solutions, Chrome extensions, and developer tools that solve real problems. Clean code, fast delivery.",
  metadataBase: new URL("https://disruptiveapps.dev"),
  openGraph: {
    title: "Disruptive Apps — Custom Software & Chrome Extensions",
    description:
      "We build custom software solutions, Chrome extensions, and developer tools that solve real problems.",
    url: "https://disruptiveapps.dev",
    siteName: "Disruptive Apps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
