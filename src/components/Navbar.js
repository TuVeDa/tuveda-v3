import React, { Component } from 'react';

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Tuveda</a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="words">Blog</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>
      </nav>
    )
  }
}

export default Navbar;
