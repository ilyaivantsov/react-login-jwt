import { useState, createContext, useContext, useEffect } from "react";
import { login, AxiosInstance } from '../queries';

export const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

export const ClientWrapper = ({ children }) => {
    const [client] = useState({ login }); // requestClient - функция (здесь axios)

    return (
        <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
    );
};

export const CustomerContext = createContext([]);

export const useCustomer = () => useContext(CustomerContext);

export const CustomerWrapper = ({ children }) => {
    // const client = useClient();
    const [customer, setCustomer] = useState(null);
    const [working, setWorking] = useState(false);

    // const refreshToken = () => {
    // client
    //     .login({ email, password })
    //     .then(() => setCustomer({ email, active: true }))
    //     .catch(console.error)
    //     .finally(() => {
    //         setWorking(false);
    //     });
    // };

    // useEffect(() => {
    //     refreshToken();
    //     // eslint-disable-next-line
    // }, []);

    return (
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {working ? null : children}
        </CustomerContext.Provider>
    );
};
