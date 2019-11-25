import React , { useState } from 'react';
import { useHistory } from "react-router-dom";
const Register = (props) => {
    const [answer, setAnswer] = useState("")

    const history = useHistory();

    const heandleSubmit = (e) => {
        e.preventDefault();
        if(Cpassword!==password){
            setAnswer("passwords do not match");
            return
        }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body:JSON.stringify({ username: userName, password })
        })
        .then(res => res.json())
        .then(res => {
            if(res.result ==='Success'){
                history.push('/')
            }
            setAnswer(res.result);
        })
    }
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setCPassword] = useState("")

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={heandleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                    User Name:
                    <input onChange={(e) => setUserName(e.target.value)} type='text' required/>
                </label>
                <label>
                    Password:
                    <input onChange={(e) => setPassword(e.target.value)} type='text' required/>
                </label>
                <label>
                    Confirm Password:
                    <input onChange={(e) => setCPassword(e.target.value)} type='text' required/>
                </label>
                <label style={{ color: "red" }}>
                    {answer}
                </label>
                <button>Register!!</button>
            </form>
        </div>

    )
}

export default Register;