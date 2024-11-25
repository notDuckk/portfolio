
function Navbar() {
    const scrollToSection = (sectionId: string):void => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <nav className=" w-full p-2 ml-auto mr-auto fixed top-0 backdrop-blur  border-b-[.08em] border-[#3A3B3C] flex justify-between ">

                <div className="h-12 items-center px-4  flex gap-4">
                    <h3 className="text-white text-xl dark:text-white font-bold ">Daylen</h3>
                    <div className="flex items-center gap-4 max-md:invisible ">
                    <button onClick={() => scrollToSection("about")} className="text-white text-base ">// about</button>
                    <button onClick={() => scrollToSection("projects")} className="text-white text-base">// projects</button>
                    </div>
                </div>
                <div className="h-12 flex items-center gap-4 px-4">
                    <a href="https://github.com/notDuckk" target="_blank">
                        <img alt="github link" className="h-5 w-5 max-lg:w-5  " src={"src/assets/github.svg"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/daylen-francis-bb9090258/" target="_blank">
                        <img alt="linkedin link" className="h-5 w-5 " src={"src/assets/linkedin.svg"}/>
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=12pqhri5uLcugCMBfjjPlZZvMPMj741Wt" download="dfranRes.pdf" className="border-[1px] p-2 rounded-sm text-white border-white">
                        Resume
                    </a>
                    {/*<a href="https://monkeytype.com/profile/notDuc" target="_blank">*/}
                    {/*    <img className="h-5 w-5 " src={"https://raw.githubusercontent.com/monkeytype-hub/monkeytype-icon/master/monkeytype-icon/logo-svg/alpine.svg"}/>*/}
                    {/*</a>*/}
                </div>
            </nav>


        </>
    );
}

export default Navbar;
