import React, { Component } from 'react';

// components
import { MenuItem, SplitButton } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>JSON Craftman!</h1>

        <SplitButton title="Test React Bootstrap" pullRight id="split-dropdown">
          <MenuItem eventKey="1">It works!</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Let's do this.</MenuItem>
        </SplitButton>
      </div>
    );
  }
} // end-App

export default App;
