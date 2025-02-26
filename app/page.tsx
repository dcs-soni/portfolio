"use client";
import Hero from "@/components/Hero";
import { motion, useScroll } from "motion/react";
import About from "@/components/About";
import { useRef } from "react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const sectionsRef = useRef(null);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ transform: `scaleX(${scrollYProgress})` }}
      />
      <motion.div
        className="min-h-screen w-full py-28 px-10 md:py-20 md:px-10 lg:py-22"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Hero />
        <div className="max-w-5xl mx-auto" ref={sectionsRef}>
          <About />
          <Experience />
          <Projects />
        </div>
      </motion.div>
    </>
  );
}
