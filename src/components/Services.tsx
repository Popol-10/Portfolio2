// import React from "react";
// import { Link } from "react-scroll";
// import "../styles/Services.scss";
// import { useInView } from "react-intersection-observer";

// const servicesData = [
//   {
//     title: "Web Développement Frontend Responsive",
//     description:
//       "Création d’interfaces modernes, esthétiques et adaptées à tous les écrans (ordinateur, tablette, mobile). Intégration de maquettes, design UI/UX et utilisation de frameworks modernes (React).",
//   },
//   {
//     title: "Web développement Backend & API",
//     description:
//       "Conception et mise en place de la logique serveur : création d’API performantes, gestion de bases de données, authentification sécurisée et intégration de services externes.",
//   },
//   {
//     title: "Web Développement Full Stack",
//     description:
//       "Prise en charge complète du développement d’une application web, du frontend au backend. Déploiement, optimisation des performances et solutions sur mesure adaptées aux besoins des clients.",
//   },
// ];

// const Services: React.FC = () => {

 
//   return (
//     <section id="services" className="services" >
//       <h2>Mes Services</h2>
//       <div className="services-container">
//         {servicesData.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <Link to="contact" smooth={true} duration={500} className="button">
//               Contactez-moi
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { Link } from "react-scroll";
import { motion, Variants } from "framer-motion";
import "../styles/Services.scss";

const servicesData = [
  {
    title: "Web Développement Frontend Responsive",
    description:
      "Création d’interfaces modernes, esthétiques et adaptées à tous les écrans (ordinateur, tablette, mobile). Intégration de maquettes, design UI/UX et utilisation de frameworks modernes (React).",
  },
  {
    title: "Web développement Backend & API",
    description:
      "Conception et mise en place de la logique serveur : création d’API performantes, gestion de bases de données, authentification sécurisée et intégration de services externes.",
  },
  {
    title: "Web Développement Full Stack",
    description:
      "Prise en charge complète du développement d’une application web, du frontend au backend. Déploiement, optimisation des performances et solutions sur mesure adaptées aux besoins des clients.",
  },
];

// Variantes pour les animations
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },   // commence en bas + invisible
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
//   }),
// };
// import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 2, ease: "easeOut" },
  }),
};


const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <h2>Mes Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // s’anime seulement une fois
            variants={cardVariants}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="contact" smooth={true} duration={500} className="button">
              Contactez-moi
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
