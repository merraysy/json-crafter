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
        <div className="content panel panel-success">
          {
            (this.props.item.isOpened)
            ? <div className="panel-heading">Opened</div>
            : ''
          }

          <div className="panel-body">
            {
              (!this.props.item.isEditing)
              ? <ItemRead {...this.props} />
              : <ItemEdit {...this.props} />
            }
          </div>
        </div>

        {
          (!this.props.item.isEditing)
          ? <ActionsNav {...this.props} />
          : ''
        }
      </li>
    );
  }
}

export default Item
