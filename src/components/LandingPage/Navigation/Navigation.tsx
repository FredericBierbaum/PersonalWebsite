import React, { useState } from "react";
import "./navigation.scss";
import { BurgerIcon, CloseButton } from "../../../images/images";
export default function Navigation() {
	const [status, setStatus] = useState("closed");
	return (
		<div className="navigationContainer">
			<div className="leftNavSide">
				<span>Frederic Bierbaum</span>
				<span>Located in Hamburg</span>
			</div>
			<div className="navigation">
				<a href="#homesection" className="navigationElement">
					Home
				</a>
				<a href="#worksection" className="navigationElement">
					Work
				</a>
				<a href="#aboutmesection" className="navigationElement">
					About
				</a>
				<a href="#contactsection" className="navigationElement">
					Contact
				</a>
			</div>
			<div className={"mobileMenuContainer " + status}>
				<div
					onClick={() => {
						status === "open" ? setStatus("closed") : setStatus("open");
					}}
					className={"burgerIconContainer " + status}
				>
					<img
						id="burger-icon"
						src={status === "open" ? CloseButton : BurgerIcon}
					/>
				</div>
				<div className={"mobileMenu " + status}>
					<a
						href="#placeholder-nav"
						className="navigationElement navigationElementMobile"
					>
						Home
					</a>
					<a
						href="#worksection"
						className="navigationElement navigationElementMobile"
					>
						Work
					</a>
					<a
						href="#aboutmesection"
						className="navigationElement navigationElementMobile"
					>
						About
					</a>
					<a
						href="#contactsection"
						className="navigationElement navigationElementMobile"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
}
