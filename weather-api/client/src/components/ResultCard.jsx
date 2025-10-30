import { Cloud } from "lucide-react";

function ResultCard({ result }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-500 rounded-full p-2">
          <Cloud className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-green-800">Prediction Result</h2>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ResultCard;
