
import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import { Project } from "./type";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Un site web qui contient touts mes travails, mes parcours, mes information(expériences, compétence...)",
    image: "/imagePort/portfolioCapture.png",
    link:"#",
    technologies:["React", "TypeScript", "Sass"],
    features: ["Page accueil", "Section compétences", "Page projets","Section Service", "Formulaire contact","mode claire et sombre"],
    duration: "1 semaines et 3 jours",
    role: "Développement frontend",
    apropoPoj:"A travers ce portfolio, je partage mes projets , mon savoir-faire et ma passion du développement. chaque projet que vous decouvrirez ici reflète mon engagement, ma rigueur et mon envie de créer des solution unique. Ce portfolio est développé par React.js et Typescript , Sass pour styliser et dynamiser le site."
  },
  {
    id: 2,
    title: "Mi-Produits",
    description: "Une plateforme dédiée à la valorisation et à la vente de produits locaux à Madagasikara",
    image: "/imagePort/Mi-Produits.png",
    link:"#",
    technologies:["ReactJs", "NestJS", "NodeJs","Swagger", "Sass","Typescript","Mysql"],
    features: ["Gestion des produits et des personnels (CRUD complet)","Authentification sécurisée avec rôles (Admin,vendeur,Client)","deux (2) Tableau de bord pour Admin et Vendeur et une page d'accueil pour la présentation du site","Design responsive et optimisé SEO"],
    duration: "6 mois",
    role: "Développement fullstack",
    apropoPoj:" Mi-Produits est une solution complète de vente et des achats,développée par React.JS et TypeScript pour le frontend et Sass pour le style, côté backend j'utilise NestJs , Mysql pour la base de donnée et j'utilise aussi l'API Swagger.Ce site permet aux vendeur de publier facilement leurs articles, qu'il s'agisse de produits agricoles,artisanaux,  ou autres richesse locales. Les Client peuvents parcourir les offres, passer des commandes ou faire des réservation en toute simplicité."
  },
    {
    id: 3,
    title: "Page d'accueil Mi-Produits",
    description: "C'est la vitrine principale du site Mi-Produits.",
    image: "/imagePort/pageMi.png",
    link:"#",
    technologies:["ReactJs","Typscript","Sass"],
    features: ["Header", "Slider", "Section produits","Catalogue produits", "Panier d'achat","Section Service", "Formulaire contact","Design responsive"],
    duration: "1 semaine et 4jours",
    role: "Développement frontend",
    apropoPoj:"page d'accueil Mi-produits est développée par React.Js,Typescripte,sass.Elle a pour rôle de présenter l'ensemble des articles disponibles et permettre aux clients de parcourir,rechercher et acheter les produits locaux proposés par les vendeur"
  },
  {
    id: 4,
    title: "Maquette automobile",
    description: "Intégration web d'une maquette automobile en transformant un design statique en site fonctionnel et interactif.",
    image: "/imagePort/automobile.png",
    link:"#",
    technologies:["ReactJs","Typescript","Sass",],
    features: ["Design responsive", "Animations CSS", "Interactivité"],
    duration: "1 semaine",
    role: "Intégration et développement",
    apropoPoj:"Le projet consiste à mettre en place une interface moderne et responsive, s'adaptant parfaitement aux différents supports(ordinateur,Tablette et mobile).J'ai intégré des animations fluides pour dynamiser l'expérience utilisateur, notamment lors du défilement et des interactions avec les éléments visuels.ce travaille m'a permis de mettre en pratique mes compétence en HTML,CSS, Javascript,ainsi que mes connaissances en responsive design et en animation web"
  },
];

const ProjectDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) return <p>Projet introuvable</p>;

  return <ProjectDetail {...project} allProjects={projectsData} />;
};

export default ProjectDetailWrapper;
