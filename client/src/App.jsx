/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense, useState, useEffect } from 'react';
import axios from '../axios';
import Maps from './components/maps/Maps.jsx'
import SignIn from './components/signIn/SignIn.jsx'
import Chat from './components/chat/Chat.jsx'

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);

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
      {/* <SignIn /> */}
      <Chat />
      {/* <Maps location={location} zoomLevel={17} /> */}
    </div>
  );

}



    // const location = {
    //   address: '1600 Amphitheatre Parkway, Mountain View, california.',
    //   lat: 37.42216,
    //   lng: -122.08427,
    // } // our location object from earlier


