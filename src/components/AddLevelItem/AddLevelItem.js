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
        <a href="#" className="btn btn-success btn-block">+ add</a>
      </li>
    );
  }
}

export default AddLevelItem;
