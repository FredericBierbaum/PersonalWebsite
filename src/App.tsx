import "./App.scss";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import LandingPage from "./components/LandingPage/LandingPage";
import PortraitWithText from "./components/LandingPage/PortraitWithText/PortraitWithText";
import ProjectPanelPage from "./components/ProjectPanelPage/ProjectPanelPage";
import SkillPage from "./components/SkillPage/SkillPage";

function App() {
	return (
		<div className="appContainer">
			<LandingPage />
			<ProjectPanelPage />
			<AboutMePage />
			<SkillPage />
			<ContactPage />
		</div>
	);
}

export default App;
