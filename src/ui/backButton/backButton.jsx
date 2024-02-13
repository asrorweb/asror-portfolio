import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";
import useButtonClickSound from "../sound-effects/click-sound-effect";

function BackButton() {
    const navigate = useNavigate();
    const ClickSoundMouseEffect = useButtonClickSound();

    const handleClick = () => {
        navigate(-1);
        ClickSoundMouseEffect();
    };
    return (
        <button
            onClick={handleClick}
            className="absolute top-4 flex items-center text-blue-500"
        >
            <IoChevronBackOutline className="w-6 h-6" />
            <Typography variant="h6">Back</Typography>
        </button>
    );
}

export default BackButton;
