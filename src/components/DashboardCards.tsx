export default function DashboardCards() {
  const cards = [
    { title: "ChatGPT", amount: "₹999/month" },
    { title: "Claude", amount: "₹1500/month" },
    { title: "Cursor", amount: "₹800/month" },
    { title: "Total AI Spend", amount: "₹3299/month" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {cards.map((card, index) => (
        <div
          key={index}
         className="bg-white p-6 rounded-xl shadow hover:scale-105 transition min-h-[150px]"
        >
          <h3 className="text-gray-500 text-lg mb-2">
            {card.title}
          </h3>

        <p className="text-xl md:text-2xl font-bold text-black">
            {card.amount}
          </p>
        </div>
      ))}
    </div>
  );
}