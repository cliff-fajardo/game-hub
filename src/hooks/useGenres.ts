import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number,
    name: string,
    slug: string,
    image_background: string
}

interface GenreResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    // make a backend API call
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true);
        apiClient.get<GenreResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });


        return () => controller.abort();  //cleanup function
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;