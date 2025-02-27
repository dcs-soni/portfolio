import { Compose } from "@/public/icons/Compose";
import { GitHubIcon } from "@/public/icons/Github";
import { LinkedInIcon } from "@/public/icons/LinkedIn";
import { XIcon } from "@/public/icons/X";
import { Mail, Check, Copy, Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3 } },
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("divyanshusoni52@gmail.com");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full p-2 max-w-lg bg-zinc-50 dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden"
            variants={modalVariants}>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors z-10">
              <X size={20} />
            </button>

            <div className="p-4">
              <h2 className="text-2xl font-medium mb-6">Let's Connect</h2>
            </div>

            {/* Email Section */}
            <div className="mb-6 px-4">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-semibold text-zinc-500 dark:text-zinc-100 block">
                  Email
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <span className="truncate text-sm dark:text-zinc-400">
                    divyanshusoni52@gmail.com
                  </span>
                </div>
                <div className="flex ml-2 gap-2">
                  <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <motion.button
                      onClick={handleCopyEmail}
                      className="flex items-center rounded-md  relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      {copySuccess ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-xs ml-1 dark:text-zinc-200">
                        Copy
                      </span>
                      {copySuccess && (
                        <motion.span
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-zinc-900 dark:bg-zinc-700 text-white px-2 py-1 rounded"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}>
                          Copied!
                        </motion.span>
                      )}
                    </motion.button>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <motion.a
                      href="mailto:divyanshusoni52@gmail.com"
                      className="flex items-center rounded-md "
                      title="Compose"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <Compose />
                      <span className="text-xs ml-1 dark:text-zinc-200">
                        Compose
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* OR Divider */}
            <div className="flex items-center justify-center px-4 mb-6">
              <div className="w-1/6 border-t border-zinc-300 dark:border-zinc-800"></div>
              <span className="px-3 text-xs text-zinc-500 dark:text-zinc-400">
                OR
              </span>
              <div className="w-1/6 border-t border-zinc-300 dark:border-zinc-800"></div>
            </div>

            {/* Calendar Section  */}
            <div className="mb-6 px-4">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-semibold text-zinc-500 dark:text-zinc-100 block">
                  Book a meeting
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Calendar className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <span className="truncate text-sm dark:text-zinc-400">
                    Schedule a time to chat
                  </span>
                </div>
                <div className="flex ml-2">
                  <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <motion.a
                      href="https://calendly.com/divyanshusoni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md "
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs ml-1 dark:text-zinc-200">
                        Book Call
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center px-4 ">
              <div className="flex-grow border-t border-zinc-300 dark:border-zinc-800"></div>

              <div className="flex-grow border-t border-zinc-300 dark:border-zinc-800"></div>
            </div>

            {/* Social Links */}
            <div className="px-4 pt-4 pb-6   ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold dark:text-zinc-100">
                  Connect on social media
                </h3>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com/in/divyanshusoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}>
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="https://github.com/divyanshusoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}>
                  <GitHubIcon />
                </motion.a>
                <motion.a
                  href="https://twitter.com/divyanshusoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}>
                  <XIcon />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
