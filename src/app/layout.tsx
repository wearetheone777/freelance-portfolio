import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "全栈开发者 · 创意工程师 | 接单名片",
  description:
    "专注于 Web 开发、移动端应用与 AI 解决方案，将创意转化为高品质数字产品",
  keywords: ["全栈开发", "接单", "Web开发", "小程序", "AI解决方案"],
  openGraph: {
    title: "全栈开发者 · 创意工程师",
    description: "专注于 Web 开发、移动端应用与 AI 解决方案",
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
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f172a]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
