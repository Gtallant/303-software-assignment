import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersList.css';
import { UserType } from './../../types';
import User from './../User/User';

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
  const UserElements = users?.map(user => <User key={user.id} userData={user} />);
  return (
    <div className="UsersList">
      {UserElements}
    </div>
  );
}

export default UsersList;
