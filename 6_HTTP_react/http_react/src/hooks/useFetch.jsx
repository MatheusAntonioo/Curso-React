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

  // 7 - error
  const [error, setError] = useState(null);

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
      // 7 - tratando erros
      try {
        setLoading(true); // 6 - loading

        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }
      setLoading(false); // 6 - loading
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

  return { data, httpConfig, loading, error };
};
