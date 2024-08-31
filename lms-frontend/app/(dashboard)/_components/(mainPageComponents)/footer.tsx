import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-2 md:flex md:justify-around py-8 mt-16">
                <div className="px-10 py-6">
                    <h3 className="text-white pl-1 text-lg oxygen-regular">
                        Follow us!
                    </h3>
                    <div className="py-1 flex gap-x-1 items-start justify-start">
                        <Link href={'https://www.facebook.com/profile.php?id=61560911574316'} target="_blank">
                            <Facebook size={22} className="text-white" />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/skilltech-india-b11802312/'} target="_blank">
                            <LinkedinIcon size={22} className="text-white" />
                        </Link>
                        <Link href={'/'}>
                            <Twitter size={22} className="text-white" target="_blank" />
                        </Link>
                        <Link href={'https://www.instagram.com/skilltech_india01'} target="_blank">
                            <Instagram size={22} className="text-white" />
                        </Link>
                    </div>
                </div>
                <div className="px-5 py-6">
                    <h3 className="text-white text-lg oxygen-regular">
                        Company
                    </h3>
                    <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                        <Link href={'/about-us'}>
                            About us
                        </Link>
                        <Link href={'/contact-us'}>
                            Contact us
                        </Link>
                        <Link href={'/resources'}>
                            Resources
                        </Link>
                        <Link href={'/become-instructor'}>
                            Become an instructor
                        </Link>
                    </div>
                </div>
                <div className="px-10 py-6">
                    <h3 className="text-white text-lg oxygen-regular">
                        Help & Support
                    </h3>
                    <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                        <Link href={'/help'}>
                            Help
                        </Link>
                        <Link href={'#'}>
                            {/* /reviews */}
                            {/* Alumni Speak */}
                        </Link>
                        <Link href={'/terms'}>
                            Terms
                        </Link>
                        <Link href={'/terms/policy'}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="px-5 py-6">
                    <Link href={'/buisness'} className="text-white text-lg oxygen-regular">
                        Business
                    </Link>
                    <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                        <Link href={'/buisness'}>
                            Corporate Solution
                            {/* /skilltech-partners */}
                        </Link>
                        <Link href={'#'}>
                            {/* /affiliate */}
                            {/* Affiliate */}
                        </Link>
                        <Link href={'#'}>
                            {/* /corporate-training */}
                            {/* Corporate Training */}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-gray-500 mb-16"></div>
            <div className="text-[#807c26] pb-10 px-10 flex flex-col gap-y-3">
                <span className="text-white font-semibold text-lg">
                    Disclaimer
                </span>
                <ul className="list-disc list-outside flex flex-col gap-y-3 px-5">
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
        </div>
    )
}