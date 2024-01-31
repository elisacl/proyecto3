import React, { useState, useEffect } from 'react';
    function UserList() {
        const [user, setUser] = useState('');
        const [lastName, setLastName] = useState('');
        const [occasion, setOccasion] = useState('');
        const [userList, setUserList] = useState([]);

    function handleNameChange(e){
        setUser(e.target.value);
    };
    function handleLastNameChange(e){
        setLastName(e.target.value);
    };
    function handleOccasionChange(e){
        setOccasion(e.target.value);
    };

    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user + ' ' + lastName + ' ' + occasion]);
        setUser('');
        setLastName('');
        setOccasion('');

    }
    return(
        <>
        <h1>Lista xulisima</h1>
        <label htmlFor="userName">Nombre:</label>
        <input type="text" name="userName" value={user} onChange={handleNameChange}/>
        <label htmlFor="userLastName">Apellido:</label>
        <input type="text" name="userLastName" value={lastName} onChange={handleLastNameChange}/>
        <label htmlFor="userOcassion">Nombre del evento:</label>
        <input type="text" name="userOccasion" value={occasion} onChange={handleOccasionChange}/>
        <button onClick={handleAddUserToList}>Añadir usuario</button>
        <ul>
        {
            userList.map((user, index)=>(
                <li key={index}> {user} </li>
            ))
        }
        </ul>
        </>
    )
}
export default UserList;