import React from "react";
import {
	EmailPicture,
	GithubPicture,
	LinkedinPicture,
} from "../../images/images";
import "./contactPage.scss";

function ContactPage() {
	return (
		<div className="contactPageContainer">
			<div className="contactPageHeader">
				Feel free to contact me if you have any projects to request.
			</div>
			<div className="contactPageInformationContainer">
				<a
					href="mailto:dev.fredbier@outlook.com?subject=Project Offer"
					className="contactPageElement"
				>
					<img className="contactPageImage" id ="emailPicture" src={EmailPicture} />
					<span>dev.fredbier@outlook.com</span>
				</a>
				<a
					href="https://www.linkedin.com/in/frederic-bierbaum-428326194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBcDIoW0iQn2FpM%2BXg5%2F%2Ftw%3D%3D"
					className="contactPageElement"
				>
					<img className="contactPageImage" src={LinkedinPicture} />
					<span>LinkedIn</span>
				</a>
				<a
					href="https://github.com/FredericBierbaum"
					className="contactPageElement"
				>
					<img className="contactPageImage" src={GithubPicture} />
					<span>GitHub</span>
				</a>
			</div>
		</div>
	);
}

export default ContactPage;
