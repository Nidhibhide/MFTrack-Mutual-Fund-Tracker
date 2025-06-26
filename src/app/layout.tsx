import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ReduxProvider from "@/Components/redux/ReduxProvider";
import AuthLayout from "@/Components/AuthLayout";

export const metadata: Metadata = {
  title: "MF Tracker",
  description: "Mutual Fund Tracker",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthLayout>{children}</AuthLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
