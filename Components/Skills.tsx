import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";



const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
            <SkillsItem title="React Developer" year="2023"/>
            <SkillsItem title="Next.js Developer" year="2023"/>
            <SkillsLanguage skill1 ="html" skill2="css" skill3="JavaScript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
        </div>
        <div>
            <SkillsItem title="Next.js Developer" year="2023"/>
            <SkillsItem title="Next.js Developer" year="2023"/>
            <SkillsLanguage skill1 ="React" skill2="Next.js" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
