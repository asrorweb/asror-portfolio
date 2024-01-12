import Matter from "matter-js";
import { useEffect, useRef } from "react";

import ReactIcon from "../assets/react.svg";
import JsIcon from "../assets/js.svg";
import CssIcon from "../assets/css.svg";
import ScssIcon from "../assets/scss.svg";
import HtmlIcon from "../assets/html.svg";
import ReduxIcon from "../assets/redux.svg";
import TailwindIcon from "../assets/tailwind.svg";
import GithubIcon from "../assets/github.svg";
import { useSelector } from "react-redux";

function IconsMatter() {
    const containerRef = useRef(null);
    const { dark } = useSelector((state) => state.dark);

    useEffect(() => {
        // Matter.js initialization
        const { Engine, Render, World, Bodies, Mouse, MouseConstraint } =
            Matter;
        const engine = Engine.create();

        // Create a renderer
        const render = Render.create({
            element: containerRef.current,
            engine: engine,
            options: {
                width: 600,
                height: 600,
                wireframes: false,
                background: dark ? "#171836" : "#fff",
                isStatic: true,
            },
        });

        // Create a static ground box
        const ground = Bodies.rectangle(400, 600, 800, 15, {
            isStatic: true,
            render: {
                fillStyle: dark ? "#171836" : "#fff",
            },
        });
        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 600, y: 600 },
        });
        // Create dynamic boxes
        const boxA = Bodies.rectangle(400, 200, 80, 80, {
            render: { sprite: { texture: `${ReactIcon}` } },
        });
        const boxB = Bodies.rectangle(330, 250, 80, 80, {
            render: { sprite: { texture: `${JsIcon}` } },
        });
        const boxC = Bodies.rectangle(350, 10, 80, 80, {
            render: { sprite: { texture: `${HtmlIcon}` } },
        });
        const boxD = Bodies.rectangle(360, 100, 80, 80, {
            render: { sprite: { texture: `${ReduxIcon}` } },
        });
        const boxE = Bodies.rectangle(180, 40, 80, 80, {
            render: { sprite: { texture: `${CssIcon}` } },
        });
        const boxF = Bodies.rectangle(220, 200, 80, 80, {
            render: { sprite: { texture: `${GithubIcon}` } },
        });
        const boxG = Bodies.rectangle(300, 150, 80, 80, {
            render: { sprite: { texture: `${ScssIcon}` } },
        });
        const boxH = Bodies.rectangle(410, 140, 80, 80, {
            render: { sprite: { texture: `${TailwindIcon}` } },
        });

        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: { visible: false },
            },
        });
        render.mouse = mouse;

        // Add the box to the world
        World.add(engine.world, [
            ground,
            boxA,
            boxB,
            boxC,
            boxD,
            boxE,
            boxF,
            boxG,
            boxH,
            mouseConstraint,
        ]);

        // Run the engine
        Engine.run(engine);

        // Run the renderer
        Render.run(render);

        // Clean up on unmount
        return () => {
            World.clear(engine.world);
            Engine.clear(engine);
            Render.stop(render);
        };
    }, []);

    return (
        <div
            className="mx-auto md:mx-0 absolute bottom-20 md:relative left-0 right-0"
            ref={containerRef}
        />
    );
}

export default IconsMatter;
