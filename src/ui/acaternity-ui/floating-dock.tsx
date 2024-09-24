/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../../utils/cn";
import React from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import useButtonClickSound from "../sound-effects/click-sound-effect";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { name: string; icon: React.ReactNode; path: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};



const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { name: string; icon: React.ReactNode; path: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl glasses-effect dark:bg-[#272a6c]  px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.name} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  name,
  icon,
  path,
}: {
  mouseX: MotionValue;
  name: string;
  icon: React.ReactNode;
  path: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width ;
  });

  let widthTransform = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [50, 60, 50]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [50, 60, 50]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const ClickSoundMouseEffect = useButtonClickSound();


  return (
    <NavLink to={path} onClick={ClickSoundMouseEffect}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-300 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:glasses-effect dark:bg-blue-900 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </NavLink>
  );
}
