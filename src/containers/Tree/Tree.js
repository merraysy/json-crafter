import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { treeActions } from '../../actions';

// components
import Level from '../../components/Level';

// css
import './Tree.css';

// utils
import { addKeys } from '../../utils';

class Tree extends Component {
  constructor(props) {
    super(props);

    // bind `this`
    this.addLevelItem = this.addLevelItem.bind(this);
    this.getLevelItems = this.getLevelItems.bind(this);
  } // end-constructor

  addLevelItem(type, parentId) {
    const item = {
      id: 'randomId',
      name: '',
      value: '',
      type,
      parentId
    };
    this.props.dispatch(treeActions.addItem(item));
  } // end-addLevelItem

  getLevelItems(parentId) {
    return this.props.items.filter((item) => {
      return item.parentId === parentId;
    });
  } // end-getLevelItems

  render() {
    const levels = this.props.levels.map((level) => {
      return <Level
        addLevelItem={this.addLevelItem}
        items={this.getLevelItems(level.parentId)}
        parentId={level.parentId} />;
    });

    return (
      <nav className="tree">
        {addKeys(levels)}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.tree.items,
    levels: state.tree.levels
  };
};

export default connect(mapStateToProps)(Tree);
