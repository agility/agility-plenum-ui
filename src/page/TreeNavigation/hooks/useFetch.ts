import React, { useEffect, useState } from 'react';

export interface useFetchProps {
    urlData: string;
    method: string;
    payload: any;
}

export const useFetch = ({ urlData, method, payload }: useFetchProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ show: boolean; msg: any } | null>({
        show: false,
        msg: null
    });
    const [data, setData] = useState([]);

    const fetchData = async (url: string) => {
        setError({ show: false, msg: null });
        setIsLoading(true);
        try {
            const responseData = await fetch(url, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (responseData.status != 200) throw 'Something went wrong';
            const response = await responseData.json();
            setData(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setError({ show: true, msg: e });
        }
    };
    useEffect(() => {
        fetchData(urlData);
    },[urlData]);
    return { isLoading, error, data, fetchData };
};
