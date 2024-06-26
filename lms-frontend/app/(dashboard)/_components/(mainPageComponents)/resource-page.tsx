'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export const ResourcePage = () => {

    const router = useRouter();

    return (
        <span>
            <div onClick={() => router.push('/resources')} className="hover:text-[#347bdc] ease-in-out transition-all duration-300 z-50 py-2 rounded-sm lg:flex items-center gap-x-2 hidden group relative cursor-pointer">
                Resources
                <span className="hidden border rounded-md flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[38px] left-0 text-lg py-2 w-[280px] transition-all ease-in-out duration-300">
                    <span className="flex flex-col gap-y-5 ">
                        <span className="flex flex-col gap-y-1">
                            <Link href={'/resources'} className='hover:text-[#347bdc] py-1 px-5 text-start text-[14px] source-sans-3-regular' >
                                Study Material
                            </Link>
                            <Link href={'/resources/question-bank'} className='hover:text-[#347bdc] py-1 px-5 text-start text-[14px] source-sans-3-regular' >
                                Question Bank
                            </Link>
                            <Link href={'/resources/interview-questions'} className='hover:text-[#347bdc] py-1 px-5 text-start text-[14px] source-sans-3-regular'>
                                Iterview Questions
                            </Link>
                            <Link href={'/resources/interview-tips'} className='hover:text-[#347bdc] py-1 px-5 text-start text-[14px] source-sans-3-regular'>
                                Iterview Tips
                            </Link>
                        </span>
                    </span>
                </span>
            </div>
        </span>
    )
}