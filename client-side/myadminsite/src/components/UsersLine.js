import React from 'react';
import '../css/UsersLine.css';

const UsersLine = (props) => {
    return (
        <tr>
            <td>{props.ID}</td>
            <td>{props.username}</td>
            <td>{props.password}</td>
        </tr>
    );
}

export default UsersLine