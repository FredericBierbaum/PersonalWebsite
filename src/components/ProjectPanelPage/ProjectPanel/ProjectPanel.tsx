import React from "react";
import "./projectPanel.scss";

interface Props {
  projectName: string;
  year: string;
  projectDefinition: string;
  duration: number;
}

function ProjectPanel(props: Props) {
  return (
    <div className="projectPanelContainer">
      <hr className="panelBlueLine"></hr>
      <div className="projectPanelInformationContainer">
        <div className="projectPanelName">{props.projectName}</div>
        <div className="projectPanelDate">
          <span>{props.projectDefinition} //</span>
          <span className="projectPanelTimeText">
            {props.year} | {props.duration} months
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
