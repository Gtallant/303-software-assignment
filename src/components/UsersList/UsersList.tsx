import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersList.css';
import { UserType } from './../../types';

function UsersList() {
  const [users, setUsers] = useState<UserType[] | undefined>([]);
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(apiUrl)
    .then(function ({ data }) {
      setUsers(data);
    });
    console.log(apiUrl);
  }, []);
  console.log(users);
  return (
    <div className="UsersList">
      Users List
    </div>
  );
}

export default UsersList;
