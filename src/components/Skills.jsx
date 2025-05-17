import react from "../assets/react.webp"
import bootstrap from "../assets/bootstrap.webp" 
import css from "../assets/css.webp"
import express from "../assets/express.webp"
import git from "../assets/git.webp"
import github from "../assets/github.webp"
import html from "../assets/html.png"
import javascript from "../assets/javascript.webp"
import nodejs from "../assets/nodejs.webp"
import python from "../assets/python.webp"
import tailwind from "../assets/tailwind.webp"
import ubuntu from "../assets/ubuntu.webp"
import windows11 from "../assets/windows11.webp"
import sql from "../assets/sql.webp"
import vite from "../assets/vite.webp"
import mysql from "../assets/mysql.png"
const Skills = () => {
    return (
        <div className="w-full h-auto bg-skin max-sm:bg-blue-300 max-md:h-auto max-md:pb-4">
            <p className="heading outfit-sans max-sm:text-4xl">Skills</p>
            <div className="md:pb-10 gap-x-9 mx-9 flex flex-wrap justify-center max-md:w-full max-md:m-1 max-md:-mt-4 max-md:gap-x-4">
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={html} alt="html" className="size-30 max-md:size-20 max-md:hover:size-24 hover:size-36" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35 ">
                <img src={css} alt="css" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24 " />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={bootstrap} alt="bootrap" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={tailwind} alt="tailwind" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={javascript} alt="javascript" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={vite} alt="vite" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={sql} alt="sql" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={mysql} alt="mysql" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={python} alt="python" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={nodejs} alt="nodej" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={express} alt="express" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={react} alt="react" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={git} alt="git" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={github} alt="github" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={windows11} alt="windows11" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            <div className="skill-image-style max-md:size-30 max-md:hover:size-35">
                <img src={ubuntu} alt="ubuntu" className="size-30 hover:size-36 max-md:size-20 max-md:hover:size-24" />
            </div>
            </div>
        
        </div>
    )
}

export default Skills