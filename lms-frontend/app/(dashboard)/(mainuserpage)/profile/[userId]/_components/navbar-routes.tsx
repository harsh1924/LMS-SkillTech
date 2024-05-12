'use client';

import UserDashboard from "@/app/(dashboard)/(mainuserpage)/profile/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "../../../../../../components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


export const NavbarRoutes = () => {

    const pathname = usePathname();
    const router = useRouter();
    // const userId = params.userId

    const isAdminPage = pathname?.startsWith('/admin');
    const isPLayerPage = pathname?.includes('/chapter')

    return (
        <div className="flex gap-x-2 ml-auto">
            {isAdminPage || isPLayerPage ? (
                <Link href={`/profile/`}>
                    <Button size='sm' variant='ghost'>
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <div>
                    <Link href={'/admin/courses'}>
                        <Button size='sm' variant='ghost'>
                            Teacher Mode
                        </Button>
                    </Link>
                    <Link href={`/`}>
                        <Button size='sm' variant='ghost'>
                            Home
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}