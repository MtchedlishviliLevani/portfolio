import { forwardRef, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Header from './Header'
import { AnimatePresence } from 'framer-motion'
import HomePageContent from './HomePageContent'
import { debounce } from 'lodash'
import { motion } from 'framer-motion'
import { appStateContext } from '../helper/createContext'
import { HomePageProps } from '../types'

const HomePage = forwardRef<HTMLElement, HomePageProps>(({ activeSection, setActiveSection }, ref) => {
    const [headerBg, setHeaderBg] = useState("transparent");
    const [scrollY, setScrollY] = useState(0)
    const myContext = useContext(appStateContext)
    // Define the debounced function once
    const debouncedSetScrollY = useMemo(
        () =>
            debounce((value) => {
                setScrollY(value);
            }, 100),
        []
    );

    const handleScroll = useCallback(() => {
        debouncedSetScrollY(window.scrollY);
    }, [debouncedSetScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log("target1")
        return () => {
            window.removeEventListener("scroll", handleScroll);
            debouncedSetScrollY.cancel(); // Cancel pending calls on unmount
        };
    }, [handleScroll, debouncedSetScrollY]);

    useEffect(() => {
        console.log("target1")

        if (myContext?.isInnerWidthMore768 && scrollY > 80) {
            setHeaderBg("#000"); // Dark background when scrolling down on large screens
        } else if (!myContext?.isInnerWidthMore768) {
            setHeaderBg(myContext?.isOpenNavigation ? "transparent" : "#16222E");
        } else {
            setHeaderBg("transparent");
        }
    }, [scrollY, myContext?.isInnerWidthMore768, myContext?.isOpenNavigation]);

    const boxVariants = {
        hidden: { opacity: 0, left: "-100%" },
        visible: { opacity: 1, left: "0%" },
    };
    return (
        <section id='home' ref={ref}>

            <motion.div
                variants={boxVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 2, ease: "easeInOut" }}

                style={{ "background": headerBg }}
                className={`fixed   top-0 h-[82px] md:h-[initial]  z-[999] w-[100%]  `}
            >
                <div

                    className="container"
                >
                    <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                </div>

            </motion.div>
            <div
                className="w-[100%] h-[100vh]  relative top-0 z-40 font-jura bg-[image:var(--bg-mobile)]  md:bg-[image:var(--bg-desktop)]"
                style={{ "--bg-desktop": "url(/home-cover.jpg)", "--bg-mobile": "url(/home-cover-small.png)", backgroundSize: "cover", } as React.CSSProperties}
            >
                <div className="flex flex-col">
                    <AnimatePresence>

                        <motion.div

                            className="pt-[150px] md:pt-[100px] container"
                        >
                            <div className="">
                                <HomePageContent />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section >
    )
})

export default HomePage
