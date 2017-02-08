import React, { Component } from 'react';

class ItemRead extends Component {
  render() {
    const { color, name, typeSymbol } = this.props;
    return (
      <span className="read">{name} <span className={`label label-${color}`}>{typeSymbol}</span></span>
    );
  }
}

ItemRead.propTypes = {
  color: React.PropTypes.string,
  name: React.PropTypes.string,
  typeSymbol: React.PropTypes.string
};

export default ItemRead;
