import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework",
      "RESTful APIs",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["C#", "Python", "Java", "JavaScript", "TypeScript", "Kotlin"],
  },
  {
    title: "Databases",
    skills: [
      "MS SQL Server",
      "Stored Procedures",
      "Query Optimization",
      "Indexing",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Workflows",
      "Azure DevOps",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "AI / LLM",
    skills: [
      "Python",
      "OpenAI API",
      "Claude API",
      "Gemini",
      "MCP Server",
      "Prompt Engineering",
      "LLM Agent Workflows",
      "Hugging Face",
      "NLP",
      "TensorFlow",
    ],
  },
  {
    title: "Security & Testing",
    skills: [
      "Secure Coding",
      "Authentication Patterns",
      "Input Validation",
      "OWASP Awareness",
      "xUnit",
      "Unit Testing",
      "UAT Support",
      "Test Data Management",
    ],
  },
  {
    title: "Software Engineering Practices",
    skills: [
      "OOP",
      "Design Patterns",
      "Clean Code",
      "Code Review",
      "Agile/Scrum",
      "Technical Documentation",
      "Cross-functional Collaboration",
    ],
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

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/60 transition"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-gray-300 px-4 py-2 rounded-lg text-sm border border-transparent hover:border-blue-500 hover:text-white transition"
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