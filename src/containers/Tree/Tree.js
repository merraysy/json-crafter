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
    this.endEditing = this.endEditing.bind(this);
    this.getLevelItems = this.getLevelItems.bind(this);
    this.openItem = this.openItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
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

  endEditing(id) {
    this.props.dispatch(treeActions.endEditing(id));
  } // end-endEditing

  addLevelItem(type, parentId) {
    const id = genId();
    const item = {
      id,
      name: '',
      value: '',
      isEditing: true,
      type,
      parentId
    };
    this.props.dispatch(treeActions.addItem(item));
    this.startEditing(id);
  } // end-addLevelItem

  removeLevelItem(id) {
    this.props.dispatch(treeActions.removeItem(id));
  } // end-removeLevelItem

  saveItem(data) {
    this.props.dispatch(treeActions.saveItem(data));
  } // end-saveItem

  openItem(id) {
    this.props.dispatch(treeActions.openItem(id));
  } // end-openItem

  render() {
    const levels = this.props.levels.map((level) => {
      return <Level
        addLevelItem={this.addLevelItem}
        endEditing={this.endEditing}
        items={this.getLevelItems(level.parentId)}
        openItem={this.openItem}
        level={level}
        removeLevelItem={this.removeLevelItem}
        startEditing={this.startEditing}
        saveItem={this.saveItem} />;
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
    levels: state.tree.get('levels').toJS()
  };
};

export default connect(mapStateToProps)(Tree);
