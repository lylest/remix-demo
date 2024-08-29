import { QueryKey, useQueryClient } from "@tanstack/react-query";

type CacheData = any; // Define this according to your data type

export const useRefreshCache = () => {
    const queryClient = useQueryClient();
    return (queryKey: QueryKey, hardReload?: boolean) =>
        hardReload
            ? queryClient.invalidateQueries({ queryKey })
            : queryClient.refetchQueries({ queryKey });
};

/**
 * Adds new data to the cache using the given query key.
 */
export const useAddToCache = () => {
    const queryClient = useQueryClient();
    return (queryKey: QueryKey, newData: CacheData) => {
        try {
            queryClient.setQueryData(queryKey, (oldQueryData: CacheData) => ({
                ...oldQueryData,
                data: [newData, ...oldQueryData.data],
            }));
        } catch {
            // Catch block...
        }
    };
};

export const useUpdateSingleObjectCache = () => {
    const queryClient = useQueryClient();
    return (queryKey: QueryKey, newData: any) => {
        try {
            queryClient.setQueryData(queryKey, (oldQueryData: any) => {
                return {
                    ...oldQueryData,
                    data: {
                        ...oldQueryData.data,
                        ...newData,
                    },
                };
            });
        } catch {
            console.error(`filed to update cache with key "${queryKey}" `);
        }
    };
};

export const useUpdateCache = () => {
    const queryClient = useQueryClient();
    return (queryKey: QueryKey, newData: CacheData, replace?: boolean) => {
        const setData = (oldQueryData: CacheData) => {
            if (replace) {
                return { ...oldQueryData, data: newData };
            } else {
                return {
                    ...oldQueryData,
                    data: oldQueryData?.data?.map((oldData: any) =>
                        oldData.id === newData.id ? { ...oldData, ...newData } : oldData,
                    ),
                };
            }
        };
        try {
            queryClient.setQueryData(queryKey, setData);
        } catch (e) {
            // console.log(e)
        }
    };
};

export const useRemoveFromCache = () => {
    const queryClient = useQueryClient();
    return (queryKey: QueryKey, newData: CacheData, propertyKey?: string) => {
        console.log(propertyKey);
        try {
            queryClient.setQueryData(queryKey, (oldData: CacheData) => ({
                ...oldData,
                data: oldData.data.filter(
                    (_data: CacheData) =>
                        _data?.[propertyKey ?? "id"] !== newData[propertyKey ?? "id"],
                ),
            }));
        } catch (e) {
            console.log(e,"REMOVE");
        }
    };
};
