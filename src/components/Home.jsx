import myphoto from "../assets/myphoto.jpg"
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import resume  from "../assets/resume.pdf";
import { FaAddressCard } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import Certificates from "./Certificates";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Home = () => {
    return (
    <div>
       
        <div className="p-0 m-0">
            <div className="flex justify-between p-8 h-auto  font-mono bg-skin">
                <div>
                    <h1 className="text-[30px] max-md:text-xl">Portfolio</h1>
                </div>
                <div className=" lg:w-[70vw] flex gap-6 text-center max-lg:hidden lg:flex-wrap">
                
                    <a href="#home" className="header-btns lg:text-sm ">Home</a>
                    <a href="#about" className="header-btns lg:text-sm">About Me</a>
                    <a href="#skills" className="header-btns lg:text-sm">Skills</a>
                    <a href="#certificates" className="header-btns lg:text-sm">Certificates</a>
                    <a href="#project" className="header-btns lg:text-sm">Projects</a>
                    <a href="#contact" className="header-btns lg:text-sm" >Contact</a>
                    <a href="#resume" className="header-btns lg:text-sm">Resume</a>
                    
                </div>
                 
            </div>
        </div>
        <div className="flex xl:flex justify-around p-12 w-full h-[90vh] flex-wrap bg-skin max-md:h-auto md:h-auto" id="home">
        <div className="mt-120  max-lg:hidden -mr-300 fixed outfit-sans rounded-full hover:shadow-xl hover:size-14 bg-black w-15 h-15 flex flex-col justify-center items-center">
            <a href="#home"><AiFillHome className="size-10 text-white"/></a>
        </div>
                <div className="w-[50vw] max-md:w-full md:w-full lg:w-200 ">
                    <div>
                        <h1 className="font-bold text-[50px] max-sm:text-2xl ">Hi! I'm <span className="max-sm:text-3xl text-shadow-lg text-blue-300 text-shadow-blue-400 text-[60px] font-mono italic">Andisamy</span> </h1>
                        <h1 className="text-[50px] font-mono m-1 max-sm:text-2xl"><span className="font-bold font-serif ">MERN</span> Stack Web Developer </h1>
                        <h1 className="max-sm:text-2xl capitalize outfit-sans text-[60px] text-gray-800 text-shadow-gray-500 text-shadow-lg "> i'm build your own dream website</h1>
                    </div>
                    <div className="flex flex-col m-2 gap-5 mt-18  ">
                        <div className="flex gap-x-3 max-sm:flex-col max-sm:gap-y-4 ">
                        <a href={resume} download={resume} className="home-btns roboto-mono max-sm:w-20 "><span className="m-2 "> <FaAddressCard size={30}/></span>Resume</a>
                        <a href="#project" className="home-btns roboto-mono max-sm:w-20 ">View My Projects <span className="m-2"><FaArrowRight/></span> </a>
                        </div>
                        <div className="flex gap-x-4 mt-4 max-sm:justify-center">
                            <a className="hover:shadow-xl " href="https://github.com/ANDISAMY-WEBDEVELOPER" target="_blank"><FaGithub className="w-10 h-10 m-3 hover:size-12 max-sm:w-6 max-sm:hover:w-8"/></a>
                            <a className="hover:shadow-xl" href="https://www.linkedin.com/in/andisamy-a-9401a1291/" target="_blank"><FaLinkedin className="w-10 h-10 m-3 hover:size-12 max-sm:w-6 max-sm:hover:w-8"/></a>
                            <a className="hover:shadow-xl" href="https://www.instagram.com/andisamy_25/" target="_blank"><RiInstagramFill className="w-10 h-10 m-3 hover:size-12 max-sm:w-6 max-sm:hover:w-8"/></a>
                            <a className="hover:shadow-xl" href="https://wa.me/6369697633" target="_blank"><FaSquareWhatsapp className="w-10 h-10 m-3 hover:size-12 max-sm:w-6 max-sm:hover:w-8"/></a>
                        </div>
                    </div>  

                </div>

                <div className="lg:w-[70vh] max-sm:w-full flex max-sm:justify-center">
                    <img src={myphoto} alt="myPhoto" className="drop-shadow-xl drop-shadow-gray-500 hover:brightness-140 h-120 w-300 rounded-[27px] hover:shadow-2xl max-sm:size-100" />
                </div>
                
            </div>
            
            <div id="about">
                <About/>
            </div>
            <div id="skills">
                <Skills/>
            </div>
            <div id="certificates">
                <Certificates/>
            </div>
            <div id="project">
                <Projects/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <div id="resume" className="max-md:p-12 w-full h-auto bg-skin flex flex-center justify-center items-center ">
                <div className="w-[60vw] text-center">
                    <div className="capitalize text-[45px] outfit-sans ">
                        <p className="flex justify-center max-md:flex-col max-md:items-center max-lg:flex-col max-lg:items-center">Click and Dowload my resume here <span className="m-5"><IoMdDownload/></span></p>
                    </div>
                <div className="flex justify-center ">
                    <a href={resume} download={resume} className="bg-blue-600 m-10 p-4 rounded-2xl text-white font-bold flex">
                        Download <span className="m-1 ml-2"><FaDownload/></span>
                    </a>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default Home