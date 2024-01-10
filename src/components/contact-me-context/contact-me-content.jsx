import { useSelector } from "react-redux";
import SocialMediaContact from "./social-media-contact";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { HiMiniPhone } from "react-icons/hi2";
import SocialMediaContactMobile from "./social-media-contact-mobile";
function ContactMeContent() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        ScrollReveal().reveal(`.contact-me-title`, {
            duration: 1000,
            delay: 200,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
        });
        ScrollReveal().reveal(`.contact-me-phone`, {
            duration: 1000,
            delay: 1000,
            distance: "20px",
            origin: "top",
            easing: "ease-out",
        });
    }, []);
    return (
        <div>
            <h1
                className={`contact-me-title dark:text-white text-4xl md:text-5xl font-medium mb-3 text-[#181435]`}
            >
                {language ? (
                    <span>
                        Men bilan <br /> bog'laning
                    </span>
                ) : (
                    <span>Contact Me</span>
                )}
            </h1>
            <div className="contact-me-phone mb-2">
                <a
                    href="tel:+998-91-201-20-21"
                    className="flex gap-2 p-2 border dark:border-none rounded-lg hover:scale-[1.05] duration-200 dark:bg-gray-800 dark:text-white"
                >
                    <HiMiniPhone className="w-6 h-6" />
                    <p>+998-91-201-20-21</p>
                </a>
            </div>
            <SocialMediaContact />
        </div>
    );
}

export default ContactMeContent;
