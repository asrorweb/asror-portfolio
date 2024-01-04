// click effects
import useSound from "use-sound";
import buttonClickSound from "../../music-effects/click.wav";
import { useSelector } from "react-redux";

const useButtonClickSound = () => {
    const [play] = useSound(buttonClickSound, { volume: 0.05 });
    const { mute } = useSelector((state) => state.mute);

    const ClickSoundMouseEffect = () => {
        !mute && play();
    };

    return ClickSoundMouseEffect;
};

export default useButtonClickSound;
