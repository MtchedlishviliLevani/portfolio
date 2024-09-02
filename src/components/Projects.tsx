import { useInView } from "react-intersection-observer";
import dataJson from "../data/data.json";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function Projects() {
    return (
        <section
            id="projects"
            style={{
                background:
                    "linear-gradient(rgba(20, 106, 159, 0.68), rgb(135, 52, 52))",
            }}
            className="w-[100%] min-h-[100vh] h-[100%]"
        >
            <div className="container">
                <div className="py-[30px]">
                    <h2 className="text-[48px] text-white text-center ">Projects</h2>
                </div>
                <div className="grid lg:gap-[50px] gap-[20px] sm:justify-center sm:gap-[30px] xl:grid-cols-3 md:grid-cols-2 ">
                    {dataJson.projects.map((item, i) => {
                        const { ref, inView } = useInView({
                            triggerOnce: true, // Trigger animation only once
                            threshold: 0.2, // Trigger when 20% of the card is in view
                        });

                        return (
                            <motion.div
                                key={i}
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }} // Start animation with opacity 0 and y position 50px below
                                animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0 when in view
                                transition={{ duration: 0.6, ease: "easeOut" }} // Set animation duration and easing
                                className="bg-[#2f114d78] sm:max-w-[400px] md:max-w-[initial] rounded-lg h-[100%] relative"
                            >
                                <div className="relative group">
                                    <img
                                        className="rounded-t-lg cursor-pointer w-full h-[200px]"
                                        src={item.imageSrc}
                                        alt="project-img"
                                    />
                                    <div className="absolute cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-lg"></div>
                                    <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-50 text-white flex justify-center gap-4 cursor-pointer">
                                        <img
                                            src="/tailwindIcon.png"
                                            className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                                            alt="tailwind-icon"
                                        />
                                        <img
                                            src="/logos_react.png"
                                            className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                                            alt="react-icon"
                                        />
                                        <img
                                            src="/framer-motion-logo.png"
                                            className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                                            alt="framer-motion-icon"
                                        />
                                    </div>
                                </div>
                                <div className="px-[20px] py-[40px]">
                                    <h2 className="text-center text-[#1bbca9] sm:mt-[15px] xl:mt-[40px] text-[16px] sm:[18px] md:text-[24px] font-bold group-hover:text-red-400 px-[10px]">
                                        {item.title}
                                    </h2>
                                    <div className="flex gap-[20px] items-center mt-[10px] xl:mt-[20px] container justify-center">
                                        <button className="text-white text-[16px] sm:[18px] md:text-[24px]">
                                            See Live
                                        </button>
                                        <img
                                            className="w-[30px] md:w-[40px] cursor-pointer"
                                            src="/icons_github-fill.png"
                                            alt="github-icon"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <div></div>
                <a
                    target="_blank"
                    href="https://github.com/MtchedlishviliLevani"
                    className="text-center block text-[#FFF] mt-[50px] sm:text-[18px] md:text-[24px]"
                >
                    SEE MORE
                </a>
            </div>
        </section>
    );
}

export default Projects;
