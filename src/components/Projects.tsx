import { forwardRef } from "react";
import dataJson from "../data/data.json";
import ProjectCard from "./ProjectCard";

const Projects = forwardRef<HTMLElement>((_, ref) => {


    return (
        <section
            id="projects"
            ref={ref}
            style={{
                background:
                    "linear-gradient(rgba(20, 106, 159, 0.68), rgb(135, 52, 52))",
            }}
            className="w-[100%] min-h-[100vh] h-[100%]"
        >
            <div className="container">
                <div className="py-[30px]">
                    <h2 className="text-[24px] md:text-[32px] text-white text-center ">Projects</h2>
                </div>
                <div className="grid xsm:grid-cols-2 lg:gap-[50px] gap-[20px] sm:justify-center sm:gap-[30px] xl:grid-cols-3 md:grid-cols-2 ">
                    {dataJson.projects.map((item,) => (
                        <div key={item.id}>
                            <ProjectCard item={item} /></div>
                    ))}
                    {/* {dataJson?.projects.map((item) => <img key={item?.id} src={item?.imageSrc} />)} */}
                </div>
                <div></div>
                <a
                    target="_blank"
                    href="https://github.com/MtchedlishviliLevani"
                    className="text-center block text-[#FFF] mt-[50px] sm:text-[18px] md:text-[24px]"
                >
                    SEE MORE
                </a>
            </div>
        </section>
    );
})

export default Projects;
