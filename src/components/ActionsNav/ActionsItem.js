import React, { Component } from 'react';

class ActionsItem extends Component {
  render() {
    const { color, symbol, removeLevelItem } = this.props;
    const { id } = this.props.item;
    const clickHandler = (e) => {
      e.preventDefault();
      removeLevelItem(id);
    };

    return (
      <li className="actions-item">
        <a href="#" className={`add-btn btn btn-${color} btn-sm`} onClick={clickHandler} dangerouslySetInnerHTML={{ __html: symbol }}></a>
      </li>
    );
  }
}

ActionsItem.propTypes = {
  color: React.PropTypes.string,
  symbol: React.PropTypes.string
};

export default ActionsItem;
