import { iconsLangData } from "../../data/data-icons";
import { v4 as uuidv4 } from "uuid";
import "./skils-content.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { BsCodeSlash } from "react-icons/bs";
import { useButtonClickSound } from "../../ui";

function SkillsElementMobile() {
    const ClickSoundMouseEffect = useButtonClickSound();

    useEffect(() => {
        ScrollReveal().reveal(`.skills-title`, {
            duration: 800,
            delay: 200,
            distance: "40px",
            origin: "top",
            easing: "ease-out",
        });
    }, []);

    const handleClick = () => {
        ClickSoundMouseEffect();
    };

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
                    const classAny = `my-skills-element-mobile-${i}`;

                    useEffect(() => {
                        ScrollReveal().reveal(`.${classAny}`, {
                            duration: 400 + i * 30,
                            delay: 200,
                            distance: "60px",
                            origin: "bottom",
                            easing: "ease-out",
                            reset: true,
                        });
                    }, []);

                    return (
                        <div
                            key={uuidv4()}
                            className={`${classAny}  skils-element-mobile-box flex justify-between items-center gap-2 pl-3 pr-4 py-3 rounded-lg dark:bg-slate-800`}
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <img
                                        src={data.icon}
                                        className="w-10 md:w-14"
                                        alt={data.title}
                                    />
                                </div>
                                <h2 className="capitalize font-medium dark:text-gray-200">
                                    {data.title}
                                </h2>
                            </div>

                            {/* info icon */}
                            <Link
                                onClick={handleClick}
                                to={`/skills/${data.id}`}
                            >
                                <IoInformationCircleOutline className="w-[22px] h-[22px] text-blue-500" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsElementMobile;
