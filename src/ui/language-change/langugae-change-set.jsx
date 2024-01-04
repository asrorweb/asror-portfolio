import { useDispatch, useSelector } from "react-redux";
import useButtonClickSound from "../sound-effects/click-sound-effect";
import {
    changeLanguageEng,
    changeLanguageUz,
} from "../../reducer/language-change";
import { FaEtsy, FaU } from "react-icons/fa6";

function LangugaeChangeSet({ firth, text }) {
    const { language } = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const ClickSoundMouseEffect = useButtonClickSound();

    const handlerClick = () => {
        if (firth) {
            dispatch(changeLanguageUz());
        } else {
            dispatch(changeLanguageEng());
        }
        ClickSoundMouseEffect();
    };
    return (
        <button onClick={handlerClick} className="text-center inline-block">
            <div
                className={`${
                    firth
                        ? language
                            ? "border-blue-600 bg-white"
                            : "border-gray-500 bg-white"
                        : language
                        ? "border-gray-500 bg-[#171836] text-white"
                        : "border-blue-600 bg-[#171836] text-white"
                } p-3  rounded-xl mb-2 border-4 `}
            >
                {firth ? (
                    <FaU className="text-4xl sm:text-5xl" />
                ) : (
                    <FaEtsy className="text-4xl sm:text-5xl" />
                )}
            </div>
            <span
                className={`${
                    firth
                        ? !language
                            ? "text-gray-400"
                            : "dark:text-white"
                        : language
                        ? "text-gray-400"
                        : "dark:text-white"
                } `}
            >
                {text}
            </span>
        </button>
    );
}

export default LangugaeChangeSet;
