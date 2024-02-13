import { SkillsElementMobile, SkillsElements } from "../../components";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Skills() {
    return (
        <div className="my-container min-h-screen pt-6 lg:flex lg:justify-center lg:items-center pb-24">
            <SkillsElements />
            <SkillsElementMobile />
        </div>
    );
}

export default Skills;
