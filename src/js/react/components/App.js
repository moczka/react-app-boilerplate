import React from 'react';
import Title from '_components/Title/Title.js';
import ReactLogo from '_assets/react-icon.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title text="Hello Javier!"/>
        <img src={ReactLogo} />
        <div className="container u-clearFix">
          <div className="container-first"></div>
          <div className="container-second"></div>
        </div>
      </div>
    );
  }
}

export default App;