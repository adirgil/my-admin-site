import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
const Login = (props) => {

    const [answer, setAnswer] = useState("")

    const history = useHistory();
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
                    history.push('/Main')
                } else {
                    setAnswer(res.result);
                }

            })
    }
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Login!</h1>
            <form onSubmit={heandleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                    User Name:
                    <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='UserName' />
                </label>
                <label>
                    Password:
                    <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' />
                </label>
                <label style={{ color: "red" }}>
                    {answer}
                </label>
                <button>Login</button>
            </form>
            <button onClick={() => history.push('/register')}>Register</button>
        </div>

    )
}

export default Login;
