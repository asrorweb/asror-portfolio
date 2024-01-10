import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { v4 as uuidv4 } from "uuid";
import useLampSound from "../../ui/sound-effects/lamp-sound-effects";
import { socialMediaData } from "../../data/data-social-media";
import "./contact-me-context.css";

function SocialMediaContactItem({ className, data }) {
    const LampSoundEffect = useLampSound();

    return (
        <a
            onMouseEnter={LampSoundEffect}
            target="_blank"
            href={data.href}
            className={`${className} hidden md:block`}
        >
            <div className="light-button">
                <button className="bt">
                    <div className="light-holder">
                        <div className="light"></div>
                    </div>
                    <div className="button-holder  dark:bg-slate-800">
                        {data.icon}
                        <p>{data.title}</p>
                    </div>
                </button>
            </div>
        </a>
    );
}

function SocialMediaContact() {
    return (
        <div className="flex gap-3 flex-col md:flex-row">
            {socialMediaData.map((data, i) => {
                const classAny = `my-contact-social-${i}`;
                const arrayOrign = ["top", "left", "right", "bottom"];
                const randomElementOrign =
                    arrayOrign[Math.floor(Math.random() * arrayOrign.length)];

                useEffect(() => {
                    ScrollReveal().reveal(`.${classAny}`, {
                        duration: 800 + i * 30,
                        delay: 200,
                        distance: "60px",
                        origin: randomElementOrign,
                        easing: "ease-out",
                    });
                }, []);

                return (
                    <>
                        <SocialMediaContactItem
                            key={uuidv4()}
                            className={classAny}
                            data={data}
                        />
                    </>
                );
            })}
        </div>
    );
}

export default SocialMediaContact;
