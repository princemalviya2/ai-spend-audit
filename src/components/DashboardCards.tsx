export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2>Total Spend</h2>
        <p className="text-3xl mt-2">₹12500</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2>Active Services</h2>
        <p className="text-3xl mt-2">8</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2>Potential Savings</h2>
        <p className="text-3xl mt-2 text-green-400">
          ₹3500
        </p>
      </div>

    </div>
  );
}