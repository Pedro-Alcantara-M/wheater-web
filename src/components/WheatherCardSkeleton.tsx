


export const WheatherCardSkeleton = () => {
  return (
    <div className="backdrop-blur-lg bg-white/10 text-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto animate-pulse">
      <div className="flex justify-between items-center text-sm mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-400">– – –</h2>
          <p className="text-gray-400">Select a city</p>
        </div>
        
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="w-16 h-16 bg-gray-400/40 rounded-full" />
          <div className="text-center text-xs text-gray-400 mt-1">– –</div>
        </div>
        <div className="text-5xl font-light text-gray-300">--°</div>
        <div className="text-sm text-left text-gray-400">
          <p>↓ – –</p>
          <p>↑ – –</p>
        </div>
      </div>

      <div className="flex justify-between text-sm mt-4 text-gray-400">
        <div className="flex items-center gap-2">
          <span>💧</span>
          <span>--% Humidity</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💨</span>
          <span>-- km/h</span>
        </div>
      </div>
    </div>
  );
};
