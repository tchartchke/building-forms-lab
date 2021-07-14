import React from 'react'

const Band = props => {

  return (
    <div>
      {props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
    </div>
  );
};

export default Band;