import { useEffect, useState } from 'react'

export const useFetch = <Response>(fetch: () => Promise<Response>, initValue: Response) => {
    const [data, setData] = useState<Response>(initValue);
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        fetch().then(setData).catch(setError)
    }, [])
    return { data, error }
}