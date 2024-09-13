import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const PMPPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col justify-center py-6 px-4 lg:px-10 gap-y-10 text-justify">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Project Management (PMP)
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            A project is a temporary and unique endeavour designed to produce a product, service, or result with a defined beginning and end (usually time-constrained, and often constrained by funding or staffing) undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value. Project are  temporary in nature. Business operation are as usual (or operations),which are repetitive, permanent, or semi-permanent functional activities to produce products or services.
                        </span>
                        <br />
                        <span>
                            Project management is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements.  It involves planning, organizing, and executing the tasks needed to turn a  idea into a tangible product, service, or deliverable.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        Key aspects of project management include:
                    </h2>
                    <p className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Defining project scope
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Identifying deliverables
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Managing risks
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Effective communication across teams
                            </span>
                        </div>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PMPPage;