import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const SoftwareDevelopmentPage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-6 md:px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Software Development/Coding
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Software development provides a series of steps for programmers to create computer programs. This process makes up the phases in the software development life cycle. Understanding the software development method offers vast opportunities in the IT industry.In this article, we explain software development, summarize types of computer programs and explore jobs that use the IT development process.
                        </span>
                        <br />
                        <span>
                            Software development is the process programmers use to build computer programs. The process, also known as the Software Development Life Cycle (SDLC), includes several phases that provide a method for building products that meet technical specifications and user requirements.The SDLC provides an international standard that software companies can use to build and improve their computer programs. It offers a defined structure for development teams to follow in the design, creation and maintenance of high-quality software. The aim of the IT software development process is to build effective products within a defined budget and timeline.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SoftwareDevelopmentPage;