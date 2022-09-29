import React, { useEffect } from "react";
import "./projectPage.scss";

interface Props {
	title: string;
	description: string;
	img1: string;
	img2?: string;
	img3?: string;
}
function ProjectPage(props: Props) {
	useEffect(() => {
		setTimeout(function () {
			var scrollPos =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			window.scrollTo(0, 1);
		}, 0);
	});
	return (
		<div className="projectPageContainer">
			<div className="projectPagePlaceholder" />
			<div className="projectPageHeader">{props.title}</div>
			<div className="projectPageInformationContainer">{props.description}</div>

			<div className="projectPageImageContainer">
				<img className="projectPageImage" src={props.img1} />
				<img className="projectPageImage" src={props.img2} />
				<img className="projectPageImage" src={props.img3} />
			</div>
		</div>
	);
}

export default ProjectPage;
