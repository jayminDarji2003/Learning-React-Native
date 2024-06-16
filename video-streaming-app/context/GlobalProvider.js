// all the state this file will provide
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoading(true);
                    setUser(res)
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider