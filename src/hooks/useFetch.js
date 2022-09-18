import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [abort, setAbort] = useState(() => {});

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setAbort(() => abortController.abort);
    const fetchData = async () => {
      try {
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
    return () => {
      if (abort) abort();
    };
  }, []);

  return { response, isLoading, error };
};

export default useFetch;
