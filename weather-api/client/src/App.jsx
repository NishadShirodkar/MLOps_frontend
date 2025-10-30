import { useState } from "react";
import Header from "./components/Header";
import DatasetInfo from "./components/DatasetInfo";
import StatsCard from "./components/StatsCard";
import DataTable from "./components/DataTable";
import ResultCard from "./components/ResultCard";
import ErrorCard from "./components/ErrorCard";
import Data from "../../data.json";
import { CloudRain } from "lucide-react";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const data = Data;

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5050/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data.records }),
      });

      const res = await response.json();
      if (res.success) setResult(res.prediction || res);
      else setError(res.error || "Prediction failed");
    } catch (err) {
      setError("Error connecting to backend: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header />
      
      <main className="w-full px-6 py-8">
        <div className="max-w-screen-2xl mx-auto">
          <DatasetInfo records={data.records} />
          <StatsCard records={data.records} />
          <DataTable records={data.records} />

          <button
            onClick={handlePredict}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg px-8 py-5 rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 mb-6 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing {data.records.length} Weather Records...</span>
              </>
            ) : (
              <>
                <CloudRain className="w-6 h-6" />
                <span>Run ML Prediction on {data.records.length} Records</span>
              </>
            )}
          </button>

          {result && <ResultCard result={result} />}
          {error && <ErrorCard error={error} />}
        </div>
      </main>

      <footer className="w-full text-center py-6 text-gray-600 text-sm border-t border-gray-200 mt-8">
        <p className="font-medium">Powered by Machine Learning</p>
        <p className="text-xs text-gray-500 mt-1">Historical Weather Data Analysis System</p>
      </footer>
    </div>
  );
}

export default App;