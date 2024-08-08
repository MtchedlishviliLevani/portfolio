import { motion } from "framer-motion"
import Header from "./Header"
import HomePage from "./HomePage"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
function MainComp() {
    return (
        <motion.div
            initial={{ left: "101%" }} animate={{ left: 0 }} transition={{ delay: 0, duration: 1.3 }} className='w-[100%] h-[105vh]  absolute z-40 font-jura'
            style={{ backgroundImage: "url(/home-cover.jpg)", backgroundSize: "cover" }}>
            <div className=" min-h-[105vh]">
                <div className="fixed top-0 h-[122px] z-30 w-[100%] transparent">
                    <div className="container"> <Header /></div>
                </div>
                <div className="container mt-[170px] h-[calc(100vh-122px)] "><HomePage /></div>

                <main>
                    <About />
                    <Projects />
                    <Contact />
                </main></div>
        </motion.div>
    )
}

export default MainComp
