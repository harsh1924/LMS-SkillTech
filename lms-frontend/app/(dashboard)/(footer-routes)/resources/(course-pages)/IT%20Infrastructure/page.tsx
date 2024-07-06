import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const ITInfrastructurePage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-6 md:px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                    IT Infrastructure
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                        Information technology infrastructure is defined broadly as a set of information technology (IT) components that are the foundation of an IT service; typically physical components (computer and networking hardware and facilities), but also various software and network components.
                        </span>
                        <br />
                        <span>
                        According to the ITIL Foundation Course Glossary, IT Infrastructure can also be termed as “All of the hardware, software, networks, facilities, etc., that are required to develop, test, deliver, monitor, control or support IT services. The term IT infrastructure includes all of the Information Technology but not the associated People, Processes and documentation.
                        </span>
                        <br />
                        <span>
                             IT Infrastructure, the above technological components contribute to and drive business functions. Leaders and managers within the IT field are responsible for ensuring that both the physical hardware and software networks and resources are working optimally. IT infrastructure can be looked at as the foundation of an organization's technology systems, thereby playing an integral part in driving its success.All organizations who rely on technology to do their business can benefit from having a robust, interconnected IT Infrastructure. With the current speed that technology changes and the competitive nature of businesses, IT leaders have to ensure that their IT Infrastructure is designed such that changes can be made quickly and without impacting the business continuity.While traditionally companies used to typically rely on physical data centers or colocation facilities to support their IT Infrastructure, cloud hosting has become more popular as it is easier to manage and scale. IT Infrastructure can be managed by the company itself or it can be outsourced to another company that has consulting expertise to develop robust infrastructures for an organization. With advances in online outreach availability, it has become easier for end users to access technology. As a result, IT infrastructures have become more complex and therefore, it is harder for managers to oversee the end to end operations. In order to mitigate this issue, strong IT Infrastructures require employees with varying skill sets. The fields of IT management and IT service management rely on IT infrastructure, and the ITIL framework was developed as a set of best practices with regard to IT infrastructure. The ITIL framework assists companies with the ability to be responsive to technological market demands. Technology can often be thought of as an innovative product which can incur high production costs. However, the ITIL framework helps address these issues and allows the company to be more cost effective which helps IT managers to keep the IT Infrastructure functioning.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ITInfrastructurePage;