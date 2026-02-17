import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "Kotlin"],
  },
  {
    title: "Frameworks & Tools",
    skills: [".NET Core", "ASP.NET MVC", "Angular", "React", "Node.js", "Express", "Flask", "xUnit"],
  },
  {
    title: "Enterprise Architecture",
    skills: ["ERP Development", "Distributed Systems", "Microservices", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MS SQL Server", "MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["CI/CD Pipelines", "Docker", "AWS"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Hugging Face", "NLP", "Large Language Models", "Model Integration"],
  },
  {
    title: "Other",
    skills: ["OOP", "Design Patterns", "Agile/Scrum", "Cross-functional Collaboration"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section border-t border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-16 text-white">
        Technical Skills
      </h2>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900 border border-slate-800 p-10 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border hover:border-blue-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
