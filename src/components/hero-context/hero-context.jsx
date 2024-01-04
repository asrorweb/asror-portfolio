import { useSelector } from "react-redux";
import { AnimationTextMotion } from "../../ui";
import { Button } from "@material-tailwind/react";
import "./hero-contex.css";
import pdfCv from "../../assets/asror_turdaliyev_CV.pdf";
import ScrollReveal from "scrollreveal";
import { useEffect, useRef } from "react";

function HeroContext() {
    const { language } = useSelector((state) => state.language);

    const text1 = language
            ? "Salom,1Men Asror,1web dasturchi".split("")
            : "Hi,1I'm Asror,1web developer".split(""),
        text2 = "Frontend developer".split("");

    const handleDownload = () => {
        const fileUrl = pdfCv;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = pdfCv;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative md:static z-10">
            <h1 className="text-5xl  sm:text-7xl font-medium mb-2 dark:text-white">
                {text1.map((letter, i) => {
                    const classAny = `my-title-${i}`;
                    const arrayOrign = ["top", "left", "right", "bottom"];
                    const randomElementOrign =
                        arrayOrign[
                            Math.floor(Math.random() * arrayOrign.length)
                        ];
                    useEffect(() => {
                        ScrollReveal().reveal(`.${classAny}`, {
                            duration: 400 + i * 30,
                            delay: 200,
                            distance: "60px",
                            origin: randomElementOrign,
                            easing: "ease-out",
                        });
                    }, []);
                    return letter == "1" ? (
                        <br key={i} />
                    ) : letter == "A" ? (
                        <AnimationTextMotion
                            key={i}
                            className={`${classAny} text-blue-500 my-hero-element text-6xl sm:text-[80px]`}
                        >
                            {letter}
                        </AnimationTextMotion>
                    ) : (
                        <AnimationTextMotion key={i} className={`${classAny}`}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimationTextMotion>
                    );
                })}

                <br />
            </h1>
            <p className="text-base text-slate-600 mb-3">
                {text2.map((letter, i) => {
                    const classAny = `my-title-${i}-${letter}`;
                    const arrayOrign = ["top", "left", "right", "bottom"];
                    const randomElementOrign =
                        arrayOrign[
                            Math.floor(Math.random() * arrayOrign.length)
                        ];

                    useEffect(() => {
                        ScrollReveal().reveal(`.${classAny}`, {
                            duration: 20 + i * 40,
                            delay: 200,
                            distance: "60px",
                            origin: randomElementOrign,
                            easing: "ease-out",
                        });
                    }, []);
                    return (
                        <AnimationTextMotion className={classAny} key={i}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimationTextMotion>
                    );
                })}
            </p>
            <Button
                onClick={handleDownload}
                className="ui-btn  bg-blue-600 hover:bg-blue-600"
            >
                <span className="hover:bg-blue-600">Download CV</span>
            </Button>
        </div>
    );
}

export default HeroContext;
