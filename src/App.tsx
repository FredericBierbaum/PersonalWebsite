import { useState } from "react";
import "./App.scss";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/LandingPage/Navigation/Navigation";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ProjectPanelPage from "./components/ProjectPanelPage/ProjectPanelPage";
import SkillPage from "./components/SkillPage/SkillPage";
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:title" element={<ProjectWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <a id="homesection"></a>
      <LandingPage />
      <a id="worksection"></a>
      <ProjectPanelPage />
      <a id="aboutmesection"></a>
      <AboutMePage />
      <SkillPage />
      <a id="contactsection"></a>
      <ContactPage />
    </>
  );
}

function ProjectWrapper() {
  let { title } = useParams();
  return <ProjectPage title={title} />;
}

export default App;