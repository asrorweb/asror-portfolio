import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { useSelector } from "react-redux";

function RullerMatter() {
    const containerRef = useRef(null);
    const { dark } = useSelector((state) => state.dark);
    useEffect(() => {
        const {
            Engine,
            Render,
            World,
            Vector,
            Events,
            Runner,
            Body,
            Composite,
            Composites,
            Constraint,
            Bodies,
            Mouse,
            MouseConstraint,
        } = Matter;

        // create engine
        var engine = Engine.create(),
            world = engine.world;

        // create renderer
        var render = Render.create({
            element: containerRef.current,
            engine: engine,
            options: {
                width: 600,
                height: 600,
                wireframes: false,
                background: dark ? "#171836" : "#fff",
            },
        });

        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        var group = Body.nextGroup(true),
            length = 200,
            width = 25;

        var pendulum = Composites.stack(
            350,
            160,
            2,
            1,
            -20,
            0,
            function (x, y) {
                return Bodies.rectangle(x, y, length, width, {
                    collisionFilter: { group: group },
                    frictionAir: 0,
                    chamfer: 5,
                    render: {
                        fillStyle: "transparent",
                        lineWidth: 1,
                    },
                });
            }
        );

        engine.gravity.scale = 0.002;

        Composites.chain(pendulum, 0.45, 0, -0.45, 0, {
            stiffness: 0.9,
            length: 0,
            angularStiffness: 0.7,
            render: {
                strokeStyle: "#4a485b",
            },
        });

        Composite.add(
            pendulum,
            Constraint.create({
                bodyB: pendulum.bodies[0],
                pointB: { x: -length * 0.42, y: 0 },
                pointA: {
                    x: pendulum.bodies[0].position.x - length * 0.42,
                    y: pendulum.bodies[0].position.y,
                },
                stiffness: 0.9,
                length: 0,
                render: {
                    strokeStyle: "#4a485b",
                },
            })
        );

        var lowerArm = pendulum.bodies[1];

        Body.rotate(lowerArm, -Math.PI * 0.3, {
            x: lowerArm.position.x - 100,
            y: lowerArm.position.y,
        });

        Composite.add(world, pendulum);

        var trail = [];

        Events.on(render, "afterRender", function () {
            trail.unshift({
                position: Vector.clone(lowerArm.position),
                speed: lowerArm.speed,
            });

            Render.startViewTransform(render);
            render.context.globalAlpha = 0.7;

            for (var i = 0; i < trail.length; i += 1) {
                var point = trail[i].position,
                    speed = trail[i].speed;

                var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
                render.context.fillStyle = "hsl(" + hue + ", 100%, 55%)";
                render.context.fillRect(point.x, point.y, 2, 2);
            }

            render.context.globalAlpha = 1;
            Render.endViewTransform(render);

            if (trail.length > 2000) {
                trail.pop();
            }
        });

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });

        Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 700, y: 600 },
        });

        // context for MatterTools.Demo
        // return {
        //     engine: engine,
        //     runner: runner,
        //     render: render,
        //     canvas: render.canvas,
        //     stop: function () {
        //         Runner.stop(runner);
        //         Render.stop(render);
        //     },
        // };
        return () => {
            World.clear(engine.world);
            Engine.clear(engine);
            Render.stop(render);
        };
    }, []);

    return <div ref={containerRef} />;
}

export default RullerMatter;
