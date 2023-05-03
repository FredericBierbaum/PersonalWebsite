import ProjectPanel from "./ProjectPanel/ProjectPanel";
import "./projectPanelPage.scss";
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
          duration={3}
        />
      </Link>
      <Link
        to={`/project/redbull`}
        style={{ textDecoration: "none", color: "inherit", width:"80%" }}
      >
        <ProjectPanel
          projectDefinition="Technical Operations"
          projectName="Red Bull"
          year="2020"
          duration={6}
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
          duration={10}
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
          duration={7}
        />
      </Link>
    </div>
  );
}