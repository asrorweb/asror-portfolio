// click effects
import useSound from "use-sound";
import buttonClickSound from "../../music-effects/lamp.wav";
import { useSelector } from "react-redux";

const useLampSound = () => {
    const [play] = useSound(buttonClickSound, { volume: 0.05 });
    const { mute } = useSelector((state) => state.mute);

    const LampSoundEffect = () => {
        !mute && play();
    };

    return LampSoundEffect;
};

export default useLampSound;
