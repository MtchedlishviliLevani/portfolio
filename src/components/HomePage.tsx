import { motion } from 'framer-motion'
import { forwardRef, useContext, useEffect, useState } from 'react'
import Header from './Header'
import { AnimatePresence } from 'framer-motion'
import HomePageContent from './HomePageContent'
import { appStateContext } from '../helper/createContext'
import { throttle } from 'lodash'


interface Props {
    activeSection: string;

}

const HomePage = forwardRef<HTMLElement, Props>(({ activeSection }, ref) => {
    const myContext = useContext(appStateContext)
    const [headerBg, setHeaderBg] = useState(myContext?.isInnerWidthMore768 ? "transparent" : "#000");
    // header fixed when i scroll down

    const handleScroll = throttle(() => {
        if (!myContext?.isInnerWidthMore768 && window.scrollY > 80) {
            setHeaderBg("#000")
        } else {
            setHeaderBg("transparent")
        }
    }, 100)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [handleScroll])



    return (
        <section id='home' ref={ref}>

            <div
                style={{ "background": headerBg }}
                className={`fixed   top-0 h-[82px] md:h-[initial]  bg-black z-[999] w-[100%]  `}
            >
                <div

                    className="container "
                >
                    <Header activeSection={activeSection} />
                </div>

            </div>
            <div
                className="w-[100%] h-[100vh]  relative top-0 z-40 font-jura bg-[image:var(--bg-mobile)]  md:bg-[image:var(--bg-desktop)]"
                style={{ "--bg-desktop": "url(/home-cover.jpg)", "--bg-mobile": "url(/home-cover-small.png)", backgroundSize: "cover", } as React.CSSProperties}
            >
                <div className="flex flex-col">
                    <AnimatePresence>

                        <motion.div

                            className="pt-[150px] md:pt-[100px]"
                        >
                            <div className="container">
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
