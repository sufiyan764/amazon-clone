import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [{user}, dispatch]  = useStateValue();
    if(user){
        history.push("/")
    }
    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((authenticated) => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authenticated) => {
                // it successfully created a new user with email and password
                if(authenticated){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }
    return (  
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="login" className="login_logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see out Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login_registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    );
}
 
export default Login;