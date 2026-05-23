"use client";

import { useState } from "react";

export default function UploadSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
    setLoading(false);

setResult(
  `
AI Audit Complete 

Total AI Spend: ₹3299/month
Potential Savings: ₹1000/month

Recommendations:
• Remove unused Cursor seats
• Downgrade Claude plan
• Optimize ChatGPT usage
`
);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Upload Bank Statement
      </h2>

      <input
        type="file"
        className="border p-2 rounded w-full"
      />
<select className="border p-2 rounded w-full mt-4">
  <option>ChatGPT</option>
  <option>Claude</option>
  <option>Cursor</option>
  <option>Gemini</option>
  <option>GitHub Copilot</option>
</select>

<input
  type="number"
  placeholder="Team Size"
  className="border p-2 rounded w-full mt-4"
/>

<select className="border p-2 rounded w-full mt-4">
  <option>Coding</option>
  <option>Writing</option>
  <option>Research</option>
  <option>Data Analysis</option>
</select>
      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Analyzing..." : "Analyze Spending"}
      </button>
      {result && (
  <div className="mt-4 p-4 bg-green-100 rounded border-l-4 border-green-600 whitespace-pre-line">
    {result}
  </div>
)}
    </div>
  );
}