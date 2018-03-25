import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TodoList from '_components/TodoList/TodoList';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state, containerProps) {
  return {
      header: containerProps.header,
      todos: state.todos.filter((todo) => (todo.completed === containerProps.completed))
  };
}

export default connect(mapStateToProps)(TodoList);