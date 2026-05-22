import SpendingChart from "../components/SpendingChart";
import DashboardCards from "../components/DashboardCards";
import UploadSection from "../components/UploadSection";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        AI Spend Audit Dashboard
      </h1>

      <UploadSection />

      <div className="mt-6">
        <DashboardCards />
      </div>

      <div className="mt-6">
        <SpendingChart />
        <Recommendations />
      </div>
    </main>
  );
}