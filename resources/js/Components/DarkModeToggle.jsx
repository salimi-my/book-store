import { Moon, Sun } from "lucide-react";

import useColorMode from "@/Hooks/useColorMode";

export default function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        type="button"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1.5 w-9 h-9"
      >
        {colorMode === "light" && <Moon />}
        {colorMode === "dark" && <Sun />}
      </button>
    </>
  );
}
