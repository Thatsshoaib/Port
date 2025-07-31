"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/utils/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            My Development <span className="text-blue-400">Showcase</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            📂 Selected Works — From Idea to Deployment
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, reverse }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (project.images.length > 1) {
      intervalRef.current = setInterval(nextImage, 3000);
      return () => clearInterval(intervalRef.current);
    }
  }, [project.images.length]);

  // Reset timer when user interacts with carousel
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextImage, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-6 md:gap-8 lg:gap-12 items-center`}
    >
      {/* Image Carousel */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={currentImageIndex === 0}
          />
        </div>

        {project.images.length > 1 && (
          <>
            <button
              onClick={() => {
                prevImage();
                resetInterval();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                nextImage();
                resetInterval();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="flex justify-center mt-3 md:mt-4 space-x-1 md:space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToImage(index);
                    resetInterval();
                  }}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-white w-4 md:w-5"
                      : "bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm bg-gray-700 text-gray-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 md:pt-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
