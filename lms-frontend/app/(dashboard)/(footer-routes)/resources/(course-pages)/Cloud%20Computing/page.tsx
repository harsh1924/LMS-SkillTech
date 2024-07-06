import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const CloudComputingPage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Cloud Computing
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping you lower your operating costs, run your infrastructure more efficiently, and scale as your business needs change.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        Benefits of cloud computing
                    </h2>
                    <p className="source-sans-3-regular">
                        Cloud computing is a big shift from the traditional way businesses think about IT resources. Here are seven common reasons organizations are turning to cloud computing services:
                    </p>
                    <div className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Cost
                            </span>
                            <span>
                                Cloud helps companies optimize IT costs. This is because cloud computing eliminates the capital expense of buying hardware and software and setting up and running onsite datacenters—the racks of servers, the round-the-clock electricity for power and cooling, and the IT experts for managing the infrastructure. It adds up fast.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Speed
                            </span>
                            <span>
                                Cloud computing services are provided self service and on demand, so even vast amounts of computing resources can be provisioned in minutes, typically with just a few mouse clicks, giving businesses a lot of flexibility and taking the pressure off capacity planning.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Global scale
                            </span>
                            <span>
                                The benefits of cloud computing services include the ability to scale elastically. In cloud speak, that means delivering the right amount of IT resources—for example, more or less computing power, storage, bandwidth—right when they’re needed, and from the right geographic location.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Productivity
                            </span>
                            <span>
                                Onsite datacenters typically require a lot of “racking and stacking”—hardware setup, software patching, and other time-consuming IT management chores. Cloud computing removes the need for many of these tasks, so IT teams can spend time on achieving more important business goals.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Performance
                            </span>
                            <span>
                                The biggest cloud computing services run on a worldwide network of secure datacenters, which are regularly upgraded to the latest generation of fast and efficient computing hardware. This offers several benefits over a single corporate datacenter, including reduced network latency for applications and greater economies of scale.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Reliability
                            </span>
                            <span>
                                Cloud computing makes data backup, disaster recovery, and business continuity easier and less expensive because data can be mirrored at multiple redundant sites on the cloud provider’s network.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Security
                            </span>
                            <span>
                                Many cloud providers offer a broad set of policies, technologies, and controls that strengthen your security posture overall, helping protect your data, apps, and infrastructure from potential threats.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        Types of cloud computing
                    </h2>
                    <span className="source-sans-3-regular flex flex-col">
                        Not all clouds are the same and no single type of cloud computing is right for everyone. Several different models, types, and services have evolved to help offer the right solution for your needs.
                    </span>
                    <span className="source-sans-3-regular flex flex-col">
                        First, you need to determine the type of cloud deployment, or cloud computing architecture, that your cloud services will be implemented on. There are three different ways to deploy cloud services: on a public cloud, private cloud, or hybrid cloud. Learn more about public, private, and hybrid clouds.
                    </span>
                    <div className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Public cloud
                            </span>
                            <span>
                                Public clouds are owned and operated by third-party cloud service providers, which deliver computing resources like servers and storage over the internet. Microsoft Azure is an example of a public cloud. With a public cloud, all hardware, software, and other supporting infrastructure is owned and managed by the cloud provider. You access these services and manage your account using a web browser.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Private cloud
                            </span>
                            <span>
                                A private cloud refers to cloud computing resources used exclusively by a single business or organization. A private cloud can be physically located on the company’s onsite datacenter. Some companies also pay third-party service providers to host their private cloud. A private cloud is one in which the services and infrastructure are maintained on a private network.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Hybrid cloud
                            </span>
                            <span>
                                Hybrid clouds combine public and private clouds, bound together by technology that allows data and applications to be shared between them. By allowing data and applications to move between private and public clouds, a hybrid cloud gives your business greater flexibility and more deployment options and helps optimize your existing infrastructure, security, and compliance.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        Types of cloud services: IaaS, PaaS, serverless, and SaaS
                    </h2>
                    <span className="source-sans-3-regular flex flex-col">
                        Most cloud computing services fall into four broad categories: infrastructure as a service (IaaS), platform as a service (PaaS), serverless, and software as a service (SaaS). These are sometimes called the cloud computing "stack" because they build on top of one another. Knowing what they are and how they’re different makes it easier to accomplish your business goals.
                    </span>
                    <div className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                IaaS
                            </span>
                            <span>
                                The most basic category of cloud computing services. With infrastructure as a service (IaaS), you rent IT infrastructure—servers and virtual machines (VMs), storage, networks, operating systems—from a cloud provider on a pay-as-you-go basis.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                PaaS
                            </span>
                            <span>
                                Platform as a service (PaaS) refers to cloud computing services that supply an on-demand environment for developing, testing, delivering, and managing software applications. PaaS is designed to make it easier for developers to quickly create web or mobile apps, without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and databases needed for development.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                SaaS
                            </span>
                            <span>
                                Software as a service (SaaS) is a method for delivering software applications over the internet, on demand and typically on a subscription basis. With SaaS, cloud providers host and manage the software application and underlying infrastructure, and handle any maintenance, like software upgrades and security patching. Users connect to the application over the internet, usually with a web browser on their phone, tablet, or PC.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                            Serverless computing
                            </span>
                            <span>
                            Overlapping with PaaS, serverless computing focuses on building app functionality without spending time continually managing the servers and infrastructure required to do so. The cloud provider handles the setup, capacity planning, and server management for you. Serverless architectures are highly scalable and event-driven, only using resources when a specific function or trigger occurs.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CloudComputingPage;