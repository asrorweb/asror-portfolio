import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { v4 as uuidv4 } from "uuid";
import "./navigation.css";
import { useButtonClickSound } from "../../ui";
import { FloatingDock } from "../../ui/acaternity-ui/floating-dock";

function Navigation() {
  const ClickSoundMouseEffect = useButtonClickSound();

  return (
    <div className="fixed z-50 bottom-4 sm:bottom-6 left-[4%] right-[4%] sm:left-[10%] sm:right-[10%] flex items-center justify-around">
    <FloatingDock items={routes}/>
     <div className="glasses-effect rounded-2xl md:hidden fixed z-50 bottom-4 sm:bottom-6 left-[4%] right-[4%] sm:left-[10%] sm:right-[10%] py-5">
      <ul className="flex items-center justify-around">
        
        {routes.map((data) => {
          return (
            <li
              onClick={ClickSoundMouseEffect}
              key={uuidv4()}
              className="text-base text-[#263238] dark:text-[#111111bd]  hover:scale-105 duration-200"
            >
              <NavLink to={data.path} className={`flex items-center gap-2`}>
                <div>{data.icon}</div>
                <p className="capitalize hidden sm:block">{data.name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
   
  );
}

export default Navigation;
