function Projects() {

    return (
        <>
            <section id={"projects"} className="w-full flex flex-col items-center justify-center">
                <h2 className="text-2xl text-white"></h2>
                <div className="grid grid-cols-3 gap-4 p-8">
                    <div className="grid-box row-span-3 p-5">
                        <h2 className="text-white text-xl ">// Technology I work with</h2>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            <img src={"src/assets/javascript.svg"} alt={"javascript logo"} id={"tech-logos"}/>
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


                        </div>
                        <p className="text-base"></p>


                    </div>
                    <div className="grid-box col-span-2 ">yur</div>

                </div>

            </section>

        </>
    )
}

export default Projects;