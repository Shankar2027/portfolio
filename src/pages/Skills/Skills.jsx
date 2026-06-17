import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";

// Importing necessary icons from react-icons
import { 
  FaBrain, 
  FaHeadphones, 
  FaHandsHelping, 
  FaPlane, 
  FaJava,      
  FaPython,
  FaGitAlt,
  FaFileExcel,
  FaHtml5,       
  FaCss3Alt,     
  FaJs,          
  FaChartLine,   
  FaChartArea,   
  FaCubes,       
  FaNetworkWired,
  FaDatabase,    
  FaFire,        
  FaUsers,       
  FaSync,        
  FaClock,       
  FaFlag,        
  FaBullseye,    
  FaLightbulb,   
  FaSearch,      
  FaLaptopCode,  
  FaGamepad,     
  FaPuzzlePiece,
  FaProjectDiagram
} from "react-icons/fa";

import { MdSportsTennis, MdAnimation } from "react-icons/md";
import { GiArtificialIntelligence, GiMeshNetwork } from "react-icons/gi";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPandas,         
  SiNumpy,          
  SiJupyter,        
  SiScikitlearn,    
  SiFastapi,
  SiLangchain
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer pointer-events-none"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "SQL / MySQL", icon: <SiMysql className="w-4 h-4 text-[#00758F]" /> },
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> }, 
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> }, 
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> }, 
      ],
    },
    {
      icon: TbBrandVscode,
      title: "Developer Tools",
      color: "text-green-400",
      skills: [
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Excel Mastery", icon: <FaFileExcel className="w-4 h-4 text-[#217346]" /> },
        { name: "Jupyter Environments", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "AI Ecosystem & Architectures",
      color: "text-purple-400",
      skills: [
        { name: "Agentic AI / Workflows", icon: <GiMeshNetwork className="w-4 h-4 text-purple-400" /> },
        { name: "LangChain Framework", icon: <SiLangchain className="w-4 h-4 text-[#13C6B1]" /> },
        { name: "Generative AI Systems", icon: <GiArtificialIntelligence className="w-4 h-4 text-pink-500" /> }, 
        { name: "Machine Learning models", icon: <SiScikitlearn className="w-4 h-4 text-orange-500" /> },
        { name: "FastAPI Development", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "Pandas DataFrames", icon: <SiPandas className="w-4 h-4 text-[#150458]" /> },
        { name: "Numpy Matrices", icon: <SiNumpy className="w-4 h-4 text-[#013243]" /> },
        { name: "Matplotlib Plots", icon: <FaChartLine className="w-4 h-4 text-[#11557c]" /> }, 
        { name: "Seaborn Graphics", icon: <FaChartArea className="w-4 h-4 text-[#38808A]" /> },   
      ],
    },
    {
      icon: Cpu,
      title: "Core Computer Science",
      color: "text-yellow-400",
      skills: [
        { name: "Data Structures & Algos", icon: <FaProjectDiagram className="w-4 h-4 text-[#7C4DFF]" /> }, 
        { name: "Object-Oriented Programming", icon: <FaCubes className="w-4 h-4 text-blue-400" /> }, 
        { name: "Database Systems (DBMS)", icon: <FaDatabase className="w-4 h-4 text-green-400" /> }, 
        { name: "Computer Networks", icon: <FaNetworkWired className="w-4 h-4 text-orange-400" /> }, 
        { name: "Operating Systems", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Interpersonal Engineering",
      color: "text-pink-400",
      skills: [
        { name: "Self Motivation", icon: <FaFire className="w-4 h-4 text-orange-500" /> }, 
        { name: "Team Synergy", icon: <FaUsers className="w-4 h-4 text-blue-400" /> }, 
        { name: "Algorithmic Resolution", icon: <FaLightbulb className="w-4 h-4 text-yellow-400" /> }, 
        { name: "Dynamic Adaptability", icon: <FaSync className="w-4 h-4 text-green-400" /> }, 
        { name: "Sprint Management", icon: <FaClock className="w-4 h-4 text-purple-400" /> }, 
        { name: "Critical Analysis", icon: <FaBrain className="w-4 h-4 text-pink-500" /> }, 
        { name: "Technical Leadership", icon: <FaFlag className="w-4 h-4 text-red-500" /> }, 
      ],
    },
    {
      icon: MdAnimation,
      title: "Interests & Pursuits",
      color: "text-indigo-400",
      skills: [
        { name: "Focus & Execution", icon: <FaBullseye className="w-4 h-4 text-cyan-400" /> },
        { name: "Logic Puzzles & Strategy", icon: <FaPuzzlePiece className="w-4 h-4 text-yellow-400" /> },
        { name: "Acoustic Engagement", icon: <FaHeadphones className="w-4 h-4 text-pink-300" /> },
        { name: "Researching Horizons", icon: <FaSearch className="w-4 h-4 text-blue-300" /> },
        { name: "Hackathon Assembly", icon: <FaLaptopCode className="w-4 h-4 text-orange-400" /> },
        { name: "Altruistic Mentorship", icon: <FaHandsHelping className="w-4 h-4 text-indigo-300" /> },
        { name: "Strategic Badminton", icon: <MdSportsTennis className="w-4 h-4 text-lime-400" /> },
        { name: "Expeditions", icon: <FaPlane className="w-4 h-4 text-teal-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative overflow-hidden">
      {/* Structural Ambient Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      {/* Global Embedded Animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;