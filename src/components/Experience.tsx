import { motion } from "framer-motion";

const timeline = [
  {
    year: "Jul 2024 – Present",
    title: "Associate Software Engineer",
    subtitle: "XONT Software Pvt Ltd",
    points: [
      "Develop enterprise ERP modules using .NET Core, Angular, and MS SQL Server.",
      "Optimize stored procedures and indexing for performance improvements.",
      "Build REST APIs and support distributed system workflows.",
      "Collaborate in Agile/Scrum teams for production-ready releases."
    ],
  },
  {
    year: "Dec 2023 – Jun 2024",
    title: "Software Engineer Intern",
    subtitle: "XONT Software Pvt Ltd",
    points: [
      "Contributed to full-stack ERP development.",
      "Implemented pagination and indexing for large datasets.",
      "Supported deployments and UAT validation."
    ],
  },
  {
    year: "2021 – 2025",
    title: "BSc (Hons) in Information Technology",
    subtitle: "Specializing in Software Engineering – SLIIT",
    points: [
      "Focused on distributed systems, AI/ML, and enterprise architecture."
    ],
  },
  {
    year: "2006 – 2020",
    title: "Advanced Level – Mathematics Stream",
    subtitle: "All Saints College, Galle",
    points: [
      "Physical Science Stream (Combined Mathematics – C, Physics – S, Chemistry – C)."
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section border-t border-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-20 text-white text-center">
        Professional Journey
      </h2>

      <div className="relative">
        
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700"></div>

        <div className="space-y-20">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content Box */}
              <div
                className={`w-full md:w-5/12 bg-slate-900 border border-slate-800 p-8 rounded-xl ${
                  index % 2 === 0 ? "mr-auto text-left" : "ml-auto text-left"
                }`}
              >
                <p className="text-sm text-blue-500 mb-1">
                  {item.year}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {item.subtitle}
                </p>

                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-950"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
