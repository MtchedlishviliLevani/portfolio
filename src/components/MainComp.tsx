import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import HomePage from "./HomePage";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function MainComp() {
    const [activeSection, setActiveSection] = useState("home");

    // Hooks for each section
    const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.1 });
    const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
    const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
    const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

    // Update active section when inView changes
    useEffect(() => {
        if (contactInView) setActiveSection("contact");
        else if (projectsInView) setActiveSection("projects");
        else if (aboutInView) setActiveSection("about");
        else if (homeInView) setActiveSection("home");
    }, [homeInView, aboutInView, projectsInView, contactInView]);

    return (
        <div className="">

            <div>
                <HomePage
                    ref={homeRef}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />

                <main>
                    <About ref={aboutRef} />
                    <Projects ref={projectsRef} />
                    <Contact ref={contactRef} />
                </main>
            </div>
        </div>
    );
}

export default MainComp;
