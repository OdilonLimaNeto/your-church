
import { useState } from "react";
import { 
  Calendar, 
  Users, 
  DollarSign, 
  CheckSquare, 
  Shield, 
  BarChart3,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "finance", label: "Finanças", icon: DollarSign },
    { id: "activities", label: "Atividades", icon: Calendar },
    { id: "members", label: "Membros", icon: Users },
    { id: "attendance", label: "Presença", icon: CheckSquare },
    { id: "roles", label: "Cargos", icon: Shield },
  ];

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-gray-800">Igreja+</h1>
              <p className="text-sm text-gray-500">Sistema de Gestão</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg text-white">
            <p className="text-sm font-medium">Usuário Logado</p>
            <p className="text-xs opacity-90">Pastor Principal</p>
          </div>
        </div>
      )}
    </div>
  );
};
