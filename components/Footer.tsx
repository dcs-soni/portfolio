"use client";

import { motion } from "motion/react";
import { Dot, Mail } from "lucide-react";
import { RESUME_DATA } from "@/data/RESUME_DATA";
import VisitorCount from "./VisitorCount";

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6"
      role="contentinfo"
      aria-label="Contact information and social links">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-18 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}>
          <div role="region" aria-label="Contact message">
            <h2 className="text-md md:text-3xl font-normal mb-4 text-zinc-900 dark:text-zinc-200">
              Lets create something amazing together
            </h2>
            <div className="text-sm md:text-xl text-zinc-700 dark:text-zinc-400 mb-6">
              Im always open to new projects and collaborations.
              <p className="inline md:block"> Feel free to reach out!</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center text-sm border border-black/20 dark:border-white/20 px-4 py-2 md:px-10 md:py-4 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Send email">
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              Say Hello
            </a>

            <div
              className="flex space-x-2 md:space-x-4"
              role="navigation"
              aria-label="Social media links">
              {RESUME_DATA.contact.social.map(({ name }: { name: string }) => {
                const social = RESUME_DATA.contact.social.find(
                  (item) => item.name === name
                );

                if (!social?.url) return null;

                return (
                  <motion.a
                    key={name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${name} profile`}
                    className="text-zinc-800 border-zinc-400 dark:text-gray-400 dark:hover:text-white transition-colors border dark:border-white/20 px-2 py-2 rounded-lg">
                    {social?.icon}
                    <span className="sr-only">{social?.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div
          className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center"
          role="contentinfo">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-zinc-900 dark:text-gray-400 text-sm">
              Crafted with passion and code.
            </p>
            <span className="hidden md:inline dark:text-gray-400">
              <Dot></Dot>
            </span>
            <VisitorCount />
          </div>
          <motion.a
            href="#home"
            aria-label="Back to top"
            className="text-zinc-700 dark:text-gray-400 transition-colors duration-200 hover:text-transparent dark:hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 text-sm"
            whileHover={{ scale: 1.05 }}>
            Made by DS
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
