import React from 'react';
import './Login.css';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';

function Login() {
    return (
        <div className="login">
            <img 
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="oops!" 
            />
            <SignIn />
            <Footer />
        </div>
    )
}

export default Login;
