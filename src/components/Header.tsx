import { useContext, useState } from "react";
import Logo from "/logo1.png";
import { motion, AnimatePresence } from "framer-motion";
import { appStateContext } from "../helper/createContext";

const Header = ({ isInnerWidthMore768 }: { isInnerWidthMore768: null | boolean }) => {
    const [listIndex, setListIndex] = useState<number>(0);
    const navigationList = ["Home", "About", "Projects", "Contact"];
    const myContext = useContext(appStateContext)

    const context = useContext(appStateContext);

    function handleNavigation(i: number) {
        setListIndex(i)
        if (!isInnerWidthMore768) myContext?.setIsHiddenNavigations(false)
    }

    return (
        <header className="flex py-[15px] md:py-[35px] justify-between items-center ">
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
                        initial={{ left: "-2500px" }}
                        animate={{ left: "0" }}
                        transition={{ duration: 1.5 }}
                        exit={{ left: "-2500px", transition: { duration: 1.5 } }}
                        className={` flex flex-col  fixed top-[82px] w-[100%] bg-[#16222e] lg:bg-transparent md:bg-transparent h-[calc(100vh-81px)] md:h-[initial] md:min-w-[400px] md:w-[60%] md:left-[initial] md:static md:flex-row md:justify-between`}
                    >
                        {navigationList.map((value, i) => (
                            <li
                                key={i}
                                onClick={() => handleNavigation(i)}
                                className={`${listIndex === i
                                    ? "bg-[#c82727]  md:text-red-400 md:font-bold delay-75 md:delay-0 btn"
                                    : "border-solid border-b md:border-b-0  border-white md:border-transparent  "
                                    }
                                     ${listIndex - 1 === i &&
                                    "border-solid md:border-[initial] border-b-transparent border-transparent"
                                    } 
                                    cursor-pointer  text-[24px] text-center md:text-left text-white p-[25px] md:p-0 md:py-[8px] md:items-center relative after:content-[''] after:absolute after:w-[100%] after:h-[1px] after:bg-white  after:left-[0%] after:opacity-0 hover:after:opacity-100 after:bottom-0 after:duration-[1s] after:transition-[opacity]`}
                            >
                                <a href={`#${value.toLowerCase()}`}>  {value}</a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
