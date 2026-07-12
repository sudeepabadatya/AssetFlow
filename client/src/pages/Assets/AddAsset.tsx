import DashboardLayout from "../../layouts/DashboardLayout";
import AssetForm from "../../components/forms/AssetForm";

const AddAsset = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Add New Asset
      </h1>

      <AssetForm />

    </DashboardLayout>
  );
};

export default AddAsset;