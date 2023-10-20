import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import {useState} from "react";
import { ThemeProvider, useThemeContext } from "@/lib/ThemeContext";
import {
  MdBrightness3 as DarkMode,
  MdBrightnessHigh as LightMode,
} from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode: string = "dark";
  return (
    <html lang="en" className={mode}>
      <body className={inter.className}>
      <ThemeToggle currentTheme={mode} />
        {children}
      </body>
    </html>
  );
}
