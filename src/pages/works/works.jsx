import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function Works() {
    const { language } = useSelector((state) => state.language);
    return (
        <div className="my-container pt-7">
            <Typography className="text-4xl dark:text-white">
                {language ? "Tez orada kutilmoqda..." : "Coming soon..."}
            </Typography>
        </div>
    );
}

export default Works;
