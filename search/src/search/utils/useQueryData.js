import { useState } from 'react';
import { tennisPlayers } from './mockdata';

const useQueryData = (initialHistory) => {
    const [query, setQuery] = useState('');
    const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
  
    const setQueryData = (value) => {
      setQuery(value);
      setIsAutocompleteVisible(!!value);
  
      let filteredSuggestions;
      if (value === '') {
        // When query is empty, show history
        filteredSuggestions = tennisPlayers.filter(player =>
          initialHistory.includes(player.name)
        );
      } else {
        // When query has a value, filter based on the query
        filteredSuggestions = tennisPlayers.filter(player =>
          player.name.toLowerCase().includes(value.toLowerCase())
        );
      }
  
      // Prioritize history items
      filteredSuggestions.sort((a, b) => {
        const aInHistory = initialHistory.includes(a.name);
        const bInHistory = initialHistory.includes(b.name);
        return aInHistory === bInHistory ? 0 : aInHistory ? -1 : 1;
      });
  
      setSuggestions(filteredSuggestions);
    };
  
    return { query, setQueryData, isAutocompleteVisible, suggestions };
  };
  
  export default useQueryData;