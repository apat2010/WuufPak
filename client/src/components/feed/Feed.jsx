import React, { Suspense, useState, useEffect } from 'react';
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
import classes from './Feed.module.css'
import clsx from 'clsx'
import Container from '@material-ui/core/Container';
import UserPost from './UserPost.jsx';
import Profile from '../profile/Profile.jsx';
import Bullet from '../avatars/Bullet.png';
import Scout from '../avatars/Scout.png'
import Milo from '../avatars/Milo.png'
import Betty from '../avatars/Betty.png'
import Penny from '../avatars/Penny.png'
import Zion from '../avatars/Milo.png'
import Arty from '../avatars/Betty.png'
import LayersIcon from '@material-ui/icons/Layers';





const getModalStyle = () => {
  return {top: `${50}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`,
      borderRadius: `20px`
    }

};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: .75,
    height: '100vh',
    overflow: 'auto',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: theme.palette.primary.light,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  rightBar: {
    background: 'green'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  profilePic: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 150,
    width: 150,
  },
  fixedHeight: {
    height: 240,
  },
  posts: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: '100%',
    background: theme.palette.primary.light,
    justify: 'flex-start'
  },
  userInfo: {
    height:'100vh',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: theme.palette.primary.light,
  }
}));
const drawerWidth = 240;

export default function Feed({feedProfiles, feedData, posts, userProfile, theme}) {
  const photos = [Bullet, Scout, Milo, Betty, Penny, Zion, Arty]
  const names = ['Bullet', 'Scout', 'Milo', 'Betty', 'Penny', 'Zion', 'Arty']

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Container maxWidth="lg" className={classes.container} >
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={4} lg={3} className={classes.userInfo} >
          <Paper >
            <Grid item xs={2} md={2} >
              <Profile userProfile={userProfile}/>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} lg={8} className={classes.posts}>
          <Paper className={classes.paper}>
            Deposits
          </Paper>
          {posts.map( (post, index) =>
             <UserPost post={post} image={photos[index]} name={names[index]}/>
          )}

        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
  </Container>

  );

}