import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.min.css';
import 'react-mdl/extra/material.js';
import './App.css';
import OrderContainer from './Containers/OrderContainer'

class App extends Component {

  render() {
    return (
      <div>
          <OrderContainer />
      </div>
    );
  }
}

export default App;
