import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelalem Getnet | Software Engineer",
  description:
    "Software Engineer focused on backend development and distributed systems. Building scalable REST APIs, real-time applications, and reliable web services.",
  keywords: [
    "Zelalem Getnet",
    "Software Engineer",
    "Backend",
    "Distributed Systems",
    "Python",
    "Node.js",
    "FastAPI",
    "Django",
  ],
  authors: [{ name: "Zelalem Getnet" }],
  openGraph: {
    title: "Zelalem Getnet | Software Engineer",
    description:
      "Backend & Distributed Systems Engineer building scalable APIs and real-time applications.",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
