import React, { Component } from 'react';

// components
import AddNav from '../AddNav';

class AddLevelItem extends Component {
  render() {
    return (
      <li className="item text-center">
        <AddNav />
        <a href="#" className="btn btn-success btn-block">+ add</a>
      </li>
    );
  }
}

export default AddLevelItem;
