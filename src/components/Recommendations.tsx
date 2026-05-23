export default function Recommendations() {
  const tips = [
    "Switch ChatGPT Team → ChatGPT Plus for smaller teams",
    "Cursor usage appears high — review seat count",
    "Claude Pro may be enough instead of Team plan",
    "Estimated yearly savings: ₹12,000",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        AI Audit Recommendations
      </h2>

      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500"
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}