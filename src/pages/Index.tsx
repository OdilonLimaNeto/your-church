
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { FinanceModule } from "@/components/FinanceModule";
import { ActivitiesModule } from "@/components/ActivitiesModule";
import { MembersModule } from "@/components/MembersModule";
import { AttendanceModule } from "@/components/AttendanceModule";
import { RolesModule } from "@/components/RolesModule";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard />;
      case "finance":
        return <FinanceModule />;
      case "activities":
        return <ActivitiesModule />;
      case "members":
        return <MembersModule />;
      case "attendance":
        return <AttendanceModule />;
      case "roles":
        return <RolesModule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 p-6">
        {renderActiveModule()}
      </main>
    </div>
  );
};

export default Index;
