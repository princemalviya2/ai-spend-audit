"use client";

import { useState } from "react";

export default function UploadSection() {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Analysis completed!");
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

      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Analyzing..." : "Analyze Spending"}
      </button>
    </div>
  );
}