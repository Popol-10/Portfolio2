
import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaPhp,  FaBootstrap, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNestjs, SiPostman, SiSwagger, SiTypescript } from "react-icons/si";
import "../styles/Skills.scss";

const skillsData = [
  { name: "HTML", level: 95, icon: <FaHtml5 /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt /> },
  { name: "Sass", level: 90, icon: <FaSass /> },
  { name: "Bootstrap", level: 85, icon: <FaBootstrap/> },
  { name: "JavaScript", level: 90, icon: <SiJavascript /> },
  { name: "ReactJS", level: 90, icon: <FaReact /> },
  { name: "TypeScript", level: 85, icon: <SiTypescript /> },
  { name: "NodeJS", level: 85, icon: <FaNodeJs /> },
  { name: "NestJS", level: 90, icon: <SiNestjs /> },
  { name: "PHP", level: 80, icon: <FaPhp /> },
  { name: "API Swagger", level: 85, icon: <SiSwagger /> },
  { name: "Postman", level: 75, icon: <SiPostman /> },
  { name: "Git/Github", level: 75, icon: <FaGithub /> },
];

const Skills: React.FC = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("animate");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-timeline">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            ref={(el) => (refs.current[index] = el!)}
          >
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              >
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;






