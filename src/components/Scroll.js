import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;