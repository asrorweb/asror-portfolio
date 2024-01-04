import { BsChevronDoubleDown } from "react-icons/bs";
import "./scrol-me.css";
import { useEffect, useState } from "react";
function ScrolMeAnimation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`${
                    scrolled ? "hidden" : "block"
                } fixed bottom-[120px] left-[7%] z-50`}
            >
                <BsChevronDoubleDown className="w-5 h-5 my-scrol-element-for-laptop dark:text-white" />
            </div>
        </>
    );
}

export default ScrolMeAnimation;
