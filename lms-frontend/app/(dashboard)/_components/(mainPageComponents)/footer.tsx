import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-black grid grid-cols-2 md:flex md:justify-around py-8 mt-16">
            <div className="px-10 py-6">
                <h3 className="text-white text-lg oxygen-regular">
                    Follow us!
                </h3>
                <div className="py-2 flex gap-x-1">
                    <Link href={'https://www.facebook.com/profile.php?id=61560911574316'} className="cursor-pointer" target="_blank">
                        <Facebook size={22} className="text-white" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/skilltech-india-b11802312/'} target="_blank">
                        <LinkedinIcon size={22} className="text-white" />
                    </Link>
                    <Link href={'/'}>
                        <Twitter size={22} className="text-white" />
                    </Link>
                    <Link href={'/'}>
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
                        Teach on Skill Tech
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
                    <Link href={'/reviews'}>
                      Alumni Speak
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
                <h3 className="text-white text-lg oxygen-regular">
                    Buisness
                </h3>
                <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm source-sans-3-regular">
                    <Link href={'/skilltech-partners'}>
                       Partners
                    </Link>
                    <Link href={'/affiliate'}>
                      Affiliate
                    </Link>
                    <Link href={'/corporate-training'}>
                        Corporate Training
                    </Link>
                </div>
            </div>
        </div>
    )
}