import project from "../assets/project.png"
const Projects = () => {
    return(
        <div className="bg-skin max-sm:bg-red-300 h-auto max-md:h-auto md:gap-y-5 w-full" >
            <h1 className="outfit-sans heading  max-sm:text-4xl">Projects</h1>
            <div className="max-lg:items-center lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-12  max-lg:gap-y- md:flex-col pb-10 md:gap-y-6 max-md:p-4 flex max-md:flex-col max-md:justify-center max-md:items-center max-sm:w-full overflow-scroll max-sm:pb-9 max-sm:overflow-auto no-scrollbar max-md:gap-y-10">
                <img src={project} alt="" className="lg:w-120 lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl" />
                <img src={project} alt="" className="lg:w-120 lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl" />
                <img src={project} alt="" className="lg:w-120 lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl" />
                <img src={project} alt="" className="lg:w-120 lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl" />
            </div>
        </div>
    )
}
 export default Projects 


