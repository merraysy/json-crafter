import React, { Component } from 'react';

// components
import ItemEdit from './ItemEdit';
import ItemRead from './ItemRead';
import ActionsNav from '../ActionsNav';

// css
import './Item.css';

class Item extends Component {
  render() {
    return (
      <li className="item">
        <div className="content panel panel-default">
          <div className="panel-body">
            <ItemRead {...this.props} />
            <ItemEdit {...this.props} />
          </div>
        </div>

        <ActionsNav />
      </li>
    );
  }
}

export default Item
