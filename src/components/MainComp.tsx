import { motion } from "framer-motion"
import Header from "./Header"
import HomePage from "./HomePage"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import { useContext, useEffect, useState } from "react"
import { appStateContext } from "../helper/createContext"
function MainComp() {
    const [isInnerWidthMore768, setIsInnerWidthMore768] = useState<boolean | null>(null)
    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsInnerWidthMore768(true)

        } else {
            setIsInnerWidthMore768(false)
        }
    }, [isInnerWidthMore768])

    console.log(isInnerWidthMore768)
    const myContext = useContext(appStateContext)

    // const condtition = isInnerWidthMore768 && !myContext?.isHiddenNavigation ? true : false

    return (
        <motion.div
            initial={{ left: "101%" }} animate={{ left: 0 }} transition={{ delay: 0, duration: 1.3 }} className='w-[100%] h-[105vh]  absolute z-40 font-jura'
            style={{ backgroundImage: "url(/home-cover.jpg)", backgroundSize: "cover" }}>
            <div className=" min-h-[100vh]">
                <div className="fixed md:static top-0 h-[82px] z-30 w-[100%] bg-blue-900 md:bg-transparent">
                    <div className="container  "> <Header /></div>
                </div>

                {/* here is needed to determine condition in order to state can work */}
                {<>  <div className="container  h-[calc(100vh-114px)] mt-[114px] md:mt-[0px] "><HomePage /></div>

                    < main >
                        <About />
                        <Projects />
                        <Contact />
                    </main></>}
            </div>
        </motion.div >
    )
}

export default MainComp
