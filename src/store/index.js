import { useState, createContext, useContext, useEffect } from "react";

export const ClientContext = createContext();

const requestClient = () => ({
    getClient: () => {
        return Promise.resolve({ token: 'aaaaa' });
    }
});

export const useClient = () => useContext(ClientContext);

export const ClientWrapper = ({ children }) => {
    const [client] = useState(requestClient); // requestClient - функция (здесь axios)

    return (
        <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
    );
};

export const CustomerContext = createContext([]);

export const useCustomer = () => useContext(CustomerContext);

export const CustomerWrapper = ({ children }) => {
    const client = useClient();
    const [customer, setCustomer] = useState(null);
    const [working, setWorking] = useState(true);

    const refreshToken = () => {
        client
            .getClient()
            .then(({ token }) => {
                console.log('token :', token);
                setTimeout(() => {
                    refreshToken()
                }, (9999 * 1000) - 500)

                setCustomer(true);
            })
            .catch(console.log)
            .finally(() => {
                setWorking(false);
            });
    };

    useEffect(() => {
        refreshToken();
        // eslint-disable-next-line
    }, []);

    return (
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {working ? null : children}
        </CustomerContext.Provider>
    );
};
