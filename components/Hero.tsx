"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { RESUME_DATA } from "@/data/RESUME_DATA";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      role="region"
      className="min-h-screen flex items-start justify-center py-24 px-6 md:py-8 md:mt-14 lg:py-14 lg:mt-10 sm:mt-18">
      {/* Top multicolor line */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        aria-hidden="true"
      />
      <div className="max-w-5xl">
        <motion.h1
          className="text-2xl md:text-4xl text-zinc-900 font-semibold dark:text-zinc-100 mb-2 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}>
          {RESUME_DATA.name}
        </motion.h1>

        <motion.p
          role="doc-subtitle"
          className="text-xs md:text-sm text-zinc-700 dark:text-zinc-400 mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}>
          {RESUME_DATA.title}
        </motion.p>

        <motion.h2
          className="text-zinc-900 dark:text-zinc-300 text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}>
          {RESUME_DATA.heroHeading}
        </motion.h2>

        <motion.div
          role="region"
          aria-label="Introduction details"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}>
          <div className="space-y-4">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-400">
              {RESUME_DATA.subHeadingOne}
            </h3>
            <p className="text-sm md:text-md text-zinc-700 dark:text-gray-400 leading-relaxed">
              {RESUME_DATA.subTextOne}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-400">
              {RESUME_DATA.subHeadingTwo}
            </h3>
            <p className="text-sm md:text-md text-zinc-700 dark:text-gray-400 leading-relaxed">
              {RESUME_DATA.subTextTwo}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}>
          <div className="flex flex-wrap gap-4 justify-start items-center">
            <Link
              onClick={() => setIsModalOpen(true)}
              href=""
              aria-label="Get in touch"
              role="button"
              className="group inline-flex items-center justify-center text-sm border border-zinc-700 hover:text-zinc-100 hover:bg-zinc-900 dark:border-zinc-50 dark:hover:bg-white px-4 py-2 mr-1 md:px-8 md:py-4 md:mr-2  dark:hover:text-black transition-colors duration-300 ">
              Get in touch
              <ArrowRight
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={RESUME_DATA.constants.space}
              aria-label="Explore my Space"
              role="button"
              className="group inline-flex items-center justify-center text-sm px-4 py-2 mr-1 md:px-8 md:py-4 md:mt-0 bg-white/5 bg-zinc-200 hover:bg-zinc-400 hover:bg-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-300 m-0">
              Explore my Space
            </Link>
          </div>

          <div
            className="flex gap-2 items-center"
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
                  className="text-zinc-800 border-zinc-400 dark:text-gray-400 dark:hover:text-white transition-colors mr-2 border dark:border-white/20 px-2 py-2 rounded-lg">
                  {social?.icon}
                  <span className="sr-only">{social?.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute hidden md:block md:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        aria-hidden="true">
        <Link
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          scroll={false}
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-10 h-10 rounded-full">
          <ArrowDown className="w-5 h-5" />
        </Link>
      </motion.div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
