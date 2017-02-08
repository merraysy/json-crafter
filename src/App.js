import React, { Component } from 'react';

// containers
import Tree from './containers/Tree';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>JSON Craftman!</h1>
        </div>

        <Tree />
      </div>
    );
  }
} // end-App

export default App;
