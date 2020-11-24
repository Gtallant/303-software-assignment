import React from 'react';
import UsersList from '../UsersList/UsersList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Users List
        </p>
      </header>
      <UsersList />
    </div>
  );
}

export default App;
