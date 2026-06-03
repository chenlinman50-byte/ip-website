import type { Metadata } from "next";
import { ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";

const zcool = ZCOOL_KuaiLe({
  subsets: [],
  weight: "400",
  display: "swap",
  variable: "--font-cute",
  preload: true,
});

export const metadata: Metadata = {
  title: "叽啾的小世界 | 治愈系小鸟 IP",
  description: "软萌小鸟叽啾，带你发现生活中的小确幸和温暖日常。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={zcool.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
