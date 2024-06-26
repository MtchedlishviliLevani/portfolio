import BgImage from '/Frame 3.png'
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen({ isOpenScreenLoad }: { isOpenScreenLoad: boolean }) {
    return (
        <AnimatePresence>
            {isOpenScreenLoad &&
                <motion.div
                    initial={{ y: -1500 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .5 }}
                    exit={{ y: 1500, transition: { duration: 1 } }}

                    className='w-full h-screen bg-loadedScreenBgColor flex justify-center items-center '
                >
                    <motion.img initial={{ y: -1500 }} animate={{ y: 0 }} transition={{ duration: 1 }} src={BgImage} className='w-[300px] ' alt="" />

                </motion.div>}
        </AnimatePresence>
    )
}
