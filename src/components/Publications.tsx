import { motion } from "framer-motion";

const publications = [
  {
    title: "A Web-Based Application for Keratoconus Detection",
    journal: "Tuijin Jishu / Journal of Propulsion Technology",
    date: "Dec 7, 2023",
    description1:
      "Developed a web-based diagnostic system leveraging Convolutional Neural Networks (CNNs) for early detection of keratoconus, achieving up to 93.65% diagnostic accuracy in experimental evaluations.",
    description2:
      "Integrated medical image preprocessing, TensorFlow/Keras model training, and a full-stack web interface to assist clinicians in identifying the disorder during its preclinical phase.",
    link: "https://propulsiontechjournal.com/index.php/journal/article/view/2443", // 🔥 Replace with real journal URL
  },
  {
    title:
      "AI-Driven Contextual Summarization and Sentiment Analysis for Automated Project Documentation in Agile Meetings",
    journal: "Tuijin Jishu / Journal of Propulsion Technology",
    date: "Apr 8, 2025",
    description1:
      "Designed an end-to-end NLP pipeline that transcribes meeting audio using Whisper (~78.3% transcription accuracy), generates abstractive summaries using T5, and applies sentiment analysis.",
    description2:
      "Demonstrated how AI-driven automation can generate structured meeting minutes and SRS-ready documentation to enhance efficiency in Agile development workflows.",
    link: "https://propulsiontechjournal.com/index.php/journal/article/view/9270", // 🔥 Replace with real journal URL
  },
];

export default function Publications() {
  return (
    <motion.section
      id="publications"
      className="section border-t border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-16 text-white">
        Publications
      </h2>

      <div className="space-y-10">
        {publications.map((pub, index) => (
          <a
            key={index}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-900 border border-slate-800 p-10 rounded-xl hover:-translate-y-2 hover:border-blue-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {pub.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {pub.journal} · {pub.date}
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              {pub.description1}
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {pub.description2}
            </p>

            <p className="text-xs text-gray-500 mt-6">
              Click to view full publication →
            </p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
