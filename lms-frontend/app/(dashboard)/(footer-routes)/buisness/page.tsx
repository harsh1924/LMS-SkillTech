import Link from "next/link";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";
import '@/app/(dashboard)/dashboard.css'
import { Footer } from "../../_components/(mainPageComponents)/footer";

const BusinessPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="px-4 lg:px-10 py-10 source-sans-3-regular text-justify">
                <p>
                    We are helping corporates to increase their productivity by training their staffs.  We are designing customize training program to increase the productivity based on industry and skill requirements.
                </p>
                <p>
                    The training program as prepared by industry subject matter experts (SME). The training programs are fine tuned using AI tools to fit the exact requirement of a particular industry. The delivery of the training is online and offline mode base on the requirement. We use rigorous assessment test and practical application periodically with in training schedule to access the learning of the participant. We award completion certificate to participant after completing the final assessment test.
                </p>
                <div className="py-3">
                    <p>
                        We provide below customize solution.
                    </p>
                    <p>
                        1.	Learning management system for corporates.
                    </p>
                    <p>
                        2.	Customize training program.
                    </p>
                    <p>
                        3.	Certificate Management.
                    </p>
                    <p>
                        4.	Learning path management as per career progression.
                    </p>
                    <p>
                        5.	Training delivery (Online and Offline Mode).
                    </p>
                    <p>
                        6.	Assessment test.
                    </p>
                </div>
                <p>
                    Please contact our sales and marketing team for more information.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default BusinessPage;