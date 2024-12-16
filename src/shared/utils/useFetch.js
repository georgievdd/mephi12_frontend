import { useEffect, useState } from 'react';
export const useFetch = (fetch, initValue) => {
    const [data, setData] = useState(initValue);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch().then(setData).catch(setError);
    }, []);
    return { data, error };
};
