import Sidebar from "../_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-full w-56 flex-col fixed inset-y-0 z-[-2]">
                <Sidebar />
            </div>
            {children}
        </div>
    );
}

export default DashboardLayout;