"use client";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white">
    About <span className="text-blue-400">Me</span>
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-4">
    I'm <span className="font-semibold text-white">Shoaib Raza</span>, a passionate and results-driven Full-Stack Developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Nextjs,  and Node.js). I specialize in building modern, scalable, and high-performance web applications.
  </p>

  <p className="text-gray-400 text-base leading-relaxed mb-4">
    I take pride in crafting elegant UI components, writing clean and efficient code, and developing robust backend APIs. My workflow emphasizes performance, reusability, and responsiveness — making sure every project I work on is fast, functional, and user-friendly.
  </p>

  <p className="text-gray-400 text-base leading-relaxed mb-4">
    I’m constantly learning and exploring new technologies to stay ahead in the tech world. From designing with Figma to testing APIs with Postman, I’m always looking for tools that enhance productivity and innovation.
  </p>

  <p className="text-gray-400 text-base leading-relaxed">
    When I'm not coding, you'll find me sketching UI ideas, collaborating on exciting projects, or diving into the latest tech trends. I believe in continuous growth, sharing knowledge, and using technology to make meaningful impact.
  </p>

  {/* Social Icons */}
  <div
    className="flex space-x-6 mt-8"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    {[
      {
        href: 'https://wa.me/91xxxxxxxxxx',
        Icon: FaWhatsapp,
        color: 'text-green-400',
        hover: 'hover:shadow-green-400',
      },
      {
        href: 'https://www.instagram.com/yourprofile',
        Icon: FaInstagram,
        color: 'text-pink-400',
        hover: 'hover:shadow-pink-400',
      },
      {
        href: 'https://www.linkedin.com/in/yourprofile',
        Icon: FaLinkedin,
        color: 'text-blue-400',
        hover: 'hover:shadow-blue-400',
      },
      {
        href: 'https://github.com/yourusername',
        Icon: FaGithub,
        color: 'text-gray-300',
        hover: 'hover:shadow-white',
      },
    ].map(({ href, Icon, color, hover }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl ${color} transition-transform hover:scale-125 duration-300 shadow-md ${hover} hover:shadow-lg rounded-full p-2 bg-white/5 backdrop-blur-md`}
      >
        <Icon />
      </a>
    ))}
  </div>
</div>

        {/* Modern Image Layout */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="transform translate-y-6">
            <Image
              src="/Assets/Images/aboutmeOne.jpg"
              alt="Laptop on desk"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto hover:scale-105 transition duration-500"
            />
          </div>
          <div className="z-20 transform -translate-y-6">
            <Image
              src="/Assets/Svg/About.svg"
              alt="Developer working"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover w-full h-auto hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
