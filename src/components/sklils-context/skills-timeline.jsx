import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { iconsLangData } from "../../data/data-icons";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
function SkillsTimeline() {
    const { language } = useSelector((state) => state.language);
    return (
        <div className="max-w-2xl overflow-hidden p-4">
            <Timeline className="">
                {iconsLangData.map((data, i) => {
                    const classAny = `my-timeline-skills-${i}`;

                    useEffect(() => {
                        ScrollReveal().reveal(`.${classAny}`, {
                            duration: 400 + i * 100,
                            delay: 100,
                            distance: "40px",
                            origin: i % 2 == 0 ? "right" : "left",
                            easing: "ease-out",
                            reset: true,
                        });
                    }, []);

                    return (
                        <TimelineItem className={classAny} key={uuidv4()}>
                            {iconsLangData.length - 1 !== i && (
                                <TimelineConnector className="timeline" />
                            )}
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-gray-700 dark:bg-white">
                                    <img
                                        src={data.icon}
                                        alt={data.title}
                                        className="w-4 h-4"
                                    />
                                </TimelineIcon>
                                <Typography
                                    variant="h6"
                                    className="dark:text-white capitalize"
                                >
                                    {language
                                        ? `${data.title}-${data.dataUz} `
                                        : `${data.title}-${data.dataEng}`}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600 dark:text-gray-400"
                                >
                                    {language ? data.descUz : data.descEng}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );
}

export default SkillsTimeline;
