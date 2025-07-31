"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Deterministic bubble generation using fixed seed
  const bubbles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const seed = i * 1000; // Different seed for each bubble
      return {
        size: seededRandom(seed) * 10 + 5,
        top: seededRandom(seed + 1) * 100,
        left: seededRandom(seed + 2) * 100,
        duration: seededRandom(seed + 3) * 10 + 10,
        delay: seededRandom(seed + 4) * 5,
      };
    });
  }, []);

  return (
    <section
      className="min-h-screen pt-32 md:pt-40 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center px-6 text-center relative overflow-hidden"
      ref={ref}
    >
      {/* Floating Bubbles (hydration-safe) */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animation: `float ${bubble.duration}s linear infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
          variants={itemVariants}
        >
          <span className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm <span className="text-blue-400">Shoaib Raza</span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'm a results-driven Full-Stack Developer crafting fast, secure, and scalable web applications with the power of the MERN stack — blending elegant UI with robust backend logic.
        </motion.p>

        <motion.div variants={itemVariants} className="z-10 mt-4">
          <a href="/projects" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="relative cursor-pointer py-3 px-8 text-center font-semibold inline-flex justify-center items-center text-base uppercase text-white rounded-lg border border-blue-400 bg-blue-400/10 hover:bg-blue-400/20 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black overflow-hidden"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-20">View My Work</span>

              {/* Glow overlay */}
              <span className="absolute inset-0">
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </span>

              {/* Animated borders */}
              <span className="absolute w-1/2 h-[2px] bg-blue-400 top-0 left-0 group-hover:w-full transition-all duration-500"></span>
              <span className="absolute w-1/2 h-[2px] bg-blue-400 bottom-0 right-0 group-hover:w-full transition-all duration-500"></span>
              <span className="absolute w-[2px] h-1/2 bg-blue-400 top-0 right-0 group-hover:h-full transition-all duration-500"></span>
              <span className="absolute w-[2px] h-1/2 bg-blue-400 bottom-0 left-0 group-hover:h-full transition-all duration-500"></span>

              {/* Shine animation */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[200%] transition-all duration-700"></span>
              </span>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}