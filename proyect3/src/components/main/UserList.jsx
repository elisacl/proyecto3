import React, { useState } from 'react';
import './UserList.css';

function UserList() {
  const [user, setUser] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);

  const handleNameChange = (e) => setUser(e.target.value);
  const handleLastName1Change = (e) => setLastName1(e.target.value);
  const handleLastName2Change = (e) => setLastName2(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleAddUserToList = () => {
    setUserList((prevUserList) => [
      ...prevUserList,
      `${user} ${lastName1} ${lastName2} ${number} ${email}`,
    ]);
    setUser('');
    setLastName1('');
    setLastName2('');
    setNumber('');
    setEmail('');
  };

  return (
    <div className="user-list-container">
      <div className="user-form">
        <h1>Administrador de listas</h1>
        <div className="form-field">
          <label htmlFor="userName">Nombre:</label>
          <input type="text" name="userName" value={user} onChange={handleNameChange} />
        </div>
        <div className="form-field">
          <label htmlFor="userLastName1">Primer apellido:</label>
          <input type="text" name="userLastName1" value={lastName1} onChange={handleLastName1Change} />
        </div>
        <div className="form-field">
          <label htmlFor="userLastName2">Segundo apellido:</label>
          <input type="text" name="userOccasion" value={lastName2} onChange={handleLastName2Change} />
        </div>
        <div className="form-field">
          <label htmlFor="userNumber">Teléfono de contacto:</label>
          <input type="text" name="userNumber" value={number} onChange={handleNumberChange} />
        </div>
        <div className="form-field">
          <label htmlFor="userEmail">Email:</label>
          <input type="text" name="userEmail" value={email} onChange={handleEmailChange} />
        </div>
        <button onClick={handleAddUserToList}>Añadir usuario</button>
      </div>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Primer apellido</th>
              <th>Segundo apellido</th>
              <th>Teléfono de contacto</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                {user.split(' ').map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;