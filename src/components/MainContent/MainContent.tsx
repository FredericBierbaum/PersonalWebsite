// components/MainContent.js
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import AboutMePage from "../AboutMePage/AboutMePage";
import ContactPage from "../ContactPage/ContactPage";
import ProjectPanelPage from "../ProjectPanelPage/ProjectPanelPage";
import SkillPage from "../SkillPage/SkillPage";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

function MainContent() {
  useScrollToAnchor();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:title" element={<ProjectWrapper />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <>
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

export default MainContent;