import React, { useState, useEffect } from 'react';
function UserList() {
    const [user, setUser] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userList, setUserList] = useState([]);

    function handleNameChange(e) {
        setUser(e.target.value);
    };
    function handleLastName1Change(e) {
        setLastName1(e.target.value);
    };
    function handleLastName2Change(e) {
        setLastName2(e.target.value);
    };
    function handleNumberChange(e) {
        setNumber(e.target.value);
    };

    function handleEmailChange(e) {
        setEmail(e.target.value);
    };

    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user + ' ' + lastName1 + ' ' + lastName2 + ' ' + number + ' ' + email]);
        setUser('');
        setLastName1('');
        setLastName2('');
        setNumber('');
        setEmail('');

    }
    return (
        <>
            <h1>Lista xulisima</h1>
            <label htmlFor="userName">Nombre:</label>
            <input type="text" name="userName" value={user} onChange={handleNameChange} />
            <label htmlFor="userLastName1">Primer apellido:</label>
            <input type="text" name="userLastName1" value={lastName1} onChange={handleLastName1Change} />
            <label htmlFor="userLastName2">Segundo apellido:</label>
            <input type="text" name="userOccasion" value={lastName2} onChange={handleLastName2Change} />
            <label htmlFor="userNumber">Teléfono de contacto:</label>
            <input type="text" name="userNumber" value={number} onChange={handleNumberChange} />
            <label htmlFor="userEmail">Email:</label>
            <input type="text" name="userEmail" value={email} onChange={handleEmailChange} />

            <button onClick={handleAddUserToList}>Añadir usuario</button>
            <ul>
                {
                    userList.map((user, index) => (
                        <li key={index}> {user} </li>
                    ))
                }
            </ul>
        </>
    )
}
export default UserList;