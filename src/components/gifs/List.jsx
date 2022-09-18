import React from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, API_KEY } from "../../services/api";

function GifList() {
  const { isLoading, response } = useFetch(
    `${BASE_URL}trending?api_key=${API_KEY}`
  );
  if (isLoading) return "loading";
  return <pre>{JSON.stringify(response)}</pre>;
}

export default GifList;
