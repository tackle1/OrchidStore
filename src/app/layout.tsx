import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"], // Khuyến nghị thêm weight
});

export const metadata: Metadata = {
  title: "LanCare Hub - Orchid Care Marketplace",
  description: "Professional platform for orchid care services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans antialiased", geist.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
