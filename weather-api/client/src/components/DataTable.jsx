import { useState } from "react";
import { CloudRain } from "lucide-react";

function DataTable({ records }) {
  const [showAll, setShowAll] = useState(false);
  const displayRecords = showAll ? records : records.slice(0, 10);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <CloudRain className="w-6 h-6 text-blue-600" />
        Historical Weather Records
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
              <th className="text-left p-3 font-semibold text-gray-700">Date & Time</th>
              <th className="text-right p-3 font-semibold text-gray-700">Temp (°C)</th>
              <th className="text-right p-3 font-semibold text-gray-700">Humidity (%)</th>
              <th className="text-right p-3 font-semibold text-gray-700">Pressure (hPa)</th>
              <th className="text-right p-3 font-semibold text-gray-700">Wind (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {displayRecords.map((record, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 text-gray-600 font-medium">
                  {new Date(record.datetime_utc).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
                <td className="p-3 text-right font-semibold text-orange-600">{record._tempm}</td>
                <td className="p-3 text-right font-semibold text-blue-600">{record._hum}</td>
                <td className="p-3 text-right font-semibold text-purple-600">{record._pressurem}</td>
                <td className="p-3 text-right font-semibold text-teal-600">{record._wspdm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {records.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          {showAll ? `Show Less (10 of ${records.length})` : `Show All ${records.length} Records`}
        </button>
      )}
    </div>
  );
}

export default DataTable;
