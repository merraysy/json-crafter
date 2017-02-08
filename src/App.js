import React, { Component } from 'react';

// containers
import Tree from './containers/Tree';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>JSON Craftman!</h1>

        <Tree />
      </div>
    );
  }
} // end-App

export default App;
