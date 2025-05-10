"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import {
  Menu,
  X,
  Command,
  Moon,
  Sun,
  Home,
  UserRound,
  BriefcaseBusiness,
  SquareChevronRight,
  Mail,
  LayoutGridIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import ContactModal from "./ContactModal";
import { CommandMenu } from "./Command";
import { RESUME_DATA } from "@/data/RESUME_DATA";

interface LinksProps {
  name: string;
  href?: string;
  onClick?: () => void;
  logo?: React.ReactElement;
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
    {
      name: "Home",
      href: "#home",
      logo: <Home className="h-3 w-3 md:h-4 md:w-4 inline-flex " />,
    },
    {
      name: "About",
      href: "#about",
      logo: <UserRound className="h-3 w-3 md:h-4 md:w-4 inline-flex" />,
    },
    {
      name: "Experience",
      href: "#experience",
      logo: <BriefcaseBusiness className="h-3 w-3 md:h-4 md:w-4 inline-flex" />,
    },
    {
      name: "Projects",
      href: "#projects",
      logo: (
        <SquareChevronRight className="h-3 w-3 md:h-4 md:w-4 inline-flex" />
      ),
    },
    {
      name: "Space",
      href: `${RESUME_DATA.constants.space}`,
      logo: <LayoutGridIcon className="h-3 w-3 md:h-4 md:w-4 inline-flex" />,
    },
    {
      name: "Contact",
      logo: <Mail className="h-3 w-3 md:h-4 md:w-4 inline-flex" />,
      onClick: () => setIsModalOpen(true),
    },
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
          className={`container mx-auto flex items-center py-1.5 justify-between max-w-s md:max-w-3xl md:border rounded-lg px-2 md:px-8 shadow-slate-800 dark:md:border-zinc-900 shadow-md`}>
          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center gap-8 font-semibold"
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
                  className="text-xs flex items-center justify-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  {link.logo}
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-xs flex items-center justify-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white ">
                  {link.logo}
                  {link.name}
                </button>
              )
            )}
          </nav>

          <motion.div
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:flex items-center gap-2 ml-auto">
            {mounted && (
              <motion.div
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 ease-in-out">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Moon className="w-5 h-5" aria-hidden="true" />
                  )}
                </motion.button>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 ease-in-out relative items-center justify-center"
              aria-label="Open command menu">
              <motion.div
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex items-center justify-center ${
                  isScrolled ? "flex-row gap-1" : "flex-col"
                }`}>
                <motion.div layout>
                  <Command
                    className={`${isScrolled ? "w-5 h-5" : "w-4 h-4"}`}
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.kbd
                  layout
                  className={` leading-none tracking-tight ${
                    isScrolled ? "text-[0.8rem]" : "text-[0.6rem]"
                  }`}>
                  Ctrl K
                </motion.kbd>
              </motion.div>

              <CommandMenu />
            </motion.button>
          </motion.div>

          {/* Mobile navigation */}
          <nav
            className="flex md:hidden items-center gap-4 font-semibold px-2"
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
                    className="text-xs flex items-center justify-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.logo}
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-sm flex items-baseline text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {link.logo}
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
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
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
