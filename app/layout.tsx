"use client"

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

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    console.log(document);
    setIsDarkMode(!isDarkMode);
  };
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div onClick={toggleDarkMode} className="absolute top-0 right-0 m-4">
        {isDarkMode ? <LightMode size="2rem" /> : <DarkMode size="2rem" />}
      </div>
        {children}
      </body>
    </html>
  );
}
