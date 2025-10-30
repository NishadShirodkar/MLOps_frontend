import { Cloud } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-8 px-6 shadow-lg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Cloud className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Weather Prediction System</h1>
        </div>
        <p className="text-center text-blue-100 text-lg">
          Historical Weather Data Analysis & ML Prediction
        </p>
      </div>
    </header>
  );
}

export default Header;