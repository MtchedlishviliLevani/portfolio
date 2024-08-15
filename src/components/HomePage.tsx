import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { AnimatePresence } from 'framer-motion'
import HomePageContent from './HomePageContent'
import { appStateContext } from '../helper/createContext'

const mainContentVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.3 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 1.0 } },
};
function HomePage({ isInnerWidthMore768 }: { isInnerWidthMore768: boolean | null }) {
    const [headerBg, setHeaderBg] = useState("transparent");
    const handleScroll = () => {
        if (window.scrollY > 120) {
            setHeaderBg("#1e3a8a");
        } else {
            setHeaderBg("transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const myContext = useContext(appStateContext)
    return (
        <>
            <div
                style={{ background: headerBg }}
                className="fixed   top-0 h-[82px] md:h-[initial] z-50 w-[100%]  "
            >
                <motion.div
                    initial={{ x: "300%" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0, duration: 1.3 }}
                    className="container "
                >
                    <Header isInnerWidthMore768={isInnerWidthMore768} />
                </motion.div>
            </div>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ delay: 0, duration: 1.3 }}
                id="home"
                className="w-[100%] h-[100vh]  relative top-0 z-40 font-jura"
                style={{
                    backgroundImage: "url(/home-cover.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex flex-col">
                    <AnimatePresence>
                        {(!myContext?.isHiddenNavigation || isInnerWidthMore768) && (
                            <motion.div
                                variants={mainContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="pt-[150px] md:pt-[100px]"
                            >
                                <div className="container">
                                    <HomePageContent />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    )
}

export default HomePage
