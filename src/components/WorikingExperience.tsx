import data from "../data/data.json";
function WorkingExperience() {
  return (
    <div className="mt-[50px]">
      <h1 className="text-[20px] md:text-[56px] font-bold text-white ">
        {data.about.workingExperience.title}
      </h1>

      <div className="py-6 flex flex-col gap-8">
       
        <div className="pl-[16px]">
          <h2 className="text-[18px]  text-[#e5e7eb] md:text-[28px] font-bold mb-1 md:mb-3
          relative  before:content-[''] before:absolute before:w-3 before:h-3 before:bg-[#1bbca9] before:rounded-full  before:top-[50%] before:-translate-y-[40%] before:left-[-22px]">
            Front-End Developer - React.JS, Next.JS
          </h2>
          <div className="text-sm text-[#1f2937] text-[17px]  md:text-[21px] ">
            Unilab | 2025 - Present
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingExperience;
