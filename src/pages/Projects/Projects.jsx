import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import project4Img from "@/assets/images/delinquency.jpg"; // Check your file name!
import project1Img from "@/assets/images/chatbot.jpg";     // Check your file name!
import project2Img from "@/assets/images/Debtiq.jpeg";
import project3Img from "@/assets/images/Rag.jpeg";
const projects = [
   {
    title: "Gen AI Health Assistant",
    description: "This project implements a Generative AI-powered medical diagnosis assistant tailored for rural healthcare centers and primary health clinics in India. It empowers healthcare workers and doctors to diagnose common diseases by analyzing patient symptoms, medical history, and vital signs, supporting multilingual interaction and offline usage in low-connectivity environments.",
    img: project1Img,
    color: "rgb(85, 98, 214)",
    github: "https://github.com/Shankar2027/genai-health-assistant",
    live: "https://shankar0747-aarogya-ai-v2.hf.space/",
  },
  {
    title: "DebtIQ",
    description: "DebtIQ is an automated technical debt remediation platform built to turn invisible codebase issues into clear, actionable dashboards. It connects directly to public GitHub repositories, processes the entire file tree concurrently via async pipelines, and uses a customized Groq-powered LLM engine to produce structured code health audits. The system generates an objective 0–100 health score mapped across severity levels (HEALTHY to CRITICAL) while serving security findings and detailed refactoring recommendations, persisting all data to PostgreSQL for historical trend tracking.",
    img: project2Img,
    color: "rgb(208, 127, 15)",
    github: "https://github.com/Shankar2027/Debtiq",
    live: "https://shankar0747-debtiq-ai.hf.space/",
  },
  {
    title: "RAG_Forge",
    description: "RAG Forge: Enterprise Knowledge Engine A full-stack Retrieval-Augmented Generation (RAG) platform designed to eliminate AI hallucinations. Built with a two-stage Hybrid Retrieval Pipeline (BM25 + Dense Vectors) and MS-MARCO Cross-Encoder re-ranking, the system ensures LLM answers are strictly grounded in private documents. Features include a React/Vite frontend, a FastAPI backend, ChromaDB vector storage, and a custom telemetry dashboard for real-time observability.",
    img: project3Img,
    color: "rgb(34, 173, 39)",
    github: "https://github.com/Shankar2027/RAG-Forge-Enterprise-Retrieval-AI-with-intelligent-Re-Ranking",
    live: "https://shankar0747-rag-forge.hf.space",
  },
  {
    title: " Deliquency Prediction",
    description: "Financial institutions face significant losses due to loan defaults. This project focuses on building a robust Data Analytics & Machine Learning Pipeline to predict customer delinquency (failure to pay). The goal was to transform raw, inconsistent financial data into actionable insights and high-quality features for predictive modeling.",
    img: project4Img,
    color: "rgb(217, 45, 163)",
    github: "https://github.com/Shankar2027/Deliquency-Prediction",
    live: "",
  },
 
  

];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Reusable floating icon component
const FloatingIcon = ({ icon, className, delay }) => (
  <motion.div
    className={`absolute text-4xl opacity-20 animate-pulse pointer-events-none ${className} glowing-text`}
    variants={floatingVariants}
    animate="animate"
    style={{ animationDelay: `${delay}s` }}
  >
    {icon}
  </motion.div>
);

export default function ProjectShowcase() {
  const gridRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      gridRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <section
      ref={gridRef}
      className="relative min-h-screen bg-black py-20 px-6 overflow-hidden"
    >
      {/* Floating glowing icons */}
      <FloatingIcon icon="💡" className="top-10 left-10" delay={0} />
      <FloatingIcon icon="⚙️" className="bottom-20 right-10" delay={0.5} />
      <FloatingIcon icon="💻" className="top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon="🔧" className="bottom-32 left-1/4" delay={1.5} />
      <FloatingIcon icon="🧠" className="top-1/4 right-12" delay={2} />
      <FloatingIcon icon="🎯" className="top-5 right-1/3" delay={2.5} />
      <FloatingIcon icon="📊" className="bottom-10 left-10" delay={3} />

      {/* Custom glowing effect */}
      <style>
        {`
          .glowing-text {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 
                         0 0 16px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
        >
          🚀 My Stunning Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 border-2"
              style={{
                borderColor: project.color,
                boxShadow: `0 0 20px ${project.color}55`,
              }}
            >
              <div className="relative group overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm group-hover:bg-opacity-60 transition duration-300"
                  style={{ borderTop: `6px solid ${project.color}` }}
                ></div>
              </div>

              <div className="p-6 text-white flex flex-col gap-3">
                <h2 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-between text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: project.color }}
                  >
                    View Code →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: project.color }}
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
