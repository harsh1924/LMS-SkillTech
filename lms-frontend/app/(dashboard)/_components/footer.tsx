import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-black grid grid-cols-2 md:flex md:justify-between">
            <div className="px-10 py-6">
                <h3 className="text-white text-lg ">
                    Follow us!
                </h3>
                <div className="py-2 flex gap-x-1">
                    <span>
                        <Facebook size={22} className="text-white" />
                    </span>
                    <span>
                        <Instagram size={22} className="text-white" />
                    </span>
                    <span>
                        <Twitter size={22} className="text-white" />
                    </span>
                    <span>
                        <Instagram size={22} className="text-white" />
                    </span>
                </div>
            </div>
            <div className="px-5 py-6">
                <h3 className="text-white text-lg ">
                    Company
                </h3>
                <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm">
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
                <h3 className="text-white text-lg ">
                    Help & Support
                </h3>
                <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm">
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
                <h3 className="text-white text-lg ">
                    Buisnesses
                </h3>
                <div className="py-2 flex gap-x-1 text-slate-300 flex-col md:text-sm">
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