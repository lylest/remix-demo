import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const useGlobalContextHook = () => {
    const globalContext = useContext(GlobalContext);

    if (!globalContext) {
        throw new Error("Global context must be used inside the global context provider");
    }

    return { ...globalContext };
};
