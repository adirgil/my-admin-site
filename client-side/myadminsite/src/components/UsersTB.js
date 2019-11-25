import React from 'react';
import UsersLine from './UsersLine'

const UsersTB = (props) => {
    const users = Object.values(props.users)
    const tableRows = users.map((user, i) => 
        <UsersLine key={i} ID={user.ID} username={user.userName} password={user.password} />
    )
    
    return (
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );

}

export default UsersTB;