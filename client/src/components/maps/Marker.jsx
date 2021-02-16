import React from 'react';
import classes from './Maps.module.css';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Marker = ({picture, text}) => {
    return (
      <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>

      // <div>
      //   <img
      //     className={classes.pic}
      //     title={name}
      //     src={picture}
      //   />
      // </div>
    );
  };

  export default Marker;