import React, { Component } from 'react';

// css
import './Header.css';

class Header extends Component {
  render() {
    const clickHandler = (e) => {
      e.preventDefault();
      this.props.generate();
    };
    
    return (
      <div className="page-header row">
        <div className="col-sm-6">
          <h1 className="title">JSON Craftman!</h1>
        </div>

        <div className="col-sm-6 text-right">
          <a className="btn btn-primary" onClick={clickHandler}>generate</a>
        </div>
      </div>
    );
  }
}

export default Header;
