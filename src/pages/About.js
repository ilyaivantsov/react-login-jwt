import React from 'react';
import { useHistory } from 'react-router-dom';

import '../css/About.css';

const About = () => {
    const history = useHistory();

    const signIn = () => {
        history.push('/auth/signin');
    };

    return (
        <div className="text-center h-100">
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">
                    <div className="inner">
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                            <h3 className="navbar-brand">JB Test task</h3>
                        </nav>
                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading">About page.</h1>
                    <p className="lead">
                        Test assignment for internship
                    </p>
                    <p className="lead">
                        <button onClick={() => signIn()} className="btn btn-lg btn-primary">Sign in</button>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p><a target="_blank" rel="noreferrer" href="https://github.com/ilyaivantsov/react-login-jwt/">GITHUB</a></p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default About;
