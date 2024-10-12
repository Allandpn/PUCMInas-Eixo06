import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  const httpConfig = useCallback((data, methodType) => {
    const headers = { "Content-Type": "aplication/json" };
    const config = { method: methodType, headers };

    if (methodType === "POST") {
      config.body = JSON.stringify(data);
    } else if (methodType === "DELETE") {
      setItemId(data);
    }

    setConfig(config);
    setMethod(methodType);
  }, []);

  const performFetch = useCallback(
    async (requestUrl) => {
      setLoading(true);
      try {
        const res = await fetch(requestUrl, config || {});
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [config]
  );

  useEffect(() => {
    if (!method) {
      performFetch(url);
    } else if (method === "POST" || method === "DELETE") {
      const targetUrl = method === "DELETE" ? `${url}/${itemId}` : url;
      performFetch(targetUrl);
    }
  }, [url, method, itemId, performFetch]);

  return { data, httpConfig, loading, error };
};
