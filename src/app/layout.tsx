import "./globals.css";
import type { Metadata } from "next";
import Menu from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "Coffee Diary",
  description: "Coffee Diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Menu />

        <div className="bg-transparent">{children}</div>
      </body>
    </html>
  );
}
