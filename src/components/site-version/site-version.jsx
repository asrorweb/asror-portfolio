import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
("use client");
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../ui/acaternity-ui/lamp";

function SiteVersion() {
  const { language } = useSelector((state) => state.language);

  return (
    <div
      className={`ml-[64px] sm:ml-[230px] dark:text-gray-200 md:min-h-screen  md:p-0`}
    >
      <LampContainer className="hidden md:flex">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <Typography
            variant="paragraph"
            className="text-6xl md:text-9xl font-semibold"
          >
            1.2.1
          </Typography>
          <Typography
            variant="small"
            className="md:text-right text-gray-500 tracking-normal"
          >
            {language
              ? "Oxirgi yangilanish - 29.02.2024"
              : " Latest update - 29.02.2024"}
          </Typography>
        </motion.h1>
      </LampContainer>
      <div className="md:hidden pl-4 pt-4">
        <Typography variant="h1" className="text-6xl md:text-9xl">
          1.2.1
        </Typography>
        <Typography variant="small" className="md:text-right text-gray-500">
          {language
            ? "Oxirgi yangilanish - 29.02.2024"
            : " Latest update - 29.02.2024"}
        </Typography>
      </div>
    </div>
  );
}

export default SiteVersion;
