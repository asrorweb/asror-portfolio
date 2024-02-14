import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function SiteVersion({ className }) {
    const { language } = useSelector((state) => state.language);

    return (
        <div
            className={`${className} dark:text-gray-200 md:min-h-screen md:flex flex-col items-center justify-center md:p-0`}
        >
            <div>
                <Typography variant="h1" className="text-6xl md:text-9xl">
                    1.1.1
                </Typography>
                <Typography
                    variant="small"
                    className="md:text-right text-gray-500"
                >
                    {language
                        ? "Oxirgi yangilanish - 14.02.2024"
                        : " Latest update - 14.02.2024"}
                </Typography>
            </div>
        </div>
    );
}

export default SiteVersion;
