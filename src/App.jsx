// import { useState } from 'react' 

import './App.css'
import Profile from './components/Profile/Profile'
import userData from './components/Profile/userData.json'

import FriendList from './components/FriendList/FriendList'
import friendsData from './components/FriendList/friendsData.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactionsData from './components/TransactionHistory/transactionsData.json'

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
    
      <FriendList 
        friends={friendsData}
      />
      
      <TransactionHistory 
      items = {transactionsData}/>
  </>
  );
};

export default App
