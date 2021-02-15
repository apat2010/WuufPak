/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from '../axios';
import Maps from './components/maps/Maps.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  componentDidMount() {
    // axios.get('/')
    //   .then((response) => {
    //     this.setState({});
    //   })
    //   .catch((error) => {
    //     throw new Error(error);
    //   });
  }

  render() {

    const location = {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    } // our location object from earlier

    return (
      <div>
        <Maps location={location} zoomLevel={17} />
      </div>
    );
  }
}

export default App;
