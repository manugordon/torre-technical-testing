import './App.css';
import React, { useState } from 'react';
import Spinner from './components/Spinner';
import UserCard from './components/UserCard';
import UserSearchBar from './components/UserSearchBar';
import userService from './services/user.service';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);

  const fetchUser = async (username) => {
    try {
      setIsLoading(true);
      setShowSearchBar(false)
      const data = await userService.getUser(username);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('User not found');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {isLoading && <Spinner />}
      {userData ? <UserCard userData={userData} /> : null}
      {showSearchBar && <UserSearchBar onSearch={fetchUser} />}
    </div>
  );
}

export default App;
