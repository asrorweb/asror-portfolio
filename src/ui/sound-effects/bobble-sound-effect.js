// booble effects
import useSound from "use-sound";
import bobble from "../../music-effects/bobble.wav";
import { useSelector } from "react-redux";

const useBobbleSound = () => {
    const [play] = useSound(bobble, { volume: 0.005 });
    const { mute } = useSelector((state) => state.mute);

    const BobbleSoundEffect = () => {
        !mute && play();
    };

    return BobbleSoundEffect;
};

export default useBobbleSound;
