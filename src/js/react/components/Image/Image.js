import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt}/>
  );
};
Title.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;