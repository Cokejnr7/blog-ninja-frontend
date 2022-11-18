import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        fetch(url, { signal: controller.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setPending(false);
                }
            });
        return () => controller.abort();

    }, [url]);
    return { data, isPending, error }
}

export default useFetch;