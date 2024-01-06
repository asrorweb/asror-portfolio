import { iconsLangData } from "../../data/data-icons";
import { v4 as uuidv4 } from "uuid";
import "./skils-content.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function SkillsElementMobile() {
    return (
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
                        className={`${classAny} skils-element-mobile-box flex gap-2 px-2 py-3 rounded-lg dark:bg-slate-800`}
                    >
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
                );
            })}
        </div>
    );
}

export default SkillsElementMobile;
