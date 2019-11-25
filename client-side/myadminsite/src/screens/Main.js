import React , { useState } from 'react';
import UsersTB from '../components/UsersTB';
//import { useHistory } from "react-router-dom";
const Main = (props) => {

    const heandleUsers = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/users', {
        })
        .then(res => res.json())
        .then(res => {
            setUsers(res);
            setTable(<UsersTB users={users}/>)
            //console.log(res)
        })
    }

    const [table, setTable] = useState("")
    const [users, setUsers] = useState("")

    return (
        <div>
            <h1>Main</h1>
            <button onClick={heandleUsers}>Show Users</button>
             {table}
            
        </div>

    )
}

export default Main;