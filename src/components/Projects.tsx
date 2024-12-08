import {useState} from "react";

import js from "/src/assets/javascript.svg";
import ts from "/src/assets/typescript.svg";
import node from "/src/assets/nodejs.svg";
import express from "/src/assets/express-js.svg";
import react from "/src/assets/react.svg";
import tw from "/src/assets/tailwind.svg";
import java from "/src/assets/java.svg";
import aws from "/src/assets/aws.svg";
import docker from "/src/assets/docker.svg";
import git from "/src/assets/git-logo.svg";
import spring from "/src/assets/spring-boot.svg";
import python from "/src/assets/python.svg";
import weather from "/src/assets/weatherwiz.png";
import convert from "/src/assets/converthub.png";
import share from "/src/assets/sharespace.png";
import pos from "/src/assets/pos.png";
import sql from "/src/assets/sql.svg";
import postgres from "/src/assets/postgres.svg";
import tableau from "/src/assets/tableau.svg";
import bootstrap from "/src/assets/bootstrap.svg";
import junit from "/src/assets/junit.svg";
import sqlite from "/src/assets/sqlite.svg";

function Projects() {

    const[currentProj, setCurrentProj] = useState(0);

    const projects = [
        {
            title: "WeatherWiz",
            description: "I built a responsive weather app using JavaScript, Bootstrap, and the OpenWeather API, allowing users to get current weather information by entering a ZIP code. The app features a clean UI and dynamic updates for an intuitive user experience.",
            image: weather,
            technologies: ["Javascript","Bootstrap","HTML","CSS"]
        },
        {
            title: "POS System",
            description: "I collaborated with three others in an Agile environment to build a Java-based POS system using SQLite and JDBC, featuring user login, order creation, and end-of-day sales reports. Tasks were managed using tickets and user stories for efficient development.",
            image: pos,
            technologies: ["Java","SQLite","JDBC","JUnit"]
        },
        {
            title: "ConvertHub",
            description: "I created a currency converter using JavaScript, Bootstrap, HTML, and CSS, enabling users to seamlessly convert between different currencies. The app features a responsive design and real-time rate updates for accurate conversions.",
            image: convert,
            technologies: ["Javascript","Bootstrap","HTML","CSS",]
        },
        {
            title: "ShareSpace",
            description: "I am collaborating on a Twitter clone using JavaScript, HTML, and CSS as part of a group project. The app is currently in development, focusing on core features like posting and responsive design.",
            image: share,
            technologies: ["Javascript","HTML","CSS"]
        },

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
                            <img src={js} alt={"javascript logo"} id={"tech-logos"}/>
                            <img src={ts} alt={"typescript logo"} id={"tech-logos"}/>
                            <img src={react} alt={"react logo"} id={"tech-logos"}/>
                            <img src={tw} alt={"tailwind logo"} id={"tech-logos"}/>
                            <img src={bootstrap} alt={"bootstrap logo"} id={"tech-logos"}/>
                            <img src={java} alt={"java logo"} id={"tech-logos"}/>
                            <img src={spring} alt={"spring boot logo"} id={"tech-logos"}/>
                            <img src={python} alt={"python logo"} id={"tech-logos"}/>
                            <img src={junit} alt={"junit"} id={"tech-logos"}/>
                            <img src={express} alt={"express js logo"} id={"tech-logos"}/>
                            <img src={node} alt={"node js logo"} id={"tech-logos"}/>
                            <img src={aws} alt={"aws logo"} id={"tech-logos"}/>
                            <img src={docker} alt={"docker logo"} id={"tech-logos"}/>
                            <img src={sql} alt={"sql logo"} id={"tech-logo"}/>
                            <img src={sqlite} alt={"sqlite logo"} id={"tech-logos"}/>
                            <img src={postgres} alt={"postgres logo"} id={"tech-logos"}/>
                            <img src={tableau} alt={"tableau logo"} id={"tech-logos"}/>
                            <img src={git} alt={"git logo"} id={"tech-logos"}/>

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