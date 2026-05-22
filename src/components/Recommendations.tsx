export default function Recommendations() {
  const tips = [
    "Reduce food spending by 10%",
    "Increase monthly savings by ₹2000",
    "Avoid unnecessary subscriptions",
    "Track daily expenses regularly",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        AI Recommendations
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