import React, { useEffect, useState } from 'react'
import { getInspections } from '../api/inspection.api';

const useInspection = () => {
    const [inspections, setInspections] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchInspection = async (params = {}) => {
        try {
            setLoading(true);
            const response = await getInspections(params);
            setInspections(response.data);
        } catch (error) {
            setError(error);
        } finally { setLoading(false) }
    }
    useEffect(() => {
        fetchInspection();
    }, []);
    return { inspections, loading, error, fetchInspection }
}

export default useInspection