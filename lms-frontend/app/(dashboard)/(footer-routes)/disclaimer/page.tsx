import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const DisclaimerPage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="text-justify py-10 px-10 flex flex-col gap-y-3">
                <h1 className="oxygen-bold text-xl lg:text-2xl">
                    Disclaimer
                </h1>
                <ul className="list-disc list-outside flex flex-col gap-y-3 px-5 source-sans-3-regular">
                    <li>
                        PMP, PMI, PgMP, PfMP, ACP, PBA, RMP, PMBOK, CAPM, SP, and OPM3 are registered marks of the Project Management Institute, Inc.
                    </li>
                    <li>
                        ITIL® is a registered trade mark of AXELOS Limited.
                    </li>
                    <li>
                        PRINCE2® is a [registered] trade mark of AXELOS Limited.

                    </li>
                    <li>
                        MSP® is a [registered] trade mark of AXELOS Limited.
                    </li>
                    <li>
                        CISA® is a Registered Trade Mark of the Information Systems Audit and Control Association (ISACA) and the IT Governance Institute.
                    </li>
                    <li>
                        CISSP® is a registered mark of The International Information Systems Security Certification Consortium ((ISC)2).
                    </li>
                    <li>
                        CISCO®, CCNA®, and CCNP® are trademarks of Cisco and registered trademarks in the United States and certain other countries.
                    </li>
                    <li>
                        Skilltech and its affiliates, predecessors, successors and assigns are in no way associated, sponsored or promoted by SAP SE and neither do they provide any SAP based online or real-time courses or trainings
                    </li>
                    <li>
                        Professional Scrum Master is a registered trademark of Scrum.org
                    </li>
                    <li>
                        The APMG-International Finance for Non-Financial Managers and Swirl Device logo is a trade mark of The APM Group Limited.

                    </li>
                    <li>
                        The Open Group®, TOGAF® are trademarks of The Open Group.
                    </li>
                    <li>
                        IIBA®, the IIBA® logo, BABOK® and Business Analysis Body of Knowledge® are registered trademarks owned by International Institute of Business Analysis.
                    </li>
                    <li>
                        CBAP® is a registered certification mark owned by International Institute of Business Analysis. Certified Business Analysis Professional, EEP and the EEP logo are trademarks owned by International Institute of Business Analysis.
                    </li>
                    <li>
                        COBIT® is a trademark of ISACA® registered in the United States and other countries.
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default DisclaimerPage;