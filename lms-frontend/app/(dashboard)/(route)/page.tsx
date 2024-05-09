import Link from "next/link";
import { Logo } from "../_components/logo";
import GetAllCourses from "../_components/allcourses";
import { HomeMobileSidebar } from "../_components/homemobilesiebar";
import { MenuIcon } from "lucide-react";
import { Categories } from "../_components/categories";
import { Footer } from "../_components/footer";

export default function Home() {
  return (
    <div>
      {/* mobile sidebar */}

      {/* Navbar */}
      <div className="flex py-4 px-8 items-center justify-between shadow-md">
        <div className="">
          <MenuIcon className="flex md:hidden" />
          <div className="md:hidden">
            <HomeMobileSidebar />
          </div>
        </div>

        {/* logo */}
        <Link href={'/'}>
          <Logo />
        </Link>

        {/* Categories */}


        {/* SearchBar */}
        <div className="hidden md:flex">
          <input type="search" className="border px-4 py-2 rounded-3xl outline-none border-black lg:w-[400px]" placeholder="Search for anything" />
        </div>

        {/* Buisnesses */}
        <Link href={'/buisness'} className="hidden md:flex">
          Buisness
        </Link>

        <Link className="hidden md:flex" href={'/become-instructor'}>
          Become an instructor
        </Link>


        {/* Login Signup Button */}
        <div className="flex gap-x-5">
          <Link href={'/signup'} className="hidden lg:flex">
            <button className="border rounded-md px-4 py-2 md:text-[19px] bg-sky-500 text-white font-serif hover:bg-sky-600 transition-all ease-in-out duration-300">
              Sign up
            </button>
          </Link>
          <Link href={'/login'}>
            <button className="border border-sky-500 rounded-md px-4 py-2 md:text-[19px] text-sky-500 font-serif hover:bg-sky-500 hover:text-white transition-all ease-in-out duration-300">
              Log in
            </button>
          </Link>
        </div>
      </div>

      {/*  */}

      {/* <div className="flex p-10">
        <GetAllCourses />
      </div> */}

    {/* Footer */}
    <Footer />
      
    </div>
  );
}
