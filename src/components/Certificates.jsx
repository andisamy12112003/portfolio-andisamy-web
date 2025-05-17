import certificates from "../assets/certificates.webp"
const Certificates = () => {
    return (
        <div className=" h-auto w-full bg-skin max-sm:bg-green-100 max-md:h-auto">
            <h1 className="heading outfit-sans max-sm:text-4xl">Certificates</h1>
            <div className="flex flex-wrap justify-center ">
                
                <div className="p-10 m-4 shadow-2xl rounded-2xl w-100 h-60 flex flex-col max-sm:w-60 max-sm:h-40 justify-center items-center">
                    <img src={certificates} alt="certificate" className="w-90 h-50 " />   
                    <p className="font-bold gap-1 tracking-[2px] font-mono">html,css,bootstrap</p>
                </div>
                <div className="p-10 m-4 shadow-2xl rounded-2xl w-100 h-60 flex flex-col justify-center items-center max-sm:w-60 max-sm:h-40">
                    <img src={certificates} alt="certificate" className="w-90 h-50" />   
                    <p className="font-bold gap-1 tracking-[2px] font-mono">html,css,bootstrap</p>
                </div>
                <div className="p-10 m-4 shadow-2xl rounded-2xl w-100 h-60 flex flex-col justify-center items-center max-sm:w-60 max-sm:h-40">
                    <img src={certificates} alt="certificate" className="w-90 h-50" />   
                    <p className="font-bold gap-1 tracking-[2px] font-mono">html,css,bootstrap</p>
                </div>
                <div className="p-10 m-4 shadow-2xl rounded-2xl w-100 h-60 flex flex-col justify-center items-center max-sm:w-60 max-sm:h-40">
                    <img src={certificates} alt="certificate" className="w-90 h-50" />   
                    <p className="font-bold gap-1 tracking-[2px] font-mono">html,css,bootstrap</p>
                </div>
                <div className="p-10 m-4 shadow-2xl rounded-2xl w-100 h-60 flex flex-col justify-center items-center max-sm:w-60 max-sm:h-40">
                    <img src={certificates} alt="certificate" className="w-90 h-50" />   
                    <p className="font-bold gap-1 tracking-[2px] font-mono">html,css,bootstrap</p>
                </div>
            </div>
        </div>
    )
}

export default Certificates 