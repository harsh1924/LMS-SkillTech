import { Footer } from "../_components/(mainPageComponents)/footer";
import AvailableCourses from "../_components/(mainPageComponents)/availabel-courses";
import { HomeNavbar } from "../_components/(mainPageComponents)/navbar";
import { HomePageCarousel } from "../_components/(mainPageComponents)/carousel";

import MainPageImage from '@/app/helpers/images/MainPage-image/MainPage-Image.jpeg'

export default function Home() {

  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      <div className="hidden lg:flex">
        <HomePageCarousel />
      </div>

      {/* landing page main heading */}
      <div className="py-6 px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-y-3">
        <div className="md:w-[48%] flex flex-col gap-y-3">
          <h1 className="text-4xl md:px-10 lg:text-5xl oxygen-bold">
            Skills that drive you forward
          </h1>
          <p className="text-[22px] md:px-10 source-sans-3-regular">
            Technology and the world of work change fast — with us, you&apos;re faster. Get the skills to achieve goals and stay competitive.
          </p>
          <a href={'#our-courses'} className="md:ml-10 border w-[200px] text-center px-5 py-3 bg-primaryblue text-white rounded-md font-sans font-semibold hover:bg-categoryborder transition-all ease-in-out duration-300">
            Explore Programs
          </a>
        </div>
        <div className="md:w-1/2 justify-center flex">
          <img src={MainPageImage.src} alt="Main Page Image" className="w-[90%] rounded-md" loading="lazy" />
        </div>
      </div>

      {/* Available Courses */}
      <AvailableCourses />

      {/* Footer */}
      <Footer />

      {/* chat on whatsapp */}
      <div className="fixed bottom-4 right-6 z-50">
        <a href="https://wa.me/917701885882?text=Hello%20SkillTech" target="_blank">
          {/* <Twitch /> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" className="h-12 bg-green-500 p-2 rounded-lg" alt="WhatsApp Icon" />
        </a>
      </div>

    </div>
  );
}
