import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section border-t border-slate-800 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">
        Let's Connect
      </h2>

      <p className="text-gray-400 mb-8">
        Open to Software Engineering and AI-focused opportunities.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:mowaseen231@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/waseem-9693b5215/"
          target="_blank"
          className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/WaseemIsmail"
          target="_blank"
          className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}
