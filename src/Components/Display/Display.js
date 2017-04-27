import React from 'react';
//import css;

export default ({gif}) => (
  <div className="container">
    <div className="image-wrapper">
      <img src={gif} alt="giphy" />
    </div>
  </div>
);