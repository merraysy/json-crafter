import React, { Component } from 'react';

// components
import AddLevelItem from '../AddLevelItem';
import Item from '../Item';

// css
import './Level.css';

// utils
import { addKeys } from '../../utils';

class Level extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return <Item {...item} />;
    });

    return (
      <ul className="level list-unstyled">
        {addKeys(items)}

        <AddLevelItem {...this.props} />
      </ul>
    );
  }
}

Level.propTypes = {
  items: React.PropTypes.array
}

export default Level;
