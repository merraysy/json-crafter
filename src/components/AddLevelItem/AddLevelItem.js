import React, { Component } from 'react';

// components
import AddNav from '../AddNav';

// css
import './AddLevelItem.css';

class AddLevelItem extends Component {
  render() {
    return (
      <li className="item add-level-item text-center">
        <AddNav {...this.props} />
        <div className="field">add</div>
      </li>
    );
  }
}

export default AddLevelItem;
