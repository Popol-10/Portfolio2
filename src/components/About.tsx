
import React, { useEffect, useState } from "react";
import "../styles/About.scss";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";



const About: React.FC = () => {
  const profilePic = "/imagePort/popol2.jpg";
  const Cv = "/cvdev2.pdf"
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0.2,
 });

  const phrases = ["Développeur Frontend", "Développeur Backend", "Développeur Fullstack"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 100 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="about" className="about" ref={ref}>
      <h2>À propos de moi</h2>
      <div className="about-container">
        <motion.div 
        className="about-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
          <img src={profilePic} alt="Photo de profil" className="profile-pic" />

          <div className="below-image">
            <h1 className="paraColor">Développeur Web</h1>
            <h2 id="devT">
              {phrases[index].substring(0, subIndex)}
              <span className="cursor"></span>
            </h2>

            <a 
              href={Cv} 
              download="Mon_Cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="CV"
            >
              Télécharger mon CV
            </a>
          </div>
        </motion.div>

        {/* Colonne droite : texte de présentation */}
        
        <motion.div 
          className="about-right"
          initial={{y:100,opacity:0}}
          animate={inView ? {y:0 , opacity:1} : {}}
          transition={{duration:3}}
        >
          <p className="paraColor">
            <h4>Razafindrainibe Avotra Harilala Patrick</h4>
            Je suis un développeur web passionné, spécialisé dans la création de
            sites modernes, responsives et adaptés à tous les supports.
            <br />
            Mon objectif est de concevoir des solutions web claires et efficaces,
            qui allient design attrayant et performances optimisées.
            <br />
            Je maîtrise le frontend (HTML, CSS, JavaScript, React)
            ainsi que le backend (Node.js, NestJS, bases de données, API), ce qui
            me permet de développer des sites dynamiques et bien structurés.
            <br />
            Curieux et motivé, j’aime apprendre en continu et mettre mes
            compétences au service de projets concrets.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

