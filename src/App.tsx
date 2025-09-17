// import React from "react";
// // import { ThemeProvider } from "./context/ThemeContext";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import { ThemeProvider } from "./ThemeContext";
// import "./styles/SassGlobal.scss"
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";

// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       <Navbar />
//       <About />
//       <Services />
//       <Skills/>
//       <Projects/>
//       <Contact />
//       <Footer/>
//     </ThemeProvider>
//   );
// };

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/SassGlobal.scss"

import { ThemeProvider } from "./ThemeContext";
import ProjectDetailWrapper from "./ProjectDetailWrapper";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
            <About />
            <Services />
            <Skills/>
            <Projects/>
            <Contact />
            <Footer/>
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetailWrapper />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

