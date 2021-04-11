import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './Maps.module.css';
import Api from '../../../../config.js'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import Marker from './Marker.jsx'

const Map = ({profiles, photos}) => {
  const [center, setCenter] = useState({lat: 47.670521, lng: -122.342198 });
  const [zoom, setZoom] = useState(15);


  return (
      <div className={classes.map}>
    <h2 className={classes.map_h2}></h2>

    <div className={classes.google_map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: Api.key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {profiles.map( (doggo, index) => (
          <Marker
          lat={doggo.currentLoc.latitude}
          lng={doggo.currentLoc.longitude}
          text={doggo.petsInfo.name}
          />
        )) }

      </GoogleMapReact>
    </div>
  </div>
  )


}

export default Map;
