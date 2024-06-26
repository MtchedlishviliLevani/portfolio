import { useContext, useState } from "react";
import Logo from "/logo1.png";
import { motion, AnimatePresence } from "framer-motion";
import { appStateContext } from "../helper/createContext";

const Header = () => {
    const [listIndex, setListIndex] = useState<number>(0);
    const navigationList = ["Home", "About", "Projects", "Contact"];

    const context = useContext(appStateContext)

    return (
        <header className="flex py-[35px] justify-between items-center">
            <img src={Logo} className="w-[80px]" />
            {/*only mobile */}
            <div
                onClick={() => context?.setIsHiddenNavigations((toggle) => !toggle)}
                className="cursor-pointer  [&>span]:w-[45px] [&>span]:h-[1.5px] [&>span]:bg-white flex flex-col gap-[10px] md:hidden"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/*both */}
            <AnimatePresence>
                {context?.isHiddenNavigation && (
                    <motion.ul

                        initial={{ left: "2500px" }}
                        animate={{ left: "0" }}
                        transition={{ duration: 1.5 }}
                        exit={{ left: "-2500px", transition: { duration: 1.5 } }}
                        className={` flex flex-col  fixed top-[130px] w-[100%] md:min-w-[400px] md:w-[60%] md:left-[initial] md:static md:flex-row md:justify-between`}
                    >
                        {navigationList.map((value, i) => (
                            <motion.li

                                key={i}
                                onClick={() => setListIndex(i)}
                                className={`${listIndex === i
                                    ? "bg-[#c82727] md:bg-transparent md:text-red-400 delay-75 btn"
                                    : "border-solid border-b md:border-b-0  border-white md:border-transparent"
                                    }
                                     ${listIndex - 1 === i &&
                                    "border-solid md:border-[initial] border-b-transparent border-transparent"
                                    } 
                                    cursor-pointer  text-[24px] text-center md:text-left text-white p-[25px] md:p-0 md:items-center`}

                            >
                                {value}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header >
    );
};

export default Header;
