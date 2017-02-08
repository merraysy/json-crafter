import React, { Component } from 'react';

class AddNavItem extends Component {
  render() {
    const { color, typeSymbol, typeName } = this.props;
    return (
      <li className={`add-item ${typeName ? typeName : ''}`}><a href="#" className={`btn btn-xs btn-${color}`}>{typeSymbol}</a></li>
    );
  }
}

AddNavItem.propTypes = {
  color: React.PropTypes.string,
  typeName: React.PropTypes.string,
  typeSymbol: React.PropTypes.string,
};

export default AddNavItem;
