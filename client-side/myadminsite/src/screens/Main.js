import React, { useState } from 'react';
import UsersTB from '../components/UsersTB';
import '../css/Main.css'
//import { useHistory } from "react-router-dom";
const Main = (props) => {

    const heandleUsers = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/users', {
        })
            .then(res => res.json())
            .then(res => {
                setUsers(res);
                setTable(<UsersTB users={users} />)
                //console.log(res)
                console.log("TABLE = " ,table);
                console.log("USERS = " ,users)
            })
    }

    const [table, setTable] = useState("")
    const [users, setUsers] = useState("")

    return (
        <div className="main">
            <h1>Main</h1>
            <div className="contant">
                <div className="manuSide">
                    <ul>
                        <li>show users</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                    <button onClick={heandleUsers} className="showBtn">Show Users</button>
                </div>

                <div className="detailsSide">
                    hello
                {table}
                </div>

            </div>


        </div>

    )
}

export default Main;