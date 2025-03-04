"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X, Command, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ContactModal from "./ContactModal";

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
      href: "https://divyanshusoni.notion.site/Space-1a74657276b48095baa1e9e22802b363",
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
        }`}>
        <div className="container mx-auto flex items-center justify-between md:max-w-7xl">
          <Link href="#" className="text-lg font-medium ">
            <motion.span className="font-bold text-zinc-600 dark:text-zinc-400 transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500  dark:hover:text-transparent dark:hover:bg-clip-text darl:hover:bg-gradient-to-br dark:hover:from-blue-500 dark:hover:to-purple-500">
              DS
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-semibold">
            {links.map((link) =>
              link.href ? (
                link.href.startsWith("http") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.name}
                  </Link>
                ) : (
                  <Link
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
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              <Command className="w-5 h-5" />
              <span className="sr-only">Open command palette</span>
            </motion.button>
          </div>

          {/* Mobile menu buttton */}
          <motion.button
            className="block md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false, amount: 0.2 }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="sr-only">Toggle menu</span>
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-10 z-30 md:hidden bg-zinc-50 dark:bg-zinc-950"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}>
                  <Link
                    href={link.href ?? "#"}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-light">
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                  className="p-2 rounded-full">
                  {currentTheme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full">
                  <Command className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
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
