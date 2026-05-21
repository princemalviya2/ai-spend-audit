import DashboardCards from "../components/DashboardCards";
import UploadSection from "../components/UploadSection";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          AI Spend Audit
        </h1>

        <p className="text-gray-400">
          Analyze and optimize AI spending
        </p>
      </div>

      <DashboardCards />
      <UploadSection />
      <Recommendations />

    </main>
  );
}