import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const AgileAndScrumPage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-6 md:px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Agile & Scrum
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Scrum environment look like? Interestingly, Scrum methodology is an Agile framework that facilitates collaboration and efficiency in software development and testing. Scrum-based development projects are broken into small builds, called sprints, which consist of three components: product backlogs, sprint backlogs, and sprint goals. With each sprint, a specific function is defined, developed, and tested. Depending on the complexity of the project, each sprint lasts two to three weeks. If any business requirements change that warrant a code change, it is quicker and easier to find it in the sprint backlog rather than repeat the entire software development lifecycle, like with a Waterfall methodology.
                        </span>
                        <br />
                        <span>
                            With this framework, the Scrum Master has a responsibility to guarantee the success of each project.  He or she must ensure that every team member remains on track, address and solve any problems that arise, confirm that the team is following Scrum methodologies, and enforce deadlines.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AgileAndScrumPage;