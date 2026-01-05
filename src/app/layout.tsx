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
  title: "Kenny Neutron",
  description: "Kenny Neutron - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        {/* Subtle Background Wash */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[0%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[0%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
