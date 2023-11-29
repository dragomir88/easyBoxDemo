import { useState } from 'react';

const useRemoveFromHistory = (initialHistory) => {
  const [history, setHistory] = useState(initialHistory);

  const removeFromHistory = (name) => {
    const newHistory = history.filter((item) => item !== name);
    setHistory([...newHistory]);
  };

  return { history, removeFromHistory };
};

export default useRemoveFromHistory;