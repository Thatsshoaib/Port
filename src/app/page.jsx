"use client";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-screen pt-40 bg-gradient-to-b from-black via-gray-900 to-black text-white  flex flex-col items-center  px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
            <span className="typewriter">
              Hi, I'm <span className="text-blue-400">Shoaib Raza</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 animate-fadeSlide">
            I'm a passionate Full-Stack Developer specializing in building
            modern web applications using the MERN stack.
          </p>
          <a href="/projects">
            <button className="relative cursor-pointer py-3 px-6 text-center font-barlow inline-flex justify-center text-sm sm:text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
              <span className="relative z-20">View My Work</span>

              <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
              <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
            </button>
          </a>
        </div>
      </section>

      <style>
        {`
    @keyframes fadeSlide {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeSlide {
      animation: fadeSlide 1s ease-out forwards;
    }

    .typewriter {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid #38bdf8; /* Tailwind's blue-400 */
      animation: typing 3s steps(30, end), blink 0.75s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  `}
      </style>
    </>
  );
}
