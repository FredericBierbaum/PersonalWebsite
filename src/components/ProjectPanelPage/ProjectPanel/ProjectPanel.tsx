import React, { useState } from "react";
import "./projectPanel.scss";

interface Props {
	projectName: string;
	year: string;
	projectDefinition: string;
    description:string;
	goToProjectPage:Function;
    img1:string;
    img2?:string;
    img3?: string;
}

function ProjectPanel(props: Props) {
	useState(0);
	return (
		<div onClick={()=>props.goToProjectPage(props.projectName, props.description,props.img1,props.img2,props.img3)} className="projectPanelContainer">
			<hr className="panelBlueLine"></hr>
			<div className="projectPanelInformationContainer">
				<div className="projectPanelName">{props.projectName}</div>
				<div className="projectPanelDate">
					<span>{props.projectDefinition} //</span>
					<span>{props.year}</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectPanel;
