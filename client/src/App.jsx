/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from '../axios';

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


    return (
      <div>
        Hi from App
      </div>
    );
  }
}

export default App;
