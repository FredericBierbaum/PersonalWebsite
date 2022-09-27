import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import PortraitWithText from "./PortraitWithText/PortraitWithText";
import "./landingPage.scss";

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div id="placeholder-nav">
					<div className="infoContainer">
						<div>Frederic Bierbaum</div>
						<div>Located in Hamburg</div>
					</div>
				</div>
				<PortraitWithText />
			</div>
		);
	}
}
