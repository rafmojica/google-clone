import React, { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2324e5f80a2f546e8";
// From https://programmablesearchengine.google.com/controlpanel/overview?cx=2324e5f80a2f546e8

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
