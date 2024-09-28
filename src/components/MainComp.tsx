import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import HomePage from "./HomePage";
import { useContext, useEffect, useRef, useState } from "react";
import { appStateContext } from "../helper/createContext";
import { motion } from "framer-motion";

function MainComp() {
    const myContext = useContext(appStateContext);

    const variants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
    };


    // Create refs for each section
    const homeRef = useRef(null)
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const [activeSection, setActiveSection] = useState("home")
    useEffect(() => {
        const sectionRefs = [homeRef, aboutRef, projectsRef, contactRef]
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold for sensitivity
        );

        sectionRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [])

    return (
        <>
            {myContext?.isInnerWidthMore768 ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                >
                    <HomePage ref={homeRef} activeSection={activeSection} />

                    <main>
                        <About ref={aboutRef} />
                        <Projects ref={projectsRef} />
                        <Contact ref={contactRef} />
                    </main>

                </motion.div>
            ) : (
                <div>
                    <HomePage ref={homeRef} activeSection={activeSection} />

                    <main>
                        <About ref={aboutRef} />
                        <Projects ref={projectsRef} />
                        <Contact ref={contactRef} />
                    </main>

                </div>
            )}
        </>
    );
}

export default MainComp;
