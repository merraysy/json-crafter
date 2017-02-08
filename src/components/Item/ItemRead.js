import React, { Component } from 'react';

// constants
import { itemTypes } from '../../constants';

class ItemRead extends Component {
  render() {
    const { name, type } = this.props.item;
    return (
      <span className="read">{name} <span className={`label label-${itemTypes[type].color}`}>{itemTypes[type].symbol}</span></span>
    );
  }
}

ItemRead.propTypes = {
  color: React.PropTypes.string,
  name: React.PropTypes.string,
  typeSymbol: React.PropTypes.string
};

export default ItemRead;
