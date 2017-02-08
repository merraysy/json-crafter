import React, { Component } from 'react';

class ActionsItem extends Component {
  render() {
    const { color, typeSymbol } = this.props;
    const typeSymbolHTML = { __html: typeSymbol }
    return (
      <li className="actions-item"><a href="#" className={`add-btn btn btn-${color} btn-sm`} dangerouslySetInnerHTML={typeSymbolHTML}></a></li>
    );
  }
}

ActionsItem.propTypes = {
  color: React.PropTypes.string,
  typeSymbol: React.PropTypes.string
};

export default ActionsItem;
