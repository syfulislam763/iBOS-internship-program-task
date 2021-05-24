import React, { useState } from 'react';
import './Task1.css';
import CreateUser from './CreateUser';
import Users from './Users';

function Task1() {

    const [users, setUsers] = useState([]);
    const [isUserExist, setExistingUser] = useState(false);



    return (
        <>
            <h3 className="task-header">Task 1</h3>
            <CreateUser users={users} setUsers={setUsers} setExistingUser={setExistingUser}/>
            <Users users={users} setUsers={setUsers} isUserExist={isUserExist}/>
        </>
    )
}


export default Task1;
