import "./about.css";
import { socialMediaData } from "../../data/data-social-media";
import { v4 as uuidv4 } from "uuid";

function AboutSocial() {
    return (
        <span className="glasses-effect dark:bg-[#1E293B] px-3 py-2 rounded-xl flex gap-3 shadow-2xl">
            {socialMediaData.map((data) => (
                <a
                    key={uuidv4()}
                    target="_blank"
                    href={data.href}
                    className={`instagram-icon hover:opacity-80 text-[${data.color}] dark:text-white`}
                >
                    {data.icon}
                </a>
            ))}
        </span>
    );
}

export default AboutSocial;
