import {useState} from "react";

function Projects() {

    const[currentProj, setCurrentProj] = useState(0);

    const projects = [
        {
            title: "WeatherWiz",
            description: "Weather app using Open Weather Map API displaying information based on the zip code",
            image: "src/assets/weatherwiz.png",
            technologies: ["Javascript","Bootstrap","HTML","CSS"]
        },
        {
            title: "ConvertHub",
            description: "Currency converter app using Free Currency API allows users convert currency and store their favorites",
            image: "src/assets/converthub.png",
            technologies: ["Javascript","Bootstrap","HTML","CSS",]
        },
        {
            title: "ShareSpace",
            description: "A Twitter clone currently in progress as part of a group project. This project is still under development.",
            image: "src/assets/sharespace.png",
            technologies: ["Javascript","HTML","CSS"]
        }
    ]

    const handleNext = ()=>{
        setCurrentProj((prev)=>(prev + 1) % projects.length);
    }

    const handlePrev = ()=>{
        setCurrentProj((prev)=>(prev - 1 + projects.length) % projects.length);
    }

    return (
        <>
            <section id={"projects"} className="w-full flex flex-col items-center justify-center">
                <h2 className="text-2xl text-white max-lg:text-xl">Projects</h2>
                <div className="grid grid-cols-3 gap-x-4 p-8 max-lg:grid-cols-1 w-3/5 max-lg:w-11/12 max-lg:gap-y-4 max-lg:p-4">
                    <div className="grid-box row-span-2 p-5  ">
                        <h2 className="text-white text-xl max-lg:text-lg">// Technology I work with</h2>
                        <div className="grid grid-cols-4 gap-4 mt-4 justify-items-center">
                            <img src={"/public/assets/javascript.svg"} alt={"javascript logo"} id={"tech-logos"}/>
                            <img src={"src/assets/typescript.svg"} alt={"typescript logo"} id={"tech-logos"}/>
                            <img src={"src/assets/nodejs.svg"} alt={"node js logo"} id={"tech-logos"}/>
                            <img src={"src/assets/express-js.svg"} alt={"express js logo"} id={"tech-logos"}/>
                            <img src={"src/assets/react.svg"} alt={"react logo"} id={"tech-logos"}/>
                            <img src={"src/assets/tailwind.svg"} alt={"tailwind logo"} id={"tech-logos"}/>
                            <img src={"src/assets/java.svg"} alt={"java logo"} id={"tech-logos"}/>
                            <img src={"src/assets/aws.svg"} alt={"aws logo"} id={"tech-logos"}/>
                            <img src={"src/assets/docker.svg"} alt={"docker logo"} id={"tech-logos"}/>
                            <img src={"src/assets/git-logo.svg"} alt={"git logo"} id={"tech-logos"}/>
                            <img src={"src/assets/spring-boot.svg"} alt={"spring boot logo"} id={"tech-logos"}/>
                            <img src={"src/assets/python.svg"} alt={"python logo"} id={"tech-logos"}/>


                        </div>



                    </div>
                    <div className="grid-box col-span-2 max-lg:col-span-1  ">
                        <div className="flex justify-between ">
                            <h2 className="text-white text-xl gap-4 pt-3 pl-3 flex-none max-lg:text-lg">// Projects</h2>
                            <div className="p-3 gap-4 items-center flex-none ">
                                <button
                                    className="text-black p-2 text-xs rounded-sm m-1 bg-white  max-md:m-[.15rem] max-md:p-[.30rem]"
                                    onClick={handlePrev}
                                >
                                    back
                                </button>
                                <button
                                    className="text-black p-2 text-xs rounded-sm m-1 bg-white  max-md:m-[.15rem] max-md:p-[.30rem]"
                                    onClick={handleNext}
                                >
                                    next
                                </button>

                            </div>
                        </div>
                        <div className="p-5 gap-4 flex flex-col items-center justify-center ">
                            <h3 className="text-lg text-white">{projects[currentProj].title}</h3>
                            <img
                                src={projects[currentProj].image}
                                alt={projects[currentProj].title}
                                className="h-60 w-35 max-lg:max-h-40"
                            />
                            <div
                                className=" text-white p-3 rounded-lg mt-4 flex flex-wrap gap-2 ">
                                {projects[currentProj].technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#222222] p-2 text-xs rounded-sm"
                                    >
                {tech}
            </span>
                                ))}
                            </div>
                            <p className="text-white break-words">{projects[currentProj].description}</p>


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Projects;