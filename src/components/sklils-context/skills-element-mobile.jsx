import { iconsLangData } from "../../data/data-icons";
import "./skils-content.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Typography } from "@material-tailwind/react";
import { BsCodeSlash } from "react-icons/bs";
import SklisElMobileChild from "./sklis-el-mobile-child";
import { v4 as uuidv4 } from "uuid";

function SkillsElementMobile() {
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
        <div>
            <Typography
                type="h1"
                className="skills-title flex items-center gap-2 lg:hidden mb-6 text-4xl font-medium dark:text-gray-300"
            >
                <BsCodeSlash className="dark:text-gray-50" />
                <span>Skills</span>
            </Typography>
            <div className="flex flex-col gap-4 mb-9  lg:hidden">
                {iconsLangData.map((data, i) => {
                    return (
                        <SklisElMobileChild
                            index={i}
                            key={uuidv4()}
                            data={data}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsElementMobile;
