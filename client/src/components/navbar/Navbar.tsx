import { Bell, Search, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">

      <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 w-80">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer text-gray-600" />

        <UserCircle
          size={34}
          className="cursor-pointer text-gray-700"
        />
      </div>

    </header>
  );
};

export default Navbar;