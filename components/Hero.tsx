"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/public/icons/Github";

import { XIcon } from "@/public/icons/X";
import { LinkedInIcon } from "@/public/icons/LinkedIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-start justify-center md:py-8 lg:py-8 ">
      <div className="max-w-5xl">
        <motion.h1
          className="text-2xl md:text-3xl text-zinc-100 mb-2 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Divyanshu Soni
        </motion.h1>

        <motion.p
          className="text-xs md:text-sm text-gray-400 mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          className="text-zinc-300 text-3xl md:text-5xl lg:text-7xl font-light leading-tight mb-8"
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
            <p className="text-gray-400 leading-relaxed">
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
          <div className="flex flex-wrap gap-4 justify-start items-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center text-sm border border-zinc-700 hover:text-zinc-100 hover:bg-zinc-900 dark:border-zinc-50 dark:hover:bg-white px-8 py-4 mr-2  dark:hover:text-black transition-colors duration-300 ">
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#digital-garden"
              className="group inline-flex items-center justify-center text-sm px-8 py-4 mt-0 bg-white/5 bg-zinc-200 hover:bg-zinc-400 hover:bg-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-300 m-0">
              Explore my digital space
            </Link>
          </div>

          <div className="flex gap-2 items-center ">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors mr-2 border border-white/20 px-2 py-2 rounded-lg">
              <GitHubIcon />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-zinc-100 transition-colors mr-2  border border-white/20 px-2 py-2 rounded-lg">
              <XIcon />
              <span className="sr-only">Twitter</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-100 transition-colors mr-2  border border-white/20 px-2 py-2 rounded-lg">
              <LinkedInIcon />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
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
        }}>
        <Link
          href="#about"
          scroll={false}
          className="flex items-center justify-center w-10 h-10 rounded-full">
          <ArrowDown className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
