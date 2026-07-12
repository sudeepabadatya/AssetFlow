import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-500"
      />

      <input
        type="text"
        placeholder="Search assets..."
        className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;