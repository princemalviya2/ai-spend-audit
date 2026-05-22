export default function DashboardCards() {
  const cards = [
    { title: "Total Spend", value: "₹45,000" },
    { title: "Food", value: "₹12,000" },
    { title: "Savings", value: "₹8,500" },
    { title: "Transport", value: "₹5,000" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
        >
          <h3 className="text-gray-500">{card.title}</h3>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}