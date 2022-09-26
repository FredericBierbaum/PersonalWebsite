import React from "react";
import "./skillBar.scss";
interface Props {
	level: number;
	skillName: string;
}

function getStyleStringFromLevel(level: number) {
	switch (level) {
		case 0:
			console.log("Hey");
			return "linear-gradient(to left, #F4F3FF 100%, #8CC2FF 0%)";
		case 1:
			console.log("Heyoo");
			return "linear-gradient(to left, #F4F3FF 90%, #8CC2FF 10%)";
		case 2:
			return "linear-gradient(to left, #F4F3FF 80%, #8CC2FF 20%)";
		case 3:
			return "linear-gradient(to left, #F4F3FF 70%, #8CC2FF 30%)";
		case 4:
			return "linear-gradient(to left, #F4F3FF 60%, #8CC2FF 40%)";
		case 5:
			return "linear-gradient(to left, #F4F3FF 50%, #8CC2FF 50%)";
		case 6:
			return "linear-gradient(to right, #8CC2FF 60%, #F4F3FF 40%)";
		case 7:
			return "linear-gradient(to right, #8CC2FF 70%, #F4F3FF 30%)";
		case 8:
			return "linear-gradient(to right, #8CC2FF 80%, #F4F3FF 20%)";
		case 9:
			return "linear-gradient(to right, #8CC2FF 90%, #F4F3FF 10%)";
		case 10:
			return "linear-gradient(to right, #8CC2FF 100%, #F4F3FF 0%)";
	}
	return "";
}
function SkillBar(props: Props) {
	return (
		<div className="skillBarContainer">
			<div className="skillName">{props.skillName}</div>
			<div
				className="skillBar"
				style={{ background: getStyleStringFromLevel(props.level) }}
			></div>
		</div>
	);
}

export default SkillBar;
