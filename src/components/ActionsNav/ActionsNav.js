import React, { Component } from 'react';

// components
import ActionsItem from './ActionsItem';

// css
import './ActionsNav.css';

// utils
import { addKeys } from '../../utils';

class ActionsNav extends Component {
  render() {
    const { closeItem, closeSibling, openItem, removeLevelItem } = this.props;
    const { index: levelIndex } = this.props.level;
    const { id, isOpened, hasChildren, type, parentId } = this.props.item;
    const removeClickHandler = (e) => {
      e.preventDefault();
      removeLevelItem(id);
    };
    const openClickHandler = (e) => {
      e.preventDefault();
      closeSibling(parentId, levelIndex);
      openItem(this.props.item, levelIndex);
    };
    const closeClickHandler = (e) => {
      e.preventDefault();
      closeItem(this.props.item, levelIndex);
    };
    // set action btns
    let btns = [];
    if (type === 'object' || type === 'array') {
      if (isOpened) {
        btns.push(<ActionsItem
          color="default"
          symbol="&larr;"
          clickHandler={closeClickHandler} />);
      } else {
        btns.push(<ActionsItem
          color="success"
          symbol="&rarr;"
          clickHandler={openClickHandler} />);
      }
    }
    if (!hasChildren) {
      btns.push(<ActionsItem
        color="danger"
        symbol="&times;"
        clickHandler={removeClickHandler} />);
    }

    return (
      <nav className="actions-nav">
        <ul className="actions-list list-unstyled">
          {addKeys(btns)}
        </ul>
      </nav>
    );
  }
}

export default ActionsNav;
