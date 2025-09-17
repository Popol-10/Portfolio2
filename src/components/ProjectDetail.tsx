import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../type";
import "../styles/ProjectDetail.scss";
import Footer from "./Footer";

interface ProjectDetailProps extends Project {
  allProjects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  image,
  features,
  duration,
  role,
  technologies,
  link,
  allProjects,
  apropoPoj,
}) => {
  return (
    <>
      <section className="project-detail">
        <div className="back-home">
          <Link to="/">← Retour à l’accueil</Link>
        </div>
        {/* TOP SECTION : Image + titre + description */}
        <div className="top-section">
          <div className="image-section">
            <img src={image} alt={title} />
          </div>
          <div className="header-section">
            <h2>{title}</h2>
            <p className="short-description">{description}</p>
          </div>
        </div>

        {/* BOTTOM SECTION : 2 colonnes */}
        <div className="bottom-section">
          <div className="left-col">
            <h3>À propos du projet</h3>
            <p>
              {apropoPoj}
            </p>

            <h3>Fonctionnalités</h3>
            <ul>
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="right-col">
            <p><strong>Rôle :</strong> {role}</p>
            <p><strong>Durée :</strong> {duration}</p>
            <p><strong>Technologies :</strong></p>
            <div className="tech-list">
              {technologies.map((tech, idx) => (
                <span className="tech-badge" key={idx}>{tech}</span>
              ))}
            </div>
            {/* {link && (
              <div className="project-link">
                <a href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
              </div>
            )} */}
          </div>
        </div>

        {/* AUTRES PROJETS */}
        <div className="other-projects">
          <h3>Autres projets</h3>
          <div className="projects-list">
            {allProjects
              .filter(p => p.title !== title)
              .map(p => (
                <Link to={`/project/${p.id}`} key={p.id} className="project-item">
                  <img src={p.image} alt={p.title} />
                  <div className="overlay">{p.title}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetail;
