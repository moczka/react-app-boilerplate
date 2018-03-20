import React from 'react';
import Title from '_components/Title/Title.js';
import ReactLogo from '_assets/react-icon.png';
import { Modal, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
    this.toggleModal = () => {
      this.setState((state) => ({isOpen: !state.isOpen}));
    };
  }
  componentWillUpdate() {
    console.log("COmponent is about ot update");
  }
  render() {
    const {pages} = this.props;
    return (
      <div>
        <Title text="Hello Javier!"/>
        <img src={ReactLogo} />
        <div className="container u-clearFix">
          <div className="container-first"></div>
          <div className="container-second"></div>
          <Button onClick={this.toggleModal}>Click Me!</Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Hello world!!!!</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;