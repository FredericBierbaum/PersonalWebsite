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
import { Link } from "react-router-dom";

export default function ProjectPanelPage() {
  return (
    <div className="projectPanelPageContainer">
      <div className="projectPanelPageHeader">WORK</div>
      <Link
        to={`/project/bierbaum`}
        style={{ textDecoration: "none", color: "inherit" ,width:"80%"}}
      >
        <ProjectPanel
          projectDefinition="Energy Optimization"
          projectName="Bierbaum"
          year="2022"
          description={descriptionBierbaum}
          img1={PictureBierbaum01}
          img2={PictureBierbaum02}
        />
      </Link>
      <Link
        to={`/project/redbull`}
        style={{ textDecoration: "none", color: "inherit", width:"80%" }}
      >
        <ProjectPanel
          projectDefinition="Technical Operations"
          projectName="Red Bull"
          year="2022"
          description={descriptionRedBull}
          img1={DriftmastersPicture}
          img2={DriftmastersPicture02}
        />
      </Link>
      <Link
        to={`/project/dfl`}
        style={{ textDecoration: "none", color: "inherit",width:"80%" }}
      >
        <ProjectPanel
          projectDefinition="MediaPlayer"
          projectName="DFL"
          year="2020"
          description={descriptionDFL}
          img1={DFLPicture}
        />
      </Link>
      <Link
        to={`/project/node-energy`}
        style={{ textDecoration: "none", color: "inherit" , width:"80%"}}
      >
        <ProjectPanel
          projectName={"Node Energy"}
          year={"2022/2023"}
          projectDefinition={"Energy Management"}
          description={""}
          img1={""}
        />
      </Link>
    </div>
  );
}