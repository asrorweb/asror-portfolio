import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ScrollReveal from "scrollreveal";
import { v4 as uuidv4 } from "uuid";
import "./about.css";

function AboutTimeline() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        // Basic configuration for ScrollReveal
        ScrollReveal().reveal(".my-timeline", {
            duration: 1000,
            delay: 200,
            distance: "200px",
            origin: "left",
            easing: "ease-out",
            reset: true,
        });
    }, []);

    const data = [
        {
            titleuz: "TATU FF  (2020-2024)",
            titleeng: "TATU FF  (2020-2024)",
            descuz: "2020-yil Tatu Farg'ona filiali ga 179.5 bal bilan grant ga kirdim yo'nalishim dasturiy injinering",
            deseng: "In 2020, I entered the grant at Tatu Fergana branch with 179.5 points, my field is software engineering",
        },
        {
            titleuz: "Najot Ta'lim - (Yanvar-May) 2023",
            titleeng: "Najot Ta'lim - (January-May) 2023",
            descuz: "2023 - yil Yanvar oyida Najot Ta'imning Full stack kursida o'qishni boshladim va frontend qismidan html dan React js boshlang'ich kunikmalargacha o'gandik va kursning 2-qismi yanni backend qismini o'qimaslikga qaror qildim",
            deseng: "In January 2023, I started studying Najot Ta'im's Full stack course and we learned from the frontend part, from html to React js basic skills, and I decided not to study the backend part, the 2nd part of the course",
        },
        {
            titleuz: "Kutilmoqda...",
            titleeng: "Waiting...",
            descuz: "Kutilmoqda...",
            deseng: "Waiting...",
        },
    ];

    return (
        <div id="myabouttimeline" className="max-w-4xl mx-auto pb-20">
            <Timeline>
                {data.map((info, i) => (
                    <TimelineItem key={uuidv4()} className="my-timeline">
                        {data.length - 1 !== i && (
                            <TimelineConnector className="timeline" />
                        )}
                        <TimelineHeader className="h-3">
                            <TimelineIcon className="dark:bg-white" />
                            <Typography
                                variant="h6"
                                className="dark:text-white"
                            >
                                {language ? info.titleuz : info.titleeng}
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography
                                variant="small"
                                className="font-normal text-gray-600 dark:text-gray-400"
                            >
                                {language ? info.descuz : info.deseng}
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}

export default AboutTimeline;
