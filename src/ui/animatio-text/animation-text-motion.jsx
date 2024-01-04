import { motion, transform, useAnimationControls } from "framer-motion";
import { useState } from "react";
import useBobbleSound from "../sound-effects/bobble-sound-effect";

function AnimationTextMotion({ children, className }) {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const BobbleSoundEffect = useBobbleSound();

    const animatioSet = () => {
        controls.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,0.55,1)",
                "scale3d(0.75,1.25,1)",
                "scale3d(1.25,0.85,1)",
                "scale3d(0.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition: {
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
            },
        });
        setIsPlaying(true);
    };

    return (
        <motion.span
            className={`${className} inline-block cursor-pointer`}
            animate={controls}
            onMouseOver={() => {
                if (!isPlaying) {
                    animatioSet();
                    BobbleSoundEffect();
                }
            }}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    );
}

export default AnimationTextMotion;
