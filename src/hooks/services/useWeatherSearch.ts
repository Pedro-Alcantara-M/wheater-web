import { useState } from "react";
import { toast } from "sonner";
import type { WeatherData } from "@/types/wheater";
import { saveLastCity } from "@/utils";

type WeatherState = {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
};

export const useWeatherSearch = () => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWeather = async (city: string): Promise<WeatherData> => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const res = await fetch(`${BASE_URL}?q=${city}&key=${API_KEY}`);
    if (!res.ok) {
      throw new Error("City not found or API error");
    }
    return res.json();
  };

  const getWeather = async (city: string) => {
    setState({ ...state, loading: true, error: null });

    try {
      const result = await fetchWeather(city);
      setState({ data: result, loading: false, error: null });

      saveLastCity(city, result);
      return toast.success(city + " weather data fetched successfully!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(errorMessage);

      setState({ ...state, loading: false, error: errorMessage });
    }
  };

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    getWeather,
  };
};
