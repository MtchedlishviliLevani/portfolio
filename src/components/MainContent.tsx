import { motion } from "framer-motion";

function MainContent() {



    return (
        <main>
            <section className="my-[40px]">
                <motion.h1

                    className="text-[28px] md:text-[32px] font-bold text-center md:text-left leading-[135%] text-white fade-in-left "
                >
                    Hey, I’m Levan Mtchedlishvili
                </motion.h1>
                <h2 className="text-[28px] md:text-[32px] font-bold text-center md:text-left  leading-[135%] text-[#FF6F61] my-[10px] md:my-[25px]">
                    Front-End Developer
                </h2>
                <div>
                    <p className="text-white text-center md:text-[20px] md:text-left md:max-w-[700px]">
                        Hello, I'm a self-taught front-end developer specializing in React, with 2 years of experience. I am passionate about creating innovative web solutions and eager to bring your ideas to life.
                    </p>
                    <p className="text-white text-center md:text-[20px] my-[10px] md:text-left">See more about me</p>
                </div>
                <div className="my-[35px]">
                    <button className="w-[100%] md:w-[initial] md:px-7 py-4 text-[20px] md:text-[24px] bg-[#FF6F61] text-white rounded-[8px]">
                        Download CV
                    </button>
                </div>
                {/* <div className="flex justify-center md:justify-start items-center gap-5 md:gap-10">
                    <img src="/LinkedIn-Blue.png" className="w-[100px] h-[35px]" alt="" />
                    <img src="/github-mark-white.jpg" className="w-[60px] h-[55px]" alt="" />
                </div> */}
            </section>
        </main >
    );
}

export default MainContent;
