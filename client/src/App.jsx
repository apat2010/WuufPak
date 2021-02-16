import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';


import MainPage from './MainPage.jsx'
import Login from './components/login/Login.jsx'
import Header from './components/Header/Header.jsx'

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [pakData, setPakData] = useState({});
  const [feedData, setFeedData] = useState({});
  const [chatData, setChatData] = useState({});
  const [postProfiles, setPostProfiles] = useState({});
  const [chatProfiles, setChatProfiles] = useState({});
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    axios.get('/api/user')
      .then((response) => {
        console.log(response.data.user)
        setUserProfile(response.data.user)
        const wuufPakIds = response.data.user.wuufPakIds
        axios.get(`/api/pak/${wuufPakIds}`)
          .then((response)=> {
            console.log(response.data)
            setPakData(response.data)
          });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffd95b',
        main: '#ffa726',
        dark: '#c77800',
        contrastText: '#000000',
      },
      secondary: {
        light: '#48a999',
        main: '#00796b',
        dark: '#004c40',
        contrastText: '#ffffff',
      },
    },
  });

  const handleLogin = () => {
    setShowLogin(false);
    const userId = userProfile.id;
    const wuufPakIds = userProfile.wuufPakIds;

    axios.get(`/api/feed/${userId}`)
    .then((response) => {
      console.log('feed data os',response.data)
      setFeedData(response.data)

      let posts = response.data.posts;
      let postProfiles = [];
        posts.map( (post) => {
          postProfiles.push(post.profileId)
        });

      axios.get(`/api/chat/${wuufPakIds}`)
      .then((response) => {
      setChatData(response.data)

      let chats = response.data;
      console.log('chats are', chats)
      let chatProfiles = [];
      chats.map( (item) => {
        for (var i = 0; i < item.conversation.length; i++) {
          chatProfiles.push(item.conversation[i].profileId)
        }
      });

      console.log('postProfiles are and chat profiles are', postProfiles, chatProfiles)

      axios.get(`/api/feedProfiles/${postProfiles}`)
      .then((response) => {
        console.log(response.data)
        setPostProfiles(response.data)

        axios.get(`/api/chatProfiles/${chatProfiles}`)
        .then((response) => {
          console.log(response.data)
          setChatProfiles(response.data)
        })
      })
      .then (() => {
        setDownloadComplete(true);
      })
      .catch((error) => {
        throw new Error(error);
      });
      })
    })
   }


    const location = {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    } // our location object from earlier
  return (
    <div>
     {showLogin ? <Login loggedIn={handleLogin} theme={theme}/> : null}
     {!showLogin ? <MainPage userProfile={userProfile} pakData={pakData} chatData={chatData} feedData={feedData} postProfiles={postProfiles} chatProfiles={chatProfiles}downloadComplete={downloadComplete} theme={theme}/> : null}
     {/* <Chat /> */}
     {/* <Maps location={location} zoomLevel={17} /> */}
     {/* <Feed /> */}
    </div>
  );

}


