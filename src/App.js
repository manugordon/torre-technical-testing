import './App.css';
import React, { useState } from 'react';
import Spinner from './components/Spinner';
import UserCard from './components/UserCard';
import UserSearchBar from './components/UserSearchBar';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchUser = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      { isLoading && <Spinner/> } 
      { userData && <UserCard userData={userData}/>}
      <UserSearchBar onSearch={fetchUser}/>
    </div>
  );
}

export default App;
