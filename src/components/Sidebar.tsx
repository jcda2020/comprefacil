import { Home, Package, BarChart2, Settings } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home },
  { label: "Produtos", icon: Package, active: true },
  { label: "Relatórios", icon: BarChart2 },
  { label: "Administração", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8 text-center">CompreFácil</div>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        {menuItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left hover:bg-gray-800 transition ${
              active ? "bg-gray-800" : ""
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
