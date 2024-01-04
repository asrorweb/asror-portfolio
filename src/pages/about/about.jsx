import RullerMatter from "../../matter/ruller-matter";
import { AboutContext, AboutTimeline } from "../../components";
import { ScrolMeAnimation } from "../../ui";

function About() {
    return (
        <>
            <ScrolMeAnimation />
            <div className="my-container">
                <div className="flex min-h-screen relative flex-col md:flex-row justify-start md:justify-between items-center">
                    <AboutContext />
                    <RullerMatter />
                </div>
                <AboutTimeline />
            </div>
        </>
    );
}

export default About;
