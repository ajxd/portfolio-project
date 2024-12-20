import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import LandingPage from "./pages/LandingPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutPage from "./pages/AboutMe.tsx";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
};

export default App;
