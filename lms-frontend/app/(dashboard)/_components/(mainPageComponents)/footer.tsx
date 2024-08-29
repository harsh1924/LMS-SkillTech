import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-black grid grid-cols-2 md:flex md:justify-around py-8 mt-16">
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
                        {/* /skilltech-partners */}
                        Corporate Solution
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
    )
}