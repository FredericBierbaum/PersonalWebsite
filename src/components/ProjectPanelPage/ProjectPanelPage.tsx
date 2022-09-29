import React from "react";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import {
	descriptionBierbaum,
	descriptionDFL,
	descriptionRedBull,
} from "../../texts/texts";
import "./projectPanelPage.scss";
import {
	DFLPicture,
	DriftmastersPicture,
	DriftmastersPicture02,
	PictureBierbaum01,
	PictureBierbaum02,
} from "../../images/images";

interface Props {
	goToProjectPage: Function;
}

export default function ProjectPanelPage(props: Props) {
	return (
		<div className="projectPanelPageContainer">
			<div className="projectPanelPageHeader">WORK</div>
			<ProjectPanel
				projectDefinition="Energy Optimization"
				projectName="Bierbaum"
				year="2022"
				goToProjectPage={props.goToProjectPage}
				description={descriptionBierbaum}
				img1={PictureBierbaum01}
				img2={PictureBierbaum02}
			/>
			<ProjectPanel
				projectDefinition="Technical Operations"
				projectName="Red Bull"
				year="2022"
				goToProjectPage={props.goToProjectPage}
				description={descriptionRedBull}
				img1={DriftmastersPicture}
				img2={DriftmastersPicture02}
			/>
			<ProjectPanel
				projectDefinition="MediaPlayer"
				projectName="DFL"
				year="2020"
				goToProjectPage={props.goToProjectPage}
				description={descriptionDFL}
				img1={DFLPicture}
			/>
		</div>
	);
}
