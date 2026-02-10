import { useState, useEffect } from "react";

// It takes a URL as an argument
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state when URL changes
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Could not fetch data");
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); //  Re-run if the URL changes

  // Return the values the component needs
  return { data, loading, error };
}