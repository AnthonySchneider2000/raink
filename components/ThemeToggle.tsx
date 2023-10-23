"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  BsMoonFill as DarkMode,
  BsSunFill as LightMode,
} from "react-icons/bs";

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
      <div onClick={toggleDarkMode} className="absolute top-0 right-0 m-4 hover:scale-110 transition">
        {isDarkMode ? <LightMode size="2rem" /> : <DarkMode size="2rem" />}
      </div>
  );
}
