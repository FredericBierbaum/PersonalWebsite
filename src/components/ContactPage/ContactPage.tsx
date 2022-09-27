import React from "react";
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
					dev.fredbier@outlook.com
				</a>
				<a
					href="https://www.linkedin.com/in/frederic-bierbaum-428326194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBcDIoW0iQn2FpM%2BXg5%2F%2Ftw%3D%3D"
					className="contactPageElement"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
}

export default ContactPage;
