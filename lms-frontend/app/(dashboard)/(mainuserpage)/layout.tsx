import { Navbar } from "../_components/navbar";
import Sidebar from "../_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[80px] pl-56 fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            <div className="h-full flex w-56 flex-col fixed inset-y-0 ">
                <Sidebar />
            </div>
            <main className="pl-56">
            {children}
            </main>
        </div>
    );
}

export default DashboardLayout;