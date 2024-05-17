import { useState } from 'react'

import './App.css'
import Profile from './components/Profile/Profile'
import userData from './components/userData.json'



const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App
