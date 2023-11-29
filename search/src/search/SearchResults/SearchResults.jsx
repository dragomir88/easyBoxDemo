import React, { useState } from 'react';
// import './SearchResults.css'; // Ensure this is uncommented to use your styles

const SearchResults = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;

  // Calculate the number of pages
  const pageCount = results?.games ? Math.ceil(results.games.length / resultsPerPage) : 0;

  // Get current games
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentGames = results?.games?.slice(indexOfFirstResult, indexOfLastResult);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {results.length !== 0 && (
        <div className="search-results">
          <h2>{results.name}</h2>
          <a href={results.link} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          <h3>Grand Slam Victories</h3>
          <div>
            {currentGames?.map((game, index) => (
              <div key={index}>
                <strong>{game.tournament} {game.year}</strong>: {game.opponent} - {game.score}
              </div>
            ))}
          </div>
          <div className="pagination">
            {[...Array(pageCount).keys()].map(number => (
              <button key={number} onClick={() => paginate(number + 1)}>
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;