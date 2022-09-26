import React from "react";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import "./projectPanelPage.scss";

export default function ProjectPanelPage() {
	return (
		<div className="projectPanelPageContainer">
			<div className="projectPanelPageHeader">WORK</div>
			<ProjectPanel
				projectDefinition="Energy Optimization"
				projectName="Bierbaum"
				year="2022"
			/>
			<ProjectPanel
				projectDefinition="Technical Operations"
				projectName="Red Bull"
				year="2022"
			/>
			<ProjectPanel
				projectDefinition="MediaPlayer"
				projectName="DFL"
				year="2020"
			/>
		</div>
	);
}
