import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import Rain from "@/components/Rain/Rain";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode: string = "dark";
  return (
    <html lang="en" className={mode}>
      <body className={inter.className}>
        <Rain />
        <Toaster />
        <Sidebar />
        <ThemeToggle currentTheme={mode} />
        {children}
      </body>
    </html>
  );
}
