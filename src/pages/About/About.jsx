import HeroImg from "@/assets/images/shankar.jpg";
import Footer from "@/components/Footer";
import Skills from "@/pages/Skills/Skills";
import React from "react";
import Experience from "@/pages/Experience/Experience";
import Projects from "@/pages/Projects/Projects";
import Education from "@/pages/Education/Education";
import Contact from "@/pages/Contact/Contact";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image Section */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b from-zinc-300 to-transparent aspect-76/59 relative rounded-2xl p-px">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-xl block transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ring-1 ring-zinc-100/20"
                  alt="Shankar Reddy profile"
                  width={1000}
                  height={929}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="relative space-y-4">
              <p className="text-white">
                👨‍💻 <strong>Agentic AI Intern</strong> | 📊 <strong>Data Analyst</strong> | 🎓 <strong>B.Tech 3rd Year at SVCET</strong>
              </p>
              <p className="text-white">
                Hi, I’m <strong>Shankar Reddy</strong>, a computer science student specializing in <strong>AI & ML</strong>. I am driven by the potential of intelligent systems to solve complex, real-world problems.
              </p>
              <p className="text-white">
                My core expertise lies in <strong>Machine Learning</strong> and <strong>Natural Language Processing (NLP)</strong>. I enjoy building applications that leverage <strong>Generative AI</strong> and <strong>Deep Learning</strong> to turn massive datasets into actionable intelligence.
              </p>
              <p className="text-white">
                ✍️ Beyond the code, I am passionate about <strong>Public Health Tech</strong> (like my Aarogya-AI project) and finding ways to use technology for social good. 
                I am also a Full-Stack enthusiast, comfortable building web apps.
              </p>
              <p className="text-white">
                Currently, I am expanding my horizons as an <strong>Agentic AI Intern</strong> at Innomatics Research Labs, focusing on Python and cloud-based AI solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white italic">
                    "Turning raw data into actionable insights and ideas into intelligent reality."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Component Sections */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </section>
    </>
  );
}