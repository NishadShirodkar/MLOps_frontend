import { Database, Calendar } from "lucide-react";

function DatasetInfo({ records }) {
  const firstDate = records[0]?.datetime_utc;
  const lastDate = records[records.length - 1]?.datetime_utc;

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 mb-6 text-white">
      <div className="flex items-center gap-3 mb-4">
        <Database className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Dataset Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm text-indigo-100 mb-1">Total Records</p>
          <p className="text-3xl font-bold">{records.length}</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm text-indigo-100 mb-1">Start Date</p>
          <p className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(firstDate).toLocaleDateString()}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm text-indigo-100 mb-1">End Date</p>
          <p className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(lastDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DatasetInfo;
