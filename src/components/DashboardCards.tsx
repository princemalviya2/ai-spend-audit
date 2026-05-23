export default function DashboardCards() {
  const cards = [
  { title: "ChatGPT", amount: "₹999/month" },
  { title: "Claude", amount: "₹1500/month" },
  { title: "Cursor", amount: "₹800/month" },
  { title: "Total AI Spend", amount: "₹3299/month" },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
        >
          <h3 className="text-gray-500">{card.title}</h3>
          <p className="text-2xl font-bold">{card.amount}</p>
        </div>
      ))}
    </div>
  );
}