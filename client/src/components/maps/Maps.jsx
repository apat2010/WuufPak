import React from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './Maps.module.css';
import Api from './config.js'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({ location, zoomLevel }) => (
  <div className={classes.map}>
    <h2 className={classes.map_h2}></h2>

    <div className={classes.google_map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: Api.key }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;
