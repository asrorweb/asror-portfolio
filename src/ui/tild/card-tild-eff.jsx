import { Tilt } from "react-tilt";
import "./card-tild-eff.css";
import { useSelector } from "react-redux";

function CardTildEff({ title, img }) {
    const { dark } = useSelector((state) => state.dark);
    const color = {
        "--mouse-color": `${dark ? "#2564eb76" : "#43434364"}`,
    };

    return (
        <Tilt
            style={color}
            className={`Tilt card glasses-effect  dark:bg-slate-800 h-auto  w-full rounded-lg cursor-pointer  p-2`}
            options={{ max: 50 }}
        >
            <div className="card-content flex flex-col gap-2 justify-center items-center z-[2]">
                <div className="w-[80%]">
                    <img className="w-full" src={img} alt={title} />
                </div>
                <div className="card-info-title">
                    <h3 className="capitalize font-light text-gray-700  dark:text-gray-400">
                        {title}
                    </h3>
                </div>
            </div>
        </Tilt>
    );
}

export default CardTildEff;
