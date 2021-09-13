import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import '../css/Login.css';
import { useCustomer, useClient } from '../store';

const Login = () => {
    const client = useClient();
    const history = useHistory();
    const { customer, setCustomer } = useCustomer();

    const onSubmit = (event) => {
        event.preventDefault();

        const [email, password] = event.target.elements;

        client
            .login({
                email: email.value,
                password: password.value,
            })
            .then(() => {
                setCustomer({ email: email.value, active: true });
                history.push('/');
            })
            .catch(console.error)
    };

    if (customer) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form className="form-signin" onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control top-field"
                            placeholder="Email address"
                            required
                            autoFocus
                        />
                        <label htmlFor="inputPassword" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control mb-3 bottom-field"
                            placeholder="Password"
                            required
                        />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
