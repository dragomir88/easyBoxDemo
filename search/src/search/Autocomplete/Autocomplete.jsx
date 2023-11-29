import React from "react";
import { tennisPlayers } from "../utils/mockdata";
import "./Autocomplete.css";

const Autocomplete = ({
  filteredSuggestions,
  onSelect,
  isVisible,
  history,
  removeFromHistory,
}) => {
  
  return (
    <>
      {isVisible ? (
        <div className="autocomplete-container">
          {filteredSuggestions?.map((player) => (
            <div
              key={player.id}
              className={
                history.includes(player.name)
                  ? " autocomplete-item suggestion-history"
                  : " autocomplete-item"
              }
            >
              <span onClick={() => onSelect(player.name)}>{player.name}</span>
              {history.includes(player.name) && (
                <span
                  className="remove-from-history"
                  onClick={() => removeFromHistory(player.name)}
                >
                  X
                </span>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Autocomplete;
