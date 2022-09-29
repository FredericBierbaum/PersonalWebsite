import React from "react";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import { descriptionBierbaum } from "../../texts/texts";
import "./projectPanelPage.scss";

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
      />
      <ProjectPanel
        projectDefinition="Technical Operations"
        projectName="Red Bull"
        year="2022"
        goToProjectPage={props.goToProjectPage}
        description="It was very cool and stuff bruh it was so lit I really hit the dab and stuff"
      />
      <ProjectPanel
        projectDefinition="MediaPlayer"
        projectName="DFL"
        year="2020"
        goToProjectPage={props.goToProjectPage}
        description="It was very cool and stuff bruh it was so lit I really hit the dab and stuff"
      />
    </div>
  );
}
