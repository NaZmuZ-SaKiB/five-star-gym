import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [context, setContext] = useState({ user: null, cart: [] })

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;