import { useState } from "react";
import Education from "./Education";
import GeneralInfoAboutMe from "./GeneralInfoAboutMe";
import TechSkills from "./TechSkills";

function About() {
    // bg-[#16222e]

    const buttonList = ["General Information", "Education", "Tech Stack"]
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)
    return (
        <section id="about"
            style={{ background: "linear-gradient(to bottom, #873434, #146a9fad)" }}
            className="w-[100%]  h-[100%] pb-[200px] pt-[30px] md:pt-[70px]"
        ><div className="container">
                <div className="flex justify-center ">

                    <div
                        style={{ background: "rgb(0 0 0 / 0.1)" }}
                        className="bg-opacity-10 mt-[50px] *:text-white px-[10px] flex-col sm:flex-row w-[100%] gap-5 rounded-[8px] sm:px-[20px] py-[20px] flex sm:gap-7 items-center max-w-[500px] justify-center"
                    >

                        {buttonList.map((item, i) => <button className={`${activeButtonIndex === i && "underline underline-offset-4"}`} key={i} onClick={() => setActiveButtonIndex(i)} >{item}</button>)}
                    </div>
                </div>
            </div>
            {activeButtonIndex === 0 ? <GeneralInfoAboutMe /> : activeButtonIndex === 1 ? <Education /> : <TechSkills />}

        </section>
    );
}

export default About;
