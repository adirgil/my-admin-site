import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Login.css'
import { navigate } from "@reach/router"
const Register = (props) => {
    const [answer, setAnswer] = useState("")

    //const history = useHistory();

    const heandleSubmit = (e) => {
        e.preventDefault();
        if (Cpassword !== password) {
            setAnswer("passwords do not match");
            return
        }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.result === 'Success') {
                   navigate('/')
                }
                setAnswer(res.result);
            })
    }
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setCPassword] = useState("")

    return (
        <div className="login">
            <h1>Register</h1>
            <form onSubmit={heandleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

                <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='UserName' required />

                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' required />

                    <input onChange={(e) => setCPassword(e.target.value)} type='text' placeholder='Confirm Password' required />

                <label>
                    {answer}
                </label>
                <button className="loginBtn">Register</button>
            </form>
        </div>

    )
}

export default Register;