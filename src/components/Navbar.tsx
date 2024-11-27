import gh from "/src/assets/github.svg"
import link from "/src/assets/linkedin.svg"

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
                    <h3 className="text-white text-xl font-bold ">Daylen</h3>
                    <div className="flex items-center gap-4 max-md:hidden ">
                    <button onClick={() => scrollToSection("about")} className="text-white text-base ">// about</button>
                    <button onClick={() => scrollToSection("projects")} className="text-white text-base">// projects</button>
                    </div>
                </div>
                <div className="h-12 flex items-center gap-4 px-4 flex-shrink-0">
                    <a href="https://github.com/notDuckk" target="_blank">
                        <img alt="github link" className="h-5 w-5  " src={gh}/>
                    </a>
                    <a href="https://www.linkedin.com/in/daylen-francis-bb9090258/" target="_blank">
                        <img alt="linkedin link" className="h-5 w-5 " src={link}/>
                    </a>
                    <a href="https://drive.google.com/u/0/uc?id=1jv0uNaZuh7jc1mXbLz5pfWgo_agQMaz1&export=download" download="dfranres.pdf" className="flex items-center border-[1px] p-2 rounded-sm text-white border-white">
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
