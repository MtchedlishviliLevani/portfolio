import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "../data/data.json"

function HomePageContent() {
    const [h1Finished, setH1Finished] = useState(false);
    const ref = useRef(null);
    const ref2 = useRef(null)
    const isInView = useInView(ref, { once: true });
    return (
        <div className="py-[40px]  md:mt-[40px]">
            <h1
                ref={ref}
                className="text-[20px] md:text-[32px] font-bold text-center md:text-left leading-[135%] text-white "
            >
                {data.home.introduction.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                        onAnimationComplete={() => {
                            if (index === data.home.introduction.length - 1) {
                                setH1Finished(true); // Trigger H2 animation after last letter
                            }
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}

            </h1>
            <h2 ref={ref2} className="text-[18px] md:text-[32px] font-bold text-center md:text-left  leading-[135%] text-[#FF6F61] my-[10px] md:my-[25px]">

                {data.home.role.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={h1Finished ? { opacity: 1 } : {}}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h2>
            <div>
                <p className="text-white text-center text-[12px] md:text-[20px] md:text-left md:max-w-[700px]">
                    {data.home.experience}
                </p>

            </div>
            <div className="my-[40px] sm:my-[60px]">
                <a rel="stylesheet" href="/Levan Mtchedlishvili CV.pdf" download="Levan Mtchedlishvili's CV" >  <button className="w-[100%] text-[14px] md:w-[initial] md:px-7 py-4  md:text-[24px] bg-[#FF6F61] text-white rounded-[8px] hover:shadow-lg hover:hover:bg-[#FF8976]">
                    Download CV
                </button>
                </a>
            </div>
        </div>
    );
}

export default HomePageContent;
