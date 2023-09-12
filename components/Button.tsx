import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-sm rounded-lg bottom-32"
      >
       
        {currentTheme === "light" ? (
          <MoonIcon className="text-black dark:text-white h-8 w-8 transition-all hover:text-yellow-400 dark:hover:text-yellow-400" />
        ) : (
          <SunIcon className="text-black dark:text-white h-8 w-8 transition-all hover:text-yellow-400 dark:hover:text-yellow-400" />
        )}
      </button>
    </div>
  );
};

export default Button;
