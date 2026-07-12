import DashboardLayout from "../../layouts/DashboardLayout";
import AssetTable from "../../components/tables/AssetTable";
import SearchBar from "../../components/inputs/SearchBar";
import FilterDropdown from "../../components/inputs/FilterDropdown";

const Assets = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assets</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Asset
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <SearchBar />

        <FilterDropdown label="Category" />

        <FilterDropdown label="Status" />
      </div>

      <AssetTable />
    </DashboardLayout>
  );
};

export default Assets;