import React, { useState } from 'react';



function CreateUser({users, setUsers, setExistingUser}) {

    const [newUser, setNewUser] = useState({username:"", email:""});



    //create new user
    const handleChange = event => {
        const temp = {...newUser};
        temp[event.target.name] = event.target.value;
        setNewUser(temp);
    }



    const handleSubmit = e => {
        e.preventDefault();

        
        //prevent duplicating email
        let isUserExist = users.reduce((acc, curr) => {
            if(curr?.email === newUser.email)acc = false;
            return acc
        }, true);

        

        if(isUserExist){
            setUsers([newUser, ...users]);

            e.target.reset();
            setNewUser({username:"", email:""});
        }else{
            setExistingUser(true);
            setTimeout(() => {
                setExistingUser(false)
            }, 10 * 1000);
        }
    }


    let isSubmitDisabled = newUser.username && newUser.email;


    


    return (
        <form onSubmit={handleSubmit} className="createUser d-flex">

            <div className="createUser-field">
                <label><strong>Name</strong></label><br/>
                <input name="username" value={newUser.username} onChange={handleChange} type="text" placeholder="username"/>
                
            </div> 

            <div className="createUser-field">
                <label><strong>E-Mail</strong></label><br/>
                <input name="email" value={newUser.email} onChange={handleChange} type="email" placeholder="example@gmail.com"/>
            </div>
            
            <div>
                <button disabled={!isSubmitDisabled} className="btn" type="submit">Add</button>
            </div>
        </form>
    )
}


export default CreateUser;
