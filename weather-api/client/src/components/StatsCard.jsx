import { Sun, Wind, Droplets, Gauge, TrendingUp } from "lucide-react";

function StatsCard({ records }) {
  const temps = records.map(r => r._tempm);
  const hums = records.map(r => r._hum);
  const pressures = records.map(r => r._pressurem);
  const winds = records.map(r => r._wspdm);

  const stats = [
    {
      icon: Sun,
      label: "Temperature",
      avg: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1),
      min: Math.min(...temps),
      max: Math.max(...temps),
      unit: "°C",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Droplets,
      label: "Humidity",
      avg: (hums.reduce((a, b) => a + b, 0) / hums.length).toFixed(1),
      min: Math.min(...hums),
      max: Math.max(...hums),
      unit: "%",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Gauge,
      label: "Pressure",
      avg: (pressures.reduce((a, b) => a + b, 0) / pressures.length).toFixed(1),
      min: Math.min(...pressures),
      max: Math.max(...pressures),
      unit: "hPa",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Wind,
      label: "Wind Speed",
      avg: (winds.reduce((a, b) => a + b, 0) / winds.length).toFixed(1),
      min: Math.min(...winds),
      max: Math.max(...winds),
      unit: "km/h",
      color: "from-teal-400 to-green-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.avg}
              <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Max: {stat.max}
              </span>
              <span>Min: {stat.min}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCard;
