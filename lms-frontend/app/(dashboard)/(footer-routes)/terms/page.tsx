import { Separator } from "@/components/ui/separator";

import { Footer } from "../../_components/(mainPageComponents)/footer";
import { HomeNavbar } from "../../_components/(mainPageComponents)/navbar";

const TermsOfUse = () => {
    return (
        <div>
            <div className="w-full">
                <HomeNavbar />
            </div>
            <div className="px-4 lg:px-10 py-6 flex flex-col gap-y-5 text-justify">
                <div className="flex flex-col gap-y-1">
                    <h1 className="source-sans-3-bold text-xl">
                        SkillTech Terms and Conditions
                    </h1>
                    <p className="source-sans-3-regular">
                        Welcome to SkillTech! These Terms and Conditions govern your use of the SkillTech website and services. By accessing or using SkillTech, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        1. Acceptance of Terms
                    </h2>
                    <p className="source-sans-3-regular">
                        By accessing or using SkillTech (including browsing the website, registering an account, or enrolling in courses), you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not access the website or use our services.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        2. Use of SkillTech
                    </h2>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold  text-xl">
                                2.1 Eligibility
                            </h3>
                            <p className="source-sans-3-regular">
                                You must be at least 18 years old to create an account and use SkillTech. By using our website, you represent and warrant that you are at least 18 years old.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold text-xl">
                                2.2 Account Registration
                            </h3>
                            <p className="source-sans-3-regular">
                                When you register for an account with SkillTech, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold text-xl">
                                2.3 Prohibited Activities
                            </h3>
                            <div className="source-sans-3-regular">
                                You agree not to engage in any of the following prohibited activities:
                                <br />
                                <ol className="list-disc px-6">
                                    <li>
                                        Violating any laws or regulations.
                                    </li>
                                    <li>
                                        Using SkillTech for any unlawful purpose.
                                    </li>
                                    <li>
                                        Attempting to access accounts or data that do not belong to you.
                                    </li>
                                    <li>
                                        Interfering with or disrupting the operation of SkillTech.
                                    </li>
                                    <li>
                                        Uploading or transmitting viruses or malicious code.
                                    </li>
                                    <li>
                                        Impersonating another person or entity.
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold text-xl">
                                2.4 Content and Intellectual Property
                            </h3>
                            <p className="source-sans-3-regular">
                                SkillTech may contain content such as courses, videos, text, graphics, and logos that are protected by copyright, trademark, and other laws. You agree not to copy, modify, distribute, or reproduce any content from SkillTech unless authorized by us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        3. Payments and Refunds
                    </h2>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold text-lg">
                                3.1 Pricing
                            </h3>
                            <p className="source-sans-3-regular">
                                Prices for courses and services offered on SkillTech are displayed on the website and are subject to change without notice. All payments are processed securely through our payment gateway.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="source-sans-3-bold text-lg">
                                3.2 Refunds
                            </h3>
                            <p className="source-sans-3-regular">
                                Refund policies for courses and services purchased through SkillTech are outlined on the respective course pages. Refunds may be issued according to these policies, which may vary depending on the course provider.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        4. Privacy
                    </h2>
                    <p className="source-sans-3-regular">
                        Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and disclose your personal information. By using SkillTech, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        5. Modifications to Terms
                    </h2>
                    <p className="source-sans-3-regular">
                        SkillTech reserves the right to modify or update these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting. It is your responsibility to review these Terms periodically for changes.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        6. Termination
                    </h2>
                    <p className="source-sans-3-regular">
                        SkillTech may suspend or terminate your access to the website or services at any time, without prior notice, if we believe you have violated these Terms and Conditions or for any other reason.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        7. Disclaimer of Warranties
                    </h2>
                    <p className="source-sans-3-regular">
                        SkillTech is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or completeness of the content on our website or the availability of our services.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        8. Limitation of Liability
                    </h2>
                    <p className="source-sans-3-regular">
                        In no event shall SkillTech, its affiliates, or their respective directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of SkillTech.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h2 className="source-sans-3-bold text-lg">
                        9. Governing Law
                    </h2>
                    <p className="source-sans-3-regular">
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-col gap-y-1">
                        <h3 className="source-sans-3-bold lg:text-lg">
                            10. Contact Us
                        </h3>
                        <div className="source-sans-3-regular">
                            If you have any questions about these Terms and Conditions, please contact us at:
                            <br />
                            <ol className="list-disc px-6">
                                <li>
                                    Email: info@skilltechindia.net
                                </li>
                                <li>
                                    Address: C-26, 2nd Floor, Pocket-C , Sector-3, Dwarka, New Delhi-110078
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Separator />
                <p className="source-sans-3-regular">
                    By using SkillTech, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These Terms and Conditions constitute a legally binding agreement between you and SkillTech.
                </p>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default TermsOfUse;