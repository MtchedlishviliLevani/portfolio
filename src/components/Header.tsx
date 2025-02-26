import { useContext } from "react";
import Logo from "/logo1.png";
import { appStateContext } from "../helper/createContext";
import { Link } from "react-scroll"
import data from "../data/data.json"
import { HeaderProps } from "../types";

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {

    const context = useContext(appStateContext);

    function handleClickNavigationBar() {
        context?.setIsOpenNavigation(toggle => !toggle)
    }
    console.log(activeSection)

    function handleNavigation(activeSection: string) {
        if (!context?.isInnerWidthMore768) {
            context?.setIsOpenNavigation(false)
        }
        setActiveSection(activeSection)

    }
    return (
        <header className="flex py-[15px] md:py-[35px] justify-between items-center">
            <img src={Logo} className="w-[60px] md:w-[80px]" alt="Logo" loading="lazy" />
            {/* only mobile */}

            <div
                onClick={handleClickNavigationBar}
                className="z-[999] cursor-pointer [&>span]:w-[45px] [&>span]:h-[1.5px] [&>span]:bg-white flex flex-col gap-[10px] md:hidden"
            >
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
            <ul
                className={`${context?.isOpenNavigation === false ? "left-[100%]" : "left-[0]"} flex flex-col fixed top-[82px] w-[100%] bg-[#16222e] lg:bg-transparent md:bg-transparent h-[calc(100vh-81px)] md:h-[initial] md:min-w-[400px] md:w-[60%] md:left-[initial] md:static md:flex-row md:justify-between`}
            >
                {data.home.navigation.map((value, i) => (
                    <Link
                        to={value.toLowerCase()}
                        smooth={true}
                        duration={400}
                        key={i}
                        onClick={() => handleNavigation(value.toLocaleLowerCase())
                        }
                        className={`${activeSection === value.toLowerCase()
                            ? "bg-[#c82727] md:text-red-400 md:font-bold  md:delay-0 btn "
                            : "border-solid border-b md:border-b-0 border-white md:border-transparent"
                            }
                                    cursor-pointer text-[24px] text-center md:text-left text-white p-[25px] md:p-0 md:py-[8px] md:items-center relative after:content-[''] after:absolute after:w-[100%] after:h-[1px] after:bg-white after:left-[0%] after:opacity-0 hover:after:opacity-100 after:bottom-0 after:duration-[1s] after:transition-[opacity]`}
                    >
                        {value}
                    </Link>
                ))}
            </ul>

        </header>
    );
};

export default Header;
