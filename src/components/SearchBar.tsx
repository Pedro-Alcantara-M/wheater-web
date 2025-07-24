import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 justify-center w-sm my-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-full p-4 sm:p-2 shadow-sm"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-transparent text-white placeholder-white/70 outline-none px-4 py-2 w-full sm:w-64"
      />
      <button
        type="submit"
        className="w-full max-w-sm cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
      >
        Search
      </button>
    </form>
  );
};
