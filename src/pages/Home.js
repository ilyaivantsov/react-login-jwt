import React from "react";
import { Redirect, useHistory, Link } from "react-router-dom";

import { useCustomer } from "../store";

const Home = () => {
    const history = useHistory();
    const { customer, setCustomer } = useCustomer();

    const logout = () => {
        localStorage.removeItem('token');
        setCustomer(null);
        history.push('/auth/signin');
    };

    if (!customer) {
        return <Redirect to="/auth/signin" />;
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">
                        JB Test task
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            {customer.role === 'admin' ? (
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>) :
                                null
                            }
                        </ul>
                        <button
                            onClick={() => logout()}
                            className="btn btn-danger my-2 my-sm-0"
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            </header>

            <div className="mt-5">
                <h1 className="text-muted text-center">{customer.email}</h1>
                <p className="mb-0 text-center">{JSON.stringify(customer, null, 4)}</p>
            </div>
        </>
    );
};

export default Home;