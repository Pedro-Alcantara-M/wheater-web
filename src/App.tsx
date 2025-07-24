import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { SearchBar, WeatherCard } from "@/components";
import { useWeatherSearch } from "@/hooks/services/useWeatherSearch";
import { loadLastCity } from "@/utils";

function App() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const { data, loading, getWeather } = useWeatherSearch();
  const storedCity = loadLastCity();

  useEffect(() => {
    if (storedCity) {
      const { city } = storedCity;
      getWeather(city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-cyan-700 to-blue-700">
        <h1 className="text-center text-white text-3xl font-bold pt-8">
          Weather App
        </h1>

        <div className="flex justify-center p-0 w-full">
          <SearchBar onSearch={getWeather} />
        </div>
        {data && (
          <WeatherCard
            data={data}
            unit={unit}
            setUnit={setUnit}
            isLoading={loading}
          />
        )}
        {!data && !loading && !storedCity && (
          <div className="backdrop-blur-lg bg-white/10 text-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto">
            <p className="text-weather-text-primary text-xl mb-2 text-center">
              Welcome!
            </p>
            <div className="text-weather-text-secondary text-sm">
              Enter a city name to get started with your weather forecast.
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
