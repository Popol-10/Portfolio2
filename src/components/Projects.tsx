import React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../type";
import "../styles/Projects.scss";
import { motion, Variants } from "framer-motion";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:"Une application web qui contient tous mes travaux, parcours et informations (expériences, compétences...)",
    image: "/imagePort/portfolioCapture.png",
    link: "#",
    technologies: ["React", "TypeScript", "Sass"],
    features:[""],
    duration:"",
    role:"",
    apropoPoj:""
  },
  {
    id: 2,
    title: "Mi-Produits",
    description:"Une plateforme dédiée à la valorisation et à la vente de produits locaux à Madagascar.",
    image: "/imagePort/Mi-Produits.png",
    link: "#",
    technologies: ["ReactJs", "NestJS", "NodeJs","Swagger", "Sass","Typescript","Mysql"],
    features:[""],
    duration:"",
    role:"",
    apropoPoj:""
  },
  {
    id: 3,
    title: "Page d'accueil Mi-Produits",
    description:"C'est la vitrine principale du site Mi-Produits.",
    image: "/imagePort/pageMi.png",
    link: "#",
    technologies: ["React", "Sass", "Framer Motion"],
    features:[""],
    duration:"",
    role:"",
    apropoPoj:""
  },
  {
    id: 4,
    title: "Maquette automobile",
    description:"Intégration web d'une maquette automobile en transformant un design statique en site interactif.",
    image: "/imagePort/automobile.png",
    link: "#",
    technologies: ["HTML", "CSS", "JavaScript"],
    features:[""],
    duration:"",
    role:"",
    apropoPoj:""
  },
];

// Variants pour motion
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 2,
    }
  })
};

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={cardVariants}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <a href={project.link}>Voir le projet</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
