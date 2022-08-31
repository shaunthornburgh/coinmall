import axios from "axios";
import { useEffect, useState } from "react"

export const useAxios = (url, dependencies = []) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const result = await axios(url, { withCredentials: false });
            setResponse(result.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, dependencies);

    return {
        response, loading, error
    }
}
