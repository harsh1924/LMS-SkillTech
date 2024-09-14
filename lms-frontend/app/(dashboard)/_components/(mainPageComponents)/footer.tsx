import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-2 md:flex md:justify-around py-4 mt-16">
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
                    <div className="py-2 flex gap-3 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                        <Link href={'/about-us'}>
                            About us
                        </Link>
                        <Link href={'/resources'}>
                            Resources
                        </Link>
                        <Link href={'/contact-us'}>
                            Contact us
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
                    <div className="py-2 flex gap-3 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                        <Link href={'/help'}>
                            Help
                        </Link>
                        <Link href={'/disclaimer'}>
                            Disclaimer
                        </Link>
                        <Link href={'/refund-policy'}>
                            Refund Policy
                        </Link>
                        <Link href={'/terms/policy'}>
                            Privacy Policy
                        </Link>
                        <Link href={'/terms'}>
                            Terms & Conditions
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
                <div className="px-5 py-6">
                    <p className="text-white text-lg oxygen-regular">
                        Get In Touch
                    </p>
                    <div className="py-2 flex text-slate-300 flex-col md:text-sm source-sans-3-regular w-[250px] gap-2">
                        <div>
                            <p className="font-semibold text-[16px] text-white">
                                Address:
                            </p>
                            <p>
                                C-26, 2nd Floor, Pocket-C , Sector-3, Dwarka, New Delhi-110078
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-[16px] text-white">
                                Email Address:
                            </p>
                            <p>
                                Send Resume : cv@skilltechindia.net
                            </p>
                            <p>
                                For Information : info@skilltechindia.net
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-[16px] text-white">
                                Contact No:
                            </p>
                            <p>
                                +91 7701885882
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}