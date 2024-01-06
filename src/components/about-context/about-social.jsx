import { FaTelegram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./about.css";
function AboutSocial() {
    return (
        <span className="glasses-effect dark:bg-[#1E293B] px-3 py-2 rounded-xl flex gap-3 shadow-2xl">
            <a
                target="_blank"
                href="https://www.linkedin.com/in/asrorbek-turdaliyev-379160279?trk=contact-info"
                className="instagram-icon hover:opacity-80 text-[#0077B5] dark:text-white"
            >
                <FaLinkedin className="w-6 h-6" />
            </a>
            <a
                target="_blank"
                href="https://t.me/asror_web"
                className="text-[#24A1DE] hover:opacity-80 dark:text-white"
            >
                <FaTelegram className="w-6 h-6" />
            </a>
            <a
                target="_blank"
                href="https://www.facebook.com/asror.turdaliyev.77/"
                className="text-[#1877F2] hover:opacity-80 dark:text-white"
            >
                <FaFacebook className="w-6 h-6" />
            </a>
        </span>
    );
}

export default AboutSocial;
