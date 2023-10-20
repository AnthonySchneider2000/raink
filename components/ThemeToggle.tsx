"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  MdBrightness3 as DarkMode,
  MdBrightnessHigh as LightMode,
} from "react-icons/md";

interface ThemeToggleProps {
  currentTheme?: string;
}

export default function ThemeToggle({ currentTheme }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === "dark");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
      <div onClick={toggleDarkMode} className="absolute top-0 right-0 m-4">
        {isDarkMode ? <LightMode size="2rem" /> : <DarkMode size="2rem" />}
      </div>
  );
}
