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
          I am an Associate Software Engineer specializing in enterprise
          application development and AI-powered systems. Currently working on
          Ventura ERP, I design and optimize scalable modules using .NET,
          Angular, and MS SQL Server to support real-world business operations
          across inventory, finance, and sales domains.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-6">
          My passion lies in backend architecture, database optimization,
          distributed systems, and integrating AI/ML solutions such as NLP
          pipelines and computer vision models into production-ready platforms.
          I focus on writing clean, maintainable code that delivers measurable
          business impact.
        </p>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-2">
              Enterprise Systems
            </h4>
            <p className="text-gray-400 text-sm">
              ERP modules, distributed architecture, performance optimization,
              and scalable backend services.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-2">
              AI & Machine Learning
            </h4>
            <p className="text-gray-400 text-sm">
              NLP pipelines, sentiment analysis, computer vision, and LLM
              integration for intelligent automation.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-2">
              Clean Architecture
            </h4>
            <p className="text-gray-400 text-sm">
              REST APIs, microservices, database indexing, and production-ready
              deployments in Agile environments.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
