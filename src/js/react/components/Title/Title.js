import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = (props) => {
  return (
    <h1 className="Title">{props.text}</h1>
  );
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;