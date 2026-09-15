import { useEffect, useState } from "react"
import { getSummary } from "../api/inspection.api";

const useSummary = () => {
    const [summary, setSummary] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSummary = async () => {
        try {
            setLoading(true);
            const response = await getSummary();
            setSummary(response.data);
        } catch (error) {
            setError(error);
        } finally { setLoading(false); }
    }
    useEffect(() => {
        fetchSummary();
    }, []);

    return { summary, loading, error, fetchSummary }
}

export default useSummary;