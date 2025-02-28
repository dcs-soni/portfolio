"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { RESUME_DATA } from "@/data/RESUME_DATA";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <div>
            <h2 className="text-2xl font-light mb-4">
              Lets create something amazing together
            </h2>
            <p className="text-gray-400 mb-6">
              Im always open to new projects and collaborations. Feel free to
              reach out!
            </p>
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center text-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
            </a>
          </div>
          <div className="flex justify-start md:justify-end space-x-4">
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
                  className="text-gray-400 hover:text-white transition-colors mr-2 border border-white/20 px-2 py-2 rounded-lg">
                  {social?.icon()}
                  <span className="sr-only">{social?.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Crafted with passion and code.
          </p>
          <motion.a
            href="#home"
            target=""
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            whileHover={{ scale: 1.05 }}>
            Made by DS
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
