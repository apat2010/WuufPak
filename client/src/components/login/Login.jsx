import React, { Suspense, useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx'

const getModalStyle = () => {
  return {top: `${50}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`,
      borderRadius: `20px`
    }

};

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

  },
}));


export default function Login({loggedIn}) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle());

  const openSignUp = () => {
    setShowSignUp(true);
  }
  const closeSignUp = () => {
  }


  return (
    <div >
     <SignIn signInClicked={loggedIn} signUpClicked={openSignUp}/>
      <Modal
      open={showSignUp}
      onClose={closeSignUp}
      >
        <div style={modalStyle} className={classes.paper}>
          <SignUp closeSignUp={loggedIn} />
        </div>
      </Modal>
    </div>
  );

}