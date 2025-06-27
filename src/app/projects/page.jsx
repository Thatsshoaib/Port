'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MediSales App",
    description: "A complete Medical Sales CRM platform where MRs can log in, manage stores, record sales, and view their performance dashboard.",
    tech: ["React", "Node.js", "MySQL", "Tailwind"],
    link: "/Assets/Images/aboutmeOne.jpg",
    image: "/projects/medisales.png",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio is built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact details with a modern UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "/Assets/Images/aboutmeOne.jpg",
    image: "/projects/portfolio.png",
  },
  {
    title: "Network Marketing App",
    description: "A scalable MLM app with a tree structure, commission logic, sponsor system, and a clean dashboard for users and admins.",
    tech: ["React", "Node.js", "MySQL", "JWT", "XML Tree"],
    link: "#",
    image: "/Assets/Images/aboutmeOne.jpg",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 min-h-[60px]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Decorative Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
