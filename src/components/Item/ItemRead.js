import React, { Component } from 'react';

// constants
import { itemTypes } from '../../constants';

class ItemRead extends Component {
  render() {
    const { startEditing } = this.props;
    const { id, name, type } = this.props.item;
    const clickHandler = (e) => {
      e.preventDefault();
      startEditing(id);
    };

    return (
      <span className="read" onClick={clickHandler}>
        {name}
        <span className={`label label-${itemTypes[type].color}`}>{itemTypes[type].symbol}</span>
      </span>
    );
  }
}

ItemRead.propTypes = {
  color: React.PropTypes.string,
  name: React.PropTypes.string,
  typeSymbol: React.PropTypes.string
};

export default ItemRead;
