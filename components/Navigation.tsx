"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X, Command, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ContactModal from "./ContactModal";
import { CommandMenu } from "./Command";
import { RESUME_DATA } from "@/data/RESUME_DATA";

interface LinksProps {
  name: string;
  href?: string;
  onClick?: () => void;
}

export default function Navigation() {
  // Menu Toggle
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Return a non-interactive version for initial render

  const links: LinksProps[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    {
      name: "Space",
      href: `${RESUME_DATA.constants.space}`,
    },
    { name: "Contact", onClick: () => setIsModalOpen(true) },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 p-28 px-6 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 backdrop-blur-lg bg-zinc-50/80 dark:bg-zinc-950/80"
            : "py-5 bg-transparent"
        }`}
        role="banner">
        <div
          className={`container mx-auto flex items-center justify-between max-w-s md:max-w-2xl md:border rounded-lg px-2 md:px-8  shadow-slate-800 dark:md:border-zinc-900 shadow-md ${
            isScrolled ? "md:pr-14" : ""
          }`}>
          {/* <Link
            href="#"
            className="hidden md:hidden text-lg font-medium"
            aria-label="Go to home">
            <motion.span className="font-bold text-zinc-600 dark:text-zinc-400 transition-colors duration-200 hover:bg-clip-text hover:text-transparent dark:hover:text-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500">
              DS
            </motion.span>
          </Link> */}

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 font-semibold"
            role="navigation"
            aria-label="Main navigation">
            {links.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                  {link.name}
                </button>
              )
            )}
          </nav>

          <div className="md:flex items-center gap-4">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:flex px-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all justify-center items-center duration-100 ease-in-out relative`}
              aria-label="Open command menu">
              <Command
                className={`transition-all duration-100 ease-in-out ${
                  isScrolled ? "w-5 h-5" : "w-4 h-4 -translate-y-1/3"
                }`}
                aria-hidden="true"
              />

              <kbd
                className={`text-xs whitespace-nowrap transition-all duration-100 ease-in-out absolute left-1/2 -translate-x-1/2 opacity-100 ${
                  isScrolled
                    ? "translate-y-15 translate-x-4"
                    : "translate-y-3 text-[9px] "
                }`}>
                Ctrl K
              </kbd>

              <CommandMenu />
            </motion.button>
          </div>

          <nav
            className="flex md:hidden items-center space-x-6 font-semibold px-10"
            role="navigation"
            aria-label="Mobile navigation">
            {links
              .filter((link) =>
                ["Home", "Projects", "Space"].includes(link.name)
              )
              .map((link) =>
                link.href ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.name}
                  </button>
                )
              )}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="block md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false, amount: 0.2 }}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu">
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full z-30 md:hidden bg-zinc-50 dark:bg-zinc-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // transition={{ duration: 0.2 }}
            transition={{ duration: links.length * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            role="dialog"
            aria-label="Mobile menu">
            <nav
              className="flex flex-col items-center justify-center h-full space-y-8"
              role="navigation"
              aria-label="Mobile navigation">
              {links.map((link) =>
                link.href ? (
                  link.href.startsWith("http") ? (
                    <Link
                      onClick={() => setIsOpen(false)}
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      onClick={() => setIsOpen(false)}
                      key={link.name}
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )
                ) : (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.name}
                  </button>
                )
              )}

              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: links.length * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  className="p-2 rounded-full">
                  {currentTheme === "dark" ? (
                    <Sun className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Moon className="w-5 h-5" aria-hidden="true" />
                  )}
                </motion.button>
                {/* <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full"
                  aria-label="Open command menu">
                  <Command className="w-5 h-5" aria-hidden="true" />
                </motion.button> */}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
