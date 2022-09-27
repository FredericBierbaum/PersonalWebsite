import React from "react";
import { FBPictureOne } from "../../images/images";
import "./aboutMePage.scss";

function AboutMePage() {
	return (
		<div className="aboutMePageContainer">
			<div className="aboutMePageHeader">ABOUT ME</div>
			<div className="aboutMePageContentAndPictureContainer">
				<div className="aboutMePageContent">
					Hi! I am Frederic Bierbaum a passionate Software Developer located in
					Hamburg, Germany. I am available remote or onsite here in Hamburg. I
					will put in the work to get your project done as efficient as possible
					while using clean code principles. I am very open minded and always
					looking for new challenges and opportunities. When you are looking for
					a developer that cares about their customers and projects, you found
					the right person. I will always go the extra mile to make sure all of
					your wishes are met.
				</div>
				<img id="profilePictureSecond" src={FBPictureOne} />
			</div>
		</div>
	);
}

export default AboutMePage;
