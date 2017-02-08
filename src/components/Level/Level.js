import React, { Component } from 'react';

// components
import AddLevelItem from '../AddLevelItem';
import Item from '../Item';

// css
import './Level.css';

class Level extends Component {
  render() {
    return (
      <ul className="level list-unstyled">
        <Item />

        <AddLevelItem />
      </ul>
    );
  }
}

export default Level;
