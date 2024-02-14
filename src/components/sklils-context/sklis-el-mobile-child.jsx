import ScrollReveal from "scrollreveal";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useButtonClickSound } from "../../ui";

function SklisElMobileChild({ data, index }) {
    const ClickSoundMouseEffect = useButtonClickSound();

    const classForAnimation = `my-skills-element-mobile-${index}`;

    useEffect(() => {
        ScrollReveal().reveal(`.${classForAnimation}`, {
            duration: 400 + index * 30,
            delay: 200,
            distance: "40px",
            origin: "bottom",
            easing: "ease-out",
            reset: true,
        });
    }, []);

    const handleClick = () => {
        ClickSoundMouseEffect();
    };
    return (
        <div
            className={`${classForAnimation} skils-element-mobile-box flex justify-between items-center gap-2 pl-3 pr-4 py-3 rounded-lg dark:bg-slate-800`}
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
            <Link onClick={handleClick} to={`/skills/${data.id}`}>
                <IoInformationCircleOutline className="w-[22px] h-[22px] text-blue-500" />
            </Link>
        </div>
    );
}

export default SklisElMobileChild;
