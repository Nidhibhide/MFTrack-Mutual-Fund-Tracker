import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Dashboard from "@/Components/Dashboard/Dashboard";
import ReduxProvider from "@/Components/redux/ReduxProvider";

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
          <div className="w-screen h-screen flex ">
            <div>
              <Dashboard />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
