"use client";

import React from "react";
import { useState } from "react";
import {
  MdBrightness3 as DarkMode,
  MdBrightnessHigh as LightMode,
} from "react-icons/md";
import { ThemeProvider, useThemeContext } from "@/lib/ThemeContext";

interface ThemeToggleProps {
  currentTheme?: string;
}

export default function ThemeToggle({ currentTheme }: ThemeToggleProps) {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    console.log(document);
    toggleDarkMode();
    let darkModeString: string;
  };

  return (
    <ThemeProvider>
      <div onClick={handleDarkMode} className="absolute top-0 right-0 m-4">
        {isDarkMode ? <LightMode size="2rem" /> : <DarkMode size="2rem" />}
      </div>
    </ThemeProvider>
  );
}
