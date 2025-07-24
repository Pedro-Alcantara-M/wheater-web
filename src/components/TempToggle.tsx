type TempUnit = "metric" | "imperial";

interface TempToggleProps {
  unit: TempUnit;
  onToggle: (unit: TempUnit) => void;
}

export const TempToggle = ({ unit, onToggle }: TempToggleProps) => {
  return (
    <div className="flex items-center bg-white/10 rounded-full p-1 text-sm font-medium">
      <button
        onClick={() => onToggle("metric")}
        className={`cursor-pointer px-3 py-1 rounded-s-full transition ${
          unit === "metric" ? "bg-white text-cyan-700" : "text-white hover:bg-white/20"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle("imperial")}
        className={`cursor-pointer px-3 py-1 rounded-e-full transition ${
          unit === "imperial" ? "bg-white text-cyan-700" : "text-white hover:bg-white/20"
        }`}
      >
        °F
      </button>
    </div>
  );
};
