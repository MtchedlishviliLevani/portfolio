import BgImage from "../assets/Frame 3.png"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen({ isOpenScreenLoad }: { isOpenScreenLoad: boolean }) {
    return (
        <AnimatePresence>
            {isOpenScreenLoad &&
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: .5, }}
                    exit={{ y: "100%", transition: { duration: 0.3 } }}

                    className='w-full h-screen bg-loadedScreenBgColor flex justify-center items-center  '
                >
                    <motion.img exit={{ y: "100%", transition: { duration: 0.3 } }}
                        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} src={BgImage} className='w-[300px] ' alt="loading-screen-image" />

                </motion.div>}
        </AnimatePresence>
    )
}
