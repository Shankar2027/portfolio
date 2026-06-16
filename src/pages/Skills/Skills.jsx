import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";

// Importing all necessary icons from react-icons
import { 
  FaBrain, 
  FaHeadphones, 
  FaWrench, 
  FaHandsHelping, 
  FaPlane, 
  FaPenNib, 
  FaCameraRetro,
  FaJava,      
  FaPython,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaAws,
  FaFileExcel,
  FaHtml5,       // Added for HTML
  FaCss3Alt,     // Added for CSS
  FaJs,          // Added for JavaScript
  FaChartLine,   // Added for Matplotlib
  FaChartArea,   // Added for Seaborn
  FaCubes,       // Added for OOPs
  FaNetworkWired,// Added for Networks
  FaDatabase,    // Added for DBMS
  FaFire,        // Added for Motivation
  FaUsers,       // Added for Teamwork
  FaSync,        // Added for Adaptability
  FaClock,       // Added for Time Management
  FaFlag,        // Added for Leadership
  FaBullseye,    
  FaLightbulb,   
  FaSearch,      
  FaLaptopCode,  
  FaGamepad,     
  FaPuzzlePiece,
  FaProjectDiagram // Added for DSA
} from "react-icons/fa";

import { MdLiveTv, MdSportsTennis, MdAnimation } from "react-icons/md";
import { GiChessKnight, GiArtificialIntelligence } from "react-icons/gi";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiMysql,
  SiPandas,         
  SiNumpy,          
  SiJupyter,        
  SiScikitlearn,    
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
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
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#00758F]" /> },
        { name: "HTML", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> }, // Fixed
        { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> }, // Fixed
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> }, // Fixed
      ],
    },
    {
      icon: TbBrandVscode,
      title: "Developer Tools",
      color: "text-green-400",
      skills: [
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "MicrosoftExcel", icon: <FaFileExcel className="w-4 h-4 text-[#217346]" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Techstacks / Frameworks",
      color: "text-purple-400",
      skills: [
        { name: "Artificial Intelligence", icon: <FaBrain className="w-4 h-4 text-purple-500" /> },
        { name: "Generative AI", icon: <GiArtificialIntelligence className="w-4 h-4 text-pink-500" /> }, 
        { name: "Machine Learning", icon: <SiScikitlearn className="w-4 h-4 text-orange-500" /> },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#150458]" /> },
        { name: "Numpy", icon: <SiNumpy className="w-4 h-4 text-[#013243]" /> },
        { name: "Matplotlib", icon: <FaChartLine className="w-4 h-4 text-[#11557c]" /> }, // Fixed
        { name: "Seaborn", icon: <FaChartArea className="w-4 h-4 text-[#11557c]" /> },   // Fixed
      ],
    },
    {
      icon: Cpu,
      title: "Core Subjects",
      color: "text-yellow-400",
      skills: [
        { name: "DSA", icon: <FaProjectDiagram className="w-4 h-4 text-[#7C4DFF]" /> }, // Fixed
        { name: "OOPs", icon: <FaCubes className="w-4 h-4 text-blue-400" /> }, // Fixed
        { name: "DBMS", icon: <FaDatabase className="w-4 h-4 text-green-400" /> }, // Fixed
        { name: "Computer Networks", icon: <FaNetworkWired className="w-4 h-4 text-orange-400" /> }, // Fixed
        { name: "Operating Systems", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Interpersonal Skills",
      color: "text-pink-400",
      skills: [
        { name: "Self Motivation", icon: <FaFire className="w-4 h-4 text-orange-500" /> }, // Fixed
        { name: "Teamwork", icon: <FaUsers className="w-4 h-4 text-blue-400" /> }, // Fixed
        { name: "Problem Solving", icon: <FaLightbulb className="w-4 h-4 text-yellow-400" /> }, // Fixed
        { name: "Adaptability", icon: <FaSync className="w-4 h-4 text-green-400" /> }, // Fixed
        { name: "Time Management", icon: <FaClock className="w-4 h-4 text-purple-400" /> }, // Fixed
        { name: "Critical Thinking", icon: <FaBrain className="w-4 h-4 text-pink-500" /> }, // Fixed
        { name: "Leadership", icon: <FaFlag className="w-4 h-4 text-red-500" /> }, // Fixed
      ],
    },
    {
      icon: MdAnimation,
      title: "Hobbies & Interests",
      color: "text-indigo-400",
      skills: [
        { name: "Focus & Patience", icon: <FaBullseye className="w-4 h-4 text-cyan-400" /> },
        { name: "Problem Solving", icon: <FaPuzzlePiece className="w-4 h-4 text-yellow-400" /> },
        { name: "Listening to Music", icon: <FaHeadphones className="w-4 h-4 text-pink-300" /> },
        { name: "Exploring New Tech", icon: <FaSearch className="w-4 h-4 text-blue-300" /> },
        { name: "Logic Puzzles", icon: <FaPuzzlePiece className="w-4 h-4 text-amber-400" /> },
        { name: "Hackathons", icon: <FaLaptopCode className="w-4 h-4 text-orange-400" /> },
        { name: "Helping Others", icon: <FaHandsHelping className="w-4 h-4 text-indigo-300" /> },
        { name: "Carrom", icon: <FaGamepad className="w-4 h-4 text-gray-300" /> },
        { name: "Badminton", icon: <MdSportsTennis className="w-4 h-4 text-lime-400" /> },
        { name: "Traveling", icon: <FaPlane className="w-4 h-4 text-teal-400" /> },
        

      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
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
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;