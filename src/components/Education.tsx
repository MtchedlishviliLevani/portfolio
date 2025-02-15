import data from "../data/data.json"
function Education() {

    return (
        <div className=" lg:mt-[50px] mt-[10px]">
            <h1 className="text-[20px] md:text-[56px] font-bold text-white ">
                Education //
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-[100px] mt-[30px] lg:mt-[20px]">
                <div className="grid xsm:grid-cols-2 lg:grid-cols-3 gap-x-[20px]">
                    {data.about.learningExperience.map((item, i) => (
                        <div
                            key={i}
                            className="border-l-2 solid border-white pl-[20px] pb-[20px] lg:pb-[20px]"
                        >
                            <span className="  text-[14px] md:text-[20px] font-bold block text-white relative before:w-[16px] before:h-[16px] before:rounded-[50%] before:absolute before:bg-[#37a6fd] before:top-[5px]  before:translate-y-[-50%] before:left-[-30px]	">
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

                </div>
            </div>
        </div>
    );
}

export default Education;
