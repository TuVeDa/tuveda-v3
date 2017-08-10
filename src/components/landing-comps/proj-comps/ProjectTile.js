import React, { Component } from 'react';

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  };

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    return (
      <div
        className={this.state.active && !this.state.selected ?
          'project-inactive col-sm-4' :
          'project-active col-sm-4'
        }>
        <img
          id={this.state.id}
          className='project-pic'
          src='img/grey-placeholder.png'
          alt={this.state.id}
          onClick={(e) => this.props.handleClick(e)}
        />
        <p className='project-title'>PROJECT</p>
      </div>
    )
  }
}

export default ProjectTile;
