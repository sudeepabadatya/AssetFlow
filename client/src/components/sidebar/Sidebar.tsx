import {
  LayoutDashboard,
  Building2,
  Package,
  ArrowRightLeft,
  CalendarDays,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Bell,
  User,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Organization",
    icon: Building2,
  },
  {
    name: "Assets",
    icon: Package,
  },
  {
    name: "Allocation",
    icon: ArrowRightLeft,
  },
  {
    name: "Booking",
    icon: CalendarDays,
  },
  {
    name: "Maintenance",
    icon: Wrench,
  },
  {
    name: "Audit",
    icon: ClipboardCheck,
  },
  {
    name: "Reports",
    icon: BarChart3,
  },
  {
    name: "Notifications",
    icon: Bell,
  },
  {
    name: "Profile",
    icon: User,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col shadow-lg">
      
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          AssetFlow
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-slate-800 transition-all duration-200"
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;