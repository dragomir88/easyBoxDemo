import { useState } from "react";
import { tennisPlayers } from "./mockdata";

const useHandleSearch = () => {
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSearch = (searchQuery) => {
    setHistory([...history, searchQuery]);
    const filteredResults = tennisPlayers.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults[0] || []);
  };

  return { results, handleSearch, history };
};

export default useHandleSearch;
