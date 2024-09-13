import { Footer } from "@/app/(dashboard)/_components/(mainPageComponents)/footer";
import { HomeNavbar } from "@/app/(dashboard)/_components/(mainPageComponents)/navbar";

const ITInfrastructurePage = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="flex flex-col justify-center py-6 px-4 lg:px-10 gap-y-10 text-justify">
                <div className="flex flex-col gap-y-4">
                    <h1 className="oxygen-bold text-2xl text-center">
                        Digital Marketing
                    </h1>
                    <p className="source-sans-3-regular flex flex-col text-lg">
                        <span>
                            Digital marketing is the use of websites, apps, mobile devices, social media, search engines, and other digital means to promote and sell products and services.
                        </span>
                        <br />
                        <span>
                            Digital marketing involves many of the same principles as traditional marketing and is often considered an additional way for companies to approach consumers and understand their behavior. Companies often combine traditional and digital marketing techniques in their strategies. But digital marketing also comes with its own set of challenges. Digital marketing started to become popular with the widespread adoption of the internet in the 1990s.
                        </span>
                        <br />
                        <span>
                            Digital marketing promotes products and services through channels such as websites, mobile devices, and social media platforms.
                            Digital marketers have a number of tools to measure the effectiveness of their campaigns.
                            One of the biggest challenges digital marketers face is how to set themselves apart in a world that is oversaturated with digital ads and other distractions.
                        </span>
                        <br />
                        <span>
                            Marketing encompasses a wide range of techniques and media that companies can use to promote their products and services to potential consumers and improve their market share. To be successful, it requires a combination of advertising and sales savvy. Professional marketers take on these tasks either internally at individual companies or externally at marketing firms that may serve many different clients.
                        </span>
                        <br />
                        <span>
                            Companies once focused on marketing through print, television, and radio because that was all they had. Although those options still exist, the internet gave companies another way to reach consumers and gave rise to digital marketing.
                        </span>
                        <br />
                        <span>
                            The new technologies and trends forced companies to change their marketing strategies and rethink their budgets. Email became a popular marketing tool in the early days of digital marketing. Then the focus shifted to search engines like Netscape, which allowed businesses to tag and keyword items to get themselves noticed. The development of social platforms like Facebook made it possible for companies to track user data and deliver their messages to very specific audiences.
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ITInfrastructurePage;