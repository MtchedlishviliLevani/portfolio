import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface Items {
    description?: string;
    id?: string;
    imageSrc: string;
    techIcons?: string[];
    title?: string;
    link?: string;
}
function ProjectCard({ item }: { item: Items }) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })


    return (
        <motion.div

            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-[#2f114d78] sm:max-w-[400px] md:max-w-[initial] rounded-lg h-[100%] relative"
        >
            <div className="relative group">
                <img loading='lazy'
                    className="rounded-t-lg cursor-pointer w-full h-[200px] "
                    src={item?.imageSrc}
                    alt="project-img"
                />
                <div className="absolute cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-lg"></div>
                <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-50 text-white flex justify-center gap-4 cursor-pointer">
                    {/* <img loading='lazy'
                        src="/tailwindIcon.png"
                        className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                        alt="tailwind-icon"
                    />
                    <img loading='lazy'
                        src="/logos_react.png"
                        className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                        alt="react-icon"
                    />
                    <img loading='lazy'
                        src="/framer-motion-logo.png"
                        className="w-[40px] h-[40px] hidden group-hover:block transition-opacity duration-300"
                        alt="framer-motion-icon"
                    /> */}
                </div>
            </div>
            <div className="px-[20px] py-[40px]">
                <h2 className="text-center text-[#1bbca9] sm:mt-[15px] xl:mt-[40px] text-[16px] sm:[18px] md:text-[24px] font-bold group-hover:text-red-400 px-[10px]">
                    {item?.title}
                </h2>
                <div className="flex gap-[20px] items-center mt-[10px] xl:mt-[20px] container justify-center">
                    <button className="text-white text-[16px] sm:[18px] md:text-[24px]">
                        <a href={item?.link} target='_blank'>See Live</a>
                    </button>
                    <img loading='lazy'
                        className="w-[30px] md:w-[40px] cursor-pointer"
                        src="/icons_github-fill.png"
                        alt="github-icon"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
