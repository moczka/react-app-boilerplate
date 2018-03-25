import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <span>{props.date}</span>
      <p>{props.description}</p>
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Todo;