import CopyButton from './CopyButton'
import me from "src/assets/me.png"

function About() {
    return (
        <>
            <section id="about" className="w-full flex flex-col mb-10 justify-center items-center">
                <h3 className="text-white text-2xl max-lg:text-xl ">About</h3>
                <div className="grid grid-cols-2 w-3/5 p-8 gap-y-4 gap-x-4 max-lg:w-11/12 max-lg:p-4">
                    <div className="grid-box col-span-2 p-5 max-lg:p-3">
                        <h3 className="text-white text-xl max-lg:text-lg">// About Me </h3>
                        <div className="flex flex-row max-lg:flex-col items-center">

                            <img className="h-[14em] w-[12em] rounded-3xl mt-4 max-lg:h-[12em] max-lg:w-[10em]" alt="picture of me"
                                 src={me}/>
                            <p className="text-white text-center p-3 max-lg:text-xs">My fascination with computers began at 14
                                when I built a
                                simple clock app using Python with a book and YouTube tutorials. Since then, I’ve
                                pursued technical courses, earning an IT and Software Development certification. I love
                                the logic of coding—how everything works when done right and the learning that comes
                                from mistakes.</p>
                        </div>


                    </div>
                    <div className="grid-box col-span-1 p-5 max-lg:col-span-2 max-lg:p-3">
                        <h3 className="text-white text-xl max-lg:text-lg ">// Technical Skills</h3>
                        <p className="text-white mt-4 max-lg:text-xs max-lg:text-center">I specialize in Java, JavaScript, React, Docker, AWS, and SQLite,
                            focusing on scalable backend services and modern tools. I’m a lifelong learner who loves
                            exploring new technologies.</p>

                    </div>
                    <div className="grid-box col-span-1 p-5 max-lg:col-span-2 max-lg:p-3">
                        <h3 className="text-white text-xl max-lg:text-lg">// Contact me</h3>
                        <div className="flex mt-4 text-white max-lg:text-xs ">
                        <CopyButton textToCopy="daylenfrancis908@gmail.com"/>
                            <p className="pl-1">daylenfrancis908@gmail.com</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;