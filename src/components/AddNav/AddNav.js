import React, { Component } from 'react';

// components
import AddNavItem from './AddNavItem';

// css
import './AddNav.css';

class AddNav extends Component {
  render() {
    return (
      <nav className="add-nav">
        <ul className="add-list list-unstyled">
          <AddNavItem color="default" typeSymbol="A-Z" />
          <AddNavItem color="primary" typeSymbol="0-9" />
          <AddNavItem color="success" typeSymbol="Bool" />
          <AddNavItem color="warning" typeSymbol="{...}" />
          <AddNavItem color="danger" typeSymbol="[...]" />
        </ul>
      </nav>
    );
  }
}

export default AddNav
