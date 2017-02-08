import React, { Component } from 'react';

class AddNavItem extends Component {
  render() {
    const { addLevelItem, color, typeSymbol, typeName, parentId } = this.props;
    const clickHandler = (e) => {
      e.preventDefault();
      addLevelItem(typeName, parentId);
    };

    return (
      <li className={`add-item ${typeName ? typeName : ''}`}>
        <a href="#" className={`btn btn-xs btn-${color}`} onClick={clickHandler}>{typeSymbol}</a>
      </li>
    );
  }
}

AddNavItem.propTypes = {
  addLevelItem: React.PropTypes.func,
  color: React.PropTypes.string,
  typeName: React.PropTypes.string,
  typeSymbol: React.PropTypes.string
};

export default AddNavItem;
