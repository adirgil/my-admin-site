import React from 'react';
import '../css/UsersLine.css';

const UsersLine = (props) => {

    const heandleDelete = () => {
        fetch(`http://localhost:5000/delete/${props.ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then((res)=>{
            if (res.result === 'Success') {
                props.getUsersTable();
            } else {
                alert("Error");
            }
            
        })

    }


    return (
        <tr>
            <td>{props.ID}</td>
            <td><button onClick={heandleDelete}>D</button></td>
            <td>{props.username}</td>
            <td>{props.password}</td>
        </tr>
    );
}

export default UsersLine