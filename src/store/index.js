import jwt_decode from "jwt-decode";
import { useState, createContext, useContext, useEffect } from "react";

export const CustomerContext = createContext([]);
export const useCustomer = () => useContext(CustomerContext);

export const CustomerWrapper = ({ children }) => {
    const [customer, setCustomer] = useState(null);
    const [working, setWorking] = useState(true);

    const uploadToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const client = jwt_decode(token);
            setCustomer(client);
        }
        setWorking(false);
    };

    useEffect(() => {
        uploadToken();
    }, []);

    return (
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {working ? null : children}
        </CustomerContext.Provider>
    );
};
