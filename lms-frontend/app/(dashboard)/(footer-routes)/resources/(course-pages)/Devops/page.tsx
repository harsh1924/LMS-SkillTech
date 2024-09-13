import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const DevopsPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col justify-center py-6 px-4 lg:px-10 gap-y-10 text-justify">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Devops
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development (Dev) and IT operations (Ops) as a means for improving and shortening the systems development life cycle.DevOps is complementary to agile software development; several DevOps aspects came from the agile way of working.
                        </span>
                        <br />
                        <span>
                            Automation is an important part of DevOps. Software programmers and architects should use "fitness functions" to keep their software in check.
                        </span>
                        <br />
                        <span>
                            Other than it being a cross-functional combination (and a portmanteau) of the terms and concepts for "development" and "operations", academics and practitioners have not developed a universal definition for the term "DevOps".Most often, DevOps is characterized by key principles: shared ownership, workflow automation, and rapid feedback. From an academic perspective, Len Bass, Ingo Weber, and Liming Zhu—three computer science researchers from the CSIRO and the Software Engineering Institute-suggested defining DevOps as "a set of practices intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality".However, the term is used in multiple contexts. At its most successful, DevOps is a combination of specific practices, culture change, and tools.
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DevopsPage;