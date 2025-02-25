"use client";
import Hero from "@/components/Hero";
import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ transform: `scaleX(${scrollYProgress})` }}
      />
      <motion.div
        className="min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>
    </>
  );
}
