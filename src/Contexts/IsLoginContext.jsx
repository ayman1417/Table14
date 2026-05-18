import { useState ,createContext  } from "react";

export const isLoginContext = createContext(true);

export default function IsLoginContextProvider({ children }) {
    const [isLogin, setIsLogin] = useState(true);
    const [logged, setLogged] = useState(localStorage.getItem("loggedUser") ? true : false);

    return (
        <isLoginContext.Provider value={{ isLogin, setIsLogin, logged, setLogged }}>
            
            {children}
        </isLoginContext.Provider>
    )
}   6