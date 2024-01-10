import { socialMediaData } from "../../data/data-social-media";
import { v4 as uuidv4 } from "uuid";
function SocialMediaContactMobile() {
    return (
        <div className="flex flex-col gap-2 md:hidden">
            {socialMediaData.map((data) => {
                return (
                    <a
                        key={uuidv4()}
                        href={data.href}
                        className={`flex gap-2 p-2 border dark:border-none rounded-lg hover:scale-[1.05] duration-200 dark:bg-gray-800 dark:text-white`}
                    >
                        {data.icon}
                        <p>{data.title}</p>
                    </a>
                );
            })}
        </div>
    );
}

export default SocialMediaContactMobile;
