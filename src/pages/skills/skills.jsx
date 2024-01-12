import { Typography } from "@material-tailwind/react";
import {
    SkillsElementMobile,
    SkillsElements,
    SkillsTimeline,
} from "../../components";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Skills() {
    useEffect(() => {
        ScrollReveal().reveal(`.skills-title`, {
            duration: 800,
            delay: 200,
            distance: "40px",
            origin: "top",
            easing: "ease-out",
        });
    }, []);

    return (
        <div className="my-container min-h-screen pt-11 flex flex-col lg:flex-row justify-between lg:items-center pb-24">
            <Typography
                type="h1"
                className="text-center skills-title lg:hidden mb-8 text-4xl font-medium dark:text-white"
            >
                Skills
            </Typography>
            <SkillsElements />
            <SkillsElementMobile />
            <SkillsTimeline />
        </div>
    );
}

export default Skills;
