import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shortid from 'shortid';

function Users({users, setUsers, isUserExist}) {

    //delete user
    const handleDelete = user => {
        setUsers(users.filter(usr => usr.email !== user.email));
    }


    return (
        <div className="user-container">

            {isUserExist && <small style={{color:"red"}}>this email already used</small>}

            <div className="users border-bottom">
                <div><strong>Username</strong></div>
                <div><strong>Email</strong></div>
                <div><strong>Action</strong></div>
            </div>
            {
                users.map(user => (
                    <div key={shortid.generate()} className="users border-bottom">
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div onClick={() => handleDelete(user)} className="deleteBtn"><FontAwesomeIcon icon={faTrashAlt}/></div>
                    </div>
                ))
            }
        </div>
    )
}


export default Users;
