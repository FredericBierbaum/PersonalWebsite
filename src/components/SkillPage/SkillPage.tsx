import React from "react";
import SkillBar from "./SkillBar/SkillBar";
import "./skillPage.scss";

function SkillPage() {
	return (
		<div className="skillPageContainer">
			<div className="skillPageHeader">Skills</div>
			<div className="skillContainer">
				<SkillBar skillName="REACT" level={10} />
				<SkillBar skillName="JAVASCRIPT" level={10} />
				<SkillBar skillName="TYPESCRIPT" level={10} />
				<SkillBar skillName="HTML" level={10} />
				<SkillBar skillName="CSS" level={9} />
				<SkillBar skillName="JAVA" level={7} />
				<SkillBar skillName="MONGODB" level={8} />
				<SkillBar skillName="MYSQL" level={6} />
				<SkillBar skillName="FLUTTER" level={7} />
				<SkillBar skillName="GITHUB" level={8} />
				<SkillBar skillName="NODEJS" level={9} />
				<SkillBar skillName="EXPRESS" level={9} />
			</div>
		</div>
	);
}

export default SkillPage;
