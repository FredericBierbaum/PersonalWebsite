import React from "react";
import "./projectPanel.scss";

interface Props {
  projectName: string;
  year: string;
  projectDefinition: string;
  description: string;
  img1: string;
  img2?: string;
  img3?: string;
}

function ProjectPanel(props: Props) {
  return (
    <div className="projectPanelContainer">
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
