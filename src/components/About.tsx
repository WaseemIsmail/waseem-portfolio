import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative section border-t border-slate-800 flex flex-col items-center text-center overflow-hidden"
    >
      {/* ================= GLOW BACKGROUND ================= */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 blur-3xl animate-pulse"></div>

      <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-emerald-400/20 animate-spin-slow"></div>

      {/* ================= EXPERIENCE TITLE ================= */}
      <motion.h2
        className="relative z-10 text-5xl md:text-7xl font-extrabold text-white leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        2+ Years of Experience
      </motion.h2>

      {/* ================= ABOUT CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-4xl mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-blue-400 mb-6">
          About Me
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          I am an Associate Software Engineer with experience in enterprise
          application development, full-stack engineering, and AI-powered
          systems. I currently work on Ventura ERP, where I design, develop,
          and optimize scalable modules using .NET, Angular, and MS SQL Server
          across inventory, finance, and sales domains.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-6">
          My interests focus on backend architecture, database optimization,
          RESTful API development, cloud-ready systems, and AI/ML integration.
          I have also worked on NLP pipelines, LLM-based tools, and computer
          vision solutions, combining software engineering with intelligent
          automation to build practical, business-focused applications.
        </p>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/60 transition">
            <h4 className="text-xl font-semibold text-white mb-2">
              Enterprise Systems
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              ERP modules, RESTful APIs, SQL optimization, and scalable backend
              features supporting real-world business operations.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/60 transition">
            <h4 className="text-xl font-semibold text-white mb-2">
              AI & LLM Solutions
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              NLP pipelines, document assistants, sentiment analysis, computer
              vision, and LLM-powered workflows for intelligent automation.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/60 transition">
            <h4 className="text-xl font-semibold text-white mb-2">
              Clean Engineering
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clean code, secure API design, database indexing, Agile delivery,
              code reviews, and maintainable software architecture.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}