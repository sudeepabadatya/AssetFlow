import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/cards/StatCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Assets"
          value={245}
        />

        <StatCard
          title="Available Assets"
          value={120}
        />

        <StatCard
          title="Allocated Assets"
          value={98}
        />

        <StatCard
          title="Maintenance"
          value={27}
        />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;