import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Items } from '../types'
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
            className="bg-[#2f114d78] group cursor-pointer  sm:max-w-[400px] md:max-w-[initial] rounded-lg h-[100%] relative"
        >
            <div className="relative group">
                <img loading='lazy'
                    className="rounded-t-lg cursor-pointer w-full h-[200px] "
                    src={item?.imageSrc}
                    alt="project-img"
                />
                <div className="absolute cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-40  transition-opacity duration-300 rounded-t-lg"></div>
                <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-50 text-white  justify-center gap-4 cursor-pointer flex opacity-0 transition-all duration-1000 group-hover:opacity-100">
                    {item?.techIcons?.map((icon, index) => (
                        <img key={index} loading='lazy'
                            className="w-[30px] md:w-[40px] cursor-pointer"
                            src={icon}
                            alt="tech-icon"
                        />
                    ))}
                </div>
            </div>
            <div className="px-[20px] py-[40px]">
                <h2 className="text-center text-[#1bbca9] md:mt-[15px] xl:mt-[40px] text-[16px] xsm:text-[13px] md:text-[24px] font-bold  px-[10px]">
                    {item?.title}
                </h2>
                <div className="flex gap-[20px] items-center mt-[10px] xl:mt-[20px]  justify-center">
                    <button className="text-white text-[13px]  md:text-[24px]">
                        <a href={item?.link} target='_blank'>See Live</a>
                    </button>

                    <a href={item.repository}><img loading='lazy'
                        className="w-[30px] md:w-[40px] cursor-pointer"
                        src="/icons_github-fill.png"
                        alt="github-icon"
                    />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
