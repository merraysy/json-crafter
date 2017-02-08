import React from 'react';

export default (list) => {
  return list.map((item, i) => {
    return React.cloneElement(item, { key: i });
  });
};
