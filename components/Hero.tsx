"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Linkedin } from "lucide-react";
import { GithubIcon } from "@/public/icons/Github";
import { X } from "@/public/icons/X";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm text-gray-400 mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-light leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Building thoughtful digital experiences
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="space-y-4">
            <h3 className="text-xl font-light">Full-Stack Development</h3>
            <p className="text-gray-400 leading-relaxed w-5/6">
              Specialized in React, Node.js, and cloud architecture. Building
              scalable solutions that make an impact.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-light">Lorem, ipsum dolor.</h3>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              tempore totam cum veritatis laudantium accusantium.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <div className="space-y-4">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center text-sm border border-zinc-700 hover:text-zinc-100 hover:bg-zinc-900 dark:border-zinc-50 dark:hover:bg-white px-8 py-4 mr-2  dark:hover:text-black transition-colors duration-300 ">
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#digital-garden"
              className="group inline-flex items-center justify-center text-sm px-8 py-4 bg-white/5 bg-zinc-200 hover:bg-zinc-400 hover:bg-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-300">
              Explore my digital space
            </Link>
          </div>

          <div className="flex justify-start md:justify-start space-x-6 space-y-4 items-end">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors m-0">
              <GithubIcon />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-zinc-100 transition-colors">
              <X />
              <span className="sr-only">Twitter</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-100 transition-colors">
              <Linkedin
                className="w-6 h-6"
                stroke="currentColor"
                viewBox="0 0 28 28"
              />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
