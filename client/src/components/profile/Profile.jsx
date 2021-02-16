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
import clsx from 'clsx'
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Bullet from '../avatars/Bullet.png';
import Scout from '../avatars/Scout.png'
import Milo from '../avatars/Milo.png'
import Betty from '../avatars/Betty.png'
import Penny from '../avatars/Penny.png'
import Zion from '../avatars/Milo.png'
import Arty from '../avatars/Betty.png'
import LayersIcon from '@material-ui/icons/Layers';


export default function Profile({userProfile}) {
  const classes = useStyles();
  console.log(userProfile)

return (
  <Grid container >
    <Grid item>
      <img src={Bullet} className={classes.profilePic}></img>
    </Grid>
    <Grid >
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={userProfile.petsInfo.name} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={`${userProfile.petsInfo.age} y/o`} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={userProfile.petsInfo.breed} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={`Energy: ${userProfile.petsInfo.energyLvl}`} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={`${userProfile.city}, ${userProfile.state}`} />
    </ListItem>
    </Grid>

    </Grid>

)

}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

  container: {
    background: 'blue',
    flexDirection: 'colum',
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
    height: 200,
    width: 200,
    borderRadius: '50%'
  },
  fixedHeight: {
    height: 240,
  },
  userInfo: {
    height:'100vh',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: 'red'
  }
}));