import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useContext, useEffect, useState } from "react";
import { appStateContext } from "../helper/createContext";
import HomePage from "./HomePage";

function MainComp() {
    const [isInnerWidthMore768, setIsInnerWidthMore768] = useState<
        boolean | null
    >(null);
    const myContext = useContext(appStateContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsInnerWidthMore768(true);
            } else {
                setIsInnerWidthMore768(false);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <>
            <div>
                <HomePage isInnerWidthMore768={isInnerWidthMore768} />
                {(!myContext?.isHiddenNavigation || isInnerWidthMore768) && (
                    <>
                        <main>
                            <About />
                            <Projects />
                            <Contact />
                        </main>
                    </>
                )}
            </div>
        </>
    );
}

export default MainComp;
