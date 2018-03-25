import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddTodo from '_components/AddTodo/AddTodo';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state, containerProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo(payload) {
      dispatch({type: 'ADD_TODO', payload});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);