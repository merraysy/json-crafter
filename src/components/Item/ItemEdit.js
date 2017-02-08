import React, { Component } from 'react';

class ItemEdit extends Component {
  render() {
    const { typeName } = this.props;
    let valueInput;
    switch (typeName) {
      case 'string':
        valueInput = <input className="form-control" type="text" name="value" placeholder="Foo" />
        break;
      case 'number':
        valueInput = <input className="form-control" type="number" name="value" placeholder="123" />
        break;
      case 'boolean':
        valueInput = <div className="checkbox"><label><input type="checkbox" name="value" />Boolean</label></div>
        break;
      default:
        // NA
    }
    return (
      <form className="edit">
        <div className="form-group">
          <input className="form-control" type="text" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          {valueInput}
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    );
  }
}

// ItemEdit.propTypes = {
//   typeName: React.PropTypes.string
// };

export default ItemEdit;
