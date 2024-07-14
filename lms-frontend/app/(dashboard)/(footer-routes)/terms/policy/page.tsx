import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="w-full">
                <HomeNavbar />
            </div>
            <div className="px-3 lg:px-16 py-10 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-3 lg:gap-y-6">
                    <h1 className="oxygen-bold text-2xl lg:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="source-sans-3-regular">
                        Effective Date: 14 July 2024
                    </p>
                    <p className="lg:text-2xl source-sans-3-regular">
                        SkillTech is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.skilltechindia.net], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
                    </p>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        1. Information We Collect
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="lg:text-xl source-sans-3-regular">
                            <ol className="list-disc px-6 flex flex-col gap-y-2">
                                <li>
                                    <p className="font-bold">
                                        Personal Data:
                                    </p>
                                    <ol className="list-disc px-6">
                                        <li>
                                            Name
                                        </li>
                                        <li>
                                            Email address
                                        </li>
                                        <li>
                                            Phone number
                                        </li>
                                        <li>
                                            Address
                                        </li>
                                        <li>
                                            Payment information (if applicable)
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p className="font-bold">
                                        Non Personal Data:
                                    </p>
                                    <ol className="list-disc px-6">
                                        <li>
                                            Browser type
                                        </li>
                                        <li>
                                            Operating system
                                        </li>
                                        <li>
                                            Internet service provider
                                        </li>
                                        <li>
                                            Other similar usage data
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        2. Use of Your Information
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="lg:text-xl source-sans-3-regular">
                            <ol className="list-disc px-6 flex flex-col gap-y-2">
                                <li>
                                    Provide and manage your access to our Site.
                                </li>
                                <li>
                                    Improve our products and services.
                                </li>
                                <li>
                                    Send you promotional emails about new products, special offers, or other information which we think you may find interesting.
                                </li>
                                <li>
                                    Contact you for market research purposes.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        3. Disclosure of Your Information
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                    </p>
                    <div className="flex flex-col gap-y-2">
                        <div className="lg:text-xl source-sans-3-regular">
                            <ol className="list-disc px-6 flex flex-col gap-y-2">
                                <li>
                                    By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                                </li>
                                <li>
                                    Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        4. Security of Your Information
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        5. Changes to This Privacy Policy
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        SkillTech reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our Site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: <br /> (a) acknowledgment of the modified Privacy Policy; and <br /> (b) agreement to abide and be bound by that Policy.
                    </p>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4">
                    <h2 className="oxygen-bold text-lg lg:text-2xl">
                        6. Contact Us
                    </h2>
                    <p className="lg:text-xl source-sans-3-regular">
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    SkillTech, Inc. <br />
                    123 Tech Street <br />
                    City, TX 12345 <br />
                    Email: privacy@skilltech.com <br />
                </div>
                {/* <Separator /> */}
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default PrivacyPolicy;