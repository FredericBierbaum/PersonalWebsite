import React from "react";
import "./projectPage.scss";

interface Props {
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
}
function ProjectPage(props: Props) {
  return (
    <div className="projectPageContainer">
      <div className="projectPageHeader">{props.title}</div>
      <div className="projectPageInformationContainer">{props.description}</div>
    </div>
  );
}

export default ProjectPage;
