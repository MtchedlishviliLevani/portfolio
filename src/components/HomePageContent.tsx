
function HomePageContent() {

    return (
        <div className="py-[40px]  md:mt-[40px]">
            <h1

                className="text-[20px] md:text-[32px] font-bold text-center md:text-left leading-[135%] text-white "
            >
                👋 Hey, I’m Levan Mtchedlishvili
            </h1>
            <h2 className="text-[18px] md:text-[32px] font-bold text-center md:text-left  leading-[135%] text-[#FF6F61] my-[10px] md:my-[25px]">
                Front-End Developer
            </h2>
            <div>
                <p className="text-white text-center text-[12px] md:text-[20px] md:text-left md:max-w-[700px]">
                    Hello, I'm a self-taught front-end developer specializing in React, with 2 years of experience. I am passionate about creating innovative web solutions and eager to bring your ideas to life.
                </p>
                <div className="my-[10px] flex gap-3 items-center">
                    <p className="text-white text-center text-[14px] md:text-[20px] my-[10px] md:text-left underline leading-5 underline-offset-4 cursor-pointer">See more about me</p><img className="arrow md:hidden translate-y-1 mt-[7px]" src="/arrow.svg" alt="" />
                </div>
            </div>
            <div className="my-[40px] sm:my-[60px]">
                <button className="w-[100%] text-[14px] md:w-[initial] md:px-7 py-4  md:text-[24px] bg-[#FF6F61] text-white rounded-[8px] hover:shadow-lg hover:hover:bg-[#FF8976]">
                    Download CV
                </button>
            </div>
            <img className="scrollDownAnimation hidden md:inline-block  w-[70px] translate-x-[-50%] absolute top-[560px] left-[50%] " src="/scrollDownIcon.svg" alt="" />
        </div>
    );
}

export default HomePageContent;
