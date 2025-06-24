"use client";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 z-30 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight"
        >
          Productify
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Products
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <FaRegSun className="h-5 w-5 text-neutral-100" />
            ) : (
              <FaRegMoon className="h-5 w-5 text-neutral-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
