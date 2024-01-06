import {
    SkillsElementMobile,
    SkillsElements,
    SkillsTimeline,
} from "../../components";

function Skills() {
    return (
        <div className="my-container min-h-screen pt-11 flex flex-col lg:flex-row justify-between lg:items-center pb-24">
            <SkillsElements />
            <SkillsElementMobile />
            <SkillsTimeline />
        </div>
    );
}

export default Skills;
