import React, { useEffect, useState } from "react";
import "./projectPage.scss";
import { ProjectData, projectData } from "./ProjectData/projectData";

interface Props {
  title?: string;
}

function ProjectPage({ title }: Props) {
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (!title) {
      return;
    }
    const data = projectData[title.toLowerCase()];
    setProject(data);

    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
  }, [title]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const { description, img1, img2, img3 } = project;

  return (
    <div className="projectPageContainer">
      <div className="projectPagePlaceholder" />
      <div className="projectPageHeader">{title}</div>
      <div className="projectPageInformationContainer">{description}</div>

      <div className="projectPageImageContainer">
        <img alt="projectImage" className="projectPageImage" src={img1} />
        {img2 && (
          <img alt="projectImage" className="projectPageImage" src={img2} />
        )}
        {img3 && (
          <img alt="projectImage" className="projectPageImage" src={img3} />
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
