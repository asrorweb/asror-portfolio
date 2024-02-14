import {
    HiHome,
    HiUser,
    HiCommandLine,
    HiBriefcase,
    HiChatBubbleBottomCenterText,
    HiCog8Tooth,
    HiLanguage,
} from "react-icons/hi2";
import { CgDarkMode } from "react-icons/cg";
import { GoUnmute } from "react-icons/go";
import { IoGitBranchOutline } from "react-icons/io5";

// main pages
import { About, ContactMe, Home, Settings, Skills, Works } from "./pages";

// settings pages
import {
    ChangeLanguage,
    MuteSound,
    Thema,
} from "./pages/settings/settings_pages";

// skills pages
import { SiteVersion, SkillsElementInfoPage } from "./components";

const icon = {
    className: "w-6 h-6 sm:w-5 sm:h-5 text-inherit",
};

const icon_settings_navigation = {
    className: "w-6 h-6  text-inherit",
};

export const routes = [
    {
        icon: <HiHome {...icon} />,
        name: "home",
        path: "/",
        color: "#fff",
        element: <Home />,
    },
    {
        icon: <HiUser {...icon} />,
        name: "about",
        path: "/about",
        color: "#ccc",
        element: <About />,
    },
    {
        icon: <HiCommandLine {...icon} />,
        name: "skills",
        path: "/skills",
        color: `#fbf8ec`,
        element: <Skills />,
    },
    {
        icon: <HiBriefcase {...icon} />,
        name: "works",
        path: "/works",
        color: `#fbf8ec`,
        element: <Works />,
    },
    {
        icon: <HiChatBubbleBottomCenterText {...icon} />,
        name: "contact me",
        path: "/contactme",
        color: `#fbf8ec`,
        element: <ContactMe />,
    },
    {
        icon: <HiCog8Tooth {...icon} />,
        name: "settings",
        path: "/settings",
        color: "#ccc",
        element: <Settings />,
    },
];

const classSetingsPage = "ml-[80px] sm:ml-[250px] pt-8 pr-[20px]";

export const routes_settings = [
    {
        icon: <CgDarkMode {...icon_settings_navigation} />,
        name: "thema",
        nameuz: "mavzu",
        path: "/settings/mode",
        color: "#000",
        element: <Thema className={classSetingsPage} />,
    },
    {
        icon: <HiLanguage {...icon_settings_navigation} />,
        name: "language",
        nameuz: "til",
        path: "/settings/language",
        color: "#3b82f6",
        element: <ChangeLanguage className={classSetingsPage} />,
    },
    {
        icon: <GoUnmute {...icon_settings_navigation} />,
        name: "Sound",
        nameuz: "ovoz",
        path: "/settings/sound",
        color: "#DA0C81",
        element: <MuteSound className={classSetingsPage} />,
    },
    {
        icon: <IoGitBranchOutline {...icon_settings_navigation} />,
        name: "Version",
        nameuz: "Versiya",
        path: "/settings/version",
        color: "#38b000",
        element: <SiteVersion className={classSetingsPage} />,
    },
];

export const skills_page = [
    {
        path: "/skills/:id",
        element: <SkillsElementInfoPage />,
    },
];
