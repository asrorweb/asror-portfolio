import { FaA } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { darkModefunc, lightModefunc } from "../../reducer/dark-light-mode";
import useButtonClickSound from "../sound-effects/click-sound-effect";

function ThemaChange({ light = false, text }) {
    const { dark } = useSelector((state) => state.dark);
    const dispatch = useDispatch();
    const ClickSoundMouseEffect = useButtonClickSound();

    const handlerClick = () => {
        if (light) {
            dispatch(lightModefunc());
        } else {
            dispatch(darkModefunc());
        }
        ClickSoundMouseEffect();
    };

    return (
        <button onClick={handlerClick} className="text-center inline-block">
            <div
                className={`${
                    light
                        ? dark
                            ? "border-gray-500 bg-white"
                            : "border-blue-600 bg-white"
                        : dark
                        ? "border-blue-600 bg-[#171836] text-white"
                        : "border-gray-500 bg-[#171836] text-white"
                } p-3  rounded-xl mb-2 border-4 `}
            >
                <FaA className="text-4xl sm:text-5xl" />
            </div>
            <span
                className={`${
                    light
                        ? dark
                            ? "dark:text-gray-500"
                            : ""
                        : dark
                        ? "dark:text-white"
                        : "text-gray-400"
                } `}
            >
                {text}
            </span>
        </button>
    );
}

export default ThemaChange;
