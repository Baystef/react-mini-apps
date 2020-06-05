import React from 'react';

const Spinner = ({ message }) => {
  return (
  <div className="ui active dimmer">
    <div className="ui text loader">{message}</div>
  </div>
  );
}

// Sets a default property on the component
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
