import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Driven Meeting Summaries & Sentiment (NLP)",
    description:
      "Designed and implemented an end-to-end NLP pipeline that transcribes meeting audio using Whisper (~78.3% WER-adjusted accuracy), generates abstractive summaries using T5, and applies sentiment analysis via Transformers to produce structured meeting minutes and SRS-ready documentation.",
    tech: ["Python", "Flask", "Whisper", "T5", "Transformers", "MongoDB", "Firebase", "FFmpeg"],
    highlight: "78.3% WER-adjusted transcription accuracy",
    github: "https://github.com/KrishnaWanusha/project-management-tool-backend",
  },
  {
    title: "Keratoconus Disease Detection (Computer Vision / ML)",
    description:
      "Developed an early-stage medical image classification system using CNN architectures, achieving 93.65% diagnostic accuracy. Built a full-stack web interface for clinical usage and experimentation.",
    tech: ["TensorFlow", "Keras", "React", "Flask", "Node.js", "Python"],
    highlight: "93.65% diagnostic accuracy",
    github: "https://github.com/WaseemIsmail/Keratoconus-Detection",
  },
  {
    title: "Ventura ERP Modules",
    description:
      "Designed and enhanced enterprise ERP modules for inventory, finance, and sales. Optimized SQL queries and indexing to significantly improve performance in high-traffic screens.",
    tech: [".NET Framework", "ASP.NET MVC", "Angular", "MS SQL Server"],
    highlight: "Improved query efficiency & system stability",
  },
  {
    title: "Enterprise E-Commerce Platform",
    description:
      "Built a scalable .NET Core Web API integrated with a React-based admin dashboard. Implemented role-based access control, repository pattern, and RESTful endpoints.",
    tech: [".NET Core", "C#", "React", "MongoDB", "REST API"],
    highlight: "Clean architecture & modular backend design",
    github: "https://github.com/WaseemIsmail/E-commerce-WebApp-Backend",
  },
  {
    title: "Public Transport Ticketing System",
    description:
      "Unified web and mobile ticketing platform with authentication, trip selection, and digital receipt generation.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    highlight: "Cross-platform integration",
    github: "https://github.com/WaseemIsmail/QBus",
  },
  {
    title: "FarmBuddy (Agri Ops Connector)",
    description:
      "Mobile-first application connecting farmers and buyers with chat functionality and logistics coordination.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    highlight: "Marketplace-style agri-tech solution",
    github: "https://github.com/WaseemIsmail/FarmBuddy",
  },
  {
    title: "Online Salon Management System (MERN)",
    description:
      "Full-stack booking and staff management platform handling scheduling, payments, and client history.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlight: "Complete MERN stack implementation",
  },
  {
    title: "Online Medicine Availability Checker",
    description:
      "Real-time pharmacy stock lookup system with Firebase integration and mobile support.",
    tech: ["Java", "Kotlin", "Firebase"],
    highlight: "Real-time database synchronization",
    github: "https://github.com/nuwandi00/MEDTRACK",
  },
  {
    title: "Laundry Customer Management System",
    description:
      "Web-based management system for tracking orders, pricing, receipts, and customer records.",
    tech: ["Java", "Java Servlets", "MySQL", "HTML/CSS"],
    highlight: "Database-driven workflow system",
    github: "https://github.com/WaseemIsmail/ProjectOOP",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section border-t border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-white">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-900 border border-slate-800 p-8 rounded-xl hover:-translate-y-2 hover:border-blue-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-500 mb-4">
              {project.highlight}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Click to view source code →
            </p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
