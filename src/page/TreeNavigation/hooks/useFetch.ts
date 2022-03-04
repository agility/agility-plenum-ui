import React, { useEffect, useState } from 'react';
import { NodeModel } from "@minoru/react-dnd-treeview";
import { DataProps } from "../../../components/TreeView";

export interface useFetchProps {
    urlData: string;
    method: string;
    payload: any;
}

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ show: boolean; msg: any } | null>({
        show: false,
        msg: null
    });
    const [responseData, setResponseData] = useState([]);

    const fetchData = async ({ urlData, method, payload }: useFetchProps) => {
        setError({ show: false, msg: null });
        setIsLoading(true);
        try {
            const responseData = await fetch(urlData, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (responseData.status != 200) throw 'Something went wrong';
            const response = await responseData.json();
            setResponseData(response?.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setError({ show: true, msg: e });
        }
    };

    
    return { isLoading, error, responseData, fetchData };
};
