import React from 'react';
import PropTypes from 'prop-types';
export default function Greeting(props) {
  return (
    <h1>Hello,{props.name}!,ht-{props.ht}</h1>

  );
}
Greeting.propTypes={
    name:PropTypes.string.isRequired,
    ht:PropTypes.string.isRequired
};
