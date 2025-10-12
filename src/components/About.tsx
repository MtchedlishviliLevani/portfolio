import { forwardRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import GeneralInfoAboutMe from "./GeneralInfoAboutMe";
import Education from "./Education";
import TechSkills from "./TechSkills";
import { useInView } from 'react-intersection-observer';
import data from "../data/data.json"
import WorkingExperience from "./WorikingExperience";

// Define the type for the ref
type AboutProps = React.HTMLProps<HTMLDivElement>;
const About = forwardRef<HTMLElement, AboutProps>((_, ref) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const handleActiveButton = useCallback((i: number) => {
        setActiveButtonIndex(i);
    }, []);


    // Intersection Observer hook for scroll-triggered animations
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Trigger when 30% of the component is in view
    });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    // handle ref
    const handleRef = (node: HTMLElement | null) => {
        inViewRef(node); // Attach inViewRef to the node
        if (ref) {
            if (typeof ref === "function") {
                ref(node); // Call function ref
            } else {
                ref.current = node; // Assign to object ref
            }
        }
    };

    return (
        <section id="about" ref={ref}
            style={{ background: "linear-gradient(to bottom, #873434, #146a9fad)" }}
            className="w-[100%] h-[100%] pb-[200px] pt-[30px] md:pt-[70px]"
        >
            <div className="container">
                <div className="">
                    <div className="flex justify-center">
                        <div
                            style={{ background: "rgb(0 0 0 / 0.1)" }}
                            className="bg-opacity-10 mt-[50px] *:text-white px-[10px] flex-col sm:flex-row w-[100%] gap-5 rounded-[8px] sm:px-[20px] py-[20px] flex sm:gap-7 items-center max-w-[600px] justify-center"
                        >
                            {data.about.buttonList.map((item, i) => (
                                <button
                                    className={`${activeButtonIndex === i && "underline underline-offset-4"} text-[12px] md:text-[16px]`}
                                    key={i}
                                    onClick={() => handleActiveButton(i)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    ref={handleRef}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants}
                    transition={{ duration: 0.3 }}
                >
                    {activeButtonIndex===0?<GeneralInfoAboutMe/>:activeButtonIndex===1?<WorkingExperience/>:activeButtonIndex===2?<Education/>:<TechSkills/>}
                </motion.div>
            </div>
        </section>
    );
})

export default About;
