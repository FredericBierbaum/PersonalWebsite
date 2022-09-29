import { useState } from "react";
import "./App.scss";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/LandingPage/Navigation/Navigation";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ProjectPanelPage from "./components/ProjectPanelPage/ProjectPanelPage";
import SkillPage from "./components/SkillPage/SkillPage";
import { FBPictureOne } from "./images/images";

function App() {
	function goToProjectPage(
		title: string,
		description: string,
		img1: string,
		img2?: string,
		img3?: string
	) {
		setDescription(description);
		setTitle(title);
		setProjectState(true);
		setImage1(img1);
		setImage2("");
		setImage3("");
		img2 && setImage2(img2);
		img3 && setImage3(img3);
	}
	function goBackToHome() {
		setProjectState(false);
	}
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [img1, setImage1] = useState("");
	const [img2, setImage2] = useState("");
	const [img3, setImage3] = useState("");
	const [isProject, setProjectState] = useState(false);
	return (
		<div className="appContainer">
			{isProject ? (
				<>
					<Navigation goBackToHome={goBackToHome} />
					<ProjectPage
						description={description}
						title={title}
						img1={img1}
						img2={img2}
						img3={img3}
					/>
				</>
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
