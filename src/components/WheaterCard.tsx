import type { Dispatch, SetStateAction } from "react";
import type { WeatherData } from "../types/wheater";
import { TempToggle } from "./TempToggle";
import { formatDate } from "@/utils";
import { WheatherCardSkeleton } from "./WheatherCardSkeleton";

type Props = {
  data: WeatherData;
  unit: "metric" | "imperial";
  setUnit: Dispatch<SetStateAction<"metric" | "imperial">>;
  isLoading?: boolean;
};

export const WeatherCard = ({ data, unit, setUnit, isLoading }: Props) => {
  const formattedDate = formatDate(data.location.localtime);

  const getValueByUnit = (metricValue: number, imperialValue: number) =>
    unit === "metric" ? metricValue : imperialValue;

  const temp = getValueByUnit(data.current.temp_c, data.current.temp_f);
  const dewpoint = getValueByUnit(
    data.current.dewpoint_c,
    data.current.dewpoint_f
  );
  const heatpoint = getValueByUnit(
    data.current.heatindex_c,
    data.current.heatindex_f
  );
  const tempUnit = unit === "metric" ? "°C" : "°F";

  return isLoading ? (
    <WheatherCardSkeleton />
  ) : (
    <div className="backdrop-blur-lg bg-white/10 text-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center text-sm mb-2">
        <div>
          <h2 className="text-xl font-semibold">
            {data.location.name.toUpperCase()}
          </h2>
          <p>{formattedDate}</p>
        </div>
        <div className="space-x-2">
          <TempToggle unit={unit} onToggle={setUnit} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
            className="w-16 h-16"
          />
          <div className="text-center text-xs">
            {data.current.condition.text.toUpperCase()}
          </div>
        </div>
        <div className="text-5xl font-light">{`${Math.round(
          temp
        )}${tempUnit}`}</div>
        <div className="text-sm text-left">
          <p>{`↓ ${dewpoint} ${tempUnit}`}</p>
          <p>{`↑ ${heatpoint} ${tempUnit}`}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm mt-4 opacity-80">
        <div className="flex items-center gap-2">
          <span>💧</span>
          <span>{data.current.humidity}% Humidity</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💨</span>
          <span>{`${data.current.wind_kph} km/h`}</span>
        </div>
      </div>
    </div>
  );
};
