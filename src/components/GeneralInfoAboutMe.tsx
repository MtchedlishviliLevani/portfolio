import data from "../data/data.json"
function GeneralInfoAboutMe() {
    return (
        <div className=" mt-[50px]">
            <h1 className="text-[20px] md:text-[56px] font-bold text-white   ">
                {data.about.title}
            </h1>

            <p dangerouslySetInnerHTML={{ __html: data.about.aboutText }} className="text-white max-w-[450px] text-[12px] sm:text-[16px] md:max-w-[500px] [&>b]:text-white [&>b]:underline">

            </p>
        </div>
    );
}

export default GeneralInfoAboutMe;
