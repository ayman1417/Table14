import React, { createContext, useState } from 'react';

export const searchContext = createContext();

export default function SearchContextProvider({ children }) {

    const [searchReady, setSearchReady] = useState([]);

    return (
        <searchContext.Provider value={{ searchReady, setSearchReady }}>
            {children}
        </searchContext.Provider>
    );
}
