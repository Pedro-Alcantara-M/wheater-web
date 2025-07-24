import type { WeatherData } from "../types/wheater";

const LAST_CITY_KEY = "lastCity";

export const saveLastCity = (city: string, result: WeatherData) => {
  localStorage.setItem(
    LAST_CITY_KEY,
    JSON.stringify({ city, result })
  );
};

export const loadLastCity = (): { city: string; result: WeatherData } | null => {
  const raw = localStorage.getItem(LAST_CITY_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};
