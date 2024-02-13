import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { iconsLangData } from "../../data/data-icons";
import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import "./skils-content.css";
import { useSelector } from "react-redux";
import { BackButton } from "../../ui";

function SkillsElementInfoPage() {
    const { id } = useParams();
    const [skillsData, setSkillsData] = useState(false);
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        const a = iconsLangData.filter((e) => {
            return e.id == id;
        });
        setSkillsData(a[0]);
    }, [id]);

    return (
        skillsData && (
            <div className="relative pt-6">
                <BackButton />
                <div className="my-container">
                    <Typography
                        variant="h1"
                        className="text-2xl capitalize text-center mb-4 dark:text-white"
                    >
                        {skillsData.title}
                    </Typography>

                    <div className="lg:flex gap-7">
                        {/* header */}
                        <div className="flex justify-between lg:items-end lg:w-1/4 lg:flex-col lg:gap-1 items-end  mb-6 dark:bg-slate-800 px-3 py-2 lg:p-4 rounded-xl lg:rounded-2xl glasses-effect">
                            <img
                                src={skillsData.icon}
                                alt={skillsData.title}
                                className="w-20 h-20 lg:w-full lg:h-full lg:rounded-lg"
                            />
                            <Typography
                                variant="small"
                                className="dark:text-white flex items-center gap-2"
                            >
                                <span>
                                    {language
                                        ? skillsData.dataUz
                                        : skillsData.dataEng}
                                </span>
                                <IoTimeOutline />
                            </Typography>
                        </div>
                        <Typography
                            variant="paragraph"
                            className="dark:text-gray-300 lg:max-w-[70%] pl-3 py-2 lg:p-0 border-l-2 lg:border-none border-l-green-600"
                        >
                            {language ? skillsData.descUz : skillsData.descEng}
                        </Typography>
                    </div>
                </div>
            </div>
        )
    );
}

export default SkillsElementInfoPage;
