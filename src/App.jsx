import React, { Suspense, lazy } from "react";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const PortfolioHero = lazy(() => import("./components/PortfolioHero"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectSection"));
const ContactMe = lazy(() => import("./components/ContactMe"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
        <Navbar />
        <PortfolioHero />
        <AboutSection />
         <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactMe />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
