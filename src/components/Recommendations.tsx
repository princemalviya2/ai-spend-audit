export default function Recommendations() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li> OpenAI API usage updated</li>
          <li> High usage detected</li>
          <li> Spend increased by 12%</li>
        </ul>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          AI Recommendations
        </h2>

        <ul className="space-y-3">
          <li> Reduce unused subscriptions</li>
          <li> Optimize API usage</li>
          <li> Estimated savings ₹3500</li>
        </ul>
      </div>

    </div>
  );
}