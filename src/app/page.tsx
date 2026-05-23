import SpendingChart from "../components/SpendingChart";
import DashboardCards from "../components/DashboardCards";
import UploadSection from "../components/UploadSection";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        AI Spend Audit Dashboard
      </h1>

      <UploadSection />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <DashboardCards />
</div>

      <div className="mt-6">
        <SpendingChart />
        <Recommendations />
      </div>
    </main>
  );
}