'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiNextdotjs,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text  bg-gradient-to-r from-cyan-400 to-blue-500">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            I've honed a diverse set of skills to build modern, responsive, and performant web applications.
            From frontend design to backend logic, I bring a comprehensive toolkit to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 ease-in-out border border-gray-700 hover:border-cyan-400/30"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="text-4xl mb-3 hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div 
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            data-aos="fade-up"
          >
            <span className="font-medium">And always learning more...</span>
          </div>
        </div>
      </div>
    </section>
  );
}