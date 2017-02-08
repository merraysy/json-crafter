import React, { Component } from 'react';

class ItemEdit extends Component {
  render() {
    const { endEditing, saveItem } = this.props;
    const { id, name, type, value } = this.props.item;
    const changeHandler = (e) => {
      saveItem({
        id,
        [e.target.name]: (type === 'boolean' && e.target.name === 'value') ? !value : e.target.value
      });
    };
    const doneClickHandler = (e) => {
      e.preventDefault();
      endEditing(id);
    };
    // set value form input
    let valueInput;
    switch (type) {
      case 'string':
        valueInput = <input
          className="form-control"
          type="text"
          name="value"
          placeholder="Foo"
          value={value}
          onChange={changeHandler} />
        break;
      case 'number':
        valueInput = <input
          className="form-control"
          type="number"
          name="value"
          placeholder="123"
          value={value}
          onChange={changeHandler} />
        break;
      case 'boolean':
        console.log(value);
        valueInput = <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="value"
              onChange={changeHandler}
              checked={value} />
            Truthy
          </label>
        </div>
        break;
      default:
        // NA
    }

    return (
      <form name="edit-form" onSubmit={doneClickHandler}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={changeHandler} />
        </div>
        <div className="form-group">
          {valueInput}
        </div>
        <button type="submit" className="btn btn-success">Done</button>
      </form>
    );
  }
}

ItemEdit.propTypes = {
  item: React.PropTypes.object,
  saveItem: React.PropTypes.func
};

export default ItemEdit;
