import React, { useState } from 'react'
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((previousList) => {
      return [...previousList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler} />
      <UsersList users={ usersList} />
    </div>
  );
}

export default App;
