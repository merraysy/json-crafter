import React, { Component } from 'react';

// components
import AddNavItem from './AddNavItem';

// constants
import { itemTypes } from '../../constants';

// css
import './AddNav.css';

// utils
import { addKeys } from '../../utils';

class AddNav extends Component {
  render() {
    let types = [];
    for (let name in itemTypes) {
      if (itemTypes.hasOwnProperty(name)) {
        const itemType = itemTypes[name];
        types.push(<AddNavItem
          {...this.props}
          color={itemType.color}
          typeName={itemType.name}
          typeSymbol={itemType.symbol} />);
      }
    }

    return (
      <nav className="add-nav">
        <ul className="add-list list-unstyled">
          {addKeys(types)}
        </ul>
      </nav>
    );
  }
}

export default AddNav
