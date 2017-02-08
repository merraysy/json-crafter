import React, { Component } from 'react';

// components
import ActionsItem from './ActionsItem';

// css
import './ActionsNav.css';

// utils
import { addKeys } from '../../utils';

class ActionsNav extends Component {
  render() {
    const { type } = this.props.item;
    let btns = [];
    if (type === 'object' || type === 'array') {
      btns.push(<ActionsItem color="success" symbol="&rarr;" {...this.props} />);
    }
    btns.push(<ActionsItem color="danger" symbol="&times;" {...this.props} />);

    return (
      <nav className="actions-nav">
        <ul className="actions-list list-unstyled">
          {addKeys(btns)}
        </ul>
      </nav>
    );
  }
}

export default ActionsNav;
