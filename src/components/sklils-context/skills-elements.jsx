import { useEffect } from "react";
import { iconsLangData } from "../../data/data-icons";
import { CardTildEff } from "../../ui";
import useLampSound from "../../ui/sound-effects/lamp-sound-effects";
import ScrollReveal from "scrollreveal";
import "../../ui/tild/card-tild-eff.css";
import { v4 as uuidv4 } from "uuid";

function SkillsElements() {
    const LampSoundEffect = useLampSound();

    const handleMouseMove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    useEffect(() => {
        ScrollReveal().reveal(`.my-skills-element`, {
            duration: 1000,
            delay: 200,
            distance: "40px",
            origin: "bottom",
            easing: "ease-out",
            reset: true,
        });
    }, []);

    return (
        <div className="sticky top-1/4 hidden lg:block">
            <div
                id="cards"
                onMouseMove={handleMouseMove}
                onMouseEnter={LampSoundEffect}
                className="my-skills-element grid grid-cols-4 gap-2 "
            >
                {iconsLangData.map((data) => {
                    return (
                        <CardTildEff
                            key={uuidv4()}
                            title={data.title}
                            img={data.icon}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsElements;
