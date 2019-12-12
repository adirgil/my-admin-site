import React from 'react';
import UsersLine from './UsersLine'

const UsersTB = (props) => {
    const users = Object.values(props.users)
    const tableRows = users.map((user, i) => 
        <UsersLine key={i} ID={user.ID} username={user.userName} password={user.password} getUsersTable={props.getUsersTable}/>
    )
    
    return (
        <table>
            <thead className="thead">
                <tr>
                    <td>ID</td>
                    <td></td>
                    <td>User Name</td>
                    <td>Password</td>
                </tr>
            </thead>
            <tbody>          
                {tableRows}
            </tbody>
        </table>
    );

}

export default UsersTB;