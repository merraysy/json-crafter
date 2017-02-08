import React, { Component } from 'react';

// components
import ActionsItem from './ActionsItem';

// css
import './ActionsNav.css';

class ActionsNav extends Component {
  render() {
    return (
      <nav className="actions-nav">
        <ul className="actions-list list-unstyled">
          <ActionsItem color="success" typeSymbol="&plus;" />
          <ActionsItem color="danger" typeSymbol="&times;" />
        </ul>
      </nav>
    );
  }
}

export default ActionsNav;
