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
//   { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out w-28 h-28"
              data-aos="fade-up"
              // data-aos-delay={index * 100}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
