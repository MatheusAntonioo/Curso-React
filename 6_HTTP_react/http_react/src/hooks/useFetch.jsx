import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        Headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };
  // 5  -----------------------------

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 6 - loading

      const res = await fetch(url);
      const json = await res.json();

      setLoading(false); // 6 - loading
      setData(json);
    };
    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        setLoading(true); // 6 - loading

        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();

        setLoading(false); // 6 - loading
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);
  // 5 -----------------------------

  return { data, httpConfig, loading };
};
