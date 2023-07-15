import { useEffect, useState } from 'react';
import { UPDATE_STATE } from '../actions';

export const useFetch = (url, dispatch) => {
    const [carts, setCarts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsLoading(false);
                    setIsError(true);

                    return;
                }

                const data = await response.json();
                const convertData = data.map((item) => [item.id, item]);
                const mappedData = new Map(convertData);
                setCarts(mappedData);
                dispatch({ type: UPDATE_STATE, payload: { mappedData } });
            } catch (error) {
                console.log(error);
                setIsError(true);
                setIsLoading(false);
            }
        };
        setIsLoading(false);
        setIsError(false);

        fetchData();
    }, []);

    return {
        carts,
        isLoading,
        isError
    };
};