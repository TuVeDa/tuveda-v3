import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    return (
      <div className="App">
        <Navbar/>

        <div className="content">
          <Landing />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
