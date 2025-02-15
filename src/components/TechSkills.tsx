export default function TechSkills() {
    const techStackContent = [{ logo: "/htmlIcon.png", backgroundColor: "rgb(0 0 0 / 0.1)" },

    { logo: "/cssIcon.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/javascriptIcon.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/logos_react.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/tailwindIcon.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/logos_git-icon.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/icons_github-fill.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/ts-logo.png", backgroundColor: "rgb(0 0 0 / 0.1)" },
    { logo: "/next-js.svg", backgroundColor: "rgb(0 0 0 / 0.1)" },

    ];
    return (
        <div className="py-[30px]">
            <h1 className="text-[20px] sm:text-[48px] md:text-[56px] font-bold text-white ">My Tech Stack //</h1>
            <h3 className="text-white text-[14px] sm:text-[24px]">
                Technologies I’ve been working with recently
            </h3>
            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9  gap-2 lg:gap-3 my-[40px]">
                {techStackContent.map((item, i) => <div key={i} style={{ background: item.backgroundColor }} className="p-[10px] md:p-[20px]  grid place-items-center"> <img loading="lazy" className="w-[70px] md:w-[120px] " src={item.logo} /></div>)}
            </div>
        </div >
    );
}
