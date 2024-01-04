import { useSelector } from "react-redux";
import MuteSoundChange from "../../../ui/mute-sound-change/mute-sound-change";

function MuteSound({ className }) {
    const { language } = useSelector((state) => state.language);
    return (
        <div className={`${className}`}>
            <div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-0 border dark:border-gray-700 px-7 py-3 sm:px-10 sm:py-6 rounded-lg ">
                <h2 className="text-[rgb(59, 130, 246)] dark:text-white text-2xl">
                    {!language ? "Sound" : "Ovoz"}
                </h2>
                <div className="flex items-center gap-5">
                    <MuteSoundChange firth={true} text={"Mute"} />
                    <MuteSoundChange text={"Sound"} />
                </div>
            </div>
        </div>
    );
}

export default MuteSound;
