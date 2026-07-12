const AssetForm = () => {
  return (
    <form className="bg-white p-6 rounded-xl shadow border space-y-5">

      <div>
        <label className="block font-medium mb-2">
          Asset Name
        </label>

        <input
          type="text"
          placeholder="Enter asset name"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Category
        </label>

        <select className="w-full border rounded-lg p-3">
          <option>Laptop</option>
          <option>Desktop</option>
          <option>Printer</option>
          <option>Projector</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-2">
          Department
        </label>

        <input
          type="text"
          placeholder="Department"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Purchase Date
        </label>

        <input
          type="date"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Status
        </label>

        <select className="w-full border rounded-lg p-3">
          <option>Available</option>
          <option>Allocated</option>
          <option>Maintenance</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Asset
      </button>

    </form>
  );
};

export default AssetForm;