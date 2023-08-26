"use client";
import React from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/solid";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32"
      >
        Toggle Mode
      </button>

      <SunIcon className="text-black dark:text-white h-10 w-10"></SunIcon>
    </div>
  );
};

export default Button;
