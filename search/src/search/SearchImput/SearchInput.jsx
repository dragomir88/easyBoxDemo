import React, { useRef, useEffect } from "react";
import "./SearchInput.css";

const SearchInput = ({ value, onChange, onFocus, onBlur , isAutocompleteVisible}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="search-container autocomplete-active">
      <input
        ref={inputRef}
        type="text"
        className={isAutocompleteVisible ? 'search-input autocomplete-active' : 'search-input'}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
