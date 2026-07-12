import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;