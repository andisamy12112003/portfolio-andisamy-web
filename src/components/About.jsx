import myphoto2 from "../assets/myphoto2.jpeg"
const About = () => {
    return (
        <div className="bg-skin h-[100vh] w-full max-sm:bg-red-300 max-md:h-auto md:h-auto">
            <p className="heading outfit-sans max-sm:text-4xl">
                About ME
            </p>
            <div className="flex mt-10 max-md:flex-col max-md:w-full md:flex-col xl:flex-row-reverse">
            <div className="w-[60vw] xl:w-[60vw] p-12 order-2 max-md:-order-1 max-md:w-full md:w-full md:-order-1">
                <p className="tracking-[2px] font-sans text-2xl font-[300] max-md:text-lg max-md:-mt-12 max-md:m-2 md:-mt-10">
                Hi I'm Andisamy! Passionate and detail-oriented Full 
                Stack Web Developer in designing, 
                developing, and maintaining dynamic and responsive web applications. 
                Skilled in both front-end and back-end technologies, including <span className="text-blue-700 outfit-sans font-[450]">HTML, 
                CSS, Bootstrap, Tailwind CSS, Python, JavaScript, C++, React js, Node.js, Express js, and databases such as MySQL and MongoDB also using version control system git and github</span>. 
                Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user 
                experience and meet client requirements. Committed to continuous learning and staying 
                updated with the latest industry trends to build scalable, efficient, and 
                user-friendly web platforms.
                </p> 
            </div>
            <div className="xl:w-[35vw] drop-shadow-2xl flex max-md:justify-center max-md:w-full md:justify-center">
                <img src={myphoto2} alt="myphoto2" className="max-sm:w-80 max-sm:-mt-10 max-sm:hover:size-84 max-sm:hover:-mt-10 w-[500px] rounded-4xl rounded-bl-none m-6 drop-shadow-yellow-100 hover:mt-6 hover:shadow-2xl hover:shadow-gray-600 hover:size-110" />
            </div>
            </div>
        </div>
    )
}

export default About 