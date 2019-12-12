import React, { useState } from 'react';
//import { useHistory } from "react-router-dom";
import { navigate } from "@reach/router"
import '../css/Login.css'

const Login = (props) => {

    const [answer, setAnswer] = useState("")

    //const history = useHistory();

    const heandleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.result === 'Success') {
                    //history.push('/Main2')
                    navigate('/main2')
                } else {
                    setAnswer("Wrong UserName or Password");
                }

            })
    }
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={heandleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='UserName' required />

                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' required />

                <label>
                    {answer}
                </label>

                <button className="loginBtn">Login</button>
            </form>
            <button onClick={() => navigate('/register')} className="registerBtn">Register</button>
        </div>

    )
}

export default Login;
