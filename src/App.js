import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Blog from './components/Blog';
// import Landing from './components/Landing';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  };

  render() {
    return (
      <div className="App">
        <Navbar/>

        <Footer />
      </div>
    );
  }
}

export default App;
