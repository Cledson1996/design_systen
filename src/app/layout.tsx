import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/config/theme";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Sistema de design baseado em Ant Design com cores e componentes personalizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <AntdRegistry>
        <body className={inter.variable}>
          <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
        </body>
      </AntdRegistry>
    </html>
  );
}
