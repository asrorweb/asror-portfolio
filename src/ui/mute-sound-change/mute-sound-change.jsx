import { useDispatch, useSelector } from "react-redux";
import useButtonClickSound from "../sound-effects/click-sound-effect";
import { IoVolumeMuteOutline, IoVolumeHighOutline } from "react-icons/io5";
import { muteSoundOffFunc, muteSoundOnFunc } from "../../reducer/mute-sound";

function MuteSoundChange({ firth, text }) {
    const { mute } = useSelector((state) => state.mute);
    const dispatch = useDispatch();
    const ClickSoundMouseEffect = useButtonClickSound();

    const handlerClick = () => {
        if (firth) {
            dispatch(muteSoundOnFunc());
        } else {
            dispatch(muteSoundOffFunc());
        }
        ClickSoundMouseEffect();
    };
    return (
        <button onClick={handlerClick} className="text-center inline-block">
            <div
                className={`${
                    firth
                        ? mute
                            ? "border-blue-600 bg-white"
                            : "border-gray-500 bg-white"
                        : mute
                        ? "border-gray-500 bg-[#171836] text-white"
                        : "border-blue-600 bg-[#171836] text-white"
                } p-3  rounded-xl mb-2 border-4 `}
            >
                {firth ? (
                    <IoVolumeMuteOutline className="text-4xl sm:text-5xl" />
                ) : (
                    <IoVolumeHighOutline className="text-4xl sm:text-5xl" />
                )}
            </div>
            <span
                className={`${
                    firth
                        ? !mute
                            ? "text-gray-400"
                            : "dark:text-white"
                        : mute
                        ? "text-gray-400"
                        : "dark:text-white"
                } `}
            >
                {text}
            </span>
        </button>
    );
}

export default MuteSoundChange;
