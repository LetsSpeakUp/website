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
        className="transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-sm rounded-lg bottom-32"
      >
        <SunIcon className="text-black dark:text-white h-10 w-10 transition-all">
          {" "}
        </SunIcon>
      </button>
    </div>
  );
};

export default Button;
