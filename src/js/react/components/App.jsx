import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoList from '_containers/TodoList/TodoList';
import Navbar from '_components/Navbar/Navbar';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillUpdate() {
    console.log("Component is about ot update");
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="App-wrapper">
          <Route exact path="/" render={(props) => {
            return (<TodoList header="Active" completed={false} />);
          }} />
          <Route path="/completed" render={(props) => {
            return (<TodoList header="Completed" completed />);
          }} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;