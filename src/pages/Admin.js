import React from 'react';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { AxiosInstance } from '../queries';

const Admin = () => {
    const history = useHistory();
    const api = AxiosInstance(history);
    const [secretData, setSecretData] = useState(null);
    const [working, setWorking] = useState(true);

    const home = () => {
        history.push('/home');
    };

    useEffect(() => {
        const getSecretData = () => {
            api
                .get('/admin')
                .then(({ data: { data } }) => {
                    setSecretData(data);
                    setWorking(false);
                })
                .catch((err) => {
                    console.error(err);
                    window.location.reload();
                })
        };
        getSecretData();
    }, [api]);

    return (
        <>
            {working ? null :
                (
                    <main role="main" className="container">
                        <h1 className="mt-5">Secret Data</h1>
                        <p className="lead">
                            {JSON.stringify(secretData, null, 3)}
                        </p>
                        <p className="lead">
                            <button onClick={() => home()} className="btn btn-lg btn-primary">Home</button>
                        </p>
                    </main>
                )
            }
        </>
    )
}

export default Admin;
