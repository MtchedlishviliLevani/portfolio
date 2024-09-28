import { learningExperiences } from "../data/data";
function Education() {

    return (
        <div className="container lg:mt-[50px] mt-[10px]">
            <h1 className="text-[20px] md:text-[56px] font-bold text-white ">
                Education //
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-[100px] mt-[30px] lg:mt-[20px]">
                <ul className="flex flex-col ">
                    {learningExperiences.slice(0, 3).map((item, i) => (
                        <div
                            key={i}
                            className="border-l-2 solid border-white pl-[20px] pb-[20px] lg:pb-[20px]"
                        >
                            <span className="  text-[14px] md:text-[24px] font-bold block text-white relative before:w-[16px] before:h-[16px] before:rounded-[50%] before:absolute before:bg-[#37a6fd] before:top-[5px]  before:translate-y-[-50%] before:left-[-30px]	">
                                {item.program}
                            </span>
                            <div
                                style={{ background: "rgb(183 39 39 / 50%)" }}
                                className="py-[10px] px-[10px] inline-block lg:mt-[20px] mt-[10px] "
                            >
                                <span className="text-white text-[14px] md:text-[16px]">{item.dates}</span>
                            </div>

                            <h3 className="lg:mt-[20px] mt-[10px] text-white text-[14px] md:md:text-[20px]">
                                {item.organization}
                            </h3>
                        </div>
                    ))}
                </ul>
                <ul className="flex flex-col ">
                    {learningExperiences.slice(3).map((item, i) => (
                        <div
                            key={i}
                            className="border-l-2 solid border-white pl-[20px] pb-[20px] lg:pb-[20px]"
                        >
                            <span className="text-[14px] md:text-[24px] font-bold block text-white relative before:w-[16px] before:h-[16px] before:rounded-[50%] before:absolute before:bg-[#37a6fd] before:top-[5px]  before:translate-y-[-50%] before:left-[-30px]	">
                                {item.program}
                            </span>
                            <div
                                style={{ background: "rgb(183 39 39 / 50%)" }}
                                className="py-[10px] px-[10px] inline-block lg:mt-[20px] mt-[10px] "
                            >
                                <span className="text-white">{item.dates}</span>
                            </div>
                            <h3 className="lg:mt-[20px] mt-[10px] text-white text-[16px] md:md:text-[20px]">
                                {item.organization}
                            </h3>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Education;
