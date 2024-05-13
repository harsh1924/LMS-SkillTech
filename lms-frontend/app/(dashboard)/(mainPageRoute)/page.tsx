import Link from "next/link";
import { Footer } from "../_components/(mainPageComponents)/footer";
import CertificationArea from "../_components/(mainPageComponents)/certificationArea";
import AvailableCourses from "../_components/(mainPageComponents)/availabel-courses";
import { HomeNavbar } from "../_components/(mainPageComponents)/navbar";

export default function Home() {
  return (
    <div>
      {/* mobile sidebar */}

      {/* Navbar */}
      <HomeNavbar />

      {/* landing page main heading */}
      <div className="py-6 px-5 flex items-center">
        <div className="w-[48%]  flex flex-col gap-y-3">
          <h1 className="text-4xl md:px-10 md:text-5xl font-bold font-serif">
            Skills that drive you forward
          </h1>
          <p className="text-xl md:px-10">
            Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.
          </p>
          <Link href={'/all-courses'} className="md:ml-10 border w-[200px] text-center px-5 py-3 bg-sky-500 text-white rounded-md font-sans font-semibold hover:bg-sky-600 transition-all ease-in-out duration-300">
            Explore Programs
          </Link>
        </div>
        <div className="w-1/2">
          <img src="https://as2.ftcdn.net/v2/jpg/02/93/50/51/1000_F_293505190_QACuhlzI4WXOeznVC59LLb2yUcQbf3xv.jpg" alt="" />
        </div>
      </div>

      {/* <div className="flex p-10">
        <GetAllCourses />
      </div> */}

      {/* Available Courses */}
      <AvailableCourses />

      {/* Certification Area */}
      <CertificationArea />

      {/* Footer */}
      <Footer />

    </div>
  );
}
