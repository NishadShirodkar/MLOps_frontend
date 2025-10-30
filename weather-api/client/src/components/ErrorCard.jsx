import { Cloud } from "lucide-react";

function ErrorCard({ error }) {
  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-500 rounded-full p-2">
          <Cloud className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-red-800">Error</h2>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-red-700 font-medium">{error}</p>
      </div>
    </div>
  );
}

export default ErrorCard;
