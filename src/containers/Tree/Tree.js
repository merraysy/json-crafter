import React, { Component } from 'react';
import { connect } from 'react-redux';
import fileDownload from 'react-file-download';

// actions
import { treeActions } from '../../actions';

// components
import Header from '../../components/Header';
import Level from '../../components/Level';

// css
import './Tree.css';

// utils
import { addKeys, buildTree, genId } from '../../utils';

class Tree extends Component {
  constructor(props) {
    super(props);

    this._saveTimeout = null;

    // bind `this`
    this.addLevelItem = this.addLevelItem.bind(this);
    this.closeItem = this.closeItem.bind(this);
    this.closeSibling = this.closeSibling.bind(this);
    this.endEditing = this.endEditing.bind(this);
    this.generate = this.generate.bind(this);
    this.getLevelItems = this.getLevelItems.bind(this);
    this.openItem = this.openItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.removeLevelItem = this.removeLevelItem.bind(this);
  } // end-constructor

  componentDidUpdate() {
    clearTimeout(this._saveTimeout);
    this._saveTimeout = setTimeout(() => {
      this.props.dispatch(treeActions.save());
    }, 2000);
  } // end-componentDidUpdate

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
    let item = {
      id,
      name: '',
      isEditing: true,
      type,
      parentId
    };
    if (type === 'object' || type === 'array') {
      item.isOpened = false;
      item.hasChildren = false;
    } else if (type === 'boolean') {
      item.value = false;
    } else {
      item.value = '';
    }
    this.props.dispatch(treeActions.addItem(item));
    this.startEditing(id);
    this.props.dispatch(treeActions.change());
  } // end-addLevelItem

  removeLevelItem(id) {
    this.props.dispatch(treeActions.removeItem(id));
    this.props.dispatch(treeActions.change());
  } // end-removeLevelItem

  saveItem(data) {
    this.props.dispatch(treeActions.saveItem(data));
    this.props.dispatch(treeActions.change());
  } // end-saveItem

  openItem(item, levelIndex) {
    this.props.dispatch(treeActions.openItem(item, levelIndex));
  } // end-openItem

  closeItem(item, levelIndex) {
    this.props.dispatch(treeActions.closeItem(item, levelIndex));
  } // end-closeItem

  closeSibling(parentId, levelIndex) {
    this.props.dispatch(treeActions.closeSibling(parentId, levelIndex));
  } // end-closeSibling

  generate() {
    fileDownload(JSON.stringify(buildTree(this.props.items), null, '\t'), 'json_craftman.json');
  } // end-generate

  render() {
    const levels = this.props.levels.map((level) => {
      return <Level
        addLevelItem={this.addLevelItem}
        closeItem={this.closeItem}
        closeSibling={this.closeSibling}
        endEditing={this.endEditing}
        items={this.getLevelItems(level.parentId)}
        openItem={this.openItem}
        level={level}
        removeLevelItem={this.removeLevelItem}
        startEditing={this.startEditing}
        saveItem={this.saveItem} />;
    });

    return (
      <div className="container">
        <Header
          generate={this.generate}
          isSaved={this.props.isSaved} />
        <nav className="tree">
          {addKeys(levels)}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.tree.get('items').toJS(),
    levels: state.tree.get('levels').toJS(),
    isSaved: state.tree.get('isSaved')
  };
};

export default connect(mapStateToProps)(Tree);
