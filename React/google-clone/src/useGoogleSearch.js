import { useState, useEffect } from 'react';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!term) return;
      
      const API_KEY = 'your_api_key';
      const CONTEXT_KEY = 'your_context_key';
      const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();// Log the result
        setData(result);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(err);
      }
    };

    fetchData();
  }, [term]);

  return { data, error };
};

export default useGoogleSearch;
