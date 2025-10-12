import data from "../data/data.json";
export default function TechSkills() {

    return (
        <div className="mt-[50px]">
            <h1 className="text-[20px] md:text-[56px] font-bold text-white ">My Tech Stack //</h1>
            <h3 className="text-white text-[14px] sm:text-[24px]">
                Technologies I’ve been working with recently
            </h3>
            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9  gap-2 lg:gap-3 my-[40px]">
                {data.about.techStack.map((item, i) => <div key={i} style={{ background: item?.backgroundColor }} className="p-[10px] md:p-[20px]  grid place-items-center"> <img loading="lazy" className="w-[70px] md:w-[120px] " src={item.logo} /></div>)}
            </div>
        </div >
    );
}
