import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);

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
        if (!res.ok) throw new Error(`Erro: ${res.status}`);
        if (method !== "DELETE") {
          const json = await res.json();
          setData(json);
        } else {
          setShouldReload(true);
        }
        setMethod(null);
        setError(null);
        setConfig(null);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [config, method]
  );

  useEffect(() => {
    if (!method || shouldReload) {
      performFetch(url);
      setShouldReload(false);
    } else if (method === "POST" || method === "DELETE") {
      const targetUrl = method === "DELETE" ? `${url}${itemId}` : url;
      performFetch(targetUrl);
    }
  }, [url, method, itemId, shouldReload, performFetch]);
  console.log(data);
  return { data, httpConfig, loading, error };
};
