/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense, useState, useEffect } from 'react';
import axios from '../axios';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Maps from './components/maps/Maps.jsx'
import Chat from './components/chat/Chat.jsx'
import Login from './components/login/Login.jsx'

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(false);
    console.log(showLogin)
  }

  // useEffect(() => {
  //   axios.get('/')
  //     .then((response) => {
  //       setHome(response.data);
  //       setStatus('success');
  //     })
  //     .catch((err) => {
  //       setStatus('error');
  //       setErrMessage(err.response.data.message);
  //     });
  // }, []);


  return (
    <div backgroundColor='white'>
     {showLogin ? <Login loggedIn={handleLogin}/> : null}
    </div>
  );

}



    // const location = {
    //   address: '1600 Amphitheatre Parkway, Mountain View, california.',
    //   lat: 37.42216,
    //   lng: -122.08427,
    // } // our location object from earlier


