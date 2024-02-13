import { NavLink } from "react-router-dom";
import { routes_settings } from "../../../routes";
import { v4 as uuidv4 } from "uuid";
import { useButtonClickSound } from "../../../ui";
import { useSelector } from "react-redux";
import { SiteVersion } from "../../../components";

function NavigationSettings() {
    const { language } = useSelector((state) => state.language);
    const ClickSoundMouseEffect = useButtonClickSound();

    return (
        <div className="sm:w-[230px] pl-3 fixed top-0 pt-8 pr-3 bottom-0 bg-slate-100 dark:bg-[#1e2049] flex flex-col gap-3">
            <SiteVersion />
            {routes_settings.map((page) => {
                return (
                    <NavLink
                        onClick={ClickSoundMouseEffect}
                        key={uuidv4()}
                        to={page.path}
                        className={
                            "settings-navigation-active p-1 sm:py-1 sm:pl-2 hover:bg-[#2564eb2c] rounded-lg flex gap-2 items-center"
                        }
                    >
                        <div
                            className={`shadow-xl text-white rounded-lg p-1`}
                            style={{ backgroundColor: page.color }}
                        >
                            {page.icon}
                        </div>
                        <p className="capitalize hidden sm:block dark:text-white">
                            {language ? page.nameuz : page.name}
                        </p>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavigationSettings;
