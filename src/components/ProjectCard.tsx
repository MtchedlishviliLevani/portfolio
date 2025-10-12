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
            className=""
        >


            <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 group">
                <div className='h-1/2 overflow-hidden relative  rounded-t-lg'>
                    <img className="rounded-t-lg h-[200px] w-full transition-transform duration-300 group-hover:scale-105" src={item.imageSrc} alt="" />
                    {/* Hover Overlay with Tech Icons */}
                    <div className="absolute cursor-pointer inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                            {item?.techIcons?.map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    alt="Tech icon"
                                    className="w-9 h-9 object-contain filter invert brightness-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    
                        <h5 className="mb-2 text-[20px] md:text-2xl font-bold tracking-tight  text-white">{item.title}</h5>
                   
                    <p className="mb-3 line-clamp-3 md:line-clamp-none font-normal text-gray-400">{item.description}</p>
                    <div className='flex justify-between mt-6'>
                        <a href={item.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                            Live Demo
                            <svg className="rotate-[-30deg] w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href={item.repository} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[brown] rounded-lg">
                            Repository
                            <svg className="rotate-[-30deg] w-3.5 h-3.5 ms-2 left-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </motion.div>
    )
}

export default ProjectCard
