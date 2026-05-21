export default function UploadSection() {
  return (
    <div className="bg-zinc-900 mt-10 p-8 rounded-xl">

      <h2 className="text-2xl font-bold mb-5">
        Start Your AI Audit
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Tool (ChatGPT, Claude, Cursor...)"
          className="p-3 rounded bg-black border border-gray-700"
        />

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          className="p-3 rounded bg-black border border-gray-700"
        />

        <input
          type="number"
          placeholder="Team Size"
          className="p-3 rounded bg-black border border-gray-700"
        />

        <select
          className="p-3 rounded bg-black border border-gray-700"
        >
          <option>Coding</option>
          <option>Writing</option>
          <option>Research</option>
          <option>Data</option>
          <option>Mixed</option>
        </select>

        <button className="bg-blue-600 p-3 rounded">
          Generate Audit
        </button>

      </div>

    </div>
  );
}