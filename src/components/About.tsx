import { useState } from "react";
import { motion } from "framer-motion";
import GeneralInfoAboutMe from "./GeneralInfoAboutMe";
import Education from "./Education";
import TechSkills from "./TechSkills";
import { useInView } from 'react-intersection-observer';

function About() {
    const buttonList = ["General Information", "Education", "Tech Stack"];
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    // Intersection Observer hook for scroll-triggered animations
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Trigger when 30% of the component is in view
    });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about"
            style={{ background: "linear-gradient(to bottom, #873434, #146a9fad)" }}
            className="w-[100%] h-[100%] pb-[200px] pt-[30px] md:pt-[70px]"
        >
            <div className="container">
                <div className="flex justify-center">
                    <div
                        style={{ background: "rgb(0 0 0 / 0.1)" }}
                        className="bg-opacity-10 mt-[50px] *:text-white px-[10px] flex-col sm:flex-row w-[100%] gap-5 rounded-[8px] sm:px-[20px] py-[20px] flex sm:gap-7 items-center max-w-[500px] justify-center"
                    >
                        {buttonList.map((item, i) => (
                            <button
                                className={`${activeButtonIndex === i && "underline underline-offset-4"}`}
                                key={i}
                                onClick={() => setActiveButtonIndex(i)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll-triggered vertical animation */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
            >
                {activeButtonIndex === 0 ? (
                    <GeneralInfoAboutMe />
                ) : activeButtonIndex === 1 ? (
                    <Education />
                ) : (
                    <TechSkills />
                )}
            </motion.div>
        </section>
    );
}

export default About;
