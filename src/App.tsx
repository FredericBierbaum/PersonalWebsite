import { useState } from "react";
import "./App.scss";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ProjectPanelPage from "./components/ProjectPanelPage/ProjectPanelPage";
import SkillPage from "./components/SkillPage/SkillPage";

function App() {
  function goToProjectPage(title: string, description: string) {
    setDescription(description);
    setTitle(title);
    setProjectState(true);
  }
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isProject, setProjectState] = useState(false);
  return (
    <div className="appContainer">
      {isProject ? (
        <ProjectPage
          description={description}
          title={title}
          img1=""
          img2=""
          img3=""
        />
      ) : (
        <>
          <a id="homesection"></a>
          <LandingPage />
          <a id="worksection"></a>
          <ProjectPanelPage goToProjectPage={goToProjectPage} />
          <a id="aboutmesection"></a>
          <AboutMePage />
          <SkillPage />
          <a id="contactsection"></a>
          <ContactPage />
        </>
      )}
    </div>
  );
}

export default App;
