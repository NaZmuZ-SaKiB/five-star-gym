import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [context, setContext] = useState(null)

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;