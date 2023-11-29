import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete/Autocomplete";
import { tennisPlayers } from "./utils/mockdata";
import SearchInput from "./SearchImput/SearchInput";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(false);
  const [history, setHistory] = useState([])
  const [suggestion, setSuggestions] = useState([]);


  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setHistory([...history, searchQuery]);
    const filteredResults = tennisPlayers.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults[0]);
    setIsAutocompleteVisible(false);
  };
  const removeFromHistory = (name) => {
    const newHistory = history.filter((item) => item !== name);
    setHistory([...newHistory]);
    setIsAutocompleteVisible(false);
    setQuery(""); 
  }
   
  const setQueryData = (value) => {
    setQuery(value);

    let filteredSuggestions;
  if (value === "") {
    // When query is empty, show history
    filteredSuggestions = tennisPlayers.filter((player) =>
      history.includes(player.name)
    );
  } else {
    // When query has a value, filter based on the query
    filteredSuggestions = tennisPlayers.filter((player) =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions)
    filteredSuggestions.length > 0 && setIsAutocompleteVisible(true);
     
  }

  // Prioritize history items
  filteredSuggestions.sort((a, b) => {
    const aInHistory = history.includes(a.name);
    const bInHistory = history.includes(b.name);
    return aInHistory === bInHistory ? 0 : aInHistory ? -1 : 1;
  });
  }

 

  return (
    <div>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQueryData(e.target.value)}
        //onFocus={() => onFocusOfSearchInput(true)}
        isAutocompleteVisible={isAutocompleteVisible}
      />
      <Autocomplete
        filteredSuggestions={suggestion}
        onSelect={handleSearch}
        isVisible={isAutocompleteVisible}
        history={history}
        onBlur={() => setIsAutocompleteVisible(false)}
        removeFromHistory={removeFromHistory}
      />
     <SearchResults results={results} />    
    </div>
  );
};

export default Search;