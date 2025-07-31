"use client";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaCode, FaServer, FaPalette, FaRocket, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const skills = [
    { icon: <FaCode className="text-blue-400" />, title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
    { icon: <FaServer className="text-purple-400" />, title: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
    { icon: <FaPalette className="text-pink-400" />, title: "Design", items: ["Figma", "UI/UX", "Responsive Design"] },
    { icon: <FaRocket className="text-green-400" />, title: "Tools", items: ["Git", "Postman", "Vercel", "Netlify"] }
  ];

  const experiences = [
    {
      icon: <FaBriefcase className="text-blue-400" />,
      role: "Software Developer",
      company: "WebSenor",
      duration: "June 2025 - Present",
      description: "Developing and maintaining full-stack applications using MERN stack. Implementing responsive UIs and optimizing backend services for performance."
    },
    {
      icon: <FaBriefcase className="text-purple-400" />,
      role: "Intern Developer",
      company: "Brain Matrix",
      duration: "Jan 2025 - May 2025",
      description: "Contributed to frontend development projects, assisted in API integrations, and participated in code reviews and team collaborations."
    },
    {
      icon: <FaGraduationCap className="text-pink-400" />,
      role: "BCA Student",
      company: "Geetanjali Institute of Science and Commerce",
      duration: "2023 - 2026 ",
      description: "Specialized in web development and database systems. Completed coursework in data structures, algorithms, and software engineering principles."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            MERN Stack Specialist | Full-Stack Developer | Web Architect
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Professional Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Profile</h3>
              <p className="text-gray-300 mb-4">
                I'm <span className="font-semibold text-white">Shoaib Raza</span>, a dedicated MERN stack developer currently working at <span className="text-blue-400">WebSenor</span> with previous experience at <span className="text-purple-400">Brain Matrix</span>. I hold a BCA degree with specialization in web technologies.
              </p>
              <p className="text-gray-400">
                My approach combines <span className="text-pink-400">technical expertise</span> with <span className="text-green-400">creative problem-solving</span> to build performant, scalable web applications that deliver exceptional user experiences. I'm passionate about writing clean, maintainable code and implementing modern web architectures.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Experience & Education</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <div className="text-xl mt-1">{exp.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role} • {exp.company}</h4>
                      <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Connect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills Grid */}
            <div className=" p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-xl">{skill.icon}</div>
                      <h4 className="font-bold text-white">{skill.title}</h4>
                    </div>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className=" p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    href: 'https://wa.me/91xxxxxxxxxx',
                    Icon: FaWhatsapp,
                    color: 'text-green-400',
                    hover: 'hover:bg-green-400/10',
                    label: 'WhatsApp'
                  },
                  {
                    href: 'https://www.instagram.com/yourprofile',
                    Icon: FaInstagram,
                    color: 'text-pink-400',
                    hover: 'hover:bg-pink-400/10',
                    label: 'Instagram'
                  },
                  {
                    href: 'https://www.linkedin.com/in/yourprofile',
                    Icon: FaLinkedin,
                    color: 'text-blue-400',
                    hover: 'hover:bg-blue-400/10',
                    label: 'LinkedIn'
                  },
                  {
                    href: 'https://github.com/yourusername',
                    Icon: FaGithub,
                    color: 'text-gray-300',
                    hover: 'hover:bg-white/10',
                    label: 'GitHub'
                  },
                ].map(({ href, Icon, color, hover, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`flex flex-col items-center ${color} transition-all duration-300`}
                    aria-label={label}
                  >
                    <div className={`text-2xl p-3 rounded-full ${hover} border border-gray-700/50 mb-1`}>
                      <Icon />
                    </div>
                    <span className="text-xs text-gray-400">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-purple-400/10 blur-3xl -z-10"></div>
      </div>
    </section>
  );
}