import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useSelector } from "react-redux";
import AboutSocial from "./about-social";

function AboutContext() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        // Basic configuration for ScrollReveal
        ScrollReveal().reveal(".my-element", {
            duration: 1000,
            delay: 200,
            distance: "20px",
            origin: "bottom",
            easing: "ease-out",
            reset: true,
        });
        ScrollReveal().reveal(".my-element1", {
            duration: 1000,
            delay: 400,
            distance: "40px",
            origin: "bottom",
            easing: "ease-out",
            reset: true,
        });
    }, []);

    return (
        <div className="max-w-md">
            <h1 className="my-element text-4xl pt-3 md:p-0 md:text-6xl text-gray-700 dark:text-white font-medium mb-3">
                {language ? "Men haqimda" : "About Me"}
            </h1>
            <p className="my-element1 text-[17px] tracking-wide leading-relaxed text-gray-700 dark:text-white">
                {language ? (
                    <span>
                        Salom, mening ismim
                        <span className="text-blue-600 group/soc relative ml-1 font-medium mr-1 text-[18px] cursor-pointer">
                            Asror Turdaliyev
                            <span className="absolute group-hover/soc:visible transition hidden md:block duration-1000 invisible bottom-full left-12">
                                <AboutSocial />
                            </span>
                        </span>
                        va men frontend dasturchiman, Uzbekistonning Farg'ona
                        viloyatidanman, yoshim 22 da qolgan malumotlarni
                        <a
                            href="https://github.com/asrorweb"
                            target="_blank"
                            className="text-blue-600 font-medium ml-1 mr-1 text-[18px] cursor-pointer"
                        >
                            github
                        </a>
                        sahifam va quyidan olishingiz mumkin
                    </span>
                ) : (
                    <span>
                        Hello, my name is
                        <span className="text-blue-600 group/soc relative font-medium ml-1 mr-1 duration-1000 text-[18px] cursor-pointer">
                            Asror Turdaliyev
                            <span className="absolute group-hover/soc:visible transition hidden md:block duration-1000 invisible bottom-full left-12">
                                <AboutSocial />
                            </span>
                        </span>
                        and I am a frontend developer, I am from Fergana
                        Uzbekistan, I am 22 years old, you can get the remaining
                        information from my
                        <a
                            href="https://github.com/asrorweb"
                            target="_blank"
                            className="text-blue-600 font-medium ml-1 mr-1 text-[18px] cursor-pointer"
                        >
                            github
                        </a>
                        page and below
                    </span>
                )}
            </p>
        </div>
    );
}

export default AboutContext;
