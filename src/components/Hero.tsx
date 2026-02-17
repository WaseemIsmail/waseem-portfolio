import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BIG BACKGROUND WATERMARK */}
      <h1
        className="
        absolute text-[22vw] font-extrabold uppercase tracking-tight
        bg-gradient-to-r from-blue-600/10 to-cyan-400/10
        bg-clip-text text-transparent
        blur-sm
        select-none pointer-events-none
      "
      >
        WASEEM
      </h1>

      {/* FRONT CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* MAIN NAME */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          text-5xl md:text-6xl font-bold
          bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]
        "
        >
          Waseem Ismail
        </motion.h2>

        {/* ROLE */}
        <p
          className="
          mt-4 text-lg tracking-wide
          bg-gradient-to-r from-blue-400 to-cyan-300
          bg-clip-text text-transparent
        "
        >
          Associate Software Engineer · .NET & AI Engineer
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-6 leading-relaxed">
          Building scalable enterprise systems and intelligent AI-powered
          applications using .NET Core, Angular, React and Machine Learning technologies.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-6 justify-center">

          {/* PRIMARY BUTTON */}
          <a
            href="#projects"
            className="
            px-8 py-3 rounded-full
            bg-gradient-to-r from-blue-600 to-cyan-500
            text-white font-medium
            shadow-lg shadow-blue-500/40
            hover:shadow-blue-500/70
            hover:scale-105
            transition-all duration-300
          "
          >
            View Projects
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="/Waseem_Ismail_CV.pdf"
            className="
            px-8 py-3 rounded-full
            border border-blue-400
            text-blue-300
            hover:bg-blue-600/20
            hover:border-cyan-400
            hover:scale-105
            transition-all duration-300
          "
          >
            Download CV
          </a>

        </div>
      </div>
    </section>
  );
}
