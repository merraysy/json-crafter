import React, { Component } from 'react';

class ActionsItem extends Component {
  render() {
    const { color, symbol, clickHandler } = this.props;

    return (
      <li className="actions-item">
        <a href="#" className={`add-btn btn btn-${color} btn-sm`} onClick={clickHandler} dangerouslySetInnerHTML={{ __html: symbol }}></a>
      </li>
    );
  }
}

ActionsItem.propTypes = {
  clickHandler: React.PropTypes.func,
  color: React.PropTypes.string,
  symbol: React.PropTypes.string
};

export default ActionsItem;
