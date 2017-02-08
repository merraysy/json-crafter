import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { treeActions } from '../../actions';

// components
import Level from '../../components/Level';

// css
import './Tree.css';

// utils
import { addKeys, genId } from '../../utils';

class Tree extends Component {
  constructor(props) {
    super(props);

    // bind `this`
    this.addLevelItem = this.addLevelItem.bind(this);
    this.getLevelItems = this.getLevelItems.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.removeLevelItem = this.removeLevelItem.bind(this);
  } // end-constructor

  getLevelItems(parentId) {
    return this.props.items.filter((item) => {
      return item.parentId === parentId;
    });
  } // end-getLevelItems

  startEditing(id) {
    this.props.dispatch(treeActions.startEditing(id));
  } // end-startEditing

  addLevelItem(type, parentId) {
    const item = {
      id: genId(),
      name: 'no_name',
      value: '',
      type,
      parentId
    };
    this.props.dispatch(treeActions.addItem(item));
    // this.startEditing();
  } // end-addLevelItem

  removeLevelItem(id) {
    this.props.dispatch(treeActions.removeItem(id));
  } // end-removeLevelItem

  render() {
    const levels = this.props.levels.map((level) => {
      return <Level
        addLevelItem={this.addLevelItem}
        removeLevelItem={this.removeLevelItem}
        items={this.getLevelItems(level.parentId)}
        isEditing={this.props.isEditing}
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
    items: state.tree.get('items').toJS(),
    levels: state.tree.get('levels').toJS(),
    isEditing: state.tree.get('isEditing')
  };
};

export default connect(mapStateToProps)(Tree);
