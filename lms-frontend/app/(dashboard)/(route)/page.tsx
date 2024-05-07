import Link from "next/link";
import { Logo } from "../_components/logo";

export default function Home() {
  return (
    <div className="flex py-4 px-16 items-center justify-between">
      <Logo />
      <div className="flex gap-x-5">
        <Link href={'/signup'}>
          <button className="border rounded-md px-4 py-2 text-[19px] bg-sky-500 text-white font-serif hover:bg-sky-600 transition-all ease-in-out duration-300">
            Sign up
          </button>
        </Link>
        <Link href={'/login'}>
          <button className="border border-sky-500 rounded-md px-4 py-2 text-[19px] text-sky-500 font-serif hover:bg-sky-500 hover:text-white transition-all ease-in-out duration-300">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}
