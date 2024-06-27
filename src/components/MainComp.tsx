import { motion } from "framer-motion"
import Header from "./Header"
import MainContent from "./MainContent"
function MainComp() {
    return (
        <motion.div initial={{ left: "101%" }} animate={{ left: 0 }} transition={{ delay: 2.5, duration: 1.3 }} className='w-[100%] h-[100vh] bg-bgColor absolute z-40'>
            <div className="container font-jura">
                <Header />
                <MainContent />
            </div>
        </motion.div>
    )
}

export default MainComp
