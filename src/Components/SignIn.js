import { Link } from 'react-router-dom';
import './SignIn.css';

function Login ({topMargin}) { 
    return ( 
        <>
            <div className="signin">
                <h1>Sign In</h1>
                <input className="enter" id="signEmail" type="email" placeholder="Enter email" required/>
                <input className="enter" id="password" type="password" placeholder="Password" required/>
                <input id="btn-signIn" type="submit" value="Sign In" />
                <div className="checkbox">
                    <div>
                        <input type="checkbox" />
                        <label for="checkbox">Remember me</label>
                    </div>
                    <a href="#">Need help?</a>
                </div>
                <Link className="goBack" to="/">New to Netflix? Sign up</Link>
            </div>
        </>
    )
}

export default Login;