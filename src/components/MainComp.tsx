import { motion } from "framer-motion"
import Header from "./Header"
import HomePage from "./HomePage"
import About from "./About"
function MainComp() {
    return (
        <motion.div
            initial={{ left: "101%" }} animate={{ left: 0 }} transition={{ delay: 0, duration: 1.3 }} className='w-[100%] h-[105vh]  absolute z-40 font-jura'
            style={{ backgroundImage: "url(/home-cover.jpg)", backgroundSize: "cover" }}>
            <div className="container min-h-[105vh]">
                <Header />
                <HomePage />
            </div>
            <main>
                <About />
            </main>
        </motion.div>
    )
}

export default MainComp
