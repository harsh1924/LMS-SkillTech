import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const BuisnessAnalysisPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col justify-center py-6 px-4 lg:px-10 gap-y-10 text-justify">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Business Analysis
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Business Analysis is the practice of enabling change in an organizational context, by defining needs and recommending solutions that deliver value to stakeholders. The set of tasks and techniques that are used to perform business analysis are defined in A Guide to the Business Analysis Body of Knowledge® (BABOK® Guide).
                        </span>
                        <br />
                        <span>
                            Business analysis is used to identify and articulate the need for change in how organizations work, and to facilitate that change. As business analysts, we identify and define the solutions that will maximize the value delivered by an organization to its stakeholders. Business analysts work across all levels of an organization and may be involved in everything from defining strategy, to creating the enterprise architecture, to taking a leadership role by defining the goals and requirements for programs and projects or supporting continuous improvement in its technology and processes.
                        </span>
                        <br />
                        <span>
                            We have the specialized knowledge to act as a guide and lead the business through unknown or unmapped territory, to get it to its desired destination. The value of business analysis is in realization of benefits, avoidance of cost, identification of new opportunities, understanding of required capabilities and modeling the organization. Through the effective use of business analysis, we can ensure an organization realizes these benefits, ultimately improving the way they do business.
                            Business Analysis Helps Businesses Do Business Better.
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BuisnessAnalysisPage;