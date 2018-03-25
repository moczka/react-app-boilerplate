import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TodoList from '_components/TodoList/TodoList';

function mapStateToProps(state, containerProps) {
  return {
      header: containerProps.header,
      todos: state.todos.filter((todo) => (todo.completed === containerProps.completed))
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    onDeleteTodo(id) {
      return ((e) => {
        dispatch({type: 'REMOVE_TODO', payload: {id}});
      });
    },
    onCompleteTodo(id) {
      return ((e) => {
        dispatch({type: 'COMPLETE_TODO', payload: {id}});
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);