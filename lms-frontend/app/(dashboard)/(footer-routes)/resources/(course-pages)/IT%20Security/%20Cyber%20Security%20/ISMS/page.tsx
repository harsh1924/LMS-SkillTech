import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import Image from '@/app/helpers/images/images-1.jpeg'
const ITPage = () => {
    return (
        <div>
            <div className="w-screen">
                <HomeNavbar />
            </div>
            <div className="flex flex-col justify-center py-16 px-6 md:px-20 gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        IT Security/ Cyber Security /ISMS
                    </h1>
                    <p className="source-sans-3-regular flex flex-col gap-y-3 text-lg">
                        <span>
                            IT/Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories.
                        </span>
                        <span className="text-xl oxygen-bold pt-4">
                            What is the need for IT security?
                        </span>
                        <span>
                            As hackers get smarter, the need to protect your digital assets and network devices is even greater. While providing IT security can be expensive, a significant breach costs an organization far more. Large breaches can jeopardize the health of a small business. During or after an incident, IT security teams can follow an incident response plan as a risk management tool to gain control of the situation.
                        </span>
                        <span>
                            What is the difference between IT security and information security (InfoSec)?
                            Although IT security and information security sound similar, they do refer to different types of security. Information security refers to the processes and tools designed to protect sensitive business information from invasion, whereas IT security refers to securing digital data, through computer network security.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl oxygen-bold">
                        What are the threats to IT security?
                    </h2>
                    <p>
                        Threats to IT security can come in different forms. A common threat is malware, or malicious software, which may come in different variations to infect network devices, including:
                    </p>
                    <div className="source-sans-3-regular flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Ransomware
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Spyware
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span className="oxygen-semibold">
                                Viruses
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span>
                                These threats make it even more important to have reliable security practices in place. Learn more about malware to stay protected.
                            </span>
                        </div>
                        <p className="source-sans-3-regular flex flex-col gap-y-3 text-lg">
                            <span className="text-xl oxygen-bold pt-4">
                                How do I benefit from IT security?
                            </span>
                            <span>
                                IT security prevents malicious threats and potential security breaches that can have a huge impact on your organization. When you enter your internal company network, IT security helps ensure only authorized users can access and make changes to sensitive information that resides there. IT security works to ensure the confidentiality of your organization’s data.
                            </span>
                        </p>
                        <div className="flex flex-col gap-y-3">
                            <h2 className="text-xl oxygen-bold">
                                Types of IT security
                            </h2>
                            <div className="source-sans-3-regular flex flex-col gap-y-4">
                                <div className="flex flex-col gap-y-2">
                                    <span className="oxygen-semibold">
                                        Network security
                                    </span>
                                    <span>
                                        Network security is used to prevent unauthorized or malicious users from getting inside your network. This ensures that usability, reliability, and integrity are uncompromised. This type of security is necessary to prevent a hacker from accessing data inside the network. It also prevents them from negatively affecting your users’ ability to access or use the network.
                                        Network security has become increasingly challenging as businesses increase the number of endpoints and migrate services to public cloud.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <span className="oxygen-semibold">
                                        Internet security
                                    </span>
                                    <span>
                                        Internet security involves the protection of information that is sent and received in browsers, as well as network security involving web-based applications. These protections are designed to monitor incoming internet traffic for malware as well as unwanted traffic. This protection may come in the form of firewalls, antimalware, and antispyware.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <span className="oxygen-semibold">
                                        Endpoint security
                                    </span>
                                    <span>
                                        Endpoint security provides protection at the device level. Devices that may be secured by endpoint security include cell phones, tablets, laptops, and desktop computers. Endpoint security will prevent your devices from accessing malicious networks that may be a threat to your organization. Advance malware protection and device management software are examples of endpoint security.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <span className="oxygen-semibold">
                                        Cloud security
                                    </span>
                                    <span>
                                        Applications, data, and identities are moving to the cloud, meaning users are connecting directly to the Internet and are not protected by the traditional security stack. Cloud security can help secure the usage of software-as-a-service (SaaS) applications and the public cloud.  A cloud-access security broker (CASB), secure Internet gateway (SIG), and cloud-based unified threat management (UTM) can be used for cloud security.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <span className="oxygen-semibold">
                                        Application security
                                    </span>
                                    <span>
                                        With application security, applications are specifically coded at the time of their creation to be as secure as possible, to help ensure they are not vulnerable to attacks. This added layer of security involves evaluating the code of an app and identifying the vulnerabilities that may exist within the software.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ITPage;