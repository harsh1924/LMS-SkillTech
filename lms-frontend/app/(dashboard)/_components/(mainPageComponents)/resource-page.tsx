'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export const ResourcePage = () => {

    return (
        <span>
            <div className="hover:text-primaryhoverblue ease-in-out transition-all duration-300 z-50 py-2 rounded-sm lg:flex items-center gap-x-2 hidden group relative cursor-pointer">
                <Link className="flex group items-center" href={'/resources'}>
                    Resources
                    <ChevronDown className="group-hover:hidden" size={20} />
                    <ChevronUp className="hidden group-hover:block" size={20} />
                </Link>
                <span className="hidden border rounded-md flex-col gap-y-4 group-hover:flex hover:flex bg-white absolute text-black top-[38px] left-0 text-lg py-2 w-[280px] transition-all ease-in-out duration-300">
                    <span className="flex flex-col gap-y-5 ">
                        <span className="flex flex-col gap-y-1">
                            <Link href={'/resources'} className='hover:text-primaryhoverblue py-1 px-5 text-start text-[14px] source-sans-3-regular' >
                                Study Material
                            </Link>
                            <Link href={'/resources/question-bank'} className='hover:text-primaryhoverblue py-1 px-5 text-start text-[14px] source-sans-3-regular' >
                                Question Bank
                            </Link>
                            <Link href={'/resources/interview-tips'} className='hover:text-primaryhoverblue py-1 px-5 text-start text-[14px] source-sans-3-regular'>
                                Interview Tips
                            </Link>
                        </span>
                    </span>
                </span>
            </div>
        </span>
    )
}