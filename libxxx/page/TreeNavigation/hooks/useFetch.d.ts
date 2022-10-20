export interface useFetchProps {
    urlData: string;
    method: string;
    payload: any;
}
export declare const useFetch: () => {
    isLoading: boolean;
    error: {
        show: boolean;
        msg: any;
    } | null;
    responseData: never[];
    fetchData: ({ urlData, method, payload }: useFetchProps) => Promise<void>;
};
