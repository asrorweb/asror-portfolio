import { useSelector } from "react-redux";
import { LangugaeChangeSet } from "../../../ui";

function ChangeLanguage({ className = "" }) {
    const { language } = useSelector((state) => state.language);
    return (
        <div className={`${className}`}>
            <div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-0 border dark:border-gray-700 px-7 py-3 sm:px-10 sm:py-6 rounded-lg ">
                <h2 className="text-[rgb(59, 130, 246)] dark:text-white text-2xl">
                    {!language ? "Language" : "Til"}
                </h2>
                <div className="flex items-center gap-5">
                    <LangugaeChangeSet firth={true} text={"Uzb"} />
                    <LangugaeChangeSet text={"Eng"} />
                </div>
            </div>
        </div>
    );
}

export default ChangeLanguage;
