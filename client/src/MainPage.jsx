import React, {useState, useEffect } from 'react';
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './components/sideBar/listItems.jsx';

import Feed from './components/feed/Feed.jsx'
import Maps from './components/maps/Maps.jsx'
import Chat from './components/chat/Chat.jsx'

const drawerWidth = 240;

export default function MainPage({userProfile, pakData, chatData, feedData, downloadComplete, theme}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [showMaps, setShowMaps] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [postProfiles, setPostProfiles] = useState({});
  const [chatProfiles, setChatProfiles] = useState({});

    // const location = {
    //   lat: 37.42216,
    //   lng: -122.08427,
    // }


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleNavBarClick = (event) => {
    console.log(event.target.innerHTML)
    console.log('feed data in main page is', feedData)
    const widgetChosen = event.target.innerHTML;

    if(widgetChosen === 'Explore') {
      setShowChat(false);
      setShowFeed(false);
      setShowMaps(true);
    } else if (widgetChosen === 'Chat') {
      setShowFeed(false);
      setShowMaps(false);
      setShowChat(true);
    } else if (widgetChosen === 'Home') {
      setShowMaps(false);
      setShowChat(false);
      setShowFeed(true);
    }

  }


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="00796b"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainListItems buttonClick={handleNavBarClick}/>
          </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {showFeed && downloadComplete ? <Feed feedProfiles={postProfiles} feedData={feedData} posts={feedData.posts} userProfile={userProfile} theme={theme}/> : null}
        {showMaps ? <Maps /> : null}
        {showChat ? <Chat /> : null}
      </main>
    </div>
  );
}

///////////////////////////////////////////////////


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
    background: 'blue',
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
  fixedHeight: {
    height: 240,
  },

}));

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
